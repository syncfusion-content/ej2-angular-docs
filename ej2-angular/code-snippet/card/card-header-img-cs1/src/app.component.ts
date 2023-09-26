

import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
        <div style="margin: 50px;">
        <div tabindex="0" class="e-card">
            <div class="e-card-header">
                <div class="e-card-header-image football e-card-corner"></div>
                <div class="e-card-header-caption">
                    <div class="e-card-header-title"> Laura Callahan</div>
                    <div class="e-card-sub-title">Sales Coordinator and Representative</div>
                </div>
            </div>
        </div>
        </div>
        <div style="margin-left: 50px;margin-top:30px">
        <div tabindex="0" class="e-card">
            <div class="e-card-header">
                <div class="e-card-header-caption">
                    <div class="e-card-header-title"> Laura Callahan</div>
                    <div class="e-card-sub-title">Sales Coordinator and Representative</div>
                </div>
                <div class="e-card-header-image football"></div>
            </div>
        </div>
        </div>
        `
})

export class AppComponent {
    @ViewChild('element') element: any;

}


