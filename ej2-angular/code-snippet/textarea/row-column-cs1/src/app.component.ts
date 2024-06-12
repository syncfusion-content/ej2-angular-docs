import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {TextAreaModule} from '@syncfusion/ej2-angular-inputs'



import { Component } from '@angular/core';

@Component({
imports: [
        
        TextAreaModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="wrap">
                <div class='textarea'>
                <div>
                  <ejs-textarea id="default1" placeholder="Enter your comments" floatLabelType="Auto" rows="3" cols="35"></ejs-textarea>
                </div>
                <div>
                  <ejs-textarea id="default2" placeholder="Enter your comments" floatLabelType="Auto" rows="5" cols="40"></ejs-textarea>
                </div>
                </div>
              </div>`
})

export class AppComponent { }


