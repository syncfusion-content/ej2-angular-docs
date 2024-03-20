import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-container',
  template: `
    <button ejs-button (click)="Indenting()">Indent</button>
    <button ejs-button (click)="Outdenting()">Outdent</button>
    <ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='270' childMapping='subtasks'  >
        <e-columns>
            <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
            <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
            <e-column field='priority' headerText='Priority' textAlign='Right' width=90></e-column>
            <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
        </e-columns>
    </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  @ViewChild('treegrid')
  public treegrid?: TreeGridComponent;
  public data?: Object[];

  ngOnInit(): void {
    this.data = sampleData;
  }

  public Indenting(): void {
    //Here, the row is selected before indenting by passing the index in the selectRow method.
    this.treegrid?.selectRow(2);
    //After selecting the row, the selected row is indented using the indent method.
    this.treegrid?.indent();
  }

  public Outdenting(): void {
    //Here, the row is selected before outdenting by passing the index in the selectRow method.
    this.treegrid?.selectRow(2);
    //After selecting the row, the selected row is outdented using the outdent method.
    this.treegrid?.outdent();
  }
}
