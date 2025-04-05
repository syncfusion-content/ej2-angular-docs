---
layout: post
title: Toast services in Angular Toast component | Syncfusion
description: Learn here all about Toast services in Syncfusion Angular Toast component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Toast services 
documentation: ug
domainurl: ##DomainURL##
---

# Toast services in Angular Toast component

The Toast component provides a built-in utility function to render the toast with minimal code. The utility function will render the toast without the need of rendering the container element in the DOM where the toast is appended. So that, the toast can now be rendered on the go. The following are the option to render the toast using the utility function.

## Show Toast with predefined types

The Toast component support 4 types of predefined toast with Essential<sup style="font-size:70%">&reg;</sup> colors for various situations which can be shown using the `ToastUtility.show` by just defining the type of the toast without defining any class names. The following options are used as an argument on calling the utility function for predefined types:

| Options   | Description |
|-----------|-------------|
| [content](https://ej2.syncfusion.com/angular/documentation/api/toast/#content) | Specifies the content that can be displayed on the Toast. |
| type | Specifies the type of the predefined Toasts. The 4 types of predefined toasts are `Information`, `Success`, `Error`, `Warning` |
| [timeOut](https://ej2.syncfusion.com/angular/documentation/api/toast/#timeOut) | Specifies the Toast display time duration on the page in milliseconds. Once the time expires, Toast message will be removed. Setting 0 as a time out value displays the Toast on the page until the user closes it manually. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toast/toast-cs22/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs22/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs22" %}

## Show Toast with ToastModel

The utility function can be called using the [ToastModel](https://ej2.syncfusion.com/angular/documentation/api/toast/toastModel/) as argument to show the toast where all the properties in the `ToastModel` like any events, position, close icon, action buttons, etc. can be used in the `ToastUtility.show`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toast/toast-cs23/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs23/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs23" %}