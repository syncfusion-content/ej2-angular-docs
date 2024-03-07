import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { RowDataBoundEventArgs } from '@syncfusion/ej2-grids';

@Component({
  selector: 'app-container',
  template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' height='315'  childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID'  width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=100></e-column>
                        <e-column field='startDate' headerText='Start Date'  format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration'  width=80></e-column>
                        <e-column field='priority' headerText='Priority' width=80></e-column>
                    </e-columns>
                    <ng-template #rowTemplate let-data>
                    <tr>
                    <td class="rows">
                        <ejs-chiplist width="90" id="chip" [text]="data.taskID">
                        </ejs-chiplist>
                    </td>
                    <td class="rows">
                      {{data.taskName}}
                    </td>
                    <td class="rows">
                        <ejs-datepicker width="90" [value]="data.startDate">
                        </ejs-datepicker>
                    </td>
                    <td class="rows">
                        <ejs-numerictextbox width="80" [(value)]="data.duration">
                        </ejs-numerictextbox>
                    </td>
                    <td class="rows">
                        <ejs-dropdownlist width="80" [(value)]="data.priority"
                        [dataSource]="priorityData" [popupHeight]="150" [popupWidth]="150">
                        </ejs-dropdownlist>
                    </td>          
                   </tr>
                </ng-template>
            </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  public data?: Object[];
  public dropData?: string[];
  public priorityData?: string[];
  ngOnInit(): void {
    this.data = sampleData;
    this.dropData = ['Planning', 'Design', 'Development', 'Testing'];
    this.priorityData = ['High', 'Low', 'Critical', 'Normal'];
  }
}
