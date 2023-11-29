

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="e-section-control">
                <h4>Sign here</h4>
            <!-- To Render Signature. -->
            <canvas ejs-signature #signature id="signature"></canvas></div>`
})
export class AppComponent {}


