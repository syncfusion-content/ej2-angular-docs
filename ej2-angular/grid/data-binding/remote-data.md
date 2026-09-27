---
layout: post
title: Angular Grid Remote Data Binding | Syncfusion
description: Learn how to bind remote data sources in Angular Data Grid using adaptors, configure server-side operations, and manage data efficiently.
platform: ej2-angular
control: Remote data
documentation: ug
domainurl: ##DomainURL##
---

# Remote Data Binding in Angular Data Grid

Remote data binding enables the Data Grid to connect directly to external data services or databases through the dataSource property. This approach supports on‑demand, server‑side operations such as paging, sorting, filtering, and CRUD, making it ideal for efficiently handling large datasets.

For proper functionality, the server response must include two key properties:

- `result`: the records to display in the current viewport
- `count`: the total number of records in the dataset for pagination


## Bind remote data using DataManager

The Data Grid uses the DataManager library to connect with external data services or databases such as REST APIs, Web APIs, OData services, and GraphQL endpoints. The DataManager provides a unified interface for communication between the grid and different backends.

The DataManager relies on adaptors to establish the connection between the data service and the grid. Adaptors define how requests are generated and how responses are processed, ensuring that operations such as paging, sorting, filtering, grouping, and searching follow a consistent pattern.

Adaptors also provide native query support, automatically formatting requests in the expected structure. For example, the `ODataAdaptor` generates queries in OData format, while the `GraphQLAdaptor` builds queries according to GraphQL schema definitions. Server responses are then mapped into the grid’s required format (result and count), ensuring predictable integration across different backends.

| Integration type | Description | Learn more |
|------------------|-------------|------------|
| GraphQL | Connects to GraphQL endpoints for flexible data querying. | [GraphQLAdaptor](../connecting-to-adaptors/graphql-adaptor) |
| OData V4 Services | Connects to OData V4 services with built-in query support. | [ODataV4Adaptor](../connecting-to-adaptors/odatav4-adaptor) |
| Hybrid Data Binding | Performs data operations locally while saving CRUD changes to the server. | [RemoteSaveAdaptor](../connecting-to-adaptors/remote-save-adaptor) |
| REST APIs | Connects to REST-based services with custom endpoints and response formats. | [UrlAdaptor](../connecting-to-adaptors/url-adaptor) |
| REST APIs Using Web Methods | Connects to ASP.NET WebMethod-based services. | [WebMethodAdaptor](../connecting-to-adaptors/web-method-adaptor) |
| Web API Services | Connects to ASP.NET Web APIs and supports server-side data operations. | [WebApiAdaptor](../connecting-to-adaptors/webapi-adaptor) |
| Custom Remote Data | Integrates with custom remote data services and business-specific APIs. | [CustomAdaptor](../connecting-to-adaptors/custom-adaptor) |
| Microsoft SQL Server | Connects to Microsoft SQL Server databases using ADO.NET and Entity Framework. | [SQL Server](./connecting-to-database/microsoft-sql-server) |
| MySQL Server | Provides cross-platform data access for MySQL databases. | [MySQL Server](./connecting-to-database/mysql-server) |
| PostgreSQL | Delivers advanced relational capabilities with PostgreSQL databases. | [PostgreSQL](./connecting-to-database/postgresql-server) |
| SQLite | Supports embedded and local storage scenarios with SQLite databases. | [SQLite](./connecting-to-database/sqlite-server) |
| Entity Framework | Integrates with EF and EF Core-based applications. | [Entity Framework](./connecting-to-orm/entityframework) |
| Dapper | Offers lightweight SQL-based data access for applications. | [Dapper](../connecting-to-orm/dapper) |

The following code example demonstrates connecting the Data Grid to a REST API using `UrlAdaptor`. For other service types, replace `UrlAdaptor` with the appropriate adaptor (e.g., `WebApiAdaptor`, `ODataV4Adaptor`, `WebMethodAdaptor`, `RemoteSaveAdaptor`, or `GraphQLAdaptor`).

```typescript
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

@Component({
    imports: [GridModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data'>...</ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: DataManager;

    ngOnInit(): void {
        this.data = new DataManager({
          url: 'https://services.syncfusion.com/angular/production/api/Orders', // Replace with the actual API endpoint URL
          adaptor: new UrlAdaptor()
        });
    }
}
```

## Custom remote binding

The Data Grid supports custom remote binding, which provides complete control over remote data integration when built‑in adaptors do not meet specific application requirements. It enables direct control over how requests are sent to the backend and how responses are processed, making it suitable for unique APIs or specialized workflows.

The dataStateChange event is used to capture Data Grid actions such as paging, sorting, and filtering. Within this event, the application can construct the required queries, send them to the backend, and return the response in the expected format (result and count).

The Data Grid provides two key events for handling remote data operations.

The `dataStateChange` event is used to capture Data Grid actions such as paging, sorting, and filtering. Within this event, the application can construct the required queries, send them to the backend, and return the response in the expected format (result and count).

The `dataSourceChange` event is used to handle CRUD operations (Create, Read, Update, and Delete). This event allows the application to process changes made in the grid and synchronize them with the backend service. Refer to the [Custom Binding](./custom-binding) documentation.


```typescript
public dataStateChange(state: DataStateChangeEventArgs): void {
  // Fetch data from the service based on the current grid state (page, sort, filter)
  this.fetchData(state).then((result) => {
    this.data = {
      result: result.data,
      count: result.total
    };
  });
}

@Component({
    imports: [GridModule ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data | async' (dataStateChange)= 'dataStateChange($event)'>...</ejs-grid>`
 })
```

## Backend integration examples

Explore the ready‑to‑use samples that demonstrate how to integrate the Data Grid with different server‑side technologies. These demos provide practical guidance for connecting the grid to remote services, handling data operations, and ensuring seamless backend communication.

| Topic Name            | User Guide Link                                      | GitHub Sample                                                                 |
|-----------------------|------------------------------------------------------|-------------------------------------------------------------------------------|
| Django                | [Django guide](../connecting-to-backends/django-server)    | https://github.com/SyncfusionExamples/ej2-angular-grid-samples/tree/master/connecting-to-backends/syncfusion-angular-grid-with-django-server |
| Express.js            | [Express.js guide](../connecting-to-backends/express-js)   | https://github.com/SyncfusionExamples/ej2-angular-grid-samples/tree/master/connecting-to-backends/syncfusion-angular-grid-with-expressjs-server |
| FastAPI               | [FastAPI guide](../connecting-to-backends/fastapi-server)  | https://github.com/SyncfusionExamples/ej2-angular-grid-samples/tree/master/connecting-to-backends/syncfusion-angular-grid-with-fastapi-server-master |
| Flask API             | [Flask API guide](../connecting-to-backends/flaskapi-server) | https://github.com/SyncfusionExamples/ej2-angular-grid-samples/tree/master/connecting-to-backends/syncfusion-angular-grid-with-flaskapi-server-master |
| Next.js               | [Next.js guide](../connecting-to-backends/next-js-server) | https://github.com/SyncfusionExamples/ej2-angular-grid-samples/tree/master/connecting-to-backends/syncfusion-angular-grid-with-nextjs-server |