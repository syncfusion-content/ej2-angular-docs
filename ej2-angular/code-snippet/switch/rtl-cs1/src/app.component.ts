import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SwitchModule } from '@syncfusion/ej2-angular-buttons'
import { enableRipple } from '@syncfusion/ej2-base'




import { Component } from '@angular/core';

@Component({
imports: [
        
        SwitchModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <ejs-switch [enableRtl]="true"></ejs-switch></div>`
})

export class AppComponent { }



