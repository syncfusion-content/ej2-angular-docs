import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit, ViewChild } from '@angular/core';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Query, DataManager } from '@syncfusion/ej2-data';
import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems, TreeGridComponent,EditService, ToolbarService, PageService } from '@syncfusion/ej2-angular-treegrid';
import { EditEventArgs, IEditCell } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers: [EditService, ToolbarService, PageService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' [toolbar]='toolbar' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' (load)='load($event)' (actionComplete)='onActionComplete($event)' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name'  textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' editType='datepickeredit' format='yMd' width=180></e-column>
                        <e-column field='priority' headerText='Priority' editType= 'dropdownedit' textAlign='Right' width=140></e-column>
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
    public isDropdown = false;

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true,mode:'Row' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
       
    }
    
  load(args: Object) {
    (this.treegrid as TreeGridComponent).element.addEventListener('mouseup', (e: MouseEvent) => {
      if ((e.target as HTMLElement).classList.contains('e-rowcell')) {
        if ( (this.treegrid as TreeGridComponent).grid.isEdit) {
           (this.treegrid as TreeGridComponent).endEdit();
        }
        let rowInfo =  (this.treegrid as TreeGridComponent).getRowInfo(e.target as EventTarget);
        if (rowInfo && rowInfo.column && (rowInfo.column as any).field  === 'priority') {
          this.isDropdown = true;
           (this.treegrid as TreeGridComponent).selectRow((rowInfo.rowIndex as number));
           (this.treegrid as TreeGridComponent).startEdit();
        }
      }
    });
  }

  onActionComplete(args: EditEventArgs) {
    if (args.requestType === 'beginEdit' && this.isDropdown) {
      this.isDropdown = false;
      let dropdownObj = ((args.form as HTMLFormElement).querySelector('.e-dropdownlist') as HTMLFormElement)['ej2_instances'][0] ;
      dropdownObj.element.focus();
      dropdownObj.showPopup();
    }
  }

}



