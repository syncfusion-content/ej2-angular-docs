

import { Component, ViewChild, Inject } from '@angular/core';
import { TooltipComponent } from '@syncfusion/ej2-angular-popups';
import { Draggable } from '@syncfusion/ej2-base';

@Component({
    selector: 'my-app',
    template: `
    <ejs-tooltip #tooltip id='targetContainer' content='Drag me !!!' target='#demoSmart' [animation]='tooltipAnimation'>
        <div id="demoSmart">
        </div>
    </ejs-tooltip>
    `,
    styles: [`
    #targetContainer {
        position: relative;
        height: 360px;
        overflow: hidden;
        border: 1px solid #c8c8c8;
        display: block;
    }

    #demoSmart {
        width: 50px;
        height: 50px;
        background: rebeccapurple;
        position: absolute;
        left: 35%;
        top: 35%;
    }
    `]
})

export class AppComponent {
    @ViewChild('tooltip')
    public tooltipControl: TooltipComponent | any ;
    public tooltipAnimation: Object = {
        open: { effect: 'None' },
        close: { effect: 'None' }
    };

    ngOnInit(): void {
        let ele: HTMLElement = document.getElementById('demoSmart') as HTMLElement;
        let drag: Draggable = new Draggable(ele, {
            clone: false,
            dragArea: '#targetContainer',
            drag: (args: any) => {
                this.tooltipControl.refresh(args.element);
            },
            dragStart: (args: any) => {
                this.tooltipControl.open(args.element);
            },
            dragStop: (args: any) => {
                this.tooltipControl.close();
            }
        });
    }
}



