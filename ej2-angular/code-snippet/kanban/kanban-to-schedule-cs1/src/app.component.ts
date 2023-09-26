


import { Component, ViewChild } from '@angular/core';
import { closest, removeClass, extend } from '@syncfusion/ej2-base';
import { CardSettingsModel, DragEventArgs, KanbanComponent } from '@syncfusion/ej2-angular-kanban';
import { kanbanData, scheduleData } from './datasource';
import {
    EventSettingsModel, View, GroupModel, TimelineViewsService, TimelineMonthService,
    ResizeService, WorkHoursModel, DragAndDropService, ResourceDetails, ScheduleComponent, ResourcesModel
} from '@syncfusion/ej2-angular-schedule';
@Component({
  selector: 'app-root',
  template: `<div class="container-fluid">
      <div class="row">
        <div class="col-md-4" style="width: 30%">
        <h4>Kanban</h4>
        <ejs-kanban id='Kanban' #Kanban keyField='DepartmentName' [dataSource]='data' [externalDropId]='externalKanbanDropId'
          [cardSettings]='cardSettings' (dragStop)='onKanbanDragStop($event)'>
          <e-columns>
            <e-column headerText='GENERAL' keyField='GENERAL'></e-column>
          </e-columns>
        </ejs-kanban>
      </div>
      <div class="col-md-8" style="width: 70%">
        <h4>Schedule</h4>
        <ejs-schedule id='Schedule' #Schedule width='100%' height='650px' [group]="group" [currentView]="currentView" [selectedDate]="selectedDate" [workHours]="workHours" [eventSettings]="eventSettings" (dragStop)="scheduleDragStop($event)">
                <e-resources>
                    <e-resource field='DepartmentID' title='Department' name='Departments' [dataSource]='departmentDataSource' textField='Text' idField='Id' colorField='Color'>
                    </e-resource>
                    <e-resource field='ConsultantID' title='Consultant' name='Consultants' [dataSource]='consultantDataSource' [allowMultiple]='allowMultiple' textField='Text' idField='Id' groupIDField="GroupId" colorField='Color'>
                    </e-resource>
                </e-resources>
                <ng-template #resourceHeaderTemplate let-data>
                    <div class="template-wrap">
                        <div class="specialist-category">
                            <div class="specialist-name">{{getConsultantName(data)}}</div>
                            <div class="specialist-designation">{{getConsultantDesignation(data)}}</div>
                        </div>
                    </div>
                </ng-template>
                <e-views>
                    <e-view option='TimelineDay'></e-view>
                    <e-view option='TimelineMonth'></e-view>
                </e-views>
            </ejs-schedule>
       </div>
     </div>
   </div>`,
  providers: [TimelineViewsService, TimelineMonthService, ResizeService, DragAndDropService]
})
export class AppComponent {
  @ViewChild('Kanban')
  public kanbanObj?: KanbanComponent;
  @ViewChild('Schedule')
  public scheduleObj?: ScheduleComponent;
  public data: Object[] = kanbanData;
  public scheduleDataSource: Object[] = <Object[]>extend([], scheduleData, undefined, true);
  public cardSettings: CardSettingsModel = {
    contentField: 'Name',
    headerField: 'Id'
  };
  public externalKanbanDropId: string[] = ['#Schedule'];
  public selectedDate: Date = new Date(2018, 7, 1);
    public currentView: View = 'TimelineDay';
    public workHours: WorkHoursModel = { start: '08:00', end: '18:00' };
  public departmentDataSource: Object[] = [
        { Text: 'GENERAL', Id: 1, Color: '#bbdc00' },
        { Text: 'DENTAL', Id: 2, Color: '#9e5fff' }
    ];
    public consultantDataSource: Object[] = [
        { Text: 'Alice', Id: 1, GroupId: 1, Color: '#bbdc00', Designation: 'Cardiologist' },
        { Text: 'Nancy', Id: 2, GroupId: 2, Color: '#9e5fff', Designation: 'Orthodontist' },
        { Text: 'Robert', Id: 3, GroupId: 1, Color: '#bbdc00', Designation: 'Optometrist' },
        { Text: 'Robson', Id: 4, GroupId: 2, Color: '#9e5fff', Designation: 'Periodontist' },
        { Text: 'Laura', Id: 5, GroupId: 1, Color: '#bbdc00', Designation: 'Orthopedic' },
        { Text: 'Margaret', Id: 6, GroupId: 2, Color: '#9e5fff', Designation: 'Endodontist' }
    ];
    public group: GroupModel = { enableCompactView: false, resources: ['Departments', 'Consultants'] };
    public allowMultiple: Boolean = false;
    public eventSettings: EventSettingsModel = {
        dataSource: this.scheduleDataSource,
        fields: {
            subject: { title: 'Patient Name', name: 'Name' },
            startTime: { title: 'From', name: 'StartTime' },
            endTime: { title: 'To', name: 'EndTime' },
            description: { title: 'Reason', name: 'Description' }
        }
    };

  getConsultantName(value: ResourceDetails): string {
        return (value as ResourceDetails).resourceData[((value as ResourceDetails).resource as ResourcesModel).textField as string] as string;
    }

    getConsultantStatus(value: ResourceDetails): boolean {
        let resourceName: string =
            (value as ResourceDetails).resourceData[((value as ResourceDetails).resource as ResourcesModel).textField as string] as string;
        if (resourceName === 'GENERAL' || resourceName === 'DENTAL') {
            return false;
        } else {
            return true;
        }
    }

    getConsultantDesignation(value: ResourceDetails): string {
        let resourceName: string =
            (value as ResourceDetails).resourceData[((value as ResourceDetails).resource as ResourcesModel).textField as string] as string;
        if (resourceName === 'GENERAL' || resourceName === 'DENTAL') {
            return '';
        } else {
            return (value as ResourceDetails).resourceData['Designation'] as string;
        }
    }

    getConsultantImageName(value: ResourceDetails): string {
        return this.getConsultantName(value).toLowerCase();
    }

    onKanbanDragStop(args: DragEventArgs) {
    let scheduleElement: Element = <Element>closest(args.event.target as Element, '#Schedule');
        if (scheduleElement) {
            (this.kanbanObj as KanbanComponent).deleteCard(args.data);
            (this.kanbanObj as any).openEditor(args.data[0], 'Add', true);
            args.cancel = true;
        }
    };
    scheduleDragStop(args: any) {
    let kanbanElement: Element = <Element>closest(args.event.target as Element, '#Kanban');
        if (kanbanElement) {
            (this.scheduleObj as ScheduleComponent).deleteEvent(args.data.Id);
             removeClass([(this.scheduleObj as ScheduleComponent).element.querySelector('.e-selected-cell') as Element], 'e-selected-cell');
             this.kanbanObj?.openDialog('Add', args.data);
             args.cancel = true;
        }
    };
}



