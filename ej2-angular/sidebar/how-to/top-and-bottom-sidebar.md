---
layout: post
title: How to add top and bottom Sidebar in Angular Sidebar | Syncfusion
description: Place the Angular Sidebar at the top or bottom of the page by setting the position property and toggling it with the toggle method.
platform: ej2-angular
control: Sidebar 
documentation: ug
domainurl: ##DomainURL##
---

# How to add top and bottom Sidebar in Angular Sidebar

You can initialize the Sidebar at the left and right positions by using the [`position`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#position) property. It will automatically adjust the width of the main content.

You can also initialize Sidebar at the top and bottom positions in application level. To initialize the Sidebar, you need to manually adjust the height of the main content.

In the following sample, the [`toggle`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#toggle) method has been used to show or hide the top and bottom sidebars on button click.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/sidebar/top-bottom-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/sidebar/top-bottom-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/top-bottom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/top-bottom-cs1" %}
