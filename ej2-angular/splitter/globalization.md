---
layout: post
title: Globalization in Angular Splitter component | Syncfusion
description: Learn here all about Globalization in Syncfusion Angular Splitter component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Splitter 
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in Angular Splitter component

The Angular Splitter component supports globalization features, including right-to-left (RTL) rendering for languages such as Arabic and Hebrew.

## Right-to-Left (RTL) support

To enable RTL layout, set the `enableRtl` property to `true`. This adjusts the direction of the Splitter panes and split bars to accommodate RTL writing systems.

The following code shows how to enable RTL behavior.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/rtl-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/rtl-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/rtl-cs1" %}

## See Also

* [Construct different layouts using Splitter](./different-layouts)