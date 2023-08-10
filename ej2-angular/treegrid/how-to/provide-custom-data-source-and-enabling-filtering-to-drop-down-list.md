---
layout: post
title: Provide custom data source and enabling filtering to drop down list in Angular Treegrid component | Syncfusion
description: Learn here all about Provide custom data source and enabling filtering to drop down list in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Provide custom data source and enabling filtering to drop down list 
documentation: ug
domainurl: ##DomainURL##
---

# Provide custom data source and enabling filtering to drop down list in Angular Treegrid component

You can provide data source to the DropDownList by using the **params** of [`columns.edit`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edit) property.

While setting new data source using edit params, you must specify a new **query** property for the DropDownList as follows,

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

You can also enable filtering for the DropDownList by passing the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#allowfiltering) as **true** to the edit params.

In the below demo, DropDownList is rendered with custom [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#datasource) for the *Priority* column and enabled filtering to search DropDownList items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs12/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/refresh-cs12/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs12/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/refresh-cs12" %}

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-ui-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.