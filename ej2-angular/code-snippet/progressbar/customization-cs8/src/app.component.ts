

import { Component, OnInit } from '@angular/core';
import { FontModel, AnimationModel, IProgressValueEventArgs } from '@syncfusion/ej2-progressbar';
@Component({
    selector: 'my-app',
    template:
    `<ejs-progressbar id='percentage' type='Linear'  trackThickness=24  progressThickness=24  value = 100 [labelStyle]='labelStyle' (progressCompleted)='progressCompleted($event)' [showProgressValue]='showProgressValue' [animation]='animation'>
    </ejs-progressbar>`
 })
export class AppComponent implements OnInit {
    public animation?: AnimationModel;
    public labelStyle?: FontModel;
    public showProgressValue?: boolean;
    public progressCompleted(args: IProgressValueEventArgs): void {
        args.progressColor = '#2BB20E';
    }
    ngOnInit(): void {
        this.animation = { enable: true, duration: 2000, delay: 0 };
        this.labelStyle = { color: '#FFFFFF' };
        this.showProgressValue = true;
    }
}



