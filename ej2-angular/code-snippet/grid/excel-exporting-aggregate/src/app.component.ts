import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, ExcelExportService,AggregateService } from '@syncfusion/ej2-angular-grids'

import { Component, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
imports: [
        
        GridModule
    ],

providers: [ExcelExportService, ToolbarService,AggregateService],
standalone: true,
  selector: 'app-root',
  template:`<div class="control-section">
              <ejs-grid #grid id="DefaultExport" [dataSource]="data" [toolbar]="toolbar"
                (toolbarClick)="toolbarClick($event)" [allowExcelExport]="true">
                <e-columns>
                  <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120>
                  </e-column>
                  <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>      
                  <e-column field="Freight" headerText="Freight" width="150" format="C2" 
                    textAlign="Right"></e-column>
                  <e-column field="OrderDate" headerText="Order Date" width="150"
                  format="yMd" textAlign="Right"></e-column>
                  <e-column field="ShipCountry"  headerText="Ship Country" width="150">
                  </e-column>
                </e-columns>
                <e-aggregates>
                  <e-aggregate>
                    <e-columns>
                      <e-column columnName="ShipCountry" type="Custom"
                      [customAggregate]="customAggregateFn">
                        <ng-template #footerTemplate let-data> {{ data.Custom }}</ng-template>
                      </e-column>
                    </e-columns>
                  </e-aggregate>
                </e-aggregates>
              </ejs-grid>
            </div>`
})

export class AppComponent {
  
  public data?: Object[];
  public toolbar?: string[];
  @ViewChild('grid')
  public grid?: GridComponent;

  public ngOnInit(): void {
    this.data = data.slice(0, 20);
    this.toolbar = ['ExcelExport'];
  }
  toolbarClick(args: ClickEventArgs): void {
    if (args.item.id=='DefaultExport_excelexport') {
        (this.grid as GridComponent).excelExport();
    }
  }
  public customAggregateFn = (customData: any) => {
      const brazilCount=customData.result ? customData.result.filter(
        (item: object) => (item as any)['ShipCountry'] === 'Brazil'
      ).length:
    customData.filter(
        (item: object) => (item as any)['ShipCountry'] === 'Brazil'
      ).length;
  return `Brazil Count::${brazilCount}`;
  };
}
