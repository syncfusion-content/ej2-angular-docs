---
layout: post
title: Virtualization in Angular AutoComplete | Syncfusion®
description: Render large lists efficiently in Angular AutoComplete with virtualization that recycles DOM elements and supports local, remote, and grouped data sources.
platform: ej2-angular
control: Virtualization 
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in Angular AutoComplete

AutoComplete virtualization is a technique used to efficiently render extensive lists of items while minimizing the impact on performance. This method is particularly advantageous when dealing with large datasets because it ensures that only a fixed number of DOM (Document Object Model) elements are created. When scrolling through the list, existing DOM elements are reused to display relevant data instead of generating new elements for each item. This recycling process is managed internally.
 
During virtual scrolling, the data retrieved from the data source depends on the popup height and the calculation of the list item height. Enabling the [`enableVirtualization`](../api/auto-complete/index-default#enableVirtualization) property on the AutoComplete activates this virtualization technique.
 
When fetching data from the data source, the [actionBegin](../api/auto-complete/index-default#actionbegin) event is triggered before data retrieval begins. Then, the [actionComplete](../api/auto-complete/index-default#actioncomplete) event is triggered once the data is successfully fetched.

When the `enableVirtualization` property is enabled, the `skip` and `take` properties provided within the `Query` class in the initial state or during the `actionBegin` or `actionComplete` events are not considered, because they are internally managed and calculated based on the popup height.

## Binding local data

The AutoComplete can generate its list items through an array of complex data. To do so, map the appropriate columns to the [`fields`](../api/auto-complete/index-default#fields) property using dot notation. When using virtual scrolling, the list updates based on the scroll offset, triggering a request to fetch more data from the server. As the data is being fetched, the `actionBegin` event fires before data retrieval starts; once the data retrieval is successful, the `actionComplete` event fires to indicate that the fetch is complete.

In the following example, the `text` column of complex data is mapped to the `value` field.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
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

The AutoComplete supports retrieval of data from remote data services with the help of the `DataManager`, triggering the `actionBegin` and `actionComplete` events and updating the list data. During virtual scrolling, additional data is retrieved from the server, which also triggers the `actionBegin` and `actionComplete` events.

The following sample displays the `OrderId` values from the `Orders` Data Service.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
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

## Customizing item count in virtualization

When the `enableVirtualization` property is enabled, the `take` property provided within the `Query` parameter in the initial state or during the `actionBegin` event is considered. Internally, the component calculates the items that fit onto the current page (typically twice the popup height). If the user-provided `take` value is less than the minimum number of items that fit into the popup, it is ignored.

The following sample demonstrates customizing the item count in virtualization.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/virtual-scroll-items/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/virtual-scroll-items/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/autocomplete/virtual-scroll-items/src/virtual-scroll.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/virtual-scroll-items" %}

## Grouping

The AutoComplete component supports grouping with virtualization, allowing you to organize elements into groups based on different categories. Each list item can be classified using the [`groupBy`](../api/auto-complete/fieldSettingsModel#groupby) field. After grouping, virtualization works similarly to local data binding, providing a seamless user experience. When the data source is bound to remote data, an initial request retrieves all data for the purpose of grouping. Subsequently, the grouped data behaves like local data binding with virtualization, enhancing performance and responsiveness.

The following sample demonstrates grouping with virtualization.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
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


