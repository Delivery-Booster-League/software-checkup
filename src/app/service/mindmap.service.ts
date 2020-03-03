import { Injectable } from '@angular/core';
import { DATA } from '../data/mindmap.json';

@Injectable({
  providedIn: 'root'
})
export class MindmapService {

  constructor() { }

  public getMindmap(): any {
    return DATA;
  }
}
