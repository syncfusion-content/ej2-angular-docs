

import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { Maps, ILoadEventArgs } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';
import { markerDataSource } from './markerdata';

@Component({
    selector: 'app-container',
    template:
    `<ejs-maps
      id="rn-container"
      style="display:block"
      [legendSettings]="legendSettings"
    >
      <e-layers>
        <e-layer [shapeData]= 'shapeData'
          [shapePropertyPath]="shapePropertyPath"
          [shapeDataPath]="shapeDataPath"
          [markerSettings]="markerSettings"
          [shapeSettings]="shapeSettings"
        ></e-layer>
      </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
  public shapeData?: object;
  public shapeDataPath?: string;
  public shapePropertyPath?: string;
  public shapeSettings?: object;
  public markerSettings?: object;
  public legendSettings?: object;
  ngOnInit(): void {
    this.shapeData = world_map;
    this.shapeDataPath = 'name';
    this.shapePropertyPath = 'name';
    this.legendSettings = {
      visible: true,
      type: 'Markers',
      useMarkerShape: true,
      toggleLegendSettings: {
        enable: true,
        applyShapeSettings: false,
        border: {
          color: 'green',
          width: 2,
        },
      },
    };
    this.shapeSettings = {
      fill: '#E5E5E5',
    };
    this.markerSettings = [
      {
        dataSource: markerDataSource,
        colorValuePath: 'color',
        shapeValuePath: 'shape',
        legendText: 'country',
        visible: true,
      },
    ];
  }
}


