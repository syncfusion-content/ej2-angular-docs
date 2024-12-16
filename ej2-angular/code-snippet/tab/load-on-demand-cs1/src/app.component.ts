import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { Component, ViewChild } from '@angular/core';
import { TabModule, TabComponent } from '@syncfusion/ej2-angular-navigations'
import { DayService, ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';


@Component({
imports: [ FormsModule, TabModule, ScheduleModule, CalendarModule ],
providers: [DayService],
standalone: true,
    selector: 'app-container',
    template: `
<div class="control-section e-tab-section">
    <div class="e-sample-resize-container">
        <!-- Render the Tab Component -->
        <ejs-tab id="tab_default">
            <e-tabitems>
                <e-tabitem [header]="headerText[0]">
                    <ng-template #content>
                        <ejs-calendar></ejs-calendar>
                    </ng-template>
                </e-tabitem>
                <e-tabitem [header]="headerText[1]">
                    <ng-template #content>
                        <ejs-schedule #scheduleObj width="100%" height="650px">
                            <e-views>
                                <e-view option="Day"></e-view>
                            </e-views>
                        </ejs-schedule>
                    </ng-template>
                </e-tabitem>
            </e-tabitems>
        </ejs-tab>
    </div>
</div>
`
})

export class AppComponent {
  public headerText: Object[] = [{ text: "Calendar" },{ text: "Schedule" }];
}



