---
layout: post
title: Value binding in Angular Multi select component | Syncfusion
description: Learn here all about Value binding in Syncfusion Angular Multi select component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Value binding 
documentation: ug
domainurl: ##DomainURL##
---

# Value binding in ##Platform_Name## Multi select control

Value binding in the MultiSelect control allows you to associate data values with each list item. This facilitates managing and retrieving selected values efficiently. The MultiSelect component provides flexibility in binding both primitive data types and complex objects.

## Primitive Data Types

The MultiSelect Dropdown control provides flexible binding capabilities for primitive data types like strings and numbers. You can effortlessly bind local primitive data arrays, fetch and bind data from remote sources, and even custom data binding to suit specific requirements. Bind the value of primitive data to the [value](../api/multi-select/#value) property of the MultiSelect.

Primitive data types include:

* String
* Number
* Boolean
* Null

The following sample shows the example for preselect values for primitive data type

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/primitive/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/multiselect/primitive/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/primitive/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="virtual-scroll.html" %}
{% include code-snippet/multiselect/primitive/src/virtual-scroll.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/primitive" %}

## Object Data Types

In the MultiSelect Dropdown control, object binding allows you to bind to a dataset of objects. When [`allowObjectBinding`](../api/multi-select/#allowobjectbinding) is enabled, the value of the control will be an object of the same type as the selected item in the [value](../api/multi-select/#value) property. This feature seamlessly binds arrays of objects, whether sourced locally, retrieved from remote endpoints, or customized to suit specific application needs.

The following sample shows the example for preselect values for object data type

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/object/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/multiselect/object/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/object/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="virtual-scroll.html" %}
{% include code-snippet/multiselect/object/src/virtual-scroll.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/object" %}
