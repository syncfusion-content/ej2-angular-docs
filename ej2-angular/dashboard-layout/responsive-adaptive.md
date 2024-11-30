---
layout: post
title: Responsive adaptive in Angular Dashboard layout component | Syncfusion
description: Learn here all about Responsive adaptive in Syncfusion Angular Dashboard layout component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Responsive adaptive 
documentation: ug
domainurl: ##DomainURL##
---

# Responsive adaptive in Angular Dashboard layout component

The control is provided with built-in responsive support, where panels within the layout get adjusted based on their parent element's dimensions to accommodate any resolution which relieves the burden of building responsive dashboards.

The dashboard layout is designed to automatically adapt with lower resolutions by transforming the entire layout into a stacked one, so that, the panels will be displayed in a vertical column. By default, whenever the screen resolution meets 600px or lower resolutions this layout transformation occurs. This transformation can be modified for any user defined resolution by defining the for the `mediaQuery` property of the component.

The following sample demonstrates the usage of the `mediaQuery` property to turn out the layout into a stacked one in user defined resolution. Here, whenever, the window size reaches 700px or lesser, the layout becomes a stacked layout.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/responsive-adaptive-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="default-style.css" %}
{% include code-snippet/dashboard-layout/responsive-adaptive-cs1/src/default-style.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/responsive-adaptive-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/responsive-adaptive-cs1" %}

> You can refer to our [Angular Dashboard Layout](https://www.syncfusion.com/angular-ui-components/angular-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Dashboard Layout example](https://ej2.syncfusion.com/angular/demos/#/material/dashboard-layout/default) to knows how to present and manipulate data.
