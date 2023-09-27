

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<h4>Sign here</h4>
            <!-- To Render Signature. -->
            <canvas ejs-signature #signature id="signature"></canvas>`
})
export class AppComponent {}


