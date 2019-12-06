import {Component, Input, OnInit} from '@angular/core';

interface Post {
  title: string;
  content: string;
  loveIts: number;
}

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  @Input()
  posts: Array<Post>;

  constructor() { }

  ngOnInit() {}

}
