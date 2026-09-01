---
layout: post
title: How to create collapsible Tabs in Angular Tab | Syncfusion
description: Make Angular Tab headers collapsible by toggling a CSS class in the created and selected event handlers to hide content panels.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# How to create collapsible Tabs in Angular Tab

The Tab component can be configured to provide collapsible functionality by adding and removing custom CSS classes through event handlers. The implementation allows the active tab content to expand and all other panels to collapse, producing an accordion-like behavior within the Tab structure.

## Steps

1. Define a CSS class with `display: none` to hide the collapsed panel.
2. Use the [`created`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#created) event to mark all panels as collapsed initially.
3. Bind the [`selected`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#selected) event to remove the collapse class from the active panel and toggle classes on others.
4. Optionally handle custom click events on tab headers for explicit toggle behavior.

```CSS
.collapse {
    display: none;
}
```

> **Single-open behavior:** To make only one tab open at a time, toggle the collapse class on every inactive panel inside the `selected` handler.

The event handler logic adds the `collapse` class to hide content and removes it to display content, creating smooth expand and collapse transitions.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/collapse-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/collapse-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/collapse-cs1" %}

## See Also

* [Render other components in Tab using Angular template](./render-other-components-in-tab-using-angular-template)
* [Content Render Modes](../content-render-modes)