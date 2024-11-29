---
layout: post
title: Set panels header in Angular Dashboard layout component | Syncfusion
description: Learn here all about Setting header of panels in Syncfusion Angular Dashboard layout component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Setting header of panels 
documentation: ug
domainurl: ##DomainURL##
---

# Setting header of panels in Angular Dashboard layout component

The dashboard layout component is mostly used to represent the data used for monitoring or managing a process. These data or any HTML template can be placed as the content of a panel using the `content` property. Also, word or phrase that summarize the panel’s content can be added as the header on the top of each panel using the `header` property of the panel.

The following sample demonstrates how to add content for each panel using the header and content properties of the panels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/header-and-content-of-panels-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="default-style.css" %}
{% include code-snippet/dashboard-layout/header-and-content-of-panels-cs1/src/default-style.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/header-and-content-of-panels-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/header-and-content-of-panels-cs1" %}

## Placing components as content of panels

In a dashboard, components like the chart, grids, maps, gauge and more . can be used to present a complex data. Such components can be placed as the panel content by assigning the corresponding component element as the `content` of the panel.

The following sample demonstrates how to add ej2-chart components as the `content` for each panel in the dashboard layout component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/components-as-content-of-panels-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="default-style.css" %}
{% include code-snippet/dashboard-layout/components-as-content-of-panels-cs1/src/default-style.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/components-as-content-of-panels-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/components-as-content-of-panels-cs1" %}

> You can refer to our [Angular Dashboard Layout](https://www.syncfusion.com/angular-ui-components/angular-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Dashboard Layout example](https://ej2.syncfusion.com/angular/demos/#/material/dashboard-layout/default) to knows how to present and manipulate data.
