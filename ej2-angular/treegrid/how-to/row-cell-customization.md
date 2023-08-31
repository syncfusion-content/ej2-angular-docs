---
layout: post
title: Row cell customization in Angular Treegrid component | Syncfusion
description: Learn here all about Row cell customization in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row cell customization 
documentation: ug
domainurl: ##DomainURL##
---

# Row cell customization in Angular Treegrid component

In Tree Grid we can customize the row and cell using [`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) and [`rowDataBound`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdatabound) events of Tree Grid.

In the below demo, we customize and show the command buttons only for the parent rows using [`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) and [`rowDataBound`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdatabound) events of Tree Grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs15/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/refresh-cs15/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs15/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/refresh-cs15" %}

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.