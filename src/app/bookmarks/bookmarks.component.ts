import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../service/bookmarks.service';
@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  bookmarks = this.bookmarksService.getBookmarks().sort(function(a, b) {
    return b._source.timestamp_ms - a._source.timestamp_ms;
  });;

  constructor(private bookmarksService :BookmarksService) { }

  ngOnInit() {
  }

}
