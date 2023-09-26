

import { Component, OnInit, ViewChild } from '@angular/core';
import { ProgressBar, FontModel, AnimationModel, IProgressValueEventArgs } from '@syncfusion/ej2-progressbar';

@Component({
    selector: 'my-app',
    template:
    `<ejs-progressbar #charts id='charts' type='Linear'  trackThickness=24  progressThickness=24  value = 90 [labelStyle]='labelStyle' (valueChanged)='valueChanged($event)' [showProgressValue]='showProgressValue' [animation]='animation'>
    </ejs-progressbar>
    <button id="reLoad" (click)="onClick()">ValueChanged</button>`
})

export class AppComponent implements OnInit {
    public animation?: AnimationModel;
    public labelStyle?: FontModel;
    public showProgressValue?: boolean;
    @ViewChild('charts')
    public charts?: ProgressBar;
    public valueChanged(args: IProgressValueEventArgs): void {
        args.progressColor = '#2BB20E';
    }
    public onClick = () => {
        this.charts!.value = 50;
    }
    ngOnInit(): void {
        this.animation = { enable: true, duration: 2000, delay: 0 };
        this.labelStyle = { color: '#FFFFFF' };
        this.showProgressValue = true;
    }
}



