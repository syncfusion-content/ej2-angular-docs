---
layout: post
title: Loading animation in Angular Treegrid component | Syncfusion
description: Learn here all about Loading animation in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Loading animation 
documentation: ug
domainurl: ##DomainURL##
---

# Loading animation in Angular Treegrid component

The tree grid has an option to show a loading indicator in-between the time of fetching the data and binding it to the tree grid during initial rendering or refreshing or after performing any tree grid action like sorting, paging and more. The tree grid supports two indicator types, which is achieved by setting the `loadingIndicator.indicatorType` property to Spinner or Shimmer. The default value of the indicator type is "Spinner."

In the following sample, the Shimmer indicator is displayed while the tree grid is loading and refreshing when using the remote data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/loading-animation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/loading-animation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/loading-animation-cs1" %}

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.
