import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { FilterService, GridModule, GroupService, PageService, SortService } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [ GridModule, DropDownListAllModule],
  providers: [ PageService, SortService, FilterService, GroupService],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-grid [dataSource]='data' [allowFiltering]='true' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120 [allowFiltering]='false'></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=100 ></e-column>
                </e-columns>
                </ejs-grid>`,
})
export class AppComponent implements OnInit {
  public data?: object[];

  ngOnInit(): void {
    this.data = data;
  }
}