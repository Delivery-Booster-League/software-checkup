import { Component, Renderer2,  ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mindmap',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mindmap.component.html',
  styleUrls: ['./mindmap.component.css'],
})

export class MindmapComponent {
  isPostOpened: boolean;
  postIdToOpen: string;

  constructor(private renderer: Renderer2) {}

  openArticleComponent = (postId: string) => {
    this.isPostOpened = true;
    this.postIdToOpen = postId;
  }

  closeArticleComponent = () => {
    this.isPostOpened = false;
  }

  disableBodyScrolling = () => {
    this.renderer.addClass(document.body, 'scrollDisabled');
  }

  activateBodyScrolling = () => {
    this.renderer.removeClass(document.body, 'scrollDisabled');
  }
}
