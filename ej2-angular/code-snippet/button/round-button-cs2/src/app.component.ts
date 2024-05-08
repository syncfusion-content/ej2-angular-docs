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
                    <!-- To render Button. -->
                    <button ejs-button cssClass='e-round-corner'>Button</button>
               </div>`
})

export class AppComponent { }


