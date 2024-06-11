import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridComponent, TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, SortService, FilterService,EditService,ToolbarService } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';
import { CheckBoxModule, CheckBoxComponent } from '@syncfusion/ej2-angular-buttons'
import { EditEventArgs, getObject } from '@syncfusion/ej2-angular-grids';
@Component({
    imports: [TreeGridModule, CheckBoxModule ],

    providers: [PageService, EditService, ToolbarService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data'  [toolbar]='toolbarOptions' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' childMapping='subtasks' (actionComplete)="actionComplete($event)" >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' isPrimaryKey='true' textAlign='Right' width=90 [validationRules]='taskidRule' ></e-column>
                        <e-column field='taskName' headerText='Task Name' editType='stringedit' textAlign='Left' [validationRules]='stringRule' width=180  ></e-column>
                        <e-column field='priority' headerText='Priority' editType='stringedit' textAlign='Right' [validationRules]='stringRule' width=110 ></e-column>
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
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbarOptions = ['Add', 'Delete', 'Update', 'Cancel'];
        this.editing = { params: { format: 'n' } };
        this.formatOptions = { format: 'M/d/y hh:mm a', type: 'dateTime' };
        this.progressRule = { number: true, min:0 };
        this.taskidRule = { required: true, number: true };
        this.stringRule = { required: true };
    }
    actionComplete(args: EditEventArgs) {
        var valueError = getObject('valErrorPlacement', (this.treegrid as TreeGridComponent).grid.editModule).bind((this.treegrid as TreeGridComponent).grid.editModule);  
        (this.treegrid as TreeGridComponent).grid.editModule.formObj.customPlacement = (input:any, error:any) => { 
          valueError(input, error);
          
          var element = document.getElementById(input.name + '_Error');
          var tooltipWidth = (element as HTMLElement).offsetWidth;
          var  inputElement = null;
          if (document.querySelector('#' + (this.treegrid as TreeGridComponent).grid.element.id + input.name)) {
            inputElement = document.querySelector('#' +(this.treegrid as TreeGridComponent).grid.element.id + input.name);
          } else if (document.querySelector('#' + input.name)) {
            inputElement = document.querySelector('#' + input.name);
          }
          var inputPosition = ( inputElement as Element).getBoundingClientRect();
          var leftPosition =  (inputPosition.left - tooltipWidth - 16).toString() + 'px'; //for right side
          var topPosition = (inputPosition.top).toString() + 'px';
          (element as HTMLElement).style.left = leftPosition; 
          (element as HTMLElement).style.top =  topPosition;
          (element as HTMLElement).style.position = 'fixed';
        } 
      } 
    
}