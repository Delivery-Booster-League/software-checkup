import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { CheckListsComponent } from './check-lists/check-lists.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'check-lists', component: CheckListsComponent },
  { path: '', component: LandingComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
