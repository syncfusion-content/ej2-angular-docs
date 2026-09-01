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

Right-to-left (RTL) support enables the Query Builder component to support languages that are read from right to left, such as Arabic, Farsi, and Urdu. When enabled, the component automatically mirrors its layout, text direction, and alignment to provide an optimal experience for RTL languages.

To enable RTL support, set the [`enableRtl`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#enablertl) property to true. This property accepts a Boolean value (true or false) to enable or disable RTL rendering.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/default-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/default-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/default-cs8" %}
