---
layout: post
title: Local data in Angular TreeGrid component | Syncfusion
description: Learn to bind local data to Syncfusion Angular TreeGrid with support for hierarchical and self-referential (flat) data structures.
platform: ej2-angular
control: Local data
documentation: ug
domainurl: ##DomainURL##
---

# Local data in Angular TreeGrid component

In local data binding, the data source for rendering the TreeGrid control is retrieved from within the same application.

There are two types of data binding supported in the TreeGrid component:

* Hierarchical data source binding
* Self-referential data binding (flat data)

To bind local data to the TreeGrid, assign a JavaScript object array to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#datasource) property. You may also provide a `DataManager` instance as the data source.

> By default, `DataManager` uses `JsonAdaptor` for local data binding.

## Hierarchical data source binding

Use the [`childMapping`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#childMapping) property to map child records in hierarchical data sources.

The following code example shows how to bind hierarchical local data to the TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/data-binding-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/data-binding-cs2/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/data-binding-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/data-binding-cs2" %}

> * Remote data binding is not supported for hierarchical data sources.

## Self-referential data binding (flat data)

The TreeGrid can render data from self-referential (flat) data structures by specifying two fields: an ID field and a parent ID field.

* **ID Field**: Contains unique values that identify each node. Assign this field to the [`idMapping`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#idmapping) property.
* **Parent ID Field**: Contains values representing parent nodes. Assign this field to the [`parentIdMapping`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#parentidmapping) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/data-binding-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/data-binding-cs3/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/data-binding-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/data-binding-cs3" %}

> Below is a list of reserved properties used internally by TreeGrid. To avoid conflicts, do not use these property names in your data models.

Reserved keywords | Purpose
-----|-----
childRecords | Specifies the child records of a parent data row
hasChildRecords | Indicates whether the record contains child records
hasFilteredChildRecords | Indicates whether the record contains filtered child records
expanded | Indicates whether the child records are expanded
parentItem | Specifies the parent item for child records
index | Represents the index of the current record
level | Indicates the hierarchy level of the record
filterLevel | Indicates the hierarchy level of a filtered record
parentIdMapping | Specifies the parent ID
uniqueID | Specifies the unique ID of a record
parentUniqueID | Specifies the parent unique ID of a record
checkboxState | Indicates the checkbox state of a record
isSummaryRow | Specifies if the record is a summary row
taskData | Specifies the main data of a task record
primaryParent | Specifies the primary parent data

## Refresh the data source

To add or delete data source records externally and reflect these changes in the TreeGrid, invoke the [`refresh`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#refresh) method after updating the data source.

**Step 1**:

Add or delete records in the data source as follows:

```typescript
this.treegrid.dataSource.unshift(data); // Add a new record.

this.treegrid.dataSource.splice(selectedRow, 1); // Delete a record.
```

**Step 2**:

After modifying the data source, refresh the TreeGrid:

```typescript
this.treegrid.refresh(); // Refresh the TreeGrid.
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-datasource-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/refresh-datasource-cs1/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-datasource-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/refresh-datasource-cs1" %}

## Immutable mode

Immutable mode in the Syncfusion TreeGrid is designed to optimize re-rendering performance by utilizing the object reference and [deep comparison](https://dmitripavlutin.com/how-to-compare-objects-in-javascript/#4-deep-equality) concept. When performing the TreeGrid actions, it will only re-render the modified or newly added rows and prevent the re-rendering of the unchanged rows.

To enable this feature, you need to set the [enableImmutableMode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#enableimmutablemode) property as **true**.

The following example demonstrates how to enable immutable mode:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/immutable-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/immutable-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/immutable-cs1" %}

> * This feature uses the primary key value for data comparison. Set the [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#isprimarykey) column to ensure correct row identification.

### Limitations

The following features are not supported when immutable mode is enabled:

* Frozen rows and columns
* Row Template
* Detail Template
* Column reorder
* Virtualization

> Access the content of the TreeGrid using the [`getContent`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcontent) method.
> Access the table content by using the [`getContentTable`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcontenttable) method.
> Destroy the component programmatically using the [`destroy`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#destroy) method.
