import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons'
import { enableRipple } from '@syncfusion/ej2-base'




import { Component } from '@angular/core';

@Component({
imports: [
        
        RadioButtonModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <ul>
               <!-- Small RadioButton. -->
               <li><ejs-radiobutton label="Small" name="small" checked="true" cssClass="e-small"></ejs-radiobutton></li>

               <!-- Default RadioButton. -->
               <li><ejs-radiobutton label="Default" name="small"></ejs-radiobutton></li>
               </ul>
               </div>`
})

export class AppComponent { }



