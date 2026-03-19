import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { EditEventArgs, EditService, FilterService, GridComponent, GridModule, PageService, SelectionService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

@Component({
  imports: [GridModule, DropDownListModule ],
  providers: [EditService, ToolbarService, PageService, FilterService, SelectionService],
  standalone: true,
  selector: 'app-root',
  template: `<div style="display: flex">
               <label style="padding: 5px 5px 0 0" > Select Row :</label>
               <ejs-dropdownlist id='value' #sample index='0' 
               width='220' [dataSource]='ddlData' (change)='valueChange($event)' >
               </ejs-dropdownlist>
              </div>
              <div style="padding: 5px 5px 0 0">
                  <ejs-grid #grid [dataSource]='data' 
                  (actionComplete)='actioncomplete($event)' allowPaging='true' 
                  height=250 [pageSettings]='initialPage'>
                      <e-columns>
                          <e-column field='OrderID' headerText='Order ID' width='120' 
                          textAlign='Right'></e-column>
                          <e-column field='CustomerID' headerText='Customer Name' width='150'>
                          </e-column>
                          <e-column field='OrderDate' headerText='Order Date' width='130' 
                          format="yMd" textAlign='Right'></e-column>
                          <e-column field='Freight' headerText='Freight' width='120' 
                          format='C2' textAlign='Right'></e-column>
                          <e-column field='ShipCountry' headerText='Ship Country' width='170'>
                          </e-column>
                      </e-columns>
                  </ejs-grid>
              </div>`
})

export class AppComponent implements OnInit {

  public data?: Object[];
  public initialPage?: Object;
  public mod: any;
  public value: any;
  @ViewChild('grid')
  public grid?: GridComponent;
  public ddlData?: Object[] = [
    { text: 'Select row index' },
    { text: '1', value: '1' },
    { text: '2', value: '2' },
    { text: '30', value: '30' },
    { text: '80', value: '80' },
    { text: '110', value: '110' },
    { text: '120', value: '120' },
    { text: '210', value: '210' },
    { text: '310', value: '310' },
    { text: '410', value: '410' },
    { text: '230', value: '230' }
  ];

  ngOnInit(): void {
    this.data = data;
    this.initialPage = { pageSize: 10 }
  }
  actioncomplete(args: EditEventArgs): void {
    if (args.requestType === "paging") {
      (this as any).grid.selectRow(this.mod);
    }
  }
  valueChange(args: ChangeEventArgs): void {
    this.value = +args.value;
    this.mod = (this.value - 1) % 10;
    const page = Math.ceil(this.value / 10);

    if (page === 1) {
      if ((this.grid as GridComponent).pagerModule.pagerObj.currentPage != 1) {
        (this.grid as GridComponent).pagerModule.goToPage(1);
      }
      (this.grid as GridComponent).selectRow(this.mod);
    }
    else {
      (this.grid as GridComponent).pagerModule.goToPage(page);
      if ((this.grid as GridComponent).pagerModule.pagerObj.currentPage == page) {
        (this.grid as GridComponent).selectRow(this.mod);
      }
    }
  }
}