

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { DataUtil } from '@syncfusion/ej2-data';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowFiltering]='true' [allowPaging]='true' [filterSettings]='filterOption'>
                <e-columns>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=140></e-column>
                    <e-column field='Name' headerText='Name' width=140></e-column>
                    <e-column field='ShipName' headerText='ShipName' width=170>
                        <ng-template #filterTemplate let-data>
                            <ejs-dropdownlist id='dropdown' [(ngModel)]="data.ShipName" [dataSource]='dropdata'
                             [fields]='fields' [popupHeight]='height' ></ejs-dropdownlist>
                       </ng-template>
                    </e-column>
                    <e-column field='CustomerID' headerText='CustomerID' width=140></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public dropdata?: string[] = DataUtil.distinct(data, 'ShipName') as string[];
    public filterOption?: FilterSettingsModel = { type: 'Menu' };
    public fields?: object = { text: 'CustomerID', value: 'CustomerID' };
    public height = '220px';
    ngOnInit(): void {
        this.data = data;
    }
}




