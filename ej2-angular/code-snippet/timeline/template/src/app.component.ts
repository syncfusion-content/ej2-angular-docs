
import { Component } from '@angular/core';
import { TimelineItemModel } from "@syncfusion/ej2-angular-layouts";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent  {

  public projectMilestones: TimelineItemModel[] = [
    { content: 'Kickoff meeting'},
    { content: 'Content approved'},
    { content: 'Design approved'},
    { content: 'Product delivered'}
  ];
  
}


