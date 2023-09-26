


import { Component } from '@angular/core';
import { PreventableEventArgs } from '@syncfusion/ej2-angular-calendars';

@Component({
    selector: 'app-root',
    template: `<ejs-datepicker (close)='onClose($event)' placeholder='Enter date'></ejs-datepicker>`
})
export class AppComponent {
    onClose(args: PreventableEventArgs | any): void {
        args.preventDefault();
    }
}



