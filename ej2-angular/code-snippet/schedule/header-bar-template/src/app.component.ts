import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component, ViewChild } from '@angular/core';
import { extend } from '@syncfusion/ej2-base';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { ScheduleComponent, EventSettingsModel, View, MonthService, ResizeService, DragAndDropService, ScheduleModule, WeekService } from '@syncfusion/ej2-angular-schedule';
import { ChangeEventArgs, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { Predicate, Query } from '@syncfusion/ej2-data';
import { scheduleData } from './datasource';

@Component({
    imports: [ScheduleModule, CheckBoxModule, DropDownListModule],
    providers: [MonthService, ResizeService, DragAndDropService, WeekService],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Schedule component
    template: `<ejs-schedule #scheduleObj id="schedule" width='100%' height='650px' [selectedDate]="selectedDate"
      [eventSettings]="eventSettings">
      <e-resources>
        <e-resource field="OwnerId" title="Owner" name="Owners" [dataSource]="ownerDataSource" textField='OwnerText'
          idField='OwnerId' colorField='Color'>
        </e-resource>
      </e-resources>
      <e-views>
        <e-view option="Month"></e-view>
      </e-views>
      <e-toolbaritems>
        <e-toolbaritem name="Previous" align="Left"></e-toolbaritem>
        <e-toolbaritem name="Next" align="Left"></e-toolbaritem>
        <e-toolbaritem name="DateRangeText" align="Left"></e-toolbaritem>
        <e-toolbaritem name="Today" align="Right"></e-toolbaritem>
        <e-toolbaritem name="Custom" align="Center">
          <ng-template #template>
            <ejs-dropdownlist id='ddlelement' [value]="1" [dataSource]='ownerDataSource' [fields]='fields'
              (change)="onChange($event)"></ejs-dropdownlist>
          </ng-template>
        </e-toolbaritem>
      </e-toolbaritems>
    </ejs-schedule>`
})


export class AppComponent {
    @ViewChild('scheduleObj') public scheduleObj!: ScheduleComponent;
    public selectedDate: Date = new Date(2023, 10, 15);
    public currentView: View = "Month";
    public fields: Object = { text: 'OwnerText', value: 'OwnerId' };
    public eventSettings: EventSettingsModel = {
        dataSource: extend([], scheduleData, true) as Record<string, any>[],
        query: new Query().where('OwnerId', 'equal', 1)
    };
    public ownerDataSource: Object[] = [
        { OwnerText: 'Margaret', OwnerId: 1, Color: '#ea7a57' },
        { OwnerText: 'Robert', OwnerId: 2, Color: '#df5286' },
        { OwnerText: 'Laura', OwnerId: 3, Color: '#865fcf' }
    ];
    onChange(args: ChangeEventArgs) {
        let predicate: Predicate;
        predicate = new Predicate('OwnerId', 'equal', parseInt((args.value as string), 10));
        this.scheduleObj!.eventSettings.query = new Query().where(predicate);
    }
}