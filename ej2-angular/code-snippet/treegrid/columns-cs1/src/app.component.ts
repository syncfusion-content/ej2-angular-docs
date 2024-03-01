

import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<button ejs-button id="btnId" cssClass="e-info" (click)='updateColumns()'> Update Columns </button>
               <ejs-treegrid #treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=130></e-column>
                        <e-column field='progress' headerText='Progress' textAlign='Right' width=120></e-column>
                    </e-columns>
                </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data?: Object[];
    @ViewChild('treegrid') treegrid?: TreeGridComponent;
    ngOnInit(): void {
        this.data = sampleData;
    }

    updateColumns(): void {
        // Modifying column properties
    var column: any = (this.treegrid as TreeGridComponent).columns;

    column[0].textAlign = 'Center';
    column[0].width = '100';
    column[2].visible = false;
    column[1].customAttributes = {
      class: 'customcss',
    };
    // Applying changes to the treegrid
    (this.treegrid as TreeGridComponent).refreshColumns();
  }
   
}



