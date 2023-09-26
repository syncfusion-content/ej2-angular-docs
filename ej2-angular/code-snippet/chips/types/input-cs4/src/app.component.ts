


import { Component, OnInit } from '@angular/core';
import { ClickEventArgs } from '@syncfusion/ej2-buttons';

@Component({
  selector: 'my-app',
  // specifies the template string for the Chip component
  template: `
  <ejs-chiplist id="chip" (click)="chipclick($event)">
    <e-chips>
      <e-chip text="Send a text"></e-chip>
      <e-chip text="Set a remainder"></e-chip>
      <e-chip text="Read my emails"></e-chip>
      <e-chip text="Set alarm"></e-chip>
    </e-chips>
  </ejs-chiplist>
  `
})
export class AppComponent {
  constructor() {}
  chipclick(e: ClickEventArgs) {
   if(e.text){
      alert("you have clicked " + e.text);
   }
  }
}



