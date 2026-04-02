---
layout: post
title: Getting started with Angular Maps component | Syncfusion
description:  Checkout and learn about Getting started with Angular Maps component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Maps component

This section explains the steps required to create a map and demonstrates the basic usage of the Maps component.

You can explore some useful features in the Maps component using the following video.

{% youtube "https://www.youtube.com/watch?v=kwE6ikF7QYQ" %}

## Dependencies

The following is a list of the dependencies required to use the Maps component.

```javascript
|-- @syncfusion/ej2-angular-maps
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-angular-maps
    |-- @syncfusion/ej2-maps
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-data
```

## Setup Angular Environment

Prerequisites: Node.js (LTS) and npm must be installed before creating an Angular project.

Use the [`Angular CLI`](https://github.com/angular/angular-cli) to create and manage Angular applications. Install the CLI with one of the following approaches depending on preference.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Create a new Angular application with the Angular CLI:

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Maps package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are published on npm under the `@syncfusion` scope. The Angular distribution is available in two package formats:

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two package structures for Angular components:

1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler (ngcc) package for legacy compilation and rendering

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (>=20.2.36) use the Ivy distribution to support the Angular Ivy rendering engine. These packages are compatible with Angular version 21 and other latest angular versions. Install the Ivy package with the following command:

Add [`@syncfusion/ej2-angular-maps`](https://www.npmjs.com/package/@syncfusion/ej2-angular-maps/v/32.1.19) package to the application.

```bash
npm install @syncfusion/ej2-angular-maps --save
```

### Angular compatibility compiled package (ngcc)

For Angular versions earlier than 12, use the legacy ngcc package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. Install the ngcc package with:

Add [`@syncfusion/ej2-angular-maps@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-maps/v/32.1.19-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-maps@ngcc --save
```

To reference the ngcc package in `package.json`, add the `-ngcc` suffix to the package version, for example:

```bash
@syncfusion/ej2-angular-maps:"32.1.19-ngcc"
```

> Note: If the `-ngcc` suffix is not specified, the Ivy package will be installed and a compatibility warning may appear when using older Angular versions.

## Add Maps component

Modify the template in `app.component.ts` file to render the Maps component
`[src/app/app.component.ts]`.

```javascript

import { MapsModule } from '@syncfusion/ej2-angular-maps'
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
imports: [
        MapsModule
    ],
    standalone: true,
    selector: 'app-container',
  // specifies the template string for the maps component
  template: `<ejs-maps id='maps-container'></ejs-maps>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  { }

```

Add the `world_map` GeoJSON data to the **app.component.ts** file.

Note: Refer to the world_map GeoJSON data at Syncfusion Downloads: https://www.syncfusion.com/downloads/support/directtrac/general/ze/world-map-2091224620. This data must be imported into `src/app/app.component.ts`.

```javascript
import { world_map } from './world-map';
```

Bind the **world_map** data to the **shapeData** property of the **layer** in the Maps component.

```typescript
@Component({
    // specifies the template string for the maps component
    template: `<ejs-maps id='maps-container'>
                <e-layers>
                    <e-layer [shapeData] = 'shapeData'></e-layer>
                </e-layers>
               </ejs-maps>`
})
export class AppComponent {
  public shapeData: object = world_map;
}
```

<!-- markdownlint-disable MD033 -->

Now use the <code>app-container</code> in the **index.html** instead of default one.

```html
<app-container></app-container>
```

```typescript
@Component({
    selector: 'app-container'
})
```

* Now run the application in the browser using the below command.

  ```
  npm start
  ```

The below example shows a basic map.

```typescript

import { MapsModule } from '@syncfusion/ej2-angular-maps'
import { Component } from '@angular/core';
import { world_map } from './world-map';

@Component({
imports: [
        MapsModule
    ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the maps component
    template: `<ejs-maps id='maps-container'>
                <e-layers>
                    <e-layer [shapeData] = 'shapeData'></e-layer>
                </e-layers>
               </ejs-maps>`
})
export class AppComponent {
  public shapeData: object = world_map;
}

```

## Module Injection

The Maps component is divided into feature-specific modules. To use a feature, inject its module with the `Maps.Inject()` method. The available modules and their purposes are:

* `AnnotationsService` - Inject this provider to use annotations feature.
* `BubbleService` - Inject this provider to use bubble feature.
* `DataLabelService` - Inject this provider to use data label feature.
* `HighlightService` - Inject this provider to use highlight feature.
* `LegendService` - Inject this provider to use legend feature.
* `MarkerService` - Inject this provider to use marker feature.
* `MapsTooltipService` - Inject this provider to use tooltip series.
* `NavigationLineService` - Inject this provider to use navigation lines feature.
* `SelectionService` - Inject this provider to use selection feature.
* `ZoomService` - Inject this provider to use zooming and panning feature.
* `PolygonService` - Inject this provider to use polygon feature.

This example uses the tooltip, data label, and legend features. Import the MapsTooltip, DataLabel, and Legend modules from `@syncfusion/ej2-angular-maps`.

 ```javascript
    import { Component } from '@angular/core';
    import { LegendService, DataLabelService, MapsTooltipService, MapsModule } from '@syncfusion/ej2-angular-maps';

    @NgModule({
        imports: [
            MapsModule,
        ],
        standalone: true,
        providers: [ LegendService, DataLabelService, MapsTooltipService ]
    })

```

## Render shapes from GeoJSON data

This section explains how to bind GeoJSON data to the map.

```javascript

let usMap: object =
{
    "type": "FeatureCollection",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "iso_3166_2": "MA", "name": "Massachusetts", "admin": "United States of America" }, "geometry":{
            "type": "MultiPolygon",
            "coordinates": [ [ [ [ -70.801756294617277, 41.248076234530558 ]] ] ] }
        }
    ]
    //..
};

```

Map elements are rendered within layers. Add a layer collection to the Maps using the [`layers`](https://ej2.syncfusion.com/angular/documentation/api/maps/layersettingsmodel) property, then bind the GeoJSON data to the [`shapeData`](https://ej2.syncfusion.com/angular/documentation/api/maps/layersettings#shapedata) property.

[`app.module.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs34/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs34/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs34" %}

<!-- markdownlint-disable MD022 -->
## Bind data source to map
<!-- markdownlint-disable MD009 -->
The following layer properties are used to bind a data source to the map.

* dataSource
* shapeDataPath
* shapePropertyPath

The [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#datasource) property takes collection value as input. For example, the list of objects can be provided as input. This data is further used in tooltip, data label, bubble, legend and in color mapping.

The [`shapeDataPath`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#shapedatapath) property refers to the field in the `dataSource` that identifies a shape. The [`shapePropertyPath`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#shapepropertypath) property refers to the field in `shapeData` that matches `shapeDataPath`. When these values match, the corresponding object from the `dataSource` is bound to the shape.

The JSON object "electionData" is used as data source below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs35/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs35/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs35" %}

## Apply Color Mapping

The Color Mapping feature supports customization of shape colors based on the underlying value of shape received from bounded data. Specify the field name from which the values have to be compared for the shapes in [`colorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel#colorvaluepath) property in [`shapeSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel).

Specify color and value in [`colorMapping`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel#colormapping) property. Here '#D84444' is specified for 'Trump' and '#316DB5' is specified for 'Clinton'.

[`app.module.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs36/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs36/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs36" %}

## Add Title for Maps

You can add a title using [`titleSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/titleSettingsModel) property to the map to provide quick information to the user about the shapes rendered in the map.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs37/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs37/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs37" %}

## Enable Legend

You can show legend for the maps by setting true to the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel#visible) property in [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel) object and by injecting the `LegendService` module using `@NgModule.providers` method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs38/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs38/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs38" %}

## Add Data Label

You can add data labels to show additional information of the shapes in map. This can be achieved by setting [`visible`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel#visible) property to true in the [`dataLabelSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel) object and by injecting `DataLabelService` module using `@NgModule.providers` method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs39/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs39/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs39" %}

## Enable Tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints.
You can enable tooltip by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/maps/tooltipSettingsModel#visible) property as true in [`tooltipSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/tooltipSettingsModel) object and by injecting `MapsTooltipService` module using `@NgModule.providers` method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs40/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs40/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs40" %}
