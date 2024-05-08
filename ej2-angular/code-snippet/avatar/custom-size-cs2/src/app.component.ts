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
            <span class="e-avatar">26px</span>
            <span class="e-avatar">24px</span>
            <span class="e-avatar">22px</span>
            <span class="e-avatar">20px</span>
            <span class="e-avatar">18px</span>
    </div>
    `
})

export class AppComponent { }




