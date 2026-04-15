---
layout: post
title: Angular DataManager - Web Method Adaptor | Syncfusion
description: Angular DataManager Web Method provides server-side integration with REST APIs by detailing the backend setup and endpoint configuration required for data operations.
control: Web Method Adaptor
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Remote Data Binding with Custom REST API using WebMethod

The `WebMethodAdaptor` enables the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components to communicate with remote services using web methods. It functions similarly to `UrlAdaptor` but with a key difference: it wraps all operation parameters (filtering, sorting, paging, CRUD) inside a special `value` object before sending them to the server.

## Why use WebMethodAdaptor?

The `WebMethodAdaptor` works with **custom REST APIs that expect nested parameter structures** particularly useful for certain backend frameworks. The benefits include:

1. **Backend compatibility**: Works with APIs expecting nested `value` object pattern.
2. **Server-side processing**: Handles large datasets (100K+ records) efficiently on the server.
3. **Automatic requests**: Client operations generate structured HTTP requests automatically.
4. **Full CRUD support**: Manages insert, update, delete operations seamlessly.
5. **Legacy support**: Compatible with ASP.NET Web Services and legacy web method patterns.

## Key difference from UrlAdaptor

`UrlAdaptor` sends parameters directly in the request body:
```json
{ 
  "skip": 0, 
  "take": 10, 
  "sorted": [{"name": "OrderID", "direction": "ascending"}] 
}
```

`WebMethodAdaptor` wraps parameters inside a `value` object:
```json
{ 
  "value": { 
    "skip": 0, 
    "take": 10, 
    "sorted": [{"name": "OrderID", "direction": "ascending"}] 
  } 
}
```

## Who should use WebMethodAdaptor?

The WebMethodAdaptor is typically used in scenarios where client-side components need to communicate directly with server-side methods exposed via web services. It helps in binding data from remote services into  Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components components seamlessly.

The `WebMethodAdaptor` used the following scenarios only:

- Backend API expects nested parameter structure with `value` wrapper.
- Working with ASP.NET Web Services (.asmx endpoints).
- API requires parameters inside a `value` wrapper object.
- Need compatibility with legacy web method patterns.
- Backend framework expects specific nested request format.

The following scenario uses `UrlAdaptor` directly instead of `WebMethodAdaptor`:

- Standard REST APIs with flat parameter structure.
- Modern ASP.NET Core APIs without nested requirements.
- APIs expecting direct parameter access.
- No specific `value` object requirement.

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

Open **Visual Studio 2022 or later**, create a new project, search for the **Angular and ASP.NET Core** template, name the project **WebMethodAdaptor**, select **.NET 8.0 or later**, and click **Create**.

