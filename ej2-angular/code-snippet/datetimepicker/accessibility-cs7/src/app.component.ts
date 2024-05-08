import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars'




import { Component, ViewEncapsulation  } from '@angular/core';
import { DateTimePickerComponent } from '@syncfusion/ej2-angular-calendars';

@Component({
imports: [
        
        DateTimePickerModule,
        FormsModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<ejs-datetimepicker [strictMode]='true' [value]='date' [min]='minDate' [max]='maxDate'></ejs-datetimepicker>`
})

export class AppComponent {

    public date: Date =new Date('5/28/2019 2:00 AM');
    public minDate: Date =new Date('5/5/2019 2:00 AM');
    public maxDate: Date =  new Date('5/25/2019 2:00 AM');
    constructor() {
    }
}



