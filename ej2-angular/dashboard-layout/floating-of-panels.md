---
layout: post
title: Floating Panels in Angular Dashboard Layout | Syncfusion
description: Enable the floating behavior in Syncfusion Angular Dashboard Layout so panels auto-shift upward to fill empty cells and eliminate grid gaps.
platform: ej2-angular
control: Dashboard Layout 
documentation: ug
domainurl: ##DomainURL##
---

# Floating Panels in Angular Dashboard Layout

The floating functionality allows panels to move upward automatically to fill empty spaces left by panels in previous rows, maximizing space utilization within the dashboard. When enabled, panels dynamically reposition themselves to eliminate gaps and create a compact layout arrangement.

This behavior is controlled using the [`allowFloating`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#allowfloating) property, which accepts a boolean value (default: `true`).

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
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dashboard-layout/floating-of-panels-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/floating-of-panels-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/floating-of-panels-cs1" %}

> Refer to the [Angular Dashboard Layout](https://www.syncfusion.com/angular-components/angular-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [Angular Dashboard Layout example](https://ej2.syncfusion.com/angular/demos/#/material3/dashboard-layout/default) to learn how to present and manipulate data.