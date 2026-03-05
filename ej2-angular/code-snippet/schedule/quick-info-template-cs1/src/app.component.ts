import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { TextBoxAllModule } from '@syncfusion/ej2-angular-inputs'
import { ButtonAllModule } from '@syncfusion/ej2-angular-buttons'
import { CommonModule } from '@angular/common'



import { Component, ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { extend, Internationalization } from '@syncfusion/ej2-base';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService,CurrentAction,EventSettingsModel,ResourcesModel,CellClickEventArgs,EJ2Instance, ScheduleComponent} from '@syncfusion/ej2-angular-schedule';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { scheduleData } from './datasource';

@Component({
imports: [
        
        ScheduleModule,
        DropDownListAllModule,
        TextBoxAllModule,
        ButtonAllModule,
        CommonModule
    ],
standalone: true,
  selector: 'app-root',
providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService],
  encapsulation: ViewEncapsulation.None,
  // specifies the template string for the Schedule component
  template: `<div class="control-section">
    <ejs-schedule #scheduleObj width='100%' height='600px' [selectedDate]="selectedDate"
        [eventSettings]="eventSettings">
        <e-resources>
            <e-resource field='RoomId' title='Room Type' name='MeetingRoom' textField='Name' idField='Id'
                colorField='Color' [dataSource]='roomData'>
            </e-resource>
        </e-resources>
        <!-- Header template -->
        <ng-template #quickInfoTemplatesHeader let-data>
            <div class="quick-info-header">
                <div class="quick-info-header-content" [ngStyle]="getHeaderStyles(data)">
                    <div class="quick-info-title">{{getHeaderTitle(data)}}</div>
                    <div class="duration-text">{{getHeaderDetails(data)}}</div>
                </div>
            </div>
        </ng-template>
        <!-- Content Template -->
        <ng-template #quickInfoTemplatesContent let-data>
            <ng-container [ngTemplateOutlet]="data.elementType == 'cell' ? cellContent : eventContent"
                [ngTemplateOutletContext]="{data:data}"></ng-container>
        </ng-template>
        <ng-template #cellContent let-data="data">
            <div class="quick-info-content">
                <div class="e-cell-content">
                    <div class="content-area">
                        <ejs-textbox #titleObj id="title" placeholder="Title"></ejs-textbox>
                    </div>
                    <div class="content-area">
                        <ejs-dropdownlist id='eventType' #eventTypeObj [dataSource]='roomData' [fields]='roomFields'
                            placeholder='Choose Type' index="{{0}}" popupHeight="200px"></ejs-dropdownlist>
                    </div>
                    <div class="content-area">
                        <ejs-textbox #notesObj id="notes" placeholder="Notes"></ejs-textbox>
                    </div>
                </div>
            </div>
        </ng-template>
        <ng-template #eventContent let-data="data">
            <div class="quick-info-content">
                <div class="event-content">
                    <div class="meeting-type-wrap">
                        <label>Subject</label>:
                        <span>{{data.Subject}}</span>
                    </div>
                    <div class="meeting-subject-wrap">
                        <label>Type</label>:
                        <span>{{getEventType(data)}}</span>
                    </div>
                    <div class="notes-wrap">
                        <label>Notes</label>:
                        <span>{{data.Description}}</span>
                    </div>
                </div>
            </div>
        </ng-template>
        <!-- Footer Template -->
        <ng-template #quickInfoTemplatesFooter let-data>
            <ng-container [ngTemplateOutlet]="data.elementType == 'cell' ? cellFooter : eventFooter"
                [ngTemplateOutletContext]="{data:data}"></ng-container>
        </ng-template>
        <ng-template #cellFooter let-data="data">
            <div class="e-cell-footer">
                <button ejs-button id="more-details" cssClass="e-flat" (click)="buttonClickActions($event)">More
                    Details</button>
                <button ejs-button id="add" cssClass="e-flat" [isPrimary]="true"
                    (click)="buttonClickActions($event)">Add</button>
            </div>
        </ng-template>
        <ng-template #eventFooter let-data="data">
            <div class="e-event-footer">
                <button ejs-button id="delete" cssClass="e-flat" (click)="buttonClickActions($event)">Delete</button>
                <button ejs-button id="more-details" cssClass="e-flat" [isPrimary]="true"
                    (click)="buttonClickActions($event)">More Details</button>
            </div>
        </ng-template>
    </ejs-schedule>
</div>`,
styleUrls: ['./index.css'],
})

