import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid'
@Component({
    selector: 'app-container',
    template: `<button id='show' ejs-button class='e-flat' (click)='save()'> Save cell </button>
    <ejs-treegrid #treegrid [dataSource]='data' [toolbar]='toolbarOptions' [editSettings]='editSettings' height=250  [treeColumnIndex]='1' [allowPaging]='true' childMapping='subtasks'>
        <e-columns>
                <e-column field='taskID' headerText='Task ID' isPrimaryKey='true' textAlign='Right' width=90></e-column>
                <e-column field='taskName' headerText='Task Name' allowEditing="true" textAlign='Left' width=180></e-column>
                <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {
    public data?: Object[];
    public editSettings?: EditSettingsModel;
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, showDeleteConfirmDialog: true, mode: 'Batch' };
        this.toolbarOptions = ['Add', 'Delete', 'Update', 'Cancel'];
    }
    save() {
        (this.treegrid as TreeGridComponent).saveCell();
    }
}