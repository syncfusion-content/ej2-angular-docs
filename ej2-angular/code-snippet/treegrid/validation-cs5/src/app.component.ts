import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridComponent, TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, SortService, FilterService,EditService,ToolbarService } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';
import { CheckBoxModule, CheckBoxComponent } from '@syncfusion/ej2-angular-buttons'
import { EditEventArgs } from '@syncfusion/ej2-angular-grids';
@Component({
    imports: [TreeGridModule, CheckBoxModule ],

    providers: [PageService, EditService, ToolbarService],
    standalone: true,
    selector: 'app-container',
    template: `<div style='padding:2px 2px 20px 3px'>
                    <ejs-checkbox #checkbox label="Enable/Disable validation rule for Task name coulumn" [checked]="true"></ejs-checkbox>
                </div>
                <ejs-treegrid #treegrid [dataSource]='data'  [toolbar]='toolbarOptions' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' childMapping='subtasks' (actionComplete)="actionComplete($event)" >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' isPrimaryKey='true' textAlign='Right' width=90 [validationRules]='taskidRule' ></e-column>
                        <e-column field='taskName' headerText='Task Name' editType='stringedit' textAlign='Left' width=180  ></e-column>
                        <e-column field='priority' headerText='Priority' editType='stringedit' textAlign='Right' width=110 ></e-column>
                        <e-column field='progress' headerText='Progress' textAlign='Right' editType='numericedit' width=120 [edit]='editing' [validationRules]='progressRule' ></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public editSettings?: EditSettingsModel;
    public toolbarOptions?: ToolbarItems[];
    public editing?: Object;
    public formatOptions?: Object;
    public editOptions?: Object;
    public stringRule?: Object;
    public taskidRule?: Object;
    public progressRule?: Object;
    
    @ViewChild('treegrid') treegrid?: TreeGridComponent;
    @ViewChild('checkbox') checkbox?: CheckBoxComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' };
        this.toolbarOptions = ['Add', 'Delete', 'Update', 'Cancel'];
        this.editing = { params: { format: 'n' } };
        this.formatOptions = { format: 'M/d/y hh:mm a', type: 'dateTime' };
        this.progressRule = { number: true, };
        this.taskidRule = { required: true, number: true };
        
    }
    actionComplete(args: EditEventArgs) {
        const formObj = (this.treegrid as TreeGridComponent).grid.editModule.formObj;
        const stringRule = {
            required: true,
            minLength: [5, 'Task name should have a minimum length of 5 characters'],
        };

        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            if ((this.checkbox as CheckBoxComponent).checked) {
                // Add the custom validation rule
                formObj.addRules('taskName', stringRule);
            }
        }
    }
}