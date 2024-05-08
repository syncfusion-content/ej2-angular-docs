import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { SignatureModule } from '@syncfusion/ej2-angular-inputs'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component } from '@angular/core';

@Component({
imports: [
        FormsModule,SignatureModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <h4>Sign here</h4>
            <!-- To Render Signature. -->
            <canvas ejs-signature #signature id="signature"></canvas></div>`
})
export class AppComponent {}