export class AppComponent {
    @ViewChild('scheduleObj')
    public scheduleObj?: ScheduleComponent;
    @ViewChild('eventTypeObj')
    public eventTypeObj?: DropDownListComponent;
    @ViewChild('titleObj')
    public titleObj?: TextBoxComponent;
    @ViewChild('notesObj')
    public notesObj?: TextBoxComponent;
    public eventSettings: EventSettingsModel = { dataSource: <Object[]>extend([], scheduleData, undefined, true) };
    public selectedDate: Date = new Date(2020, 0, 9);
    public intl: Internationalization = new Internationalization();
    public roomFields: Object = { text: 'Name', value: 'Id' };
    public roomData: Object[] = [
        { Name: 'Jammy', Id: 1, Capacity: 20, Color: '#ea7a57', Type: 'Conference' },
        { Name: 'Tweety', Id: 2, Capacity: 7, Color: '#7fa900', Type: 'Cabin' },
        { Name: 'Nestle', Id: 3, Capacity: 5, Color: '#5978ee', Type: 'Cabin' },
        { Name: 'Phoenix', Id: 4, Capacity: 15, Color: '#fec200', Type: 'Conference' },
        { Name: 'Mission', Id: 5, Capacity: 25, Color: '#df5286', Type: 'Conference' },
        { Name: 'Hangout', Id: 6, Capacity: 10, Color: '#00bdae', Type: 'Cabin' },
        { Name: 'Rick Roll', Id: 7, Capacity: 20, Color: '#865fcf', Type: 'Conference' },
        { Name: 'Rainbow', Id: 8, Capacity: 8, Color: '#1aaa55', Type: 'Cabin' },
        { Name: 'Swarm', Id: 9, Capacity: 30, Color: '#df5286', Type: 'Conference' },
        { Name: 'Photogenic', Id: 10, Capacity: 25, Color: '#710193', Type: 'Conference' }
    ];

    public getResourceData(data: { [key: string]: Object }): { [key: string]: Object } {
        // tslint:disable-next-line: deprecation
        const resources: ResourcesModel = this.scheduleObj!.getResourceCollections()[0];
       const resourceData: { [key: string]: Object } = (resources.dataSource as Object[]).filter((resource: Object) =>
    (resource as { [key: string]: Object; })['Id'] === data['RoomId'])[0] as { [key: string]: Object };
        return resourceData;
    }


    public getHeaderStyles(data: { [key: string]: Object }): Object {
        if (data['elementType'] === 'cell') {
            return { 'align-items': 'center', 'color': '#919191' };
        } else {
            const resourceData: { [key: string]: Object } = this.getResourceData(data);
            return { 'background': resourceData['Color'], 'color': '#FFFFFF' };
        }
    }

    public getHeaderTitle(data: { [key: string]: Object }): string {
        return (data['elementType'] === 'cell') ? 'Add Appointment' : 'Appointment Details';
    }

    public getHeaderDetails(data: { [key: string]: Date }): string {
        return this.intl.formatDate(data['StartTime'], { type: 'date', skeleton: 'full' }) + ' (' +
            this.intl.formatDate(data['StartTime'], { skeleton: 'hm' }) + ' - ' +
            this.intl.formatDate(data['EndTime'], { skeleton: 'hm' }) + ')';
    }

    public getEventType(data: { [key: string]: string }): string {
        const resourceData: { [key: string]: Object } = this.getResourceData(data);
        return resourceData['Name'] as string;
    }

    public buttonClickActions(e: Event) {
        const quickPopup: HTMLElement = this.scheduleObj?.element.querySelector('.e-quick-popup-wrapper') as HTMLElement;
        const getSlotData: Function = (): { [key: string]: Object } => {
            const cellDetails: CellClickEventArgs = this.scheduleObj!.getCellDetails(this.scheduleObj!.getSelectedElements());
            const addObj: { [key: string]: Object } = {};
            addObj['Id'] = this.scheduleObj!.getEventMaxID();
            addObj['Subject'] = (this.titleObj as TextBoxComponent).value;
            addObj['StartTime'] = new Date(+cellDetails.startTime);
            addObj['EndTime'] = new Date(+cellDetails.endTime);
            addObj['Description'] = (this.notesObj as TextBoxComponent).value;
            addObj['RoomId'] = (this.eventTypeObj as DropDownListComponent).value!;
            return addObj;
        };
        if ((e.target as HTMLElement).id === 'add') {
            const addObj: { [key: string]: Object } = getSlotData();
            this.scheduleObj!.addEvent(addObj);
        } else if ((e.target as HTMLElement).id === 'delete') {
            const eventDetails: { [key: string]: Object } = this.scheduleObj!.activeEventData.event as { [key: string]: Object };
            let currentAction: CurrentAction='Delete';
            if (eventDetails['RecurrenceRule']) {
                currentAction = 'DeleteOccurrence';
            }
            this.scheduleObj!.deleteEvent(eventDetails, currentAction);
        } else {
            const isCellPopup: boolean = quickPopup.firstElementChild!.classList.contains('e-cell-popup');
            const eventDetails: { [key: string]: Object } = isCellPopup ? getSlotData() :
                this.scheduleObj!.activeEventData.event as { [key: string]: Object };
            let currentAction: CurrentAction = isCellPopup ? 'Add' : 'Save';
            if (eventDetails['RecurrenceRule']) {
                currentAction = 'EditOccurrence';
            }
            this.scheduleObj?.openEditor(eventDetails, currentAction, true);
        }
        this.scheduleObj?.closeQuickInfoPopup();
    }
}


