---
layout: post
title: Auto close in Angular Sidebar component | Syncfusion
description: Learn here all about Auto close in Syncfusion Angular Sidebar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Auto close 
documentation: ug
domainurl: ##DomainURL##
---

# Auto close in Angular Sidebar component

The Sidebar often behaves differently on mobile display and differently on desktop display.
It has an effective feature that offers to set it in opened or closed state depending on the specified screen resolution.
This functionality can be achieved through [`mediaQuery`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#mediaquery) property that allows you to set the Sidebar in an expanded state or collapsed state only in user-defined resolution.

> window.matchMedia() method returns the object of parsed `media query` string.
The value of matchMedia() can be any of the media features of CSS @media rule. For example, min-width and max-width.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/autoclose-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/sidebar/autoclose-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/autoclose-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/autoclose-cs1" %}

* In the following sample,the Sidebar will be in expanded state only in resolution below `400px`.

> `max-width` is one of media feature which represents maximum with of display area such as width of the view port.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/autoclose-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/sidebar/autoclose-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/autoclose-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/autoclose-cs2" %}