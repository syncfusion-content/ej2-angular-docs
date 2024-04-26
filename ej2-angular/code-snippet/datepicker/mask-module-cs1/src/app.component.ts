import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';


import { Component} from '@angular/core';
import { MaskedDateTimeService } from '@syncfusion/ej2-angular-calendars';
@Component({
    imports: [
        DatePickerModule
    ],
    standalone: true,
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


