import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars'




import { Component } from '@angular/core';

@Component({
imports: [
        
        FormsModule,
        DateRangePickerModule
    ],


standalone: true,
    selector: 'app-root',
    templateUrl: './template.html'
})
export class AppComponent {
    public value: Date[] = [new Date('1/1/2020'), new Date('2/1/2023')];
}



