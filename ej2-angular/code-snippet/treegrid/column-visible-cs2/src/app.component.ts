import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-container',
  template: `<button id='show' ejs-button class='e-flat' (click)='show()'> Show </button>
             <button id='hide' ejs-button class='e-flat' (click)='hide()'> Hide </button>

              <ejs-treegrid #treegrid [dataSource]='data' height='285' [treeColumnIndex]='1' childMapping='subtasks' >
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
  public treeGridObj?: TreeGridComponent;
  
  ngOnInit(): void {
    this.data = sampleData;
  }
  show() {
    (this.treeGridObj as TreeGridComponent).showColumns(
      'Task Name',
      'headerText'
    ); //show by HeaderText
  }

  hide() {
    (this.treeGridObj as TreeGridComponent).hideColumns(
      'Task Name',
      'headerText'
    ); //hide by HeaderText
  }
}
