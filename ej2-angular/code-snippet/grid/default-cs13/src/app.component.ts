import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data, employeeData } from './datasource';
import { DetailRowService, GridComponent, getPrintGridModel, Row, Column,
     ToolbarService, printGridInit, GridModel, HierarchyGridPrintMode } from '@syncfusion/ej2-angular-grids';
import { extend } from '@syncfusion/ej2-base';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService,
        SortService,
        FilterService,
        GroupService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='pData' [childGrid]='childGrid' [toolbar]='["Print"]'
     hierarchyPrintMode='Expanded' allowPaging=true [pageSettings]="{pageSize: 4}" (actionBegin)="actionBegin($event)" >
                    <e-columns>
                        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
                        <e-column field='FirstName' headerText='FirstName' width=150></e-column>
                        <e-column field='LastName' headerText='Last Name' width=150></e-column>
                        <e-column field='City' headerText='City' width=150></e-column>
                    </e-columns>
                </ejs-grid>
                `,
    providers: [DetailRowService, ToolbarService]
})
export class AppComponent implements OnInit {

    public pData?: object[];
    public expandedChildGrid: object = {};
    public childGrid: GridModel = {
        dataSource: data,
        queryString: 'EmployeeID',
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ]
    };
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.pData = employeeData;
        (this.grid as any).on(printGridInit, this.printInit, this);
    }

    actionBegin(args: any) {
        if ((args as any).requestType === 'paging') {
            this.expandedChildGrid = extend({}, this.expandedChildGrid, this.getExpandedState((this.grid as any), 'Expanded', (args as any).previousPage));
        }
    }

    printInit(gridModel: any) {
        gridModel.printgrid.expandedRows = extend({}, this.expandedChildGrid, gridModel.expandedRows);
    }

    getExpandedState(gObj: GridComponent, hierarchyPrintMode: HierarchyGridPrintMode, currentPage: number): object {
        const obj: object = {};
        const rows: Row<Column>[] = gObj.getRowsObject();
        for (const row of rows) {
            if (row.isExpand && !row.isDetailRow) {
                const index: number = gObj.allowPaging ? row.index +
                    (currentPage * (gObj as any).pageSettings.pageSize) - (gObj as any).pageSettings.pageSize : row.index;
                (obj as any)[index] = {};
                (obj as any)[index].isExpand = true;
                (obj as any)[index].gridModel = getPrintGridModel(row.childGrid, hierarchyPrintMode);
            }
        }
        return obj;
    }
}



