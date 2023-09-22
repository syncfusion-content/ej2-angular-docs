---
layout: post
title: Local data in Angular Grid component | Syncfusion
description: Learn here all about Local data in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Local data 
documentation: ug
domainurl: ##DomainURL##
---

# Local data in Angular Grid component

To bind local data to the grid, you can assign a JavaScript object array to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource) property. The local data source can also be provided as an instance of the **DataManager**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/databinding-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/databinding-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/databinding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/databinding-cs1" %}

> By default, **DataManager** uses **JsonAdaptor** for local data-binding.

## Refresh the data source

You can add/delete the datasource records through an external button. To reflect the datasource changes in grid, you need to invoke the [`refresh`](https://ej2.syncfusion.com/angular/documentation/api/grid/#refresh) method. Please follow the below steps to refresh the grid after datasource change.

**Step 1**: Add/delete the datasource record by using the following code.

```typescript
this.grid.dataSource.unshift(data); // Add a new record.
this.grid.dataSource.splice(selectedRow, 1); // Delete a record.
```

**Step 2**: Refresh the grid after the datasource change by using the [`refresh`](https://ej2.syncfusion.com/angular/documentation/api/grid/#refresh) method.

```typescript
    this.grid.refresh(); // Refresh the Grid.
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/change-headertext-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/change-headertext-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/change-headertext-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/change-headertext-cs2" %}