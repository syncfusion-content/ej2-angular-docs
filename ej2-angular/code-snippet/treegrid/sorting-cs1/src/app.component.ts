

import { Component, OnInit } from '@angular/core';
import { sortData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='315' [treeColumnIndex]='1'  [allowSorting]='true' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='Category' headerText='Category' textAlign='Right' width=140></e-column>
                        <e-column field='orderName' headerText='Order Name' textAlign='Left' width=200></e-column>
                        <e-column field='orderDate' headerText='Order Date' textAlign='Right' format='yMd' width=150></e-column>
                        <e-column field='units' headerText='Units' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = sortData;
    }
}



