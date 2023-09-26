

import { Component, OnInit } from '@angular/core';
import { AnimationModel, FontModel } from '@syncfusion/ej2-progressbar';
@Component({
    selector: 'my-app',
    template:
    `<ejs-progressbar  id='percentage' type='Linear' height='60' width='90%'  trackThickness=24  progressThickness=24 secondaryProgressThickness=20 value=100 [showProgressValue]='showProgressValue' [labelStyle]='labelStyle' [animation]='animation'>
     </ejs-progressbar>`
})
export class AppComponent implements OnInit {
    public showProgressValue?: boolean;
    public labelStyle?: FontModel;
    public animation?: AnimationModel;
    ngOnInit(): void {
      this.labelStyle = { color: '#FFFFFF' };
      this.showProgressValue = true;
      this.animation = { enable: true, duration: 2000, delay: 0 };
    }
}


