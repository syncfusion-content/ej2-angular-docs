import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';


import { Component } from '@angular/core';
import { MaskedDateTimeService } from '@syncfusion/ej2-angular-calendars';
@Component({
    imports: [
        DatePickerModule
    ],
    standalone: true,

    selector: 'app-root',
    templateUrl: './format.html',
    providers: [MaskedDateTimeService],
})
export class AppComponent {
constructor( ) {
    }
    public format: string = "dd/MM/yyyy";
    public enableMaskSupport: boolean = true;
}


