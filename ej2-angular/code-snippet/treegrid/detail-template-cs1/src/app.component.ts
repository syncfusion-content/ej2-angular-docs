import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  TreeGridComponent,
  DetailRowService,
} from '@syncfusion/ej2-angular-treegrid';
import { sampleData, textdata } from './datasource';
import { Internationalization } from '@syncfusion/ej2-base';
import { DetailDataBoundEventArgs, Grid } from '@syncfusion/ej2-grids';

let instance: Internationalization = new Internationalization();

@Component({
  selector: 'app-container',
  template: `<ejs-treegrid #treegrid [dataSource]='data' height=317 width='auto' childMapping= 'Children' (detailDataBound)='detailDataBound($event)' >
                <e-columns>
                    <e-column field='Name' headerText='First Name' width='160'></e-column>
                    <e-column field='DOB' headerText = 'DOB' width='105' type='date' format='yMd'></e-column>
                    <e-column field='Designation' headerText = 'Designation' width='180'></e-column>
                    <e-column field='Country' headerText = 'Country' width='148'></e-column>
                </e-columns>
                <ng-template #detailTemplate let-data>
                    <div class = 'custom-grid' ></div>
                </ng-template>
            </ejs-treegrid>`,
  providers: [DetailRowService],
})
export class AppComponent implements OnInit {
  public data?: Object[];

  @ViewChild('treegrid')
  public treegrid?: TreeGridComponent;

  ngOnInit(): void {
    this.data = textdata;
  }
  detailDataBound(e: DetailDataBoundEventArgs) {
    let detail = new Grid({
      dataSource: sampleData,
      columns: [
        { field: 'taskID', headerText: 'Order ID', width: 110 },
        { field: 'taskName', headerText: 'Customer Name', width: 140 },
        { field: 'priority', headerText: 'Ship Country', width: 150 },
      ],
    });
    detail.appendTo(
      (e.detailElement as HTMLElement).querySelector(
        '.custom-grid'
      ) as HTMLElement
    );
  }
  public format(value: Date): string {
    return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
  }
}
export interface DateFormat extends Window {
  format?: Function;
}
