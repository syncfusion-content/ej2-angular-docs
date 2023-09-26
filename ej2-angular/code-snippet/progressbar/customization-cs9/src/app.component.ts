

import { Component, OnInit } from '@angular/core';
import { FontModel, AnimationModel } from '@syncfusion/ej2-progressbar';
@Component({
    selector: 'my-app',
    template: `
    <ejs-progressbar id='percentage' type='Linear'  trackThickness=24  progressThickness=24  value = 90 minimum=10 maximum=90 [labelStyle]='labelStyle' [showProgressValue]='showProgressValue' [animation]='animation'>
    </ejs-progressbar>`
 })
export class AppComponent implements OnInit {
    public animation?: AnimationModel;
    public labelStyle?: FontModel;
    public showProgressValue?: boolean;
    ngOnInit(): void {
        this.animation = { enable: true, duration: 2000, delay: 0 };
        this.labelStyle = { color: '#FFFFFF' };
        this.showProgressValue = true;
    }
}



