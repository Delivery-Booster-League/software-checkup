import { Component, ElementRef, Output, OnChanges, ViewChild, EventEmitter, AfterViewInit,Renderer2 } from '@angular/core';
import { MindmapService } from '../../service/mindmap.service';
import { Router } from '@angular/router';
import * as d3 from 'd3';
import { Node } from '../../bean/node';
import { MindMapData } from '../../bean/mindMapData';
import { ZoomView } from 'd3';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges, AfterViewInit {

  @ViewChild('chart')
  private chartContainer: ElementRef;

  @Output() articleComponentOpened = new EventEmitter<string>();

  data: MindMapData = this.mindmapService.getMindmap();
  isPostOpened: boolean;
  postIdToOpen: string;
  margin = { top: 20, right: 20, bottom: 30, left: 40 };
  buttonState = true;
  element: any;
  drawedNodesLabels: any;
  drawedNodes: any;
  isZooming: boolean;
  drawedChart: any;
  view: ZoomView;
  focusedNode: Node;

  ngAfterViewInit(): void {
    this.element = this.chartContainer.nativeElement;
    if (!this.data) { return; }
    this.createChart('default');
  }

  constructor(private mindmapService: MindmapService, private router: Router, private renderer: Renderer2) { }

  ngOnChanges = () => {
    if (!this.data) { return; }
    this.createChart('default');
  }

  /**
   * Création du graphique de noeuds.
   * TODO -> voir si le remove et la gestion du resize sont vraiment utiles.
   */
  createChart = (openMode: string) => {
    d3.select('svg').remove();

    const element = this.chartContainer.nativeElement;
    const color = ['#64bebf', '#3dacad', '#008182', '#006d6d', '#006566', '#005455', '#004443', '#003332'];
    const isFirefox = (/Firefox/i.test(navigator.userAgent));
    const scrollEvent = isFirefox ? 'DOMMouseScroll' : 'mousewheel';
    let root: Node;

    try {
      root = this.pack(this.data, element.offsetWidth, element.offsetHeight);
      this.focusedNode = root;
    } catch (error) {
      console.error(error);
    }

    this.drawedChart = d3.select('#chart').append('svg')
      .attr('viewBox', `-${element.offsetWidth / 2} -${element.offsetHeight / 2} ${element.offsetWidth} ${element.offsetHeight}`)
      .style('display', 'block')
      .style('background', color[0])
      .style('cursor', 'pointer')
      .on('click', () => {
        if (this.isPostOpened) {
          this.zoom(this.focusedNode);
        }
      });

    this.drawedNodes = this.drawedChart.append('g')
      .selectAll('circle')
      .data(root.descendants().slice(1))
      .join('circle')
      .attr('fill', (d: Node) => color[d.depth])
      .on('mouseover', function () { d3.select(this).attr('stroke', '#000'); })
      .on('mouseout', function () { d3.select(this).attr('stroke', null); })
      .on('dblclick', null)
      .on('click', (selectedNode: Node) => {
        this.manageClickEvent(selectedNode);
      }).on(scrollEvent, (selectedNode: Node) => {
        this.manageScrollEvent(selectedNode, isFirefox);
      });

    this.drawedNodesLabels = this.drawedChart.append('g')
      .style('font', '20px sans-serif')
      .style('fill', 'white')
      .attr('pointer-events', 'none')
      .attr('text-anchor', 'middle')
      .selectAll('text')
      .data(root.descendants())
      .join('text')
      .style('font', (d: Node) => d.children ? '25px sans-serif' : '10px sans-serif')
      .style('fill', (d: Node) => d.children ? '#FDD835' : 'white')
      .style('fill-opacity', d => d === focus ? 0 : 1)
      .style('fill-opacity', (d: Node) => d.parent === this.focusedNode || !d.children ? 1 : 0)
      .text((d: Node) => d.data.name);

    this.zoomTo([root.x, root.y, root.r * 2]);
  }

  /**
   * Crée un nouveau layout de noeuds D3 avec les données en paramètre.
   */
  pack = (data: MindMapData, width: number, heigth: number) => {
    return d3.pack()
      .size([width, heigth])
      .padding(3)
      (d3.hierarchy(data)
        .sum(d => d.children ? d.children.length : 1)
        .sort((a, b) => b.value - a.value));
  }


  /**
   * Gestion du zoon lorsque l'on scroll vers un noeud de la mindmap.
   * L'evênement de scrolling qui est déclenché et la manière de définir son sens ( haut/bas)
   * diffèrent selons les navigateur.
   */
  manageScrollEvent = (selectedNode: Node, isFirefox: boolean) => {
    const isDownScrolling = isFirefox ? d3.event.detail > 0 : d3.event.wheelDelta < 0;
    if (isDownScrolling && this.focusedNode.parent) {
      this.zoom(this.focusedNode.parent);
    } else if (!isDownScrolling) {
      const nodeToZoom = selectedNode.children ? selectedNode : selectedNode.parent;
      this.zoom(nodeToZoom);
    }
  }

  /**
   *  Gestion du zoon lorsque l'on clique un noeud de la mindmap.
   */
  manageClickEvent = (selectedNode: Node) => {
    if (!selectedNode.data.children && this.focusedNode === selectedNode.parent) {
      if (!this.isZooming) {
        this.openArticleComponent(selectedNode.data.article);
      }
    } else if (!selectedNode.data.children || selectedNode === this.focusedNode) {
      this.zoom(selectedNode.parent);
    } else {
      this.zoom(selectedNode);
    }
  }
  openArticleComponent(article:any){
    this.articleComponentOpened.emit(article);

  }

  /**
   * Animation des transitions du zoom vers le noeud sélectionné et des labels de noeuds à afficher.
   */
  zoom = (focusedNode: Node) => {
    this.focusedNode = focusedNode;
    const transition = this.drawedChart.transition()
      .duration(d3.event.altKey ? 7500 : 750)
      .on('end', () => { this.isZooming = false; })
      .on('start', () => { this.isZooming = true; })
      .tween('zoom', () => {
        const i = d3.interpolateZoom(this.view, [focusedNode.x, focusedNode.y, focusedNode.r * 2]);
        return t => this.zoomTo(i(t));
      });

    this.drawedNodesLabels
      .transition(transition)
      .style('fill-opacity', d => d === this.focusedNode && d.children ? 0 : 1)
      .on('start', function(nodeLabelToTransit) {
        if (nodeLabelToTransit.parent === focusedNode) {
          this.style.display = 'inline';
        }
      })
      .on('end', function(nodeLabelToTransit: Node) {
        if (nodeLabelToTransit.parent !== focusedNode && nodeLabelToTransit.children) {
          this.style.display = 'none';
        }
      });
  }

  /**
   *
   */
  zoomTo = (view: ZoomView) => {
    this.view = view;
    const k = this.element.offsetWidth / view[2];
    this.drawedNodesLabels.attr('transform', (nodeToTransform: Node) => {
      if (nodeToTransform.children) {
        if (nodeToTransform.depth === 1) {
          return `translate(${(nodeToTransform.x - view[0]) * k - nodeToTransform.r / 2},
          ${(nodeToTransform.y - view[1]) * k - nodeToTransform.r + 25})`;
        } else {
          return `translate(${(nodeToTransform.x - view[0]) * k - nodeToTransform.r / 2},
          ${(nodeToTransform.y - view[1]) * k - nodeToTransform.r - 125})`;
        }
      } else {
        return `translate(${(nodeToTransform.x - view[0]) * k},${(nodeToTransform.y - view[1]) * k})`;
      }
    });
    this.drawedNodes.attr('transform', (nodeToTranslate: Node) =>
      `translate(${(nodeToTranslate.x - view[0]) * k},${(nodeToTranslate.y - view[1]) * k})`);
    this.drawedNodes.attr('r', (node: Node) => node.r * k);
  }


  onResize() {
    this.createChart('default');
  }

  toggleButton() {
    this.buttonState = !this.buttonState;
  }

  openAllNode() {
    this.createChart('openAll');
  }

  closeAllNode() {
    this.createChart('closeAll');
  }

  disableBodyScrolling = () => {
    this.renderer.addClass(document.body, 'scrollDisabled');
  }

  activateBodyScrolling = () => {
    this.renderer.removeClass(document.body, 'scrollDisabled');
  }

}
