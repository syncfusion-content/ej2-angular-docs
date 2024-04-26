import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';


import { Component} from '@angular/core';
import { MaskedDateTimeService } from '@syncfusion/ej2-angular-calendars';
@Component({
    imports: [
        DateTimePickerModule
    ],
    standalone: true,
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



