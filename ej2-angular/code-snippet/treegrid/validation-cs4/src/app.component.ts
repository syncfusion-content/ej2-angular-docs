import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, SortService, FilterService,EditService,ToolbarService } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [TreeGridModule  ],

    providers: [PageService, EditService, ToolbarService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data'  [toolbar]='toolbarOptions' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' isPrimaryKey='true' textAlign='Right' width=90 [validationRules]='taskidRule' ></e-column>
                        <e-column field='taskName' headerText='Task Name' editType='stringedit' textAlign='Left' width=180  [validationRules]='stringRule' ></e-column>
                        <e-column field='priority' headerText='Priority' editType='stringedit' textAlign='Right' width=110 [validationRules]='stringRule' ></e-column>
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
    
    public customFn_max: (args: { [key: string]: number }) => boolean = (args: { [key: string]: number }) => {
        return (args['value'] <= 1000);
    }

    public customFn_min: (args: { [key: string]:  number}) => boolean = (args: { [key: string]:  number }) => {
      return (args['value'] >= 1);
    }
    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' };
        this.toolbarOptions = ['Add', 'Delete', 'Update', 'Cancel'];
        this.editing = { params: { format: 'n' } };
        this.formatOptions = { format: 'M/d/y hh:mm a', type: 'dateTime' };
        this.progressRule = { 
                number: true,
                maxLength: [this.customFn_max, 'Please enter a value less than 1000'],
                minLength: [this.customFn_min, 'Please enter a value greater than 1']  };
        this.taskidRule = { required: true, number: true };
        this.stringRule = { required: true };
    }
}