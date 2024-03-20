import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { sampleData } from './datasource';

@Component({
  selector: 'app-container',
  template: `<ejs-treegrid [dataSource]='data'  [treeColumnIndex]='1' height='270' childMapping='subtasks'  [toolbar]='toolbarOptions' >
                <e-columns>
                    <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='priority' headerText='Priority' textAlign='Right' width=90></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                 </e-columns>
            </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  public data?: Object[];
  public toolbarOptions?: string[];

  ngOnInit(): void {
    this.data = sampleData;
    this.toolbarOptions = ['Indent', 'Outdent'];
  }
}
