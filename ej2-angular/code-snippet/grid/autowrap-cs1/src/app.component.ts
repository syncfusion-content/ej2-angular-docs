import { inventoryData } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangeEventArgs, DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { GridComponent, GridModule, PageService, TextWrapSettingsModel, WrapMode } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [ GridModule, DropDownListAllModule],
  providers: [PageService],
  standalone: true,
  selector: 'app-root',
  template: ` 
    <div style="display: flex">
    <label style="padding: 5px 5px 5px 0"> Change the wrapmode of auto wrap feature: </label> 
    <ejs-dropdownlist
    index="0"
    width="100"
    [dataSource]="ddlData"
    (change)="valueChange($event)">
  </ejs-dropdownlist>
  </div>
    <ejs-grid #grid style="padding: 5px 5px" [dataSource]='data' allowPaging='true' allowTextWrap='true' [textWrapSettings]='wrapSettings' height='237'>
        <e-columns>
            <e-column field='Inventor' headerText='Inventor Name' width='180' textAlign="Right"></e-column>
            <e-column field='NumberofPatentFamilies' headerText="Number of Patent Families" width='180' textAlign="Right"></e-column>
            <e-column field='Country' headerText='Country' width='140'></e-column>
            <e-column field='Active' width='120'></e-column>
            <e-column field='Mainfieldsofinvention' headerText='Main fields of invention' width='200'></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  public wrapSettings?: TextWrapSettingsModel;
  @ViewChild('grid')
  public grid?: GridComponent;
  public ddlData: object[] = [
    { text: 'Content', value: 'Content' },
    { text: 'Both', value: 'Both' },
  ];

  ngOnInit(): void {
    this.data = inventoryData;
    this.wrapSettings = { wrapMode: 'Content' };
  }

  valueChange(args: ChangeEventArgs): void {
    (this.grid as GridComponent).textWrapSettings.wrapMode = args.value as WrapMode;
  }
}
