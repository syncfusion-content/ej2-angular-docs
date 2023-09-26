


import { Component} from '@angular/core';
import { MaskedDateTimeService } from '@syncfusion/ej2-angular-calendars';
@Component({
    selector: 'app-root',
    template: `
        <ejs-datepicker  [enableMask]="enableMaskSupport"></ejs-datepicker>
        `,
    providers: [MaskedDateTimeService],
})
export class AppComponent {
constructor( ) {
    }
    public enableMaskSupport: boolean = true;
}


