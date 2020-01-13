import { Component } from '@angular/core';
import {ChecklistService} from './service/checklist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCheckListId = 0;
  title = 'ezcheck';
  checklists = this.checklistService.getCheckLists();

  constructor(private checklistService: ChecklistService) { }

  setSelectedCheckList(id : number) {
    console.log(id);
    this.selectedCheckListId = id;
  }
}
