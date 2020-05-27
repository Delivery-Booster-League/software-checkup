import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { MindMapData } from '../../../bean/mindMapData'

import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

@Component({
  selector: 'app-sommaire',
  templateUrl: './sommaire.component.html',
  styleUrls: ['./sommaire.component.css']
})
export class SommaireComponent  implements OnInit{

  @Input() data: MindMapData;
  treeControl = new NestedTreeControl<MindMapData>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MindMapData>();
  @Output() articleComponentOpened = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {
    this.dataSource.data = this.data.children;
  }
  

  hasChild = (_: number, node: MindMapData) => !!node.children && node.children.length > 0;

  openArticle(selectedNode:MindMapData){
    this.articleComponentOpened.emit(selectedNode.article);
  }
}
