import { Component, OnInit, Input } from '@angular/core';

import { StoryListComponent } from '../story-list/story-list.component';

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.css']
})
export class StoryItemComponent implements OnInit {

  @Input() story: Object;

  constructor() { }

  ngOnInit() {
  }

}
