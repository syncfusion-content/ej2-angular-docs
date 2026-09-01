---
layout: post
title: Value Binding in Angular AutoComplete | Syncfusion®
description: Bind Angular AutoComplete values from primitive types, complex objects, or remote data using the value property and allowObjectBinding.
platform: ej2-angular
control: Data binding 
documentation: ug
domainurl: ##DomainURL##
---

# Value Binding in Angular AutoComplete

Value binding in the AutoComplete control allows you to associate data values with each list item. This facilitates managing and retrieving selected values efficiently. The AutoComplete component provides flexibility in binding both primitive data types and complex objects.

## Primitive Data Types

The AutoComplete component supports binding primitive data types such as strings and numbers. You can bind local primitive data arrays, fetch and bind data from remote sources, or supply custom data. Bind primitive values to the [`value`](../api/auto-complete/index-default#value) property of the AutoComplete.

Primitive data types include:

* String
* Number
* Boolean
* Null

The following sample demonstrates preselected values for the primitive data type.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/primitive/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/primitive/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/primitive" %}

## Object Data Types

In the AutoComplete component, object binding allows you to bind to a dataset of objects. When [`allowObjectBinding`](../api/auto-complete/index-default#allowobjectbinding) is set to `true`, the value of the control is an object of the same type as the selected item in the [`value`](../api/auto-complete/index-default#value) property. This feature binds arrays of objects from local sources, remote endpoints, or custom data providers.

The following sample demonstrates preselected values for the object data type.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/object/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/object/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/object" %}

