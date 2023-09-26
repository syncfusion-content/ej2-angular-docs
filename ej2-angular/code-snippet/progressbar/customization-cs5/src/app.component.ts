

import { Component, OnInit } from '@angular/core';
import { AnimationModel } from '@syncfusion/ej2-progressbar';
@Component({
    selector: 'my-app',
    template: `<ejs-progressbar  id='percentage' type='Circular' height='160px' width='160px'  trackColor='#FFD939' secondaryProgressColor='green' radius='100%' innerRadius='70%' progressColor='white' cornerRadius='Round' trackThickness=80 progressThickness=10 value=60 [animation]='animation'></ejs-progressbar>`
})
export class AppComponent implements OnInit {
    public animation?: AnimationModel;
    ngOnInit(): void {
        this.animation = { enable: true, duration: 2000, delay: 0 };
    }
}


