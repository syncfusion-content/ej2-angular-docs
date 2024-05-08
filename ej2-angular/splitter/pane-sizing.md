---
layout: post
title: Pane sizing in Angular Splitter component | Syncfusion
description: Learn here all about Pane sizing in Syncfusion Angular Splitter component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Pane sizing 
documentation: ug
domainurl: ##DomainURL##
---

# Pane sizing in Angular Splitter component

Splitter allows you to provide pane sizes either in pixel or percentage formats.

`Pane size in pixel`

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/pane-sizes-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/pane-sizes-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/pane-sizes-cs1" %}

`Pane size in percentage`

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

The splitter panes are automatically adjusted within its layout on resizing, while the size of panes are not specified. Because the panes are designed based on flex layout by default. When add/remove or show/hide the panes, the panes are auto aligned within its container.

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

You can render the split panes with fixed size for both horizontal and vertical mode. Even you provide fixed sizes to all panes, the splitter will consider last pane as flexible pane. Because, the splitter needs at least one pane as flexible pane always to adjust its remaining layout space.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/fixed-pane-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/fixed-pane-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/fixed-pane-cs1" %}
