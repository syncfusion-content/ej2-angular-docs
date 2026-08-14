---
layout: post
title: Globalization in Angular Splitter | Syncfusion
description: Enable right-to-left rendering in the Syncfusion Angular Splitter using the enableRtl property to support Arabic, Hebrew, and other RTL writing systems.
platform: ej2-angular
control: Splitter 
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in Angular Splitter

The Angular Splitter component provides globalization features, including right-to-left (RTL) rendering for languages such as Arabic and Hebrew.

## Right-to-Left (RTL) support

To enable RTL layout, set the `enableRtl` property to `true`. This adjusts the direction of the Splitter panes and split bars to accommodate RTL writing systems.

The following code demonstrates how to enable RTL behavior.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/splitter/rtl-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/rtl-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/rtl-cs1" %}

## See Also

* [Construct different layouts using Splitter](./different-layouts)