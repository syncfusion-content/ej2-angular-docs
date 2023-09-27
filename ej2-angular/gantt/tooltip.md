---
layout: post
title: Tooltip in Angular Gantt component | Syncfusion
description: Learn here all about Tooltip in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip 
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in Angular Gantt component

The Gantt component has a support to display a tooltip for various UI elements like taskbar, timeline cells, and grid cells.

## Enable tooltip

In the Gantt component, you can enable or disable the mouse hover tooltip for the following UI elements using the [`tooltipSettings.showTooltip`](https://ej2.syncfusion.com/angular/documentation/api/gantt/tooltipSettings/#showtooltip) property:

* Taskbar
* Connector line
* Baseline
* Event marker

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/tooltip/default-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/tooltip/default-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/tooltip/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/tooltip/default-cs1" %}

> The default value of the [`tooltipSettings.showTooltip`](https://ej2.syncfusion.com/angular/documentation/api/gantt/tooltipSettings/#showtooltip) property is `true`.

## Timeline cells tooltip

In the Gantt component, you can enable or disable the mouse hover tooltip of timeline cells using the [`timelineSettings.showTooltip`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettings/#showtooltip) property. The default value of this property is `true`. The following code example shows how to enable the timeline cells tooltip in Gantt.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/tooltip/timelinecell-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/tooltip/timelinecell-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/tooltip/timelinecell-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/tooltip/timelinecell-cs1" %}

## Cell tooltip

You can enable or disable the Grid cell tooltip using the [`columns.clipMode`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#clipmode) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/tooltip/cell-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/tooltip/cell-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/tooltip/cell-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/tooltip/cell-cs1" %}

### Clip mode

The clip mode provides options to display its overflow cell content and it can be defined by the [`columns.clipMode`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#clipmode) property.

The following are three types of `clipMode`:

* `Clip`: Truncates the cell content when it overflows its area.
* `Ellipsis`: Displays ellipsis when content of the cell overflows its area.
* `EllipsisWithTooltip`: Displays ellipsis when content of the cell overflows its area; it displays the tooltip content when hover over ellipsis.

> NOTE
> By default, all the column's [`clipMode`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#clipmode) property is defined as `EllipsisWithTooltip`.

## Tooltip template

### Taskbar tooltip

The default tooltip in the Gantt component can be customized using the [`tooltipSettings.taskbar`](https://ej2.syncfusion.com/angular/documentation/api/gantt/tooltipSettings/#taskbar) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/tooltip/taskbar-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/tooltip/taskbar-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/tooltip/taskbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/tooltip/taskbar-cs1" %}

### Connector line tooltip

The default connector line tooltip in the Gantt component can be customized using the [`tooltipSettings.connectorLine`](https://ej2.syncfusion.com/angular/documentation/api/gantt/tooltipSettings/#connectorline) property. The following code example shows how to use the [`tooltipSettings.connectorLine`](https://ej2.syncfusion.com/angular/documentation/api/gantt/tooltipSettings/#connectorline) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/tooltip/dependency-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/tooltip/dependency-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/tooltip/dependency-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/tooltip/dependency-cs1" %}

### Taskbar editing tooltip

The taskbar editing tooltip can be customized using the [`tooltipSettings.editing`](https://ej2.syncfusion.com/angular/documentation/api/gantt/tooltipSettings/#editing) property. The following code example shows how to customize the taskbar editing tooltip in Gantt.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/tooltip/taskbar-edit-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/tooltip/taskbar-edit-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/tooltip/taskbar-edit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/tooltip/taskbar-edit-cs1" %}

### Baseline tooltip

A baseline tooltip can be customized using the [`tooltipSettings.baseline`](https://ej2.syncfusion.com/angular/documentation/api/gantt/tooltipSettings/#baseline) property. The following code example shows how to customize the baseline tooltip in Gantt.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/tooltip/baseline-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/tooltip/baseline-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/tooltip/baseline-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/tooltip/baseline-cs1" %}