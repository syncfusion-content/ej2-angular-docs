


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  // specifies the template string for the Chip component
  template: `
  <ejs-chiplist id="chip" enableDelete="true">
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

}



