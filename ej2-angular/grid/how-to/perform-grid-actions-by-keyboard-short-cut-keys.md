---
layout: post
title: Perform grid actions by keyboard short cut keys in Angular Grid component | Syncfusion
description: Learn here all about Perform grid actions by keyboard short cut keys in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Perform grid actions by keyboard short cut keys 
documentation: ug
domainurl: ##DomainURL##
---

# Perform grid actions by keyboard short cut keys in Angular Grid component

Using keyboard shortcuts, Grid performs navigation and actions.

In addition, You can also perform grid actions with custom keyboard shortcuts. This operation has to be achieved outside of the grid with the help of **keydown** event.

The following example demonstrates on **Adding** a new row when Enter key is pressed in the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs51/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs51/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs51/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs51" %}
