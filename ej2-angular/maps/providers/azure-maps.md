---
layout: post
title: Azure maps in Angular Maps component | Syncfusion
description: Learn here all about Azure maps in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Azure maps 
documentation: ug
domainurl: ##DomainURL##
---

# Azure maps integration in Angular Maps component

Azure Maps is an online map service provider from Microsoft. Similar to OSM and Bing Maps, it provides map tile images based on requests and combines them to display the map area. Azure Maps offers various map styles including satellite imagery, road maps, and terrain views with global coverage.

## Prerequisites

Before using Azure Maps with the Maps component, the following prerequisites must be met:

* **Azure account** - An active Microsoft Azure account is required
* **Azure Maps subscription** - Create an Azure Maps account in the Azure portal
* **Subscription key** - Generate a subscription key (primary or secondary) for authentication

To obtain an Azure Maps subscription key, follow the steps outlined in the [Azure Maps authentication documentation](https://docs.microsoft.com/en-us/azure/azure-maps/how-to-manage-authentication). The subscription key must be included in all API requests to authenticate and access Azure Maps services.

>Refer to [Azure Maps Licensing](https://azure.microsoft.com/en-in/support/legal/) for terms of use and pricing information.

## Adding Azure Maps

Azure Maps can be rendered using the [urlTemplate](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#urltemplate) property with the tile server URL provided by Azure Maps. The URL template must include the subscription key for authentication. Replace `Your-Key` in the URL template below with the actual subscription key obtained from the Azure portal.

The URL template contains several parameters that are automatically replaced by the Maps component:

* **subscription-key** - The Azure Maps authentication key (replace with actual key)
* **api-version** - The Azure Maps API version (e.g., 1.0, 2.0)
* **style** - The map style type (satellite, road, night, etc.)
* **zoom** - The zoom level (automatically populated as `level`)
* **x** - The tile X coordinate (automatically populated as `tileX`)
* **y** - The tile Y coordinate (automatically populated as `tileY`)

```typescript

import { Component, OnInit } from '@angular/core';
import { Maps } from '@syncfusion/ej2-angular-maps';

@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' style="display:block">
     <e-layers>
    <e-layer [urlTemplate]= 'urlTemplate'></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
    public urlTemplate: string;
    ngOnInit(): void {
        this.urlTemplate = 'https://atlas.microsoft.com/map/imagery/png?subscription-key=Your-Key &api-version=1.0&style=satellite&zoom=level&x=tileX&y=tileY';
    }
}

```

## Enabling zooming and panning

The Azure Maps layer supports zooming and panning interactions for enhanced map exploration. Zooming provides a closer view of specific areas for detailed analysis, while panning allows navigation across different regions of the map. These features can be enabled using the [zoomSettings](https://ej2.syncfusion.com/angular/documentation/api/maps/zoomSettingsModel) property with toolbar controls for user interaction.

```typescript

import { Component, OnInit, Inject } from '@angular/core';
import { Maps, Zoom } from '@syncfusion/ej2-angular-maps';

Maps.Inject(Zoom);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' style='display:block' [zoomSettings]='zoomSettings'>
     <e-layers>
    <e-layer [urlTemplate]= 'urlTemplate'></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
    public zoomSettings: object;
    public urlTemplate: string;
    ngOnInit(): void {
           this.urlTemplate = 'https://atlas.microsoft.com/map/imagery/png?subscription-key=Your-Key &api-version=1.0&style=satellite&zoom=level&x=tileX&y=tileY';
           this.zoomSettings = {
               enable: true,
               toolbarSettings: {
                  buttonSettings: {
                      toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'],
                  }
               }
           }
    }
}

```

## Adding markers and navigation line

Markers can be added to Azure Maps layers to highlight specific locations by setting the latitude and longitude coordinates using [markerSettings](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#markersettings) tag. Navigation lines can be added on top of the Azure Maps layer for highlighting a path among various places by setting the corresponding location's coordinates of latitude and longitude in the  [navigationLineSettings](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#navigationlinesettings) with corresponding latitude and longitude coordinates.

```typescript

import { Component, Inject, OnInit } from '@angular/core';
import { Maps, Zoom, Marker, NavigationLine } from '@syncfusion/ej2-angular-maps';
Maps.Inject(Zoom, Marker, NavigationLine);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' style='display:block' [zoomSettings]='zoomSettings' [centerPosition]='centerPosition'>
     <e-layers>
    <e-layer [urlTemplate]= 'urlTemplate' [markerSettings]='markerSettings' [navigationLineSettings]='navigationLineSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
    public zoomSettings: object;
    public centerPosition: object;
    public markerSettings: object;
    public navigationLineSettings: object;
    public urlTemplate: string;
    ngOnInit(): void {
           this.urlTemplate = 'https://atlas.microsoft.com/map/imagery/png?subscription-key=Your-Key &api-version=1.0&style=satellite&zoom=level&x=tileX&y=tileY';
           this.zoomSettings = {
               zoomFactor: 4
           };
           this.centerPosition = {
               latitude: 29.394708,
                longitude: -94.954653
           };
            this.markerSettings = [{
                visible: true,
                height: 25,
                width: 15,
                dataSource: [
                    {
                        latitude: 34.060620,
                        longitude: -118.330491,
                        name: "California"
                    },
                    {
                        latitude: 40.724546,
                        longitude: -73.850344,
                        name: "New York"
                    }
                ]
            }];
            this.navigationLineSettings = [{
                visible: true,
                color: "blue",
                width: 5,
                angle: 0.1,
                latitude: [34.060620, 40.724546],
                longitude: [-118.330491,-73.850344]
            }];
    }
}

```

## Adding sublayer

GeoJSON shapes can be rendered as a sublayer on top of the Azure Maps base layer to highlight specific regions such as continents, countries, or custom geographic areas. This is accomplished by adding an additional layer and setting the [type](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#type) property to **SubLayer**. The sublayer overlays the Azure Maps tiles while maintaining interactivity with the base map.

```typescript
import { Component, OnInit } from '@angular/core';
import { Maps } from '@syncfusion/ej2-angular-maps';
import { africa_continent } from 'africa-continent.ts';

@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' style='display:block'>
     <e-layers>
    <e-layer [urlTemplate]= 'urlTemplate'></e-layer>
    <e-layer [type] = 'type' [shapeData]='shapeData' [shapeSettings]='shapeSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
    public type: string;
    public shapeData: object;
    public shapeSettings: object;
    public urlTemplate: string;
    ngOnInit(): void {
           this.urlTemplate = 'https://atlas.microsoft.com/map/imagery/png?subscription-key=Your-Key &api-version=1.0&style=satellite&zoom=level&x=tileX&y=tileY';
           this.type = 'SubLayer';
           this.shapeData = africa_continent;
           this.shapeSettings = {
               fill: 'blue'
           };
    }
}
```

## Enabling legend

A legend can be displayed with Azure Maps to provide visual context for markers, shapes, or data classifications. The legend is enabled by setting the [visible](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel#visible) property of [legendSettings](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel) to **true**. The legend can be configured to display marker shapes, custom icons, and interactive toggle functionality for controlling layer visibility.

```typescript
import { Component, OnInit} from '@angular/core';
import { Maps } from '@syncfusion/ej2-angular-maps';
import { markerDataSource } from 'markerdata.ts';
@Component({
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
  public shapeDataPath: string;
  public shapePropertyPath: string;
  public shapeSettings: object;
  public markerSettings: object;
  public legendSettings: object;
  public urlTemplate: string;
  ngOnInit(): void {
    this.urlTemplate = 'https://atlas.microsoft.com/map/imagery/png?subscription-key=Your-Key &api-version=1.0&style=satellite&zoom=level&x=tileX&y=tileY';
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
```