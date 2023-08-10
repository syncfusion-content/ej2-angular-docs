---
layout: post
title: Reordering on grouped columns in Angular Grid component | Syncfusion
description: Learn here all about Reordering on grouped columns in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Reordering on grouped columns 
documentation: ug
domainurl: ##DomainURL##
---

# Reordering on grouped columns in Angular Grid component

Grid provides an option to interchange the position of the Grouped Columns by dragging and dropping the grouped headercells in the droparea. So, any new column entering into the droparea can also be dropped in any position.

To enable this feature, you have to set the [`groupSettings.allowReordering`](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/#allowReordering) property as **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping-anim-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grouping-anim-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping-anim-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping-anim-cs1" %}