import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChipListModule } from '@syncfusion/ej2-angular-buttons'
import { enableRipple } from '@syncfusion/ej2-base'
import { Component, OnInit } from '@angular/core';

@Component({
  imports: [
    ChipListModule
  ],
  standalone: true,
  selector: 'my-app',
  // specifies the template string for the Chip component
  template: `
  <ejs-chiplist id="chip">
        <e-chips>
            <e-chip text="Andrew" trailingIconCss= 'e-dlt-btn'></e-chip>
            <e-chip text="Janet" trailingIconCss= 'e-dlt-btn'></e-chip>
            <e-chip text="Laura" trailingIconCss= 'e-dlt-btn'></e-chip>
            <e-chip text="Margaret" trailingIconCss= 'e-dlt-btn'></e-chip>
        </e-chips>
  </ejs-chiplist>`
})
export class AppComponent {

}

