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
                <form id="myForm">
                  <span>Please leave your comments</span>
                  <br />
                  <div id ='input-container'>
                    <ejs-textarea id='default' name="myTextarea" placeholder='Enter your comments' floatLabelType='Auto' required=""></ejs-textarea>
                  </div>
                  <input id="submit" type="submit" value="Submit">
                  <input id="reset" type="reset" value="Reset">
                </form>
                </div>
              </div>`
})

export class AppComponent { }


