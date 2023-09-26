


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./index.css'],
    template: `<ejs-daterangepicker [minDays]='minDays' [maxDays]='maxDays' placeholder='Select a range'></ejs-daterangepicker>`
})
export class AppComponent {
    public minDays: Number = 4;
    public maxDays: Number = 7;
     constructor() {
    }
}



