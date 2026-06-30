import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {TextBoxModule} from '@syncfusion/ej2-angular-inputs'



import { Component } from '@angular/core';

@Component({
imports: [
        
        TextBoxModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="wrap">
                <div class='textbox'>
                <ejs-textbox id="default" placeholder="Enter your comments" maxLength="20"></ejs-textbox>
                </div>
              </div>`
})

export class AppComponent { }


