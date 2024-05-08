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
                <!-- To Render Floating Action Button -->
                <button ejs-fab id='fab' content='Add' target='#targetElement'></button>`
})

export class AppComponent { }


