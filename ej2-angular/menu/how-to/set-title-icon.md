---
layout: post
title: Set title icon in Angular Menu component | Syncfusion
description: Learn here all about Set title icon in Syncfusion Angular Menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Menu 
documentation: ug
domainurl: ##DomainURL##
---

# Set title icon in Angular Menu component

You can customize the title for icon-based menu items in the Syncfusion Angular Menu component by using the [`beforeItemRender`](https://ej2.syncfusion.com/angular/documentation/api/menu/#beforeitemrender) event.

This approach is useful when you want to provide descriptive tooltips for menu items that display only icons.

In the following example, the title for the settings icon is set dynamically using the `beforeItemRender` client-side event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/set-title-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/set-title-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/set-title-cs1" %}