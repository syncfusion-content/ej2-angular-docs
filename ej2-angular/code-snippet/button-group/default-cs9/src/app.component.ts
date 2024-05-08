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
    template: `<div class="e-section-control">
                <!-- To render ButtonGroup. -->
                <div class='e-btn-group'>
                    <input type="radio" id="radioleft" name="font" value="left"/>
                    <label class="e-btn" for="radioleft">Left</label>
                    <input type="radio" id="radiomiddle" name="font" value="middle"/>
                    <label class="e-btn" for="radiomiddle">Center</label>
                    <input type="radio" id="radioright" name="font" value="right"/>
                    <label class="e-btn" for="radioright">Right</label>
                </div>
                </div>`
})

export class AppComponent { }


