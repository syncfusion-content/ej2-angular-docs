

import { Component, ViewChild } from '@angular/core';
import { TooltipComponent } from '@syncfusion/ej2-angular-popups';

@Component({
    selector: 'my-app',
    template: `
    <ejs-tooltip #tooltip id="tooltip" content='Tooltip from custom mode' opensOn='Custom' (dblclick)='customOpen($event)'>
            <span>Double-click to open Tooltip</span>
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
    @ViewChild('tooltip')
    public tooltipControl: TooltipComponent | any ;
    constructor() { }
    customOpen(args: any): void {
        if (args.target.getAttribute("data-tooltip-id")) {
            this.tooltipControl.close();
        } else {
            this.tooltipControl.open(args.target);
        }
    }
}


