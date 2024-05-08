import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars'




import { Component } from '@angular/core';
import { PreventableEventArgs } from '@syncfusion/ej2-angular-calendars';

@Component({
imports: [
        
        DatePickerModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<ejs-datepicker (close)='onClose($event)' placeholder='Enter date'></ejs-datepicker>`
})
export class AppComponent {
    onClose(args: PreventableEventArgs | any): void {
        args.preventDefault();
    }
}



