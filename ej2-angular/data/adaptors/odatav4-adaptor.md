---
layout: post
title: Angular DataManager - ODataV4 Adaptor | Syncfusion
description: Angular DataManager ODataV4 provides server-side integration with REST APIs by detailing the backend setup and endpoint configuration required for data operations.
control: ODataV4 Adaptor
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# OData Remote Data Binding in Syncfusion Angular Components

OData (Open Data Protocol) is an open standard for building and consuming RESTful APIs. It defines a consistent format for requests and responses, making it easier to query, filter, sort, and manage data across different platforms and technologies.

## Why Choose OData V4?

OData V4 is a widely adopted open standard that provides a consistent way to query, filter, sort, and manipulate data across RESTful services. When working with Syncfusion components using the DataManager, OData V4 offers several advantages over traditional REST APIs and other adaptors. The benefits include:

- Eliminates manual request construction.
- Ensures OData V4 protocol compliance.
- Reduces boilerplate code.
- Provides seamless Grid-to-OData communication.

Automated functionality in OData V4 includes:
- URL construction and query string formatting.
- OData query syntax parsing and validation.
- HTTP verb handling for CRUD operations (GET, POST, PATCH, DELETE).
- Request-response transformation between Grid and OData service.

This guide outlines the complete process for configuring the `OdataV4Adaptor` by detailing the backend API setup and the server‑side endpoints required to support data operations.

### REST vs OData Query comparison

When exposing data through APIs, two common styles are used:

- **Traditional REST APIs**: Use custom query parameters that differ between implementations (e.g., ?country=, ?sort=, ?page=).

- **OData**: An open standard (OASIS) built on REST that provides a consistent query syntax using "$‑prefixed" parameters.

**Quick comparison of REST and OData**:

| Goal                          | Traditional REST API Style | OData Standard Query                                                                 |
|-------------------------------|-------------------------------------------------------------|--------------------------------------------------------------------------------------|
| Get all orders                | `/api/orders`                                               | `/odata/Orders`                                                                      |
| Filter by country             | `/api/orders?country=Denmark`                               | `/odata/Orders?$filter=ShipCountry eq 'Denmark'`                                     |
| Sort by ID descending         | `/api/orders?sort=-orderId` or `sort=orderId desc`          | `/odata/Orders?$orderby=OrderID desc`                                                |
| Page 2 (10 items per page)    | `/api/orders?page=2&size=10`                                | `/odata/Orders?$skip=10&$top=10`                                                     |
| All together                  | `/api/orders?country=Denmark&sort=-id&page=2&size=10`       | `/odata/Orders?$filter=ShipCountry eq 'Denmark'&$orderby=OrderID desc&$skip=10&$top=10` |

The following benefits apply when using OData protocol:

- **Standardization**: Uniform query syntax across all OData services.
- **Reduced complexity**: Eliminates need for custom filtering and sorting logic.
- **Client flexibility**: Clients control data retrieval requirements.
- **Efficiency**: Minimizes data transfer by requesting only necessary fields and rows.

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

To create the project, launch **Visual Studio 2022 or later** and select **Create a new project**. Search for the **Angular and ASP.NET Core** template and proceed by clicking Next. Configure the project settings by naming it **ODataV4Adaptor** and choosing a suitable location, then click Create. 

When prompted, select .NET 8.0 or later as the framework and finalize the setup by clicking Create again.

> For detailed Angular and ASP.NET Core integration guidance, consult the [official Microsoft documentation](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-angular?view=vs-2022).

**Option 2: Using terminal**

**Windows (PowerShell):**  
Press the <kbd>Windows</kbd> key, type PowerShell, and press <kbd>Enter</kbd>. A terminal window opens for running commands.

**Visual Studio Code:**  
Open VS Code, then from the top menu select **View → Terminal**. The integrated terminal appears at the bottom of the editor.

**macOS (Terminal):**  
Press <kbd>Command</kbd> + <kbd>Space</kbd> to open Spotlight Search, type Terminal, and press <kbd>Enter</kbd>.

```bash
dotnet new angular -n ODataV4Adaptor
cd ODataV4Adaptor
```

**Project structure after creation:**


