import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {TextBoxModule} from '@syncfusion/ej2-angular-inputs'



import { Component } from '@angular/core';

@Component({
imports: [
        
        TextBoxModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="wrap">
    <h4>Floating label as auto</h4>
    <div class='textboxes'>
      <ejs-textbox placeholder="First Name" floatLabelType="Auto"></ejs-textbox>
    </div>

    <h4>Floating label as always</h4>
    <div class='textboxes'>
      <ejs-textbox placeholder="First Name" floatLabelType="Always"></ejs-textbox>
    </div>
  </div>`
})

export class AppComponent { }


