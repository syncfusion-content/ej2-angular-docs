---
layout: post
title: Auto fit columns in Angular Treegrid component | Syncfusion
description: Learn here all about Auto fit columns in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Auto fit columns 
documentation: ug
domainurl: ##DomainURL##
---

# Auto fit columns in Angular Treegrid component

The [`autoFitColumns`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#autofitcolumns) method resizes the column to fit the widest cell's content without wrapping. You can autofit a specific column at initial rendering by invoking the [`autoFitColumns`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#autofitcolumns) method in [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#databound) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs1" %}

> You can autofit all the columns by invoking the [`autoFitColumns`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#autofitcolumns) method without column names.