```
ODataV4Adaptor/
├── ODataV4Adaptor.client/           # Angular frontend.
│   ├── src/
│   │   ├── app/
│   │   │   └── app.component.ts     # Add odatav4 adaptor here.
│   │   └── main.ts
│   ├── angular.json
│   └── package.json
│
└── ODataV4Adaptor.Server/           # ASP.NET Core backend (API).
    ├── Controllers/                 # API controllers (will be created here).
    ├── Models/                      # Data models (will be created here).
    └── Program.cs                   # Server configuration.
```

### Step 2: Install required NuGet package

To install the required package, go to **Tools → NuGet Package Manager → Manage NuGet Packages for Solution**. 

In the **Browse** tab, search for `Microsoft.AspNetCore.OData` and select it from the results. In the right panel, check the box for the server project, then click **Install**. When prompted, accept the license terms to complete the installation.

**Package functionality:** The `Microsoft.AspNetCore.OData` package enables OData V4 support in ASP.NET Core by providing query parsing, EDM model creation, response formatting, and processing of OData options such as `$filter`, `$orderby`, and `$select`.

### Step 3: Create data model

Create a **Models** folder in the Server project, then add a new class named **OrdersDetails.cs** inside it, replacing the default code with the provided implementation.

{% tabs %}
{% highlight cs tabtitle="OrdersDetails.cs" %}

using System.ComponentModel.DataAnnotations;

namespace ODataV4Adaptor.Server.Models
{
    public class OrdersDetails
    {
        public static List<OrdersDetails> order = new List<OrdersDetails>();
        public OrdersDetails()
        {

        }
        public OrdersDetails(
        int OrderID, string CustomerId, int EmployeeId, string ShipCountry)
        {
            this.OrderID = OrderID;
            this.CustomerID = CustomerId;
            this.EmployeeID = EmployeeId;
            this.ShipCountry = ShipCountry;
        }   

        public static List<OrdersDetails> GetAllRecords()
        {
            if (order.Count() == 0)
            {
                int code = 10000;
                for (int i = 1; i < 10; i++)
                {
                    order.Add(new OrdersDetails(code + 1, "ALFKI", i + 0, "Denmark"));
                    order.Add(new OrdersDetails(code + 2, "ANATR", i + 2, "Brazil"));
                    order.Add(new OrdersDetails(code + 3, "ANTON", i + 1, "Germany"));
                   . . .
                   . . .
                   . . .
                    code += 5;
                }
            }
            return order;
        }
        [Key]
        public int? OrderID { get; set; }
        public string? CustomerID { get; set; }
        public int? EmployeeID { get; set; }
        public string? ShipCountry { get; set; }
    }
}

{% endhighlight %}
{% endtabs %}

**Model components explained:**
- `[Key]` attribute: Designates **OrderID** as the primary key, required for OData entity identification and CRUD operations.
- "GetAllRecords()": Static method generating 45 sample order records across multiple countries for demonstration purposes.
- Nullable properties (`?`): Enable optional field values, allowing null assignments.
- Production implementation: Replace in-memory data store with actual database integration using Entity Framework Core or similar ORM.

### Step 4: OData service configuration

This step configures ASP.NET Core middleware to support OData protocol and defines the Entity Data Model.

**Locating Program.cs:**

Open the **Program.cs** file in the server project. This file serves as the main configuration entry point for ASP.NET Core applications.

**Entity data model (EDM) construction:**

Add the following configuration code in **Program.cs** before the `builder.Build()` statement:

**Entity data model overview:**

The EDM serves as a metadata blueprint describing the data structure exposed by the OData service. It defines available entities (data types), their properties, relationships, and query capabilities. 

```cs
// Create an ODataConventionModelBuilder to build the OData model.
var modelBuilder = new ODataConventionModelBuilder();

// Register the "Orders" entity set with the OData model builder.
// "Orders" will be the name used in URLs (e.g., /odata/Orders).
modelBuilder.EntitySet<OrdersDetails>("Orders");
```

**Implementation details:**
- `ODataConventionModelBuilder`: Utilizes convention-based configuration to automatically map entity properties and relationships
- `EntitySet<OrdersDetails>("Orders")`: Exposes the OrdersDetails class as an OData entity set accessible via the "Orders" endpoint
- Entity set name "Orders" becomes part of the API URL path (e.g., `/odata/Orders`)

**OData service registration:**

After constructing the Entity Data Model, register OData services and configure query capabilities in the ASP.NET Core service collection.

