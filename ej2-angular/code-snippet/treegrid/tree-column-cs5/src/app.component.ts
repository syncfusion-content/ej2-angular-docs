import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-container',
  template: `<div class="control-section">
               <ejs-treegrid #treegrid1 [dataSource]="data" allowPaging="true" childMapping="subtasks" height="350" [treeColumnIndex]="1"
                (dataBound)="dataBound($event)" (collapsed)="collapsed($event)" (expanded)="expanded($event)" [enablePersistence]=true>
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
  @ViewChild('treegrid1')
  public treegrid: TreeGridComponent | undefined;
  public collapsingData: any = [];

  ngOnInit(): void {
    this.data = sampleData;
  }

  dataBound(args: any): void {
    //checking whether it is initial rendering
    if (
      (this.treegrid as TreeGridComponent).initialRender &&
      window.localStorage != null
    ) {
      //retriving collapsed record in local storage using getItem method
      var Collapsed_storagedata = JSON.parse(
        window.localStorage.getItem('collapsingData') as any
      );

      if (Collapsed_storagedata != null) {
        for (var i = 0; i < Collapsed_storagedata.length; i++) {
          (this.treegrid as TreeGridComponent).collapseByKey(
            Collapsed_storagedata[i]
          ); //collapsing row using collapseByKey method
        }
      }
    }
  }

  collapsed(args: any): void {
    //Here collected the collapsed record's primarykey value
    this.collapsingData.push((args.data as any).taskID);

    //Here set/ update the localstorage value
    this.setstorage_data(this.collapsingData);
  }
  expanded(args: any): void {
    //Check whether the collapsing data array has the same primary key value as the expanding data.
    var index = this.collapsingData.findIndex((x: any) => {
      if (x == (args.data as any).taskID) {
        return x;
      }
    });
    //if yes here we remove that primary key value
    this.collapsingData.splice(index, 1);

    // update the localstorage value
    this.setstorage_data(this.collapsingData);
  }
  setstorage_data(data: any): void {
    window.localStorage.setItem('collapsingData', JSON.stringify(data));
  }
}
