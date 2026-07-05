---
layout: post
title: Angular Grid - Persisting Data in Server | Syncfusion
description: Angular Grid persisting data in server supports sending CRUD requests, handling server responses, and synchronizing grid updates using various data adaptors.
platform: ej2-angular
control: Persisting data in server 
documentation: ug
domainurl: ##DomainURL##
---

# Persisting Data in Server in Angular Grid Component

The [Angular Data Grid](https://www.syncfusion.com/angular-components/angular-data-grid) component allows data edited within the grid to be persisted in a database using RESTful web services. All CRUD (Create, Read, Update, Delete) operations within the grid are handled by the [DataManager](../../data), which can bind server-side data and send updates to the server. This capability is Essential<sup style="font-size:70%">&reg;</sup> for maintaining data integrity and ensuring that changes made in the UI are reflected in the backend.

> The ODataAdaptor persists data in the server using the OData protocol.

Syncfusion<sup style="font-size:70%">&reg;</sup> provides multiple adaptors to handle different server protocols and APIs, enabling smooth integration with RESTful services. Below are the various adaptors available to persist data in the Angular Data Grid component.

## URL Adaptor

The [UrlAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors#url-adaptor) is the base adaptor that facilitates communication between remote data services and the UI component. It allows seamless data binding and interaction with custom API services or any remote service through URLs. The UrlAdaptor is particularly useful when a custom API service has unique logic for handling data and CRUD operations.

For further details on configuration, refer to the [URL adaptor Documentation](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/url-adaptor)

## OData v4 Adaptor

The [ODataV4Adaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors#odatav4-adaptor) in the Angular Data Grid Component facilitates seamless integration with OData V4 services, allowing for efficient data fetching and manipulation. CRUD operations can be performed using the ODataV4Adaptor in the Angular Data Grid component.

See setup instructions and feature reference in the [OData v4 Adaptor Documentation](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/odatav4-adaptor).

## Web API Adaptor

The [WebApiAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors#web-api-adaptor) extends the capabilities of the ODataAdaptor and is designed to interact with Web APIs created with OData endpoints. This adaptor ensures seamless communication between the Angular Data Grid and OData-based Web APIs, enabling efficient data retrieval and manipulation.

Learn more in the [Web API Adaptor documentation](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/web-api-adaptor).

## Remote Save Adaptor

The `RemoteSaveAdaptor` in the Angular Data Grid component allows grid actions such as sorting, filtering, searching, and paging to be performed primarily on the client side, while handling CRUD operations (updating, inserting, and removing data) on the server side for data persistence. This approach optimizes performance by minimizing unnecessary server interactions.

Detailed instructions are available in the [Remote Save Adaptor Documentation](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/remote-save-adaptor).

## WebMethodAdaptor

The [WebMethodAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors#webmethod-adaptor) facilitates data binding from remote services using web methods. This adaptor sends query parameters encapsulated within an object named value, allowing efficient communication between the client-side application and the server.

For configuration, refer to [Web Method Adaptor documentation](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/web-method-adaptor).

## GraphQL Adaptor

GraphQL is a powerful query language for APIs designed to provide a more efficient alternative to traditional REST APIs. It allows precise data fetching, reducing over-fetching and under-fetching of data. GraphQL offers a flexible and expressive syntax for querying, enabling clients to request only the specific data they require.

The [GraphQLAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors#graphql-adaptor) simplifies the interaction between the Angular Data Grid and GraphQL servers, allowing for efficient data retrieval with support for various operations such as CRUD (Create, Read, Update, Delete).

Refer to the [GraphQL Adaptor documentation](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/graphql-adaptor) for setup details, advanced features, and examples.

