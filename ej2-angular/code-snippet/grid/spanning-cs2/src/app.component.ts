

import { Component, OnInit } from '@angular/core';
import { QueryCellInfoEventArgs, GridLine } from '@syncfusion/ej2-angular-grids';
import { columnSpanData, ColumnSpanDataType } from './datasource';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [height]='300' [width]='width' [gridLines]='gridLines'
       [allowTextWrap]='textWrap' (queryCellInfo)='queryCellInfoEvent($event)'>
        <e-columns>
            <e-column field='EmployeeID' headerText='Employee ID' width='150' textAlign="Right" isPrimaryKey=true></e-column>
            <e-column field='EmployeeName' headerText='Employee Name' width='200'></e-column>
            <e-column field='9:00' headerText='9:00 AM' width='120'></e-column>
            <e-column field='9:30' headerText='9:30 AM' width='120'></e-column>
            <e-column field='10:00' headerText='10:00 AM' width='120'></e-column>
            <e-column field='10:30' headerText='10:30 AM' width='120'></e-column>
            <e-column field='11:00' headerText='11:00 AM' width='120'></e-column>
            <e-column field='11:30' headerText='11:30 AM' width='120'></e-column>
            <e-column field='12:00' headerText='12:00 PM' width='120'></e-column>
            <e-column field='12:30' headerText='12:30 PM' width='120'></e-column>
            <e-column field='1:00' headerText='1:00 PM' width='120'></e-column>
            <e-column field='1:30' headerText='1:30 PM' width='120'></e-column>
            <e-column field='2:00' headerText='2:00 PM' width='120'></e-column>
            <e-column field='2:30' headerText='2:30 PM' width='120'></e-column>
            <e-column field='3:00' headerText='3:00 PM' width='120'></e-column>
            <e-column field='3:30' headerText='3:30 PM' width='120'></e-column>
            <e-column field='4:00' headerText='4:00 PM' width='120'></e-column>
            <e-column field='4:30' headerText='4:30 PM' width='120'></e-column>
            <e-column field='5:00' headerText='5:00 PM' width='120'></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public width?: string | number;
    public gridLines?: GridLine;
    public textWrap?: boolean;
    public queryCellInfoEvent: EmitType<QueryCellInfoEventArgs> = (args: QueryCellInfoEventArgs) => {
    const data: ColumnSpanDataType = (args as any).data as ColumnSpanDataType;
    switch (data.EmployeeID) {
        case 10001:
            if ((args as any).column.field === '9:00' || (args as any).column.field === '2:30' || (args as any).column.field === '4:30') {
                (args as any).colSpan = 2;
            } else if ((args as any).column.field === '11:00') {
                (args as any).colSpan = 3;
            } else if ((args as any).column.field === 'EmployeeName') {
                (args as any).rowSpan = 2;
            } else if ((args as any).column.field === '1:00') {
                (args as any).colSpan = 3;
                (args as any).rowSpan = 2;
            }
            break;
        case 10002:
            if ((args as any).column.field === '9:30' || (args as any).column.field === '2:30' ||
                (args as any).column.field === '4:30') {
                (args as any).colSpan = 3;
            } else if ((args as any).column.field === '11:00') {
                (args as any).colSpan = 4;
            }
            break;
        case 10003:
            if ((args as any).column.field === '9:00' || (args as any).column.field === '11:30') {
                (args as any).colSpan = 3;
            } else if ((args as any).column.field === '10:30' || (args as any).column.field === '3:30' ||
                (args as any).column.field === '4:30' || (args as any).column.field === '2:30') {
                (args as any).colSpan = 2;
            }
            break;
        case 10004:
            if ((args as any).column.field === '9:00') {
                (args as any).colSpan = 3;
            } else if ((args as any).column.field === '11:00') {
                (args as any).colSpan = 4;
            } else if ((args as any).column.field === '4:00' || (args as any).column.field === '2:30') {
                (args as any).colSpan = 2;
            }
            break;
        case 10005:
            if ((args as any).column.field === '9:00') {
                (args as any).colSpan = 4;
            } else if ((args as any).column.field === '11:30') {
                (args as any).colSpan = 3;
            } else if ((args as any).column.field === '3:30' || (args as any).column.field === '4:30' || (args as any).column.field === '2:30') {
                (args as any).colSpan = 2;
            }
            break;
        case 10006:
            if ((args as any).column.field === '9:00' || (args as any).column.field === '4:30' ||
                (args as any).column.field === '2:30' || (args as any).column.field === '3:30') {
                (args as any).colSpan = 2;
            } else if ((args as any).column.field === '10:00' || (args as any).column.field === '11:30') {
                (args as any).colSpan = 3;
            }
            break;
        case 10007:
            if ((args as any).column.field === '9:00' || (args as any).column.field === '3:00' || (args as any).column.field === '10:30') {
                (args as any).colSpan = 2;
            } else if ((args as any).column.field === '11:30' || (args as any).column.field === '4:00') {
                (args as any).colSpan = 3;
            }
            break;
        case 10008:
            if ((args as any).column.field === '9:00' || (args as any).column.field === '10:30' || (args as any).column.field === '2:30') {
                (args as any).colSpan = 3;
            } else if ((args as any).column.field === '4:00') {
                (args as any).colSpan = 2;
            }
            break;
        case 10009:
            if ((args as any).column.field === '9:00' || (args as any).column.field === '11:30') {
                (args as any).colSpan = 3;
            } else if ((args as any).column.field === '4:30' || (args as any).column.field === '2:30') {
                (args as any).colSpan = 2;
            }
            break;
        case 100010:
            if ((args as any).column.field === '9:00' || (args as any).column.field === '2:30' ||
                (args as any).column.field === '4:00' || (args as any).column.field === '11:30') {
                (args as any).colSpan = 3;
            } else if ((args as any).column.field === '10:30') {
                (args as any).colSpan = 2;
            }
            break;
        }
    }
    ngOnInit(): void {
        this.data = columnSpanData;
        this.gridLines = 'Both';
        this.width = 'auto';
        this.textWrap = true;
    }
}



