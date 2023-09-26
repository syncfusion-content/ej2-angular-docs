


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  // specifies the template string for the Chip component
  template: `
  <ejs-chiplist id="chip" selection="Multiple">
    <e-chips>
      <e-chip text="Chai"></e-chip>
      <e-chip text="Chang"></e-chip>
      <e-chip text="Aniseed Syrup"></e-chip>
      <e-chip text="Ikura"></e-chip>
    </e-chips>
  </ejs-chiplist>`
})
export class AppComponent {

}



