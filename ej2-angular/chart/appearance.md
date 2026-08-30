---
layout: post
title: Appearance in Angular Chart | Syncfusion
description: Learn here all about Appearance in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Angular Chart

## Custom Color Palette

Customize the default color of series or points by providing a custom color palette using the [`palettes`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartmodel#palettes) property.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs1" %}

## Point and Text Customization

Use the [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartmodel#pointrender) and [`textRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartmodel#textrender) events to customize data point elements such as markers, fill colors, and data labels.

* **pointRender**: Triggered before each point is rendered. Use this to change point-level properties like `fill`, `border`, or `marker` shape and size based on data values.
* **textRender**: Triggered before each data label is rendered. Use this to customize label `text`, `color`, `border`, or `font` styles.

The following handler methods can be bound to the chart's `(pointRender)` and `(textRender)` outputs:

```typescript
public pointRender(args: IPointRenderEventArgs): void {
    if (args.point.y > 50) {
        args.fill = '#ff4081'; // Change fill color
        args.shape = 'Triangle'; // Change marker shape
    }
};

public textRender(args: ITextRenderEventArgs): void {
    args.text = args.text + ' units'; // Append suffix to labels
    args.color = 'blue'; // Customize label color
};
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs1" %}

## Chart Area Customization

### Customize the Chart Background and Border

Use the [`background`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartmodel#background) and [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartmodel#border) properties on the chart to change its background color and border.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs2" %}

**Chart Margin**

Set the chart margin relative to its container using the [`margin`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartmodel#margin) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs3" %}

**Customize the Plot Area**

To customize the plot area, use the [`chartArea`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartarea) properties. The [`background`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartareamodel#background) and [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartareamodel#border) properties change the plot area's appearance. The [`width`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartareamodel#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartareamodel#height) properties adjust its size.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs4" %}

## Series Animation

Control how data series appear on load using the [`animation`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartmodel#animation) property.

* `enable`: Set to `true` (default) or `false` to toggle animation.
* `duration`: Specifies the animation length in milliseconds (e.g., `2000` for 2 seconds).
* `delay`: Sets the time to wait before starting the animation in milliseconds.

Example:

```typescript
public animation: Object = {
    enable: true,
    duration: 1500,
    delay: 100
};
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs5" %}