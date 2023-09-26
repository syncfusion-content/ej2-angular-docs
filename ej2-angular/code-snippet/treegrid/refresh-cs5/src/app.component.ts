

import { Component, OnInit, ViewChild } from '@angular/core';
import { projectData } from './datasource';
import { TreeGridComponent, PageService  } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    providers: [ PageService ],
    template: `<ejs-treegrid #treegridObj [dataSource]='data' idMapping='TaskID' parentIdMapping='parentID' [treeColumnIndex]='1' [height]='268' [allowPaging]='true' [pageSettings]='initialPage' >
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' width='70' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='200' ></e-column>
            <e-column field='StartDate' headerText='Start Date' textAlign='Right' [format]='formatOptions' editType= 'datepickeredit' width='90'></e-column>
            <e-column field='EndDate' headerText='Start Date' textAlign='Right' [format]='formatOptions' editType= 'datepickeredit' width='90'></e-column>
            <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
            <e-column field='Progress' headerText='Progress' width='80' textAlign='Right'></e-column>
            <e-column field='Priority' headerText='Priority' width='90'></e-column>
        </e-columns>
    </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data: Object[] = [];
    public formatOptions?: Object;
    public initialPage?: object;

    ngOnInit(): void {
        this.data = projectData;
        this.formatOptions = { format: 'y/M/d', type: 'date' };
        this.initialPage = { pageSizes: ['5', '10', 'All'], };
    }

}

