

import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    IDataOptions, PivotView, FieldListService, CalculatedFieldService,
    ToolbarService, ConditionalFormattingService, IDataSet,
    NumberFormattingService
} from '@syncfusion/ej2-angular-pivotview';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { enableRipple } from '@syncfusion/ej2-base';
import { Pivot_Data } from './datasource';
import { Button } from '@syncfusion/ej2-buttons';
enableRipple(false);

@Component({
  selector: 'app-container',
  providers: [ToolbarService],
  // specifies the template string for the pivot table component
  template: `<div class="control-section" id="pivot-table-section">
    <div>
        <ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings  showToolbar='true' width='100%' height='450' [gridSettings]='gridSettings' [toolbarTemplate]='toolbarOptions'> </ejs-pivotview>
    </div>
    <div id='template'>
        <div> 
            <div><button ejs-button id='expandall' class="e-flat" (click)="enablertl()">Expand All</button></div>
                <div><button ejs-button id='collapseall'  class="e-flat" (click)="disableRtl()">Collapse All</button></div>
    </div>
</div></div>`
})

export class AppComponent {
    public dataSourceSettings?: IDataOptions;
    public gridSettings?: GridSettings;
    public toolbarOptions?: string;
    public btnExpand?: Button;
    public btnCollapse?: Button;

    @ViewChild('pivotview')
    public pivotObj?: PivotView;

       enablertl() {
              this.pivotObj.dataSourceSettings.expandAll=true;
        };

         disableRtl(){
              this.pivotObj.dataSourceSettings.expandAll=false;
        };

    ngOnInit(): void {
        this.gridSettings = {
            columnWidth: 140
        } as GridSettings;

        this.toolbarOptions = '#template';

        this.dataSourceSettings = {
            enableSorting: true,
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            values: [{ name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' }],
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }]
        };
        this.btnExpand = new Button({ isPrimary: true });
        this.btnExpand.appendTo('#expandall');
        this.btnCollapse = new Button({ isPrimary: true });
        this.btnCollapse.appendTo('#collapseall');
    }
 }


