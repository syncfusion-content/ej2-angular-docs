


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  // specifies the template string for the Chip component
  template: `
  <ejs-chiplist id="chip">
    <e-chips>
      <e-chip text="Andrew"></e-chip>
      <e-chip text="Janet"></e-chip>  
      <e-chip text="Laura"></e-chip>
      <e-chip text="Margaret"></e-chip>
    </e-chips>
  </ejs-chiplist>`
})
export class AppComponent {

}



