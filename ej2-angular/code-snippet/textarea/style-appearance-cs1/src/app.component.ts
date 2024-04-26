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
                  <h4> Small Size </h4>
                  <div className="e-input-group e-small">
                      <ejs-textarea id="default1" className="e-input" placeholder="Enter your comments" (focus)= "onfocus($event)" (blur)="onBlur($event)"></ejs-textarea>
                  </div>

                  <h4> Bigger Size </h4>
                  <div className="e-input-group e-bigger">
                      <ejs-textarea id="default2" className="e-input" placeholder="Enter your comments" (focus)= "onfocus($event)" (blur)="onBlur($event)"></ejs-textarea>
                  </div>
                </div>
              </div>`
})

export class AppComponent {
    public onfocus(args: any): void {
      args.target.parentElement.classList.add("e-input-focus");
    }

    public onBlur(args: any): void {
      args.target.parentElement.classList.remove("e-input-focus");
    }
 }


