---
layout: post
title: Orientations in Angular Timeline component | Syncfusion
description: Learn here all about Orientations in Syncfusion Angular Timeline component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Timeline
documentation: ug
domainurl: ##DomainURL##
---

# Orientations in Angular Timeline component

The Timeline component supports the display of items in both horizontal and vertical direction by using the [orientation](../api/timeline#orientation) property.

## Vertical

You can display the items one below the other vertically by setting the [orientation](../api/timeline#orientation) property to `Vertical`. By default, the items are displayed in vertical orientation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/orientations/vertical/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/orientations/vertical/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/orientations/vertical/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/timeline/orientations/vertical/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/orientations/vertical" %}

## Horizontal

In horizontal orientation, the items are displayed in a side-by-side manner by setting the [orientation](../api/timeline#orientation) property to `Horizontal`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/orientations/horizontal/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/orientations/horizontal/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/orientations/horizontal/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/timeline/orientations/horizontal/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/orientations/horizontal" %}