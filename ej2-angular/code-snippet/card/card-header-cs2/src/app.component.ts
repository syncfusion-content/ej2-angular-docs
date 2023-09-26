

import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
        <div tabindex="0" class="e-card" id="basic">
            <div class="e-card-header">
                <div class="e-card-header-caption">
                    <div class="e-card-title">Advanced UWP</div>
                </div>
            </div>
            <div class="e-card-content">
                Communicating with Windows 10 and Other Apps, the second in a five-part series written by Succinctly series
                author Matteo Pagani. To download the complete white paper, and other papers in the series, visit
                the White Paper section of Syncfusion’s Technology Resource Portal.
            </div>
        </div>
        `
})

export class AppComponent {
    @ViewChild('element') element: any;

}


