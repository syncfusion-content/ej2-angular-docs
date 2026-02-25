---
layout: post
title: Format in Angular Range Slider component | Syncfusion
description: Learn here all about Format in Syncfusion Angular Range Slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Range Slider 
documentation: ug
domainurl: ##DomainURL##
---

# Format in Angular Range Slider component

The [`format`](https://ej2.syncfusion.com/angular/documentation/api/slider/ticksDataModel#format) property customizes how Slider values are displayed. Formatted values are also applied to ARIA attributes for accessibility. Two approaches are available for implementing value formatting.

* **Using the format property**: Leverage the built-in [Internationalization](https://helpej2.syncfusion.com/angular/documentation/common/globalization/internationalization) support to apply predefined formats to slider values.

* **Using events**: Customize formatting with the [`renderingTicks`](https://ej2.syncfusion.com/angular/documentation/api/slider#renderingticks) and [`tooltipChange`](https://ej2.syncfusion.com/angular/documentation/api/slider#tooltipchange) events for more advanced transformations.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/format-01-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/format-01-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/format-01-cs1" %}

## Using format API

The format API provides predefined formatting styles including Numeric (N), Percentage (P), Currency (C), and custom specifiers. The following example demonstrates how to format [`ticks`](https://ej2.syncfusion.com/angular/documentation/api/slider#ticks) and [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/slider#tooltip) values as percentages.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/format-02-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/format-02-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/format-02-cs1" %}

## Using Events

With this approach, intercept slider events to apply custom formatting logic. The following sample demonstrates how to format [`ticks`](https://ej2.syncfusion.com/angular/documentation/api/slider#ticks) as weekday names and [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/slider#tooltip) values as full day names.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/format-03-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/format-03-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/format-03-cs1" %}
