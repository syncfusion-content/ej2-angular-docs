import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { DataUtil } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  templateUrl: 'app.template.html',
})
export class AppComponent implements OnInit {
  @ViewChild('grid')
  public grid?: GridComponent;
  public data: object[] = [];
  ngOnInit(): void {
    this.data = data;
  }
  public customAggregateFn = () => {
    const distinct = DataUtil.distinct(this.data, 'ShipCountry', true);
    return distinct.length;
  };
}
