

import { Component, OnInit } from '@angular/core';
import { AnimationModel } from '@syncfusion/ej2-progressbar';
@Component({
    selector: 'my-app',
    template:
    ` <ejs-progressbar  id='percentage' type='Linear' height='60' value=20 [isIndeterminate]='isIndeterminate' [animation]='animation'>
      </ejs-progressbar>`
})
export class AppComponent implements OnInit {
    public isIndeterminate?: boolean;
    public animation?: AnimationModel;
    ngOnInit(): void {
        this.animation = {enable: true};
        this.animation = { enable: true, duration: 2000, delay: 0 };
    }
}


