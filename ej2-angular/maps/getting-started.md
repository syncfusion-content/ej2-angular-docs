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

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

You can explore some useful features in the Maps component using the following video.

{% youtube "https://www.youtube.com/watch?v=kwE6ikF7QYQ" %}

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement).

## Dependencies

The following is a list of the dependencies required to use the Maps component.

```
|-- @syncfusion/ej2-angular-maps
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-angular-maps
    |-- @syncfusion/ej2-maps
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-data
```

## Setup the Angular application

A straightforward approach to begin with Angular is to create a new application using the [Angular CLI](https://github.com/angular/angular-cli). Install Angular CLI globally with the following command:

```bash
npm install -g @angular/cli
```

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

### Installing a specific version

To install a particular version of Angular CLI, use:

```bash
npm install -g @angular/cli@21.0.0
```

## Create a new application

With Angular CLI installed, execute this command to generate a new application:

```bash
ng new syncfusion-angular-app
```

* This command will prompt you to configure settings like enabling Angular routing and choosing a stylesheet format.

```bash

? Which stylesheet format would you like to use? (Use arrow keys)
> CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less            [ http://lesscss.org                                             ]

```

* By default, a CSS-based application is created. Use SCSS if required:

```bash
ng new syncfusion-angular-app --style=scss
```

* During project setup, when prompted for the Server-side rendering (SSR) option, choose the appropriate configuration.

![Initial_setup](./images/SSR.png)

* Select the required AI tool or 'none' if you do not need any AI tool.

![Initial_setup](./images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> Note: In Angular 19 and below, the CLI generates files like `app.component.ts`, `app.component.html`, `app.component.css`, etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular Maps component](https://www.syncfusion.com/angular-components/angular-maps-library) for demonstration. Add the Angular Maps component with:

Add [`@syncfusion/ej2-angular-maps`](https://www.npmjs.com/package/@syncfusion/ej2-angular-maps/v/32.1.19) package to the application.

```bash
npm add @syncfusion/ej2-angular-maps --save
```
The above command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-maps` package and peer dependencies to your `package.json`.
- Import the Maps component in your application.

For more details on version compatibility, refer to the [Version Compatibility](https://ej2.syncfusion.com/angular/documentation/upgrade/version-compatibility) section.

Syncfusion<sup style="font-size:70%">&reg;</sup> offers two package structures for Angular components:		
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)		
2. Angular compatibility compiler (ngcc), which is Angular's legacy compilation pipeline.		
Syncfusion<sup style="font-size:70%">&reg;</sup>'s latest Angular packages are provided as Ivy-compatible and suited for Angular 12 and above. To install the package, execute:		
```bash		
ng add @syncfusion/ej2-angular-maps		
```		
For applications not compiled with Ivy, use the `ngcc` tagged packages:		
> The ngcc packages are still compatible with Angular CLI versions 15 and below. However, they may generate warnings suggesting the use of Ivy compiled packages. Starting from Angular 16, support for the ngcc package has been completely removed. If you have further questions regarding ngcc compatibility, please refer to the following [FAQ](https://ej2.syncfusion.com/angular/documentation/common/troubleshooting/ngcc-compatibility).	

```bash		
npm add @syncfusion/ej2-angular-maps@32.1.19-ngcc		
```

## Add Maps component

Modify the template in the `app.component.ts` file to render the Maps component
`[src/app/app.component.ts]`.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { MapsModule } from '@syncfusion/ej2-angular-maps';

@Component({
    selector: 'app-container',
    standalone: true,
    imports: [MapsModule],
    // specifies the template string for the maps component
    template: `<ejs-maps id='maps-container'></ejs-maps>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }
```

Add the `world_map` GeoJSON data to the **app.component.ts** file.

Note: Refer to the world_map GeoJSON data at Syncfusion Downloads: https://www.syncfusion.com/downloads/support/directtrac/general/ze/world-map-2091224620. This data must be imported into `src/app/app.component.ts`.

```typescript
import { world_map } from './world-map';
```

Bind the **world_map** data to the **shapeData** property of the **layer** in the Maps component.

```typescript
@Component({
    selector: 'app-container',
    standalone: true,
    imports: [MapsModule],
    // specifies the template string for the maps component
    template: `<ejs-maps id='maps-container'>
                <e-layers>
                    <e-layer [shapeData]='shapeData'></e-layer>
                </e-layers>
               </ejs-maps>`
})
export class AppComponent {
    public shapeData: object = world_map;
}
```

<!-- markdownlint-disable MD033 -->

Now use the <code>app-container</code> in the **index.html** instead of the default one.

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

The example below shows a basic map.

```typescript
import { Component } from '@angular/core';
import { MapsModule } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [MapsModule],
    // specifies the template string for the maps component
    template: `<ejs-maps id='maps-container'>
                <e-layers>
                    <e-layer [shapeData]='shapeData'></e-layer>
                </e-layers>
               </ejs-maps>`
})
export class AppComponent {
    public shapeData: object = world_map;
}
```

## Module injection

The Maps component is divided into feature-specific modules. To use a feature, inject the corresponding service into the component's `providers` array. The available service modules and their purposes are:

* `AnnotationsService` - Inject this provider to use the annotations feature.
* `BubbleService` - Inject this provider to use the bubble feature.
* `DataLabelService` - Inject this provider to use the data label feature.
* `HighlightService` - Inject this provider to use the highlight feature.
* `LegendService` - Inject this provider to use the legend feature.
* `MarkerService` - Inject this provider to use the marker feature.
* `MapsTooltipService` - Inject this provider to use the tooltip feature.
* `NavigationLineService` - Inject this provider to use the navigation lines feature.
* `SelectionService` - Inject this provider to use the selection feature.
* `ZoomService` - Inject this provider to use the zooming and panning feature.
* `PolygonService` - Inject this provider to use the polygon feature.

This example uses the tooltip, data label, and legend features. Import the MapsTooltip, DataLabel, and Legend modules from `@syncfusion/ej2-angular-maps`.

In standalone components, inject the required services using the `providers` array in the `@Component` decorator:

 ```typescript
    import { Component } from '@angular/core';
    import { LegendService, DataLabelService, MapsTooltipService, MapsModule } from '@syncfusion/ej2-angular-maps';

    @Component({
        selector: 'app-container',
        standalone: true,
        imports: [MapsModule],
        providers: [LegendService, DataLabelService, MapsTooltipService],
        template: `<ejs-maps>
            <e-layers>
                <e-layer [shapeData]='shapeData'></e-layer>
            </e-layers>
        </ejs-maps>`
    })
    export class AppComponent {
        public shapeData = world_map;
    }
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
## Bind data source to the map
<!-- markdownlint-disable MD009 -->
The following layer properties are used to bind a data source to the map.

