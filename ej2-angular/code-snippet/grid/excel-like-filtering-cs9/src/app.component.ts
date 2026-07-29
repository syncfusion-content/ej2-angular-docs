import { ordersTrackData } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FilterService,
  GridModule,
  GridComponent,
} from '@syncfusion/ej2-angular-grids';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { CommonModule } from '@angular/common';

@Component({
  imports: [GridModule, DropDownListModule, CommonModule],
  providers: [FilterService],
  standalone: true,
  selector: 'app-root',
  template: `<div class="control-section">
                    <div style="margin-bottom:20px; display:flex; align-items:center; gap:8px;">
                        <label style="font-weight:500; margin:0; white-space:nowrap; line-height:32px;">Filter Type:</label>
                        <ejs-dropdownlist #filterTypeDropdown 
                            [dataSource]="filterTypeData"
                            [(value)]="selectedFilterType"
                            (change)="onFilterTypeChange($event)"
                            fields="{ text: 'text', value: 'value' }"
                            style="display:inline-block; vertical-align:middle;">
                        </ejs-dropdownlist>
                    </div>
                    <ejs-grid #grid [dataSource]='data' [allowFiltering]="true" [filterSettings]="filterOptions">
                        <e-columns>
                            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100 isPrimaryKey="true"></e-column>
                            <e-column field='CustomerName' headerText='Customer Name' width=120></e-column>
                            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=100></e-column>
                            <e-column field='Product' headerText='Product' width=80></e-column>
                            <e-column field='Status' headerText='Status' width=80></e-column>
                            <e-column field='Amount' headerText='Amount' textAlign='Right' width=80></e-column>
                        </e-columns>
                    </ejs-grid>
                </div>`,
})
export class AppComponent implements OnInit {
  @ViewChild('grid') gridInstance?: GridComponent;

  public data?: object[];
  public filterOptions: Object = { type: 'CheckBox', mode: 'Immediate' };
  public selectedFilterType: string = 'CheckBox';
  public filterTypeData: Array<{ text: string; value: string }> = [
    { text: 'CheckBox', value: 'CheckBox' },
    { text: 'Excel', value: 'Excel' },
  ];

  ngOnInit(): void {
    this.data = ordersTrackData;
  }

  onFilterTypeChange(args: any): void {
    if (this.gridInstance) {
      this.filterOptions = {
        type: args.value,
        mode: 'Immediate',
      };
      this.gridInstance.filterSettings = this.filterOptions;
    }
  }
}
