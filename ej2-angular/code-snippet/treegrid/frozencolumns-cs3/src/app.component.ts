

import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FreezeService, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { sampleData } from './datasource';
import { freezeDirection } from '@syncfusion/ej2-angular-grids';
import {
    ChangeEventArgs,
    DropDownListComponent,
  } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'app-container',
    template: `<div style="display: flex;margin-top:10rem" >
                  <label style="padding: 10px 10px 26px 0"> Change column: </label>
                  <ejs-dropdownlist id="columnDropDown" #columnDropDown index="7" [dataSource]="columnData" [fields]="fields"
                   width="100px"></ejs-dropdownlist>

                  <label style="padding: 10px 10px 26px 0; margin-left:5px">Change freeze direction:</label>
                  <ejs-dropdownlist id="directionDropDown" #directionDropDown index="0" [dataSource]="directionData" [fields]="fields1"
                    width="80px"></ejs-dropdownlist>
                  <div>
                    <button style="margin-left:5px" ejs-button (click)="freezeDirectionFn()">Update</button>
                  </div>
               </div>

                   <ejs-treegrid #treegrid [dataSource]='data' childMapping='subtasks' height='310' [treeColumnIndex]='1' [allowSelection]='false'>
                      <e-columns>
                        <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                        <e-column field='taskName' headerText='Task Name' width='200' freeze='Left'></e-column>
                        <e-column field='startDate' headerText='Start Date' width='150' format='yMd' textAlign='Right'></e-column>
                        <e-column field='endDate' headerText='End Date' width='150' format='yMd' textAlign='Right'></e-column>
                        <e-column field='duration' headerText='Duration' width='110' textAlign='Right'></e-column>
                        <e-column field='progress' headerText='Progress' width='110' freeze='Right' textAlign='Right'></e-column>
                        <e-column field='priority' headerText='Priority' freeze='Fixed' width='110'  ></e-column>
                        <e-column field='approved' headerText='Approved' textAlign='Left' width='110'></e-column>
                      </e-columns>
                    </ejs-treegrid>`,
providers: [FreezeService]
})
export class AppComponent implements OnInit {

    public data?: Object[];
  @ViewChild('treegrid')
  public treegrid?: TreeGridComponent;

  @ViewChild('columnDropDown')
  public columnDropDown?: DropDownListComponent;

  @ViewChild('directionDropDown')
  public directionDropDown?: DropDownListComponent;

  public fields: object = { text: 'text', value: 'value' };
  public fields1: object = { text: 'name', value: 'id' };
  public columnData?: object[];
  public directionData?: object[];
  
  ngOnInit(): void {
    this.data = sampleData;
    this.directionData = [
      { id: 'Left', name: 'Left' },
      { id: 'Right', name: 'Right' },
      { id: 'Fixed', name: 'Fixed' },
    ];
    this.columnData = [
      { text: 'taskID', value: 'taskID' },
      { text: 'taskName', value: 'taskName' },
      { text: 'startDate', value: 'startDate' },
      { text: 'endDate', value: 'endDate' },
      { text: 'duration', value: 'duration' },
      { text: 'progress', value: 'progress' },
      { text: 'priority', value: 'priority' },
      { text: 'approved', value: 'approved' },
    ];
  }

  freezeDirectionFn() {
    this.treegrid.getColumnByField(
      (this.columnDropDown as DropDownListComponent).value as string
    ).freeze = (this.directionDropDown as DropDownListComponent)
      .value as freezeDirection;
    (this.treegrid as TreeGridComponent).refreshColumns();
  }
}
