---
layout: post
title: How to make Sidebar fixed in Angular Sidebar | Syncfusion
description: Keep the Angular Sidebar in a fixed position so it stays in place while the main content scrolls, by default behavior.
platform: ej2-angular
control: Sidebar 
documentation: ug
domainurl: ##DomainURL##
---

# How to make Sidebar fixed in Angular Sidebar

The Sidebar does not require any specific style to make it as a fixed one. By default, the Sidebar position will be in a fixed state. The following example demonstrates that the Sidebar is rendered with a fixed position. The position of the Sidebar will not change when scrolling the main content area.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/sidebar/fixed-position-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/sidebar/fixed-position-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/fixed-position-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/fixed-position-cs1" %}
