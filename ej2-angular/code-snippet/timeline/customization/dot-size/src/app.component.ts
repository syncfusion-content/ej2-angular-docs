
import { Component } from '@angular/core';
import { TimelineItemModel } from "@syncfusion/ej2-angular-layouts";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    
  public dotSizes: TimelineItemModel[] = [
    { content: 'Extra Small', cssClass: 'x-small' },
    { content: 'Small', cssClass: 'small' },
    { content: 'Medium', cssClass: 'medium' },
    { content: 'Large', cssClass: 'large' }
  ];

}


