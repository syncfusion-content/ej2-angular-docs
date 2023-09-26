

import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
        <div tabindex="0" class="e-card" id="basic">
            <div class="e-card-title">Explore Cities</div>
            <div class="e-card-separator"></div>
            <div class="e-card-content">
                Sydney is a city on the east coast of Australia. Sydney is the capital city of New South Wales. About four million people
                live in Sydney which makes it the biggest city in Oceania.
            </div>
            <div class="e-card-separator"></div>
            <div class="e-card-content">
                New York City has been described as the cultural, financial, and media capital of the world, and exerts a significant impact
                upon commerce and etc.,
            </div>
            <div class="e-card-separator"></div>
            <div class="e-card-content">
                Malaysia is one of the Southeast Asian countries, on a peninsula of the Asian continent, to a certain extent; it can be recognized
                as part of the Asian continent.
            </div>
        </div>
        `
})

export class AppComponent {
    @ViewChild('element') element: any;

}


