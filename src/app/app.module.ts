import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryItemComponent } from './story-item/story-item.component';

import { StoryService } from './story.service';

@NgModule({
  declarations: [
    AppComponent,
    StoryListComponent,
    StoryItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    StoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
