---
layout: post
title: Angular DataManager - URL Adaptor | Syncfusion
description: Angular DataManager UrlAdaptor provides server-side integration with REST APIs by detailing the backend setup and endpoint configuration required for data operations.
control: Url Adaptor
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Custom REST API Remote Data Binding in Syncfusion Angular Components

The `UrlAdaptor` in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular DataManager provides a straightforward way to connect Angular components to REST API endpoints. It serves as a communication layer that manages how requests are sent and how responses are received. By organizing this interaction, it ensures reliable and efficient data handling across different Syncfusion Angular components, regardless of the server setup.

It automatically transforms component actions such as filtering, sorting, paging, and CRUD into HTTP POST requests. The server returns JSON data, which DataManager processes and supplies back to the component. This mechanism enables smooth and efficient remote data binding without custom request handling.

This documentation outlines the complete process for configuring the `UrlAdaptor` by detailing the backend API setup and the server‑side endpoints required to support data operations.

## Why use UrlAdaptor?

The `UrlAdaptor` works with **any custom REST API** no OData or GraphQL required. The benefits include:

1. **Backend agnostic**: Works with backend server technology.
2. **Server-side processing**: Handles large datasets (100K+ records) efficiently on the server.
3. **Automatic requests**: Client operations generate structured HTTP requests automatically.
4. **Full CRUD support**: Manages insert, update, delete operations seamlessly.
5. **Extensible**: Add authentication, caching, or custom transformations easily.

## Who should use UrlAdaptor?

The `UrlAdaptor` is designed for projects that rely on custom REST APIs and need flexible communication between Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components and backend services. It is most relevant for applications where standard protocols like OData or GraphQL are not part of the design, and where direct control over request and response handling is required.

It is particularly useful in scenarios such as:

- Custom REST API implementations that expose endpoints in JSON format.
- Large-scale datasets (100K+ records) requiring server-side execution of operations like filtering, sorting, and paging for performance and scalability.
- Integration with existing backend services where APIs are already defined and must be connected without redesign.
- CRUD operations with custom validation involving business rules, authentication, or transformation logic.
- Extensible architectures that need additional features such as caching, security headers, or custom request/response transformations.

## Supported Databases

The `UrlAdaptor` is **completely backend-agnostic**. It connects to any database through a REST API that returns the required JSON format. Commonly integrated databases include:

| Database | Use Case | Notes |
|----------|----------|-------|
| **SQL Server** | Enterprise applications | Robust querying, stored procedures support |
| **MySQL** | Web applications | Open-source, high performance |
| **PostgreSQL** | Complex data models | Advanced features, JSON support |
| **SQLite** | Embedded applications | Lightweight, serverless |
| **MongoDB** | Document databases | NoSQL, flexible schema |
| **Oracle** | Enterprise systems | High scalability, reliability |
| **Azure SQL Database** | Cloud applications | Managed service, auto-scaling |

> The `UrlAdaptor` is **backend-agnostic**. Compatibility exists with any technology stack that:
> 1. Accepts HTTP POST requests with JSON body.
> 2. Parses request parameters (filters, sorts, page info).
> 3. Returns data in the required `{result, count}` format.

## Prerequisites

