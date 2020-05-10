import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css','../../markdown.css'],
  encapsulation: ViewEncapsulation.None,
})

export class ArticleComponent  implements OnInit{

  @Input() postId: string;
  @Output() closedArticle = new EventEmitter<void>();

  post: string;
  paramPostId: string;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    if (!this.postId) {
      this.paramPostId = this.route.snapshot.paramMap.get('articleId');
      this.postId = this.paramPostId;
    }
    this.post = './assets/articles/' +  this.postId + '.md';
  }

  closeArticle = () => {
    if (this.paramPostId) {
      this.location.back();
    }
    this.closedArticle.emit();
  }
}
