

import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    IDataOptions, PivotView, 
    ToolbarService,  IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { enableRipple } from '@syncfusion/ej2-base';
import { Pivot_Data } from './datasource';
enableRipple(false);

@Component({
  selector: 'app-container',
  providers: [ToolbarService],
  // specifies the template string for the pivot table component
  template: `<div class="control-section" id="pivot-table-section">
  <div>
    <ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings  showToolbar='true' width='100%' height='450' [gridSettings]='gridSettings' [toolbar]='toolbarOptions'> </ejs-pivotview>
    </div>
    <ng-template #btnenablertl let-data>
    <button ejs-button id='enablertl' class="e-flat" isPrimary="true" (click)="enablertl()">Enable Rtl</button>
    </ng-template>
    <ng-template #btndisablertl let-data>
    <button ejs-button id='disablertl' class="e-flat" isPrimary="true" (click)="disableRtl()">Disable Rtl</button>
    </ng-template></div>`
})

export class AppComponent {
    public dataSourceSettings?: IDataOptions;
    public gridSettings?: GridSettings;
    public toolbarOptions?: any;

    @ViewChild('btnenablertl', {static:true})
    public enableRtl?: any;
    @ViewChild('btndisablertl', {static:true})
    public disableRTL?: any;
    @ViewChild('pivotview')
    public pivotObj?: PivotView;

       enablertl() {
            this.pivotObj!.enableRtl=true;
        };

         disableRtl(){
            this.pivotObj!.enableRtl=false;
        };

    ngOnInit(): void {
        this.gridSettings = {
            columnWidth: 140
        } as GridSettings;

        this.toolbarOptions = [{template: this.enableRtl},{template: this.disableRTL}] as any;

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
    }
 }


