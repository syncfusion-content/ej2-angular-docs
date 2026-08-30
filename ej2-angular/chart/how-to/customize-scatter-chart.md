---
layout: post
title: How to Customize Scatter Chart in Angular Chart | Syncfusion
description: Learn here all about Customize scatter chart in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize scatter chart 
documentation: ug
domainurl: ##DomainURL##
---

# How to Customize Scatter Chart in Angular Chart

## Customizing Marker Shape

By using the [`shape`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel#shape) property of the [`marker`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel), you can customize the shape of scatter series points, including `Circle`, `Rectangle`, `Triangle`, `Diamond`, `Cross`, `HorizontalLine`, `VerticalLine`, `Pentagon`, `InvertedTriangle`, and `Image`. To use a custom image, set `shape` to `Image` and provide the URL via the `imageUrl` property. To display the marker, set its `visible` property to `true` (it defaults to `false`).

Use the [`width`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel#height) properties to control the size of each marker shape.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs3" %}

## Customizing Point Color and Data Label Value

Handle the chart events to customize the fill color of each point and the text shown in its data label. Both events are imported from `@syncfusion/ej2-angular-charts`:

- `IPointRenderEventArgs` for [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart#pointrender)
- `ITextRenderEventArgs` for [`textRender`](https://ej2.syncfusion.com/angular/documentation/api/chart#textrender)

### Customizing the point color

Inside the `pointRender` handler, evaluate `args.point.y` and assign a value to `args.fill` to recolor any matching point:

```ts
public pointRender(args: IPointRenderEventArgs | any): void {
  if (args.point.y > 80) {
    args.fill = 'red';
  } else if (args.point.y < 40) {
    args.fill = 'green';
  }
}
```

### Customizing the data label value

By default, the data label shows the y-value of the data point. To display a custom value, set the `name` property of `marker.dataLabel` to the field on your data model and then override the text in the `textRender` handler. In the following sample, the custom values come from the `text` field of each data point and the x-value is shown instead of the y-value:

```ts
public textRender(args: ITextRenderEventArgs): void {
  args.text = String(args.point.x);
}
```

To make the custom `text` field render on the data label, configure `marker.dataLabel.name` accordingly (see the `how-to-cs4` sample).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs4" %}
