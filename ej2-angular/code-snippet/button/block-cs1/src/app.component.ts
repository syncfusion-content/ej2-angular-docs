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
    styleUrls:['./style.css'],
    template:  `
                <div class="e-section-control">
                    <!-- Block button. -->
                    <button ejs-button cssClass="e-block">Block Button</button>

                    <!-- Primary block button. -->
                    <button ejs-button cssClass="e-block e-primary">Block Button</button>

                    <!-- Success block button. -->
                    <button ejs-button cssClass="e-block e-success">Block Button</button>
                </div>`
                
})

export class AppComponent { }


