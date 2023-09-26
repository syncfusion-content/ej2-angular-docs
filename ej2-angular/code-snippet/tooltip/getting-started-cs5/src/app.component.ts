

import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <span>Using ng-template</span>
    <p>A green home is a type of house designed to be
        <ejs-tooltip id='tooltip_1'>
            <ng-template #content>
                <h3>Template Content</h3>
                <p><strong>Environmentally friendly</strong> or <strong>environment-friendly</strong>, <i>(also referred to as eco-friendly, nature-friendly, and green)</i> are marketing and sustainability terms referring to goods and services, laws, guidelines and policies that inflict reduced, minimal, or no harm upon ecosystems or the environment.</p>
            </ng-template>
            <a><u>environmentally friendly</u></a>
        </ejs-tooltip> and sustainable. And also focuses on the efficient use of "energy, water, and building materials."
    </p>
    <span>Using HTML Elements</span>
    <p>
        As
        <ejs-tooltip id='tooltip_2' [content]='tooltipContent'>
            <a><u>green homes</u></a>
        </ejs-tooltip>
        have become more prevalent we have also seen the emergence of green affordable housing.
    </p>
    `
})

export class AppComponent {
    tooltipContent: HTMLElement = document.createElement('div');
    constructor() {
        (this as any).tooltipContent = '<h3>HTML Content</h3><p><strong>Environmentally friendly</strong> or <strong>environment-friendly</strong>, <i>(also referred to as eco-friendly, nature-friendly, and green)</i> are marketing and sustainability terms referring to goods and services, laws, guidelines and policies that inflict reduced, minimal, or no harm upon ecosystems or the environment.</p>'
    }
}



