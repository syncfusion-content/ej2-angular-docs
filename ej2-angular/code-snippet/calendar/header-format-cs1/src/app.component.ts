


import { Component, ViewChild } from '@angular/core';
import { CalendarComponent } from '@syncfusion/ej2-angular-calendars';
import { DropDownListComponent,ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'app-root',
    styleUrls: ['./style.css'],
    template: `
        <div id="container">
            <div id="calendar">
                <ejs-calendar #default dayHeaderFormat='Short'></ejs-calendar>
            </div>
            <div id="format">
                <label class="custom-input-label">Header Format Types</label>
                <ejs-dropdownlist id="dayformat" #select [dataSource]='formatData' [(value)]='value' [fields]='fields' [placeholder]='waterMark' (change)='formatHandler($event)'></ejs-dropdownlist>
            </div>
        </div>
        `
})

export class AppComponent {
    @ViewChild('default')
    public calendarObj?: CalendarComponent;
    @ViewChild('select')
    public dayHeaderFormat?: DropDownListComponent;
     // define the JSON of data
    public formatData: Object[] = [
        { Id: 'Short', Label: 'Short' },
        { Id: 'Narrow', Label: 'Narrow' },
        { Id: 'Abbreviated', Label: 'Abbreviated' },
        { Id: 'Wide', Label: 'Wide' },
    ];
    public fields: Object = { text: 'Label',value: 'Id' };
    public waterMark: string = 'Select format type';
    public value: string ='Short';
    public formatHandler(args: ChangeEventArgs): void {
        (this.calendarObj as CalendarComponent ).dayHeaderFormat = args.value as any;
    }
}
