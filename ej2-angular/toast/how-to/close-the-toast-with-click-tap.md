---
layout: post
title: Close the toast with click tap in Angular Toast component | Syncfusion
description: Learn here all about Close the toast with click tap in Syncfusion Angular Toast component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Close the toast with click tap 
documentation: ug
domainurl: ##DomainURL##
---

# Close the toast with click tap in Angular Toast component

In default, toast gets expired based on timeOut value. You can customize toast hiding process, You can customize only hide with click/tap action by setting event args in [clicked](https://ej2.syncfusion.com/angular/documentation/api/toast/toastClickEventArgs/#clicktoclose) callback function with [static Toast](../../toast/timeout#static-toast).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toast/toast-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/toast/toast-cs9/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs9" %}