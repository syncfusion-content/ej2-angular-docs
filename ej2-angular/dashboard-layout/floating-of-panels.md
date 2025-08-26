---
layout: post
title: Floating of panels in Angular Dashboard layout component | Syncfusion
description: Learn here all about Floating of panels in Syncfusion Angular Dashboard layout component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dashboard Layout 
documentation: ug
domainurl: ##DomainURL##
---

# Floating of panels in Angular Dashboard layout component

The floating functionality enables panels to move upward automatically to 
fill empty spaces left by panels in previous rows, maximizing space utilization 
within the dashboard layout. When floating is enabled, panels dynamically 
reposition themselves to eliminate gaps and create a more compact layout 
arrangement.

This behavior can be controlled using the [`allowFloating`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/#allowfloating) property, which accepts a boolean value (default: `true`).

## How floating works

When `allowFloating` is set to `true`:
- Panels automatically move upward to occupy available space in previous rows
- Empty cells are filled dynamically as panels are added, removed, or repositioned
- The layout maintains a compact appearance without gaps between rows

When `allowFloating` is set to `false`:
- Panels remain in their designated row positions
- Empty spaces remain unfilled, preserving the original grid structure
- Panels maintain their exact row and column positions


The following sample demonstrates how to enable or disable the floating of panels in the Dashboard Layout component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/floating-of-panels-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/floating-of-panels-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/floating-of-panels-cs1" %}

> You can refer to our [Angular Dashboard Layout](https://www.syncfusion.com/angular-components/angular-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Dashboard Layout example](https://ej2.syncfusion.com/angular/demos/#/material/dashboard-layout/default) to know how to present and manipulate data.