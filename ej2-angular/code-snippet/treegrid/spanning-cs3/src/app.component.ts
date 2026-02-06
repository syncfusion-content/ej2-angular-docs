import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { QueryCellInfoEventArgs, GridLine, Column } from '@syncfusion/ej2-angular-grids';
import { columnSpanData } from './datasource';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
    imports: [TreeGridModule,],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]="data" childMapping="children" [treeColumnIndex]="0" [height]="300"
        [enableColumnSpan]="true" [rowHeight]="50" gridLines="Both" clipMode="EllipsisWithTooltip"
        [enableHover]="false" [allowSelection]="false" allowPaging="true" [pageSettings]="pageSettings">
        <e-columns>
            <e-column field="activityName" headerText="Phase Name" width="250" freeze="Left"></e-column>
            <e-column headerText="Schedule" textAlign="Center" [columns]="scheduleColumns"></e-column>
            <e-column headerText="Work Status" textAlign="Center" [columns]="statusColumns"></e-column>
            <e-column headerText="Compliance" textAlign="Center" [columns]="complianceColumns"></e-column>
            <e-column headerText="Personnel" textAlign="Center" [columns]="personnelColumns"></e-column>
            <e-column headerText="Materials" textAlign="Center" [columns]="materialsColumns"></e-column>
            <e-column headerText="Cost Summary" textAlign="Center" [columns]="budgetColumns"></e-column>
        </e-columns>
    </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
    public data?: Object[];
    public pageSettings?: Object;
    public scheduleColumns?: Object[];
    public personnelColumns?: Object[];
    public statusColumns?: Object[];
    public complianceColumns?: Object[];
    public materialsColumns?: Object[];
    public budgetColumns?: Object[];

    ngOnInit(): void {
        this.data = columnSpanData;
        this.pageSettings= { pageSizeMode: 'All', pageSize: 18 };
        
        this.scheduleColumns = [
            { field: 'startDate', headerText: 'Start Date', type: 'date', format: 'MM/dd/yyyy', width: 140, textAlign: 'Center' },
            { field: 'endDate', headerText: 'End Date', type: 'date', format: 'MM/dd/yyyy', width: 140, textAlign: 'Center' }
        ];

        this.personnelColumns = [
            {
                field: 'supervisor',
                headerText: 'Supervisor',
                width: 180,
            },
            { field: 'team', headerText: 'Crew', width: 200 }
        ];

        this.statusColumns = [
            { field: 'status', headerText: 'Status', width: 180, textAlign: 'Center' }
        ];

        this.complianceColumns = [
            { field: 'permitStatus', headerText: 'Permit Status', width: 160, textAlign: 'Center' },
            { field: 'inspectionDate', headerText: 'Inspection Date', width: 180, type: 'date', format: 'MM/dd/yyyy', textAlign: 'Center' },
            { field: 'inspectionStatus', headerText: 'Inspection Status', width: 180, textAlign: 'Center' },
            { field: 'punchListStatus', headerText: 'Punch List Status', width: 180, textAlign: 'Center' }
        ];

        this.materialsColumns = [
            { field: 'materialUsed', headerText: 'Materials Used', width: 180, textAlign: 'Center' },
            { field: 'materialCost', headerText: 'Material Cost', width: 140, format: 'C2', textAlign: 'Right', enableColumnSpan: false }
        ];

        this.budgetColumns = [
            { field: 'totalBudget', headerText: 'Planned Budget', width: 140, format: 'C2', textAlign: 'Center', enableColumnSpan: false },
            { field: 'paidToDate', headerText: 'Actual Spend', width: 140, format: 'C2', textAlign: 'Center', enableColumnSpan: false }
        ];
    }
}
