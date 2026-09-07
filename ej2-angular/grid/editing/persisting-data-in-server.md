---
layout: post
title: Angular Grid Server Data Persistence | Syncfusion
description: Learn how to persist Angular Data Grid changes to a server, send CRUD requests, handle server responses, and synchronize data using adaptors.
platform: ej2-angular
control: Persisting data in server 
documentation: ug
domainurl: ##DomainURL##
---

# Server Data Persistence in Angular Data Grid

The [Angular Data Grid](https://www.syncfusion.com/angular-components/angular-data-grid) component allows data edited within the grid to be persisted in a database using RESTful web services. The [DataManager](https://ej2.syncfusion.com/angular/documentation/data/getting-started) handles CRUD (Create, Read, Update, Delete) operations, binds server-side data, and sends updates to the server. This capability helps maintain data integrity and keeps UI changes synchronized with the backend.

Syncfusion<sup style="font-size:70%">&reg;</sup> provides multiple adaptors to handle different server protocols and APIs, enabling smooth integration with RESTful services. The following adaptors are available to persist data in the Data Grid component.

> The ODataAdaptor persists data in the server using the OData protocol.

## URL Adaptor

The [UrlAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors#url-adaptor) is the base adaptor that facilitates communication between remote data services and the UI component. It allows seamless data binding and interaction with custom API services or any remote service through URLs. The UrlAdaptor is particularly useful when a custom API service has unique logic for handling data and CRUD operations.

- For configuration details and examples, refer to the [URL adaptor Documentation](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/url-adaptor).
- For CRUD examples, see [UrlAdaptor CRUD operations](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/url-adaptor#handling-crud-operations).

## Remote Save Adaptor

The [RemoteSaveAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors/remote-save-adaptor)  in the Data Grid component allows grid actions such as sorting, filtering, searching, and paging to be performed primarily on the client side, while handling CRUD operations such as updating, inserting, and removing data on the server side.

Detailed instructions are available in the [Remote Save Adaptor Documentation](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/remote-save-adaptor).

## OData V4 Adaptor

The [ODataV4Adaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors#odatav4-adaptor) in the Data Grid Component facilitates seamless integration with OData V4 services, allowing for efficient data fetching and manipulation. CRUD operations can be performed using the ODataV4Adaptor in the Data Grid component.

- For configuration details and examples, refer to the [OData V4 Adaptor Documentation](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/odatav4-adaptor).
- For CRUD examples, see [OData V4 Adaptor CRUD operations](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/odatav4-adaptor#handling-crud-operations).

## Web API Adaptor

The [WebApiAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors#web-api-adaptor) extends the capabilities of the ODataAdaptor and is designed to interact with Web APIs created with OData endpoints. This adaptor ensures seamless communication between the Data Grid and OData-based Web APIs, enabling efficient data retrieval and manipulation.

- For configuration details and examples, refer to the [Web API Adaptor documentation](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/web-api-adaptor).
- For CRUD examples, see [Web API Adaptor CRUD operations](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/web-api-adaptor#handling-crud-operations).

## GraphQL Adaptor

The [GraphQLAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors#graphql-adaptor) enables the Data Grid to communicate with GraphQL services and perform CRUD operations through GraphQL queries and mutations. It supports efficient data retrieval by allowing applications to request only the required data from the server.

Refer to the [GraphQL Adaptor documentation](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/graphql-adaptor) for setup details, advanced features, and examples.

## Web Method Adaptor

The [WebMethodAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors#webmethod-adaptor) facilitates data binding from remote services using web methods. This adaptor sends query parameters encapsulated within an object named value, allowing efficient communication between the client-side application and the server.

- For configuration, refer to [Web Method Adaptor documentation](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/web-method-adaptor).
- For CRUD examples, see [Web API Adaptor CRUD operations](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/web-method-adaptor#handling-crud-operations).

