---
layout: post
title: Style and appearance in Angular AppBar component | Syncfusion
description: Learn here all about Style and appearance in Syncfusion Angular AppBar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: AppBar 
documentation: ug
domainurl: ##DomainURL##
---

# Style and appearance in Angular AppBar component

The AppBar component offers extensive customization options to modify its appearance and integrate seamlessly with your application's design system. You can customize the AppBar through built-in color modes, CSS classes, and custom styling approaches. Additionally, you have the option to create your own custom theme for all controls using the [Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=material).

## Built-in styling AppBar

The AppBar component provides several built-in CSS classes for common styling scenarios. These classes can be applied individually or combined to achieve the desired appearance.

|CSS Class | Purpose of Class |
|-----|----- |
|.e-appbar|To customize the AppBar.|
|.e-appbar.e-prominent|To customize the prominent AppBar.|
|.e-appbar.e-dense|To customize the dense AppBar.|
|.e-appbar.e-light|To customize the light AppBar.|
|.e-appbar.e-dark|To customize the dark AppBar.|
|.e-appbar.e-primary|To customize the dark AppBar.|
|.e-appbar.e-inherit|To customize the inherit AppBar.|

>Note: You can adjust the prominent AppBar height when incorporating larger titles, images, or text content to ensure proper visual balance.

## CssClass

The CssClass property enables AppBar customization through custom CSS classes, allowing you to override default styles and create unique appearances. In the following example, the AppBar background and color are customized using the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/appbar/#cssclass) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/appbar/cssclass-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/appbar/cssclass-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/appbar/cssclass-cs1" %}

## HtmlAttributes

It can be used for additional inline attributes by specifying as inline attributes or by specifying [`htmlAttributes`](https://ej2.syncfusion.com/angular/documentation/api/appbar/#htmlattributes) directive. In the code example below, the aria-label of the AppBar is customized by specifying as attributes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/appbar/htmlattributes-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/appbar/htmlattributes-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/appbar/htmlattributes-cs1" %}