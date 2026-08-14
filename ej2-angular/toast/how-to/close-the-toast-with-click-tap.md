---
layout: post
title: How to close the toast with click tap in Angular Toast | Syncfusion
description: Close a static Syncfusion Angular Toast on click or tap by handling the clicked event args and manually hiding the toast element.
platform: ej2-angular
control: Close the toast with click tap 
documentation: ug
domainurl: ##DomainURL##
---

# How to close the toast with click tap in Angular Toast

In default, toast gets expired based on timeOut value. You can customize toast hiding process, You can customize only hide with click/tap action by setting event args in [clicked](https://ej2.syncfusion.com/angular/documentation/api/toast/toastclickeventargs#clicktoclose) callback function with [static Toast](../../toast/timeout#static-toast).

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/toast/toast-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs9" %}