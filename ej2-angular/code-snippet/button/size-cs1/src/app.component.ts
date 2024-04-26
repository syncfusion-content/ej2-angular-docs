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
    selector:  'app-root',
    styleUrls: ['./style.css'],
    template:   `<div class="e-section-control">
                    <!-- Small Button. -->
                    <button ejs-button cssClass="e-small">Small</button>

                    <!-- Normal Button. -->
                    <button ejs-button>Normal</button>
                </div>`
})

export class AppComponent { }


