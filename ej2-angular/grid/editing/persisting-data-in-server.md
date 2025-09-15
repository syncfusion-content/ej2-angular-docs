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

The Syncfusion Angular Grid component supports persisting edited data to a backend database using RESTful web services. All CRUD (Create, Read, Update, Delete) actions performed within the grid are managed by the [DataManager](../../data), allowing server-side data binding and real-time updates to the server. This ensures that edits made in the UI are immediately reflected and stored on the backend, maintaining data integrity.

> The ODataAdaptor persists data in the server using the OData protocol.

Syncfusion offers a variety of adaptors for integrating with different server protocols and APIs, enabling seamless interaction with RESTful services. The following adaptor types are supported for persisting data in the Syncfusion Angular Grid component:

**URL Adaptor**

The UrlAdaptor provides the foundational mechanism for communication with remote data services via simple URLs. It enables data binding and CRUD operations by connecting to custom API services or any remote endpoint. This adaptor is optimal when using a custom API with unique logic for data handling and server-side persistence.

See full configuration guidance in the [URL Adaptor Documentation](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/url-adaptor).

**OData v4 Adaptor**

The ODataV4Adaptor enables rich integration with OData V4-compliant services, supporting advanced querying, sorting, filtering, and full CRUD operations. It streamlines communication between the Syncfusion Grid and OData V4 endpoints.

See setup instructions and feature reference in the [OData v4 Adaptor Documentation](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/odatav4-adaptor).

**Web API Adaptor**

The WebApiAdaptor extends ODataAdaptor functionality to interact with OData-based Web APIs. It ensures efficient communication with modern web services that expose data via OData endpoints, supporting robust data retrieval and manipulation directly from the Syncfusion Grid.

Learn more in the [Web API Adaptor documentation](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/web-api-adaptor).

**Remote Save Adaptor**

The RemoteSaveAdaptor lets you process grid actions—such as sorting, filtering, searching, and paging—mostly on the client, while delegating CRUD operations (create, update, delete) to the server for reliable data persistence. This reduces unnecessary server requests during data navigation and only transmits essential changes.

Detailed instructions are available in the [Remote Save Adaptor Documentation](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/remote-save-adaptor).

**WebMethodAdaptor**

The WebMethodAdaptor facilitates remote data binding using web methods. It transmits query parameters within an encapsulated object named `value`—allowing structured, secure communication between client-side components and server web methods.

For configuration, refer to [Web Method Adaptor documentation](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/web-method-adaptor).

**GraphQL Adaptor**

GraphQL provides a modern, flexible approach for APIs, enabling clients to fetch only the data they need in a single call. The GraphQLAdaptor seamlessly connects the Syncfusion Grid to GraphQL servers, supporting efficient data querying and full CRUD operation flow by leveraging GraphQL's powerful query language.

Refer to the [GraphQL Adaptor documentation](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/graphql-adaptor) for setup details, advanced features, and examples.

