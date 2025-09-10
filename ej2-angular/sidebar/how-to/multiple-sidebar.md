---
layout: post
title: Multiple Sidebar in Angular Sidebar component | Syncfusion
description: Learn here all about Multiple Sidebar in Syncfusion Angular Sidebar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sidebar
documentation: ug
domainurl: ##DomainURL##
---

# Multiple Sidebar in Angular Sidebar component

Multiple Sidebars can be initialized on a single web page, sharing the same main content area while positioned on opposite sides (e.g., left and right). This setup is useful for applications requiring dual navigation panels or contextual side content. Use the [`position`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#position) property (values: `Left` or `Right`) to set the side for each Sidebar.

>The HTML element with class name `e-main-content` is considered the main content and both the Sidebars will behave as side content to this main content area of a web page.
The following sample demonstrates two Sidebars positioned on the left and right of the shared main content, toggled independently via buttons.
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
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
