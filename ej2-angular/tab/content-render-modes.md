---
layout: post
title: Content Render Modes in Angular Tab | Syncfusion
description: Render Angular Tab content on demand, dynamically, or on initial load via the loadOn property to balance performance and state.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# Content Render Modes in Angular Tab

The Tab component supports rendering content based on different scenarios to optimize performance and user experience. The content of tabs can be rendered in three different ways as outlined below.

* [On Demand rendering or lazy loading](#on-demand-rendering-or-lazy-loading)
* [Dynamic rendering](#dynamic-rendering)
* [On initial rendering](#on-initial-rendering)

## On Demand rendering or lazy loading

This mode is the default rendering behavior. No explicit `loadOn` configuration is required. Only the content of the currently selected tab is initially loaded and available in the DOM. Subsequent tab content is rendered upon selection. Once a tab's content is loaded, it remains in the DOM, ensuring that the state of tabs (such as scroll positions, form values, and component states) is preserved.

This approach provides a balance between performance and state management, making it suitable for most applications where maintaining tab state is important.

In the following code example, the Calendar and Scheduler components are rendered in the first and second tabs, respectively. Initially, the Scheduler is not available in the DOM, but it will be rendered once the second tab is selected. Both the Calendar and Scheduler are maintained in the DOM after their initial rendering.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/load-on-demand-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/load-on-demand-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/load-on-demand-cs1" %}

## Dynamic rendering

This mode can be applied to the Tab component by setting the [`loadOn`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#loadon) property to `Dynamic` (string). In this mode, only the content of the currently selected tab is initially available in the DOM; when a different tab is selected, its content replaces the current tab's content. Since this mode ensures the DOM maintains only the content of the active tab, page loading performance is significantly improved. However, tabs do not retain their state because each time a tab is selected, it loads its content from scratch.

This rendering mode is ideal for applications with many tabs or heavy content where memory optimization is crucial, and state preservation is not a primary concern.

In the following code example, there are two tabs. The first tab contains a login page, and the second tab contains a Grid component. The Grid component in the second tab will only be rendered in the DOM after the login is completed. Upon successful login, the second tab content will replace the first tab content in the DOM.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/load-on-dynamic-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/load-on-dynamic-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/load-on-dynamic-cs1" %}

## On initial rendering

This mode can be applied to the Tab component by setting the [`loadOn`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#loadon) property to `Init` (string). In this mode, the content of all tabs is rendered on initial load and maintained in the DOM. This mode is ideal when there are a small number of tabs and the state of each tab must be preserved. It also enables access to the references of components rendered in other tabs.

In the following example, all three tabs are rendered on the initial load, and the data entered in the first tab is maintained even when the second or third tab is active.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/load-on-init-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/load-on-init-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/load-on-init-cs1" %}

## Events

The following events are raised in conjunction with content rendering:

| Event | Description |
|-------|-------------|
| [`created`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#created) | Triggered once the Tab component is created. |
| [`selecting`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#selecting) | Triggered before a tab item is selected. |
| [`selected`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#selected) | Triggered after a tab item is selected. |

## Modes Comparison

| Behavior | On Demand (default) | Dynamic | Initial |
|----------|---------------------|---------|---------|
| `loadOn` value | Not required | `'Dynamic'` | `'Init'` |
| DOM after switching | Previous content persists | Previous content is replaced | All tab contents persist |
| Tab state retention | Yes | No | Yes |
| Best suited for | Most apps needing state preservation | Memory-intensive apps with many tabs | Apps that need cross-tab component references and full state |

## See Also

* [Load tab items dynamically](./how-to/load-tab-items-dynamically)
* [Render other components in Tab using Angular template](./how-to/render-other-components-in-tab-using-angular-template)
* [Show/Hide tab item](./how-to/show-hide-tab-item)