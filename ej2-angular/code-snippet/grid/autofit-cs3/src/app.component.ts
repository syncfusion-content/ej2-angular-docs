import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ResizeService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { inventoryData } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [ResizeService],
standalone: true,
selector: 'app-root',
template: `<ejs-grid #grid [dataSource]='data' height='315px' [allowResizing]='true' (dataBound)='dataBound()' >
  <e-columns>
  <e-column field='Inventor' headerText='Inventor' textAlign='Right' width=100 clipMode='EllipsisWithTooltip'></e-column>
  <e-column field='NumberofPatentFamilies' headerText='Number of Patent Families' width=120></e-column>
  <e-column field='Country' headerText='Country' width=80></e-column>
  <e-column field='Number of INPADOC patents' headerText='Number of INPADOC patents' width=150></e-column>
  <e-column field='Active' headerText='Active' width=100></e-column>
  <e-column field='Mainfieldsofinvention' headerText='Main fields of invention' width=100></e-column>
  </e-columns>
</ejs-grid>`
})
export class AppComponent implements OnInit {

public data?: object[];
@ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = inventoryData;
    }
    dataBound() {
        (this.grid as GridComponent).autoFitColumns(['Inventor', 'Number of INPADOC patents', 'Mainfieldsofinvention'], 1, 3);
    }
}