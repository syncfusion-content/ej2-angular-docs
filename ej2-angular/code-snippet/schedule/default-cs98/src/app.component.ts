import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule, TimelineMonthService, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'

import { Component } from '@angular/core';
import { EventSettingsModel, GroupModel } from '@syncfusion/ej2-angular-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

@Component({
imports: [
        
        ScheduleModule,
        RecurrenceEditorModule,
        ButtonModule
    ],
standalone: true,
  selector: 'app-root',
  providers: [TimelineMonthService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [readonly]='readonly' [group]="group" [selectedDate]="selectedDate" [eventSettings]="eventSettings">
      <e-resources>
        <e-resource field='ResourceId' title='Resource' [dataSource]='resourceDataSource'
          name='Resources' textField='Text' idField='Id' colorField='Color'>
        </e-resource>
      </e-resources>
      <e-views>
        <e-view option="TimelineMonth" [enableLazyLoading]="enableLazyLoad" isSelected=true></e-view>
      </e-views>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2023, 3, 1);
    public readonly: boolean = true;
    public group: GroupModel = { resources: ['Resources'] };
    public resourceDataSource: Object[] = this.generateResourceData(1, 1000, 'Resource');
    private dataManager: DataManager = new DataManager({
        url: 'https://services.syncfusion.com/angular/production/api/VirtualEventData',
        adaptor: new WebApiAdaptor(),
        crossDomain: true
    });
    public eventSettings: EventSettingsModel = { dataSource: this.dataManager };
    public enableLazyLoad: boolean = true;
    private generateResourceData(startId: number, endId: number, text: string): Object[] {
        let data: { [key: string]: Object }[] = [];
        let colors: string[] = [
            '#ff8787', '#9775fa', '#748ffc', '#3bc9db', '#69db7c',
            '#fdd835', '#748ffc', '#9775fa', '#df5286', '#7fa900',
            '#fec200', '#5978ee', '#00bdae', '#ea80fc'
        ];
        for (let a: number = startId; a <= endId; a++) {
            let n: number = Math.floor(Math.random() * colors.length);
            data.push({
                Id: a,
                Text: text + ' ' + a,
                Color: colors[n]
            });
        }
        return data;
    }
}


