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
               <!-- Label position - Left. -->
               <li><ejs-checkbox label="Left Side Label" labelPosition="Before"></ejs-checkbox></li>

               <!-- Label position - Right. -->
               <li><ejs-checkbox label="Right Side Label" [checked]="true"></ejs-checkbox></li>
               </ul>
               </div>`
})

export class AppComponent { }



