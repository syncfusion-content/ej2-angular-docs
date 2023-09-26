


import { Component} from '@angular/core';
import { MaskedDateTimeService } from '@syncfusion/ej2-angular-calendars';
@Component({
    selector: 'app-root',
    template: `
        <ejs-datetimepicker [enableMask]="enableMaskSupport"></ejs-datetimepicker>
        `,
    providers: [MaskedDateTimeService],
})
export class AppComponent {
constructor( ) {  
    }
    public enableMaskSupport: boolean = true;
}



