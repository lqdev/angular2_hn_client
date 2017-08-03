import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Injectable()
export class StoryService {

  response: [number];
  stories: [Observable<Response>];
  requests: [Observable<any>];

  constructor(private http: Http) { }

  topStories() {
    return this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .map(response => {
        return response.json();
      });
  }

  myStories() {
    return this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .map(res => res.json())
      .mergeMap(story => this.http.get(`https://hacker-news.firebaseio.com/v0/item/${story}.json?print=pretty`))
      .map(response => response.json());
  }

  buildRequests() {
    return this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .map(res => res.json());
  }


  otherStories() {
    //https://stackoverflow.com/questions/43652927/how-to-flatten-array-of-observables-in-an-observable
    this.buildRequests().subscribe(res => {
      res.map(story => {
        //this.requests.push(this.http.get(`https://hacker-news.firebaseio.com/v0/item/${story}.json?print=pretty`).map((res) => res.json()))
        console.log(`https://hacker-news.firebaseio.com/v0/item/${story}.json?print=pretty`)
        //this.http.get(`https://hacker-news.firebaseio.com/v0/item/${story}.json?print=pretty`).map((res) => res.json())
      })
      return Observable.forkJoin(this.requests);
    });
    //return Observable.forkJoin(this.http.get(`https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty`).map((res:Response) => res.json()));
  }
}
