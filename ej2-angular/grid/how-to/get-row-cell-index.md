---
layout: post
title: Get row cell index in Angular Grid component | Syncfusion
description: Learn here all about Get row cell index in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Get row cell index 
documentation: ug
domainurl: ##DomainURL##
---

# Get row cell index in Angular Grid component

You can get the specific row and cell index of the grid by using [`rowSelected`](../../) event of the grid. Here, we have get the row and cell index by using **aria-rowindex**(get row Index from **tr** element) and **aria-colindex**(column index from **td** element) attribute.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/collapse-all-initial-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/collapse-all-initial-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/collapse-all-initial-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/collapse-all-initial-cs2" %}