import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { sampleData } from './datasource';

@Component({
  selector: 'app-container',
  template: `<div style="padding:0px 0px 20px 0px">
  
            <label> Enable/Disable Row Hover</label>

            <ejs-switch id="switch" [(checked)]="enableRowHover" 
            (change)="toggleRowHover()"></ejs-switch>

            </div>
            <ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='315' childMapping='subtasks' [enableHover]="enableRowHover"  >
                  <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                  </e-columns>
              </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  public data?: Object[];
  @ViewChild('treegrid')
  public treegrid: TreeGridComponent | undefined;
  public enableRowHover: boolean = true;

  ngOnInit(): void {
    this.data = sampleData;
  }
  toggleRowHover(): void {
    this.enableRowHover = !this.enableRowHover;
  }
}
