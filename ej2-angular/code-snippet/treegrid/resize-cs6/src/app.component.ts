

import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import {  ResizeMode } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { ResizeService,TreeGridComponent  } from '@syncfusion/ej2-angular-treegrid';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'app-container',
    template: `<div style="display:flex;">
                <label style="padding: 10px 10px 26px 0">Change the field: </label>
                 <ejs-dropdownlist style="margin-top:5px" id="value" #dropdown index="0" width="120"
                  [fields]="field" [dataSource]="ddlData"></ejs-dropdownlist>
               </div>

               <div>
                <label style="padding: 30px 17px 0 0">Enter the width: </label>
                  <ejs-textbox #textbox required placeholder="Enter new width" width="120"></ejs-textbox>
                  <button ejs-button id="button" cssClass="e-outline" (click)="onExternalResize()">Resize</button>
               </div>    

              <ejs-treegrid #treegrid [dataSource]='data' height='315' [allowResizing]='true' [treeColumnIndex]='1' childMapping='subtasks'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                        <e-column field='progress' headerText='Progress' textAlign='Right' width=120></e-column>
                    </e-columns>
              </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public field: object = { text: 'text', value: 'value' };
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    public dropDown?: DropDownListComponent;
    @ViewChild('textbox')
    public textbox?: any;

    ngOnInit(): void { 
        this.data = sampleData;
    }

   public ddlData: object[] = [
    { text: 'taskID', value: 'taskID' },
    { text: 'taskName', value: 'taskName' },
    { text: 'startDate', value: 'startDate' },
    { text: 'duration', value: 'duration' },
    { text: 'progress', value: 'progress' },
  ];
  onExternalResize() {
    (this.treegrid as TreeGridComponent).getColumnByField((this.dropDown as DropDownListComponent).value as string).width = this.textbox.element.value;
    (this.treegrid as TreeGridComponent).refreshColumns();
  }
}