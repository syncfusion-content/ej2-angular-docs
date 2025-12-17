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
    template: `<ejs-treegrid [dataSource]='data' [height]='300' [width]='width' [gridLines]='gridLines' childMapping="subtasks" [treeColumnIndex]='1' 
    (queryCellInfo)='queryCellInfoEvent($event)'>
        <e-columns>
            <e-column field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right" isPrimaryKey=true></e-column>
            <e-column field='EmployeeName' headerText='Employee Name' width='150'></e-column>
            <e-column field='9:00' headerText='9:00 AM' width='120'></e-column>
            <e-column field='10:00' headerText='10:00 AM' width='120'></e-column>
            <e-column field='11:00' headerText='11:00 AM' width='120'></e-column>
            <e-column field='12:00' headerText='12:00 PM' width='120'></e-column>
            <e-column field='1:00' headerText='1:00 PM' width='120'></e-column>
            <e-column field='3:00' headerText='3:00 PM' width='120'></e-column>
            <e-column field='4:00' headerText='4:00 PM' width='120'></e-column>
            <e-column field='5:00' headerText='5:00 PM' width='120'></e-column>
        </e-columns>
    </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
    public data?: object[];
    public width?: string | number;
    public gridLines?: GridLine;
    public queryCellInfoEvent: EmitType<QueryCellInfoEventArgs> = (
        args: QueryCellInfoEventArgs
    ) => {
        const data: any = args.data as any;
        switch (data.EmployeeID) {
            case 10001:
                if ((args.column as Column).field === '1:00') {
                    args.rowSpan = 10;
                }
                break;
        }
    };
    ngOnInit(): void {
        this.data = columnSpanData;
        this.gridLines = 'Both';
        this.width = 'auto';
    }
}
