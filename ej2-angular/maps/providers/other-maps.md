---
layout: post
title: Other maps in Angular Maps component | Syncfusion
description: Learn here all about Other maps in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Other maps 
documentation: ug
domainurl: ##DomainURL##
---

# Other maps in Angular Maps component

In addition to OpenStreetMap, Bing Maps, and Azure Maps, the Maps component supports integration with other third-party online map service providers. Custom map providers can be rendered by specifying their tile server URL in the [urlTemplate](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#urltemplate) property. The Maps component supports any tile-based map provider that uses standard URL template formats for tile requests.

## URL template format

The Maps component uses a standardized URL template format for requesting map tiles. Any map service provider using the following tile URL structure is compatible with the component:

<!-- markdownlint-disable MD034 -->

Sample Template: https://< domain_name >/maps/basic/{z}/{x}/{y}.png

* **{z}** - Represents the zoom level (automatically replaced by the control)
* **{x}** - Represents the tile X coordinate (automatically replaced by the control)
* **{y}** - Represents the tile Y coordinate (automatically replaced by the control)

The Maps component automatically substitutes these placeholders with the appropriate values based on the current map view, zoom level, and visible tile range. Authentication keys or API tokens required by the map provider can be appended to the URL as query parameters.

## Prerequisites

Before integrating a third-party map provider, the following prerequisites should be met:

* **Provider account** - An active account with the chosen map service provider
* **API key or token** - Valid authentication credentials for accessing the tile service
* **Service terms** - Understanding of the provider's usage terms, rate limits, and attribution requirements

## Adding TomTom Maps

The following example demonstrates how to integrate TomTom Maps. To obtain a TomTom API key, visit the [TomTom Developer Portal](https://developer.tomtom.com/map-display-api/documentation/product-information/introduction), create an account, and generate an API key. Replace `subscription_key` in the URL template with the actual API key.

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
           this.urlTemplate = "http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key";
    }
}

```

![TomTom Maps](../images/MapProviders/tomtom-maps.PNG)

## Enabling zooming and panning

Tile-based map layers support zooming and panning interactions for enhanced map exploration. Zooming provides a closer view of specific areas for detailed analysis, while panning allows navigation across different regions of the map. These features can be enabled using the [zoomSettings](https://ej2.syncfusion.com/angular/documentation/api/maps/zoomSettingsModel) property with toolbar controls for user interaction.

```typescript

import { Component, Inject, OnInit } from '@angular/core';
import { Maps, Zoom } from '@syncfusion/ej2-angular-maps';
Maps.Inject(Zoom);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' style="display:block" [zoomSettings]='zoomSettings'>
     <e-layers>
    <e-layer [urlTemplate]='urlTemplate'></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
    public urlTemplate: string;
    public zoomSettings: object;
    ngOnInit(): void {
           this.urlTemplate = "http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key";
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

![TomTom Maps with Zooming and Panning](../images/MapProviders/tomtom-maps-zooming.PNG)

## Adding markers and navigation line

Markers can be added to tile-based map layers to highlight specific locations by setting the latitude and longitude coordinates using [markerSettings](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#markersettings) property. Navigation lines can be drawn on top of the tile layer to visualize routes or connections between locations by configuring the [navigationLineSettings](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#navigationlinesettings) with corresponding latitude and longitude coordinates.

```typescript

import { Component, Inject, OnInit } from '@angular/core';
import { Maps, Zoom, Marker, NavigationLine } from '@syncfusion/ej2-angular-maps';
Maps.Inject(Zoom, Marker, NavigationLine);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' style="display:block" [zoomSettings]='zoomSettings' [centerPosition]='centerPosition'>
     <e-layers>
    <e-layer [markerSettings]='markerSettings' [navigationLineSettings]='navigationLineSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
    public urlTemplate: string;
    public zoomSettings: object;
    public markerSettings: object;
    public navigationLineSettings: object;
    ngOnInit(): void {
            this.urlTemplate = "http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key";
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

![TomTom Maps with Markers and Navigation Line](../images/MapProviders/tomtom-maps-marker-and-line.PNG)

## Adding sublayer

GeoJSON shapes can be rendered as a sublayer on top of the tile-based map layer to highlight specific regions such as continents, countries, or custom geographic areas. This is accomplished by adding an additional layer and setting the [type](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#type) property to **SubLayer**. The sublayer overlays the base map tiles while maintaining interactivity with the underlying map.

```typescript

import { Component, OnInit } from '@angular/core';
import { Maps } from '@syncfusion/ej2-angular-maps';
import { africa_continent } from 'africa-continent.ts';

@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' style="display:block">
     <e-layers>
    <e-layer [urlTemplate] = "urlTemplate"></e-layer>
    <e-layer [type] = 'type' [shapeData]='shapeData' [shapeSettings]='shapeSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
    public urlTemplate: string;
    public type: string;
    public shapeData: object;
    public shapeSettings: object;
    ngOnInit(): void {
           this.urlTemplate = "http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key";
           this.type = 'SubLayer';
           this.shapeData = africa_continent;
           this.shapeSettings = {
               fill: 'blue'
           };
    }
}

```

![TomTom Maps with Sublayer](../images/MapProviders/tomtom-map-sublayer.PNG)

## Enabling legend

A legend can be displayed with tile-based maps to provide visual context for markers, shapes, or data classifications. The legend is enabled by setting the [visible](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel#visible) property of [legendSettings](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel) to **true**. The legend can be configured to display marker shapes, custom icons, and interactive toggle functionality for controlling layer visibility.

```typescript

import { Component, Inject, OnInit } from '@angular/core';
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
    this.urlTemplate = 'http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key';
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

![TomTom Maps with Legend](../images/MapProviders/tomtom-map-legend.PNG)