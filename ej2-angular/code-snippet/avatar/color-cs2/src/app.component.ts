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
            <span class="e-avatar e-avatar-xlarge e-avatar-circle green">AJ</span>
            <span class="e-avatar e-avatar-xlarge e-avatar-circle violet">JK</span>
            <span class="e-avatar e-avatar-xlarge e-avatar-circle rose">EL</span>
            <span class="e-avatar e-avatar-xlarge e-avatar-circle blue">SR</span>
            <span class="e-avatar e-avatar-xlarge e-avatar-circle red">PD</span>
    </div>
    `
})

export class AppComponent { }
