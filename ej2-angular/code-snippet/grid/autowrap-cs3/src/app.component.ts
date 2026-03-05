import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { GridModule ,GridComponent,PageService, TextWrapSettingsModel, WrapMode } from '@syncfusion/ej2-angular-grids';
import { Component, ViewChild } from '@angular/core';
import { inventoryData } from './datasource';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

@Component({
  imports: [ GridModule, ButtonModule, DropDownListAllModule],
  providers: [PageService],
  standalone: true,
  selector: 'app-root',
  template: `<div style="display: flex">
              <label style="padding: 5px 5px 0 0" >Autowrap for header column :</label>
              <ejs-dropdownlist index="0" width="100" 
              [dataSource]=" dropdownData" (change)="valueChange($event)">
              </ejs-dropdownlist>
            </div>
            <div style="padding-top:5px">
              <ejs-grid #grid [dataSource]='data' allowPaging='true' allowTextWrap='true' 
              [textWrapSettings]='wrapSettings' height='250'>
                <e-columns>
                  <e-column field='Inventor' headerText='Inventor Name' width='180' 
                  textAlign="Right">
                  </e-column>
                  <e-column field='NumberofPatentFamilies' 
                  headerText="Number of Patent Families" 
                  width='180' textAlign="Right">
                  </e-column>
                  <e-column field='Country' headerText='Country' width='140'></e-column>
                  <e-column field='Active' width='120'></e-column>
                  <e-column field='Mainfieldsofinvention' 
                  headerText='Main Fields Of Invention' 
                  width='200'>
                  </e-column>
                </e-columns>
              </ejs-grid>
            </div>`
})
export class AppComponent {

  public data?: Object[] = inventoryData;
  @ViewChild('grid')
  public grid?: GridComponent;
  public wrapSettings: TextWrapSettingsModel = { wrapMode: 'Header' };
  public dropdownData: Object[] = [
    { text: 'Header', value: 'Header' },
    { text: 'Both', value: 'Both' },
  ];

  valueChange(args: ChangeEventArgs): void {
    (this.grid as GridComponent).textWrapSettings.wrapMode = (args.value as WrapMode);
  }

}