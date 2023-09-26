

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <ejs-tooltip id="tooltip" content='Tooltip customized' cssClass='customtooltip'>
            Show tooltip
    </ejs-tooltip>
    `,
    styleUrls: ['./custom.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
}



