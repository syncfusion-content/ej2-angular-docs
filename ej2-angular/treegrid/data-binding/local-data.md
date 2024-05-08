---
layout: post
title: Local data in Angular Treegrid component | Syncfusion
description: Learn here all about Local data in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Local data 
documentation: ug
domainurl: ##DomainURL##
---

# Local data in Angular Treegrid component

In Local Data binding, data source for rendering the TreeGrid control is retrieved from the same application locally.

Two types of Data binding are possible with the TreeGrid control.

* Hierarchical Datasource binding
* Self-Referential Data binding (Flat Data)

To bind local data to the treegrid, you can assign a JavaScript object array to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#datasource) property. The local data source can also be provided as an instance of the `DataManager`.

> By default, `DataManager` uses `JsonAdaptor` for local data-binding.

## Hierarchy data source binding

The [`childMapping`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#childMapping) property is used to map the child records in hierarchy data source.

The following code example shows you how to bind the hierarchical local data into the TreeGrid control.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/data-binding-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/data-binding-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/data-binding-cs2" %}

> * Remote data binding is not supported for Hierarchy Data.

## Self-Referential data binding (Flat data)

TreeGrid is rendered from Self-Referential data structures by providing two fields, ID field and parent ID field.

* **ID Field**: This field contains unique values used to identify nodes. Its name is assigned to the [`idMapping`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#idmapping) property.
* **Parent ID Field**: This field contains values that indicate parent nodes. Its name is assigned to the [`parentIdMapping`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#parentidmapping) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/data-binding-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/data-binding-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/data-binding-cs3" %}

> Herewith we have provided list of reserved properties and the purpose used in TreeGrid. We recommend to avoid these reserved properties for Internal purpose(To get rid of conflicts).

Reserved keywords | Purpose
-----|-----
childRecords | Specifies the childRecords of a parentData
hasChildRecords | Specifies whether the record contains child records
hasFilteredChildRecords | Specifies whether the record contains filtered child records
expanded | Specifies whether the child records are expanded
parentItem | Specifies the parentItem of childRecords
index | Specifies the index of current record
level | Specifies the hierarchy level of record
filterLevel | Specifies the hierarchy level of filtered record
parentIdMapping | Specifies the parentID
uniqueID | Specifies the unique ID of a record
parentUniqueID | Specifies the parent Unique ID of a record
checkboxState | Specifies the checkbox state of a record
isSummaryRow | Specifies the summary of a record
taskData | Specifies the main data
primaryParent | Specifies the Primary data

## Refresh the data source

Add or delete the data source through an external button. To reflect the data source changes in the tree grid, you need to invoke the [refresh](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#refresh) method.

Please follow the below steps to refresh the tree grid after changing the data source:

**Step 1**:

Add or delete the datasource record by using the following code:

```typescript
    this.treegrid.dataSource.unshift(data); // Add a new record.

    this.treegrid.dataSource.splice(selectedRow, 1); // Delete a record.

```

**Step 2**:

Refresh the tree grid after changing the datasource by using the `refresh` method.

```typescript
    this.treegrid.refresh(); // Refresh the tree grid.

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-datasource-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-datasource-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/refresh-datasource-cs1" %}

> Get the content of the tree grid by using the [`getContent`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcontent) method.
> Get the table content by using the [`getContentTable`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcontenttable) method in the tree grid.
> Destroy the component by using the [`destroy`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#destroy) method in the tree grid.