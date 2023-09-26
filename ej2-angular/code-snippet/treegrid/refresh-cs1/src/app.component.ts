

import { Component, OnInit, ViewChild } from '@angular/core';
import { projectData } from './datasource';
import { TreeGridComponent, FilterService, FilterSettingsModel  } from '@syncfusion/ej2-angular-treegrid';
import { IFilter } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-container',
    providers: [ FilterService ],
    template: `<ejs-treegrid #treegridObj [dataSource]='data' idMapping='TaskID' parentIdMapping='parentID' [treeColumnIndex]='1' [height]='273' [allowFiltering]='true' [filterSettings]='filterOption'>
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' width='70' textAlign='Right' [filter]='filterParams'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='100' ></e-column>
            <e-column field='StartDate' headerText='Start Date' textAlign='Right' [format]='formatOptions'  width='100' ></e-column>
            <e-column field='EndDate' headerText='End Date' textAlign='Right' [format]='formatOptions' width='100'></e-column>
            <e-column field='Duration' headerText='Duration' width='90' textAlign='Right'></e-column>
            <e-column field='Priority' headerText='Priority' width='90'></e-column>
        </e-columns>
    </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data: Object[] = [];
    public formatOptions?: Object;
    public filterParams?: IFilter;
    public filterOption?: FilterSettingsModel;

    ngOnInit(): void {
        this.data = projectData;
        this.formatOptions = { format: 'y/M/d', type: 'date' };
        this.filterOption = { type: 'Menu'};
        this.filterParams = { params: { showSpinButton: false } };
    }


}
