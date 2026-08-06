---
layout: post
title: How to Configure the Minimum Width in Angular Pivot Table | Syncfusion
description: Step-by-step example showing how to configure the minimum width in the Angular Pivot Table, with code snippets and property references.
platform: ej2-angular
control: Configuring the minimum width in the Pivot Table component
documentation: ug
domainurl: ##DomainURL##
---

# How to Configure the Minimum Width in Angular Pivot Table

The Angular Pivot Table component provides the `minWidth` property to define the minimum width threshold for the component. This configuration ensures the pivot table maintains optimal usability and prevents layout issues when the container size decreases below the specified minimum width value.

## Default minimum width behavior

The pivot table automatically sets appropriate default minimum width values based on its current configuration:

| Configuration | Default Minimum Width | Purpose |
|---------------|----------------------|---------|
| With [Grouping Bar](../grouping-bar) enabled | 400 pixels | Accommodates grouping bar UI elements and drag-drop functionality |
| Without [Grouping Bar](../grouping-bar) | 310 pixels | Provides sufficient space for basic pivot table operations |

## Setting custom minimum width

To customize the minimum width according to specific layout requirements, configure the `minWidth` property with the desired pixel value:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs324/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs324/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs324" %}