---
layout: post
title: How to get count on remote bind in Angular Dropdown List | Syncfusion®
description: Get the total count of items in Angular Dropdown List on remote data bind from the actionComplete event before render, or via getItems after.
platform: ej2-angular
control: Remote data bind 
documentation: ug
domainurl: ##DomainURL##
---

# How to get total count on remote bind in Angular Dropdown List

Before the component rendering, you can get the total items count by using [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#actioncomplete) &nbsp; event using its result arguments. After rendering this component, you can get the total items count by using [`getItems`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#getitems) method.

The following example demonstrates how to get the total items count.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dropdownlist/get-item-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/get-item-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/get-item-cs1" %}