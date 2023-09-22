---
layout: post
title: Gauge user interaction in Angular Circular gauge component | Syncfusion
description: Learn here all about Gauge user interaction in Syncfusion Angular Circular gauge component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Gauge user interaction 
documentation: ug
domainurl: ##DomainURL##
---


# Gauge user interaction in Angular Circular gauge component

## Tooltip for pointers

Circular gauge will displays the pointer details through [tooltip](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/tooltipSettings), when the mouse is moved over the pointer.

<!-- markdownlint-disable MD036 -->

**Enable Tooltip**

By default, tooltip is not visible. Enable the tooltip by setting [`enable`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/tooltipSettings/#enable-boolean) property to true and by injecting `GaugeTooltipService` into the `NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-user-interaction-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circulargauge/gauge-user-interaction-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-user-interaction-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-user-interaction-cs1" %}

<!-- markdownlint-disable MD036 -->

**Template**

Any HTML elements can be displayed in the tooltip by using the [`template`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/tooltipSettings/#template-string) property of the tooltip.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-user-interaction-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circulargauge/gauge-user-interaction-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-user-interaction-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-user-interaction-cs2" %}

## Tooltip for ranges

Circular gauge displays the information about the ranges through tooltip when hovering the mouse over the ranges. You can enable this feature by setting the type property of tooltip to ‘Range’ in the array collection.

**Tooltip customization for ranges**

To customize the range tooltip, use the `rangeSettings` property in tooltip. The following options are available to customize the range tooltip:

* `fill` - Specifies the range tooltip fill color.
* `textStyle` - Specifies the range tooltip text style.
* `format` - Specifies the range content format.
* `template` - Specifies the custom template for tooltip.
* `enableAnimation` - Animates as it moves from one point to another.
* `border` - Specifies the tooltip border.
* `showMouseAtPosition` - Displays the position of the tooltip on the cursor position.

## Tooltip for annotations

Circular gauge displays the information about the annotations through tooltip when hovering the mouse over the annotation. You can enable this feature by setting the type property of tooltip to ‘Annotation’ in the array collection.

**Tooltip customization for annotations**

To customize the annotation tooltip, use the `annotationSettings` property in tooltip. The following options are available to customize the annotation tooltip:

* `fill` - Specifies the annotation tooltip fill color.
* `textStyle` - Specifies the annotation tooltip text style.
* `format` - Specifies the annotation content format.
* `template` - Specifies the tooltip content with custom template.
* `enableAnimation` - Animates as it moves from one point to another.
* `border` - Specifies the tooltip border.

The following code example shows the tooltip for the pointers, ranges and annotations.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-user-interaction-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circulargauge/gauge-user-interaction-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-user-interaction-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-user-interaction-cs3" %}

## Pointer Drag

Pointers can be dragged over the axis value. This can be achieved by clicking and dragging the pointer.
To enable or disable the pointer drag, you can use [`enablePointerDrag`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/#enablepointerdrag-boolean) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-user-interaction-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circulargauge/gauge-user-interaction-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-user-interaction-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-user-interaction-cs4" %}