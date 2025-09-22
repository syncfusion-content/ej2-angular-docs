---
layout: post
title: Content render modes in Angular Tab component | Syncfusion
description: Learn here all about Content render modes in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# Content render modes in Angular Tab component

The Tab component supports rendering content based on different scenarios to optimize performance and user experience. The content of tabs can be rendered in three different ways, as outlined below.

* [On Demand rendering or lazy loading](#on-demand-rendering-or-lazy-loading)
* [Dynamic rendering](#dynamic-rendering)
* [On initial rendering](#on-initial-rendering)

## On Demand rendering or lazy loading

This mode is the default rendering behavior, where only the content of the currently selected tab is initially loaded and available in the DOM. Subsequent tab content is rendered upon selection. Once a tab's content is loaded, it remains in the DOM, ensuring that the state of tabs (such as scroll positions, form values, and component states) is preserved.

This approach provides a balance between performance and state management, making it suitable for most applications where maintaining tab state is important.

In the following code example, the Calendar and Scheduler components are rendered in the first and second tabs, respectively. Initially, the Scheduler is not available in the DOM, but it will be rendered once the second tab is selected. Both the Calendar and Scheduler are maintained in the DOM after their initial rendering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/load-on-demand-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/load-on-demand-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/load-on-demand-cs1" %}

## Dynamic rendering

This mode can be applied to the Tab component by setting the [`loadOn`](https://ej2.syncfusion.com/angular/documentation/api/tab/#loadon) property to `Dynamic`. In this mode, only the content of the currently selected tab is loaded and available in the DOM initially. When a different tab is selected, its content replaces the current tab's content in the DOM. Since this mode ensures the DOM maintains only the content of the active tab, page loading performance is significantly improved. However, tabs do not retain their state, as each time a tab is selected, it loads its content from scratch.

This rendering mode is ideal for applications with many tabs or heavy content where memory optimization is crucial, and state preservation is not a primary concern.

In the following code example, there are two tabs. The first tab contains a login page, and the second tab contains a Grid component. The Grid component in the second tab will only be rendered in the DOM after the login is completed. Upon successful login, the second tab content will replace the first tab content in the DOM.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/load-on-dynamic-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/load-on-dynamic-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/load-on-dynamic-cs1" %}

## On initial rendering

This mode can be applied to the Tab component by setting the [`loadOn`](https://ej2.syncfusion.com/angular/documentation/api/tab/#loadon) property to `Init`. In this mode, the content of all tabs is rendered on initial load and maintained in the DOM. This mode is ideal when you have a small number of tabs and need to preserve the state of each tab. It also allows you to access the references of components rendered in other tabs.

In the following example, all three tabs are rendered on the initial load, and the data entered in the first tab will be maintained even when the second or third tab is active.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/load-on-init-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/load-on-init-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/load-on-init-cs1" %}