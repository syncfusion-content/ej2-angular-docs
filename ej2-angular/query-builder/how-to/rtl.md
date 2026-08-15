---
layout: post
title: How to right to left (RTL) in Angular Query Builder UI | Syncfusion
description: Enable right-to-left rendering in the Syncfusion Angular Query Builder UI for Arabic, Farsi, and Urdu by setting the enableRtl property to true.
platform: ej2-angular
control: RTL 
documentation: ug
domainurl: ##DomainURL##
---

# How to right to left (RTL) in Angular Query Builder UI

RTL (Right-to-Left) enables the Query Builder component to support languages that are read from right to left, such as Arabic, Farsi, and Urdu. When enabled, the component's text direction and layout automatically adjust for right-to-left languages, improving accessibility and user experience. To enable RTL, set the [`enableRtl`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#enablertl) property to true.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/default-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/default-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/default-cs8" %}
