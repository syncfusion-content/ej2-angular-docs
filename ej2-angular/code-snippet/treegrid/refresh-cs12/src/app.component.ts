

import { Component, OnInit, ViewChild } from '@angular/core';
import { projectData } from './datasource';
import { TreeGridComponent, EditService, ToolbarService, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Query, DataManager } from '@syncfusion/ej2-data';
import { IEditCell } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-container',
    providers: [EditService, ToolbarService],
    template: `<ejs-treegrid #treegrid [dataSource]='data' idMapping='TaskID' parentIdMapping='parentID' [treeColumnIndex]='1' [height]='265' [editSettings]='editSettings' (queryCellInfo)='tooltip($event)' >
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' isPrimaryKey='true'  width='70' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='100' ></e-column>
            <e-column field='StartDate' headerText='Start Date' width='100' [format]='formatOptions' editType= 'datepickeredit' textAlign='Right'></e-column>
            <e-column field='EndDate'  headerText='End Date' width='100' [format]='formatOptions' editType= 'datepickeredit' textAlign='Right'></e-column>
            <e-column field='Duration' headerText='Duration' width='90' textAlign='Right'></e-column>
            <e-column field='Priority' headerText='Priority' width='90' editType= 'dropdownedit'
                     [edit]='priorityParams'></e-column>
        </e-columns>
    </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
tooltip($event: any) {
throw new Error('Method not implemented.');
}

    public data: Object[] = [];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public editOptions?: Object;
    public formatOptions?: Object;
    public priorityParams?: IEditCell;

    public priorityData : object[] = [
        { priorityName: 'Normal', priorityId: '1' },
        { priorityName: 'High', priorityId: '2' },
        { priorityName: 'Low', priorityId: '3' },
        { priorityName: 'Critical', priorityId: '4' },
        { priorityName: 'Breaker', priorityId: '5' }
    ];

    ngOnInit(): void {
        this.data = projectData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' };
        this.toolbar = ['Add', 'Edit', 'Delete'];
        this.editOptions = { params: { format: 'y/M/d' } };
        this.formatOptions = { format: 'y/M/d', type: 'date' };
        this.priorityParams = {
            params: {
                actionComplete: () => false,
                allowFiltering: true,
                dataSource: new DataManager(this.priorityData),
                fields: { text: 'priorityName', value: 'priorityName' },
                query: new Query()
            }
        };
    }
}