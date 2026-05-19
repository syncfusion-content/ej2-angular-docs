import { PivotViewModule } from '@syncfusion/ej2-angular-pivotview';
import { Component, OnInit } from '@angular/core';
import { IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
  imports: [
    PivotViewModule
  ],
  standalone: true,
  selector: 'app-root',
  template: `<div style="height: 480px;"><ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [width]=width></ejs-pivotview></div>`
})

export class App implements OnInit {
  public dataSourceSettings?: DataSourceSettingsModel;
  public width?: string;
  public Pivot_Data: IDataSet[] = [
    { Amount: 2100, Country: "Canada", Date: "FY 2005", Product: "Bike", Quantity: 22, State: "Alberta" , 'Quarter': 'Q1' },
    { Amount: 1100, Country: "Canada", Date: "FY 2006", Product: "Van", Quantity: 32, State: "Quebec" , 'Quarter': 'Q1' },
    { Amount: 3100, Country: "Canada", Date: "FY 2007", Product: "Car", Quantity: 22, State: "Alberta" , 'Quarter': 'Q2' },
    { Amount: 4800, Country: "France", Date: "FY 2005", Product: "Bike", Quantity: 49, State: "Charente-Maritime" ,'Quarter': 'Q2' },
    { Amount: 9100, Country: "France", Date: "FY 2007", Product: "Car", Quantity: 64, State: "Charente-Maritime" , 'Quarter': 'Q3' },
    { Amount: 2350, Country: "France", Date: "FY 2008", Product: "Van", Quantity: 46, State: "Gers" , 'Quarter': 'Q3' },
    { Amount: 3400, Country: "Germany", Date: "FY 2005", Product: "Bike", Quantity: 78, State: "Bayern" , 'Quarter': 'Q4' },
    { Amount: 8400, Country: "Germany", Date: "FY 2006", Product: "Van", Quantity: 90, State: "Hamburg" , 'Quarter': 'Q4' },
    { Amount: 7200, Country: "Germany", Date: "FY 2008", Product: "Car", Quantity: 92, State: "Bayern" ,'Quarter': 'Q5' },
    { Amount: 1040, Country: "United Kingdom", Date: "FY 2005", Product: "Bike", Quantity: 47, State: "England" ,'Quarter': 'Q5' },
    { Amount: 1500, Country: "United Kingdom", Date: "FY 2006", Product: "Van", Quantity: 24, State: "England" ,'Quarter': 'Q6' },
    { Amount: 4820, Country: "United Kingdom", Date: "FY 2008", Product: "Car", Quantity: 72, State: "England" ,'Quarter': 'Q6' },
    { Amount: 1520, Country: "United States", Date: "FY 2006", Product: "Bike", Quantity: 53, State: "North Carolina" ,'Quarter': 'Q7' },
    { Amount: 3320, Country: "United States", Date: "FY 2007", Product: "Car", Quantity: 49, State: "South Carolina" ,'Quarter': 'Q7' },
  ];
  ngOnInit(): void {
    this.dataSourceSettings = {
      dataSource: this.Pivot_Data as IDataSet[],
      columns: [{ name: 'Date' }, { name: 'Product' }],
      expandAll: false,
      formatSettings: [{ name: 'Amount', format: 'C0' }],
      rows: [{ name: 'Country' }, { name: 'State' }],
      values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Quantity' }]
    };
    this.width = "100%";
  }
}