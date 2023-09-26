


import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { TooltipComponent } from '@syncfusion/ej2-angular-popups';
import { RadioButtonComponent, ChangeArgs, ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'my-app',
    template: `
     <div id="customization">
      <ejs-tooltip #tooltipcurve cssClass='curvetips e-tooltip-css' content='Tooltip arrow customized'>
            <button id="target">
                Curve Tip Arrow
            </button>
        </ejs-tooltip>
       </div>
        <div id="positions">
            <ul>
             <li><ejs-radiobutton label="TopCenter" value="TopCenter" name="state" checked='true' (change)="onChange($event)"></ejs-radiobutton></li>
              <li><ejs-radiobutton label="BottomLeft" value="BottomLeft" name="state" (change)="onChange($event)"></ejs-radiobutton></li>
            </ul>
        </div>
     <div id="balloon">
      <ejs-tooltip #tooltip cssClass='bubbletip e-tooltip-css' content='Tooltip arrow customized as balloon tip' position='TopRight'>
            <button id="bubbletip">
                Bubble Tip Arrow
            </button>
        </ejs-tooltip>
       </div>
        <div id="btn">
            <ul>
             <li><ejs-radiobutton label="TopRight" value="TopRight" name="default" [checked]="true" (change)="onChanged($event)"></ejs-radiobutton></li>
              <li><ejs-radiobutton label="BottomLeft" value="BottomLeft" name="default" (change)="onChanged($event)"></ejs-radiobutton></li>
            </ul>
        </div>
        <ejs-tooltip #tooltip cssClass='pointertip e-tooltip-css' content='Disabled Tooltip Pointer' mouseTrail='true' [showTipPointer]='false'>
        <button id="tooltip">
            Disabled Tip Arrow
        </button>
        </ejs-tooltip>
    `,
    encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
    @ViewChild('tooltip')
    public tooltipControl: TooltipComponent | any ;
    @ViewChild('tooltipcurve')
    public tooltipCurve: TooltipComponent | any;
    tooltipCustom: any;
    constructor() { }
    onChange(args: ChangeArgs): void {
        this.tooltipCurve.position = args.value as any;
        this.tooltipCurve.dataBind();
    }
    onChanged(args: ChangeArgs): void {
         this.tooltipCustom.position = args.value as any;
        if( this.tooltipCustom.position == 'BottomLeft'){
             this.tooltipCustom.offsetY = -30;
        } else {
             this.tooltipCustom.offsetY = 0;
        }
         this.tooltipCustom.dataBind();
    }
}



