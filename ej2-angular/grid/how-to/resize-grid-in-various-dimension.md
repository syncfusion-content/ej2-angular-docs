---
layout: post
title: Angular Grid - Resize Various Dimensions | Syncfusion
description: Angular Grid resize guide explains resizing behavior, responsive sizing strategies, and examples to adjust grid dimensions dynamically.
platform: ej2-angular
control: Resize the grid in various dimension 
documentation: ug
domainurl: ##DomainURL##
---

# Resize the Grid in Various Dimension in Angular Grid Component

The Syncfusion Angular Grid component supports flexible resizing, allowing dynamic adjustment of both the grid’s width and height to enhance data presentation and usability.

To perform external resizing, modify the width or height of the parent element that contains the grid. Adjusting the dimensions of the parent container dynamically resizes the grid to fit the new space.

The following example demonstrates to resize the grid’s dimensions via an external button, using user input to adjust the parent container and grid accordingly.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-resize/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-resize/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-resize" %}