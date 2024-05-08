import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { ColorPickerModule } from '@syncfusion/ej2-angular-inputs'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component } from '@angular/core';
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
    'de-DE': {
        'colorpicker': {
            'Apply': 'Anwenden',
            'Cancel': 'Abbrechen',
            'ModeSwitcher': 'Modus wechseln'
        }
    }
});

@Component({
imports: [
        FormsModule, ColorPickerModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <h4>Choose Color</h4>
               <ejs-input ejs-colorpicker type="color" id="element" locale="de-DE" /></div>`
})

export class AppComponent { }


