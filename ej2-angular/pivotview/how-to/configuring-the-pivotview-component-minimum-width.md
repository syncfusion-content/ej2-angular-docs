---
layout: post
title: Configure minimum width in Angular Pivot Table component | Syncfusion
description: Learn how to configure the minimum width in the Syncfusion Angular Pivot Table component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Configuring the minimum width in the Pivot Table component
documentation: ug
domainurl: ##DomainURL##
---

# Configuring the minimum width in the Angular Pivot Table component

The pivot table component allows you to configure its minimum width using the `minWidth` property. This property is useful for ensuring the component maintains a consistent layout and responsiveness across different screen sizes.

> When the pivot table has the [Grouping Bar](../grouping-bar) enabled, the `minWidth` property is set to **400** pixels by default to accommodate the grouping bar UI elements. Without the [Grouping Bar](../grouping-bar), the `minWidth` property defaults to **310** pixels.

To customize the minimum width, set the `minWidth` property to your desired value (in pixels) as shown below:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs324/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs324/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs324" %}