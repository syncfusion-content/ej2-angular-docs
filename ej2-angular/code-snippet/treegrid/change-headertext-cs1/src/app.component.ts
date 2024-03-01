

import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'app-container',
    template: `<div style="display: flex">
               <label style="padding: 30px 20px 0 0" > Select column name  :</label>
               <ejs-dropdownlist  #dropdown style="padding: 26px 0 0 0" index='0' width="220" [dataSource]="columns"  [fields]="field"></ejs-dropdownlist>
               </div>
   
               <div>
                  <label style="padding: 30px 17px 0 0" >Enter new header text :</label>
                  <ejs-textbox #textbox required placeholder="Enter new header text" width="220">
                   </ejs-textbox>
                </div>

                <div>
                    <label style="padding: 30px 17px 0 0" >Click the change button :</label>
                    <button ejs-button id="buttons" (click)="ChangeHeaderText()">Change</button>
                </div>

               <div style="padding: 20px 17px 0 0">
                  <ejs-treegrid #treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks'  [allowFiltering]="true" [allowSorting]="true">
                     <e-columns>
                        <e-column field='taskID' headerText='Task ID' [allowSorting]="false" textAlign='Right' width=120></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' [allowFiltering]="false" textAlign='Right' format='yMd' width=120></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=120></e-column>
                        <e-column field='progress' headerText='Progress' textAlign='Right' width=120></e-column>
                      </e-columns>
                  </ejs-treegrid> 
                </div>`,
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public columns: Object[] = [
        { text: 'Task ID', value: 'taskID' },
        { text: 'Task Name', value: 'taskName' },
        { text: 'startDate', value: 'Start Date' },
        { text: 'duration', value: 'Duration' },
        { text: 'progress', value: 'Progress' }
      ];
      public field?: Object = { text: 'text', value: 'value' };
      @ViewChild('dropdown') public dropdown?: DropDownListComponent;
      @ViewChild('textbox') public textbox?: TextBoxComponent;
      @ViewChild('treegrid')
      public treegrid?: TreeGridComponent;
    
      public ChangeHeaderText(): void {
        if ((this.textbox as TextBoxComponent).element.value.trim() !== '') {
          const column = (this.treegrid as TreeGridComponent).grid.getColumnByField(
            (((this.dropdown as DropDownListComponent).value as string))
          );
          column.headerText = (this.textbox as TextBoxComponent).element.value;
          (this.treegrid as TreeGridComponent).refreshHeader();
        }
      }
    ngOnInit(): void {
        this.data = sampleData;
    }
}



