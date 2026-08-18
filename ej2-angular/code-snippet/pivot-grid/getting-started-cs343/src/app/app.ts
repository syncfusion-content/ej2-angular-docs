import { PivotViewModule } from '@syncfusion/ej2-angular-pivotview';
import { Component, OnInit } from '@angular/core';
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
  ngOnInit(): void {
    this.dataSourceSettings = {
      catalog: 'Adventure Works DW 2008 SE',
      cube: 'Adventure Works',
      providerType: 'SSAS',
      enableSorting: true,
      url: 'https://bi.syncfusion.com/olap/msmdpump.dll',
      localeIdentifier: 1033,
      rows: [
        { name: '[Customer].[Customer Geography]', caption: 'Customer Geography' },
      ],
      columns: [
        { name: '[Product].[Product Categories]', caption: 'Product Categories' },
        { name: '[Measures]', caption: 'Measures' },
      ],
      values: [
        { name: '[Measures].[Customer Count]', caption: 'Customer Count' },
        { name: '[Measures].[Internet Sales Amount]', caption: 'Internet Sales Amount' }
      ],
      filters: [
        { name: '[Date].[Fiscal]', caption: 'Date Fiscal' },
      ],
      filterSettings: [
        {
          name: '[Date].[Fiscal]', items: ['[Date].[Fiscal].[Fiscal Quarter].&[2002]&[4]',
            '[Date].[Fiscal].[Fiscal Year].&[2005]'],
          levelCount: 3
        }
      ]
    };
    this.width = "100%";
  }
}