---
layout: post
title: Orientation in Angular Tab component | Syncfusion
description: Learn here all about Orientation in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tab 
documentation: ug
domainurl: ##DomainURL##
---

# Orientation in Angular Tab component

This section explains how to modify the position and modes of Tab header placement for optimal user experience and layout adaptation.

The Tab component allows placing the header section at different positions by using the [`headerPlacement`](https://ej2.syncfusion.com/angular/documentation/api/tab/#headerplacement) property. The available positions are as follows:

* **Top**: Tab header items can be arranged horizontally, and their content can be placed after the header.
* **Bottom**: Tab header items can be arranged horizontally, and their content can be placed before the header.
* **Left**: Tab header items can be arranged vertically, and their content can be placed after the header.
* **Right**: Tab header items can be arranged vertically, and their content can be placed before the header.

The Tab component automatically adapts to available space when tab items exceed the viewport. You can customize the overflow behavior using the [`overflowMode`](https://ej2.syncfusion.com/angular/documentation/api/tab/#overflowmode) property. The available modes are as follows:

* Scrollable
* Popup

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/tab/orientation-tab-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/orientation-tab-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/orientation-tab-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/orientation-tab-cs1" %}