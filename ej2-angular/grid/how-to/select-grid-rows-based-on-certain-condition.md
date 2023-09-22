---
layout: post
title: Select grid rows based on certain condition in Angular Grid component | Syncfusion
description: Learn here all about Select grid rows based on certain condition in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Select grid rows based on certain condition 
documentation: ug
domainurl: ##DomainURL##
---

# Select grid rows based on certain condition in Angular Grid component

You can select the specific row in the grid based on a certain condition by using the [`selectRows`](https://ej2.syncfusion.com/angular/documentation/api/grid/#selectrows) method in the [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event of Grid.

In the below demo, we have selected the grid rows only when **EmployeeID** column value greater than **3**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-column-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-column-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-column-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-column-cs5" %}