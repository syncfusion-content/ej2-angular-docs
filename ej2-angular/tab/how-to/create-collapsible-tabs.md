---
layout: post
title: Create collapsible tabs in Angular Tab component | Syncfusion
description: Learn here all about Create collapsible tabs in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# Create collapsible tabs in Angular Tab component

The Tab component can be configured to create collapsible functionality by adding and removing custom CSS classes through event handlers. This approach allows tab content to collapse and expand when tab headers are clicked, providing an accordion-like experience within the tab structure.

The collapsible behavior is achieved by:
* Defining a CSS class to hide content using the `display: none` style property. The 'collapse' class is applied to content elements for hiding functionality using the [`created`](https://ej2.syncfusion.com/angular/documentation/api/tab/#created) event.
* Binding the [`selected`](https://ej2.syncfusion.com/angular/documentation/api/tab/#selected) event to manage the initial tab selection state and collapse behavior.
* Implementing custom click handlers for tab headers to toggle the 'collapse' class, controlling the visibility of corresponding tab content panels.

The event handler logic adds the 'collapse' class to hide content and removes it to display content, creating smooth expand and collapse transitions for enhanced user interaction.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/collapse-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/collapse-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/collapse-cs1" %}