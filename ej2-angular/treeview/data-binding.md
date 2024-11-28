---
layout: post
title: Data binding in Angular Treeview component | Syncfusion
description: Learn here all about Data binding in Syncfusion Angular Treeview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data binding 
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Angular Treeview component

The TreeView component provides the option to load data either from local data sources or from remote data services.
This can be done through `dataSource` property that is a member of the [fields](https://ej2.syncfusion.com/angular/documentation/api/treeview#fields) property.
The `dataSource` property supports array of JavaScript objects and `DataManager`.
It also supports different kinds of data services such as OData, OData V4, Web API, URL, and JSON with the help of `DataManager` adaptors.

TreeView has `load on demand` (Lazy load), by default. It reduces the bandwidth size when consuming huge data.
It loads first level nodes initially, and when parent node is expanded,  loads the child nodes based on the `parentID/child` member.

By default, the `loadOnDemand` is set to true. By disabling this property, all the tree nodes are rendered at the beginning itself.

You can use the [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/treeview#databound) event to perform actions.
This event will be triggered once the data source is populated in the TreeView.

## Local data

To bind local data to the TreeView, you can assign a JavaScript object array to the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/treeview/fieldsSettingsModel#datasource) property.
The TreeView component requires three  fields (id, text, and parentID) to render local data source.
When mapper fields are not specified, it takes the default values as the mapping fields. Local data source can also be
provided as an instance of the `DataManager`. It supports two kinds of local data binding methods.

* Hierarchical data

* Self-referential data

### Hierarchical data

TreeView can be populated with hierarchical data source that contains nested array of JSON objects.
You can directly assign hierarchical data to the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/treeview/fieldsSettingsModel#datasource) property, and map all the field members with corresponding keys from the hierarchical data to `fields` property.

In the following example, **code**, **name**, and **countries** columns from hierarchical data have been mapped to **id**, **child**, and **text** fields, respectively.

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

TreeView can be populated from self-referential data structure that contains array of JSON objects with `parentID` mapping.

You can directly assign self-referential data to the `dataSource` property, and map all the field members with corresponding keys from self-referential data to [fields](https://ej2.syncfusion.com/angular/documentation/api/treeview#fields) property.

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

TreeView can also be populated from a remote data service with the help of `DataManager` component
and `Query` property.

It supports different kinds of data services such as OData, OData V4, Web API, URL, and JSON with the help of `DataManager` adaptors.

You can assign service data as an instance of `DataManager` to the `dataSource` property. To interact with remote data source, you have to provide the endpoint `url`.

The `DataManager` that acts as an interface between the service endpoint and the TreeView requires the following information to interact with service endpoint properly.

* `DataManager->url`: Defines the service endpoint to fetch data.

* `DataManager->adaptor`: Defines the adaptor option. By default, ODataAdaptor is used for remote binding.

Adaptor is responsible for processing response and request from/to the service endpoint. The `@syncfusion/ej2-data` package provides some predefined adaptors  designed to interact with service endpoints. They are,

* `UrlAdaptor`: Used to interact with remote services. This is the base adaptor for all remote based adaptors.

* `ODataAdaptor`: Used to interact with OData endpoints.

* `ODataV4Adaptor`: Used to interact with OData V4 endpoints.

* `WebApiAdaptor`: Used to interact with Web API created under OData standards.

* `WebMethodAdaptor`: Used to interact with web methods.

In the following example, `ODataV4Adaptor` is  used to fetch data from remote services. The **EmployeeID**, **FirstName**, and **Title** columns from Employees table have been mapped to **id**, **text**, and **hasChildren** fields respectively for first level nodes.

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
