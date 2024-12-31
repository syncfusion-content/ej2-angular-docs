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
            <h1>Color Customization <span class="e-badge e-badge-primary e-badge-pill green">New</span></h1>
            <h1>Color Customization <span class="e-badge e-badge-primary e-badge-pill blue">New</span></h1>
            <h1>Color Customization <span class="e-badge e-badge-primary e-badge-pill purple">New</span></h1>
            <h1>Color Customization <span class="e-badge e-badge-primary e-badge-pill gradient">New</span></h1>
    </div>
    `
})

export class AppComponent { }

