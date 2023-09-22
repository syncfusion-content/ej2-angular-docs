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

This section explains you the steps required to create a map and demonstrate the basic usage of the maps component.

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

You can use [`Angular CLI`](https://github.com/angular/angular-cli) to setup your Angular applications.
To install Angular CLI use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion Maps package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,

1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-maps`](https://www.npmjs.com/package/@syncfusion/ej2-angular-maps/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-maps --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-maps@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-maps/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-maps@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-maps:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Registering Maps Module

Import Maps module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-maps` [src/app/app.module.ts].

```typescript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the MapsModule for the Maps component
import { MapsModule } from '@syncfusion/ej2-angular-maps';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of Maps module into NgModule
  imports:      [ BrowserModule, MapsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

Modify the template in `app.component.ts` file to render the Maps component
`[src/app/app.component.ts]`.

```javascript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-container',
  // specifies the template string for the maps component
  template: `<ejs-maps id='maps-container'></ejs-maps>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  { }
```

Add the **world-map** data in the **app.component.ts** file.

>Note: Refer the data for [world-map](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world-map-2091224620) here. These data must be imported in the **src/app/app.component.ts** file.

```javascript
import { world_map } from './world-map';
```

Bind the **world-map** data to the **shapeData** property of the **layer** in the Maps control.

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
import { Component } from '@angular/core';
import { world_map } from './world-map';

@Component({
    selector: 'app-container',
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

Maps component are segregated into individual feature-wise modules. In order to use a particular feature,
you need to inject its feature module using `Maps.Inject()` method.  Find the modules available in maps and its description as follows.

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

For this application we are going to use tooltip, data label and legend features of the maps.
Now import the MapsTooltip, DataLabel and Legend modules from maps package
`@syncfusion/ej2-angular-maps`

 ```javascript
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppComponent } from './app.component';
    import { MapsComponent,LegendService, DataLabelService,MapsTooltipService} from '@syncfusion/ej2-angular-maps';

    @NgModule({
        imports: [
            BrowserModule,
        ],
        declarations: [AppComponent, MapsComponent],
        bootstrap: [AppComponent],
        providers: [ MapsComponent,LegendService, DataLabelService,MapsTooltipService ]
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

Elements in the maps will get rendered in the layers. So add a layer collection to the maps by using [`layers`]property. Now bind the GeoJSON data to the [`shapeData`] property.

[`app.module.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs34/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs34/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs34/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs34" %}

<!-- markdownlint-disable MD022 -->
## Bind data source to map
<!-- markdownlint-disable MD009 -->
The following properties in layers are used for binding data source to map.

* dataSource
* shapeDataPath
* shapePropertyPath

The [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel/#datasource) property takes collection value as input. For example, the list of objects can be provided as input. This data is further used in tooltip, data label, bubble, legend and in color mapping.

The [`shapeDataPath`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel/#shapedatapath) property used to refer the data ID in dataSource. Where as, the [`shapePropertyPath`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel/#shapepropertypath) property is used to refer the column name in shapeData to identify the shape. Both the properties are related to each other. When the values of the shapeDataPath property in the dataSource property and the value of shapePropertyPath in the shapeData property match, then the associated object from the dataSource is bound to the corresponding shape.

The JSON object "electionData" is used as data source below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs35/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs35/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs35/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs35" %}

## Apply Color Mapping

The Color Mapping feature supports customization of shape colors based on the underlying value of shape received from bounded data. Specify the field name from which the values have to be compared for the shapes in [`colorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel/#colorvaluepath) property in [`shapeSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel/).

Specify color and value in [`colorMapping`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel/#colormapping) property. Here '#D84444' is specified for 'Trump' and '#316DB5' is specified for 'Clinton'.

[`app.module.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs36/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs36/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs36/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs36" %}

## Add Title for Maps

You can add a title using [`titleSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/titleSettingsModel/) property to the map to provide quick information to the user about the shapes rendered in the map.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs37/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs37/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs37/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs37" %}

## Enable Legend

You can show legend for the maps by setting true to the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#visible) property in [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/) object and by injecting the `LegendService` module using `@NgModule.providers` method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs38/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs38/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs38/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs38" %}

## Add Data Label

You can add data labels to show additional information of the shapes in map. This can be achieved by setting [`visible`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel/#visible) property to true in the [`dataLabelSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel/) object and by injecting `DataLabelService` module using `@NgModule.providers` method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs39/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs39/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs39/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs39" %}

## Enable Tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints.
You can enable tooltip by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/maps/tooltipSettingsModel/#visible) property as true in [`tooltipSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/tooltipSettingsModel/) object and by injecting `MapsTooltipService` module using `@NgModule.providers` method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs40/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs40/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs40/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs40" %}