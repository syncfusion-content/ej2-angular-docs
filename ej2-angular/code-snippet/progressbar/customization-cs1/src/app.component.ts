

import { Component, OnInit } from '@angular/core';
import { AnimationModel } from '@syncfusion/ej2-progressbar';
@Component({
    selector: 'my-app',
    template:
    `<ejs-progressbar  id='percentage' type='Circular' height='60' segmentCount=8 value=100  [animation]='animation'>
     </ejs-progressbar>`
})
export class AppComponent implements OnInit {
    public animation?: AnimationModel;
    ngOnInit(): void {
        this.animation = { enable: true, duration: 2000, delay: 0 };
    }
}


