import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { CheckListsComponent } from './check-lists/check-lists.component';
import { LandingComponent } from './landing/landing.component';
import { MindmapComponent } from './mindmap/mindmap.component';
import { ArticleComponent } from './mindmap/article/article.component';


const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'check-lists', component: CheckListsComponent },
  { path : 'mind-map', component:MindmapComponent},
  { path : 'mind-map/:articleId', component:ArticleComponent, pathMatch: 'full'},
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
