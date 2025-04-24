---
layout: post
title: Orientation in Angular Tab component | Syncfusion
description: Learn here all about Orientation in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Orientation 
documentation: ug
domainurl: ##DomainURL##
---

# Orientation in Angular Tab component

This section explains about modifying the position and modes of Tab header.

It allows placing the header section inside the Tab component at different positions by using the  [`headerPlacement`](https://ej2.syncfusion.com/angular/documentation/api/tab/#headerplacement) property. The available positions are as follows:

* **Top**: Tab header items can be arranged horizontally, and their content can be placed after the header.
* **Bottom**: Tab header items can be arranged horizontally, and their content can be placed before the header.
* **Left**: Tab header items can be arranged vertically, and their content can be placed after the header.
* **Right**: Tab header items can be arranged vertically, and their content can be placed before the header.

It is also adaptable to the available space when the tab items exceed the view space. You can customize the modes by using [`overflowMode`](https://ej2.syncfusion.com/angular/documentation/api/tab/#overflowmode) property. The available modes are as follows:

* Scrollable
* Popup

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/tab/orientation-tab-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/orientation-tab-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tab/orientation-tab-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/orientation-tab-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/orientation-tab-cs1" %}
