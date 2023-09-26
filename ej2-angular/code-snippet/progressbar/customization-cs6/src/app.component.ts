

import { Component, OnInit } from '@angular/core';
import { FontModel,AnimationModel, ITextRenderEventArgs } from '@syncfusion/ej2-progressbar';
@Component({
    selector: 'my-app',
    template: `<ejs-progressbar  id='percentage' type='Linear' height='60' width='90%' trackThickness=24  progressThickness=24 secondaryProgress=60 value = 50 secondaryProgressColor='green' progressColor='#E3165B' trackColor='#F8C7D8' [labelStyle]='labelStyle'    (textRender)='textRender($event)'   [showProgressValue]='showProgressValue' [animation]='animation'>
    </ejs-progressbar>`
})
export class AppComponent implements OnInit {
    public animation?: AnimationModel;
    public labelStyle?: FontModel;
    public showProgressValue?: boolean;
    public textRender(args: ITextRenderEventArgs): void {
        args.text = '50';
    }
    ngOnInit(): void {
        this.animation = { enable: true, duration: 2000, delay: 0 };
        this.labelStyle = { color: '#FFFFFF' };
        this.showProgressValue = true;
    }
}


