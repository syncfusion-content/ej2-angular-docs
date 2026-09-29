import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component, OnInit, ViewEncapsulation, } from '@angular/core';
import { NgClass } from '@angular/common';
import { TreeGridAllModule, DomVirtualizationService, SortService} from '@syncfusion/ej2-angular-treegrid';
import { domVirtualizationData, domVirtualizationDataSource } from './datasource';

@Component({
    imports: [ TreeGridModule, NgClass ],
    standalone: true,
    selector: 'app-container',
    styleUrls: ['app.style.css'],
    template: ` <ejs-treegrid id="TreeGrid" [dataSource]="data" height="400"
        [enableDomVirtualization]="true"
        [treeColumnIndex]="2" idMapping="ItemID" parentIdMapping="ParentItemID"
        clipMode="EllipsisWithTooltip"
        rowHeight="50">
         <e-columns>
        <e-column field="ItemID" headerText="ID" width="110" textAlign="Right" [isPrimaryKey]="true"></e-column>
        <e-column field="ParentItemID" headerText="Parent ID" width="110" textAlign="Right" [visible]="false"></e-column>
        <e-column field="ItemName" headerText="Inventory Name" width="320"></e-column>
        <e-column field="ItemType" headerText="Type" width="120" [visible]="false"></e-column>
        <e-column field="Category" headerText="Category" width="200"></e-column>
        <e-column field="Region" headerText="Location" width="200">
            <ng-template #template let-data>
                <div class="rg-region" [attr.data-region]="data.Country || data.Region">
                    <span class="rg-region-flag"></span>
                    <span class="rg-region-name">{{ data.Region }}</span>
                </div>
            </ng-template>
        </e-column>
        <e-column field="Supplier" headerText="Supplier" width="240"></e-column>
        <e-column field="StockStatus" headerText="Stock Status" width="180">
            <ng-template #template let-data>
                <div class="rg-badge" [ngClass]="getStatusClass(data.StockStatus)">{{ data.StockStatus }}</div>
            </ng-template>
        </e-column>
        <e-column field="Quantity" headerText="Quantity" width="120" textAlign="Right" editType="numericedit"></e-column>
        <e-column field="UnitPrice" headerText="Unit Price" width="130" textAlign="Right" [format]="{ format: 'C2', currency: 'USD' }"   editType="numericedit"></e-column>
    </e-columns>
    </ejs-treegrid>`,
    providers: [DomVirtualizationService]
})
export class AppComponent implements OnInit {

    public data: any[] = [];

    public getStatusClass(status: string): string {
        const normalizedStatus: string = (status || '').toLowerCase();
        if (normalizedStatus.indexOf('discontinued') === 0) {
            return 'rg-badge-stock-discontinued';
        }
        if (normalizedStatus.indexOf('low stock') === 0) {
            return 'rg-badge-stock-low';
        }
        if (normalizedStatus.indexOf('out of stock') === 0) {
            return 'rg-badge-stock-out';
        }
        return 'rg-badge-stock-available';
    }

    public ngOnInit(): void {
        if (domVirtualizationData.length === 0) {
            domVirtualizationDataSource();
        }
        this.data = domVirtualizationData;
    }
}



