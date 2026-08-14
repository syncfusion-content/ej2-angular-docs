---
layout: post
title: How to set Tooltip open or display modes in Angular Tooltip | Syncfusion
description: Configure the Syncfusion Angular Tooltip to open on Auto, Hover, Click, Focus, or Custom triggers using the openMode property.
platform: ej2-angular
control: Tooltip
documentation: ug
domainurl: ##DomainURL##
---

# How to set Tooltip open or display modes in Angular Tooltip

The `openMode` property of the Tooltip defines the trigger action: hovering, focusing, or clicking on a target. The Tooltip component supports the following open modes:

* Auto
* Hover
* Click
* Focus
* Custom

**Auto**

The tooltip appears on hover or when the target element receives focus.

**Hover**

The tooltip appears when you hover over the target element.

**Click**

The tooltip appears when you click a target element.

**Focus**

The tooltip appears when you focus on a target element (e.g., through the Tab key).

**Custom**

The tooltip does not trigger by any default action. Bind your own events and use the `open()` or `close()` methods.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tooltip/open-mode-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/open-mode-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/open-mode-cs2" %}
