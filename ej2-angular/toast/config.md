---
layout: post
title: Config in Angular Toast Component | Syncfusion
description: Learn here all about Config in Syncfusion Essential Angular Toast component, it's elements and more.
platform: ej2-angular
control: Config 
documentation: ug
domainurl: ##DomainURL##
---

# Config in Angular Toast Component

This section explains on customizing the Toast appearance using built-in APIs.

## Title and content template

Toast can be created with the notification message. The message contains [`title`](https://ej2.syncfusion.com/angular/documentation/api/toast/#title) and [`content`](https://ej2.syncfusion.com/angular/documentation/api/toast/#content) of the Toasts. Title and contents are adaptable in any resolution.

> Title or Content property can be given as HTML element/element ID as a string that can be displayed as a Toast.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toast/toast-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/toast/toast-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs4" %}

## Specifying custom target

By default toast can be rendered in the document body, we can change the target position for toast rendering using [`target`](https://ej2.syncfusion.com/angular/documentation/api/toast/#target) property. Based on the target [`position`](https://ej2.syncfusion.com/angular/documentation/api/toast/#position) will update.

## Close Button

In default [`showCloseButton`](https://ej2.syncfusion.com/angular/documentation/api/toast/#showclosebutton) is not enabled. We can enable it by setting true value. Before expiring toast we can use to close or destroy toasts manually.

## Progress bar

In default [`showProgressBar`](https://ej2.syncfusion.com/angular/documentation/api/toast/#showprogressbar) is not enabled. If we enabled it can visually indicate when will the toast gets expired. Based on the `timeOut` property Progress bar will appear.

### Progress bar direction

By default, the [progressDirection](https://ej2.syncfusion.com/angular/documentation/api/toast/#progressDirection) is set to "Rtl" and it will appear from right to left direction. You can change the progressDirection to "Ltr" to make it appear from left to right direction.

## Newest on top

In default, newly created toasts will append next with existing toast. We can change the Sequence like inserting before the toast, by enabling the [`newestOnTop`](https://ej2.syncfusion.com/angular/documentation/api/toast/#newestontop).

Here below sample demonstrates the combination of `target`, `showCloseButton`, `showProgressBar` and `newestOnTop` properties in toast.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toast/toast-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/toast/toast-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs5" %}

## Width and height

we can set toast dimensions through [`width`](https://ej2.syncfusion.com/angular/documentation/api/toast/#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/toast/#height) property. This will individually set all toasts, we can create different custom dimension toasts.

In default toast can be rendered with '300px' width with 'auto' height

   > In mobile device toast default width gets '100%' width of the page.
   > When we sets toast width as '100%' toast will occupies full width and displayed top or bottom based on position `Y` property.

Both width and height property allows setting pixels/numbers/percentage. The number value is considered as pixels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toast/toast-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/toast/toast-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs6" %}

## See Also

* [Prevent duplicate toasts](./how-to/prevent-duplicate-toast-display/)
* [Customize the progress bar](./how-to/customize-progress-bar-theme-and-sizing/)