```cs
// Add controllers with OData support to the service collection.
builder.Services.AddControllers().AddOData(
    options => options
        .Select()    // Enables $select to choose specific fields.
        .Filter()    // Enables $filter for filtering data.
        .OrderBy()   // Enables $orderby for sorting.
        .Expand()    // Enables $expand for related data.
        .Count()     // Enables $count to get total record count.
        .SetMaxTop(100) // Limits maximum records per request.
        .AddRouteComponents("odata", modelBuilder.GetEdmModel())); // Maps routes with "odata" prefix.
```

**Configuration details:**
- `AddControllers()`: Registers MVC controller services in the dependency injection container.
- `AddOData()`: Integrates OData middleware and service infrastructure.
- `.Select()`: Enables `$select` query option for column projection.
- `.Filter()`: Enables `$filter` query option for data filtering.
- `.OrderBy()`: Enables `$orderby` query option for result ordering.
- `.Expand()`: Enables `$expand` query option for navigating related entities.
- `.Count()`: Enables `$count` query option for total record count retrieval.
- `.SetMaxTop(100)`: Establishes maximum record limit per request (prevents server overload).
- `AddRouteComponents("odata", ...)`: Configures "odata" as the URL prefix for all OData endpoints.
- `modelBuilder.GetEdmModel()`: Provides the previously constructed Entity Data Model.

**Best practice:** Enable only required query options based on application requirements to optimize security and performance.

**Complete Program.cs implementation:**

The complete **Program.cs** file should resemble the following structure:

```cs
using Microsoft.AspNetCore.OData;
using ODataV4Adaptor.Server.Models;
using Microsoft.OData.ModelBuilder;

var builder = WebApplication.CreateBuilder(args);

// Build OData Model.
var modelBuilder = new ODataConventionModelBuilder();
modelBuilder.EntitySet<OrdersDetails>("Orders");

// Add services.
builder.Services.AddControllers().AddOData(
    options => options
        .Select()
        .Filter()
        .OrderBy()
        .Expand()
        .Count()
        .SetMaxTop(100)
        .AddRouteComponents("odata", modelBuilder.GetEdmModel()));

// Add CORS support (required for Angular app to call API).
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure middleware.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();
app.UseCors();
app.UseAuthorization();
app.MapControllers();

app.Run();

```

### Step 5: OData controller implementation

Controllers process incoming HTTP requests and generate appropriate data responses for OData operations. 

To create the OrdersController, right‑click the **Controllers** folder, select **Add** → **Controller**, choose the **API Controller – Empty** template, and name the file **OrdersController.cs**. After creating the controller, replace the generated content with the implementation shown below.

```cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using ODataV4Adaptor.Server.Models;

namespace ODataV4Adaptor.Server.Controllers
{
    public class OrdersController : ODataController
    {
        /// <summary>
        /// Retrieves all orders with OData query support.
        /// </summary>
        /// <returns>The collection of orders.</returns>
        [HttpGet]
        [EnableQuery] // This attribute enables OData query options
        public IActionResult Get()
        {
            var data = OrdersDetails.GetAllRecords().AsQueryable();
            return Ok(data);
        }
    }
}
```

**Implementation analysis:**
- Inheritance from `ODataController`: Provides OData-specific controller capabilities and conventions.
- Routing configuration: OData routing handled automatically via Program.cs configuration; `[Route]` attribute unnecessary.
- Controller behavior: ODataController inherits functionality similar to `[ApiController]` attribute.
- `[HttpGet]`: Designates method to handle HTTP GET requests.
- `[EnableQuery]`: **Essential attribute** - enables OData query processing for `$filter`, `$orderby`, `$select`, and other query options.
- `AsQueryable()`: Converts collection to IQueryable interface, enabling deferred execution and OData query composition.
- `Ok(data)`: Returns HTTP 200 (OK) status with serialized data payload.

> The `[EnableQuery]` attribute is mandatory for OData query functionality. Without this attribute, manual implementation of filtering, sorting, pagination, and projection logic would be required.

### Step 6: OData service verification

Run the application by pressing **F5** (or using the Run button) in Visual Studio, which launches it in the default browser, and note the generated URL such as `https://localhost:xxxx`.

**OData endpoint verification:** Verify the OData endpoint by opening a browser and navigating to `https://localhost:xxxx/odata/Orders` (using the actual port), where a JSON response with all "45" order records should appear.

