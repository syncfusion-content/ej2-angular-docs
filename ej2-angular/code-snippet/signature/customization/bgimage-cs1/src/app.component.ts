

import { Component, ViewChild } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { SignatureComponent } from '@syncfusion/ej2-angular-inputs';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<div id="input">
                <input type="text" id="text" placeholder="Enter the URL of the background Image" >
                <button ejs-button cssClass="e-primary" (click)="setBgImage()">Set Background Image</button>
            </div>
            <div id="signature-control">
            <canvas ejs-signature #signature id="signature"></canvas>
            </div>`
})
export class AppComponent {
    @ViewChild('signature')
    public signature?: SignatureComponent;
    setBgImage(): void {
        let bgImage = (document.getElementById('text') as any).value;
        this.signature!.backgroundImage = bgImage;
    }
}



