import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, ExcelExportService, FilterService } from '@syncfusion/ej2-angular-grids'




import { Component, ViewChild } from '@angular/core';
import { columnDataType, data } from './datasource';
import { GridComponent, ToolbarItems, ExcelQueryCellInfoEventArgs, QueryCellInfoEventArgs, Column } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
imports: [
        
        GridModule
    ],

providers: [ExcelExportService, ToolbarService, FilterService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' 
               height='272px' [allowExcelExport]='true' (queryCellInfo)='queryCellInfo($event)' 
               (excelQueryCellInfo)='excelQueryCellInfo($event)' (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
                    width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150>
                    </e-column>
                    <e-column field='Freight' headerText='Freight' width=150>
                    </e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150>
                    </e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('grid') public grid?: GridComponent;

   constructor() {
        this.data = data;
        this.toolbarOptions = ['ExcelExport'];
    }
    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_excelexport') { 
            // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
            (this.grid as GridComponent).excelExport();
        }
    }
    excelQueryCellInfo(args: ExcelQueryCellInfoEventArgs): void {
        if (args.column.field === 'Freight') {
            if (args.value as number < 30) {
                args.style = { backColor: '#99ffcc' };
            } else if (args.value as number < 60) {
                args.style = { backColor: '#ffffb3' };
            } else {
                args.style = { backColor: '#ff704d' };
            }
        }
    }
    queryCellInfo({column,data,cell}:QueryCellInfoEventArgs): void {
        if ((column as Column).field === 'Freight') {
            if ((data as columnDataType)['Freight'] < 30) {
                (cell as HTMLElement).style.backgroundColor = '#99ffcc'
            } else if ((data as columnDataType)['Freight'] < 60) {
                (cell as HTMLElement).style.backgroundColor = '#ffffb3';
            } else {
                (cell as HTMLElement).style.backgroundColor = '#ff704d';
            }
        }
    }
}



