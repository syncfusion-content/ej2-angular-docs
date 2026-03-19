import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { CheckBoxSelectionService, DropDownListAllModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { FilterService, FilterSettingsModel, GridModule, PageService } from '@syncfusion/ej2-angular-grids';
import { MessageModule } from '@syncfusion/ej2-angular-notifications';

@Component({
  imports: [
    GridModule,
    MultiSelectModule,
    DropDownListAllModule,
    CheckBoxModule,
    MessageModule
      ],
  providers: [FilterService, PageService,CheckBoxSelectionService],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-grid [dataSource]='data' [allowFiltering]='true' [allowPaging]='true' [filterSettings]='filterOption' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' ></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' [filter]='filterParams'></e-column>
                    <e-column field='ShipName' headerText='ShipName' ></e-column>                    
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' ></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  public filterParams?: object;
  public filterOption?: FilterSettingsModel = { type: 'Menu' };

  ngOnInit(): void {
    this.data = data;
    this.filterParams = { params: { autofill: false } };
  }
}
