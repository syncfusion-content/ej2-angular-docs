---
layout: post
title: Appearance in Angular Chart component | Syncfusion
description: Learn here all about Appearance in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Angular Chart component

## Custom Color Palette

Customize the default color of series or points by providing a custom color palette using the [`palettes`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#palettes) property.


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

Individual data point elements such as markers, fill colors, and data labels can be customized dynamically using the [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#pointrender) and [`textRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#textrender) events.

* **pointRender**: Triggered before each point is rendered. Use this to change point-level properties like `fill`, `border`, or `marker` shape and size based on data values.
* **textRender**: Triggered before each data label is rendered. Use this to customize label `text`, `color`, `border`, or `font` styles.

Example — dynamic fill and marker customization via `pointRender`:

```typescript
public onPointRender(args: IPointRenderEventArgs): void {
    if (args.point.y > 50) {
        args.fill = '#ff4081'; // Change fill color
        args.shape = 'Triangle'; // Change marker shape
    }
};
```

Example — custom label text via `textRender`:

```typescript
public onTextRender(args: ITextRenderEventArgs): void {
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

<!-- markdownlint-disable MD036 -->

## Chart Area Customization

<!-- markdownlint-disable MD036 -->

**Customize the Chart Background and Border**

<!-- markdownlint-disable MD013 -->
Use the [`background`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#background) and [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#border) properties on the chart to change its background color and border.


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

Set the chart margin relative to its container using the [`margin`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#margin) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs3" %}

**Chart Area Customization**

To customize the plotting region (chart area), use the [`chartArea`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartarea) properties: [`background`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAreaModel#background) and [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAreaModel#border) change the chart area's appearance, and [`width`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAreaModel#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAreaModel#height) adjust its size.

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

Control how data series appear on load using the [`animation`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#animation) property.

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