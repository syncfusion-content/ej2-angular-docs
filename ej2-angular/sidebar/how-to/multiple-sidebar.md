---
layout: post
title: How to add multiple Sidebar in Angular Sidebar | Syncfusion
description: Add two Angular Sidebars on the same page with the position property for dual navigation panels on the left and right sides.
platform: ej2-angular
control: Sidebar
documentation: ug
domainurl: ##DomainURL##
---

# How to add multiple Sidebar in Angular Sidebar

Multiple Sidebars can be initialized on a single web page, sharing the same main content area while positioned on opposite sides (e.g., left and right). This setup is useful for applications requiring dual navigation panels or contextual side content. Use the [`position`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#position) property (values: `Left` or `Right`) to set the side for each Sidebar.

>The HTML element with class name `e-main-content` is considered the main content and both the Sidebars will behave as side content to this main content area of a web page.
The following sample demonstrates two Sidebars positioned on the left and right of the shared main content, toggled independently via buttons.
{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/sidebar/multiple-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/sidebar/multiple-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/multiple-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/multiple-cs1" %}