Test the following URLs to verify OData query functionality:

- **Get all orders**: `https://localhost:xxxx/odata/Orders`
- **Get top 5 orders**: `https://localhost:xxxx/odata/Orders?$top=5`
- **Filter by country**: `https://localhost:xxxx/odata/Orders?$filter=ShipCountry eq 'Denmark'`
- **Sort by OrderID**: `https://localhost:xxxx/odata/Orders?$orderby=OrderID desc`
- **Count records**: `https://localhost:xxxx/odata/Orders/$count`
- **Select specific columns**: `https://localhost:xxxx/odata/Orders?$select=OrderID,CustomerID`

Examples of OData query syntax references:

| Query Option | Purpose | Example |
|--------------|---------|---------|
| `$top=5` | Get first 5 records | `?$top=5` |
| `$skip=10` | Skip first 10 records | `?$skip=10` |
| `$filter=` | Filter records | `?$filter=OrderID gt 10005` |
| `$orderby=` | Sort records | `?$orderby=CustomerID desc` |
| `$select=` | Choose specific fields | `?$select=OrderID,CustomerID` |
| `$count` | Get total count | `/$count` or `?$count=true` |

OData filter operator query reference:
- `eq` - equals: `ShipCountry eq 'Denmark'`
- `ne` - not equals: `ShipCountry ne 'Denmark'`
- `gt` - greater than: `OrderID gt 10005`
- `lt` - less than: `OrderID lt 10010`
- `and` - logical AND: `ShipCountry eq 'Denmark' and OrderID gt 10005`
- `or` - logical OR: `ShipCountry eq 'Denmark' or ShipCountry eq 'Germany'`

### Step 7: Test the backend API

Run the application in Visual Studio, accessible on a URL like **https://localhost:xxxx**. Verify the API returns order data at **https://localhost:xxxx/api/data**, where **xxxx** is the port.

### Step 8: Understanding the required response format

When using the `OdataV4Adaptor`, every backend API endpoint must return data in a specific JSON structure. This ensures that Syncfusion<sup style="font-size:70%">&reg;</sup> Angular DataManager can correctly interpret the response and bind it to the component. The expected format is:

```json
{
  "value": [
    { "OrderID": 10001, "CustomerID": "ALFKI", "ShipCity": "Berlin" },
    { "OrderID": 10002, "CustomerID": "ANATR", "ShipCity": "Madrid" },
    ...
  ],
  "@odata.count": 45
}
```

- **value**: Returns the data records for the current page/request displayed in the UI.
- **@odata.count**: Indicates the total number of records in the dataset, enabling accurate pagination.

## Troubleshooting common issues

### Issue 1: CORS errors

**Symptom:** Browser console displays "Access-Control-Allow-Origin" error.

**Solution:** Verify CORS configuration in **Program.cs**:

```csharp

using Microsoft.AspNetCore.OData;
using ODataV4Adaptor.Server.Models;
using Microsoft.OData.ModelBuilder;

var builder = WebApplication.CreateBuilder(args);
...
...
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});
...
...
// Important: Add this BEFORE app.MapControllers().
app.UseCors();

```

### Issue 2: 404 not found

**Symptom:** Network tab displays 404 error on OData endpoint.

**Solutions:**
- Verify port number matches the server configuration.
- Confirm URL includes "odata" prefix: `/odata/Orders`.
- Ensure controller name matches entity set name.
- Verify server is running.

### Checklist for common OData errors

If errors occur, verify the following:

 - `Microsoft.AspNetCore.OData` NuGet package installation.
 - CORS configuration presence in **Program.cs**.
 - `[EnableQuery]` attribute applied to **Get** method.
 - Correct "odata" prefix inclusion in route configuration

## Integration with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components

To integrate the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component with the `ODataV4Adaptor`, refer to the documentation below:

- [Grid](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/odatav4-adaptor)

## See also

- [Customize data handling](./custom-adaptor) 
- [Connect to custom REST APIs](./url-adaptor)
- [Bind local JSON data](./json-adaptor)
- [Connect to GraphQL services](./graphql-adaptor)
- [Hybrid data binding](./remote-save-adaptor)
- [Connect to Web Method services](./web-method-adaptor)
- [Connect to ASP.NET Web API](./webapi-adaptor)
- [Adding custom headers](../how-to#adding-custom-headers)