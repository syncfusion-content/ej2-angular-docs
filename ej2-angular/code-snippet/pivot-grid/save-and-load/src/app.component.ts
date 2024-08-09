import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview';
import { Component, ViewChild, OnInit } from '@angular/core';
import { IDataOptions, PivotView, ToolbarService, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { enableRipple } from '@syncfusion/ej2-base';
import { Pivot_Data } from './datasource';
enableRipple(false);

@Component({
  selector: 'app-container',
  template: `
    <div style="height: 480px;">
      <ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]="dataSourceSettings" height="450" showToolbar="true" [toolbarTemplate]='toolbarOptions'></ejs-pivotview>
    </div>
    <div id="template">
      <label for="files" class="e-btn-icon e-open-report e-icons icon-container">
        <input id="files" type="file" class="file-input" (change)="readBlob($event)" />
        <span class="icon-text">Open</span>
      </label>
      <a id="save" class="e-btn-icon e-save-report e-icons icon-container" (click)="saveData()">
        <span class="icon-text">Save</span>
      </a>
    </div>
  `,
  providers: [ToolbarService],
  standalone: true,
  imports: [
    PivotViewAllModule,
    PivotFieldListAllModule
  ]
})
export class AppComponent implements OnInit {
  public dataSourceSettings?: IDataOptions;
  public gridSettings?: GridSettings;
  public toolbarOptions?: any;

  @ViewChild('pivotview')
  public pivotObj?: PivotView;

  ngOnInit(): void {
    this.gridSettings = {
      columnWidth: 140
    } as GridSettings;

    this.toolbarOptions = `#template`;

    this.dataSourceSettings = {
      enableSorting: true,
      columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
      rows: [{ name: 'Country' }, { name: 'Products' }],
      formatSettings: [{ name: 'Amount', format: 'C0' }],
      dataSource: Pivot_Data as IDataSet[],
      expandAll: false,
      values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
      filters: [{ name: 'Product_Categories', caption: 'Product Categories' }]
    };
  }

  saveData(): void {
    if(this.pivotObj)
    {
    const dataSource = JSON.parse(this.pivotObj?.getPersistData()).dataSourceSettings;
    const a: HTMLAnchorElement = document.createElement('a');
    const mime_type = 'application/octet-stream';
    a.setAttribute('download', 'pivot.JSON');
    a.href = 'data:' + mime_type + ';base64,' + btoa(JSON.stringify(dataSource) || '');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    }
  }

  // Read and load data from JSON file
  readBlob(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = (evt: ProgressEvent<FileReader>) => {
        if (evt.target?.readyState === FileReader.DONE) {
          const result = evt.target.result as string;
          this.pivotObj!.dataSourceSettings = JSON.parse(result);
        }
      };
      reader.readAsText(file);
    }
    input.value = '';
  }
}