For detailed setup instructions, see [Microsoft's official documentation](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-angular?view=vs-2022).

**Option 2: Using terminal**

**Windows (PowerShell):**  
Press the <kbd>Windows</kbd> key, type PowerShell, and press <kbd>Enter</kbd>. A terminal window opens for running commands.

**Visual Studio Code:**  
Open VS Code, then from the top menu select **View → Terminal**. The integrated terminal appears at the bottom of the editor.

**macOS (Terminal):**  
Press <kbd>Command</kbd> + <kbd>Space</kbd> to open Spotlight Search, type Terminal, and press <kbd>Enter</kbd>.

```bash
dotnet new angular -n WebMethodAdaptor
cd WebMethodAdaptor
```

After project creation, the folder structure will appear as follows:

```
WebMethodAdaptor/
├── WebMethodAdaptor.client/         # Angular frontend.
│   ├── src/
│   │   ├── app/
│   │   │   └── app.component.ts     # Add WebMethodAdaptor here.
│   │   └── main.ts
│   ├── angular.json
│   └── package.json
│
└── WebMethodAdaptor.Server/         # ASP.NET Core backend (API).
    ├── Controllers/                 # API controllers (will be created here).
    ├── Models/                      # Data models (will be created here).
    └── Program.cs                   # Server configuration.
```

### Step 2: Install required NuGet packages

`Syncfusion.EJ2.AspNet.Core` is the NuGet package required to enable DataManager operations in ASP.NET Core. It provides essential server‑side helpers and classes such as `DataManagerRequest` and `QueryableOperation`, which handle parameter parsing, filtering, sorting, and paging. These classes ensure strong typing, optimized performance, and seamless communication between the backend and Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components

In Visual Studio, navigate to **Tools → NuGet Package Manager → Manage NuGet Packages for Solution**, search for `Syncfusion.EJ2.AspNet.Core` and `Microsoft.AspNetCore.Mvc.NewtonsoftJson`, select it, and click **Install**.

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

>  Without this package, manual implementation of filtering, sorting, and paging logic is required instead of using the built-in helper methods shown in this guide.

### Step 3: Create data model

Create a **Models** folder in the project root (if it doesn't exist), then add **OrdersDetails.cs**:

{% tabs %}
{% highlight cs tabtitle="OrdersDetails.cs" %}

using System.ComponentModel.DataAnnotations;

namespace WebMethodAdaptor.Models
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
      this.ShipCity = ShipCity;
    . . .
    . . .
    . . .
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
          . . .
          . . . 
          . . .
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

> This example uses a static in-memory list (`order`) for simplicity. In real applications, replace "GetAllRecords()" method with database queries using Entity Framework Core, Dapper, or the preferred data access layer.

### Step 4: Create API controller

Create **DataController.cs** in the **Controllers** folder. This controller handles all data requests from the Angular component.

{% tabs %}
{% highlight cs tabtitle="DataController.cs" %}

using Microsoft.AspNetCore.Mvc;
using WebMethodAdaptor.Models;
using Syncfusion.EJ2.Base;

namespace WebMethodAdaptor.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class GridController : ControllerBase
  {
    /// <summary>
    /// Main endpoint for data requests.
    /// Handles initial load and all operations (paging, filtering, sorting, etc.)
    /// CRITICAL: Parameter is wrapped in DataManager class to access 'value' object.
    /// </summary>
    [HttpPost]
    public object Post([FromBody] DataManager dataManager)
    {
      // Extract the actual DataManagerRequest from the 'value' wrapper
      DataManagerRequest dm = dataManager.Value;

      // Retrieve data from data source (replace with the database query).
      IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();

      // Get total records count BEFORE paging.
      int totalRecordsCount = DataSource.Count();

      // Apply server-side operations here (will be added later).
      // For now, return all data with count.

      // CRITICAL: Return in {result, count} format.
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

  /// <summary>
  /// Wrapper class for WebMethodAdaptor requests.
  /// WebMethodAdaptor wraps DataManagerRequest inside a 'value' property.
  /// This is the key difference from UrlAdaptor which sends parameters directly.
  /// </summary>
  public class DataManager
  {
    public required DataManagerRequest Value { get; set; }
  }
}

{% endhighlight %}
{% endtabs %}

The server response must include `result` for the current data and `count` for the total records to enable proper pagination.

**Key Points:**

- **[FromBody] DataManager**: This parameter receives the wrapped request with `value` object containing all operation details (filters, sorts, page info).
- **DataManager.Value**: Access the actual `DataManagerRequest` from the nested `value` object.
- **IQueryable&lt;OrdersDetails&gt;**: Use `IQueryable` for efficient database queries.
- **count**: Must be total count before paging (not just current page count).
- **HttpPost**: Client sends `POST` requests by default for data operations.

### Step 5: Configure CORS (Cross-Origin Resource Sharing)

When Angular frontend (e.g., **https://localhost:4200**) and ASP.NET Core backend (e.g., **https://localhost:7018**) run on different ports, browsers block requests by default for security. CORS configuration allows these cross-origin requests.

Below is the common error without CORS:

```
Access to XMLHttpRequest at 'https://localhost:7018/api/grid' from origin 
'https://localhost:4200' has been blocked by CORS policy.
```

The following example shows how to configure CORS **Program.cs:**

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

Production CORS configuration:

For production, restrict CORS to specific origins:

```csharp
using Newtonsoft.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add CORS policy to allow frontend access.
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

> `AllowAnyOrigin()` provides convenience for development but production environments require restriction to specific trusted domains.

### Step 6: Test the backend API

Run the application in Visual Studio, accessible on a URL like **https://localhost:xxxx**. Verify the API returns order data at **https://localhost:xxxx/api/grid**, where **xxxx** is the port.


### Step 7: Understanding the sending requst value object pattern

When using `WebMethodAdaptor`, request parameters are encapsulated inside a value object. This wrapping changes how the server processes incoming data and requires an additional model to extract the parameters.  Below is an example of a request payload demonstrating paging, sorting, and filtering operations.

```json
{
  "value": {
    "skip": 0,
    "take": 10,
    "requiresCounts": true,
    "sorted": [{ "name": "OrderID", "direction": "ascending" }],
    "where": [{ "field": "CustomerID", "operator": "equal", "value": "ALFKI" }]
  }
}
```

A server-side wrapper class is required to access these parameters:

```csharp
public class DataManager
{
  public required DataManagerRequest Value { get; set; }
  ...
  ... 
}
```

This model extracts the nested `value` object, providing access to all DataManager properties like `skip`, `take`, `sorted`, `where`, etc.

> The key difference between `WebMethodAdaptor` and `UrlAdaptor` is how request parameters are structured.

### Step 8: Understanding the required response format

When using the `WebMethodAdaptor`, every backend API endpoint must return data in a specific JSON structure. This ensures that Syncfusion<sup style="font-size:70%">&reg;</sup> Angular DataManager can correctly interpret the response and bind it to the component. The expected format is:

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

> - Without the `count` field, paging and virtual scrolling cannot function correctly.
> - APIs returning just an array `[{...}, {...}]` instead of `{result: [...], count: ...}` will prevent proper data display. Responses must wrap in the required structure.

## Troubleshooting 

| Issue            | Resolution                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **Empty response** | Check if "GetAllRecords()" is populating data.                             |
| **404 Error**      | Verify controller route is `[Route("api/[controller]")]`.                  |
| **500 Error**      | Check server logs in the Visual Studio Output window.                      |
| **CORS Error**     | Ensure CORS is configured properly in **Program.cs**.                        |

>  Keep the backend server running during Angular frontend setup.

## Integration with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components

To integrate the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component with the `WebMethodAdaptor`, refer to the documentation below:

- [Grid](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/web-method-adaptor)

## See also

- [Customize data handling](./custom-adaptor) 
- [Connect to custom REST APIs](./url-adaptor)
- [Bind local JSON data](./json-adaptor)
- [Connect to GraphQL services](./graphql-adaptor)
- [Connect to OData v4 services](./odatav4-adaptor)
- [Hybrid data binding](./remote-save-adaptor)
- [Connect to ASP.NET Web API](./webapi-adaptor)
- [Adding custom headers](../how-to#adding-custom-headers)