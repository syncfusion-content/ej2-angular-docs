---
layout: post
title: Pane sizing in Angular Splitter component | Syncfusion
description: Learn here all about Pane sizing in Syncfusion Angular Splitter component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Splitter 
documentation: ug
domainurl: ##DomainURL##
---

# Pane sizing in Angular Splitter component

The Angular Splitter component allows you to define pane sizes using pixel values, percentage values, or automatic sizing based on layout behavior.

## Set pane size in pixels

To assign fixed pixel values to panes, use the `size` property in `paneSettings`. This ensures consistent pane dimensions regardless of container size.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/pane-sizes-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/pane-sizes-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/splitter/pane-sizes-cs1" %}

## Set pane size in percentage

You can also define pane sizes as percentages. This approach ensures responsive behavior across different screen sizes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/pane-sizes-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/pane-sizes-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/splitter/pane-sizes-cs2" %}

## Auto-size panes

When no explicit size is provided, panes automatically adjust based on available space. This behavior is powered by the default flex layout, allowing dynamic resizing when panes are added, removed, shown, or hidden.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/template-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/template-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/splitter/template-cs2" %}

## Fixed pane

You can configure panes with fixed sizes in both horizontal and vertical orientations. However, even when all panes are assigned fixed sizes, the Splitter treats the last pane as flexible to ensure layout adaptability. At least one pane must remain flexible to accommodate container changes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/fixed-pane-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/fixed-pane-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/splitter/fixed-pane-cs1" %}
