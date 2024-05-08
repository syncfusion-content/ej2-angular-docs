import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';

import { Component, ViewEncapsulation, ViewChild, OnInit, NgModule } from '@angular/core';
import { GanttData } from './data';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
@Component({
    imports: [
         GanttModule
    ],
standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]='1'
        (dataBound)='dataBound()' (collapsed)="collapsed($event)" (expanded)="expanded($event)" [splitterSettings] = "splitterSettings"> 
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' isPrimaryKey="true" textAlign='Right' width=90 ></e-column>
                <e-column field='TaskName' headerText='Name' textAlign='Left' width=290></e-column>
                <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=120 ></e-column>
                <e-column field='Duration' headerText='Duration' textAlign='Right' width=90 ></e-column>
                <e-column field='Progress' headerText='Progress' textAlign='Right' width=120></e-column>
            </e-columns>
            </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    @ViewChild('gantt')
    public gantt: GanttComponent | undefined;
    public taskSettings?: object;
    public splitterSettings?: object;
    public collapsingData: any = [];
    public ngOnInit(): void {
        this.data = GanttData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.splitterSettings = {
            position: '75%'
        };
    }
    dataBound(): void {
        //checking whether it is initial rendering
        if ((this.gantt as GanttComponent).treeGrid.initialRender &&
            window.localStorage !== null
        ) {
            //retriving collapsed record in local storage using getItem method
            var Collapsed_storagedata = JSON.parse(
                window.localStorage.getItem('collapsingData') as any
            );

            if (Collapsed_storagedata !== null) {
                for (var i = 0; i < Collapsed_storagedata.length; i++) {
                    (this.gantt as GanttComponent).treeGrid.collapseByKey(
                        Collapsed_storagedata[i]
                    ); //collapsing row using collapseByKey method
                }
            }
        }
    }

    collapsed(args: any): void {
        //Here collected the collapsed record's primarykey value
        this.collapsingData.push((args.data as any).TaskID);

        //Here set/ update the localstorage value
        this.setstorage_data(this.collapsingData);
    }
    expanded(args: any): void {
        //Check whether the collapsing data array has the same primary key value as the expanding data.
        var index = this.collapsingData.findIndex((x: any) => {
            if (x == (args.data as any).TaskID) {
                return x;
            }
        });
        //if yes here we remove that primary key value
        this.collapsingData.splice(index, 1);

        // update the localstorage value
        this.setstorage_data(this.collapsingData);
    }
    setstorage_data(data: any): void {
        window.localStorage.setItem('collapsingData', JSON.stringify(data));
    }
}