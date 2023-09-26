import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div id='element'>
            <div style="width: 200px;margin: 10px auto;">
                <div class="badge-block">
                    <div class="whatsapp svg_icons"></div>
                    <!-- Warning Colored Notification Badge -->
                    <span class="e-badge e-badge-warning e-badge-notification e-badge-overlap leftTop">99+</span>
                </div>

                <div class="badge-block">
                    <div class="facebook svg_icons"></div>
                    <!-- Danger Colored Notification Badge -->
                    <span class="e-badge e-badge-danger e-badge-notification e-badge-overlap leftTop">99+</span>
                </div>

                <div class="badge-block">
                    <div class="skype svg_icons"></div>
                    <!-- Secondary Colored Notification Badge -->
                    <span class="e-badge e-badge-secondary e-badge-notification e-badge-overlap leftTop">18</span>
                </div>
            </div>
            <div style="width: 200px;margin: 10px auto;">
                <div class="badge-block">
                    <div class="whatsapp svg_icons"></div>
                    <!-- Warning Colored Notification Badge -->
                    <span class="e-badge e-badge-warning e-badge-notification e-badge-overlap leftBottom">99+</span>
                </div>

                <div class="badge-block">
                    <div class="facebook svg_icons"></div>
                    <!-- Danger Colored Notification Badge -->
                    <span class="e-badge e-badge-danger e-badge-notification e-badge-overlap leftBottom">99+</span>
                </div>

                <div class="badge-block">
                    <div class="skype svg_icons"></div>
                    <!-- Secondary Colored Notification Badge -->
                    <span class="e-badge e-badge-secondary e-badge-notification e-badge-overlap leftBottom">18</span>
                </div>
            </div>
        </div>
    `
})

export class AppComponent { }




