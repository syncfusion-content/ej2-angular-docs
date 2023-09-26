---
layout: post
title: Add parameter for filtering in Angular Treegrid component | Syncfusion
description: Learn here all about Add parameter for filtering in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Add parameter for filtering 
documentation: ug
domainurl: ##DomainURL##
---

# Add parameter for filtering in Angular Treegrid component

You can customize the default settings of the components which are used in Menu filter by using params of filter property in column definition.
In the below sample, TaskID and Duration Columns are numeric columns, while opening the filter dialog you can see that NumericTextBox with spin button is displayed to change/set the filter value. Now using the params option we hide the spin button in NumericTextBox for TaskID Column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/refresh-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/refresh-cs1" %}

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.