| Requirement | Details | Download / Command |
|------------|---------|--------------------|
| **Visual Studio** | Community, Professional, or Enterprise edition. | [Visual Studio](https://visualstudio.microsoft.com/) |
| **Node.js** | Use the latest **LTS** version. | [Node.js](https://nodejs.org/) |
| **npm** | Comes with Node.js. Required for package management. | Included with Node.js |
| **Angular CLI** | Supports Angular **12+**. Install globally. | `npm install -g @angular/cli` |
| **Verify Node.js** | Check Node version. | `node --version` |
| **Verify npm** | Check npm version. | `npm --version` |
| **Verify Angular CLI** | Shows Angular/CLI versions. | `ng version` |

## Backend setup (ASP.NET Core API)

ASP.NET Core is a powerful backend framework that offers cross‑platform support, high performance, and built‑in dependency injection. It integrates seamlessly with Syncfusion's `DataManagerRequest` and `QueryableOperation`, enabling efficient parameter parsing, filtering, sorting, and paging with strong typing. This combination ensures scalable APIs that deliver optimized query handling and a smooth experience.

### Step 1: Create project

New projects can be created in several ways depending on the platform.

**Option 1: Visual Studio**

Open **Visual Studio 2022 or later**, create a new project, search for the **Angular and ASP.NET Core** template, name the project **UrlAdaptor**, select **.NET 8.0 or later**, and click **Create**.

For detailed setup instructions, see [Microsoft's official documentation](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-angular?view=vs-2022).

**Option 2: Using terminal**

**Windows (PowerShell):**

Press the <kbd>Windows</kbd> key, type PowerShell, and press <kbd>Enter</kbd>. A terminal window opens for running commands.

**Visual Studio Code:**

Open VS Code, then from the top menu select **View → Terminal**. The integrated terminal appears at the bottom of the editor.

**macOS (Terminal):**

Press <kbd>Command</kbd> + <kbd>Space</kbd> to open Spotlight Search, type Terminal, and press <kbd>Enter</kbd>.

```bash
dotnet new angular -n UrlAdaptor
cd UrlAdaptor
```

**Project structure after creation:**

```
UrlAdaptor/
├── UrlAdaptor.client/               # Angular frontend.
│   ├── src/
│   │   ├── app/
│   │   │   └── app.component.ts     # Add UrlAdaptor here.
│   │   └── main.ts
│   ├── angular.json
│   └── package.json
│
└── UrlAdaptor.Server/               # ASP.NET Core backend (API).
    ├── Controllers/                 # API controllers (will be created here).
    ├── Models/                      # Data models (will be created here).
    └── Program.cs                   # Server configuration.
```

### Step 2: Install required NuGet package

`Syncfusion.EJ2.AspNet.Core` package is required to use `DataManager` operations in ASP.NET Core.  It provides essential server‑side helpers and classes such as `DataManagerRequest` and `QueryableOperation` that handle parameter parsing, filtering, sorting, and paging with strong typing and optimized performance. The `Microsoft.AspNetCore.Mvc.Newtonsoft.Json` package provides ASP.NET Core MVC input and output formatters that use `Newtonsoft.Json` for JSON serialization, deserialization, and JSON Patch support.

In Visual Studio, navigate to **Tools → NuGet Package Manager → Manage NuGet Packages for Solution**, search for `Syncfusion.EJ2.AspNet.Core` and `Microsoft.AspNetCore.Mvc.NewtonsoftJson`, select it, and click **Install**. Make sure to install these packages into the **UrlAdaptor.Server** project.

**Or via package manager console:**

```bash
Install-Package Syncfusion.EJ2.AspNet.Core
Install-Package Microsoft.AspNetCore.Mvc.NewtonsoftJson
```

**Or via .NET CLI:**

```bash
dotnet add package Syncfusion.EJ2.AspNet.Core
dotnet add package Microsoft.AspNetCore.Mvc.NewtonsoftJson
```

> **Note:** Without `Syncfusion.EJ2.AspNet.Core` package, manual implementation of filtering, sorting, and paging logic is required instead of using the built-in helper methods shown in this guide.

### Step 3: Create data model

Create a **Models** folder in the **UrlAdaptor.Server** project, then add **OrdersDetails.cs** class file.

{% tabs %}
{% highlight cs tabtitle="OrdersDetails.cs" %}

using System.ComponentModel.DataAnnotations;

namespace UrlAdaptor.Server.Models
{
  public class OrdersDetails
  {
    // Static in-memory data store (replace with database in production).
    public static List<OrdersDetails> order = new List<OrdersDetails>();

    // Default constructor.
    public OrdersDetails()
    {
    }

    // Parameterized constructor for easy object creation.
    public OrdersDetails(int OrderID, string CustomerId, int EmployeeId, double Freight, 
      bool Verified, DateTime OrderDate, string ShipCity, string ShipName, 
      string ShipCountry, DateTime ShippedDate, string ShipAddress)
    {
      this.OrderID = OrderID;
      this.CustomerID = CustomerId;
      this.EmployeeID = EmployeeId;
      this.Freight = Freight;
      // Add the remining fields.
      ...
      ...
      ...
    }

    /// <summary>
    /// Generates sample order data. In production, replace with database query.
    /// </summary>
    public static List<OrdersDetails> GetAllRecords()
    {
      if (order.Count() == 0)
      {
        int code = 10000;
        for (int i = 1; i < 10; i++)
        {
          order.Add(new OrdersDetails(code + 1, "ALFKI", i + 0, 2.3 * i, false, 
              new DateTime(1991, 05, 15), "Berlin", "Simons bistro", "Denmark", 
              new DateTime(1996, 7, 16), "Kirchgasse 6"));
          order.Add(new OrdersDetails(code + 2, "ANATR", i + 2, 3.3 * i, true, 
              new DateTime(1990, 04, 04), "Madrid", "Queen Cozinha", "Brazil", 
              new DateTime(1996, 9, 11), "Avda. Azteca 123"));
          ...
          ...
          ...
          code += 5;
        }
      }
      return order;
    }

    // Properties with validation attributes.
    [Key]
    public int? OrderID { get; set; }
    
    public string? CustomerID { get; set; }
    
    public int? EmployeeID { get; set; }
    
    public double? Freight { get; set; }
    
    // Add the remining fields.
    ...
    ...
    ...
  }
}

{% endhighlight %}
{% endtabs %}

>  This example uses a static in-memory list (`order`) for simplicity. In real applications, replace `GetAllRecords()` with database queries using Entity Framework Core, Dapper, or the preferred data access layer.

### Step 4: Create API controller

Create **DataController.cs** file using **MVC Controller - Empty** template in the **Controllers** folder. This controller handles all data requests from the Angular component.

{% tabs %}
{% highlight cs tabtitle="DataController.cs" %}

using Microsoft.AspNetCore.Mvc;
using UrlAdaptor.Server.Models;
using Syncfusion.EJ2.Base;

namespace UrlAdaptor.Server.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class DataController : ControllerBase
  {
    /// <summary>
    /// Main endpoint for data requests.
    /// Handles initial load and all operations (paging, filtering, sorting, etc.)
    /// </summary>
    [HttpPost]
    public object Post([FromBody] DataManagerRequest dm)
    {
      // Retrieve data from data source (replace with the database query).
      IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();

      // Get total records count BEFORE paging.
      int totalRecordsCount = DataSource.Count();

      // Apply server-side operations here (will be added later).
      // For now, return all data with count.

      // Return in {result, count} format (see Step 7 for details).
      return new { result = DataSource, count = totalRecordsCount };
    }

    /// <summary>
    /// Helper method to retrieve order data.
    /// In production, replace with database query:
    /// return _dbContext.Orders.ToList();
    /// </summary>
    [HttpGet]
    public List<OrdersDetails> GetOrderData()
    {
      return OrdersDetails.GetAllRecords().ToList();
    }
  }
}

{% endhighlight %}
{% endtabs %}

The server response must include `result` for the current data and `count` for the total records to enable proper pagination.

**Key Points:**
- **[FromBody] DataManagerRequest**: This parameter receives all operation details (filters, sorts, page info).
- **IQueryable&lt;OrdersDetails&gt;**: Use `IQueryable` for efficient database queries.
-  **result**: Returns the data records for the current page/request displayed in the UI.
- **count**: Must be total count before paging (not just current page count).
- **HttpPost**: Client sends `POST` requests by default for data operations.

### Step 5: Configure NewtonsoftJson and CORS (Cross-Origin Resource Sharing)

In ASP.NET Core, JSON results are returned in camelCase format by default, which also converts field names to camelCase. To prevent this behavior, add `DefaultContractResolver` in **Program.cs**.

```cs
using Newtonsoft.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
...
...
// Configure JSON serialization (preserves property casing).
builder.Services.AddMvc().AddNewtonsoftJson(options =>
{
  options.SerializerSettings.ContractResolver = new DefaultContractResolver();
});

...
...
app.Run();

```

When Angular frontend (e.g., `https://localhost:4200`) and ASP.NET Core backend (e.g., `https://localhost:7018`) run on different ports, browsers block requests by default for security. CORS configuration allows these cross-origin requests.

```cs
using Newtonsoft.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
...
...
// Add CORS policy to allow frontend access.
builder.Services.AddCors(options =>
{
  options.AddDefaultPolicy(policy =>
  {
    policy.AllowAnyOrigin()      // Allow requests from any origin.
          .AllowAnyMethod()       // Allow GET, POST, PUT, DELETE, etc.
          .AllowAnyHeader();      // Allow any request headers.
  });
});
...
...

// Enable CORS middleware (must be before UseRouting).
app.UseCors();
app.Run();
```

Below is the common error without CORS:

```
Access to XMLHttpRequest at 'https://localhost:7018/api/data' from origin 
'https://localhost:4200' has been blocked by CORS policy.

```

Both configurations must be set up in the **Program.cs** file.

{% tabs %}
{% highlight cs tabtitle="Program.cs" %}

using Newtonsoft.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add CORS policy to allow frontend access.
builder.Services.AddCors(options =>
{
  options.AddDefaultPolicy(policy =>
  {
    policy.AllowAnyOrigin()      // Allow requests from any origin.
          .AllowAnyMethod()       // Allow GET, POST, PUT, DELETE, etc.
          .AllowAnyHeader();      // Allow any request headers.
  });
});

// Add controllers to the service collection.
builder.Services.AddControllers();

// Configure JSON serialization (preserves property casing).
builder.Services.AddMvc().AddNewtonsoftJson(options =>
{
  options.SerializerSettings.ContractResolver = new DefaultContractResolver();
});

var app = builder.Build();

// Enable CORS middleware (must be before UseRouting).
app.UseCors();

// Map controller routes.
app.MapControllers();

app.Run();

{% endhighlight %}
{% endtabs %}


>`AllowAnyOrigin()` provides convenience for development but production environments require restriction to specific trusted domains. For production, restrict CORS to specific origins:

```cs
using Newtonsoft.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
...
...
builder.Services.AddCors(options =>
{
  options.AddDefaultPolicy(policy =>
  {
    policy.WithOrigins("https://yourdomain.com")  // Specific frontend URL.
          .AllowAnyMethod()
          .AllowAnyHeader();
  });
});
...
...
app.Run();
```

### Step 6: Test the backend API

Run the application in Visual Studio, accessible on a URL like **https://localhost:xxxx**. Verify the API returns order data at **https://localhost:xxxx/api/data**, where **xxxx** is the port. For more details on port verification, see the [verify ports](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-angular?view=vs-2022) documentation.

### Step 7: Understanding the required response format

When using the `UrlAdaptor`, every backend API endpoint must return data in a specific JSON structure. This ensures that Syncfusion<sup style="font-size:70%">&reg;</sup> Angular DataManager can correctly interpret the response and bind it to the component. The expected format is:

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

- **result**: Returns the data records for the current page/request displayed in the UI.
- **count**: Indicates the total number of records in the dataset, enabling accurate pagination.

> * Without the `count` field, paging and virtual scrolling cannot function correctly.
> * APIs returning just an array `[{...}, {...}]` instead of `{result: [...], count: ...}` will prevent proper data display. Responses must wrap in the required structure.

## Troubleshooting

| Issue             | Resolution                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| **Empty response** | Check if "GetAllRecords()" is populating data.                             |
| **404 Error**      | Verify controller route is `[Route("api/[controller]")]`.                  |
| **500 Error**      | Check server logs in the Visual Studio Output window.                      |
| **CORS Error**     | Ensure CORS is configured properly in **Program.cs**.                        |


## Integration with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components

To integrate the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with the `UrlAdaptor`, refer to the documentation below:

- [Grid](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/url-adaptor)

## See also

- [Customize data handling](./custom-adaptor)
- [Bind local JSON data](./json-adaptor)
- [Connect to GraphQL services](./graphql-adaptor)
- [Connect to OData v4 services](./odatav4-adaptor)
- [Hybrid data binding](./remote-save-adaptor)
- [Connect to Web Method services](./web-method-adaptor)
- [Connect to ASP.NET Web API](./webapi-adaptor)
- [Adding custom headers](../how-to#adding-custom-headers)