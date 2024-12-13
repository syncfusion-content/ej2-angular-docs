import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { SignatureModule } from '@syncfusion/ej2-angular-inputs'
import { enableRipple } from '@syncfusion/ej2-base'
import { Component } from '@angular/core';
import { SignatureComponent } from '@syncfusion/ej2-angular-inputs';

enableRipple(true);

@Component({
imports: [
        FormsModule,SignatureModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
            <h4>Sign here</h4>
            <!-- To Render Signature. -->
            <canvas ejs-signature #signature id="signature" [maxStrokeWidth]="3" [minStrokeWidth]="0.5" [velocity]="0.7"></canvas></div>`
})
export class AppComponent {

    
}


