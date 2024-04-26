import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { Component } from '@angular/core';

@Component({
imports: [
        
    ],


standalone: true,
    selector: 'my-app',
    template: `
    <div id='element'>
            <div style="display: inline-block; margin-top: 15px;">
                <a href="#" class="e-badge e-badge-primary">Link Badge</a>
            </div>
    </div>
    `
})

export class AppComponent { }




