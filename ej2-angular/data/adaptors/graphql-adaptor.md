---
layout: post
title: Angular DataManager - GraphQL Adaptor | Syncfusion
description: Angular DataManager GraphQL enables remote data binding with REST APIs, explaining backend configuration and endpoints for efficient data operations.
control: GraphQL Adaptor
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---
 
# GraphQL in Remote Data Binding in Syncfusion Angular Components
 
The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular compoenents provides seamless integration with GraphQL services, enabling modern, efficient data operations through a flexible query language. This comprehensive guide demonstrates how to configure and use the GraphQL with the Syncfusion Angular components to perform server-side operations including querying, mutations, filtering, sorting, paging, and complete CRUD functionality.
 
## Understanding GraphQL
 
[GraphQL](https://graphql.org/learn/introduction/) is a query language that allows applications to request exactly the data needed, nothing more and nothing less. Unlike traditional REST APIs that return fixed data structures, GraphQL enables the client to specify the shape and content of the response.
 
Traditional REST APIs and GraphQL differ mainly in the way data is requested and returned: REST APIs expose multiple endpoints that return fixed data structures, often including unnecessary fields and requiring several requests to fetch related data, while GraphQL uses a single endpoint where queries define the exact fields needed, enabling precise responses and allowing related data to be retrieved efficiently in one request. This makes GraphQL especially useful for Angular component integration, the reason is data‑centric UI components require well‑structured and selective datasets to support efficient filtering, reduce network calls, and improve overall performance.
 
**Key GraphQL concepts:**
 
- **Queries**: A query is a request to read data. Queries do not modify data; they only retrieve it.
- **Mutations**: A mutation is a request to modify data. Mutations create, update, or delete records.
- **Resolvers**: Each query or mutation is handled by a resolver, which is a function responsible for fetching data or executing an operation. Query resolvers handle read operations, while mutation resolvers handle write operations.
- **Schema**: Defines the structure of the API. The schema describes available data types, the fields within those types, and the operations that can be executed. Query definitions specify the way data can be retrieved, and mutation definitions specify the way data can be modified.
 
### GraphQL vs REST comparison
 
Understanding the key differences between GraphQL and REST helps appreciate the benefits of using GraphQL with Syncfusion components:
 
| Aspect | REST API | GraphQL |
|--------|----------|---------|
| **Endpoints** | Multiple endpoints (/api/orders, /api/customers). | Single endpoint (/graphql). |
| **Data fetching** | Fixed data structure per endpoint. | Flexible, client specifies exact data needs. |
| **Over-fetching** | Common (gets unnecessary data). | Eliminated (requests only needed fields). |
| **Under-fetching** | Requires multiple requests. | Single request for complex data. |
| **Versioning** | Requires API versioning (v1, v2). | Schema evolution without versioning. |
| **Type system** | Not built-in | Strongly typed schema. |
| **Query format** | URL parameters | Structured query language. |
| **Real-time** | Requires separate solution. | Built-in subscriptions support. |
 
**GraphQL Query example:**
```text
query {
  getOrders {
    result {
      OrderID
      CustomerID
      ShipCity
    }
    count
  }
}
```

The following benefits apply when using GraphQL protocol:

- **Precise data retrieval**: Request only the fields needed, reducing bandwidth.
- **Single request**: Fetch related data in one query instead of multiple REST calls.
- **Strong typing**: Schema provides clear contract between client and server.
- **Self-documentation**: Introspection enables automatic API documentation.
- **Rapid development**: Faster iteration with flexible queries.
- **Reduced over-fetching**: Eliminates unnecessary data transfer.
 
### GraphQLAdaptor overview

The `GraphQLAdaptor` is a specialized adaptor in Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager that enables seamless communication between Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components and GraphQL servers. It automatically converts component operations into GraphQL queries and mutations. The process works as follows:
 
1. **Client action**: User performs operation (filter, sort, page, edit, etc.).
2. **Query construction**: `GraphQLAdaptor` builds GraphQL query with variables.
3. **Server request**: POST request sent to GraphQL endpoint.
4. **Query execution**: GraphQL server processes query and executes resolvers.
5. **Response processing**: `GraphQLAdaptor` extracts data from response.
6. **Component rendering**: Component displays updated data.
 
The following example illustrates how Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components handle data operations through `GraphQLAdaptor`:

- **Filter**: Sends `datamanager.where` variable with filter predicates.
- **Sort**: Sends `datamanager.sorted` variable with field and direction.
- **Page**: Sends `datamanager.skip` and `datamanager.take` variables.
- **CRUD**: Executes mutations (createOrder, updateOrder, deleteOrder).
 
The following integration benefits are gained when using GraphQL:

- Automatic query variable management.
- Built-in support for filtering, sorting, and paging.
- Simplified CRUD operations through mutations.
- Flexible response mapping.
- Reduced boilerplate code.

## Prerequisites

| Requirement | Details | Download / Command |
|------------|---------|--------------------|
| **Visual Studio** | Community, Professional, or Enterprise edition. | [Visual Studio](https://visualstudio.microsoft.com/) |
| **Node.js** | Use the latest **LTS** version. | [Node.js](https://nodejs.org/en) |
| **npm** | Comes with Node.js. Required for package management. | Included with Node.js |
| **Angular CLI** | Supports Angular **12+**. Install globally. | `npm install -g @angular/cli` |
| **Verify Node.js** | Check Node version. | `node --version` |
| **Verify npm** | Check npm version. | `npm --version` |
| **Verify Angular CLI** | Shows Angular/CLI versions. | `ng version` |

## Backend setup (ASP.NET Core GraphQL)

ASP.NET Core is a powerful backend framework that offers cross‑platform support, high performance, and built‑in dependency injection. It integrates seamlessly with GraphQL through HotChocolate, enabling efficient schema definition, query execution, and resolver management. This combination ensures scalable GraphQL APIs that deliver optimized query handling and a smooth experience with Syncfusion components.

### Step 1: Create project

New projects can be created in several ways depending on the platform.

**Option 1: Visual Studio**

To create the project, launch **Visual Studio** or later, select **Create** a new project, choose the **Angular and ASP.NET Core**, and click **Next**. Set the project name to **GraphQLAdaptor**, choose the location, then click **Create**, select **.NET 8.0 or later**, and finalize by clicking **Create** again.

> **Reference**: For detailed Angular and ASP.NET Core integration guidance, consult the [official Microsoft documentation](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-angular?view=vs-2022).

**Option 2: Using terminal**

**Windows (PowerShell):** 
Press the <kbd>Windows</kbd> key, type PowerShell, and press <kbd>Enter</kbd>. A terminal window opens for running commands.

**Visual Studio Code:** 
Open VS Code, then from the top menu select **View → Terminal**. The integrated terminal appears at the bottom of the editor.

**macOS (Terminal):**  
Press <kbd>Command</kbd> + <kbd>Space</kbd> to open Spotlight Search, type Terminal, and press <kbd>Enter</kbd>.

```bash
dotnet new angular -n GraphQLAdaptor
cd GraphQLAdaptor
```

**Project structure after creation:**

```
GraphQLAdaptor/
├── GraphQLAdaptor.client/           # Angular frontend.
│   ├── src/
│   │   ├── app/
│   │   │   └── app.component.ts     # Add GraphQLAdaptor here.
│   │   └── main.ts
│   ├── angular.json
│   └── package.json
│
└── GraphQLAdaptor.Server/           # ASP.NET Core backend (GraphQL API).
    ├── GraphQL/                     # GraphQL types and resolvers (will be created here).
    ├── Models/                      # Data models (will be created here).
    └── Program.cs                   # Server configuration.
```

### Step 2: Install required NuGet packages

In Visual Studio, navigate to **Tools** → **NuGet Package Manager** → **Manage NuGet Packages for Solution**, select the **Browse** tab, and install the following packages:

1. Search for `HotChocolate.AspNetCore`, select the package version matching your project's **target framework**, and click **Install**.
2. Search for `HotChocolate.Data`, select the package, and click **Install**.
3. Search for `Microsoft.AspNetCore.Mvc.NewtonsoftJson`, select the package, and click **Install**.

**Package purposes:**

- `HotChocolate.AspNetCore`: Core GraphQL server implementation for ASP.NET Core, providing schema execution, middleware integration, and HTTP request handling.
- `HotChocolate.Data`: Enables filtering, sorting, and paging support for GraphQL queries, integrating seamlessly with IQueryable data sources.
- `Microsoft.AspNetCore.Mvc.NewtonsoftJson`: Provides JSON serialization extensions for ASP.NET Core applications, enabling property casing control and custom naming strategies.

> The HotChocolate packages are required for GraphQL functionality. Refer to the [HotChocolate documentation](https://chillicream.com/docs/hotchocolate/v13) for more details.

**Data model definition**

In Solution Explorer, right-click the **Server** project, choose **Add** → **New Folder**, and name it **Models**. Then, right-click the **Models** folder, select **Add** → **Class**, name the file **OrdersDetails.cs**, and replace the default content with the provided implementation.

{% tabs %}
{% highlight cs tabtitle="OrdersDetails.cs" %}

namespace GraphQLAdaptor.Server.Models
{
  public class OrdersDetails
  {
    public static List<OrdersDetails> order = new List<OrdersDetails>();
    
    public OrdersDetails()
    {
    }
    
    public OrdersDetails(
      int OrderID, string CustomerId, int EmployeeId, double Freight, bool Verified,
      DateTime OrderDate, string ShipCity, string ShipName, string ShipCountry,
      DateTime ShippedDate, string ShipAddress)
    {
      this.OrderID = OrderID;
      this.CustomerID = CustomerId;
      this.EmployeeID = EmployeeId;
      this.Freight = Freight;
      // Add the remaining fields.
      .  .  .
      .  .  .
      .  .  .
    }

    public static List<OrdersDetails> GetAllRecords()
    {
      if (order.Count() == 0)
      {
        int code = 10000;
        for (int i = 1; i < 10; i++)
        {
          order.Add(new OrdersDetails(code + 1, "ALFKI", i + 0, 2.3 * i, false, new DateTime(1991, 05, 15), "Berlin", "Simons bistro", "Denmark", new DateTime(1996, 7, 16), "Kirchgasse 6"));
          order.Add(new OrdersDetails(code + 2, "ANATR", i + 2, 3.3 * i, true, new DateTime(1990, 04, 04), "Madrid", "Queen Cozinha", "Brazil", new DateTime(1996, 9, 11), "Avda. Azteca 123"));
          ...
          ...
          ...
          code += 5;
        }
      }
      return order;
    }

    public int? OrderID { get; set; }
    public string? CustomerID { get; set; }
    public int? EmployeeID { get; set; }
    public double? Freight { get; set; }
    // Add the remaining fields.
    ...
    ...
    ...
  }
}

{% endhighlight %}
{% endtabs %}

Model components explained:
- **Static list**: In-memory data storage for demonstration purposes.
- **Constructor**: Initializes order properties with sample data.
- **GetAllRecords()**: Static method generating 45 sample order records for testing.
- **Nullable properties (`?`)**: Allow optional field values.
- **Production Implementation**: Replace in-memory data with database integration using Entity Framework Core.

### Step 3: GraphQL schema and resolver configuration

- Create a **GraphQL** folder in the **Server** project, then add a new class named **Query.cs** inside it and replace its content with the GraphQL query resolver implementation

{% tabs %}
{% highlight cs tabtitle="Query.cs" %}

using GraphQLAdaptor.Server.Models;
using HotChocolate.Data;

namespace GraphQLAdaptor.Server.GraphQL
{
  public class Query
  {
    /// <summary>
    /// GraphQL query to retrieve orders with filtering, sorting, and paging support.
    /// The [UseFiltering], [UseSorting], and [UsePaging] attributes enable automatic 
    /// query parameter handling by HotChocolate middleware.
    /// </summary>
    [UseFiltering]
    [UseSorting]
    [UsePaging]
    public IQueryable<OrdersDetails> GetOrders()
    {
      // Return IQueryable for efficient filtering, sorting, and paging
      return OrdersDetails.GetAllRecords().AsQueryable();
    }
  }
}

{% endhighlight %}
{% endtabs %}

- Right-click the **GraphQL** folder, choose **Add → Class**, name it **Mutation.cs**, and add the mutation resolver for CRUD operations.

{% tabs %}
{% highlight cs tabtitle="Mutation.cs" %}

using GraphQLAdaptor.Server.Models;

namespace GraphQLAdaptor.Server.GraphQL
{
  public class Mutation
  {
    /// <summary>
    /// Creates a new order record.
    /// </summary>
    public OrdersDetails CreateOrder(OrdersDetails order)
    {
      var orders = OrdersDetails.GetAllRecords();
      order.OrderID = orders.Max(o => o.OrderID) + 1;
      orders.Add(order);
      return order;
    }

    /// <summary>
    /// Updates an existing order record.
    /// </summary>
    public OrdersDetails UpdateOrder(int orderId, OrdersDetails order)
    {
      var orders = OrdersDetails.GetAllRecords();
      var existingOrder = orders.FirstOrDefault(o => o.OrderID == orderId);
      
      if (existingOrder != null)
      {
        existingOrder.CustomerID = order.CustomerID;
        existingOrder.EmployeeID = order.EmployeeID;
        existingOrder.Freight = order.Freight;
        // Update remaining fields
        ...
      }
      
      return existingOrder;
    }

    /// <summary>
    /// Deletes an order record.
    /// </summary>
    public bool DeleteOrder(int orderId)
    {
      var orders = OrdersDetails.GetAllRecords();
      var order = orders.FirstOrDefault(o => o.OrderID == orderId);
      
      if (order != null)
      {
        orders.Remove(order);
        return true;
      }
      
      return false;
    }
  }
}

{% endhighlight %}
{% endtabs %}

GraphQL resolver implementation analysis:

- **Query resolver**: 
  - `[UseFiltering]`: Enables automatic filtering based on GraphQL query parameters.
  - `[UseSorting]`: Enables automatic sorting support.
  - `[UsePaging]`: Enables pagination with skip/take parameters.
  - Returns `IQueryable` for efficient query execution.

- **Mutation resolvers**: 
  - `CreateOrder`: Adds new record and auto-generates OrderID.
  - `UpdateOrder`: Finds and updates existing record by ID.
  - `DeleteOrder`: Removes record and returns success status.

### Step 4: CORS and GraphQL service configuration

GraphQL projects require CORS (Cross-Origin Resource Sharing) configuration to allow Angular client to communicate with the GraphQL server.

Open **Program.cs** and add CORS and GraphQL configuration:

```cs
using GraphQLAdaptor.Server.GraphQL;
using GraphQLAdaptor.Server.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Add CORS support (required for Angular app to call GraphQL API).
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()  // Allows requests from any origin.
              .AllowAnyMethod()  // Allows all HTTP methods (GET, POST).
              .AllowAnyHeader(); // Allows any request headers.
    });
});

// Add GraphQL services with HotChocolate.
builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>()          // Register query resolver.
    .AddMutationType<Mutation>()    // Register mutation resolver.
    .AddFiltering()                 // Enable filtering support.
    .AddSorting()                   // Enable sorting support.
    .AddProjections();              // Enable field projection.

// Add NewtonsoftJson for controlling JSON contract resolution.
builder.Services.AddMvc().AddNewtonsoftJson(options =>
{
    options.SerializerSettings.ContractResolver =
        new Newtonsoft.Json.Serialization.DefaultContractResolver(); // Applies PascalCase.
});

var app = builder.Build();

// Configure middleware.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();
app.UseCors(); // Important: Enable CORS middleware.
app.UseRouting();
app.UseAuthorization();

// Map GraphQL endpoint
app.MapGraphQL("/graphql"); // GraphQL endpoint at https://localhost:xxxx/graphql.

app.MapControllers();

app.Run();
```

Configuration breakdown:

- **AddGraphQLServer()**: Registers HotChocolate GraphQL server.
- **AddQueryType&lt;Query&gt;()  &lt;OrdersDetails&gt;**: Registers query resolver for read operations.
- **AddMutationType&lt;Mutation&gt;()**: Registers mutation resolver for write operations.
- **AddFiltering()**: Enables automatic filter parameter handling.
- **AddSorting()**: Enables automatic sort parameter handling.
- **AddProjections()**: Enables field selection optimization.
- **MapGraphQL("/graphql")**: Creates GraphQL endpoint at `/graphql`.

> `AllowAnyOrigin()` is suitable for development. Production environments should specify exact origins: `policy.WithOrigins("https://yourdomain.com")`

### Step 5: GraphQL service verification

Run the application in Visual Studio by pressing **F5** or clicking the **Run** button and the application launches and opens in default browser at **https://localhost:xxxx**. 

### Step 6: Verify GraphQL endpoint 

Navigate to **https://localhost:xxxx/graphql** to access the Banana Cake Pop GraphQL IDE (built-in HotChocolate GraphQL playground).

**Test query example:**

```text
query {
  orders {
    items {
      orderID
      customerID
      employeeID
      freight
      shipCity
      verified
      orderDate
      shipName
      shipCountry
      shippedDate
      shipAddress
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    totalCount
  }
}
```

### Step 7: Understanding the required response format

When using the `GraphQLAdaptor`, every backend API endpoint must return data in a specific JSON structure. This ensures that Syncfusion<sup style="font-size:70%">&reg;</sup> Angular DataManager can correctly interpret the response and bind it to the component. The expected format is:

```json
{
  "result": [
    { "OrderID": 10001, "CustomerID": "ALFKI", "ShipCity": "Berlin" },
    { "OrderID": 10002, "CustomerID": "ANATR", "ShipCity": "Madrid" },
    ...
    ...
  ],
  "count": 45
}
```

**Test filtering example:**

```text
query {
  orders(where: { shipCity: { eq: "Berlin" } }) {
    items {
      orderID
      customerID
      shipCity
    }
    totalCount
  }
}
```

**Test sorting example:**

```text
query {
  orders(order: { freight: DESC }) {
    items {
      orderID
      freight
    }
  }
}
```

**Test pagination example:**

```text
query {
  orders(skip: 0, take: 10) {
    items {
      orderID
      customerID
    }
    pageInfo {
      hasNextPage
    }
    totalCount
  }
}
```

## Integration with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components

To integrate the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component with the `GraphQLAdaptor`, refer to the documentation below:

- [Grid](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-backends/graphql-nodejs-server#prerequisites)

## See also

- [Customize data handling](./custom-adaptor) 
- [Connect to custom REST APIs](./url-adaptor)
- [Bind local JSON data](./json-adaptor)
- [Connect to OData v4 services](./odatav4-adaptor)
- [Hybrid data binding](./remote-save-adaptor)
- [Connect to Web Method services](./web-method-adaptor)
- [Connect to ASP.NET Web API](./webapi-adaptor)
- [Adding custom headers](../how-to#adding-custom-headers)