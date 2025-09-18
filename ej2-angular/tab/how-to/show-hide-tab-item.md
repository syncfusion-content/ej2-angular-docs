---
layout: post
title: Show hide tab item in Angular Tab component | Syncfusion
description: Learn here all about Show hide tab item in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# Show or hide tab items in Angular Tab component

The Tab component provides the [`hideTab`](https://ej2.syncfusion.com/angular/documentation/api/tab/#hideTab) method to dynamically show or hide tab items at runtime. This method accepts two parameters: the index of the tab item and a boolean value that determines the visibility state (true to hide the tab, false to show the tab).

The `hideTab` method enables developers to control tab visibility based on user interactions, application state changes, or conditional logic. When a tab is hidden, it becomes invisible to users but remains in the component's item collection, allowing it to be shown again when needed. This functionality is particularly useful for creating adaptive user interfaces that respond to different user roles, permissions, or workflow states.

Key aspects of the `hideTab` method:

* **Index-based operation**: Targets specific tab items using their zero-based index position
* **Boolean visibility control**: Uses true to hide and false to show the specified tab item

The following demonstration shows how to implement dynamic tab visibility using button controls that toggle the visibility state of a specified tab item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/show-hide-tab-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/show-hide-tab-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/show-hide-tab-cs1" %}
