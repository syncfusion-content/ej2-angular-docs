import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'



import { Component, ViewChild } from '@angular/core';
import { IDataSet, PivotView, FieldListService } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';
import { Button } from '@syncfusion/ej2-buttons';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
imports: [
        
        PivotViewAllModule,
        PivotFieldListAllModule
    ],


standalone: true,
  selector: 'app-container',
  providers: [FieldListService],
  // specifies the template string for the pivot table component
  template: `<div style="height: 480px;"><ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [width]=width showFieldList='true'></ejs-pivotview></div><a id="save" class="btn btn-primary" (click)="saveData()">Save</a><div class="fileUpload btn btn-primary"><span>Load</span><input id="files" type="file" class="upload" (change)="readBlob($event)"/></div>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    public dataSourceSettings?: DataSourceSettingsModel;
    public button?: Button;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj?: PivotView;
    public width?: string;

    ngOnInit(): void {
        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            enableSorting: true,
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };
        this.width = "100%";
    }

    saveData(): void {
      if(this.pivotGridObj)
      {
      const dataSource = JSON.parse(this.pivotGridObj?.getPersistData()).dataSourceSettings;
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
            this.pivotGridObj!.dataSourceSettings = JSON.parse(result);
          }
        };
        reader.readAsText(file);
      }
      input.value = '';
    }
  }


