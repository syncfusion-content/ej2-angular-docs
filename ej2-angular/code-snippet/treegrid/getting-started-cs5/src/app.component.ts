// Import the required treegrid modules from the treegrid package.
import { TreeGridModule, PageService, SortService, FilterService, EditService, ToolbarService, PageSettingsModel, FilterSettingsModel, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
// Import TreeGrid data from external file.
import { data } from './datasource';

@Component({
    imports: [TreeGridModule ],
    // Inject required TreeGrid features
    providers: [PageService, SortService, FilterService, EditService, ToolbarService],
    standalone: true,
    selector: 'app-root',
    template: `
        <ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' childMapping='subtasks' [allowFiltering]='true' [filterSettings]='filterSettings'
        [allowSorting]='true' [allowPaging]='true' [pageSettings]='pageSettings' [editSettings]='editSettings' [toolbar]='toolbar'>
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' textAlign='Right' [isPrimaryKey]='true' [validationRules]='taskIDRules' width=70></e-column>
                <e-column field='TaskName' headerText='Task Name' [validationRules]='taskNameRules' textAlign='Left' width=120></e-column>
                <e-column field='StartDate' headerText='Start Date' textAlign='Right' format='yMd' editType='datepickeredit' width=90></e-column>
                <e-column field='EndDate' headerText='End Date' textAlign='Right' format='yMd' editType='datepickeredit' width=90></e-column>
                <e-column field='Duration' headerText='Duration' editType='numericedit' textAlign='Right' width=80></e-column>
            </e-columns>
        </ejs-treegrid>
    `
})
export class AppComponent implements OnInit {

    public data?: object[];
    public pageSettings?: PageSettingsModel;
    public filterSettings?: FilterSettingsModel;
    public editSettings?: EditSettingsModel; 
    public toolbar?: ToolbarItems[]; 
    public taskIDRules?: object; 
    public taskNameRules?: object;

    ngOnInit(): void {
        this.data = data;
        this.pageSettings = { pageSize: 6 };
        this.filterSettings = { type: 'CheckBox' }
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.taskIDRules = { required: true, number: true };
        this.taskNameRules = { required: true };
    }
}
