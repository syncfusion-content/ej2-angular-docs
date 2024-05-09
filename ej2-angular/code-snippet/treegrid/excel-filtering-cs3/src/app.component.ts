

import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit ,ViewChild} from '@angular/core';
import { sampleData } from './datasource';
import { FilterSearchBeginEventArgs, } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers: [FilterService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' height='273' [allowFiltering]='true' [filterSettings]="filterSettings" childMapping='subtasks' >
                  <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=150></e-column>
                    <e-column field="approved"  headerText="Approved"  width="120"  displayAsCheckBox="true" [filter]="columnFilterSettings" > 
                      <ng-template #filterItemTemplate let-data>{{data.approved == true ? "Approved" : "Not approved"}}
                      </ng-template>
                    </e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public filterSettings?: Object;
    public columnFilterSettings?: Object;
    public filterItemTemplate?: string;
    ngOnInit(): void {
        this.data = sampleData;
        this.filterSettings = {type: 'Excel'};
        this.columnFilterSettings = {
          type: 'CheckBox',
          filterItemTemplate: this.filterItemTemplate,
        };
    }
   
}


