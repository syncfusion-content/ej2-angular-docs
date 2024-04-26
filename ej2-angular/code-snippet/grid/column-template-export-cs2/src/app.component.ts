import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { ToolbarService, ExcelExportService, GroupService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeData } from './datasource';
import { GridComponent, ExcelQueryCellInfoEventArgs } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
imports: [
        
        ButtonModule,
        GridModule
    ],

providers: [ToolbarService,
        ExcelExportService,
        GroupService,],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid id="ColumnTemplateGrid" [dataSource]="data" [toolbar]="toolbar" (toolbarClick)="toolbarClick($event)"
               [allowExcelExport]="true" (excelQueryCellInfo)="excelQueryCellInfo($event)" height='273px'>
                    <e-columns>
                        <e-column headerText='Employee Image' width='150' textAlign='Center'>
                            <ng-template #template let-data>
                                <div class="image">
                                    <img src="{{data.EmployeeID}}.png" alt="{{data.EmployeeID}}"/>
                                </div>
                            </ng-template>
                        </e-column>
                        <e-column field='FirstName' headerText='Name' width='130'></e-column>
                        <e-column headerText="Email ID" width='180'>
                            <ng-template #template let-data>
                                <div class="url">
                                    <a href="mailto:{{ data.EmailID }}">{{ data.EmailID }}</a>
                                </div>
                            </ng-template>
                        </e-column>
                    </e-columns>
                </ejs-grid>`,
    styleUrls: ['app.style.css']
})

export class AppComponent implements OnInit {

    public data?: object[];
    public toolbar?: string[];
    @ViewChild('grid')
    public grid?: GridComponent;

    public ngOnInit(): void {
        this.data = employeeData;
        this.toolbar = ['ExcelExport'];
    }
    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'ColumnTemplateGrid_excelexport') {
            this.grid!.excelExport();
        }
    }
    excelQueryCellInfo(args: ExcelQueryCellInfoEventArgs): void {
        if (args.column.headerText === 'Employee Image') {
            args.image = {
                base64: (args.data as any)['EmployeeImage'],
                height: 50,
                width: 50,
            };
        }
        if (args.column.headerText === 'Email ID') {
            args.hyperLink = {
                target: 'mailto:' + (args.data as any)['EmailID'],
                displayText: (args.data as any)['EmailID'],
            };
        }
    }
}
