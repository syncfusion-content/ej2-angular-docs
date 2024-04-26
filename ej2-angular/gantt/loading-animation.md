---
layout: post
title: Loading Animation in Angular Gantt component | Syncfusion
description: Learn here all about Loading Animation in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Loading Animation 
documentation: ug
domainurl: ##DomainURL##
---

# Loading Animation

The loading indicator is used to display a visual indicator while the Gantt is fetching data or performing certain actions, such as sorting or filtering. The gantt support two indicator types, which is achieved by setting the [`loadingIndicator.indicatorType`](../api/gantt/#loadingindicator) property to Shimmer or Spinner. The default value of the indicator type is "Spinner."


In the following sample, the Shimmer indicator is displayed while the gantt is scrolled when using the virtual data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/loading-animation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/loading-animation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/loading-animation-cs1" %}

