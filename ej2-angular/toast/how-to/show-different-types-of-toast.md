---
layout: post
title: How to show different types of toast in Angular Toast | Syncfusion
description: Show Success, Info, Warning, and Danger Syncfusion Angular Toast styles with the cssClass property to match each notification context.
platform: ej2-angular
control: Show different types of toast 
documentation: ug
domainurl: ##DomainURL##
---

# How to show different types of toast in Angular Toast

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Toast has the following predefined styles that can be defined using the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/toast/index-default#cssclass) property for achieving different types of toast.

| Class | Description |
| -------- | -------- |
| e-success | Used to represent a positive Toast. |
| e-info |  Used to represent an informative Toast. |
| e-warning | Used to represent a Toast with caution. |
| e-danger | Used to represent a negative Toast. |

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/toast/toast-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs16" %}