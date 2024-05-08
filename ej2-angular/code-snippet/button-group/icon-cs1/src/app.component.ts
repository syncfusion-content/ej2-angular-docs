import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component } from '@angular/core';

@Component({
imports: [
        
        ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
              <!-- To render ButtonGroup. -->
               <div class='e-btn-group'>
                  <button ejs-button iconCss='e-icons e-left-icon'>Left</button>
                  <button ejs-button iconCss='e-icons e-middle-icon'>Right</button>
                  <button ejs-button iconCss='e-icons e-right-icon'>Middle</button>
                </div>
                </div>`
})

export class AppComponent { }


