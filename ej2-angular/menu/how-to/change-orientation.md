---
layout: post
title: Change orientation in Angular Menu component | Syncfusion
description: Learn here all about Change orientation in Syncfusion Angular Menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Change orientation 
documentation: ug
domainurl: ##DomainURL##
---

# Change orientation in Angular Menu component

This section demonstrates how to configure the Angular Menu component to display items horizontally or vertically using the [`orientation`](https://ej2.syncfusion.com/angular/documentation/api/menu/#orientation) property. Horizontal orientation is suitable for top navigation bars, while vertical orientation is ideal for sidebar navigation.

The [`orientation`](https://ej2.syncfusion.com/angular/documentation/api/menu/#orientation) property accepts `"Horizontal"` or `"Vertical"` values, as defined in the `Orientation` type, with `"Horizontal"` as the default.

This example renders a vertically oriented menu with dropdown submenus.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/getting-started-cs6" %}
