---
layout: post
title: Display foreign key values in treegrid in Angular Treegrid component | Syncfusion
description: Learn here all about Display foreign key values in treegrid in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Display foreign key values in treegrid 
documentation: ug
domainurl: ##DomainURL##
---

# Display foreign key values in treegrid in Angular Treegrid component

Since Tree Grid Databinding concept is of hierarchy relationship, we do not provide in-built support for foreignKey datasource.

To display the foreignKey value at initial rendering, we can use the [`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) event of the Tree Grid and also by using the [`editType`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edittype) and [`columns.edit`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edit) properties of Tree Grid Column, we can render Dropdownlist with external or foreign dataSource.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/refresh-cs7" %}

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.