

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <ejs-tooltip id="tooltip" content='Tooltip arrow customized' cssClass='custom-tip'>
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

    .custom-tip.e-tooltip-wrap {
        padding: 4px;
    }

    .custom-tip.e-tooltip-wrap .e-arrow-tip.e-tip-bottom {
      height: 20px;
      width: 12px;
    }

    .custom-tip.e-tooltip-wrap .e-arrow-tip.e-tip-top {
      height: 20px;
      width: 12px;
    }

    .custom-tip.e-tooltip-wrap .e-arrow-tip.e-tip-left {
      height: 12px;
      width: 20px;
    }

    .custom-tip.e-tooltip-wrap .e-arrow-tip.e-tip-right {
      height: 12px;
      width: 20px;
    }

    .custom-tip.e-tooltip-wrap .e-arrow-tip-outer.e-tip-bottom {
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 20px solid #616161;
    }

    .custom-tip.e-tooltip-wrap .e-arrow-tip-outer.e-tip-top {
      border-bottom: 20px solid #616161;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
    }

    .custom-tip.e-tooltip-wrap .e-arrow-tip-outer.e-tip-left {
      border-bottom: 6px solid transparent;
      border-right: 20px solid #616161;
      border-top: 6px solid transparent;
    }

    .custom-tip.e-tooltip-wrap .e-arrow-tip-outer.e-tip-right {
      border-bottom: 6px solid transparent;
      border-left: 20px solid #616161;
      border-top: 6px solid transparent;
    }

    .custom-tip.e-tooltip-wrap .e-arrow-tip-inner.e-tip-bottom {
      border-left: 12px solid transparent;
      border-right: 5px solid transparent;
      border-top: 19px solid #616161;
    }

    .custom-tip.e-tooltip-wrap .e-arrow-tip-inner.e-tip-top {
      border-bottom: 19px solid #616161;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
    }

    .custom-tip.e-tooltip-wrap .e-arrow-tip-inner.e-tip-left {
      border-bottom: 5px solid transparent;
      border-right: 19px solid #616161;
      border-top: 5px solid transparent;
    }

    .custom-tip.e-tooltip-wrap .e-arrow-tip-inner.e-tip-right {
      border-bottom: 5px solid transparent;
      border-left: 19px solid #616161;
      border-top: 5px solid transparent;
    }
    `],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
}



