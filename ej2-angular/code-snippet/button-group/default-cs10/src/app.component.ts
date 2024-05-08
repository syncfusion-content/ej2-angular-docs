import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component } from '@angular/core';

@Component({
imports: [
        
        ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    template:  `<div class="e-section-control">
                <!-- To render ButtonGroup. -->
               <div class='e-btn-group'>
                    <input type="checkbox" id="check_bold" name="align" value="bold"/>
                    <label class="e-btn" for="check_bold">Bold</label>
                    <input type="checkbox" id="check_italic" name="align" value="italic"/>
                    <label class="e-btn" for="check_italic">Italic</label>
                    <input type="checkbox" id="check_underline" name="align" value="underline"/>
                    <label class="e-btn" for="check_underline">Underline</label>
                </div>
                </div>`
})

export class AppComponent { }


