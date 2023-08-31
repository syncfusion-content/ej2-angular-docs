---
layout: post
title: Select treegrid rows based on certain condition in Angular Treegrid component | Syncfusion
description: Learn here all about Select treegrid rows based on certain condition in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Select treegrid rows based on certain condition 
documentation: ug
domainurl: ##DomainURL##
---

# Select treegrid rows based on certain condition in Angular Treegrid component

You can select the specific row in the Tree Grid based on a certain condition by using the [`selectRows`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#selectrows) method in the [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#databound) event of Tree Grid.

In the below demo, we have selected the Tree Grid rows only when *Duration* column value greater than *4*.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs16/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/refresh-cs16/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs16/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/refresh-cs16" %}

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.