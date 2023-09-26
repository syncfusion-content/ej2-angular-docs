

import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
        <div tabindex="0" class="e-card">
            <div class="e-card-header">
                <div class="e-card-header-image football"></div>
                <div class="e-card-header-caption">
                    <div class="e-card-header-title"> Laura Callahan</div>
                    <div class="e-card-sub-title">Sales Coordinator and Representative</div>
                </div>
            </div>
            <div class="e-card-content">
                Laura received a BA in psychology from the University of Washington. She has also completed a course in business French. She reads and writes French.
            </div>
        </div>
        `
})

export class AppComponent {
    @ViewChild('element') element: any;

}


