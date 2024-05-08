---
layout: post
title: Tooltip in Angular Heatmap chart component | Syncfusion
description: Learn here all about Tooltip in Syncfusion Angular Heatmap chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip 
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in Angular Heatmap chart component

Tooltip is used to provide the details of the heat map cell, and this can be displayed, while hovering the cursor over the cell or performing tap action in touch devices.

## Default tooltip

You can enable the tooltip by setting the [showTooltip](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#showtooltip) property to true and injecting the `Tooltip` module using the `HeatMap.Inject(Tooltip)`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/tooltip/tooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/tooltip/tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/tooltip/tooltip-cs1" %}

## Tooltip template

In heat map, you can customize the tooltip using the [tooltipRender](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#tooltiprender) client-side event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/tooltip/tooltiptemplate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/tooltip/tooltiptemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/tooltip/tooltiptemplate-cs1" %}

## Customize the appearance of Tooltip

The  [fill](https://ej2.syncfusion.com/angular/documentation/api/heatmap/tooltipSettings/#fill) and [border](https://ej2.syncfusion.com/angular/documentation/api/heatmap/tooltipSettings/#border) properties are used to customize the background color and border of the tooltip respectively. The [textStyle](https://ej2.syncfusion.com/angular/documentation/api/heatmap/tooltipSettings/#textStyle) property in the tooltip is used to customize the font of the tooltip text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/tooltip/tooltipSettings-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/tooltip/tooltipSettings-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/tooltip/tooltipSettings-cs1" %}

>Note: To use tooltip feature, we need to inject `Tooltip` using `HeatMap.Inject(Tooltip)`.
