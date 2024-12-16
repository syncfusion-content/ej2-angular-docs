---
layout: post
title: Content render modes in Angular Tab component | Syncfusion
description: Learn here all about Content render modes in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Content render modes 
documentation: ug
domainurl: ##DomainURL##
---

# Content render modes in Angular Tab component

Tabs support rendering content based on different scenarios. The content of the tabs can be rendered in three different ways, as outlined below.

* [On Demand rendering or lazy loading](#on-demand-rendering-or-lazy-loading)
* [Dynamic rendering](#dynamic-rendering)
* [On initial rendering](#on-initial-rendering)

## On Demand rendering or lazy loading

This mode is the default, where only the content of the currently selected tab is initially loaded and available in the DOM, with subsequent tab content rendered upon selection. Once a tab's content is loaded, it remains in the DOM. This ensures that the state of the tabs, such as scroller positions, form values, etc., is preserved.

In the following code example, the Calendar and Scheduler are rendered in the first and second tabs, respectively. Initially, the Scheduler is not available, but it will be rendered once the second tab is selected. Both the Calendar and Scheduler are maintained in the DOM.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/load-on-demand-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/load-on-demand-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/load-on-demand-cs1" %}

## On Demand rendering or lazy loading

This mode can be applied to Tabs by setting the [`loadOn`](https://ej2.syncfusion.com/angular/documentation/api/tab/#loadon) property to `Dynamic` using `loadOn`. In this mode, only the content of the currently selected tab is loaded and available in the DOM initially. When a different tab is selected, its content replaces the current content. Since this mode ensures the DOM maintains only the content of the active tab, page loading performance is improved. However, the Tabs do not retain their state, as each time a tab is selected, it loads its content again.

In the following code example, there are two tabs. The first tab contains a login page, and the second tab contains a Grid component. The Grid component in the second tab will only be rendered in the DOM after the login is completed. Upon successful login, the second tab will replace the first tab in the DOM.

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

This mode can be applied to Tabs by setting the [`loadOn`](https://ej2.syncfusion.com/angular/documentation/api/tab/#loadon) property to `Init` using `loadOn`. In this mode, the content of all the tabs is rendered on initial load and maintained in the DOM. This mode is ideal when you have a small number of tabs and need to preserve the state of each tab. It also allows you to access the references of components rendered in other tabs.

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

