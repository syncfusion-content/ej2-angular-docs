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

The Tab component can be configured to create collapsible functionality by adding and removing custom CSS classes through event handlers. This approach allows tab content to collapse and expand when tab headers are clicked, providing an accordion-like experience within the tab structure.

The collapsible behavior is achieved by:
* Defining a CSS class to hide content using the `display: none` style property. The 'collapse' class is applied to content elements for hiding functionality using the [`created`](https://ej2.syncfusion.com/angular/documentation/api/tab/#created) event.
* Binding the [`selected`](https://ej2.syncfusion.com/angular/documentation/api/tab/#selected) event to manage the initial tab selection state and collapse behavior.
* Implementing custom click handlers for tab headers to toggle the 'collapse' class, controlling the visibility of corresponding tab content panels.

The event handler logic adds the 'collapse' class to hide content and removes it to display content, creating smooth expand and collapse transitions for enhanced user interaction.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/collapse-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/collapse-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/collapse-cs1" %}