---
layout: post
title: Labels in Angular Range navigator component | Syncfusion
description: Learn here all about Labels in Syncfusion Angular Range navigator component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Labels 
documentation: ug
domainurl: ##DomainURL##
---

# Labels in Angular Range navigator component

## Multilevel labels

The multi-level labels for the Range Selector can be enabled by setting the [`enableGrouping`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#enablegrouping) property to **true**. This is restricted to the DateTime axis alone.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/labels/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/labels/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/labels/default-cs1" %}

## Grouping

The multi-level labels can be grouped using the [`groupBy`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#groupby) property with the following interval types:

* Auto
* Years
* Quarter
* Months
* Weeks
* Days
* Hours
* Minutes
* Seconds

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/labels/default-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/labels/default-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/labels/default-cs2" %}

## Smart labels

The [`labelIntersectAction`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#labelintersectaction) property is used to avoid overlapping of labels. The following code sample shows the setting of [`labelIntersectAction`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#labelintersectaction) property to **Hide**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/axis/datetime-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/axis/datetime-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/axis/datetime-cs4" %}

## Label positioning

By default, the labels can be placed outside the Range Selector. It can also be placed inside the Range Selector using the [`labelPosition`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#labelposition) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/axis/datetime-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/axis/datetime-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/axis/datetime-cs5" %}

## Labels customization

The font size, color, family, etc. can be customized using the [`labelStyle`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#labelstyle) setting.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/lightweight/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/lightweight/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/lightweight/default-cs1" %}