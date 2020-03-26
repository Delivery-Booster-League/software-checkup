import { Component, ElementRef, Input, OnChanges, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { MindmapService } from '../service/mindmap.service';
import { Router } from '@angular/router';
import * as d3 from 'd3';

@Component({
  selector: 'app-mindmap',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mindmap.component.html',
  styleUrls: ['./mindmap.component.css']
})

export class MindmapComponent implements OnChanges, AfterViewInit {

  ngAfterViewInit(): void {
    if (!this.data) { return; }
    this.createChart("default");
  }

  @ViewChild('chart')
  private chartContainer: ElementRef;

  data: any = this.mindmapService.getMindmap();

  margin = { top: 20, right: 20, bottom: 30, left: 40 };

  buttonState:boolean = true;

  constructor(private mindmapService: MindmapService,private router: Router ) {
  }

  ngOnChanges(): void {
    if (!this.data) { return; }

    this.createChart("default");
  }
  onResize() {
    this.createChart("default");
  }

  toggleButton(){
    this.buttonState = !this.buttonState
  }

  openAllNode(){
    this.createChart("openAll");
  }
  closeAllNode(){
    this.createChart("closeAll");
  }

  private pack(data,width,heigth){
    return d3.pack()
    .size([width, heigth])
    .padding(3)
  (d3.hierarchy(data)
    .sum(d => d.children? d.children.lenth:1)
    .sort((a, b) => b.value - a.value))
    d3.select('svg').remove();
  }

  private createChart(openMode:string): void {


    // Set the dimensions and margins of the diagram
    const element = this.chartContainer.nativeElement;
    var format = d3.format(",d");

    const root :any = this.pack(this.data,element.offsetWidth, element.offsetHeight);
  let focus = root;
  let view;

  var color = d3.interpolateCool;
  var format = d3.format(",d")
  const svg = d3.select("#chart").append("svg")
      .attr("viewBox", `-${element.offsetWidth  / 2} -${element.offsetHeight / 2} ${element.offsetWidth } ${element.offsetHeight}`)
      .style("display", "block")
      .style("margin", "0 -14px")
      .style("background", "#FFFF")
      .style("cursor", "pointer")
      .on("click", () => zoom(root));
console.log(root);
  const node = svg.append("g")
    .selectAll("circle")
    .data(root.descendants().slice(1))
    .join("circle")
      .attr("fill", (d:any) => d.children ? color(d.depth) : "white")
      .on("mouseover", function() { d3.select(this).attr("stroke", "#000"); })
      .on("mouseout", function() { d3.select(this).attr("stroke", null); })
      .on("click", (d:any) => {        
        if(!d.data.children&&focus==d.parent){     
          this.router.navigate(["mind-map", d.data.article])
        }
        else if(!d.data.children){
          focus !== d.parent && (zoom(d.parent), d3.event.stopPropagation())
        }
        else{
          focus !== d && (zoom(d), d3.event.stopPropagation())
        }
      });

  const label :any = svg.append("g")
      .style("font", "15px sans-serif")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")

    .selectAll("text")
    .data(root.descendants())
    .join("text")
      .style("fill-opacity", (d:any) => d.parent === root ? 1 : 0)
      .style("display", (d:any) => d.parent === root ? "inline" : "none")
      .text((d:any) => d.data.name);


  zoomTo([root.x, root.y, root.r * 2]);

  function zoomTo(v) {
    const k = element.offsetWidth  / v[2];

    view = v;

    label.attr("transform", (d:any) => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
    node.attr("transform", (d:any) => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
    node.attr("r", (d:any) => d.r * k);
  }

  function zoom(d) {
    const focus0 = focus;

    focus = d;

    const transition = svg.transition()
        .duration(d3.event.altKey ? 7500 : 750)
        .tween("zoom", d => {
          const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
          return t => zoomTo(i(t));
        });

    label
      .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
      .transition(transition)
        .style("fill-opacity", d => d.parent === focus ? 1 : 0)
        .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
        .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
  }
  }
}
