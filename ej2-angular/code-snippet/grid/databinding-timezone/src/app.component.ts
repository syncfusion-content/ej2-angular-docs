import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckBoxComponent, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListComponent, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { GridComponent, GridModule } from '@syncfusion/ej2-angular-grids';
import { DataManager, DataUtil, WebApiAdaptor } from '@syncfusion/ej2-data';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

let hostUrl: string = 'https://services.syncfusion.com/js/production/api/orders';

@Component({
    imports: [GridModule, DropDownListModule, CheckBoxModule],
    standalone: true,
    selector: 'app-root',
    template: `
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
            <label style="margin-right: 10px">Select Timezone:</label>
            <ejs-dropdownlist #timezoneDropdown id="timezone" width="150" [dataSource]="timeZones" index="0" (change)="onTimezoneChange($event)"></ejs-dropdownlist>
        </div>
        <div style="margin-bottom: 20px;">
            <ejs-checkbox #timezoneCheckbox label="Prevent Timezone Conversion"  (change)="onCheckboxChange($event)"></ejs-checkbox>
        </div>
        <ejs-grid #grid [dataSource]='data' height='250px' (load)="onLoad()">
          <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
              <e-column field='CustomerID' headerText='Customer ID' width=140></e-column>
              <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=120></e-column>
              <e-column field='OrderDate' headerText='Order Date' textAlign='Right' width=140></e-column>
          </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {
  @ViewChild('grid') grid!: GridComponent;
  @ViewChild('timezoneDropdown') timezoneDropdown!: DropDownListComponent;
  @ViewChild('timezoneCheckbox') timezoneCheckbox!: CheckBoxComponent;
  public data!: DataManager;
  public selectedTimezone: number  = -12;
  public timeZones: { value: number; text: string; }[] = [
    { value: -12, text: "-12:00 UTC" },
    { value: -11, text: "-11:00 UTC" },
    { value: -10, text: "-10:00 UTC" },
    { value: -9, text: "-09:00 UTC" },
    { value: -8, text: "-08:00 UTC" },
    { value: -7, text: "-07:00 UTC" },
    { value: -6, text: "-06:00 UTC" },
    { value: -5, text: "-05:00 UTC" },
    { value: -4, text: "-04:00 UTC" },
    { value: -3, text: "-03:00 UTC" },
    { value: -2, text: "-02:00 UTC" },
    { value: -1, text: "-01:00 UTC" },
    { value: 0, text: "+00:00 UTC" },
    { value: 1, text: "+01:00 UTC" },
    { value: 2, text: "+02:00 UTC" },
    { value: 3, text: "+03:00 UTC" },
    { value: 4, text: "+04:00 UTC" },
    { value: 5, text: "+05:00 UTC" },
    { value: 5.5, text: "+05:30 UTC" },
    { value: 6, text: "+06:00 UTC" },
    { value: 7, text: "+07:00 UTC" },
    { value: 8, text: "+08:00 UTC" },
    { value: 9, text: "+09:00 UTC" },
    { value: 10, text: "+10:00 UTC" },
    { value: 11, text: "+11:00 UTC" },
    { value: 12, text: "+12:00 UTC" },
    { value: 13, text: "+13:00 UTC" },
    { value: 14, text: "+14:00 UTC" },
  ];

  public ngOnInit(): void {
    this.data = new DataManager({
      url: hostUrl,
      adaptor: new WebApiAdaptor(),
      crossDomain: true,
    });
  }

  public onLoad(): void {
    DataUtil.serverTimezoneOffset = this.timezoneCheckbox.checked ? 0 : this.selectedTimezone; 
  }

  public onTimezoneChange(event: ChangeEventArgs): void {
    this.selectedTimezone = Number(event.itemData.value);
    this.grid.freezeRefresh();
  }

  public onCheckboxChange(event:ChangeEventArgs): void {
    this.grid.freezeRefresh();
  }
}