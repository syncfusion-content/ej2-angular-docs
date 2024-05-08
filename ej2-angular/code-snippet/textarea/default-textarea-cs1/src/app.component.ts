import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {TextAreaModule} from '@syncfusion/ej2-angular-inputs'



import { Component } from '@angular/core';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';


@Component({
imports: [
        
        TextAreaModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="wrap">
    <div class='textarea'>
      <ejs-textarea id="default"></ejs-textarea>
    </div>
  </div>`
})

export class AppComponent { }


