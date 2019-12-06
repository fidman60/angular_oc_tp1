import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  content: string;

  @Input()
  loveIts: number;

  @Input()
  createdAt: Date;

  countLoveIts = 0;

  countDontLoveIts = 0;

  constructor() {
    this.createdAt = new Date();
  }

  loveIt() {
    this.loveIts = 1;
    this.countLoveIts++;
  }

  dontLoveIt() {
    this.loveIts = 0;
    this.countDontLoveIts++;
  }

  ngOnInit() {
  }

}
