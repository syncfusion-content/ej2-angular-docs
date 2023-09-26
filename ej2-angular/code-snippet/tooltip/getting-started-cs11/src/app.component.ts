

import { Component, ViewChild } from '@angular/core';
import { TooltipComponent } from '@syncfusion/ej2-angular-popups';

@Component({
    selector: 'my-app',
    template: `
    <div id='container'>
        <table style="margin: 150px auto 0 auto;transform: translateY(-50%);">
            <tbody>
                <tr>
                    <td style="padding:25px">
                      <ejs-tooltip id="tooltipHover" opensOn='Hover' content='Tooltip from hover' >
                       <div>
                        <input ejs-button  class="blocks" type="button" value="Hover Me!"/></div>
                      </ejs-tooltip>
                    </td>
                    <td style="padding:25px">
                      <ejs-tooltip id="tooltipClick"  opensOn='Click' content='Tooltip from click'>
                       <div>
                        <input ejs-button  class="blocks" type="button" value="Click Me!"/></div>
                      </ejs-tooltip>
                    </td>
                </tr>
                <tr>
                    <td style="padding:25px">
                      <ejs-tooltip id="tooltipFocus" opensOn='Focus' content='Tooltip from focus' target='#input'>
                         <div>
                          <input id='input' class="blocks e-float-input" type="text" placeholder="Focus and blur"/>
                        </div>
                      </ejs-tooltip>
                    </td>
                    <td style="padding:25px">
                      <ejs-tooltip id="tooltipCustom" #tooltipCustom opensOn='custom' content='Tooltip from custom mode'>
                        <div>
                          <input ejs-button  class="blocks" id="tooltipOpen" type="button" value="Click to open tooltip manually" (click)='onCustomOpen($event)'/>
                        </div>
                      </ejs-tooltip>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    `,
    styles: [`
    .blocks {
        width: 260px;
    }
    `]
})

export class AppComponent {
    @ViewChild('tooltipCustom')
    public tooltipCustom : TooltipComponent | any;
    constructor() { }
    onCustomOpen(args: any): void {
        if (args.target.getAttribute('data-tooltip-id')) {
            this.tooltipCustom.close();
        } else {
            this.tooltipCustom.open(args.target);
        }
    }
}



