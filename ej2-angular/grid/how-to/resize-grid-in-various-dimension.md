---
layout: post
title: Angular Grid Dynamic Resizing | Syncfusion
description: Learn how to resize Angular Data Grid dynamically by adjusting parent container dimensions and managing grid width and height responsively.
platform: ej2-angular
control: Resize the grid in various dimension 
documentation: ug
domainurl: ##DomainURL##
---

# Grid Resizing in Angular Data Grid

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component supports flexible resizing, allowing dynamic adjustment of both the grid's width and height to enhance data presentation and usability.

To perform external resizing, modify the width or height of the parent element that contains the grid. Adjusting the dimensions of the parent container dynamically resizes the grid to fit the new space.

The following example demonstrates to resize the grid's dimensions via an external button, using user input to adjust the parent container and grid accordingly.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-resize/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-resize/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-resize" %}