import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons'
import { enableRipple } from '@syncfusion/ej2-base'




import { Component } from '@angular/core';

@Component({
imports: [
        
        CheckBoxModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <ul>
               <!-- Small CheckBox. -->
               <li><ejs-checkbox label="Small" cssClass="e-small"></ejs-checkbox></li>

               <!-- Default CheckBox. -->
               <li><ejs-checkbox label="Default"></ejs-checkbox></li>
               </ul>
               </div>`
})

export class AppComponent { }



