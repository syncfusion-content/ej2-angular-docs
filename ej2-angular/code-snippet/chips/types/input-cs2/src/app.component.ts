import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChipListModule } from '@syncfusion/ej2-angular-buttons'
import { Component, OnInit } from '@angular/core';

@Component({
  imports: [
    ChipListModule
  ],
  standalone: true,
  selector: 'my-app',
  // specifies the template string for the Chip component
  template: `
  <ejs-chiplist id="chip" selection="Single">
    <e-chips>
      <e-chip text="Small"></e-chip>
      <e-chip text="Medium"></e-chip>
      <e-chip text="Large"></e-chip>
      <e-chip text="Extra Large"></e-chip>
    </e-chips>
  </ejs-chiplist>`
})
export class AppComponent {

}
