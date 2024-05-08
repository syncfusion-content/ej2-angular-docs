import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'




import { Component, } from '@angular/core';

@Component({
imports: [
        
        ButtonModule
    ],


standalone: true,
  selector: 'app-root',
  template: `<div class="e-bigger">
  <button ejs-button>Button</button>
  </div>`
})

export class AppComponent {
  
}
