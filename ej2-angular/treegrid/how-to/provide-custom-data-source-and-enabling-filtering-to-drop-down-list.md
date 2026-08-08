---
layout: post
title: Angular TreeGrid DropDownList Data & Filtering | Syncfusion
description: Learn how to provide a custom data source and enable filtering for DropDownList in the Angular TreeGrid with column edit parameters.
platform: ej2-angular
control: Provide custom data source and enabling filtering to drop down list 
documentation: ug
domainurl: ##DomainURL##
---

# Custom Data Source and Filtering for DropDownList in Angular TreeGrid

A custom data source can be provided to the DropDownList by using the **params** property within [`columns.edit`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#edit) settings.

When specifying a new data source in the edit params, a new **query** property must be defined for the DropDownList as shown below:

```typescript
  public priorityParams : IEditCell = {
    params:   {
      actionComplete: () => false,
      allowFiltering: true,
      dataSource: new DataManager(this.priorityData),
      fields: { text: "countryName", value: "countryName"},
      query: new Query()
    }
  };
```

Filtering can be enabled for the DropDownList by setting the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#allowfiltering) property to **true** in the edit params.

The following demo demonstrates rendering the DropDownList with a custom [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#datasource) for the *Priority* column, with filtering enabled to allow searching DropDownList items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/refresh-cs12" %}

> For more guidance on feature capabilities, visit the [`Angular TreeGrid feature tour page`](https://www.syncfusion.com/angular-components/angular-tree-grid). Additional examples for organizing and editing data can be found in the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview).