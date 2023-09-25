

import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-treegrid';
import { IFilter } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' height='273' [allowFiltering]='true' childMapping='subtasks' [filterSettings]='filterOptions'>
        <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=80></e-column>
                    <e-column field='taskName' headerText='Task Name' [filter] = 'filter' textAlign='Left' width=150></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    <e-column field='progress' headerText='Progress' textAlign='Right' width=80></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public filterOptions?: FilterSettingsModel;
    public filter?: IFilter;

    ngOnInit(): void {
        this.data = sampleData;
        this.filterOptions = {
           type: 'Menu'
        };
        this.filter = {
            type : 'Excel'
        }
    }
}




