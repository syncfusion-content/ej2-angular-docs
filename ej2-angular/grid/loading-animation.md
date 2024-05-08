---
layout: post
title: Loading animation in Angular Grid component | Syncfusion
description: Learn here all about Loading animation in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Loading animation 
documentation: ug
domainurl: ##DomainURL##
---

# Loading animation in Angular Grid component

The grid has an option to show a loading indicator in-between the time of fetching the data and binding it to the grid during initial rendering or refreshing or after performing any grid action like sorting, filtering, grouping, and more. The grid supports two indicator types, which is achieved by setting the `loadingIndicator.indicatorType` property to Spinner or Shimmer. The default value of the indicator type is "Spinner."

In the following sample, the Shimmer indicator is displayed while the grid is loading and refreshing when using the remote data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/databinding-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/databinding-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/databinding-cs6" %}