


import { Component, ViewChild } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
//enable ripple style
enableRipple(true);

@Component({
    selector: 'app-root',
    styleUrls: ['./style.css'],
    template: `
        <ejs-timepicker [placeholder]='watermark' [cssClass]='customClass'></ejs-timepicker>
        `
})

export class AppComponent {
    public watermark: string = 'Select a time';
    public customClass: string = 'e-custom-style';
}


