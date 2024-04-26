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
    template:   `<div class="e-section-control">
                <!-- Flat Button. -->
                <button ejs-button cssClass="e-flat">Flat</button>

                <!-- Outline Button. -->
                <button ejs-button cssClass="e-outline">Outline</button>

                <!-- Round Button - Icon can be loaded by setting "e-icons e-plus-icon" in "iconCss" property.-->
                <!-- Use "e-icons" class name to load Essential JS 2 built-in icons.-->
                <!-- Use "e-plus-icon" class name to load plus icon that you can refer in "styles.css" -->
                <button ejs-button cssClass="e-round" iconCss="e-icons e-plus-icon" [isPrimary]="true"></button>
                </div>`
})

export class AppComponent { }


