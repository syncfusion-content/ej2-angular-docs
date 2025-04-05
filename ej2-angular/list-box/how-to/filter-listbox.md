---
layout: post
title: Filter List box Data Using TextBox component | Syncfusion
description: Learn here all about Filter List box Data Using TextBox component in Syncfusion Angular List box component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListBox Filter
documentation: ug
domainurl: ##DomainURL##
---

# How to Filter ListBox Data Using TextBox Component

This example demonstrates how to filter Syncfusion<sup style="font-size:70%">&reg;</sup> ListBox data based on input from a TextBox. Bind an input event listener to the TextBox to capture user input and filter the items in the ListBox. Within the event handler, use the [`filter`](https://ej2.syncfusion.com/angular/documentation/api/list-box/#filter) method to update the ListBox items, ensuring that only those matching the input text are included.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listbox/filter-listbox-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listbox/filter-listbox-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listbox/filter-listbox-cs1" %}