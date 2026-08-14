---
layout: post
title: How to filter ListBox with a TextBox in Angular ListBox | Syncfusion
description: Filter the Angular ListBox items based on user input from a separate TextBox by binding an input listener and calling the ListBox filter method on each change.
platform: ej2-angular
control: ListBox Filter
documentation: ug
domainurl: ##DomainURL##
---

# How to filter ListBox with a TextBox in Angular ListBox

This example demonstrates how to filter Syncfusion<sup style="font-size:70%">&reg;</sup> ListBox data based on input from a TextBox. Bind an input event listener to the TextBox to capture user input and filter the items in the ListBox. Within the event handler, use the [`filter`](https://ej2.syncfusion.com/angular/documentation/api/list-box/#filter) method to update the ListBox items, ensuring that only those matching the input text are included.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/listbox/filter-listbox-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listbox/filter-listbox-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listbox/filter-listbox-cs1" %}