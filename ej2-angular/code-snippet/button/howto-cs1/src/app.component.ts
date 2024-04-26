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
    styleUrls: ['./style.css'],
    template:  `<div class="e-section-control">
                <!-- To customize Button appearance. -->
                <!-- Refer the "e-custom" class details in "styles.css"-->
                <button ejs-button cssClass="e-custom">Custom</button></div>`
})

export class AppComponent { }


