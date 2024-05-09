

import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService  } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit ,ViewChild} from '@angular/core';
import { sampleData } from './datasource';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers: [FilterService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' height='275' [allowFiltering]='true' [filterSettings]='filterOptions' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=150></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' type='date' format='yMd' width=120></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=120></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public filterOptions?: FilterSettingsModel;

    ngOnInit(): void {
        this.data = sampleData;
        this.filterOptions = {
           type: 'Menu',
           operators: {
            stringOperator: [
              { value: 'startsWith', text: 'Starts With' },
              { value: 'endsWith', text: 'Ends With' },
              { value: 'contains', text: 'Contains' },
              { value: 'equal', text: 'Equal' },
              { value: 'notEqual', text: 'Not Equal' }
            ],
            numberOperator: [
              { value: 'equal', text: 'Equal' },
              { value: 'notEqual', text: 'Not Equal' },
              { value: 'greaterThan', text: 'Greater Than' },
              { value: 'lessThan', text: 'Less Than' }
            ],
            dateOperator: [
              { value: 'equal', text: 'Equal' },
              { value: 'notEqual', text: 'Not Equal' },
              { value: 'greaterThan', text: 'After' },
              { value: 'lessThan', text: 'Before' }
            ],
            booleanOperator: [
              { value: 'equal', text: 'Equal' },
              { value: 'notEqual', text: 'Not Equal' }
            ]
            }
        };
    }
}



