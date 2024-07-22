

import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'app-container',
    template: `<div>
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
    public headerTextMap: { [key: string]: string } = {
         'taskID' :'Task ID' ,
       'taskName': 'Task Name' ,
        'startDate': 'Start Date' ,
        'duration': 'Duration',
       'progress': 'Progress' 
    };
          
      @ViewChild('treegrid')
      public treegrid?: TreeGridComponent;
    
      public ChangeHeaderText(): void {
        this.treegrid?.columns.forEach((column:  any) => {
          column.headerText = this.headerTextMap[column.field as string];
      });
      this.treegrid?.refreshHeader();
    }
      
    ngOnInit(): void {
        this.data = sampleData;
    }
}



