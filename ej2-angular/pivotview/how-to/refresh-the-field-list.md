---
layout: post
title: Refresh the field list in Angular Pivotview component | Syncfusion
description: Learn here all about Refresh the field list in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Refresh the field list 
documentation: ug
domainurl: ##DomainURL##
---

# Refresh the field list in Angular Pivotview component

The Angular Pivotview component allows dynamic data source updates, enabling you to refresh both the pivot table and field list with new data at runtime. This approach is especially useful in scenarios where data changes frequently or when switching between different datasets without reinitializing the entire component.

## Implementation

The following code example demonstrates how to refresh the Pivot Table and field list with new data using an external button click. The implementation involves clearing the existing field list cache by resetting the `fieldList` object and updating the data source with a new dataset. This approach ensures that the component recognizes structural changes in the data and rebuilds the field list accordingly.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs169/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs169/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs169" %}