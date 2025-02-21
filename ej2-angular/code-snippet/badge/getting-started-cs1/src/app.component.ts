import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component } from '@angular/core';

@Component({
    imports: [
    ],
    standalone: true,
    selector: 'app-root',
    template: `<div id='element'><h1>Badge Component <span class="e-badge e-badge-primary">New</span></h1></div>`
})

export class AppComponent { }
