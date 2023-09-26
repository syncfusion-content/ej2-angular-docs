import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<button ej-button id='collapseAll' (click)='collapseAll()'>Collapse All</button>
  <button ej-button id='expandAll' (click)='expandAll()'>Expand All</button>
  <button ej-button id='collapseAtLevel' (click)='collapseAtLevel()'>Collapse At Level</button>
  <button ej-button id='expandAtLevel' (click)='expandAtLevel()'>Expand At Level</button>
  <button ej-button id='collapseRow' (click)='collapseRow()'>Collapse Row</button>
  <button ej-button id='expandRow' (click)='expandRow()'>Expand Row</button>
  <button ej-button id='collapseByKey' (click)='collapseByKey()'>Collapse By Key</button>
  <button ej-button id='expandByKey' (click)='expandByKey()'>Expand By Key</button>
  <ejs-treegrid #treegrid id="TreeGrid" [dataSource]='data' [treeColumnIndex]='1'
      height='270' childMapping='subtasks'>
      <e-columns>
          <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
          <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
          <e-column field='priority' headerText='Priority' textAlign='Right' width=90></e-column>
          <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' type='date' width=90> </e-column>
          <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
      </e-columns>
  </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
    public data: object[] = [];
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    ngOnInit(): void {
        this.data = sampleData;
    }
    expandAll() {
        this.treegrid?.expandAll();
    }
    collapseAll() {
        this.treegrid?.collapseAll();
    }
    collapseAtLevel() {
        this.treegrid?.collapseAtLevel(1);
        // Here 1 is the level of record to be collapsed.
    }
    expandAtLevel() {
        this.treegrid?.expandAtLevel(1);
        // Here 1 is the level of record to be expanded.
    }
    collapseRow() {
        var rowToBeCollapse = this.treegrid?.getRows()[0]; // 1st row details are fetch here.
        this.treegrid?.collapseRow(rowToBeCollapse as HTMLTableRowElement);
    }
    expandRow() {
        var rowToBeExpand = this.treegrid?.getRows()[0];
        this.treegrid?.expandRow(rowToBeExpand as HTMLTableRowElement);
    }
    collapseByKey() {
        this.treegrid?.collapseByKey((this.treegrid?.getCurrentViewRecords()[0] as any).taskID);
        // taskID is the PrimaryKey, 1 is the value which the record needs to be collapsed.
        // Here the first record will be collapsed.
    }
    expandByKey() {
        this.treegrid?.expandByKey((this.treegrid?.getCurrentViewRecords()[0] as any).taskID);
        // taskID is the PrimaryKey, 1 is the value which the record needs to be expanded.
        // Here the first record will be expanded.
    }
}