* dataSource
* shapeDataPath
* shapePropertyPath

The [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#datasource) property takes a collection value as input. For example, a list of objects can be provided as input. This data is further used in tooltip, data label, bubble, legend, and color mapping.

The [`shapeDataPath`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#shapedatapath) property refers to the field in the `dataSource` that identifies a shape. The [`shapePropertyPath`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#shapepropertypath) property refers to the field in `shapeData` that matches `shapeDataPath`. When these values match, the corresponding object from the `dataSource` is bound to the shape.

The JSON object containing country membership data is used as a data source below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs35/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs35/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs35" %}

## Apply color mapping

The color mapping feature supports customization of shape colors based on the underlying value of shapes received from bound data. Specify the field name from which the values have to be compared for the shapes in [`colorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel#colorvaluepath) property in [`shapeSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel).

Specify the color and value in the [`colorMapping`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel#colormapping) property. Here '#D84444' is specified for 'Permanent' and '#316DB5' is specified for 'Non-Permanent'.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs36/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs36/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs36" %}

## Add title for Maps

You can add a title using the [`titleSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/titleSettingsModel) property to the map to provide quick information to the user about the shapes rendered in the map.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs37/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs37/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs37" %}

## Enable legend

You can show the legend for the map by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel#visible) property to true in the [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel) object and by injecting the `LegendService` in the component's `providers` array.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs38/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs38/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs38" %}

## Add data label

You can add data labels to show additional information of the shapes in the map. This can be achieved by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel#visible) property to true in the [`dataLabelSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel) object and by injecting the `DataLabelService` in the component's `providers` array.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs39/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs39/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs39" %}

## Enable tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints. You can enable the tooltip by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/maps/tooltipSettingsModel#visible) property to true in the [`tooltipSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/tooltipSettingsModel) object and by injecting the `MapsTooltipService` in the component's `providers` array.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs40/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs40/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs40" %}
