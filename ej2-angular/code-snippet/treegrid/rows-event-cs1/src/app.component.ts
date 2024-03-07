import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { sampleData } from './datasource';

@Component({
  selector: 'app-container',
  encapsulation: ViewEncapsulation.None,
  template: `<ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='315' [enableHover]='false' childMapping='subtasks' (dataBound)="customizeRows()">
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

  ngOnInit(): void {
    this.data = sampleData;
  }
  public customizeRows() {
    (
      (this.treegrid as TreeGridComponent).getRowByIndex(2) as HTMLElement
    ).style.background = 'rgb(193, 228, 234)';
  }
}
