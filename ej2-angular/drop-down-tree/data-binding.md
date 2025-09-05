---
layout: post
title: Data binding in Angular Dropdown Tree component | Syncfusion
description: Learn here all about Data binding in Syncfusion Angular Dropdown Tree component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dropdown Tree
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Angular Dropdown Tree component

The Dropdown Tree component provides flexible data binding capabilities to display hierarchical data from various sources. Data binding is essential for populating the Dropdown Tree with dynamic content and can be configured through the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-tree/fieldsModel/#datasource) property, which is a member of the [`fields`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-tree/#fields) property. This enables seamless integration with both local data arrays and remote data services.

The [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-tree/fieldsModel/#datasource) property supports array of JavaScript objects and `DataManager`. It also supports different kinds of data services such as OData, OData V4, Web API, URL, and JSON with the help of `DataManager` adaptors.

The Dropdown Tree supports `load on demand` (lazy loading) functionality, which optimizes performance by reducing bandwidth consumption when working with large datasets. By default, the `loadOnDemand` is set to false. When enabled through the `treeSettings` property, it loads only the first level items initially. Child items are loaded dynamically when their parent item is expanded, based on the `parentValue` or `child` field mapping.

## Local data

To bind local data to the Dropdown Tree, assign an array of JavaScript objects to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-tree/fieldsModel/#datasource) property.

The Dropdown Tree component requires three essential fields (**value**, **text**, and **parentValue**) to render local data source effectively. When field mappings are not explicitly specified, the component uses default values as the mapping fields. The **value** field serves as the unique identifier, **text** displays the node content, and **parentValue** establishes the hierarchical relationship. Local data source can also be provided as an instance of the `DataManager`. The component supports two primary local data binding methods.

* Hierarchical data

* Self-referential data

### Hierarchical data

Dropdown Tree can be populated with hierarchical data source that contains nested arrays of JSON objects. This structure represents parent-child relationships through nested object arrays rather than reference-based relationships. You can directly map the hierarchical data and the field members with corresponding key values from the hierarchical data to the [`fields`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-tree/#fields) property.

In the following example, **code**, **name**, and **countries** columns from the hierarchical data have been mapped to **value**, **text**, and **child** fields, respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdowntree/data-binding/hierarchial-data-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/data-binding/hierarchial-data-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdowntree/data-binding/hierarchial-data-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdowntree/data-binding/hierarchial-data-cs1" %}

### Self-referential data

Dropdown Tree can be populated from self-referential data structure that contains an array of JSON objects with [`parentValue`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-tree/fieldsModel/#parentvalue) mapping. This structure represents hierarchical relationships through parent-child references within a flat array, where each item contains a reference to its parent item.

You can directly assign the self-referential data and map all the field members with corresponding key values from self-referential data to the [`fields`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-tree/#fields) property.

To render the root level items, specify the parentValue as null or no need to specify the parentValue in the dataSource.

In the following example, **id**, **pid**, **hasChild**, and **name** columns from self-referential data have been mapped to **value**, **parentValue**, **hasChildren**, and **text** fields, respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdowntree/data-binding/self-referential-data-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/data-binding/self-referential-data-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdowntree/data-binding/self-referential-data-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdowntree/data-binding/self-referential-data-cs1" %}

## Remote data

Dropdown Tree can also be populated from remote data services with the help of the `DataManager` control and `Query` property. This approach is ideal for working with large datasets or when data needs to be fetched from external sources.

The component supports different kinds of data services such as OData, OData V4, Web API, URL, and JSON with the help of `DataManager` adaptors.

You can assign service data as an instance of `DataManager` to the `dataSource` property. To interact with remote data source, you must provide the endpoint `url`.

The `DataManager` that acts as an interface between the service endpoint and the Dropdown Tree requires the following information to interact with service endpoint properly.

* `DataManager->url`: Defines the service endpoint to fetch data.

* `DataManager->adaptor`: Defines the adaptor option. By default, ODataAdaptor is used for remote binding.

Adaptor is responsible for processing response and request from/to the service endpoint. The `@syncfusion/ej2-data` package provides some predefined adaptors designed to interact with service endpoints. They are:

* `UrlAdaptor`: Used to interact with remote services. This is the base adaptor for all remote based adaptors.

* `ODataAdaptor`: Used to interact with OData endpoints.

* `ODataV4Adaptor`: Used to interact with OData V4 endpoints.

* `WebApiAdaptor`: Used to interact with Web API created under OData standards.

* `WebMethodAdaptor`: Used to interact with web methods.

In the following example, `ODataV4Adaptor` is used to fetch data from the remote services. The **EmployeeID**, **FirstName**, and **EmployeeID** columns from the Employees table have been mapped to **value**, **text**, and **hasChildren** fields respectively for first level items.

The **OrderID**, **EmployeeID**, and **ShipName** columns from the orders table have been mapped to **value**, **parentValue**, and **text** fields respectively for second level items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdowntree/data-binding/remote-data-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/data-binding/remote-data-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdowntree/data-binding/remote-data-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdowntree/data-binding/remote-data-cs1" %}