import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'
import { PageService, SortService, FilterService, GroupService, ToolbarService, ExcelExportService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, ExcelQueryCellInfoEventArgs, ExcelHeaderQueryCellInfoEventArgs, Column, Cell, ExcelStyle } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
imports: [
        
        GridModule,
        DropDownListModule
    ],

providers: [PageService,
                SortService,
                FilterService,
                GroupService,
                ToolbarService,
                ExcelExportService],
standalone: true,
    selector: 'app-root',
    template: `   
            <div style="display: flex; align-items: center;">
                <label style="margin-right: 10px;">Select a degree:</label>
                <ejs-dropdownlist id='ddlelement' #ddlelement placeholder='Select a degree' [dataSource]='degree'>
                </ejs-dropdownlist>
            </div>
            <div style="padding:20px 0px 0px 0px">
                <ejs-grid #grid id="Grid" [dataSource]='data' [height]='240' (created)='setHeaderHeight()' (excelQueryCellInfo)='excelQueryCellInfo($event)' (excelHeaderQueryCellInfo)='excelHeaderQueryCellInfo($event)' (toolbarClick)='toolbarClick($event)' [toolbar]='toolbarOptions' [allowExcelExport]='true'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' [customAttributes]='customAttributes' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Center'
                        format='C2' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=100 ></e-column>
                    </e-columns>
                </ejs-grid>
            </div>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    public degree?: number[];
    public customAttributes?: object;
    @ViewChild('grid')
    public grid?: GridComponent;
    @ViewChild('ddlelement') public dropDownListObject?: DropDownListComponent;

    ngOnInit(): void {
        this.data = data;
        this.customAttributes = { class: 'orientationcss' };
        this.toolbarOptions = ['ExcelExport'];
        this.degree = [90, 180, 45, 135];
    }
    setHeaderHeight() {
        const textWidth = (document.querySelector('.orientationcss > div') as Element).scrollWidth;
        const headerCell: NodeList = document.querySelectorAll('.e-headercell');
        for (let i = 0; i < headerCell.length; i++) {
            (headerCell.item(i) as HTMLElement).style.height = textWidth + 'px';
        }
    }
    excelQueryCellInfo(args: ExcelQueryCellInfoEventArgs): void {
        if (args.column.field == 'Freight') {
            if ((args.value as number) < 30) {
                args.style = { backColor: '#99ffcc' };
            }
            else if ((args.value as number)< 60) {
                args.style = { backColor: '#ffffb3' };
            }
            else {
                args.style = { backColor: '#ff704d' };
            }
        }
    }

    excelHeaderQueryCellInfo(args: ExcelHeaderQueryCellInfoEventArgs): void {
        let textWidth = (document.querySelector(".orientationcss > div") as Element).scrollWidth;
        if ((args.gridCell as Cell<Column>).column.field == 'Freight') {
            args.style = { backColor: '#99ffcc', vAlign: 'Bottom' };
        }
        else {
            args.style = { vAlign: 'Center', rotation: ((this.dropDownListObject as DropDownListComponent).value as number) };
        }
        (args.cell as CustomExcelStyle).cellHeight = textWidth;
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_excelexport') {
            (this.grid as GridComponent).excelExport();
        }
    }
}

interface CustomExcelStyle extends ExcelStyle {
    cellHeight?: number;
}