

import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { TooltipComponent, Position } from '@syncfusion/ej2-angular-popups';

@Component({
    selector: 'my-app',
    template: `
    <div style='display: inline-flex;position:  relative;left:  50%;transform:  translateX(-50%);margin-top:  100px;'>
      <div>
        <ejs-tooltip #tooltip id='tooltip' content='Tooltip content' >
            <button ejs-button id="target">Show Tooltip</button>
        </ejs-tooltip>
    </div>
    <div>
         <select id="positions" (change)="onChange($event.target!)" class="form-control">
             <option value="TopLeft">Top Left</option>
             <option value="TopCenter" selected>Top Center</option>
             <option value="TopRight">Top Right</option>
             <option value="BottomLeft">Bottom Left</option>
             <option value="BottomCenter">Bottom Center</option>
             <option value="BottomRight">Bottom Right</option>
             <option value="LeftTop">Left Top</option>
             <option value="LeftCenter">Left Center</option>
             <option value="LeftBottom">Left Bottom</option>
             <option value="RightTop">Right Top</option>
             <option value="RightCenter">Right Center</option>
             <option value="RightBottom">Right Bottom</option>
        </select>
    </div>
    </div>
    `,
    styles: [
        `
    #tooltip {
        padding: 5px;
        margin-right: 20px;
    }
    `,
    ],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    @ViewChild('tooltip') public control : TooltipComponent| any;

    onChange(value: string | any) {
        this.control.position = value.value as Position;
    }
}


