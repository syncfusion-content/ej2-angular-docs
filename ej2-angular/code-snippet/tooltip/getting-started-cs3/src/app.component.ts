

import { Component, ViewChild } from '@angular/core';
import { TooltipComponent, TooltipAnimationSettings } from '@syncfusion/ej2-angular-popups';

@Component({
    selector: 'my-app',
    template: `
    <ejs-tooltip id="tooltip" #tooltipAnimate content='Tooltip animation effect' opensOn='Custom' (click)='onCustomClick($event)'>
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
    @ViewChild('tooltipAnimate')
    public tooltipControl : TooltipComponent | any;
    onCustomClick(args: any): void {
        if (args.target.getAttribute('data-tooltip-id')) {
            let closeAnimation: TooltipAnimationSettings = { effect: 'FadeOut', duration: 1000 }
            this.tooltipControl.close(closeAnimation);
        } else {
            let openAnimation: TooltipAnimationSettings = { effect: 'FadeIn', duration: 1000 }
            this.tooltipControl.open(args.target, openAnimation);
        }
    }
}



