import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { CheckListsComponent } from './check-lists/check-lists.component';
import { ArticleComponent } from './mindmap/article/article.component';
import { LandingComponent } from './landing/landing.component';

import {NgxLinkifyjsModule} from 'ngx-linkifyjs';
import { MindmapComponent } from './mindmap/mindmap.component';

import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    AppComponent,
    BookmarksComponent,
    CheckListsComponent,
    LandingComponent,
    MindmapComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatSnackBarModule,
    MatSelectModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule,
    NgxLinkifyjsModule.forRoot({
      enableHash: false, // optional - default true
      enableMention: false // optional - default true
    }),
    MarkdownModule.forRoot({ loader: HttpClient })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
