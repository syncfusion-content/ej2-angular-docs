---
layout: post
title: Data binding in Angular TreeView component | Syncfusion
description: Learn here all about Data binding in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Angular TreeView component

The TreeView component provides flexible data binding capabilities to display hierarchical data from various sources. Data binding is essential for populating the TreeView with dynamic content and can be configured through the `dataSource` property, which is a member of the [fields](https://ej2.syncfusion.com/angular/documentation/api/treeview/#fields) property. This enables seamless integration with both local data arrays and remote data services.

The `dataSource` property supports array of JavaScript objects and `DataManager`. It also supports different kinds of data services such as OData, OData V4, Web API, URL, and JSON with the help of `DataManager` adaptors.

TreeView implements `load on demand` (lazy loading) functionality by default to optimize performance when working with large datasets. This reduces bandwidth usage when consuming large amounts of data. The component loads first level nodes initially, and when a parent node is expanded, it dynamically loads the child nodes based on the `parentID/child` member. This approach significantly improves initial rendering performance and reduces memory consumption.

By default, the `loadOnDemand` property is set to true. When this property is disabled, all tree nodes are rendered at the beginning, which may impact performance with large datasets but provides immediate access to the entire tree structure.

You can use the [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#databound) event to perform actions. This event will be triggered once the data source is populated in the TreeView.

## Local data

Local data binding enables the TreeView to work with JavaScript object arrays stored in memory. To bind local data to the TreeView, assign a JavaScript object array to the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/treeview/fieldsSettingsModel/#datasource) property.

The TreeView component requires three essential fields to render local data source effectively:

- **id**: Unique identifier for each node (default: "id")
- **text**: Display text for tree nodes (default: "text") 
- **parentID**: Reference to parent node identifier for hierarchical relationships (default: "parentID")

When mapper fields are not specified, it takes the default values as the mapping fields. Local data source can also be provided as an instance of the `DataManager`. It supports two kinds of local data binding methods.

* Hierarchical data - Nested JSON objects with child arrays
* Self-referential data - Flat arrays with parent-child relationships

### Hierarchical data

Hierarchical data binding works with nested data structures where each parent node contains a child array property. This approach is ideal when your data source naturally represents the tree structure with nested objects. You can directly assign hierarchical data to the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/treeview/fieldsSettingsModel/#datasource) property, and map all the field members with corresponding keys from the hierarchical data to [fields](https://ej2.syncfusion.com/angular/documentation/api/treeview/#fields) property.

In the following example, **code**, **name**, and **countries** columns from hierarchical data have been mapped to **id**, **text**, and **child** fields, respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/getting-started-cs3/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/getting-started-cs3" %}

### Self-referential Data

Self-referential data binding is designed for flat data structures where parent-child relationships are established through identifier references. This approach uses an array of JavaScript objects where each object contains a `parentID` field that references another object's `id` field, creating the hierarchical relationship.

You can directly assign self-referential data to the `dataSource` property, and map all the field members with corresponding keys from self-referential data to [fields](https://ej2.syncfusion.com/angular/documentation/api/treeview/#fields) property.

In the following example, **id**, **pid**, **hasChild**, and **name** columns from self-referential data have been mapped to **id**, **parentID**, **hasChildren**, and **text** fields, respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/getting-started-cs4/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/getting-started-cs4" %}

## Remote data

Remote data binding enables the TreeView to fetch data from external services and APIs. TreeView can be populated from a remote data service with the help of `DataManager` component and `Query` property, providing seamless integration with backend systems.

The component supports different kinds of data services such as OData, OData V4, Web API, URL, and JSON with the help of `DataManager` adaptors. This flexibility allows integration with various backend technologies and data formats.

You can assign service data as an instance of `DataManager` to the `dataSource` property. To interact with remote data source, you must provide the endpoint `url` and configure the appropriate adaptor for your service type.

The `DataManager` acts as an interface between the service endpoint and the TreeView, requiring the following essential information to interact with service endpoint properly:

* `DataManager->url`: Defines the service endpoint to fetch data.

* `DataManager->adaptor`: Defines the adaptor option. By default, ODataAdaptor is used for remote binding.

Adaptor is responsible for processing response and request from/to the service endpoint. The `@syncfusion/ej2-data` package provides several predefined adaptors designed to interact with specific service endpoints:

* `UrlAdaptor`: Used to interact with remote services. This is the base adaptor for all remote based adaptors.

* `ODataAdaptor`: Used to interact with OData endpoints.

* `ODataV4Adaptor`: Used to interact with OData V4 endpoints.

* `WebApiAdaptor`: Used to interact with Web API created under OData standards.

* `WebMethodAdaptor`: Used to interact with web methods.

In the following example, `ODataV4Adaptor` is used to fetch data from remote services. The **EmployeeID**, **FirstName**, and **Title** columns from Employees table have been mapped to **id**, **text**, and **hasChildren** fields respectively for first level nodes.

The **OrderID**, **EmployeeID**, and **ShipName** columns from orders table have been mapped to **id**, **parentID**, and **text** fields respectively for second level nodes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/getting-started-cs5/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/getting-started-cs5" %}