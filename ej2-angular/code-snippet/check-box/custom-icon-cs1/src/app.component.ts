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
    // To customize CheckBox appearance
    template:  `<div class="e-section-control">
                <ul>
                    <li><ejs-checkbox label="Buy Groceries" cssClass="e-checkicon" [checked]="true"></ejs-checkbox></li>

                    <li><ejs-checkbox label="Pay Rent" cssClass="e-checkicon"></ejs-checkbox></li>

                    <li><ejs-checkbox label="Make Dinner" cssClass="e-checkicon"></ejs-checkbox></li>

                    <li><ejs-checkbox label="Finish To-do List Article" cssClass="e-checkicon"></ejs-checkbox></li>
                </ul>
                </div>`
})

export class AppComponent { }



