import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'



import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataSet, PivotView, ConditionalFormattingService, IConditionalFormatSettings } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';
import { Button } from '@syncfusion/ej2-buttons';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
imports: [
        
        PivotViewAllModule,
        PivotFieldListAllModule
    ],


standalone: true,
  selector: 'app-container',
  providers: [ConditionalFormattingService],
  // specifies the template string for the pivot table component
  template: `<div class="col-md-2"><button ej-button id='formatting'>Apply Formatting</button></div><div class="col-md-8"><ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings allowConditionalFormatting='true' [width]=width  height='350' (conditionalFormatting)='conditionalFormatting($event)'></ejs-pivotview></div>`
})
export class AppComponent implements OnInit {
    public width?: string;
    public height?: number;
    public dataSourceSettings?: DataSourceSettingsModel;
    public button?: Button;
    @ViewChild('pivotview', {static: false})
    public pivotGridObj?: PivotView;
    conditionalFormatting(args: IConditionalFormatSettings | any) {
        args.style.backgroundColor = "Blue";
        args.value1 = 23459;
    }

    ngOnInit(): void {

        this.width = '100%';

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            enableSorting: true,
            drilledMembers: [{ name: 'Country', items: ['France', 'Germany'] }],
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            values: [{ name: 'In_Stock', caption: 'In Stock' },
            { name: 'Sold', caption: 'Units Sold' }],
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
            conditionalFormatSettings: [
                {
                    measure: 'In_Stock',
                    value1: 5000,
                    conditions: 'LessThan',
                    style: {
                        backgroundColor: '#80cbc4',
                        color: 'black',
                        fontFamily: 'Tahoma',
                        fontSize: '12px'
                    }
                }
            ]
        };
        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#formatting');
        this.button.element.onclick = (): void => {
            this.pivotGridObj?.conditionalFormattingModule.showConditionalFormattingDialog();
        };
    }
}



