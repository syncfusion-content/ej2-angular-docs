

import { Component, OnInit } from '@angular/core';
import { diacritics } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='0' height='275' [allowFiltering]='true' [filterSettings]='filterSettings'childMapping='Children' >
        <e-columns>
                    <e-column field='EmpID' headerText='Employee ID' textAlign='Right' width=90></e-column>
                    <e-column field='Name' headerText='Name' textAlign='Left' width=180></e-column>
                    <e-column field='DOB' headerText='DOB' textAlign='Right' type='date' format='yMd' width=90></e-column>
                    <e-column field='Country' textAlign='Right' width=80></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public filterSettings?: Object;

    ngOnInit(): void {
        this.data = diacritics;
        this.filterSettings = { ignoreAccent: true };
    }
}



