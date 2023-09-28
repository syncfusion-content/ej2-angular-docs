

import { Component, ViewChild } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { SignatureComponent } from '@syncfusion/ej2-angular-inputs';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<div id="input">
                <input type="text" id="text" placeholder="Enter the Base64 or URL of signature" >
                <button ejs-button cssClass="e-btn e-primary" (click)="open()">Open</button>
            </div>
            <div id="signature-control">
            <canvas ejs-signature #signature id="signature"></canvas>
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



