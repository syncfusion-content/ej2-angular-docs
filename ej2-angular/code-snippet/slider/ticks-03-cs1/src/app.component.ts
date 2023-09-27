


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div id='container'>
        <div class='wrap'>
            <ejs-slider id='slider' [min]= 'min' [max]= 'max' [value]= 'value' [tooltip]='tooltip'
            [ticks] = 'ticks' ></ejs-slider>
        </div>
    </div>`,
    styleUrls:['./index.css']
})

export class AppComponent {
    public min: number = 0;
    public max: number = 100;
    public value: number = 30;
    public ticks: Object =  { placement: 'After', largeStep: 20, smallStep: 10, showSmallTicks: true };
    public tooltip: Object = { placement: 'Before', isVisible: true, showOn: 'Always' };
}



