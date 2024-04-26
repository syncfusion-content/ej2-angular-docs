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
            <span class="e-avatar e-avatar-xlarge e-avatar-circle">SJ</span>
            <span class="e-avatar e-avatar-large e-avatar-circle">SJ</span>
            <span class="e-avatar e-avatar-circle">SJ</span>
            <span class="e-avatar e-avatar-small e-avatar-circle">SJ</span>
            <span class="e-avatar e-avatar-xsmall e-avatar-circle">SJ</span>
    </div>
    `
})

export class AppComponent { }




