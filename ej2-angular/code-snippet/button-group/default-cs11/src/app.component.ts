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
                <div class='e-btn-group e-outline'>
                  <button ejs-button cssClass='e-outline'>HTML</button>
                  <button ejs-button cssClass='e-outline'>CSS</button>
                  <button ejs-button cssClass='e-outline'>Javascript</button>
                </div>
              </div>`
})

export class AppComponent { }


