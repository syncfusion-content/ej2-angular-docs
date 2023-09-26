import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div id='element'>
            <div class="badge-block">
                <div class="contact svg_icons"></div>
                <!-- Success Colored Bottom Dot Badge -->
                <span class="e-badge e-badge-success e-badge-overlap e-badge-dot e-badge-bottom"></span>
            </div>

            <div class="badge-block">
                <div class="skype svg_icons"></div>
                <!-- Info Colored Bottom Dot Badge -->
                <span class="e-badge e-badge-info e-badge-overlap e-badge-dot e-badge-bottom"></span>
            </div>

            <div class="badge-block">
                <div class="facebook svg_icons"></div>
                <!-- Info Colored Dot Badge -->
                <span class="e-badge e-badge-info e-badge-overlap e-badge-dot"></span>
            </div>

            <div class="badge-block">
                <div class="pinterest svg_icons"></div>
                <!-- Danger Colored Dot Badge -->
                <span class="e-badge e-badge-danger e-badge-overlap e-badge-dot  e-badge-bottom"></span>
            </div>
    </div>
    `
})

export class AppComponent { }




