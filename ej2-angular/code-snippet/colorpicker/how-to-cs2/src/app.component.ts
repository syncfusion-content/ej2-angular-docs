import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { ColorPickerModule } from '@syncfusion/ej2-angular-inputs'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component } from '@angular/core';

@Component({
imports: [
         FormsModule, ColorPickerModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <h4>Disabled State</h4>
               <!-- To disable ColorPicker. -->
               <ejs-input ejs-colorpicker type="color" id="element" [disabled]="true" /></div>`
})

export class AppComponent { }


