import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-container',
  template: `<div class="control-section">
                <div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
          
                    <ejs-treegrid #treegrid [dataSource]="data" allowPaging="true" childMapping="subtasks" height="350"
                      [treeColumnIndex]="1" (expanding)="expanding($event)" (collapsing)="collapsing($event)" (collapsed)="collapsed($event)"
                      (expanded)="expanded($event)">
                          <e-columns>
                            <e-column field="taskID" headerText="Task ID" isPrimaryKey="true" width="70" textAlign="Right" ></e-column>
                            <e-column field="taskName" headerText="Task Name" width="200"></e-column>
                            <e-column field="startDate" headerText="Start Date" width="90" format="yMd" textAlign="Right"></e-column>
                            <e-column field="endDate" headerText="End Date" width="90" format="yMd" textAlign="Right"></e-column>
                            <e-column field="duration" headerText="Duration" width="80" textAlign="Right"></e-column>
                            <e-column field="progress" headerText="Progress" width="80" ></e-column>
                            <e-column field="priority" headerText="Priority" width="90"></e-column>   
                          </e-columns>
                     </ejs-treegrid>
               </div>`,
})
export class AppComponent implements OnInit {
  public data: Object[] = [];
  public message?: string;
  ngOnInit(): void {
    this.data = sampleData;
  }

  expanding(args: any): void {
    this.message = 'Expanding event is triggered';
  }
  collapsing(args: any): void {
    this.message = 'Collapsing event is triggered';
  }
  expanded(args: any): void {
    this.message = 'Expanded event is triggered';
  }
  collapsed(args: any): void {
    this.message = 'Collapsed event is triggered';
  }
}
