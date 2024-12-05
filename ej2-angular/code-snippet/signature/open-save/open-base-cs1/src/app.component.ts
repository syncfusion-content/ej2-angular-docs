import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { SignatureModule } from '@syncfusion/ej2-angular-inputs'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { enableRipple } from '@syncfusion/ej2-base'
import { Component, ViewChild } from '@angular/core';
import { SignatureComponent } from '@syncfusion/ej2-angular-inputs';

enableRipple(true);

@Component({
imports: [
        FormsModule,ButtonModule,SignatureModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <div id="input">
                <input type="text" id="text" placeholder="Enter the Base64 or URL of signature" >
                <button ejs-button cssClass="e-btn e-primary" (click)="open()">Open</button>
            </div>
            <div id="signature-control">
            <canvas ejs-signature #signature id="signature"></canvas>
            </div>
            </div>`
})
export class AppComponent {
    @ViewChild('signature')
    public signature?: SignatureComponent;
    open(): void {
        let sign = (document.getElementById('text') as any).value;
        this.signature!.load(sign);
    }
}



