import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpeedDialModule } from '@syncfusion/ej2-angular-buttons'



import { Component } from '@angular/core';

@Component({
imports: [
        
        SpeedDialModule// Registering EJ2 SpeedDial Module.
    ],


standalone: true,
    selector: 'app-root',
    template: `<div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
        <!-- To Render SpeedDial component with applied warning style -->
        <button ejs-speeddial id="speeddial" content='Edit' cssClass='e-warning' target='#targetElement'></button>`
})

export class AppComponent { }


