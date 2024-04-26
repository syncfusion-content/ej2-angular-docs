import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, FreezeService, SelectionService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, ToolbarService, PdfExportService,
 PageService, FilterService } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import {DataManager} from '@syncfusion/ej2-data';

@Component({
imports: [
        
        GridModule
    ],

providers: [FreezeService, SelectionService],
standalone: true,
  selector: 'app-root',
  template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions'
   [allowFiltering]='true' [allowPaging]='true' [pageSettings]='initialPage' [allowPdfExport]='true'
   (toolbarClick)='toolbarClick($event)'>
              <e-columns>
                  <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                  <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                  <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
              </e-columns>
              </ejs-grid>`,
  providers: [ToolbarService, PdfExportService, PageService, FilterService]
})
export class AppComponent implements OnInit {

  public data?: object[];
  public toolbarOptions?: ToolbarItems[];
  public initialPage?: object;
  @ViewChild('grid')
  public grid?: GridComponent;
  ngOnInit(): void {
    this.data = data;
    this.toolbarOptions = ['PdfExport'];
    this.initialPage = { pageCount: 5, pageSize: 5 };
  }

  toolbarClick(args: ClickEventArgs) {
    if ((args as any).item.id === 'Grid_pdfexport') {
      let pdfdata;
      const query = (this.grid as any).renderModule.data.generateQuery(); // get grid corresponding query
      for (let i = 0; i < query.queries.length; i++) {
        if (query.queries[i].fn === 'onPage') {
          query.queries.splice(i, 1);       // remove page query to get all records
          break;
        }
      }
      const fdata = new DataManager({ json: data }).executeQuery(query).then((e: any) => {
        pdfdata = e.result as object[];  // get all filtered records
        const exportProperties = {
          dataSource: pdfdata,
        };
        (this.grid as any).pdfExport(exportProperties);
      }).catch((e: true) => true);
    }
  }
}



