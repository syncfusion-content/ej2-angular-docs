
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { Component, OnInit} from '@angular/core';
import { sampleData ,multiselectdata} from './datasource';
import { EditSettingsModel, ToolbarItems ,EditService, ToolbarService, PageService} from '@syncfusion/ej2-angular-treegrid';
import { Query } from '@syncfusion/ej2-data';
import { AutoComplete } from '@syncfusion/ej2-angular-dropdowns';
import {  IEditCell,  } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers: [EditService, ToolbarService, PageService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [toolbar]='toolbar' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' [edit]='editParams' textAlign='Left' width=250></e-column>
                        <e-column field='priority' headerText='Priority' textAlign='Right' width=140></e-column>
                        <e-column field='progress' editType= 'numericedit' headerText='Progress' textAlign='Right' width=120></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public taskData?: object | any;
    public editParams?: IEditCell;
    public inpuEle?: HTMLElement;
    public autoCompleteIns?: AutoComplete;
    public autoCompleteData=multiselectdata;
    public createtaskNameFn = () => {
        this.inpuEle = document.createElement('input');
        return this.inpuEle;
      }
      public destroytaskNameFn = () => {
        this.autoCompleteIns?.destroy();
      }
      public readtaskNameFn = () => {
        return this.autoCompleteIns?.value;
      }
      public writetaskNameFn = (args: any) => {
        this.autoCompleteIns = new AutoComplete({
          allowCustom: true,
          value: args.rowData[args.column.field],
          dataSource: this.autoCompleteData ,
          fields: { value: 'value', text: 'text' },
        });
        this.autoCompleteIns?.appendTo(this.inpuEle);
      }
   
    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode:"Row"};
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.editParams = {
            create: this.createtaskNameFn,
            read: this.readtaskNameFn,
            destroy: this.destroytaskNameFn,
            write: this.writetaskNameFn
          };
    }

}