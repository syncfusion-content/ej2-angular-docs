---
layout: post
title: Custom context in Angular Sidebar component | Syncfusion
description: Learn here all about Custom context in Syncfusion Angular Sidebar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Custom context 
documentation: ug
domainurl: ##DomainURL##
---

# Custom context in Angular Sidebar component

Sidebar has a flexible option to make it initialize, target to any HTML element alongside of the main content of a web page.

By default, it initialize target to the body element. [`target`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#target)  property allows users to set target element to initialize the Sidebar inside any HTML container element apart from the body element.

> If required , `zIndex` can be set when sidebar act as overlay type.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/custom-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/sidebar/custom-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/custom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/custom-cs1" %}

## See Also

* [Angular routing](./how-to/hide-sidebar)