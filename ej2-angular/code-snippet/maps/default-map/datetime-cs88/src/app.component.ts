import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule } from '@syncfusion/ej2-angular-maps'
import { LegendService, MarkerService } from '@syncfusion/ej2-angular-maps'




import { Component, OnInit } from '@angular/core';
import { markerDataSource } from './markerdata';
@Component({
imports: [
         MapsModule
    ],

providers: [LegendService, MarkerService],
standalone: true,
    selector: 'app-container',
    template:
    `<ejs-maps
      id="rn-container"
      style="display:block"
      [legendSettings]="legendSettings"
    >
      <e-layers>
        <e-layer [urlTemplate]= 'urlTemplate'
          [shapePropertyPath]="shapePropertyPath"
          [shapeDataPath]="shapeDataPath"
          [markerSettings]="markerSettings"
          [shapeSettings]="shapeSettings"
        ></e-layer>
      </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
  public shapeDataPath?: string;
  public shapePropertyPath?: string;
  public shapeSettings?: object;
  public markerSettings?: object;
  public legendSettings?: object;
  public urlTemplate?: string;
  ngOnInit(): void {
    this.urlTemplate = 'https://tile.openstreetmap.org/level/tileX/tileY.png';
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



