import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { Component } from '@angular/core';

@Component({
imports: [
        
    ],


standalone: true,
    selector: 'my-app',
    styleUrls: ['./app.component.css'],
    template: `
    <div id='element'>
            <span class="e-avatar e-avatar-xlarge"></span>
            <span class="e-avatar e-avatar-large"></span>
            <span class="e-avatar"></span>
            <span class="e-avatar e-avatar-small"></span>
            <span class="e-avatar e-avatar-xsmall"></span>
    </div>
    `
})

export class AppComponent { }




