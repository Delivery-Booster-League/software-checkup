import { Component, ElementRef, Output, OnChanges, ViewChild, EventEmitter, AfterViewInit } from '@angular/core';
import { MindmapService } from '../../service/mindmap.service';
import { Router } from '@angular/router';
import * as d3 from 'd3';
import { hierarchy } from 'd3';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges, AfterViewInit {


@ViewChild('chart')
private chartContainer: ElementRef;

@Output() articleComponentOpened = new EventEmitter<string>();

isPostOpened: boolean;
postIdToOpen: string;

data: any = this.mindmapService.getMindmap();

margin = { top: 20, right: 20, bottom: 30, left: 40 };
buttonState  = true;

  ngAfterViewInit(): void {
    if (!this.data) { return; }
    this.createChart('default');
  }



  constructor(private mindmapService: MindmapService, private router: Router) { }

  ngOnChanges(): void {
    if (!this.data) { return; }
    this.createChart('default');
  }

  onResize() {
    this.createChart('default');
  }

  toggleButton() {
    this.buttonState = !this.buttonState
  }

  openAllNode() {
    this.createChart('openAll');
  }

  closeAllNode() {
    this.createChart('closeAll');
  }

  private pack(data, width, heigth) {
    return d3.pack()
      .size([width, heigth])
      .padding(3)
      (d3.hierarchy(data)
        .sum(d => d.children ? d.children.lenth : 1)
        .sort((a, b) => b.value - a.value))

  }

  createChart(openMode: string): void {
    d3.select('svg').remove();

    const element = this.chartContainer.nativeElement;
    let root: any;

    try {
      root = this.pack(this.data, element.offsetWidth, element.offsetHeight);
    } catch (error) {
      console.error(error);
    }

    let zooming: boolean;
    let focus = root;
    let view;
    const color = ['#64bebf', '#3dacad', '#008182', '#006d6d', '#006566']
    const format = d3.format(',d')
    const svg = d3.select('#chart').append('svg')
      .attr('viewBox', `-${element.offsetWidth / 2} -${element.offsetHeight / 2} ${element.offsetWidth} ${element.offsetHeight}`)
      .style('display', 'block')
      .style('background', color[0])
      .style('cursor', 'pointer')
      .on('click', () => {
        if (this.isPostOpened) {
          zoom(root)
        }
      });



    // L'event scroll qui est triggered n'est pas le même selons les navigateurs
    const isFirefox = (/Firefox/i.test(navigator.userAgent));
    const scrollEvent = isFirefox ? 'DOMMouseScroll' : 'mousewheel';

    const node = svg.append('g')
      .selectAll('circle')
      .data(root.descendants().slice(1))
      .join('circle')
      .attr('fill', (d: any) => color[d.depth])
      .on('mouseover', function () { d3.select(this).attr('stroke', '#000'); })
      .on('mouseout', function () { d3.select(this).attr('stroke', null); })
      .on('dblclick', null)
      .on('click', (selectedNode: any) => {
        if (!selectedNode.data.children && focus === selectedNode.parent) {
          if (!zooming) {
            this.articleComponentOpened.emit(selectedNode.data.article);
          }
        } else if (!selectedNode.data.children || selectedNode == focus) {
          focus !== selectedNode.parent && (zoom(selectedNode.parent), d3.event.stopPropagation())
        } else {
          focus !== selectedNode && (zoom(selectedNode), d3.event.stopPropagation())
        }
      }).on(scrollEvent, (nodeSelected : any) => {
        const isDownScrolling = isFirefox ? d3.event.detail > 0 : d3.event.wheelDelta < 0;
        if (isDownScrolling && focus.parent) {
          zoom(focus.parent);
        } else if (!isDownScrolling) {
          const nodeToZoom = nodeSelected.children ? nodeSelected : nodeSelected.parent;
          zoom(nodeToZoom);
        }
      });

    const label: any = svg.append('g')
      .style('font', '20px sans-serif')
      .style('fill', 'white')
      .attr('pointer-events', 'none')
      .attr('text-anchor', 'middle')

      .selectAll('text')
      .data(root.descendants())
      .join('text')
      .style('font', (d: any) => d.children ? '25px sans-serif' : '10px sans-serif')
      .style('fill', (d: any) => d.children ? '#FDD835' : 'white')
      .style('fill-opacity', d => d === focus ? 0 : 1)
      .style('fill-opacity', (d: any) => d.parent === focus || !d.children ? 1 : 0)
      .text((d: any) => d.data.name);


    zoomTo([root.x, root.y, root.r * 2]);


    function zoomTo(v) {
      const k = element.offsetWidth / v[2];
      view = v;
      label.attr('transform', (d: any) => {
        if (d.children) {
          if (d.depth == 1) {
            return `translate(${(d.x - v[0]) * k - d.r / 2},${(d.y - v[1]) * k - d.r + 25})`;
          } else {
            return `translate(${(d.x - v[0]) * k - d.r / 2},${(d.y - v[1]) * k - d.r - 125})`;
          }
        } else {
          return `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`;
        }
      });
      node.attr('transform', (d: any) => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
      node.attr('r', (d: any) => d.r * k);
    }

    function zoom(d) {
      focus = d;
      const transition = svg.transition()
        .duration(d3.event.altKey ? 7500 : 750)
        .on('end', d => { zooming = false })
        .on('start', d => { zooming = true })
        .tween('zoom', d => {
          const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
          return t => zoomTo(i(t));
        })

      label
        .transition(transition)
        .style('fill-opacity', d => d === focus && d.children ? 0 : 1)
        .on('start', function (d) { if (d.parent === focus) this.style.display = 'inline'; })
        .on('end', function (d) { if (d.parent !== focus && d.children) this.style.display = 'none'; });
    }
  }

}
