
import { Component } from '@angular/core';
import { TimelineItemModel } from "@syncfusion/ej2-angular-layouts";

@Component({
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


