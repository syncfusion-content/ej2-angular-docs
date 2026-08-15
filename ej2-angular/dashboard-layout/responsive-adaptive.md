---
layout: post
title: Responsive and Adaptive in Angular Dashboard Layout | Syncfusion
description: Use the mediaQuery API in Syncfusion Angular Dashboard Layout to auto-stack panels on small screens and customize responsive breakpoints.
platform: ej2-angular
control: Responsive adaptive 
documentation: ug
domainurl: ##DomainURL##
---

# Responsive and Adaptive in Angular Dashboard Layout

The Angular Dashboard Layout component provides built-in responsive support that automatically adjusts panel positioning and sizing based on the parent element's dimensions. This responsive behavior accommodates various screen resolutions without requiring additional configuration for basic responsive dashboards.

## Adaptive Layout Behavior

The dashboard layout automatically transforms into a stacked layout when the screen resolution decreases. In a stacked layout, all panels are arranged vertically in a single column, ensuring optimal viewing on smaller screens such as tablets and mobile devices. By default, this transformation occurs when the screen resolution reaches 600px or below.

## Customizing Responsive Breakpoints

The default responsive breakpoint can be customized using the [`mediaQuery`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#mediaquery) property. This property accepts a CSS media query string that defines when the layout should transform to its stacked state.

The following example demonstrates how to configure the [`mediaQuery`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#mediaquery) property to trigger the stacked layout at 700px screen width:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dashboard-layout/responsive-adaptive-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dashboard-layout/responsive-adaptive-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/responsive-adaptive-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/responsive-adaptive-cs1" %}

> Refer to the [Angular Dashboard Layout](https://www.syncfusion.com/angular-ui-components/angular-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [Angular Dashboard Layout example](https://ej2.syncfusion.com/angular/demos/#/material3/dashboard-layout/default) to learn how to present and manipulate data.
