---
layout: post
title: How to show or hide Tab items in Angular Tab | Syncfusion
description: Show or hide Angular Tab items at runtime by index using the hideTab method with true or false visibility values.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# How to show or hide Tab items in Angular Tab

The Tab component provides the [`hideTab`](https://ej2.syncfusion.com/angular/documentation/api/tab/#hideTab) method to dynamically show or hide tab items at runtime. This method accepts two parameters: the index of the tab item and a boolean value that determines the visibility state (true to hide the tab, false to show the tab).

The `hideTab` method enables developers to control tab visibility based on user interactions, application state changes, or conditional logic. When a tab is hidden, it becomes invisible to users but remains in the component's item collection, allowing it to be shown again when needed. This functionality is particularly useful for creating adaptive user interfaces that respond to different user roles, permissions, or workflow states.

Key aspects of the `hideTab` method:

* **Index-based operation**: Targets specific tab items using their zero-based index position
* **Boolean visibility control**: Uses true to hide and false to show the specified tab item

The following demonstration shows how to implement dynamic tab visibility using button controls that toggle the visibility state of a specified tab item.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/show-hide-tab-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/show-hide-tab-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/show-hide-tab-cs1" %}
