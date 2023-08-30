---
layout: post
title: Show different types of toast in Angular Toast component | Syncfusion
description: Learn here all about Show different types of toast in Syncfusion Angular Toast component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Show different types of toast 
documentation: ug
domainurl: ##DomainURL##
---

# Show different types of toast in Angular Toast component

The Essential JS 2 Toast has the following predefined styles that can be defined using the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/toast/#cssclass) property for achieving different types of toast.

| Class | Description |
| -------- | -------- |
| e-success | Used to represent a positive Toast. |
| e-info |  Used to represent an informative Toast. |
| e-warning | Used to represent a Toast with caution. |
| e-danger | Used to represent a negative Toast. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toast/toast-cs16/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/toast/toast-cs16/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs16/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs16" %}