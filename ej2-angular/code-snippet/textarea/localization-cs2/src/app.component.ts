import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {TextAreaModule} from '@syncfusion/ej2-angular-inputs'



import { Component } from '@angular/core';
import { L10n } from '@syncfusion/ej2-base';

// Load culture for textarea
L10n.load({
  'de-DE': {
      'textarea': {'placeholder': "Geben Sie Ihre Kommentare ein"}
    }
});

@Component({
imports: [
        
        TextAreaModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="wrap">
                <div class='textarea'>
                <ejs-textarea id='default' floatLabelType="Auto" locale="de-DE"></ejs-textarea>
                </div>
              </div>`
})

export class AppComponent { }


