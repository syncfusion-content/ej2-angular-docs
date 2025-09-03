---
layout: post
title: Set panels header in Angular Dashboard layout component | Syncfusion
description: Learn how to configure panel headers and dynamic content in Syncfusion Angular Dashboard layout component with header customization options.
platform: ej2-angular
control: Dashboard Layout 
documentation: ug
domainurl: ##DomainURL##
---

# Setting panel headers in Angular Dashboard layout component

The dashboard layout component is primarily used to represent data for monitoring or managing processes. These data or any HTML template can be placed as the content of a panel using the [`content`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/panelModel/#content) property. Also, a word or phrase that summarizes the panel's content can be added as the header on the top of each panel using the [`header`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/panelModel/#header) property of the panel.

The following example demonstrates how to add content for each panel using the header and content properties of the panels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/header-and-content-of-panels-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dashboard-layout/header-and-content-of-panels-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/header-and-content-of-panels-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/header-and-content-of-panels-cs1" %}

## Integrating Syncfusion components as panel content

In a dashboard, components like charts, grids, maps, gauges, and more can be used to present complex data. Such components can be placed as the panel content by assigning the corresponding component element to the [`content`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/panelModel/#content) of the panel.

The following example demonstrates how to integrate EJ2-Chart components as the `content` for each panel in the dashboard layout component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/components-as-content-of-panels-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dashboard-layout/components-as-content-of-panels-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/components-as-content-of-panels-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/components-as-content-of-panels-cs1" %}

> You can refer to our [Angular Dashboard Layout](https://www.syncfusion.com/angular-ui-components/angular-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Dashboard Layout example](https://ej2.syncfusion.com/angular/demos/#/material/dashboard-layout/default) to knows how to present and manipulate data.
