---
layout: post
title: How to Change the Minimum Height in Angular Pivot Table | Syncfusion
description: Step-by-step example showing how to change the minimum height in the Angular Pivot Table, with code snippets and property references.
platform: ej2-angular
control: Pivotview minimum height 
documentation: ug
domainurl: ##DomainURL##
---

# How to Change the Minimum Height in Angular Pivot Table

The `minHeight` property allows you to set the minimum height for the Angular Pivotview component. By default, the component maintains a minimum height of **300px**. This property ensures the component remains visible and functional even when the container height is smaller than the specified minimum value.

When the content exceeds the minimum height, the component automatically adjusts to accommodate the data. This property is particularly useful for responsive layouts where the component needs to maintain usability across different screen sizes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs158/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs158/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs158" %}