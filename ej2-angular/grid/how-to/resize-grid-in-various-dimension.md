---
layout: post
title: Resize the grid in various dimension in Angular Grid component | Syncfusion
description: Learn here all about Resize the grid in various dimension in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Resize the grid in various dimension 
documentation: ug
domainurl: ##DomainURL##
---

# Resize the grid in various dimension in Angular Grid component

The Syncfusion Angular Grid component offers a friendly way to resize the grid, allowing you to adjust its width and height for improved data visualization.

To resize the grid externally, you can use an external button to modify the width of the parent element that contains the grid. This will effectively resize the grid along with its parent container.

The following example demonstrates how to resize the grid on external button click based on input. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-resize/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-resize/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-resize/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "http://127.0.0.1:4000/ej2-angular/code-snippet/grid/grid-resize/dist/index.html" %}

