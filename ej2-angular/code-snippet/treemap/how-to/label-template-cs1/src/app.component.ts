

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TreeMap, IDrillStartEventArgs } from '@syncfusion/ej2-angular-treemap';
import { CarSales } from './datasource';

@Component({
  selector: 'app-container',
  template:'<ejs-treemap id="container" #treemap style="display:block;" [dataSource]="dataSource" [weightValuePath]="weightValuePath"[leafItemSettings]="leafItemSettings" enableDrillDown="true" (drillStart)="drillStart($event)"[palette]="palette"><e-levels><e-level groupPath="Continent" [border]="border"> </e-level>	<e-level groupPath="Company" [border]="border"></e-level></e-levels></ejs-treemap>',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  public drillStart = (args: IDrillStartEventArgs) => {
    let labelElementGroup: HTMLElement = document.getElementById('container_Label_Template_Group') as HTMLElement;
    labelElementGroup.remove();
  }
  public weightValuePath: string = "Sales";
  public palette: string[] = ['white'];
  public dataSource: object[] = CarSales;
  public leafItemSettings: object = {
    showLabels: false,
    labelTemplate: '#template',
    templatePosition: 'Center'
  };
  public border: Object = { width: 0.5, color: 'black' }
};


