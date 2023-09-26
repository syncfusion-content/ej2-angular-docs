


import { Component, ViewChild } from '@angular/core';
import { TooltipComponent } from '@syncfusion/ej2-angular-popups';

@Component({
    selector: 'my-app',
    template: `
    <div id="sample">
    <div id="first">
    <ejs-tooltip id="showTooltip" opensOn='Hover' content='Tooltip from hover' position='BottomCenter'>
        <button class="blocks" id="tooltiphover">Hover me</button>
    </ejs-tooltip>
    <ejs-tooltip id="showTooltip" opensOn='Click' content='Tooltip from click' position='BottomCenter'>
          <button class="blocks" id="tooltipclick">Click me</button>
    </ejs-tooltip>
    </div>
    <div id="second">
    <ejs-tooltip id="showTooltip" content='Click close icon to close me' [isSticky]='true' position='BottomCenter'>
          <button class="blocks" id="tooltipclick">Sticky mode</button>
    </ejs-tooltip>
    <ejs-tooltip id="showTooltip" content='Opens and closes Tooltip with delay of <i>1000 milliseconds</i>' position='BottomCenter' [openDelay]='1000' [closeDelay]='1000'>
          <button class="blocks" id="tooltipclick">Tooltip with delay</button>
    </ejs-tooltip>
    </div>
    <div id="third">
    <ejs-tooltip #tooltip id="showTooltip" content='Tooltip from custom mode' opensOn='Custom' position='BottomCenter' (dblclick)='customOpen($event)'>
          <button class="blocks" id="tooltipclick">Double Click on Me</button>
    </ejs-tooltip>
    <ejs-tooltip #tooltip id="showTooltip" content='Tooltip from focus' position='BottomCenter'>
           <div id="textbox" class="e-float-input">
              <input id="focus" type="text" placeholder="Focus and blur"/>
           </div>
    </ejs-tooltip>
    </div>
    </div>
    `,
})

export class AppComponent {
    @ViewChild('tooltip')
    public tooltipControl: TooltipComponent | any ;
    tooltipCustom: any;
    constructor() { }
     customOpen(args: any): void {
        if (args.target.getAttribute("data-tooltip-id")) {
            this.tooltipCustom.close();
        } else {
            this.tooltipCustom.open(args.target);
        }
    }
}



