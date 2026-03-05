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

The Dashboard Layout component is primarily used to represent data for monitoring or managing processes. HTML templates or data can be placed as the content of a panel using the [`content`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/panelModel#content) property. Panel headers, which provide context and help users quickly identify panel content, can be added using the [`header`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/panelModel#header) property. Headers appear at the top of each panel and typically contain a descriptive title or label.

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

Dashboard panels commonly display complex data through components like charts, grids, maps, and gauges. Such components can be placed as the panel content by assigning the corresponding component element to the [`content`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/panelModel#content) of the panel.

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

> Refer to the [Angular Dashboard Layout](https://www.syncfusion.com/angular-ui-components/angular-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [Angular Dashboard Layout example](https://ej2.syncfusion.com/angular/demos/#/material3/dashboard-layout/default) to learn how to present and manipulate data.
