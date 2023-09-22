---
layout: post
title: Layers in Angular Maps component | Syncfusion
description: Learn here all about Layers in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Layers 
documentation: ug
domainurl: ##DomainURL##
---

# Layers in Angular Maps component

The Maps component is rendered through [`layers`](https://ej2.syncfusion.com/angular/documentation/api/maps/#layers) and any number of layers can be added to the Maps.

## Multilayer

The Multilayer support allows loading multiple shape files and map providers in a single container, enabling Maps to display more information. The shape layer or map providers are the main layers of the Maps. Multiple layers can be added as **SubLayer** over the main layers using the [`type`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel/#type) property of [`layers`](https://ej2.syncfusion.com/angular/documentation/api/maps/#layers).

## Sublayer

Sublayer is a type of shape file layer. It allows loading multiple shape files in a single map view. For example, a sublayer can be added over the main layer to view geographic features such as rivers, valleys and cities in a map of a country. Similar to the main layer, elements in the Maps such as markers, bubbles, color mapping and legends can be added to the sub-layer.

In this example, the United States map shape is used as shape data by utilizing **usa.ts** file, and **texas.ts** and **california.ts** files are used as sub-layers in the United States map.

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs47/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs47/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs47/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs47" %}

[`app.module.ts`]

```typescript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the MapsModule for the Maps component
import { MapsModule } from '@syncfusion/ej2-angular-maps';
import { AppComponent }  from './app.component';

@NgModule({
  // declaration of ej2-angular-maps module into NgModule
  imports:      [ BrowserModule, MapsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

## Displaying different layer in the view

Multiple shape files and map providers can be loaded simultaneously in Maps. The [`baseLayerIndex`](https://ej2.syncfusion.com/angular/documentation/api/maps/mapsModel/#baselayerindex) property is used to determine which layer on the user interface should be displayed. This property is used for the Maps drill-down feature, so when the [`baseLayerIndex`](https://ej2.syncfusion.com/angular/documentation/api/maps/mapsModel/#baselayerindex) value is changed, the corresponding shape is loaded. In this example, two layers can be loaded with the World map and the United States map. Based on the given [`baseLayerIndex`](https://ej2.syncfusion.com/angular/documentation/api/maps/mapsModel/#baselayerindex) value the corresponding shape will be loaded in the user interface. If the [`baseLayerIndex`](https://ej2.syncfusion.com/angular/documentation/api/maps/mapsModel/#baselayerindex) value is set to **0**, then the world map will be loaded.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs48/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs48/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs48/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs48" %}

## Rendering custom shapes

Custom shapes (also known as custom maps) can be rendered in Maps to represent bus seat booking, cricket stadium, basic home plan/sketch, and so on. To accomplish this, a JSON file in GeoJSON format with proper geometries must be created manually or with the assistance of any online map vendor. The GeoJSON file created must be set to the [`shapeData`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel/#shapedata) in the Maps layer, and the [`geometryType`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel/#geometrytype) must be set as **Normal**.

Please refer this [`link`](https://cdn.syncfusion.com/maps/map-data/seat.json) for an example GeoJSON file containing information about bus seat selection.

Please refer this [`link`](https://ej2.syncfusion.com/angular/demos/#/material/maps/seat-selection) for more information and a live demonstration.
