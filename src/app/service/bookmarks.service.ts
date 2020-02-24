import { Injectable } from '@angular/core';
import { DATA } from '../data/bookmarks.json';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  constructor() { }

  public getBookmarks(): any[] {
    return DATA.hits.hits;
  }
}
