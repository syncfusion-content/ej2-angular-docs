---
layout: post
title: Virtualization in Angular MultiColumn ComboBox component | Syncfusion
description: Learn here all about Virtualization in Syncfusion Angular MultiColumn ComboBox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: MultiColumn ComboBox 
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in Angular MultiColumn ComboBox component

MultiColumn ComboBox virtualization is a technique used to efficiently render extensive lists of items while minimizing the impact on performance. This method is particularly advantageous when dealing with large datasets because it ensures that only a fixed number of DOM (Document Object Model) elements are created. When scrolling through the list, existing DOM elements are reused to display relevant data instead of generating new elements for each item. This recycling process is managed internally.

Enabling the [enableVirtualization](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#enablevirtualization) property option in a MultiColumn ComboBox activates this virtualization technique.

## Binding local data

The MultiColumn Combobox can generate its list items through an object arrays of data. For this, the appropriate columns should be mapped to the [fields](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#fields) property. When using virtual scrolling, the list updates based on the scroll offset value, triggering a request to fetch more data from the server.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/virtualization/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/virtualization/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/virtualization" %}

## Binding remote data

The MultiColumn Combobox supports retrieval of data from remote data services with the help of `DataManager` component. When using remote data, it initially fetches all the data from the server and then stores the data locally. During virtual scrolling, additional data is retrieved from the locally stored data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/virtualization-remotedata/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/virtualization-remotedata/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/virtualization-remotedata" %}