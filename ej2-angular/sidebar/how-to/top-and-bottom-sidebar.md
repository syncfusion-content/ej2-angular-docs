---
layout: post
title: Top and bottom sidebar in Angular Sidebar component | Syncfusion
description: Learn here all about Top and bottom sidebar in Syncfusion Angular Sidebar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Top and bottom sidebar 
documentation: ug
domainurl: ##DomainURL##
---

# Top and bottom sidebar in Angular Sidebar component

You can initialize Sidebar at the left and right positions by using the [`position`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#position) property. It will automatically adjust the width of the main content.

You can also initialize Sidebar at the top and bottom positions in application level. For initializing Sidebar, you need to manually adjust the height of the main content.

In the following sample, the [`toggle`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#toggle) method has been used to show or hide the top and bottom sidebar on button click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/top-bottom-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/top-bottom-cs1/src/main.ts %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/sidebar/top-bottom-cs1/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/top-bottom-cs1" %}
