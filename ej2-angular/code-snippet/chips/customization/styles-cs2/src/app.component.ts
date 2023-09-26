


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  // specifies the template string for the Chip component
  template: `
  <ejs-chiplist id="chip">
        <e-chips>
            <e-chip text="Andrew" leadingIconCss='andrew'></e-chip>
            <e-chip text="Janet" leadingIconCss='janet'></e-chip>
            <e-chip text="Laura" leadingIconCss='laura'></e-chip>
            <e-chip text="Margaret" leadingIconCss='margaret'></e-chip>
        </e-chips>
  </ejs-chiplist>
  `
})
export class AppComponent {

}



