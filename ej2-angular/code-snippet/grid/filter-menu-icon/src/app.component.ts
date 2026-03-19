import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { FilterService, FilterSettingsModel, GridComponent, GridModule, PageService } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GridModule, ButtonModule],
  providers: [FilterService, PageService, ],
  standalone: true,
  selector: 'app-root',
  template: `
  <div>
  <button ejs-button id='performFilter' (click)='filterAction($event)'>Filter Customer ID Column</button>
  <button ejs-button id='clearFilter' (click)='filterAction($event)'>Clear Filter</button>
  </div>
  <ejs-grid #grid style='margin-top:10px' [dataSource]='data' [allowFiltering]='true' [allowPaging]='true' [filterSettings]='filterOption' height='250px'>
    <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' ></e-column>
        <e-column field='CustomerID' headerText='Customer ID'></e-column>
        <e-column field='ShipName' headerText='ShipName' ></e-column>                    
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' ></e-column>
    </e-columns>
  </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  public filterParams?: object;
  public filterOption?: FilterSettingsModel = { type: 'Menu' };
  @ViewChild('grid')
  public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
  }

  filterAction(args: MouseEvent){
    if((args.currentTarget  as HTMLElement).id === 'performFilter'){
      (this.grid as GridComponent).filterByColumn('CustomerID', 'startswith', 'v');
    }
    else{
      (this.grid as GridComponent).clearFiltering()
    }
  }
}
