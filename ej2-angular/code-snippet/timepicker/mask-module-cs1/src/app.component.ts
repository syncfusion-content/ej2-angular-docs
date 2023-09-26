


import { Component } from '@angular/core';
import { MaskedDateTimeService } from '@syncfusion/ej2-angular-calendars';

@Component({
    selector: 'app-root',
    template: `
        <ejs-timepicker [enableMask]="enableMaskSupport"></ejs-timepicker>
        `,
    providers: [MaskedDateTimeService],
})
export class AppComponent {
    public format: string = "HH:mm";
    public enableMaskSupport: boolean = true;
}



