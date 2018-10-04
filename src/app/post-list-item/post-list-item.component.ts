import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLove: number;
  @Input() postDate: object;
 

  constructor() { }

   ngOnInit() {
  }

  like(){
    this.postLove++;
  }

  dislike(){
    this.postLove--;
  }

}