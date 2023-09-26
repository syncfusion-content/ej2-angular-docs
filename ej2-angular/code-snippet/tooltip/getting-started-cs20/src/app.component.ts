

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <p>A green home is a type of house designed to be
            <ejs-tooltip id='tooltip' width='300px' height='60px' isSticky='true' [content]='tooltipContent'>
            <a><u>environmentally friendly</u></a>
            </ejs-tooltip> and sustainable. And also focuses on the efficient use of "energy, water, and building materials." As green homes
            have become more prevalent we have also seen the emergence of green affordable housing.
        </p>
        `,
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    tooltipContent: HTMLElement = document.createElement('div');
    constructor() {
        (this as any).tooltipContent =
            '<div id="tooltipContent"><p><b>Environmentally friendly</b> or environment-friendly, (also referred to as eco-friendly, nature-friendly, and green) are marketing and sustainability terms referring to goods and services, laws, guidelines and policies that inflict reduced, minimal, or no harm upon ecosystems or the environment.</p></div>';
    }
}


