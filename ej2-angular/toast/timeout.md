---
layout: post
title: Timeout in Angular Toast component | Syncfusion
description: Learn here all about Timeout in Syncfusion Angular Toast component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Timeout 
documentation: ug
domainurl: ##DomainURL##
---

# Timeout in Angular Toast component

Toast can be expired based on [`timeOut`](https://ej2.syncfusion.com/angular/documentation/api/toast/#timeout) property, toast will live till the timeOut reaches without user interaction, a timeOut value was considered as the millisecond.

* `timeOut` delay can be visually represented through [`Progress Bar`](./config#progress-bar).

* [`extendedTimeOut`](https://ej2.syncfusion.com/angular/documentation/api/toast/#extendedtimeout) property can make how long the toast will display after a user hovers over it.

> You can terminate the process by using  `showCloseButton` property for destroying toast at any time.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toast/toast-cs20/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/toast/toast-cs20/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs20" %}

## Static toast

We can prevent auto hiding in a toast as visible like static. For this, we need to set zero (`0`) value in timeOut Property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toast/toast-cs21/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/toast/toast-cs21/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs21/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs21" %}

## See Also

* [Hide the toast on click](./how-to/close-the-toast-with-click-tap)