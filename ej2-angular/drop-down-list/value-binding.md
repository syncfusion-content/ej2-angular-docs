---
layout: post
title: Value Binding in Angular Dropdown List | Syncfusion®
description: Bind Angular Dropdown List values from primitives, complex objects, or remote data using the value property and allowObjectBinding for type-safe selection.
platform: ej2-angular
control: Value binding 
documentation: ug
domainurl: ##DomainURL##
---

# Value Binding in Angular Dropdown List

Value binding in the DropDown List control allows you to associate data values with each list item. This facilitates managing and retrieving selected values efficiently. The DropDown List component provides flexibility in binding both primitive data types and complex objects.

## Primitive Data Types

The DropDown List control provides flexible binding capabilities for primitive data types like strings and numbers. You can effortlessly bind local primitive data arrays, fetch and bind data from remote sources, and even custom data binding to suit specific requirements. Bind the value of primitive data to the [value](../api/drop-down-list/#value) property of the DropDown List.

Primitive data types include:

* String
* Number
* Boolean
* Null

The following sample shows the example for preselect values for primitive data type

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dropdownlist/primitive/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/primitive/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/primitive" %}

## Object Data Types

In the DropDown List control, object binding allows you to bind to a dataset of objects. When [`allowObjectBinding`](../api/drop-down-list/#allowobjectbinding) is enabled, the value of the control will be an object of the same type as the selected item in the [value](../api/drop-down-list/#value) property. This feature seamlessly binds arrays of objects, whether sourced locally, retrieved from remote endpoints, or customized to suit specific application needs.

The following sample shows the example for preselect values for object data type

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dropdownlist/object/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/object/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/object" %}
