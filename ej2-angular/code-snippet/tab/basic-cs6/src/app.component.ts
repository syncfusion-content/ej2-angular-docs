import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { TabModule } from '@syncfusion/ej2-angular-navigations'


import { Component } from '@angular/core';
/**
 * Add nested Tabs
 */

@Component({
imports: [
         FormsModule, TabModule
    ],


standalone: true,
    selector: 'app-container',
    templateUrl: './app.component.html',
})
export class AppComponent {
   
}

