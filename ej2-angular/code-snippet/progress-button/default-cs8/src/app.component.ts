import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ProgressButtonModule } from '@syncfusion/ej2-angular-splitbuttons'



import { Component } from '@angular/core';
import { SpinSettingsModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
imports: [
        
        ProgressButtonModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <!-- To render progress button. -->
               <button ejs-progressbutton content='Submit' [spinSettings]='spinSettings'></button></div>`
})

export class AppComponent {
    public spinSettings : SpinSettingsModel = { position: 'Right', width: 20, template: '<div class="template"></div>'  };
}


