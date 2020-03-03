import { TestBed } from '@angular/core/testing';

import { MindmapService } from './mindmap.service';

describe('ChecklistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MindmapService = TestBed.get(MindmapService);
    expect(service).toBeTruthy();
  });
});
