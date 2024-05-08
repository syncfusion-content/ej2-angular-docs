import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, GroupService } from '@syncfusion/ej2-angular-grids'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit,ViewChild } from '@angular/core';
import { data } from './datasource';
import { GroupSettingsModel,GridComponent } from '@syncfusion/ej2-angular-grids';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
imports: [
        
        GridModule,
        ButtonModule,
        DropDownListAllModule
    ],

providers: [GroupService],
standalone: true,
    selector: 'app-root',
    template: `
    <div style="display: flex">
      <label style="padding: 30px 20px 0 0"> Column name :</label>
      <ejs-dropdownlist
        #dropdown
        style="padding: 26px 0 0 0"
        index="0"
        width="120"
        [dataSource]="columns"
        [fields]="field"
      ></ejs-dropdownlist>
    </div>
    <button
      style="margin-top: 10px "
      ejs-button
      id="button"
      cssClass="e-outline"
      (click)="groupColumn()"
    >
      Group column
    </button>
    <button
      style="margin-top: 10px "
      ejs-button
      id="button"
      cssClass="e-outline"
      (click)="unGroupColumn()"
    >
      UnGroup column
    </button>
    <ejs-grid #grid style="padding: 10px 10px" [dataSource]='data' [allowGrouping]='true' [groupSettings]='groupOptions' height='315px'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public groupOptions?: GroupSettingsModel;
    @ViewChild('grid')
    public grid?: GridComponent;
    @ViewChild('dropdown') public dropDown?: DropDownListComponent;
    ngOnInit(): void {
        this.data = data;
        this.groupOptions = { showDropArea: false, columns: ['CustomerID', 'ShipCity'] };
    }

    public columns?: object[] = [
        { text: 'CustomerID', value: 'CustomerID' },
        { text: 'OrderID', value: 'OrderID' },
        { text: 'Ship City', value: 'ShipCity' },
        { text: 'Ship Name', value: 'ShipName' },
      ];
      public field?: object = { text: 'text', value: 'value' };
  
      groupColumn() {
        (this.grid as GridComponent).groupColumn((this.dropDown as DropDownListComponent).value as string);
      }
    
      unGroupColumn() {
        (this.grid as GridComponent).ungroupColumn((this.dropDown as DropDownListComponent).value as string);
      }
}