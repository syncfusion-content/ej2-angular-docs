---
layout: post
title: Persisting data in server in Angular Grid component | Syncfusion
description: Learn here all about Persisting data in server in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Persisting data in server 
documentation: ug
domainurl: ##DomainURL##
---

# Persisting data in server in Angular Grid component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component allows data edited within the grid to be persisted in a database using RESTful web services. All CRUD (Create, Read, Update, Delete) operations within the grid are handled by the [DataManager](../../data), which can bind server-side data and send updates to the server. This capability is Essential<sup style="font-size:70%">&reg;</sup> for maintaining data integrity and ensuring that changes made in the UI are reflected in the backend.

> For your information, the ODataAdaptor persists data in the server as per OData protocol.

Syncfusion<sup style="font-size:70%">&reg;</sup> provides multiple adaptors to handle different server protocols and APIs, enabling smooth integration with RESTful services. Below are the various adaptors you can use to persist data in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component.

**Using URL adaptor**

The UrlAdaptor is the base adaptor that facilitates communication between remote data services and the UI component. It allows seamless data binding and interaction with custom API services or any remote service through URLs. The UrlAdaptor is particularly useful when a custom API service has unique logic for handling data and CRUD operations. 

For further details on configuration, refer to the [URL adaptor Documentation]( https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/url-adaptor)

**Using OData v4 adaptor**

The ODataV4Adaptor in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid Component facilitates seamless integration with OData V4 services, allowing for efficient data fetching and manipulation. You can perform CRUD operations using the ODataV4Adaptor in your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component.

For further details on configuration, refer to the [OData v4 adaptor Documentation]( https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/odatav4-adaptor).

**Using Web API adaptor**

The WebApiAdaptor extends the capabilities of the ODataAdaptor and is designed to interact with Web APIs created with OData endpoints. This adaptor ensures seamless communication between the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid and OData-based Web APIs, enabling efficient data retrieval and manipulation. 

For further details on configuration, refer to the [Web API Adaptor documentation]( https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/web-api-adaptor).

**Using Remote Save adaptor**

The RemoteSaveAdaptor in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component allows you to perform grid actions such as sorting, filtering, searching, and paging primarily on the client side, while handling CRUD operations (updating, inserting, and removing data) on the server side for data persistence. This approach optimizes your experience by minimizing unnecessary server interactions.

For further details on configuration, refer to the[Remote Save Adaptor Documentation]( https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/remote-save-adaptor)

**WebMethodAdaptor**

The WebMethodAdaptor facilitates data binding from remote services using web methods. This adaptor sends query parameters encapsulated within an object named value, allowing efficient communication between the client-side application and the server.

For further details on configuration, refer to the [Web API Adaptor documentation](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/web-method-adaptor).

**Using GraphQL adaptor**

GraphQL is a powerful query language for APIs designed to provide a more efficient alternative to traditional REST APIs. It allows you to precisely fetch the data you need, reducing over-fetching and under-fetching of data. GraphQL offers a flexible and expressive syntax for querying, enabling clients to request only the specific data they require.

The GraphQLAdaptor simplifies the interaction between the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid and GraphQL servers, allowing for efficient data retrieval with support for various operations such as CRUD (Create, Read, Update, Delete).

For further details on configuration, refer to the [GraphQL adaptor documentation]( https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/graphql-adaptor)
