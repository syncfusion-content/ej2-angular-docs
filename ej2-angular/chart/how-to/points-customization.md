---
layout: post
title: Points customization in Angular Chart component | Syncfusion
description: Learn here all about Points customization in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Points customization 
documentation: ug
domainurl: ##DomainURL##
---

# Points customization in Angular Chart component

You can customize the color of individual series points by using the [`pointColorMapping`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#pointcolormapping) property. This property allows you to map a field from your data source that contains color values, which will be applied to each corresponding point in the series.

## Customizing point colors

The [`pointColorMapping`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#pointcolormapping) property accepts a string value representing the field name in your [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#datasource) that contains the color information. Each point will be rendered with the color specified in that field.

**Step 1**: Prepare your data source with a color field.

Your data source should include a field containing color values. These can be hex codes, RGB values, or named colors:

```typescript
public chartData: Object[] = [
    { x: 'Jan', y: 35, pointColor: '#E94649' },
    { x: 'Feb', y: 28, pointColor: '#F6B53F' },
    { x: 'Mar', y: 34, pointColor: '#6FAAB0' },
    { x: 'Apr', y: 32, pointColor: '#C4C24A' }
];
```

**Step 2**: Set the `pointColorMapping` property to the color field name.

Configure the series with the [`pointColorMapping`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#pointcolormapping) property pointing to your color field. This tells the chart which field in your data source contains the color values for each point.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/pattern-point-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/pattern-point-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/pattern-point-cs1" %}

When you apply the [`pointColorMapping`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#pointcolormapping) property, each point in the series will be rendered with its corresponding color from the data source, allowing for visually distinct points within the same series.