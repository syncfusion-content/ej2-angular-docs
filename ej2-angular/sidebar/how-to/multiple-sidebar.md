---
layout: post
title: Multiple sidebar in Angular Sidebar component | Syncfusion
description: Learn here all about Multiple sidebar in Syncfusion Angular Sidebar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Multiple sidebar 
documentation: ug
domainurl: ##DomainURL##
---

# Multiple sidebar in Angular Sidebar component

Two Sidebars can be initialized in a web page with same main content. Sidebars can be initialized on right side or left side of the main content using [`position`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#position) property.

>The HTML element with class name `e-main-content` will be considered as the main content and both the Sidebars will behave as side content to this main content area of a web page.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/multiple-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/sidebar/multiple-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/multiple-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/multiple-cs1" %}
