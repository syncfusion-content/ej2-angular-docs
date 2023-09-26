


import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';

//enable ripple style
enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<ejs-timepicker placeholder='Select a time' ></ejs-timepicker>`
})
export class AppComponent {
    constructor() {
    }
}



