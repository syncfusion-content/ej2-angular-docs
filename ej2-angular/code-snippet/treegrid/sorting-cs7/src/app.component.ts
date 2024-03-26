

import { Component, OnInit } from '@angular/core';
import { sortData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' height='315' [allowSorting]='true' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='Category' headerText='Category' textAlign='Right' width=140></e-column>
                        <e-column field='orderName' [sortComparer]='sortComparer' headerText='Order Name' textAlign='Left' width=200></e-column>
                        <e-column field='orderDate' headerText='Order Date' textAlign='Right' format='yMd' width=150></e-column>
                        <e-column field='units' headerText='Units' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data: Object[] = [];

    public sortComparer = (reference: string, comparer: string) => {
        if (reference < comparer) {
        return -1;
        }
        if (reference > comparer) {
        return 1;
        }
        return 0;
    };

    ngOnInit(): void {
        this.data = sortData;
    }
}



