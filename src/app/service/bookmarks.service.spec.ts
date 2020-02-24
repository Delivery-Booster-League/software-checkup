import { TestBed } from '@angular/core/testing';

import { BookmarksService } from './bookmarks.service';

describe('BookmarksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookmarksService = TestBed.get(BookmarksService);
    expect(service).toBeTruthy();
  });
});
