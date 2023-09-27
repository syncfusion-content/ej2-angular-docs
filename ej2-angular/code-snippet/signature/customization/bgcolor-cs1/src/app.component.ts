

import { Component, ViewChild } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { SignatureComponent } from '@syncfusion/ej2-angular-inputs';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<div id="input">
                <input type="text" id="text" placeholder="Enter the Background Color Value" >
                <button ejs-button cssClass="e-primary" (click)="setBgColor()">Set Background Color</button>
            </div>
            <div id="signature-control">
            <canvas ejs-signature #signature id="signature"></canvas>
            </div>`
})
export class AppComponent {
    @ViewChild('signature')
    public signature?: SignatureComponent;
    setBgColor(): void {
        let bgColor = (document.getElementById('text') as any).value;
        this.signature!.backgroundColor = bgColor;
    }
}



