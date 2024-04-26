import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';


import { Component } from '@angular/core';
import { MaskedDateTimeService } from '@syncfusion/ej2-angular-calendars';
@Component({
    imports: [
        TimePickerModule
    ],
    standalone: true,
    selector: 'app-root',
    templateUrl: './maskplaceholder.html',
    providers: [MaskedDateTimeService],
})
export class AppComponent {
constructor( ) {
    }
    public enableMaskSupport: boolean = true;
    public maskPlaceholderValue: Object = {hour: 'h', minute: 'm', second: 's'}
}


