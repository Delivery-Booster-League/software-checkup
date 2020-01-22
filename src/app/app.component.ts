import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatVerticalStepper } from '@angular/material';
import { ChecklistService } from './service/checklist.service';
import { Subpart } from './bean/subpart';
import { Step } from './bean/step';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  selectedCheckListId = 0;
  checklists = this.checklistService.getCheckLists();
  completion: number = 0;

  @ViewChildren(MatVerticalStepper) steppers: QueryList<MatVerticalStepper>;


  constructor(private checklistService: ChecklistService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.checklists.forEach(checklist => {
      checklist.subparts.forEach(subpart => {
        this.resetCompletion(subpart);
      });
    });
  }

  openSnackBar() {
    let snackBarRef = this._snackBar.open('All checked, nice!','dismiss',{duration: 4000  });
  }

  setSelectedCheckList(id: number) {
    this.completion = 0;
    this.selectedCheckListId = id;
  }
  resetCompletion(subpart: Subpart) {
    this.completion = 0;
    subpart.steps.forEach(e => e.isdone = false);
  }
  setStepComplete(subpart: Subpart, step: Step, indexStepper: number) {
    this.steppers.toArray()[indexStepper].selected.completed = true;
    this.steppers.toArray()[indexStepper].selected.editable = false;

    this.steppers.toArray()[indexStepper].next();
    step.isdone = true;
    this.updateCompletion(subpart);
  }

  updateCompletion(subpart: Subpart) {
    this.completion = subpart.steps.filter(x => x.isdone).length / subpart.steps.length * 100;
    if(subpart.steps.filter(x => x.isdone).length === subpart.steps.length){
      this.openSnackBar();
    }
  }

  tabChange() {
    this.completion = 0;
    this.checklists.forEach(checklist => {
      checklist.subparts.forEach(subpart => {
        this.resetCompletion(subpart);
      });
    });
  }
}
