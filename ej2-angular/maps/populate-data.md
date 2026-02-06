---
layout: post
title: Populate data in Angular Maps component | Syncfusion
description: Learn here all about Populate data in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Populate data 
documentation: ug
domainurl: ##DomainURL##
---

# Populate data in Angular Maps component

## Geometry types

GeoJSON data contains geometry objects with properties such as geometry types and coordinates. The geometry types are the values present in the geometry objects of the GeoJSON data that specify the type of shape to be rendered, as well as the coordinates that help to draw the shape's boundary line. The supportive geometry types are:

| **Shapes** | **Supported** |
| --- | --- |
|Polygon| Yes |
|MultiPolygon| Yes |
|LineString| Yes |
|MultiLineString| Yes |
|Point| Yes |
|MultiPoint| Yes |
|GeometryCollection| Yes |

## Shape data

The shape data collection describes geographical shape information that is available in GeoJSON format. The Map shapes are rendered using this data. Custom shapes such as seat selection in a bus, seat selection in a cricket stadium, and other useful information can also be added as [`shapeData`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#shapedata) in the layer of the Maps.

```typescript
export let usMap = // Paste all the content copied from the JSON file.
```

## Data source

The [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#datasource) property is used to represent statistical data in the Maps component, and it accepts a collection of values as input. For example, a list of objects can be provided as input to the data source. This data source is used to color the map, display data labels, and display tooltips, among other things.

The data source is populated with JSON data relative to shape data and stored as a JSON object. In the following example, **populationData** can be used as a data source in Maps.

```typescript
export let populationData: object[] = [
    {
        'code': 'AF',
        'value': 53,
        'name': 'Afghanistan',
        'population': 29863010,
        'density': 119
    },
    {
        'code': 'AL',
        'value': 117,
        'name': 'Albania',
        'population': 3195000,
        'density': 111
    },
    {
        'code': 'DZ',
        'value': 15,
        'name': 'Algeria',
        'population': 34895000,
        'density': 15
    },
    {
        'code': 'AO',
        'value': 15,
        'name': 'Angola',
        'population': 18498000,
        'density': 15
    },
    {
        'code': 'AR',
        'value': 15,
        'name': 'Argentina',
        'population': 40091359,
        'density': 14
    },
    {
        'code': 'AM',
        'value': 109,
        'name': 'Armenia',
        'population': 3230100,
        'density': 108
    }
];
```

## Data binding

The following properties in the [`layers`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel) are used for binding data in the Maps component. These two properties work together to establish the relationship between shape data and the data source.

* shapePropertyPath
* shapeDataPath

### shapePropertyPath

The [`shapePropertyPath`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#shapepropertypath) property is used to refer the field name in the [`shapeData`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#shapedata) property of shape layers to identify the shape. When the values of [`shapeDataPath`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#shapedatapath) property from the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#datasource) property and [`shapePropertyPath`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#shapepropertypath) property from the [`shapeData`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#shapedata) property match, then the associated object from the data source is bound to the corresponding shape.

>`world-map.ts` file contains following data and its field **name** value is used to map the corresponding shape with the provided data source.

```typescript
export let world_map: object = {
    "type": "Feature",
    "properties": {
        "admin": "Afghanistan",
        "name": "Afghanistan",
        "continent": "Asia"
    },
    "geometry": { "type": "Polygon", "coordinates": [[[61.21081709172573, https://ej2.syncfusion.com/angular/documentation. },
...

```

### shapeDataPath

The [`shapeDataPath`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#shapedatapath) property is similar to the [`shapePropertyPath`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#shapepropertypath) property, but it refers to the field name in the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#datasource) property. For example, [populationData](#data-source) contains the **code**, **value**, **name**, **population**, and **density** fields. Here, the **name** field is set to the shapeDataPath to map the corresponding value of the field name in shape data.

In the following example, both **name** fields contain the same value **Afghanistan**. This value is matched in both the shape data and data source, so the details associated with **Afghanistan** are mapped to the corresponding shape and used to color the shape, display data labels, display tooltips, and more.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs77/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs77/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs77" %}

<!-- markdownlint-disable MD010 -->

## Binding complex data source

Data from a data source can be bound to the Maps in two different ways.

1. Bind the field name directly to the properties such as [`shapeDataPath`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#shapedatapath), [`colorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel#colorvaluepath), [`valuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/tooltipSettingsModel#valuepath), and [`shapeValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel#shapevaluepath).

2. Bind the field name as `data.field` to the properties such as [`shapeDataPath`](../api/maps/layerSettingsModel#shapedatapath), [`colorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel#colorvaluepath), [`valuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/tooltipSettingsModel#valuepath), and [`shapeValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel#shapevaluepath).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs78/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs78/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs78" %}