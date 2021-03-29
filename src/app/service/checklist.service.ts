import { Injectable } from '@angular/core';
import { Checklist } from '../bean/checklist';
import { CHECKLISTS } from '../data/checklists';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  constructor() { }

  public getCheckLists(): Checklist[] {
    return CHECKLISTS;
  }
}
