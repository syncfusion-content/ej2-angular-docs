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
            <span class="e-avatar e-avatar-xlarge">RT</span>
            <span class="e-avatar e-avatar-large">RT</span>
            <span class="e-avatar">RT</span>
            <span class="e-avatar e-avatar-small">RT</span>
            <span class="e-avatar e-avatar-xsmall">RT</span>
    </div>
    `
})

export class AppComponent { }




