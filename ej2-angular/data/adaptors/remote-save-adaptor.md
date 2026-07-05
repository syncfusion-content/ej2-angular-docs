---
layout: post
title: Angular DataManager - Remote Save Adaptor | Syncfusion
description: Angular DataManager Remote Save enables remote data binding with REST APIs, explaining backend configuration and endpoints for efficient data operations.
control: Remote Save Adaptor
platform: ej2-angular
keywords: RemoteSaveAdaptor, client-side operations, hybrid adaptor, local filtering, server CRUD
documentation: ug
domainurl: ##DomainURL##
---

# Hybrid Data Binding in Syncfusion Angular with Client and Server

The `RemoteSaveAdaptor` provides a hybrid approach to data management that combines the best of both client-side and server-side processing. It loads all data once from the server, then performs filtering, sorting, and paging , searching, grouping operations locally in the browser without additional server requests. Only CRUD operations (Create, Update, Delete) communicate with the server to persist data changes.

## What is RemoteSaveAdaptor?

`RemoteSaveAdaptor` is a specialized adaptor that splits data operations into two categories based on whether they modify data or simply read it.

**Client-side operations (fast, no server requests):**

- Filtering
- Sorting
- Searching
- Paging
- Grouping

**Server-side operations (requires server requests):**

- Create (Insert)
- Update (Edit)
- Delete (Remove)

**Data flow:**

1. Initial load: Fetches all data from server once.
2. User interactions: Filtering, sorting, and paging happen instantly in browser (no server calls).
3. Data changes: Only CRUD operations (add, edit, and delete) send requests to server.
4. Result: Fast UI with secure data persistence.

**Visual comparison:**

| Operation   | UrlAdaptor | RemoteSaveAdaptor |
|-------------|------------|-------------------|
| Filter      | Server     | Client            |
| Sort        | Server     | Client            |
| Page        | Server     | Client            |
| Edit        | Server     | Server            |
| Total       | 4          | 1                 |

## When to use RemoteSaveAdaptor?

- Medium-sized datasets (1K-50K records that fit in browser memory).
- Need instant filtering, sorting without server delay.
- Many read operations, few write operations.
- Want to reduce server load for common operations.
- Network latency is a concern.
- Users frequently switch between filters, sorts, and pages.

The hybrid data binding concept is not suitable for the following scenarios:

- Very large datasets (100K+ records) - use `UrlAdaptor` instead.
- Data changes frequently on server (real-time updates).
- Memory-constrained client devices.
- Complex server-side business logic for filtering.
- Limited bandwidth for initial data load.

This guide demonstrates setting up `RemoteSaveAdaptor` with ASP.NET Core backend, including the implementation of complete CRUD operations.

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

## Backend setup (ASP.NET Core API)

Since `RemoteSaveAdaptor` handles all read operations on the client-side, the backend only needs to:

1. Provide initial data (all records).
2. Handle CRUD operations (Insert, Update, Delete).

### Step 1: Create project

New projects can be created in several ways depending on the platform.

**Option 1: Visual Studio**

Open **Visual Studio 2022 or later**, create a new project, search for the **Angular and ASP.NET Core** template, name the project **RemoteSaveAdaptor**, select **.NET 8.0 or later**, and click **Create**.

