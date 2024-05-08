import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { ColorPickerComponent } from '@syncfusion/ej2-angular-inputs'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component } from '@angular/core';

@Component({
imports: [
        FormsModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <h4>Choose Color</h4>
               <!-- To set color value. -->
               <ejs-input ejs-colorpicker type="color" id="element" value="035a" /></div>`
})

export class AppComponent { }


