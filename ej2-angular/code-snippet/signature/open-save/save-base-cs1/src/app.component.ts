import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { SignatureModule } from '@syncfusion/ej2-angular-inputs'
import { DialogModule } from '@syncfusion/ej2-angular-popups'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component, ViewChild } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { SignatureComponent } from '@syncfusion/ej2-angular-inputs';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';

enableRipple(true);

@Component({
imports: [
        FormsModule,DialogModule,ButtonModule,SignatureModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
            <h4>Sign here</h4>
        <div id ="signature-control">
            <canvas ejs-signature #signature id="signature"></canvas>
        </div>
        <button ejs-button id="save" cssClass="e-primary" (click)="onSave()">Save as Base64</button>
        <ejs-dialog #dialog header="Base64 of the signature" [animationSettings]="animationSettings" showCloseIcon='true' width="80%" visible="false"></ejs-dialog></div>`
})
export class AppComponent {
    @ViewChild('signature')
    public signature?: SignatureComponent;
    @ViewChild('dialog')
    public Dialog?: DialogComponent;
    public animationSettings: Object = { effect: 'Zoom',  duration: 400 };
    onSave() {
        this.Dialog!.content = this.signature!.getSignature();
        this.Dialog!.show();
    }
}


