

import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { SignatureComponent } from '@syncfusion/ej2-angular-inputs';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<h4>Sign here</h4>
            <!-- To Render Signature. -->
            <canvas ejs-signature #signature id="signature" [maxStrokeWidth]="3" [minStrokeWidth]="0.5" [velocity]="0.7"></canvas>`
})
export class AppComponent {

    
}


