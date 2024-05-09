
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit, ViewChild } from '@angular/core';

import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems,EditService, ToolbarService, PageService, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { EditEventArgs, IEditCell } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers: [EditService, ToolbarService, PageService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' [toolbar]='toolbar' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' (actionComplete)="access($event)" childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name'  textAlign='Left' width=180></e-column>
                        <e-column field='priority' headerText='Priority' editType= 'dropdownedit' textAlign='Right' width=140></e-column>
                        <e-column field='duration' editType= 'numericedit' headerText='Duration' textAlign='Right' width=120></e-column>
                        <e-column field='approved' headerText='Approved' width='80'  [displayAsCheckBox]='true' editType= 'booleanedit'></e-column>    
                        <e-column field='progress' editType= 'numericedit' headerText='Progress' textAlign='Right' width=120></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    @ViewChild('treegrid')
    public treegrid?:TreeGridComponent;
    
    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true,mode:'Row' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        
    }
    public access(args: EditEventArgs): void {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
          const tr = args.row as HTMLTableRowElement;
          const numericTextBox = tr.querySelector('.e-numerictextbox');
          if (numericTextBox) {
            const numericTextBoxInstance = (numericTextBox as HTMLFormElement)['ej2_instances'][0];
            numericTextBoxInstance.element.style.backgroundColor = 'light pink';
            numericTextBoxInstance.element.style.color = 'black';
            numericTextBoxInstance.element.style.border = '2px solid red';
            numericTextBoxInstance.element.style.textAlign = 'center';
            numericTextBoxInstance.max = 1000;
            numericTextBoxInstance.min = 1;
          }
          const dropDownList = tr.querySelector('.e-dropdownlist') ;
          if (dropDownList) {
            const dropDownListInstance = (dropDownList as HTMLFormElement)['ej2_instances'][0];
            dropDownListInstance.showPopup(); // Open the dropdown list
          }
        }
      }
}



