---
layout: post
title: Virtualization in Angular AutoComplete component | Syncfusion
description: Learn here all about Virtualization in Syncfusion Angular AutoComplete component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Virtualization 
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in AutoComplete Component

AutoComplete virtualization is a technique used to efficiently render extensive lists of items while minimizing the impact on performance. This method is particularly advantageous when dealing with large datasets because it ensures that only a fixed number of DOM (Document Object Model) elements are created. When scrolling through the list, existing DOM elements are reused to display relevant data instead of generating new elements for each item. This recycling process is managed internally.
 
During virtual scrolling, the data retrieved from the data source depends on the popup height and the calculation of the list item height. Enabling the [enableVirtualization](../api/auto-complete/#enableVirtualization) option in a AutoComplete activates this virtualization technique.
 
When fetching data from the data source, the [actionBegin](../api/auto-complete/#actionbegin) event is triggered before data retrieval begins. Then, the [actionComplete](../api/auto-complete/#actioncomplete) event is triggered once the data is successfully fetched.

When the enableVirtualization property is enabled, the `skip` and `take` properties provided by the user within the Query class at the initial state or during the `actionBegin` or `actionComplete` events will not be considered, since it is internally managed and calculated based on certain dimensions with respect to the popup height.

## Binding local data

The AutoComplete can generate its list items through an array of complex data. For this, the appropriate columns should be mapped to the [fields](../api/drop-down-list/#fields) property. When using virtual scrolling, the list updates based on the scroll offset value, triggering a request to fetch more data from the server. As the data is being fetched, the `actionBegin` event occurs before the data retrieval starts. Once the data retrieval is successful, the `actionComplete` event is triggered, indicating that the data fetch process is complete.

In the following example, `text` column from complex data have been mapped to the `value` field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/virtual-scroll/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/virtual-scroll/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/autocomplete/virtual-scroll/src/virtual-scroll.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/virtual-scroll" %}

## Binding remote data

The AutoComplete supports retrieval of data from remote data services with the help of `DataManager` component. When using remote data, it initially fetches all the data from the server, triggering the `actionBegin` and `actionComplete` events, and then stores the data locally. During virtual scrolling, additional data is retrieved from the locally stored data, triggering the `actionBegin` and `actionComplete` events at that time as well.

The following sample displays the OrderId from the `Orders` Data Service.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/virtual-scroll-remote/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/virtual-scroll-remote/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/autocomplete/virtual-scroll-remote/src/virtual-scroll.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/virtual-scroll-remote" %}

## Grouping

The AutoComplete component supports grouping with Virtualization. It allows you to organize elements into groups based on different categories. Each item in the list can be classified using the [groupBy](../api/auto-complete/#fields) field in the data table. After grouping, virtualization works similarly to local data binding, providing a seamless user experience. When the data source is bound to remote data, an initial request is made to retrieve all data for the purpose of grouping. Subsequently, the grouped data works in the same way as local data binding virtualization, enhancing performance and responsiveness.

The following sample shows the example for Grouping with Virtualization

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/virtual-scroll-group/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/virtual-scroll-group/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/autocomplete/virtual-scroll-group/src/virtual-scroll.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/virtual-scroll-group" %}


