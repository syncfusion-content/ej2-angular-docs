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

The [`format`](https://ej2.syncfusion.com/angular/documentation/api/slider/ticksDataModel/#format) feature used to customize the units of Slider values to desired format. The formatted values will also be applied to the ARIA attributes of the slider. There are two ways of achieving formatting in slider.

* Use the format API of slider which utilizes our [Internationalization](../common/internationalization/) to format values.

* Customize using the events namely [`renderingTicks`](https://ej2.syncfusion.com/angular/documentation/api/slider/#renderingticks) and [`tooltipChange`](https://ej2.syncfusion.com/angular/documentation/api/slider/#tooltipchange).

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

In this method, we have different predefined formatting styles like Numeric (N), Percentage (P), Currency (C) and `#` specifiers. In this below example, we have formatted the [`ticks`](https://ej2.syncfusion.com/angular/documentation/api/slider/#ticks) and [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/slider/#tooltip) values into percentage.

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

In this method, we will be retrieving the values from the slider events then process them to desired formatted the values.
In this sample we have customized the [`ticks`](https://ej2.syncfusion.com/angular/documentation/api/slider/#ticks) values into weekdays as one formatting and [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/slider/#tooltip) values into day of the week as another formatting.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/format-03-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/format-03-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/format-03-cs1" %}
