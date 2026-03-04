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

The Timeline component supports displaying items in both horizontal and vertical directions using the [orientation](https://ej2.syncfusion.com/angular/documentation/api/timeline#orientation) property. This flexibility allows selection of the most suitable layout based on your application's design requirements and available space.

## Vertical

Display timeline items vertically in a top-to-bottom sequence by setting the [orientation](https://ej2.syncfusion.com/angular/documentation/api/timeline#orientation) property to `Vertical`. By default, the items are displayed in vertical orientation.

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
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/timeline/orientations/vertical/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/orientations/vertical" %}

## Horizontal

Display timeline items horizontally in a left-to-right sequence by setting the [orientation](https://ej2.syncfusion.com/angular/documentation/api/timeline#orientation) property to `Horizontal`. The horizontal layout is especially effective for desktop screens and wide containers, providing a clear horizontal timeline visualization.
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
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/timeline/orientations/horizontal/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/orientations/horizontal" %}