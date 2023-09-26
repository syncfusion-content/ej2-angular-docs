

import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { projectData } from './datasource';
import { TreeGridComponent, ColumnMenuService } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [ColumnMenuService],
    template: `<ejs-treegrid #treegrid [dataSource]='data' idMapping='TaskID' parentIdMapping='parentID' [treeColumnIndex]='1' [height]='315' showColumnMenu=true>
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' width='70' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='100' ></e-column>
            <e-column field='StartDate' headerText='Start Date' width='90' format="yMd" textAlign='Right' ></e-column>
            <e-column field='EndDate' headerText='End Date' width='90' format="yMd" textAlign='Right'></e-column>
            <e-column field='Duration' headerText='Duration' width='90' textAlign='Right'></e-column>
            <e-column field='Priority' headerText='Priority' width='90'></e-column>
        </e-columns>
    </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data: Object[] = [];

    ngOnInit(): void {
        this.data = projectData;
    }

}

