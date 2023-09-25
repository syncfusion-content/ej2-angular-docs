

import { Component, OnInit } from '@angular/core';
import { dataSource, virtualData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' [enableInfiniteScrolling]=true height=317 [pageSettings]='pageSettings' childMapping='Crew' [treeColumnIndex]='1' >
        <e-columns>
            <e-column field='TaskID' headerText='Player Jersey' width='120' textAlign='Right'></e-column>
            <e-column field='FIELD1' headerText='Player Name' width='120'></e-column>
            <e-column field='FIELD2' headerText='Year' width='100' textAlign='Right'></e-column>
            <e-column field='FIELD3' headerText='Stint' width='120' textAlign='Right'></e-column>
            <e-column field='FIELD4' headerText='TMID' width='120' textAlign='Right'></e-column>
        </e-columns>
</ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public pageSettings?: Object;

    ngOnInit(): void {
        dataSource();
        this.data = virtualData;
        this.pageSettings = {pageSize: 30};
    }
}



