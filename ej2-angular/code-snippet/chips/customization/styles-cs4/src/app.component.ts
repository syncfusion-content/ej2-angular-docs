


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  // specifies the template string for the Chip component
  template: `
  <ejs-chiplist id="chip">
        <e-chips>
            <e-chip text="Andrew" avatarText= 'A'></e-chip>
            <e-chip text="Janet" avatarText= 'J'></e-chip>
            <e-chip text="Laura" avatarText= 'L'></e-chip>
            <e-chip text="Margaret" avatarText= 'M'></e-chip>
        </e-chips>
  </ejs-chiplist>`
})
export class AppComponent {

}



