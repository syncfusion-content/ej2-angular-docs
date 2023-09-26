


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  // specifies the template string for the Chip component
  template: `
  <ejs-chiplist id="chip" cssClass="e-outline">
        <e-chips>
            <e-chip text="Chai"></e-chip>
            <e-chip text="Chang"></e-chip>
            <e-chip text="Aniseed Syrup"></e-chip>
            <e-chip text="Ikura"></e-chip>
        </e-chips>
  </ejs-chiplist>
  <ejs-chiplist id="chipset" cssClass="e-outline" enableDelete="true">
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



