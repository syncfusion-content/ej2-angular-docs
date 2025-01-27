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

Two Sidebars can be initialized in a web page with the same main content. Sidebars can be initialized on the right side or the left side of the main content using [`position`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#position) property.

>The HTML element with class name `e-main-content` is considered the main content and both the Sidebars will behave as side content to this main content area of a web page.

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
