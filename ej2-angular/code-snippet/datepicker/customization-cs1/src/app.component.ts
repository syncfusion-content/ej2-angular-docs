

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./index.css'],
    template: `<ejs-datepicker [value]='dateValue' [cssClass]='cssClass'  placeholder='Enter date' (renderDayCell)='onRenderCell($event)'></ejs-datepicker>`
})
export class AppComponent {
onRenderCell($event: any) {
throw new Error('Method not implemented.');
}
    public cssClass: string = 'e-custom-style';
    dateValue: any;
}



