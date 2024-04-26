---
layout: post
title: Display null values at bottom in Angular Grid component | Syncfusion
description: Learn here all about Display null values at bottom in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Display null values at bottom 
documentation: ug
domainurl: ##DomainURL##
---

# Display null values at bottom in Angular Grid component

By default the null values are displayed at bottom of the Grid row while perform sorting in ascending order. As well as this values are displayed at top of the Grid row while perform sorting with descending order. But you can customize this default order to display the null values at always bottom row of the Grid by using [`column.sortComparer`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#sortcomparer) method.

In the below demo we have displayed the null date values at bottom of the Grid row while sorting the **OrderDate** column in both ways.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/null-date-value-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/null-date-value-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/null-date-value-cs1" %}