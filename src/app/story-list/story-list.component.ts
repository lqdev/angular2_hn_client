import { Component, OnInit } from '@angular/core';

import { StoryService } from '../story.service';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})

export class StoryListComponent implements OnInit {

  stories: [Observable<Response>];
  story: Object;

  constructor(
    private ss: StoryService,
    private http: Http
  ) { }

  ngOnInit() {
    this.getOtherStories();
  }

  getTopStories() {
    this.ss.topStories()
      .subscribe(response => {
        this.stories = response;
      });
  }

  getMyStories() {
    this.ss.myStories()
      .subscribe(response => {
        this.story = response;
      });
  }

  getOtherStories() {
    this.ss.otherStories();
  }
}
