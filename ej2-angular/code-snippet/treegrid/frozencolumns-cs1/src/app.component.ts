

import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FreezeService, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { NumericTextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { sampleData } from './datasource';

@Component({
    selector: 'app-container',
    template: ` <div style="display: flex">
                   <label style="padding: 10px 10px 26px 0">Change the frozen columns:</label>
                
                    <ejs-numerictextbox id="frozenColumns" #frozenColumns min="0" max="5" [validateDecimalOnType]="true" decimals="0" format="n"
                     value="2" width="100px" ></ejs-numerictextbox>
                  <div> 
                     <button style="margin-left:5px" ejs-button (click)="frozenColumnFn()">Update</button>
                  </div>
                </div>

                <ejs-treegrid #treegrid [dataSource]='data' childMapping='subtasks' [treeColumnIndex]='1' height='310' [frozenColumns]='2' [frozenRows]='3' [allowSelection]='false'>
                  <e-columns>
                    <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                    <e-column field='taskName' headerText='Task Name' width='230'></e-column>
                    <e-column field='startDate' headerText='Start Date' width='120' format='yMd' textAlign='Right'></e-column>
                    <e-column field='endDate' headerText='End Date' width='120' format='yMd' textAlign='Right'></e-column>
                    <e-column field='duration' headerText='Duration' width='110' textAlign='Right'></e-column>
                    <e-column field='progress' headerText='Progress' width='110' textAlign='Right'></e-column>
                    <e-column field='priority' headerText='Priority' width='110'></e-column>
                    <e-column field='approved' headerText='Approved' textAlign='Left' width='110'></e-column>
                  </e-columns>
                </ejs-treegrid>`,
providers: [FreezeService]
})
export class AppComponent implements OnInit {

    public data?: Object[];
    
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;

    @ViewChild('frozenColumns')
    public frozenColumns?: NumericTextBoxComponent;

    ngOnInit(): void {
        this.data = sampleData;
    }
    frozenColumnFn() {
        this.treegrid.frozenColumns = (this.frozenColumns as NumericTextBoxComponent).value;
      }
}



