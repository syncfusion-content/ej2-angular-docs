import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'




import { Component, ViewChild } from '@angular/core';
import { Animation } from '@syncfusion/ej2-base';

@Component({

standalone: true,
  selector: 'app-root',
  template: `
    <div class="icon-bar">
      <span class="e-icons e-cut"></span>
      <span class="e-icons e-copy"></span>
      <span class="e-icons e-paste"></span>
    </div>
  `
})

export class AppComponent {

}


