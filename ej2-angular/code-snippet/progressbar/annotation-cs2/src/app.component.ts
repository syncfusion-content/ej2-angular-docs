

import { Component, OnInit } from '@angular/core';
import { FontModel,AnimationModel, ITextRenderEventArgs } from '@syncfusion/ej2-progressbar';
@Component({
    selector: 'my-app',
    template:
    `<ejs-progressbar  id='percentage' type='Linear' [trackThickness]='trackThickness' [progressThickness]='progressThickness'  [value]='value'   [labelStyle]='labelStyle'  (textRender)='textRender2($event)'   [showProgressValue]='showProgressValue' [animation]='animation'>
    </ejs-progressbar>`
})
export class AppComponent implements OnInit {
    public animation?: AnimationModel;
    public value?: number;
    public trackThickness?: number;
    public progressThickness?: number;
    public labelStyle?: FontModel;
    public showProgressValue?: boolean;
    public textRender2(args: ITextRenderEventArgs): void {
        args.text = '50';
     }
    ngOnInit(): void {
        this.trackThickness = 24;
        this.progressThickness = 24;
        this.value = 50;
        this.animation = { enable: true, duration: 2000, delay: 0 };
        this.labelStyle = { color: '#FFFFFF' };
        this.showProgressValue = true;
    }
}


