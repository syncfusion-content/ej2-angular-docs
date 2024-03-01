import { Component, OnInit, ViewChild } from '@angular/core';
import { projectData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { RowDataBoundEventArgs, Column } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-container',
  template: `<ejs-treegrid #treegrid [dataSource]='data' height='315px' [treeColumnIndex]='1' idMapping='TaskID' parentIdMapping="parentID" (rowDataBound)='rowDataBound($event)'>
                <e-columns>
                    <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='StartDate' headerText='Start Date' textAlign='Right'  width=160 format='yMd'></e-column>
                    <e-column field='Duration' headerText='Duration' textAlign='Right' format='c2' type='number' width=80></e-column>
                    <e-column field='Approved' headerText='Approved' width=130 displayAsCheckBox="true"></e-column>
                 </e-columns>
              </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  public data?: object[];
  
  @ViewChild('treegrid')
  public treegrid?: TreeGridComponent;

  ngOnInit(): void {
    this.data = projectData;
  }
  rowDataBound(args: RowDataBoundEventArgs) {
    let count = 0;
    let data: any = projectData[(args.data as any).index];
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      if (
        data[keys[i]] == null ||
        data[keys[i]] == '' ||
        data[keys[i]] == undefined
      ) {
        count++;
      }
    }
    if (count == keys.length || count == keys.length - 1) {
      var col: any = (this.treegrid as TreeGridComponent).columns;
      for (let i = 0; i < col.length; i++) {
        if ((col[i] as Column).displayAsCheckBox) {
          (args.row as Element).children[i].innerHTML = '';
        }
      }
    }
  }
}
