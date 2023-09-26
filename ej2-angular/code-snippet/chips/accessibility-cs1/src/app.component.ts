


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  // specifies the template string for the Chip component
  template: `
  <ejs-chiplist id="chip" [enableDelete]="true" selection="Single">
        <e-chips>
            <e-chip text="Andrew" avatarIconCss='andrew'></e-chip>
            <e-chip text="Janet" avatarIconCss='janet'></e-chip>
            <e-chip text="Laura" avatarIconCss='laura'></e-chip>
            <e-chip text="Margaret" avatarIconCss='margaret'></e-chip>
        </e-chips>
  </ejs-chiplist>`
})
export class AppComponent {

}



