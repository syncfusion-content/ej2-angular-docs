import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {TextAreaModule} from '@syncfusion/ej2-angular-inputs'



import { Component, ViewChild } from '@angular/core';
import { TextAreaComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
imports: [
        
        TextAreaModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="wrap">
                <div class='textarea'>
                <ejs-textarea #default id="default"></ejs-textarea>
                <br/>
                <button id="button">Focus-in</button>
                </div>
              </div>`
})

export class AppComponent { 
  @ViewChild('default')
    private textareaObj?: TextAreaComponent;
    ngAfterViewInit(): void {
      (document.getElementById('button') as HTMLElement).onclick = () => {
        this.textareaObj?.focusIn();
      }
  }
}
