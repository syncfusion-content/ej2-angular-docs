---
layout: post
title: Levels in Angular Treemap component | Syncfusion
description: Learn here all about Levels in Syncfusion Angular Treemap component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Levels 
documentation: ug
domainurl: ##DomainURL##
---

# Levels in Angular Treemap component

TreeMap supports **n** number of levels and each level is separated by using the [`groupPath`](https://ej2.syncfusion.com/angular/documentation/api/treemap/levelSettingsModel/#grouppath) property.

<!-- markdownlint-disable MD036 -->

## Group path

The [`groupPath`](https://ej2.syncfusion.com/angular/documentation/api/treemap/levelSettingsModel/#grouppath) property is used to separate each level of the TreeMap by specifying the property from the data source.

In the following example, three levels are added and each level is configured using the [`groupPath`](https://ej2.syncfusion.com/angular/documentation/api/treemap/levelSettingsModel/#grouppath) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs42/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs42/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs42" %}

<!-- markdownlint-disable MD036 -->

## Group gap

The [`groupGap`](https://ej2.syncfusion.com/angular/documentation/api/treemap/levelSettingsModel/#groupgap) property is used to separate an item from each group or another item to differentiate the levels mentioned in the TreeMap.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs43/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs43/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs43" %}

<!-- markdownlint-disable MD036 -->

## Header format and Alignment

Customize header using the [`headerFormat`](https://ej2.syncfusion.com/angular/documentation/api/treemap/levelSettingsModel/#headerformat) property in which fields are mapping from the dataSource and align header using the [`headerAlignment`](https://ej2.syncfusion.com/angular/documentation/api/treemap/levelSettingsModel/#headeralignment) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs44/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs44/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs44" %}

## Header height and style

Customize the font color, family, weight, opacity and size using the [`headerStyle`](https://ej2.syncfusion.com/angular/documentation/api/treemap/levelSettingsModel/#headerstyle). Based on the font settings, the header height is given using the [`headerHeight`](https://ej2.syncfusion.com/angular/documentation/api/treemap/levelSettingsModel/#headerheight) property in [`levels`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#levels).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs45/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs45/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs45" %}

## Header template and position

The TreeMap header supports to customize header of each item using the [`headerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/treemap/levelSettingsModel/#headertemplate) property. It uses Essential JS2 Template engine to render the elements. You can position the template using the [`templatePosition`](https://ej2.syncfusion.com/angular/documentation/api/treemap/levelSettingsModel/#templateposition) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs46/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs46/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs46" %}