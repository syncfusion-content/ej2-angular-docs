


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div id='container'>
        <div class='wrap'>
            <ejs-slider id='slider'  [min]=0 [max]=100 [value]=30 [tooltip]="tooltipData" [ticks]="ticksData" ></ejs-slider>
        </div>
    </div>`,
    styleUrls:['./index.css']
})

export class AppComponent {
    public tooltipData: Object = { isVisible: true, format: 'C2' };
    public ticksData: Object = { placement: 'After', format: 'C2', largeStep: 20, smallStep: 10, showSmallTicks: true };
}



