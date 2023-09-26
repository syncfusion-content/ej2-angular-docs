

import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { projectData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None,
    template: `<ejs-treegrid [dataSource]='data' idMapping='TaskID' parentIdMapping='parentID' [treeColumnIndex]='1' [height]='317'>
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' width='70' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='100' [customAttributes]='customAttributes'></e-column>
            <e-column field='StartDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
            <e-column field='EndDate' headerText='End Date' width='90' format="yMd" textAlign='Right'></e-column>
            <e-column field='Duration' headerText='Duration' width='90' textAlign='Right'></e-column>
        </e-columns>
    </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data: Object[] = [];
    public customAttributes?: Object;

    ngOnInit(): void {
        this.data = projectData;
        this.customAttributes = {class: 'customcss'};
    }
}



