---
layout: post
title: Auto close in Angular Sidebar component | Syncfusion
description: Learn here all about Auto close in Syncfusion Angular Sidebar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sidebar 
documentation: ug
domainurl: ##DomainURL##
---

# Auto close in Angular Sidebar component

The Sidebar often behaves differently on mobile displays compared to desktop displays. It has an effective feature that allows you to set it in an opened or closed state depending on the specified screen resolution.
This functionality can be achieved through [`mediaQuery`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#mediaquery) property that allows you to set the Sidebar in an expanded state or collapsed state only in user-defined resolution.

> window.matchMedia() method returns the object of parsed `media query` string.
The value of matchMedia() can be any of the media features of a CSS @media rule. For example, min-width and max-width.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/autoclose-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/sidebar/autoclose-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/autoclose-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/autoclose-cs1" %}

* In the following sample,the Sidebar will be in expanded state only in resolution below `400px`.

> `max-width` is one of the media features which represents the maximum width of the display area, such as the width of the viewport.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/autoclose-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/sidebar/autoclose-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/autoclose-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/autoclose-cs2" %}