For detailed instructions, see [Microsoft's documentation](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-angular?view=vs-2022).

**Option 2: Using terminal**

**Windows (PowerShell):** 
Press the <kbd>Windows</kbd> key, type PowerShell, and press <kbd>Enter</kbd>. A terminal window opens for running commands.

**Visual Studio Code:**  
Open VS Code, then from the top menu select **View → Terminal**. The integrated terminal appears at the bottom of the editor.

**macOS (Terminal):**  
Press <kbd>Command</kbd> + <kbd>Space</kbd> to open Spotlight Search, type Terminal, and press <kbd>Enter</kbd>.

```bash
dotnet new angular -n RemoteSaveAdaptor
cd RemoteSaveAdaptor
```

After project creation, the folder structure will appear as follows:

```
RemoteSaveAdaptor/
├── RemoteSaveAdaptor.client/        # Angular frontend.
│   ├── src/
│   │   ├── app/
│   │   │   └── app.component.ts     # Add RemoteSaveAdaptor here.
│   │   └── main.ts
│   ├── angular.json
│   └── package.json
│
└── RemoteSaveAdaptor.Server/        # ASP.NET Core backend (API).
    ├── Controllers/                 # API controllers (will be created here).
    ├── Models/                      # Data models (will be created here).
    └── Program.cs                   # Server configuration.
```

### Step 2: Create data model

Create a **Models** folder in the **RemoteSaveAdaptor.Server** project, then add **OrdersDetails.cs** class file. Replace default content with the implementation below:

{% tabs %}
{% highlight cs tabtitle="OrdersDetails.cs" %}

using System.ComponentModel.DataAnnotations;

namespace RemoteSaveAdaptor.Models
{
  public class OrdersDetails
  {
    // Static in-memory data store (replace with database in production).
    public static List<OrdersDetails> order = new List<OrdersDetails>();

    // Default constructor.
    public OrdersDetails()
    {
    }

    // Parameterized constructor.
    public OrdersDetails(int OrderID, string CustomerId, int EmployeeId, double Freight, bool Verified, DateTime OrderDate, string ShipCity, string ShipName, string ShipCountry, DateTime ShippedDate, string ShipAddress)
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
    /// Generates sample order data.
    /// NOTE: For RemoteSaveAdaptor, this returns ALL records at once .
    /// since filtering/paging happens on client-side.
    /// In production, this should fetch from database.
    /// </summary>
    public static List<OrdersDetails> GetAllRecords()
    {
      if (order.Count() == 0)
      {
        int code = 10000;
        // Generate 10,000 sample records (2000 iterations × 5 records).
        // RemoteSaveAdaptor can handle this as it loads all data once.
        for (int i = 1; i <= 2000; i++)
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
    // Properties
    [Key]
    public int OrderID { get; set; }
    
    public string? CustomerID { get; set; }
    
    public int? EmployeeID { get; set; }
    
    public double? Freight { get; set; }
    
    public string? ShipCity { get; set; }
    . . .
    . . .
    . . .
  }
}

{% endhighlight %}
{% endtabs %}

> This example generates "10,000" records. `RemoteSaveAdaptor` loads all records at once, so consider dataset size. For 100K+ records, use `UrlAdaptor` or `ODataV4Adaptor` instead.

### Step 3: Create API controller

Create `OrdersController.cs` in the controllers folder. With `RemoteSaveAdaptor`, the controller only needs to return all data on initial load and handle basic CRUD operations.

{% tabs %}
{% highlight cs tabtitle="OrdersController.cs" %}

using Microsoft.AspNetCore.Mvc;
using RemoteSaveAdaptor.Models;

namespace RemoteSaveAdaptor.Controllers
{
  [ApiController]
  public class OrdersController : ControllerBase
  {
    /// <summary>
    /// GET endpoint - Returns all records.
    /// Optional: Can be used for initial data load.
    /// </summary>
    [HttpGet]
    [Route("api/[controller]")]
    public List<OrdersDetails> GetOrderData()
    {
      // Return ALL records - RemoteSaveAdaptor handles filtering/paging on client.
      return OrdersDetails.GetAllRecords().ToList();
    }

    /// <summary>
    /// POST endpoint - Returns all records with count.
    /// RemoteSaveAdaptor loads ALL data once, then handles.
    /// filtering, sorting, and paging on client-side.
    /// </summary>
    [HttpPost]
    [Route("api/[controller]")]
    public object Post()
    {
      // Retrieve ALL data from data source.
      var DataSource = GetOrderData();

      // Get total records count.
      int totalRecordsCount = DataSource.Count();

      // CRITICAL: Return ALL records (no server-side filtering/paging).
      // Client will handle these operations.
      return new { result = DataSource, count = totalRecordsCount };
    }
  }
}

{% endhighlight %}
{% endtabs %}

### Step 4: CRUD model structure

The below class is used to structure data sent during CRUD operations:

{% tabs %}
{% highlight cs tabtitle="CRUDModel.cs" %}

public class CRUDModel<T> where T : class
{
  public string? action { get; set; }
  public string? keyColumn { get; set; }
  public object? key { get; set; }
  public T? value { get; set; }
  public List<T>? added { get; set; }
  public List<T>? changed { get; set; }
  public List<T>? deleted { get; set; }
  public IDictionary<string, object>? @params { get; set; }
}

{% endhighlight %}
{% endtabs %}

### Step 5: Insert operation

To insert a new record, utilize the `insertUrl` property to specify the controller action mapping URL for the insert operation. Implement the "Insert" method in the API controller to handle the addition of new records. The details of the newly added record are bound to the "newRecord" parameter.

{% tabs %}
{% highlight cs tabtitle="OrdersController.cs" %}

/// <summary>
/// Inserts a new data item into the data collection.
/// </summary>
/// <param name="newRecord">The order to be inserted.</param>
/// <returns>It returns the newly inserted record detail.</returns>
[HttpPost]
[Route("api/Orders/Insert")]
public ActionResult Insert([FromBody] CRUDModel<OrdersDetails> newRecord)
{
  if (newRecord.value !=null)
  {
    OrdersDetails.GetAllRecords().Insert(0, newRecord.value);
  }  
  return Json(newRecord.value);
}

{% endhighlight %}
{% endtabs %}

### Step 6: Update operation

For updating existing records, use the `updateUrl` property to specify the controller action mapping URL for the update operation. Implement the "Update" method in the API controller to handle record updates. The updated record details are bound to the "updatedRecord" parameter.

{% tabs %}
{% highlight cs tabtitle="OrdersController.cs" %}

/// <summary>
/// Updates an existing order.
/// </summary>
/// <param name="updateRecord">The updated order details.</param>
/// <returns>It returns the updated order details.</returns>
[HttpPost]
[Route("api/Orders/Update")]
public object Update([FromBody] CRUDModel<OrdersDetails> updatedRecord)
{
  var updatedOrder = updatedRecord.value;
  if (updatedOrder != null)
  {
    var data = OrdersDetails.GetAllRecords().FirstOrDefault(or => or.OrderID == updatedOrder.OrderID);
    if (data != null)
    {
      // Update the existing record.
      data.OrderID = updatedOrder.OrderID;
      data.CustomerID = updatedOrder.CustomerID;
      data.Freight = updatedOrder.Freight;
      data.ShipCity = updatedOrder.ShipCity;
      data.ShipCountry = updatedOrder.ShipCountry;
      data.Verified = updatedOrder.Verified;
      // Update other properties similarly.
    }
  }
  return updatedRecord;
}

{% endhighlight %}
{% endtabs %}

### Step 7: Delete operation

To delete existing records, use the `removeUrl` property to specify the controller action mapping URL for the delete operation. The primary key value of the deleted record is bound to the "deletedRecord" parameter.

{% tabs %}
{% highlight cs tabtitle="OrdersController.cs" %}

/// <summary>
/// Deletes an order.
/// </summary>
/// <param name="deletedRecord">It contains the specific record detail which is need to be removed.</param>
/// <returns>It returns the deleted record detail.</returns>
[HttpPost]
[Route("api/Orders/Remove")]
public object Remove([FromBody] CRUDModel<OrdersDetails> deletedRecord)
{
  // Get key value from the deletedRecord.
  int orderId = int.Parse(deletedRecord.key.ToString()); 
  var data = OrdersDetails.GetAllRecords().FirstOrDefault(orderData => orderData.OrderID == orderId);
  if (data != null)
  {
    // Remove the record from the data collection.
    OrdersDetails.GetAllRecords().Remove(data);
  }
  return deletedRecord;
}

{% endhighlight %}
{% endtabs %}

### Step 8: CORS configuration

Ensure API service is configured to handle CORS (Cross-Origin Resource Sharing) in **Program.cs** if necessary:

{% tabs %}
{% highlight cs tabtitle="Program.cs" %}

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
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Enable CORS middleware (must be before UseRouting).
app.UseCors();

// Map controller routes.
app.MapControllers();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.MapOpenApi();
}
app.UseDefaultFiles();
app.MapStaticAssets();
app.Run();

{% endhighlight %}
{% endtabs %}

>  `AllowAnyOrigin()` is suitable for development. Production environments should specify exact origins: `policy.WithOrigins("https://yourdomain.com")`

### Run the application

Run the application in Visual Studio. It will be accessible on a URL like **https://localhost:xxxx**. 

After running the application, verify that the server-side API controller is successfully returning the order data in the URL **https://localhost:xxxx/api/Orders**. Here **xxxx** denotes the port number.

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| Initial load is slow | Loading all records at once | Consider pagination or use `UrlAdaptor` for large datasets |
| Filtering not working | Data not bound correctly | Ensure `json` property has all data before creating DataManager |
| CRUD operations fail | URLs not configured | Verify `insertUrl`, `updateUrl`, `removeUrl` are correct |
| Client shows no data | Fetch error or wrong data format | Check browser console for errors, verify API response format |
| Memory issues | Dataset too large | Reduce dataset size or switch to `UrlAdaptor` |
| Sorting/filtering slow | Too many records | Consider using `UrlAdaptor` for server-side operations |

## Integration with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components

To integrate the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component with the `RemoteSaveAdaptor`, refer to the documentation below:

- [Grid](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/remote-save-adaptor)

## See also

- [Customize data handling](./custom-adaptor) 
- [Connect to custom REST APIs](./url-adaptor)
- [Bind local JSON data](./json-adaptor)
- [Connect to GraphQL services](./graphql-adaptor)
- [Connect to OData v4 services](./odatav4-adaptor)
- [Connect to Web Method services](./web-method-adaptor)
- [Connect to ASP.NET Web API](./webapi-adaptor)
- [Adding custom headers](../how-to#adding-custom-headers)