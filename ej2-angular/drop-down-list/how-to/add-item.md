---
layout: post
title: How to add item in between in Angular Dropdown List | Syncfusion®
description: Add items to the Angular Dropdown List at a specific index, or append them to the end of the list when no index is provided.
platform: ej2-angular
control: Add item 
documentation: ug
domainurl: ##DomainURL##
---

# How to add item in between in Angular Dropdown List

You can add an item in between based on item [`index`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#index). If you add new item an without item index, it will be added as last item in list.

To get started quickly with adding items in the Angular DropDownList component, you can check the video below.

{% youtube "https://www.youtube.com/watch?v=tEuTP0SYxn4" %}

The following example demonstrates how to add item in between in DropDownList.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dropdownlist/add-item-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/add-item-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/add-item-cs1" %}