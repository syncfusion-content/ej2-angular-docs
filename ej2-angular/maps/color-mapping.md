---
layout: post
title: Color mapping in Angular Maps component | Syncfusion
description: Learn here all about Color mapping in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Color mapping 
documentation: ug
domainurl: ##DomainURL##
---

# Color mapping in Angular Maps component

Color mapping customizes shape colors based on data values. It supports three primary types: range, equal, and desaturation. To apply color mapping, bind data to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#datasource) property of [`layerSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel) and set the [`colorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel#colorvaluepath) property in [`shapeSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel) to specify which field controls the color value.

### Range color mapping

Range color mapping assigns colors to shapes based on numeric value ranges. Use the [`from`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel#from) and [`to`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel#to) properties in the [`colorMapping`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel) to define the ranges and their corresponding colors.

```typescript
export let population_density = [
    https://ej2.syncfusion.com/angular/documentation.
    {
        'code': 'AE',
        'value': 90,
        'name': 'United Arab Emirates',
        'population': 8264070,
        'density': 99
    },
    {
        'code': 'GB',
        'value': 257,
        'name': 'United Kingdom',
        'population': 62041708,
        'density': 255
    },
    {
        'code': 'US',
        'value': 34,
        'name': 'United States',
        'population': 325020000,
        'density': 33
    }
    ...
    ];
```

Set the **population_density** data as the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#datasource) property of [`layerSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel) and set the [`colorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel#colorvaluepath) property of [`shapeSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel) as **density**. Create color mappings by specifying [`from`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel#from) and [`to`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel#to) value ranges in [`colorMapping`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs13" %}

### Equal color mapping

Equal color mapping assigns colors to shapes when a data value matches a specified [`value`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel#value) property in [`colorMapping`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel). This approach is useful for categorical or discrete data. The following example demonstrates equal color mapping with the **unCountries** dataset, which categorizes UN Security Council members as permanent or non-permanent.

```typescript
export let unCountries: object[] = [
{ Country: 'China', Membership: 'Permanent' },
{ Country: 'France', Membership: 'Permanent' },
{ Country: 'Russia', Membership: 'Permanent' },
{ Country: 'United Kingdom', Membership: 'Permanent' },
{ Country: 'United States', Membership: 'Permanent' },
{ Country: 'Bolivia', Membership: 'Non-Permanent' },
{ Country: 'Eq. Guinea', Membership: 'Non-Permanent' },
{ Country: 'Ethiopia', Membership: 'Non-Permanent' },
{ Country: "Côte d'Ivoire", Membership: 'Permanent' },
{ Country: 'Kazakhstan', Membership: 'Non-Permanent' },
{ Country: 'Kuwait', Membership: 'Non-Permanent' },
{ Country: 'Netherlands', Membership: 'Non-Permanent' },
{ Country: 'Peru', Membership: 'Non-Permanent' },
{ Country: 'Poland', Membership: 'Non-Permanent' },
{ Country: 'Sweden', Membership: 'Non-Permanent' },
];
```

Set **unCountries** as the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#datasource) property of [`layerSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel) and set the [`colorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel#colorvaluepath) property of [`shapeSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel) to **Membership**. In [`colorMapping`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel), specify [`value`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel#value) entries for **Permanent** and **Non-Permanent**, each with an assigned color. When a shape's field value matches a [`value`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel#value) entry, the corresponding color is applied.

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs14" %}

### Desaturation color mapping

Desaturation color mapping varies opacity across a numeric range, similar to range color mapping. The [`minOpacity`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel#minopacity) and [`maxOpacity`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel#maxopacity) properties in [`colorMapping`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel) control the opacity gradient.

>The following example shows how to apply desaturation color mapping to the shapes with the data source  **population_density** that is available in the [Range color mapping](#range-color-mapping) section.

Bind the **population_density** data to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel#datasource) property of [`layerSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel) and set the [`colorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel#colorvaluepath) property of [`shapeSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel) as **density**. The range values can be set using the [`from`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel#from) and [`to`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel#to) properties of [`colorMapping`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs15" %}

## Multiple colors for a single shape

Multiple colors create a gradient effect across a range. Use the [`color`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel#color) property of [`colorMapping`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel) to specify multiple color stops for a smooth gradient transition.

>The following example demonstrates how to use multiple colors in color mapping with the data source  **population_density** that is available in the [Range color mapping](#range-color-mapping) section.

Bind the **population_density** data to the [`dataSource`](../api/maps/layerSettingsModel#datasource) property of [`layerSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel) and set the [`colorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel#colorvaluepath) property of [`shapeSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel) as **density**. The range values can be set using the [`from`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel#from) and [`to`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel#to) properties of [`colorMapping`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel).

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs16" %}

## Color for items excluded from color mapping

Color mapping can be applied to the shapes in the Maps which does not match color mapping criteria such as range or equal values using the [`color`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel#color) property of [`colorMapping`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel).

>The following example shows how to set the color for items excluded from the color mapping with the data source **population_density** that is available in the [Range color mapping](#range-color-mapping) section.

In the following example, color mapping is added for the ranges from 0 to 200. If there are any records in the data source that are outside of this range, the color mapping will not be applied. To apply the color for these excluded items, set the [`color`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel#color) property alone in the [`colorMapping`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel).

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs17" %}

## Color mapping for bubbles

Range, equal, and desaturation color mapping apply to bubble layers as well. Configure bubble color mapping by setting the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel#datasource) property of [`bubbleSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel) and specifying the [`colorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel#colorvaluepath) field. Apply [`colorMapping`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel) within [`bubbleSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel) to control bubble colors. Gradient and fallback colors work identically for bubbles as for shapes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs18/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs18" %}