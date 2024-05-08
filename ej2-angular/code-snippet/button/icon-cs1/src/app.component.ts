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
                    <!-- To position the icon to the left of the text on a Button. -->
                    <button ejs-button iconCss="e-btn-sb-icon e-prev-icon">Previous</button>

                    <!-- To position the icon to the right of the text on a Button. -->
                    <button ejs-button iconCss= "e-btn-sb-icon e-stop-icon" iconPosition="Right">Stop</button>
                </div>`
})

export class AppComponent { }


