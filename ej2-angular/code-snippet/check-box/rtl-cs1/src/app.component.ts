import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons'




import { Component } from '@angular/core';

@Component({
imports: [
        
        CheckBoxModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
    <ejs-checkbox label="Default" [enableRtl]="true"></ejs-checkbox></div>`
})

export class AppComponent { }



