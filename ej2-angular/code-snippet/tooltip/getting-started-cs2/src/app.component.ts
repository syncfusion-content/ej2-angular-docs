

import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <ejs-tooltip id="tooltip" content='Tooltip animation effect' [animation]='TooltipAnimation'>
            Show tooltip
    </ejs-tooltip>
    `,
    styles: [`
    #tooltip {
        display: block;
        background-color: #cfd8dc;
        border: 3px solid #eceff1;
        box-sizing: border-box;
        margin: 80px auto;
        padding: 20px 0;
        width: 200px;
        text-align: center;
        color: #424242;
        font-size: 20px;
    }
    `]
})

export class AppComponent {
    public TooltipAnimation: Object = {
        open: { effect: 'ZoomIn', duration: 1000, delay: 0 },
        close: { effect: 'ZoomOut', duration: 500, delay: 0 }
    };
}



