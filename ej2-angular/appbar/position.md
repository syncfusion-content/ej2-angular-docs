---
layout: post
title: Position in Angular AppBar component | Syncfusion
description: Learn here all about Position in Syncfusion Angular AppBar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: AppBar 
documentation: ug
domainurl: ##DomainURL##
---

# Position in Angular AppBar component

The AppBar position can be configured using the [position](https://ej2.syncfusion.com/angular/documentation/api/appbar/#position) and [isSticky](https://ej2.syncfusion.com/angular/documentation/api/appbar/#issticky) properties. The AppBar provides the following positioning options:

* Top AppBar
* Bottom AppBar
* Sticky AppBar

## Top AppBar

The top AppBar is the default positioning option that places the AppBar at the top of the page content. The [position](https://ej2.syncfusion.com/angular/documentation/api/appbar/#position) property defaults to `Top`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/appbar/top-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/appbar/top-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/appbar/top-cs1" %}

## Bottom AppBar

The bottom AppBar positioning places the AppBar at the bottom of the page content. Set the [position](https://ej2.syncfusion.com/angular/documentation/api/appbar/#position) property to `Bottom` to achieve this layout.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/appbar/bottom-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/appbar/bottom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/appbar/bottom-cs1" %}

## Sticky AppBar

This position can be set to the AppBar by setting `true` to the property [isSticky](https://ej2.syncfusion.com/angular/documentation/api/appbar/#issticky). AppBar will be sticky while scrolling the AppBar content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/appbar/sticky-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/appbar/sticky-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/appbar/sticky-cs1" %}