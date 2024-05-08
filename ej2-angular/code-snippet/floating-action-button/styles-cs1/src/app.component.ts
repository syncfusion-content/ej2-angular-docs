import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FabModule } from '@syncfusion/ej2-angular-buttons'



import { Component } from '@angular/core';

@Component({
imports: [
        
        FabModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div id="targetElement" style="position:relative;min-height:350px;border:1px solid;">
                </div>
                <!-- To Render Floating Action Button with applied warning style -->
                <button ejs-fab id='fab' iconCss= 'e-icons e-edit' cssClass= 'e-warning' target='#targetElement'></button>`
})

export class AppComponent { }


