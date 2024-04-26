import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'


import { Component } from '@angular/core';
import { TimelineItemModel } from "@syncfusion/ej2-angular-layouts";

@Component({
imports: [ TimelineModule, TimelineAllModule ],


standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent  {

    public dotItems: TimelineItemModel[] = [
      { content: 'Default'},
      { content: 'Icon', dotCss: 'e-icons e-check'},
      { content: 'Image', dotCss: 'custom-image'},
      { content: 'Text', dotCss: 'custom-text'}
    ];
  
}


