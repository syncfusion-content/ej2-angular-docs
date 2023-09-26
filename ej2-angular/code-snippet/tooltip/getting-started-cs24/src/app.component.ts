

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { TooltipComponent, TooltipEventArgs } from '@syncfusion/ej2-angular-popups';

@Component({
    selector: 'my-app',
    template: `
    <h3> Transition effect </h3>
    <ejs-tooltip id="tooltip" #tooltip class="e-prevent-select" target='.circle-tool' [closeDelay]='1000' [animation]='Animation'
     (beforeRender)='onBeforeRender($event)' (beforeOpen)='onBeforeOpen($event)' (afterClose)='onAfterClose($event)'>
        <div class="circle-tool" style="top:18%;left:5%" title="This is Turtle !!!"></div>
        <div class="circle-tool" style="top:30%;left:30%" title="This is Snake !!!"></div>
        <div class="circle-tool" style="top:80%;left:80%" title="This is Croc !!!"></div>
        <div class="circle-tool" style="top:65%;left:50%" title="This is String Ray !!!"></div>
        <div class="circle-tool" style="top:75%;left:15%" title="This is Blob Fish !!!"></div>
        <div class="circle-tool" style="top:30%;left:70%" title="This is Mammoth !!!"></div>
    </ejs-tooltip>
    `,
    styles: [`
    #tooltip {
        display: block;
        border: 1px solid #c8c8c8;
        height: 200px;
        margin-left: 10px;
        margin-right: 10px;
        position: relative;
    }

    .circle-tool {
        position: absolute;
        width: 20px;
        height: 20px;
        background: #9acd32;
        -moz-border-radius: 50px;
        -webkit-border-radius: 50px;
        border-radius: 50px;
    }
    `],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('tooltip')
    public tooltipControl: TooltipComponent | any ;
    public Animation: Object = {
        open: { effect: 'ZoomIn', duration: 500 },
        close: { effect: 'ZoomOut', duration: 500 }
    };
    onBeforeRender(args: TooltipEventArgs): void {
        if (args.element) {
            this.tooltipControl.animation = { open: { effect: 'None' } };
        }
    }
    onBeforeOpen(args: TooltipEventArgs): void {
        if (args.element) {
            args.element.style.display = 'block';
            args.element.style.transitionProperty = 'left,top';
            args.element.style.transitionDuration = '1000ms';
        }
    }
    onAfterClose(args: TooltipEventArgs): void {
        this.tooltipControl.animation = {
            open: { effect: 'ZoomIn', duration: 500 },
            close: { effect: 'ZoomOut', duration: 500 }
        };
    }
}



