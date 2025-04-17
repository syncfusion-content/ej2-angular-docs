import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { DetailRowService, GridModel, ToolbarService, PageService, GridComponent, HierarchyGridPrintMode, getPrintGridModel } from '@syncfusion/ej2-angular-grids'
import { Component, OnInit, ViewChild } from '@angular/core';
import { customerData, data, employeeData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

@Component({
    imports: [GridModule],
    providers: [DetailRowService,ToolbarService, PageService],
    standalone: true,
    selector: 'app-root',
    template: `
        <ejs-grid #grid [dataSource]='parentData' [childGrid]='childGrid' [allowPaging]='true' [pageSettings]='pageSettings' [toolbar]='toolbar' [hierarchyPrintMode]='hierarchyPrintMode' (actionBegin)='actionBegin($event)' (load)='load()'>
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
                <e-column field='FirstName' headerText='FirstName' width=150></e-column>
                <e-column field='LastName' headerText='Last Name' width=150></e-column>
                <e-column field='City' headerText='City' width=150></e-column>
            </e-columns>
        </ejs-grid>`
    })
export class AppComponent implements OnInit {
    @ViewChild('grid')
    public grid?: GridComponent;
    public parentData?: object[];
    public pageSettings?: Object;
    public toolbar?: string[];
    public hierarchyPrintMode?: HierarchyGridPrintMode;
    public persistedExpandedRows?: any = {};
    public secondChildGrid?: GridModel;
    public childGrid?: GridModel;

    ngOnInit(): void {
        this.parentData = employeeData;
        this.pageSettings = { pageSize: 4 };
        this.hierarchyPrintMode = 'Expanded';
        this.toolbar = ['Print'];
        this.secondChildGrid = {
            dataSource: customerData,
            queryString: 'CustomerID',
            columns: [
                { field: 'CustomerID', headerText: 'Customer ID', textAlign: 'Right', width: 75 },
                { field: 'ContactName', headerText: 'Contact Name', width: 100 },
                { field: 'Address', headerText: 'Address', width: 120 },
                { field: 'Country', headerText: 'Country', width: 100 }
            ]
        }
        this.childGrid = {
            dataSource: data,
            queryString: 'EmployeeID',
            columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
                { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
                { field: 'ShipCity', headerText: 'Ship City', width: 150 },
                { field: 'ShipName', headerText: 'Ship Name', width: 150 }
            ],
            childGrid:this.secondChildGrid,
        };
    }
    public actionBegin(args: any): void {
        if (args.requestType === 'paging') {
          const page = args.previousPage;
          this.persistedExpandedRows = {
            ...this.persistedExpandedRows,
            ...(this.grid ? this.getExpandedState(this.grid, 'Expanded', page): {}),
          };
        }
    }    
    public load(): void {
        if (this.grid) {
            this.grid.on('printGrid-Init', this.printInit.bind(this));
        }
    }    
    public printInit(args: any): void {
        const printGridInstance = args.printgrid;
        printGridInstance.expandedRows = extend(
          {},
          this.persistedExpandedRows,
          printGridInstance.expandedRows
        );  
    }
    public getExpandedState(grid: GridComponent, mode: HierarchyGridPrintMode, currentPage: number): any {
        const expandedRowState: any = {};
        const gridRows = grid.getRowsObject();    
        for (let i = 0; i < gridRows.length; i++) {
          const gridRow = gridRows[i];
          if (gridRow.isExpand && !gridRow.isDetailRow) {
            const pageSize = grid?.pageSettings?.pageSize || 1; 
            const expandedIndex = grid.allowPaging
            ? gridRow.index + currentPage * pageSize - pageSize
            : gridRow.index;    
            expandedRowState[expandedIndex] = {
              isExpand: true,
              gridModel: getPrintGridModel(gridRow.childGrid, mode),
            };
          }
        }    
        return expandedRowState;
    }
}