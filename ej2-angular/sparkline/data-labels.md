---
layout: post
title: Data labels in Angular Sparkline component | Syncfusion
description: Learn here all about Data labels in Syncfusion Angular Sparkline component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data labels 
documentation: ug
domainurl: ##DomainURL##
---

# Data labels in Angular Sparkline component

Data labels are used to display values of data points to improve the readability.

## Enable data label

To enable data label for sparkline series, provide `visible` of the `dataLabelSettings` as following possible values:

* All - Enables data label of  all points.
* Start - Enables data label of the start point.
* End - Enables data label of the end point.
* High - Enables data label of the high point.
* Low - Enables data label of the low point.
* Negative - Enables data labels of the negative points.

The following example shows enabling sparkline data label for all points.

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs11/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs11" %}

## Customize data label

Data labels can be customized using the fill, border, opacity, and textStyle. The following code example shows customizing data label border, text color, and fill color.

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs12/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs12/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs12" %}

## Format data label text

The text of data labels can be formatted using the `format` API in the sparkline `dataLabelSettings`. By default, data label shows the y-value of point. The following code example shows how to display x and y-values for points.

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs13/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs13/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs13" %}
