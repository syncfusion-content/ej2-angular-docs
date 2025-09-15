---
layout: post
title: Resize the grid in various dimension in Angular Grid component | Syncfusion
description: Learn how to resize the Syncfusion Angular Grid in different dimensions by adjusting height and width dynamically for optimal data display in Angular applications.
platform: ej2-angular
control: Resize the grid in various dimension 
documentation: ug
domainurl: ##DomainURL##
---

# Resize the grid in various dimension in Angular Grid component

The Syncfusion Angular Grid component supports flexible resizing, allowing dynamic adjustment of both the grid’s width and height to enhance data presentation and usability.

To perform external resizing, modify the width or height of the parent element that contains the grid. Adjusting the dimensions of the parent container dynamically resizes the grid to fit the new space.

The following example demonstrates how to resize the grid’s dimensions via an external button, using user input to adjust the parent container and grid accordingly.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-resize/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-resize/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-resize" %}