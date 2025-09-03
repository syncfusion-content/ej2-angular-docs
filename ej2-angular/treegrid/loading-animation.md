---
layout: post
title: Loading animation in Angular TreeGrid component | Syncfusion
description: Learn about loading animations in the Syncfusion Angular TreeGrid component of Essential JS 2, including spinner and shimmer indicator types.
platform: ej2-angular
control: Loading animation 
documentation: ug
domainurl: ##DomainURL##
---

# Loading animation in Angular TreeGrid component

The TreeGrid provides loading indicators during data fetching, initial rendering, refreshing, or after performing actions such as sorting or paging. The loading indicator can be configured using the `loadingIndicator.indicatorType` property, which accepts either `Spinner` or `Shimmer` as its type. By default, the indicator type is set to "Spinner."

In the following example, the Shimmer indicator is shown while the TreeGrid loads and refreshes data when using remote data sources.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/loading-animation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/loading-animation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/loading-animation-cs1" %}

> For a complete overview of features, visit the [Angular TreeGrid feature tour](https://www.syncfusion.com/angular-components/angular-tree-grid). Explore the [Angular TreeGrid example](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to see available data presentation options.
