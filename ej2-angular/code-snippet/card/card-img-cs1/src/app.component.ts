import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'



import { Component, ViewChild } from '@angular/core';

@Component({
imports: [
        
    ],


standalone: true,
    selector: 'app-container',
    template: `
        <div class="e-card">
            <div class="e-card-image">
                <div class="e-card-title">JavaScript </div>
            </div>
            <div class="e-card-content"> JavaScript Succinctly was written to give readers an accurate, concise examination of JavaScript objects and their supporting nuances, such as complex values, primitive values, scope, inheritance, the head object, and more. </div>
        </div>
        `
})

export class AppComponent {
    @ViewChild('element') element: any;

    ngAfterViewInit() {
    }
}


