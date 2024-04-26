---
layout: post
title: Center label in Angular Accumulation chart component | Syncfusion
description: The center label displays the important orhighlighted text to inform users about what it is.
platform: ej2-angular
control: Center label
documentation: ug
domainurl: ##DomainURL##
---

# Centerlabel

Using [`centerLabel`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/centerLabel) it is now possible to place a label at the center of a pie or donut chart. To configure the default text rendered on the center label for the pie and doughnut charts, use the [`text`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/centerLabel/#text) property in the [`centerLabel`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/centerLabel).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/centerlable-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/centerlable-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/centerlable-cs1" %}

## Hover text

The default text in the center label can be changed when the mouse pointer hovers over the pie and doughnut charts slice using the [`hoverTextFormat`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/centerLabel/#hovertextformat) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/centerlable-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/centerlable-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/centerlable-cs2" %}

## Customization

Customize the center label text using the [`textStyle`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/centerLabel/#textstyle) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/centerlable-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/centerlable-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/centerlable-cs3" %}