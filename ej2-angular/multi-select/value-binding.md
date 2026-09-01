---
layout: post
title: Value Binding in Angular MultiSelect Dropdown | Syncfusion
description: Learn here all about Value binding in Syncfusion Angular Multi select component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Value binding 
documentation: ug
domainurl: ##DomainURL##
---

# Value Binding in Angular MultiSelect Dropdown

Value binding in the MultiSelect component allows you to associate data values with each list item, enabling efficient management and retrieval of selected values programmatically. The MultiSelect component provides flexibility in binding both primitive data types and complex objects to meet various application requirements.

## Binding Primitive Data Types

The MultiSelect component supports binding primitive data types such as strings and numbers. You can bind local primitive data arrays, fetch and bind data from remote sources, or supply custom data. Bind primitive values to the [`value`](../api/multi-select#value) property of the MultiSelect.

Primitive data types include:

* String
* Number
* Boolean
* Null

The following sample demonstrates preselected values for primitive data types:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/multiselect/primitive/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/primitive/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="virtual-scroll.html" %}
{% include code-snippet/multiselect/primitive/src/virtual-scroll.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/primitive" %}

## Binding Object Data Types

The MultiSelect component supports object binding for datasets containing complex objects. When [`allowObjectBinding`](../api/multi-select#allowobjectbinding) is set to `true`, the component's [`value`](../api/multi-select#value) property contains objects of the same type as the selected items from the data source. This enables binding arrays of objects from local sources, remote endpoints, or custom data providers.

The following sample demonstrates preselected values for object data types:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/multiselect/object/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/object/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="virtual-scroll.html" %}
{% include code-snippet/multiselect/object/src/virtual-scroll.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/object" %}
