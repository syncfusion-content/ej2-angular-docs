import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { ColorPickerComponent, ColorPickerModule } from '@syncfusion/ej2-angular-inputs'



import { Component } from '@angular/core';
import { OpenEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
imports: [
        FormsModule, ColorPickerModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <h4>Choose Color</h4>
               <!-- custom picker -->
               <ejs-input ejs-colorpicker type="color" id="element" value="#344aae" cssClass="e-custom-picker" [modeSwitcher]="false" (open)="onOpen($event)" /></div>`
})

export class AppComponent {
    onOpen(args: OpenEventArgs): void {
        (args.element.querySelector('.e-handler') as Element).classList.add('e-icons');
    }
}


