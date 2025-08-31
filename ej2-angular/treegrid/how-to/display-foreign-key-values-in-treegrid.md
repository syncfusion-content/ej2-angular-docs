---
layout: post
title: Display foreign key values in TreeGrid in Angular TreeGrid component | Syncfusion
description: Learn how to display foreign key values in the Syncfusion Angular TreeGrid component and render dropdown lists using external data sources for hierarchical data.
platform: ej2-angular
control: Display foreign key values in treegrid 
documentation: ug
domainurl: ##DomainURL##
---

# Display foreign key values in TreeGrid in Angular TreeGrid component

The TreeGrid component uses a hierarchical data binding approach and does not provide built-in support for foreign key data sources.

To display foreign key values during initial rendering, utilize the [`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) event of the TreeGrid component. Additionally, by using the [`editType`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edittype) and [`columns.edit`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edit) properties of the TreeGrid Column, it is possible to render a DropDownList with an external or foreign data source.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/refresh-cs7" %}

> For feature highlights and additional guidance, see the [Angular TreeGrid feature tour page](https://www.syncfusion.com/angular-components/angular-tree-grid). More comprehensive demonstrations for data presentation and manipulation are available in the [Angular TreeGrid example](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview).