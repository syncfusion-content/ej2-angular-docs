import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, SortService, FilterService,EditService,ToolbarService } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems, TreeGridComponent, Column } from '@syncfusion/ej2-angular-treegrid';
import { SaveEventArgs, EditEventArgs } from '@syncfusion/ej2-angular-grids';


@Component({
    imports: [TreeGridModule],

    providers: [PageService,
                SortService,
                FilterService,
                EditService,
                ToolbarService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' [toolbar]='toolbarOptions' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' (actionComplete)="actionComplete($event)" childMapping='subtasks'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' isPrimaryKey='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                        <e-column field='priority' headerText='Priority' textAlign='Right' width=90></e-column>
                        <e-column field='approved' headerText='approved' textAlign='Right' width=80 type="boolean" [displayAsCheckBox]="true"></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbarOptions?: ToolbarItems[];
    public priorityDistinctData = ['Low', 'High', "Critical", 'Normal'];
    @ViewChild('treegrid') treegrid?: TreeGridComponent;
    

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbarOptions = ['Add', 'Edit', 'Delete'];
    }
    actionComplete(args: EditEventArgs) {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
          const dialogInstance = (args as any).dialog;
          dialogInstance.buttons = [
            {
                buttonModel: { content: 'Discard', cssClass: 'e-primary custom-button-style'  }, 
                click: () => {
                  (this.treegrid as TreeGridComponent).grid.editModule.closeEdit();
                }
              },
            {
              buttonModel: { content: 'Submit', cssClass: 'e-success custom-button-style' },
              click: () => {
                (this.treegrid as TreeGridComponent).grid.editModule.endEdit();
              }
            }
          ];
        }
      }

   }



