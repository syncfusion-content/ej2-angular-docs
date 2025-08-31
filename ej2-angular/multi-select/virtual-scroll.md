---
layout: post
title: Virtualization in Angular Multi select component | Syncfusion
description: Learn here all about Virtualization in Syncfusion Angular Multi select component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Virtualization 
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in MultiSelect component

MultiSelect virtualization is a performance optimization technique that efficiently renders large lists by creating only a fixed number of DOM elements. This approach is particularly beneficial when working with extensive datasets, as it maintains optimal performance by reusing existing DOM elements during scrolling rather than creating new elements for each item. The recycling process operates automatically behind the scenes.

During virtual scrolling, data retrieval from the data source depends on the popup height and list item height calculations. Enable the [enableVirtualization](../api/multi-select/#enableVirtualization) property to activate this virtualization technique in the MultiSelect component.
 
When data is fetched from the data source, the [actionBegin](../api/multi-select/#actionbegin) event triggers before data retrieval starts, followed by the [actionComplete](../api/multi-select/#actioncomplete) event upon successful data retrieval.

The MultiSelect component supports incremental search with virtualization. When a key is typed, focus moves to the corresponding element in the open popup state. In the closed popup state, the popup opens and focus moves to the corresponding element based on the typed key. Incremental search functionality works seamlessly with remote data binding scenarios.

## Binding local data

The MultiSelect component generates list items from an array of complex data by mapping appropriate columns to the [fields](../api/multi-select/#fields) property. With virtual scrolling enabled, the list updates based on scroll offset values, triggering requests to fetch additional data as needed.

In the following example, the `id` column maps to the `value` field and the `text` column maps to the `text` field from complex data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/virtual-scroll/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/virtual-scroll/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/multiselect/virtual-scroll/src/virtual-scroll.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/virtual-scroll" %}

## Binding remote data

The MultiSelect component retrieves data from remote data services using the `DataManager` component, triggering [actionBegin](../api/multi-select/#actionbegin) and [actionComplete](../api/multi-select/#actioncomplete) events to update list data. During virtual scrolling, additional data requests from the server also trigger these events.

The following sample displays OrderId values from the `Orders` Data Service.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/virtual-scroll-remote/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/virtual-scroll-remote/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/multiselect/virtual-scroll-remote/src/virtual-scroll.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/virtual-scroll-remote" %}

## Customizing items count in virtualization 

When [enableVirtualization](../api/multi-select/#enableVirtualization) is enabled, the component considers the `take` property value provided in the Query parameter during initial state or [actionBegin](../api/multi-select/#actionbegin) event. The component internally calculates items that fit within the current page (typically twice the popup height). If the user-provided take value is less than the minimum number of items that fit into the popup, the component ignores the user-provided value.

The following sample demonstrates customizing items count in virtualization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/virtual-scroll-items/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/virtual-scroll-items/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/multiselect/virtual-scroll-items/src/virtual-scroll.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/virtual-scroll-items" %}

## Grouping with virtualization

The MultiSelect component supports grouping with virtualization, allowing organization of elements into categories. Each list item can be classified using the [groupBy](../api/multi-select/#fields) field in the data table. After grouping, virtualization operates similarly to local data binding for seamless user experience. When bound to remote data, an initial request retrieves all data for grouping purposes, after which the grouped data functions like local data binding with virtualization. 

The following sample demonstrates grouping with virtualization.  

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/virtual-scroll-group/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/virtual-scroll-group/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/multiselect/virtual-scroll-group/src/virtual-scroll.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/virtual-scroll-group" %}

## Filtering with virtualization

The MultiSelect component supports filtering with virtualization through the built-in filtering feature enabled by the [`allowFiltering`](../api/multi-select/#allowfiltering) property. With virtual scrolling, filtering operates based on typed characters by sending requests to the server using the full data source. The component triggers an action event before initiating requests and an action complete event upon successful data retrieval. Initial data loads when the popup opens, and the popup closes regardless of filter list selection status.

The following sample demonstrates filtering with virtualization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/virtual-scroll-filter/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/virtual-scroll-filter/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/multiselect/virtual-scroll-filter/src/virtual-scroll.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/virtual-scroll-filter" %>

## Checkbox with virtualization

The MultiSelect component supports checkbox selection with virtualization through integrated functionality that enables multiple value selection using checkboxes when the [`mode`](../api/multi-select/#mode) property is set to `CheckBox`. With virtual scrolling, checkboxes render with each list element, and the component value property updates with respective values based on checkbox selection and deselection.

The following sample demonstrates checkbox with virtualization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/virtual-scroll-check/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/virtual-scroll-check/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/multiselect/virtual-scroll-check/src/virtual-scroll.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/virtual-scroll-check" %}

## Custom value with virtualization

The MultiSelect component supports custom values with virtualization. When the [`allowCustomValue`](../api/multi-select/#allowcustomvalue) property is enabled, users can add new options not currently available in the component values. Upon selecting newly added custom values, the MultiSelect triggers the [`customValueSelection`](../api/multi-select/#customvalueselection) event and appends the custom value to the end of the complete list.

The following sample demonstrates custom value with virtualization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/virtual-scroll-custom/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/virtual-scroll-custom/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/multiselect/virtual-scroll-custom/src/virtual-scroll.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/virtual-scroll-custom" %}

## Preselect values with virtualization

The MultiSelect component supports preselected values with virtualization. When binding values from local or remote data to the MultiSelect component, the corresponding data value is retrieved from the server and updated within the component. When binding custom values to the component, the value updates within the component and the bound custom value appends to the end of the complete list.

The following sample demonstrates preselect values with virtualization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/virtual-scroll-preselect/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/virtual-scroll-preselect/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/multiselect/virtual-scroll-preselect/src/virtual-scroll.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/virtual-scroll-preselect" %}