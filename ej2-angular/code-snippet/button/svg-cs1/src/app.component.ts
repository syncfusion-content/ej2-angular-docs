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
    styleUrls: ['styles.css'],
    template:  `<div class="e-section-control">
                    <button ejs-button iconCss= "e-search-icon"></button>
                </div>`
})

export class AppComponent { }


