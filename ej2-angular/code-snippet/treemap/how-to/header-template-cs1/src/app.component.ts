


import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TreeMap, IDrillEndEventArgs, ILoadEventArgs } from '@syncfusion/ej2-angular-treemap';
import { DrillDown } from './datasource';

@Component({
  selector: 'app-container',
  template: '<ejs-treemap id="container" #treemap style="display:block;" [dataSource]="dataSource" [weightValuePath]="weightValuePath"[leafItemSettings]="leafItemSettings" [palette]="palette" format="n" useGroupingSeparator="true" enableDrillDown="true"(loaded)="loaded($event)" (drillEnd)="drillEnd($event)"><e-levels><e-level groupPath="Continent" fill="#336699" [border]="border"> </e-level><e-level groupPath="States" fill="#336699" [border]="border"> </e-level><e-level groupPath="Region" showHeader="false" fill="#336699" [border]="border"></e-level></e-levels></ejs-treemap>',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  public loaded = (args: ILoadEventArgs) => {
    let header: Element = document.getElementById('header') as Element;
    let population: number = 0;
    for (let i: number = 0; i < args.treemap!.layout.renderItems[0]['parent'].Continent.length; i++) {
      population += +(args.treemap!.layout.renderItems[0]['parent'].Continent[i]['data'].Population);
    }
    header.innerHTML = 'Continent - Population : ' + population
  }
  public drillEnd = (args: IDrillEndEventArgs) => {
    let header: Element = document.getElementById('header') as Element;
    let layout: Element = document.getElementById("container_TreeMap_Squarified_Layout") as Element;
    let population: number = 0;
    if (args.treemap!.layout.renderItems[0]['isDrilled']) {
      for (let i: number = 0; i < args.treemap!.layout.renderItems.length; i++) {
        population += +(args.treemap!.layout.renderItems[i]['data'].Population);
      }
      header.innerHTML = layout.children[0].children[1].innerHTML.split(']')[1] + ' - ' + population;
    }
    else if (args.treemap!.layout.renderItems[0]['parent'].Continent) {
      for (let i: number = 0; i < args.treemap!.layout.renderItems[0]['parent'].Continent.length; i++) {
        population += +(args.treemap!.layout.renderItems[0]['parent'].Continent[i]['data'].Population);
      }
      header.innerHTML = 'Continent - Population : ' + population;
    } else {
      population = args.treemap!.layout.renderItems[0]['data'].Population;
      header.innerHTML = layout.children[0].children[1].innerHTML.split(']')[1] + ' - Population : ' + population;
    }
  }
  public palette: string[] = ['#9999ff', '#CCFF99', '#FFFF99', '#FF9999', '#FF99FF', '#FFCC66'];
  public dataSource: object[] = DrillDown;
  public weightValuePath: string = 'Population';
  public leafItemSettings: object = {
    labelPath: 'Name',
    showLabels: false,
    labelStyle: { size: '0px' },
    border: { color: 'black', width: 0.5 }
  };
  border: object = {
    color: 'black',
    width: 0.5
  };
};


