---
layout: post
title: Position in Angular Appbar component | Syncfusion
description: Learn here all about Position in Syncfusion Angular Appbar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Position 
documentation: ug
domainurl: ##DomainURL##
---

# Position in Angular Appbar component

The position of the AppBar can be set using the [position](https://ej2.syncfusion.com/angular/documentation/api/appbar#position) and [isSticky](https://ej2.syncfusion.com/angular/documentation/api/appbar#issticky) property. The AppBar provides the following options for setting its position:

* Top AppBar
* Bottom AppBar
* Sticky AppBar

## Top AppBar

The top AppBar is the default one in which it positions the AppBar at the top of the content.

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

This position can be set to the AppBar by setting `Bottom` to the property [position](https://ej2.syncfusion.com/angular/documentation/api/appbar#position). The bottom AppBar positions the AppBar at the bottom of the content.

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

This position can be set to the AppBar by setting `true` to the property [isSticky](https://ej2.syncfusion.com/angular/documentation/api/appbar#issticky). AppBar will be sticky while scrolling the AppBar content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/appbar/sticky-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/appbar/sticky-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/appbar/sticky-cs1" %}