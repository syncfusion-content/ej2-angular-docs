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
                <div>
                    <input type="button" id="inputbtn" value="Input Button" class="e-btn e-link">
                </div><br>
                <div>
                    <a id="anchorbtn" class="e-btn e-primary" href="#">Google</a>
                </div>
                </div>`
})

export class AppComponent { }


