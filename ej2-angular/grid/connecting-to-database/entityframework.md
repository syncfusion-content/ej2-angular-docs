---
layout: post
title: Bind SQL Server Data in Syncfusion Angular Grid using Entity Framework
description: Learn how to consume data from Microsoft SQL Server using Entity Framework, bind it to Syncfusion Angular Grid, and perform CRUD operations.
platform: ej2-angular
control: grid
keywords: adaptors, customadaptor, urladaptor, entityframework, remotedata 
documentation: ug
domainurl: ##DomainURL##
---

# Connect SQL Server Data to Syncfusion Angular Grid Using Entity Framework

This section details connecting and retrieving data from a Microsoft SQL Server database using [Entity Framework](https://learn.microsoft.com/en-us/ef/core/), and binding that data to the Syncfusion Angular Grid.

The Microsoft SQL Server database can be bound to the Grid using **Entity Framework** by several means—including the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource) property, custom adaptor, and remote binding with various adaptors. Two approaches are demonstrated here, both supporting full data handling and CRUD operation customization.

**Entity Framework Overview**

Entity Framework is an open-source [ORM framework](https://en.wikipedia.org/wiki/Object-relational_mapping) for .NET, supported by Microsoft. It lets developers manipulate data using domain-specific objects rather than focusing on raw database tables and columns, streamlining code and maintenance for data-driven applications.

**1. Using UrlAdaptor**

The [UrlAdaptor](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/url-adaptor?cs-save-lang=1&cs-lang=csharp) serves as the base adaptor for connecting remote data services to UI components. It enables remote binding by linking to a pre-configured API service connected to SQL Server. While the Grid supports other adaptors—like [Web API](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/web-api-adaptor), [ODataV4](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/odatav4-adaptor), and [GraphQL](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/graphql-adaptor)—the `UrlAdaptor` is especially useful for custom APIs that control data and CRUD logic, returning data in the `result` and `count` format.

**2. Using CustomAdaptor**

The [CustomAdaptor](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/custom-adaptor) acts as a mediator between UI and backend for data binding. While the database can be bound directly to the Syncfusion Angular Grid's `dataSource`, a `CustomAdaptor` allows comprehensive customization for data and CRUD logic. Each Grid action results in a specific request sent to the `CustomAdaptor`. All supported data operations (**searching**, **filtering**, **sorting**, **aggregation**, **paging**, **grouping**) can use either the built-in or custom methods, as long as the API response has a `result` and `count` structure. CRUD methods can be overridden for custom functionality as needed.

## Bind Data Using Entity Framework from SQL Server via an API Service

This section provides a step-by-step guide for using Entity Framework to retrieve SQL Server data through an API, then binding it to the Syncfusion Angular Grid.

### Creating an API Service

**1.** Open Visual Studio and create a new Angular and ASP.NET Core project called **Grid_EntityFramework**. Follow the [detailed Microsoft tutorial](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-angular?view=vs-2022) for step-by-step instructions.

**2.** Install the [Microsoft.EntityFrameworkCore.SqlServer](https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.SqlServer/) and [Microsoft.EntityFrameworkCore](https://www.nuget.org/packages/Microsoft.EntityFrameworkCore) NuGet packages to enable Entity Framework Core with SQL Server.

**3.** Create an API controller (e.g., **GridController.cs**) under the **Controllers** folder to facilitate Grid/backend data exchange.

**4.** In the controller, establish a SQL Server connection within a method such as **GetOrderData()** via **OrderDbContext**, which inherits from **DbContext** and manages the database connection using your provided connection string. It includes a **DbSet&lt;Orders&gt;** for the `Orders` table, querying and returning a list of typed objects for Grid binding. Example:

{% tabs %}
{% highlight cs tabtitle="GridController.cs" %}

using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using Syncfusion.EJ2.Base;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Grid_EntityFramework.Server.Controllers
{
  [ApiController]
  public class GridController : ControllerBase
  {
    string ConnectionString = @"<Enter a valid connection string>";

    /// <summary>
    /// Processes the DataManager request to perform searching, filtering, sorting, and paging operations.
    /// </summary>
    /// <param name="DataManagerRequest">Contains the details of the data operation requested.</param>
    /// <returns>Returns a JSON object along with the total record count.</returns>
    [HttpPost]
    [Route("api/[controller]")]
    public object Post([FromBody] DataManagerRequest DataManagerRequest)
    {
      // Retrieve data from the data source (e.g., database).
      IQueryable<Orders> DataSource = GetOrderData().AsQueryable();

      // Get the total count of records.
      int totalRecordsCount = DataSource.Count();

      // Return data based on the request.
      return new { result = DataSource, count = totalRecordsCount };
    }

    /// <summary>
    /// Retrieves the order data from the database.
    /// </summary>
    /// <returns>Returns a list of orders fetched from the database.</returns>
    [HttpGet]
    [Route("api/[controller]")]
    public List<Orders> GetOrderData()
    {
      using (OrderDbContext Context = new OrderDbContext(ConnectionString))
      {
        // Retrieve orders from the orders DbSet and convert to list asynchronously.
        List<Orders> orders = Context.Orders.ToList();
        return orders;
      }
    }

    // Create a class that inherits from DbContext(Entity Framework Core).
    public class OrderDbContext : DbContext
    {
      //Declare a private variable to store the connection string.
      private readonly string _ConnectionString;

      //Define a constructor that accepts a connection string.
      public OrderDbContext(string ConnectionString)
      {
        //Store the provided connection string.
        _ConnectionString = ConnectionString;
      }

      //Override the onConfiguring method to tell EF Core to use SQL server.
      protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
      {
        // Use the connection string to configure the database connection.
        optionsBuilder.UseSqlServer(_ConnectionString);
      }
      
      // Define a DbSet to represent the orders table in the database.
      public DbSet<Orders> Orders { get; set; }
    }
        
    public class Orders
    {
      [Key]
      public int? OrderID { get; set; }
      public string? CustomerID { get; set; }
      public int? EmployeeID { get; set; }
      public decimal Freight { get; set; }
      public string? ShipCity { get; set; }
    }
  }
}

{% endhighlight %}
{% endtabs %}

**5.** Run the application. It will be hosted at a URL such as `https://localhost:xxxx`.

**6.** The API endpoint serving the data will be at `https://localhost:xxxx/api/Grid`.

![Screenshot showing the hosted API URL for SQL Server data returned by the controller](../images/Ms-Sql-data.png)

### Connecting the Syncfusion Angular Grid to an API Service

To bind the Syncfusion Angular Grid in your Angular application through the API service:

**Step 1: Install Syncfusion Packages**

Open a terminal in your project's client folder and install the necessary Syncfusion packages:

```bash
npm install @syncfusion/ej2-angular-grids --save
npm install @syncfusion/ej2-data --save
```

**Step 2: Import Grid Module**

Import and register **GridModule** in your Angular app module from `@syncfusion/ej2-angular-grids`.

**Step 3: Add CSS References**

Reference the required Syncfusion stylesheets in your `styles.css`:

{% tabs %}
{% highlight css tabtitle="styles.css" %}

  @import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
  @import '../node_modules/@syncfusion/ej2-calendars/styles/material3.css';
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
  @import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css';
  @import '../node_modules/@syncfusion/ej2-angular-grids/styles/material3.css';

{% endhighlight %}
{% endtabs %}

**2.** In your component file (e.g., **app.component.ts**), import `DataManager` and `UrlAdaptor` from `@syncfusion/ej2-data`. Create a [DataManager](https://ej2.syncfusion.com/angular/documentation/data/getting-started) instance specifying the URL of your API endpoint(https:localhost:xxxx/api/grid) using the `url` property and set the adaptor `UrlAdaptor`.

**3.** The `DataManager` offers multiple adaptor options to connect with remote database based on an API service. Below is an example of the `UrlAdaptor` configuration where an API service are set up to return the resulting data in the `result` and `count` format.

**4.** The `UrlAdaptor` acts as the base adaptor for interacting with remote data service. Most of the built-in adaptors are derived from the `UrlAdaptor`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild } from '@angular/core';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { GridComponent, GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [GridModule],
})
export class AppComponent {
  @ViewChild('grid') public grid?: GridComponent;
  public data?: DataManager;

  public ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://localhost:xxxx/api/Grid', // Replace your hosted link.
      adaptor: new UrlAdaptor()
    });
  }
}

{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}

<ejs-grid #grid [dataSource]='data' height="348px">
  <e-columns>
    <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
    <e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
    <e-column field='EmployeeID' headerText='Employee ID' width='160' textAlign='Right'></e-column>
    <e-column field='Freight' headerText='Freight' format="C2" width='160' textAlign='Right'></e-column>
    <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
  </e-columns>
</ejs-grid>

{% endhighlight %}

{% highlight cs tabtitle="GridController.cs" %}

using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using Syncfusion.EJ2.Base;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Grid_EntityFramework.Server.Controllers
{
  [ApiController]
  public class GridController : ControllerBase
  {
    string ConnectionString = @"<Enter a valid connection string>";

    /// <summary>
    /// Processes the DataManager request to perform searching, filtering, sorting, and paging operations.
    /// </summary>
    /// <param name="DataManagerRequest">Contains the details of the data operation requested.</param>
    /// <returns>Returns a JSON object along with the total record count.</returns>
    [HttpPost]
    [Route("api/[controller]")]
    public object Post([FromBody] DataManagerRequest DataManagerRequest)
    {
      // Retrieve data from the data source (e.g., database).
      IQueryable<Orders> DataSource = GetOrderData().AsQueryable();

      // Get the total count of records.
      int totalRecordsCount = DataSource.Count();

      // Return data based on the request.
      return new { result = DataSource, count = totalRecordsCount };
    }

    /// <summary>
    /// Retrieves the order data from the database.
    /// </summary>
    /// <returns>Returns a list of orders fetched from the database.</returns>
    [HttpGet]
    [Route("api/[controller]")]
    public List<Orders> GetOrderData()
    {
      using (OrderDbContext Context = new OrderDbContext(ConnectionString))
      {
        // Retrieve orders from the orders DbSet and convert to list asynchronously.
        List<Orders> orders = Context.Orders.ToList();
        return orders;
      }
    }

    // Create a class that inherits from DbContext(Entity Framework Core).
    public class OrderDbContext : DbContext
    {
      //Declare a private variable to store the connection string.
      private readonly string _ConnectionString;

      //Define a constructor that accepts a connection string.
      public OrderDbContext(string ConnectionString)
      {
        //Store the provided connection string.
        _ConnectionString = ConnectionString;
      }

      //Override the onConfiguring method to tell EF Core to use SQL server.
      protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
      {
        // Use the connection string to configure the database connection.
        optionsBuilder.UseSqlServer(_ConnectionString);
      }
      
      // Define a DbSet to represent the orders table in the database.
      public DbSet<Orders> Orders { get; set; }
    }
        
    public class Orders
    {
      [Key]
      public int? OrderID { get; set; }
      public string? CustomerID { get; set; }
      public int? EmployeeID { get; set; }
      public decimal Freight { get; set; }
      public string? ShipCity { get; set; }
    }
  }
}

{% endhighlight %}
{% endtabs %}

> **Note:** Replace `https://localhost:xxxx/api/Grid` with the real API endpoint.

**5.** Launch the app. It should be visible at a URL like **https://localhost:xxxx**.

> Ensure your API service is configured to handle CORS (Cross-Origin Resource Sharing), if necessary.

  ```cs
  [program.cs]
  builder.Services.AddCors(options =>
  {
    options.AddDefaultPolicy(builder =>
    {
      builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
  });
  var app = builder.Build();
  app.UseCors();
  ```

> * The Syncfusion Angular Grid provides built-in support for handling various data operations such as searching, sorting, filtering, aggregate and paging on the server-side. These operations can be handled using methods such as `PerformSearching`, `PerformFiltering`, `PerformSorting`, `PerformTake` and `PerformSkip` available in the [Syncfusion.EJ2.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.AspNet.Core/) package. Let’s explore how to manage these data operations using the `UrlAdaptor`.
> * In an API service project, add `Syncfusion.EJ2.AspNet.Core` by opening the NuGet package manager in Visual Studio (Tools → NuGet Package Manager → Manage NuGet Packages for Solution), search and install it.
> * To access `DataManagerRequest` and `QueryableOperation`, import `Syncfusion.EJ2.Base` in `GridController.cs` file.
 
### Handling searching operation

To handle searching operation, ensure that your API endpoint supports custom searching criteria. Implement the searching logic on the server-side using the `PerformSearching` method from the `QueryableOperation` class. This allows the custom data source to undergo searching based on the criteria specified in the incoming `DataManagerRequest` object.

{% tabs %}
{% highlight cs tabtitle="GridController.cs" %}

/// <summary>
/// Processes the DataManager request to perform searching operation.
/// </summary>
/// <param name="DataManagerRequest">Contains the details of the data operation requested.</param>
/// <returns>Returns a JSON object with the searched data along with the total record count.</returns>
[HttpPost]
[Route("api/[controller]")]
public object Post([FromBody] DataManagerRequest DataManagerRequest) 
{
  // Retrieve data from the data source (e.g., database).
  IQueryable<Orders> DataSource = GetOrderData().AsQueryable();

  // Initialize QueryableOperation instance.
  QueryableOperation queryableOperation = new QueryableOperation();

  // Handling searching operation.
  if(DataManagerRequest.Search != null && DataManagerRequest.Search.Count > 0) 
  {
    DataSource = queryableOperation.PerformSearching(DataSource, DataManagerRequest.Search);
    //Add custom logic here if needed and remove above method.
  }

  // Get the total count of records.
  int totalRecordsCount = DataSource.Count();

  // Return data based on the request.
  return new { result = DataSource, count = totalRecordsCount };
}

{% endhighlight %}

{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild } from '@angular/core';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { GridComponent, ToolbarItems, GridModule, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  providers: [ToolbarService],
  imports: [GridModule],
})
export class AppComponent {
  @ViewChild('grid') public grid?: GridComponent;
  public data?: DataManager;

  public ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://localhost:xxxx/api/Grid', // Replace your hosted link.
      adaptor: new UrlAdaptor()
    });
    this.toolbar = ['Search'];
  }
}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

<ejs-grid #grid [dataSource]='data' [toolbar]="toolbar" height="348px">
  <e-columns>
    <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
    <e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
    <e-column field='EmployeeID' headerText='Employee ID' width='160' textAlign='Right'></e-column>
    <e-column field='Freight' headerText='Freight' format="C2" width='160' textAlign='Right'></e-column>
    <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
  </e-columns>
</ejs-grid>

{% endhighlight %}
{% endtabs %}

### Handling filtering operation

To handle filtering operation, ensure that your API endpoint supports custom filtering criteria. Implement the filtering logic on the server-side using the `PerformFiltering` method from the `QueryableOperation` class. This allows the custom data source to undergo filtering based on the criteria specified in the incoming `DataManagerRequest` object.

{% tabs %}
{% highlight cs tabtitle="GridController.cs" %}

/// <summary>
/// Processes the DataManager request to perform filtering operation.
/// </summary>
/// <param name="DataManagerRequest">Contains the details of the data operation requested.</param>
/// <returns>Returns a JSON object with the filtered data along with the total record count.</returns>
[HttpPost]
[Route("api/[controller]")]
public object Post([FromBody] DataManagerRequest DataManagerRequest) 
{
  // Retrieve data from the data source (e.g., database).
  IQueryable<Orders> DataSource = GetOrderData().AsQueryable();

  // Initialize QueryableOperation instance.
  QueryableOperation queryableOperation = new QueryableOperation();

  // Handling filtering operation.
  if (DataManagerRequest.Where != null && DataManagerRequest.Where.Count > 0) 
  {
    foreach (WhereFilter condition in DataManagerRequest.Where) 
    {
      foreach (WhereFilter predicate in condition.predicates) 
      {
        DataSource = queryableOperation.PerformFiltering(DataSource, DataManagerRequest.Where, predicate.Operator);
        //Add custom logic here if needed and remove above method.
      }
    }
  }

  // Get the total count of records.
  int totalRecordsCount = DataSource.Count();

  // Return data based on the request.
  return new { result = DataSource, count = totalRecordsCount };
}

{% endhighlight %}

{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild } from '@angular/core';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { GridComponent, FilterService, GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  providers: [FilterService],
  imports: [GridModule],
})
export class AppComponent {
  @ViewChild('grid') public grid?: GridComponent;
  public data?: DataManager;

  public ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://localhost:xxxx/api/Grid', // Replace your hosted link.
      adaptor: new UrlAdaptor()
    });
  }
}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

<ejs-grid #grid [dataSource]='data' allowFiltering="true" height="348px">
  <e-columns>
    <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
    <e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
    <e-column field='EmployeeID' headerText='Employee ID' width='160' textAlign='Right'></e-column>
    <e-column field='Freight' headerText='Freight' format="C2" width='160' textAlign='Right'></e-column>
    <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
  </e-columns>
</ejs-grid>

{% endhighlight %}
{% endtabs %}

### Handling sorting operation

To handle sorting operation, ensure that your API endpoint supports custom sorting criteria. Implement the sorting logic on the server-side using the `PerformSorting` method from the `QueryableOperation` class. This allows the custom data source to undergo sorting based on the criteria specified in the incoming `DataManagerRequest` object.

{% tabs %}
{% highlight cs tabtitle="GridController.cs" %}

/// <summary>
/// Processes the DataManager request to perform sorting operation.
/// </summary>
/// <param name="DataManagerRequest">Contains the details of the data operation requested.</param>
/// <returns>Returns a JSON object with the sorted data along with the total record count.</returns>
[HttpPost]
[Route("api/[controller]")]
public object Post([FromBody] DataManagerRequest DataManagerRequest) 
{
  // Retrieve data from the data source (e.g., database).
  IQueryable<Orders> DataSource = GetOrderData().AsQueryable();

  // Initialize QueryableOperation instance.
  QueryableOperation queryableOperation = new QueryableOperation(); 

  // Handling sorting operation.
  if(DataManagerRequest.Sorted != null && DataManagerRequest.Sorted.Count > 0) 
  {
    DataSource = queryableOperation.PerformSorting(DataSource, DataManagerRequest.Sorted);
    //Add custom logic here if needed and remove above method.
  }

  // Get the total count of records.
  int totalRecordsCount = DataSource.Count();

  // Return data based on the request.
  return new { result = DataSource, count = totalRecordsCount };
}

{% endhighlight %}

{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild } from '@angular/core';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { GridComponent, SortService, GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  providers: [SortService],
  imports: [GridModule],
})
export class AppComponent {
  @ViewChild('grid') public grid?: GridComponent;
  public data?: DataManager;

  public ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://localhost:xxxx/api/Grid', // Replace your hosted link.
      adaptor: new UrlAdaptor()
    });
  }
}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

<ejs-grid #grid [dataSource]='data' allowSorting="true" height="348px">
  <e-columns>
    <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
    <e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
    <e-column field='EmployeeID' headerText='Employee ID' width='160' textAlign='Right'></e-column>
    <e-column field='Freight' headerText='Freight' format="C2" width='160' textAlign='Right'></e-column>
    <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
  </e-columns>
</ejs-grid>

{% endhighlight %}
{% endtabs %}

### Handling paging operation

To handle paging operation, ensure that your API endpoint supports custom paging criteria. Implement the paging logic on the server-side using the `PerformTake` and `PerformSkip` method from the `QueryableOperation` class. This allows the custom data source to undergo paging based on the criteria specified in the incoming `DataManagerRequest` object.

{% tabs %}
{% highlight cs tabtitle="GridController.cs" %}

/// <summary>
/// Processes the DataManager request to perform paging operation.
/// </summary>
/// <param name="DataManagerRequest">Contains the details of the data operation requested.</param>
/// <returns>Returns a JSON object with the paginated data along with the total record count.</returns>
[HttpPost]
[Route("api/[controller]")]
public object Post([FromBody] DataManagerRequest DataManagerRequest) 
{
  // Retrieve data from the data source (e.g., database).
  IQueryable<Orders> DataSource = GetOrderData().AsQueryable();
  
  // Initialize QueryableOperation instance.
  QueryableOperation queryableOperation = new QueryableOperation();

  // Get the total count of records.
  int totalRecordsCount = DataSource.Count();

  // Handling paging operation.
  if (DataManagerRequest.Skip != 0) 
  {
    DataSource = queryableOperation.PerformSkip(DataSource, DataManagerRequest.Skip);
    //Add custom logic here if needed and remove above method.
  }
  if (DataManagerRequest.Take != 0) 
  {
    DataSource = queryableOperation.PerformTake(DataSource, DataManagerRequest.Take);
    //Add custom logic here if needed and remove above method.
  }

  // Return data based on the request.
  return new { result = DataSource, count = totalRecordsCount };
}

{% endhighlight %}

{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild } from '@angular/core';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { GridComponent, PageService, GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  providers: [PageService],
  imports: [GridModule],
})
export class AppComponent {
  @ViewChild('grid') public grid?: GridComponent;
  public data?: DataManager;

  public ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://localhost:xxxx/api/Grid', // Replace your hosted link.
      adaptor: new UrlAdaptor()
    });
  }
}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

<ejs-grid #grid [dataSource]='data' allowPaging="true" height="348px">
  <e-columns>
    <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
    <e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
    <e-column field='EmployeeID' headerText='Employee ID' width='160' textAlign='Right'></e-column>
    <e-column field='Freight' headerText='Freight' format="C2" width='160' textAlign='Right'></e-column>
    <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
  </e-columns>
</ejs-grid>

{% endhighlight %}
{% endtabs %}

### Handling CRUD operations

The Syncfusion Angular Grid seamlessly integrates CRUD (Create, Read, Update, and Delete) operations with server-side controller actions through specific properties: `insertUrl`, `removeUrl`, `updateUrl` and `batchUrl`. These properties enable the Grid to communicate with the data service for every Grid action, facilitating server-side operations.

**CRUD Operations Mapping**

CRUD operations within the Grid can be mapped to server-side controller actions using specific properties:

1. **insertUrl**: Specifies the URL for inserting new data.
2. **removeUrl**: Specifies the URL for removing existing data.
3. **updateUrl**: Specifies the URL for updating existing data.
4. **batchUrl**: Specifies the URL for batch editing.

To enable editing in Grid, refer to the editing [documentation](https://ej2.syncfusion.com/angular/documentation/grid/editing/edit). In the below example, the inline edit [mode](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) is enabled and [toolbar](https://helpej2.syncfusion.com/angular/documentation/api/grid/#toolbar) property is configured to display toolbar items for editing purposes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild } from '@angular/core';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { GridComponent, EditSettingsModel,GridModule, ToolbarItems,EditService, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  providers: [EditService, ToolbarService],
  imports: [GridModule],
})
export class AppComponent {
  @ViewChild('grid') public grid?: GridComponent;
  public data?: DataManager;
  public editSettings?: EditSettingsModel;
  public toolbar?: ToolbarItems[];
  public employeeIDRules?: Object;
  public customerIDRules?: Object;
  public freightRules?: Object;
  public shipCityRules?: Object;

  public ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://localhost:xxxx/api/Grid', // Replace your hosted link.
      insertUrl: 'https://localhost:xxxx/api/Grid/Insert',
      updateUrl: 'https://localhost:xxxx/api/Grid/Update',
      removeUrl: 'https://localhost:xxxx/api/Grid/Remove', 
      // Enable batch URL when batch editing is enabled.
      //batchUrl: 'https://localhost:xxxx/api/Grid/BatchUpdate', 
      adaptor: new UrlAdaptor()
    });
    this.employeeIDRules = { required: true, number: true };
    this.customerIDRules = { required: true };
    this.freightRules = { required: true, min: 1, max: 1000 };
    this.shipCityRules = { required: true };
    this.toolbar = ['Add', 'Update', 'Delete', 'Cancel', 'Search'];
    this.editSettings = { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Normal' };
  }
}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

  <ejs-grid #grid [dataSource]='data' [toolbar]="toolbar" [editSettings]="editSettings" height="348px">
    <e-columns>
      <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isIdentity="true" isPrimaryKey="true"></e-column>
      <e-column field='CustomerID' headerText='Customer ID' [validationRules]='customerIDRules' width='160'></e-column>
      <e-column field='EmployeeID' headerText='Employee ID' [validationRules]='employeeIDRules' width='160' textAlign='Right'></e-column>
      <e-column field='Freight' headerText='Freight' [validationRules]='freightRules' format="C2" width='160' textAlign='Right'></e-column>
      <e-column field='ShipCity' headerText='Ship City' [validationRules]='shipCityRules' width='150'></e-column>
    </e-columns>
  </ejs-grid>

{% endhighlight %}
{% endtabs %}

> * Normal/Inline editing is the default edit [mode](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) for the Grid. To enable CRUD operations, ensure that the [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isprimarykey) property is set to **true** for a specific Grid column, ensuring that its value is unique.
> * If database has an auto generated column, ensure to define [isIdentity](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isidentity) property of Grid column to disable them during adding or editing operations.

**Insert Operation:**

To insert a new row, simply click the **Add** toolbar button. The new record edit form will be displayed as shown below. Upon clicking the **Update** toolbar button, record will inserted into the **Orders** table by calling the following **POST** method of an API. Utilizing `Entity Framework` simplifies database tasks by managing database connections and queries through object-oriented programming, making it easier to work with databases in C# code, as shown in the following code snippet.

{% tabs %}
{% highlight cs tabtitle="GridController.cs" %}

/// <summary>
/// Inserts a new data item into the data collection.
/// </summary>
/// <param name="value">It contains the new record detail which is need to be inserted.</param>
/// <returns>Returns void.</returns>
[HttpPost]
[Route("api/[controller]/Insert")]
public void Insert([FromBody] CRUDModel<Orders> value) 
{
  using (OrderDbContext Context = new OrderDbContext(ConnectionString))
  {
    // Add the provided order to the orders DbSet.
    Context.Orders.Add(value.value);

    // Save changes to the database.
    Context.SaveChanges();
  }

  //Add custom logic here if needed and remove above method.
}

// Create a class that inherits from DbContext(Entity Framework Core).
public class OrderDbContext : DbContext
{
  //Declare a private variable to store the connection string.
  private readonly string _ConnectionString;

  //Define a constructor that accepts a connection string.
  public OrderDbContext(string ConnectionString)
  {
    //Store the provided connection string.
    _ConnectionString = ConnectionString;
  }

  //Override the onConfiguring method to tell EF Core to use SQL server.
  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
    // Use the connection string to configure the database connection.
    optionsBuilder.UseSqlServer(_ConnectionString);
  }
      
  // Define a DbSet to represent the orders table in the database.
  public DbSet<Orders> Orders { get; set; }
}

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

**Update Operation:**

To edit a row, first select desired row and click the **Edit** toolbar button. The edit form will be displayed and proceed to modify any column value as per your requirement. Clicking the **Update** toolbar button will update the edit record in the **Orders** table by involving the following **Post** method of an API. Utilizing `Entity Framework` simplifies database tasks by managing database connections and queries through object-oriented programming, making it easier to work with databases in C# code, as shown in the following code snippet.

{% tabs %}
{% highlight cs tabtitle="GridController.cs" %}

/// <summary>
/// Update a existing data item from the data collection.
/// </summary>
/// <param name="value">It contains the updated record detail which is need to be updated.</param>
/// <returns>Returns void.</returns>
[HttpPost]
[Route("api/[controller]/Update")]
public void Update([FromBody] CRUDModel<Orders> value) 
{
  using (OrderDbContext Context = new OrderDbContext(ConnectionString))
  {
    Orders existingOrder = Context.Orders.Find(value.value.OrderID);
    if (existingOrder != null)
    {
      // Update the existing order with the new values.
      Context.Entry(existingOrder).CurrentValues.SetValues(value.value);

      // Save changes to the database.
      Context.SaveChanges();
    }
  }

  //Add custom logic here if needed and remove above method.
}

// Create a class that inherits from DbContext(Entity Framework Core).
public class OrderDbContext : DbContext
{
  //Declare a private variable to store the connection string.
  private readonly string _ConnectionString;

  //Define a constructor that accepts a connection string.
  public OrderDbContext(string ConnectionString)
  {
    //Store the provided connection string.
    _ConnectionString = ConnectionString;
  }

  //Override the onConfiguring method to tell EF Core to use SQL server.
  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
    // Use the connection string to configure the database connection.
    optionsBuilder.UseSqlServer(_ConnectionString);
  }
      
  // Define a DbSet to represent the orders table in the database.
  public DbSet<Orders> Orders { get; set; }
}

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

**Delete Operation:**

To delete a row, simply select the desired row and click the **Delete** toolbar button. This action will trigger a **DELETE** request to an API, containing the primary key value of the selected record. As a result corresponding record will be removed from the **Orders** table. Utilizing `Entity Framework` simplifies database tasks by managing database connections and queries through object-oriented programming, making it easier to work with databases in C# code, as shown in the following code snippet.

{% tabs %}
{% highlight cs tabtitle="GridController.cs" %}

/// <summary>
/// Remove a specific data item from the data collection.
/// </summary>
/// <param name="value">It contains the specific record detail which is need to be removed.</param>
/// <return>Returns void.</return>
[HttpPost]
[Route("api/[controller]/Remove")]
public void Remove([FromBody] CRUDModel<Orders> value) 
{
  int OrderId = Convert.ToInt32(value.key.ToString());
  using (OrderDbContext Context = new OrderDbContext(ConnectionString))
  {
    Orders Order = Context.Orders.Find(OrderId);
    if (Order != null)
    {
      // Remove the order from the orders DbSet.
      Context.Orders.Remove(Order);

      // Save changes to the database.
      Context.SaveChanges();
    }
  }

  //Add custom logic here if needed and remove above method.
}

// Create a class that inherits from DbContext(Entity Framework Core).
public class OrderDbContext : DbContext
{
  //Declare a private variable to store the connection string.
  private readonly string _ConnectionString;

  //Define a constructor that accepts a connection string.
  public OrderDbContext(string ConnectionString)
  {
    //Store the provided connection string.
    _ConnectionString = ConnectionString;
  }

  //Override the onConfiguring method to tell EF Core to use SQL server.
  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
    // Use the connection string to configure the database connection.
    optionsBuilder.UseSqlServer(_ConnectionString);
  }
      
  // Define a DbSet to represent the orders table in the database.
  public DbSet<Orders> Orders { get; set; }
}

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

**Batch Operation:**

To perform batch operation, define the edit [mode](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) as **Batch** and specify the `batchUrl` property in the `DataManager`. Use the **Add** toolbar button to insert new row in batch editing mode. To edit a cell, double-click the desired cell and update the value as required. To delete a record, simply select the record and press the **Delete** toolbar button. Now, all CRUD operations will be executed in batch editing mode. Clicking the **Update** toolbar button will update the newly added, edited, or deleted records from the **Orders** table using a single API **POST** request.

{% tabs %}
{% highlight cs tabtitle="GridController.cs" %}

/// <summary>
/// Batch update (Insert, Update, and Delete) a collection of data items from the data collection.
/// </summary>
/// <param name="value">The set of information along with details about the CRUD actions to be executed from the database.</param>
/// <returns>Returns void.</returns>
[HttpPost]
[Route("api/[controller]/BatchUpdate")]
public IActionResult BatchUpdate([FromBody] CRUDModel<Orders> value) 
{
  using (OrderDbContext Context = new OrderDbContext(ConnectionString))
  {
    if (value.changed != null && value.changed.Count > 0)
    {
      foreach (Orders Record in (IEnumerable<Orders>)value.changed)
      {
        // Update the changed records.
        Context.Orders.UpdateRange(Record);
      }
    }

    if (value.added != null && value.added.Count > 0)
    {
      foreach (Orders Record in (IEnumerable<Orders>)value.added)
      {
        foreach (Orders order in value.added)
        {
          // This ensures EF does not try to insert OrderID.
          order.OrderID = default; 
        }
        // Add new records.
        Context.Orders.AddRange(value.added);
      }
    }

    if (value.deleted != null && value.deleted.Count > 0)
    {
      foreach (Orders Record in (IEnumerable<Orders>)value.deleted)
      {
        // Find and delete the records.
        Orders ExistingOrder = Context.Orders.Find(Record.OrderID);
        if (ExistingOrder != null)
        {
          Context.Orders.Remove(ExistingOrder);
        }
      }
    }

    // Save changes to the database.
    Context.SaveChanges();
  }
  return new JsonResult(value);
}

// Create a class that inherits from DbContext(Entity Framework Core).
public class OrderDbContext : DbContext
{
  //Declare a private variable to store the connection string.
  private readonly string _ConnectionString;

  //Define a constructor that accepts a connection string.
  public OrderDbContext(string ConnectionString)
  {
    //Store the provided connection string.
    _ConnectionString = ConnectionString;
  }

  //Override the onConfiguring method to tell EF Core to use SQL server.
  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
    // Use the connection string to configure the database connection.
    optionsBuilder.UseSqlServer(_ConnectionString);
  }
      
  // Define a DbSet to represent the orders table in the database.
  public DbSet<Orders> Orders { get; set; }
}

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

When you run the application, the resultant Syncfusion Angular Grid will look like this

![Syncfusion Angular Grid bound with Microsoft SQL Server data using Entity Framework](../images/connecting-micro-curd.gif)

> Find the complete example in [this GitHub repository](https://github.com/SyncfusionExamples/connecting-databases-to-angular-grid/tree/master/Bindind%20SQL%20database%20using%20EF%20and%20UrlAdaptor/Grid_EntityFramework).

## Bind Data from SQL Server Using Entity Framework and CustomAdaptor

This section details how to retrieve data from SQL Server using [CustomAdaptor](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors/custom-adaptor) and Entity Framework, binding it to the Syncfusion Angular Grid.

**4.** Within the `processResponse` method of `CustomAdaptor`, fetch data by calling the **GetOrderData** method.

  * In this **GetOrderData** method, a connection is established to Microsoft SQL Server using **OrderDbContext**. This class extends **DbContext** and is configured to connect to a SQL Server database using the provided connection string. It includes a *DbSet&lt;Orders&gt;** property, enabling interaction with the **Orders** table in the database. The method retrieves all orders from the database asynchronously and returns them as a list of `Orders` objects.

  * Finally, return the response as a `result` and `count` pair object in the `processResponse` method to bind the data to the Grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild } from '@angular/core';
import { DataManager } from '@syncfusion/ej2-data';
import { GridComponent, GridModule } from '@syncfusion/ej2-angular-grids';
import { CustomAdaptor } from './CustomAdaptor'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [GridModule],
})
export class AppComponent {
  @ViewChild('grid') public grid?: GridComponent;
  public data?: DataManager;
    
  public ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://localhost:xxxx/api/Grid',
      adaptor: new CustomAdaptor()
    });
  }
}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

<ejs-grid #grid [dataSource]='data' height="348px">
  <e-columns>
    <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
    <e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
    <e-column field='EmployeeID' headerText='Employee ID' width='160' textAlign='Right'></e-column>
    <e-column field='Freight' headerText='Freight' format="C2" width='160' textAlign='Right'></e-column>
    <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
  </e-columns>
</ejs-grid>

{% endhighlight %}

{% highlight ts tabtitle="CustomAdaptor.ts" %}

import { UrlAdaptor } from '@syncfusion/ej2-data';

export class CustomAdaptor extends UrlAdaptor {
  public override processResponse(): any {
    // Calling base class processResponse function.
    const original: any = super.processResponse.apply(this, arguments as any);
    return original;
  }
}

{% endhighlight %}

{% highlight cs tabtitle="GridController.cs" %}

using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using Syncfusion.EJ2.Base;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Grid_EntityFramework.Server.Controllers
{
  [ApiController]
  public class GridController : ControllerBase
  {
    string ConnectionString = @"<Enter a valid connection string>";

    /// <summary>
    /// Processes the DataManager request to perform searching, filtering, sorting, and paging operations.
    /// </summary>
    /// <param name="DataManagerRequest">Contains the details of the data operation requested.</param>
    /// <returns>Returns a JSON object along with the total record count.</returns>
    [HttpPost]
    [Route("api/[controller]")]
    public object Post([FromBody] DataManagerRequest DataManagerRequest)
    {
      // Retrieve data from the data source (e.g., database).
      IQueryable<Orders> DataSource = GetOrderData().AsQueryable();

      // Get the total count of records.
      int totalRecordsCount = DataSource.Count();

      // Return data based on the request.
      return new { result = DataSource, count = totalRecordsCount };
    }

    /// <summary>
    /// Retrieves the order data from the database.
    /// </summary>
    /// <returns>Returns a list of orders fetched from the database.</returns>
    [HttpGet]
    [Route("api/[controller]")]
    public List<Orders> GetOrderData()
    {
      using (OrderDbContext Context = new OrderDbContext(ConnectionString))
      {
        // Retrieve orders from the orders DbSet and convert to list asynchronously.
        List<Orders> orders = Context.Orders.ToList();
        return orders;
      }
    }

    // Create a class that inherits from DbContext(Entity Framework Core).
    public class OrderDbContext : DbContext
    {
      //Declare a private variable to store the connection string.
      private readonly string _ConnectionString;

      //Define a constructor that accepts a connection string.
      public OrderDbContext(string ConnectionString)
      {
        //Store the provided connection string.
        _ConnectionString = ConnectionString;
      }

      //Override the onConfiguring method to tell EF Core to use SQL server.
      protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
      {
        // Use the connection string to configure the database connection.
        optionsBuilder.UseSqlServer(_ConnectionString);
      }
      
      // Define a DbSet to represent the orders table in the database.
      public DbSet<Orders> Orders { get; set; }
    }
        
    public class Orders
    {
      [Key]
      public int? OrderID { get; set; }
      public string? CustomerID { get; set; }
      public int? EmployeeID { get; set; }
      public decimal Freight { get; set; }
      public string? ShipCity { get; set; }
    }
  }
}

{% endhighlight %}
{% endtabs %}

> * The `DataManagerRequest` encompasses details about the Grid actions such as searching, filtering, sorting, aggregate, paging and grouping.

### Handling searching operation

When utilizing the `CustomAdaptor` in Angular, managing the searching operation involves overriding the `processResponse` method of the `UrlAdaptor` class. 

In the code example below, searching a custom data source can be accomplished by employing the built-in `PerformSearching` method of the `QueryableOperation` class. Alternatively, you can implement your own method for searching operation and bind the resultant data to the Syncfusion Angular Grid.

{% tabs %}
{% highlight cs tabtitle="GridController.cs" %}

/// <summary>
/// Processes the DataManager request to perform searching operation.
/// </summary>
/// <param name="DataManagerRequest">Contains the details of the data operation requested.</param>
/// <returns>Returns a JSON object with the searched data along with the total record count.</returns>
[HttpPost]
[Route("api/[controller]")]
public object Post([FromBody] DataManagerRequest DataManagerRequest) 
{
  // Retrieve data from the data source (e.g., database).
  IQueryable<Orders> DataSource = GetOrderData().AsQueryable();

  // Initialize QueryableOperation instance.
  QueryableOperation queryableOperation = new QueryableOperation();   

  // Handling searching operation.                                     
  if (DataManagerRequest.Search != null && DataManagerRequest.Search.Count > 0) 
  {
    DataSource = queryableOperation.PerformSearching(DataSource, DataManagerRequest.Search);
    //Add custom logic here if needed and remove above method.
  }

  // Get the total count of records.
  int totalRecordsCount = DataSource.Count();

  // Return data based on the request.
  return new { result = DataSource, count = totalRecordsCount };
}

{% endhighlight %}

{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild } from '@angular/core';
import { DataManager } from '@syncfusion/ej2-data';
import { GridComponent, ToolbarItems, ToolbarService, GridModule} from '@syncfusion/ej2-angular-grids';
import { CustomAdaptor } from './CustomAdaptor'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  providers: [ToolbarService],
  imports: [GridModule],
})
export class AppComponent {
  @ViewChild('grid') public grid?: GridComponent;
  public data?: DataManager;
  public toolbar?: ToolbarItems[];

  public ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://localhost:xxxx/api/Grid', // Replace your hosted link.
      adaptor: new CustomAdaptor()
    });
    this.toolbar = ['Search'];
  }
}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

<ejs-grid #grid [dataSource]='data' [toolbar]="toolbar" height="348px">
  <e-columns>
    <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
    <e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
    <e-column field='EmployeeID' headerText='Employee ID' width='160' textAlign='Right'></e-column>
    <e-column field='Freight' headerText='Freight' format="C2" width='160' textAlign='Right'></e-column>
    <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
  </e-columns>
</ejs-grid>

{% endhighlight %}

{% highlight ts tabtitle="customAdaptor.ts" %}

import { UrlAdaptor } from '@syncfusion/ej2-data';

export class CustomAdaptor extends UrlAdaptor {
  public override processResponse(): any {
    // Calling base class processResponse function.
    const original: any = super.processResponse.apply(this, arguments as any);
    return original;
  }
}

{% endhighlight %}
{% endtabs %}

### Handling filtering operation

When utilizing the `CustomAdaptor` in Angular, managing the filtering operation involves overriding the `processResponse` method of the `UrlAdaptor` class.

In the code example below, filtering a custom data source can be achieved by utilizing the built-in `PerformFiltering` method of the `QueryableOperation` class. Alternatively, you can implement your own method for filtering operation and bind the resulting data to the Syncfusion Angular Grid.

{% tabs %}
{% highlight cs tabtitle="GridController.cs" %}

/// <summary>
/// Processes the DataManager request to perform filtering operation.
/// </summary>
/// <param name="DataManagerRequest">Contains the details of the data operation requested.</param>
/// <returns>Returns a JSON object with the filtered data along with the total record count.</returns>
[HttpPost]
[Route("api/[controller]")]
public object Post([FromBody] DataManagerRequest DataManagerRequest) 
{
  // Retrieve data from the data source (e.g., database).
  IQueryable<Orders> DataSource = GetOrderData().AsQueryable();

  // Initialize QueryableOperation instance.
  QueryableOperation queryableOperation = new QueryableOperation();

  // Handling filtering operation.
  if (DataManagerRequest.Where != null && DataManagerRequest.Where.Count > 0) 
  {
    foreach (WhereFilter condition in DataManagerRequest.Where) 
    {
      foreach (WhereFilter predicate in condition.predicates) 
      {
        DataSource = queryableOperation.PerformFiltering(DataSource, DataManagerRequest.Where, predicate.Operator);
        //Add custom logic here if needed and remove above method.
      }
    }
  }

  // Get the total count of records.
  int totalRecordsCount = DataSource.Count();

  // Return data based on the request.
  return new { result = DataSource, count = totalRecordsCount };
}

{% endhighlight %}

{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild } from '@angular/core';
import { DataManager } from '@syncfusion/ej2-data';
import { GridComponent, FilterService, GridModule } from '@syncfusion/ej2-angular-grids';
import { CustomAdaptor } from './CustomAdaptor'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  providers: [FilterService],
  imports: [GridModule],
})
export class AppComponent {
  @ViewChild('grid')public grid?: GridComponent;
  public data?: DataManager;

 public ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://localhost:xxxx/api/Grid', // Replace your hosted link.
      adaptor: new CustomAdaptor()
    });
  }
}
{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

<ejs-grid #grid [dataSource]='data' allowFiltering="true" height="348px">
  <e-columns>
    <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
    <e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
    <e-column field='EmployeeID' headerText='Employee ID' width='160' textAlign='Right'></e-column>
    <e-column field='Freight' headerText='Freight' format="C2" width='160' textAlign='Right'></e-column>
    <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
  </e-columns>
</ejs-grid>

{% endhighlight %}

{% highlight ts tabtitle="customAdaptor.ts" %}

import { UrlAdaptor } from '@syncfusion/ej2-data';

export class CustomAdaptor extends UrlAdaptor {
  public override processResponse(): any {
    // Calling base class processResponse function.
    const original: any = super.processResponse.apply(this, arguments as any);
    return original;
  }
}

{% endhighlight %}
{% endtabs %}

### Handling sorting operation

When utilizing the `CustomAdaptor` in Angular, managing the sorting operation involves overriding the `processResponse` method of the `UrlAdaptor` class.

In the code example below, sorting a custom data source can be accomplished by employing the built-in `PerformSorting` method of the `QueryableOperation` class. Alternatively, you can implement your own method for sorting operation and bind the resulting data to the Syncfusion Angular Grid.

{% tabs %}
{% highlight cs tabtitle="GridController.cs" %}

/// <summary>
/// Processes the DataManager request to perform sorting operation.
/// </summary>
/// <param name="DataManagerRequest">Contains the details of the data operation requested.</param>
/// <returns>Returns a JSON object with the sorted data along with the total record count.</returns>
[HttpPost]
[Route("api/[controller]")]
public object Post([FromBody] DataManagerRequest DataManagerRequest) 
{
  // Retrieve data from the data source (e.g., database).
  IQueryable<Orders> DataSource = GetOrderData().AsQueryable();

  // Initialize QueryableOperation instance.
  QueryableOperation queryableOperation = new QueryableOperation();      

  // Handling sorting operation.
  if (DataManagerRequest.Sorted != null && DataManagerRequest.Sorted.Count > 0) 
  {
    DataSource = queryableOperation.PerformSorting(DataSource, DataManagerRequest.Sorted);
    //Add custom logic here if needed and remove above method.
  }

  // Get the total count of records.
  int totalRecordsCount = DataSource.Count();

  // Return data based on the request.
  return new { result = DataSource, count = totalRecordsCount };
}

{% endhighlight %}

{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild } from '@angular/core';
import { DataManager } from '@syncfusion/ej2-data';
import { GridComponent, SortService, GridModule } from '@syncfusion/ej2-angular-grids';
import { CustomAdaptor } from './CustomAdaptor'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  providers: [SortService],
  imports: [GridModule],
})
export class AppComponent {
  @ViewChild('grid') public grid?: GridComponent;
  public data?: DataManager;

  public ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://localhost:xxxx/api/Grid', // Replace your hosted link.
      adaptor: new CustomAdaptor()
    });
  }
}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

<ejs-grid #grid [dataSource]='data' allowSorting="true" height="348px">
  <e-columns>
    <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
    <e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
    <e-column field='EmployeeID' headerText='Employee ID' width='160' textAlign='Right'></e-column>
    <e-column field='Freight' headerText='Freight' format="C2" width='160' textAlign='Right'></e-column>
    <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
  </e-columns>
</ejs-grid>

{% endhighlight %}

{% highlight ts tabtitle="customAdaptor.ts" %}

import { UrlAdaptor } from '@syncfusion/ej2-data';

export class CustomAdaptor extends UrlAdaptor {
  public override processResponse(): any {
    // Calling base class processResponse function.
    const original: any = super.processResponse.apply(this, arguments as any);
    return original;
  }
}

{% endhighlight %}
{% endtabs %}

### Handling paging operation

When utilizing the `CustomAdaptor` in Angular, managing the paging operation involves overriding the `processResponse` method of the `UrlAdaptor` class.

In the code example below, paging a custom data source can be achieved by utilizing the built-in `PerformTake` and `PerformSkip` method of the `QueryableOperation` class. Alternatively, you can use your own method for paging operation and bind the resulting data to the Syncfusion Angular Grid.

{% tabs %}
{% highlight cs tabtitle="GridController.cs" %}

/// <summary>
/// Processes the DataManager request to perform paging operation.
/// </summary>
/// <param name="DataManagerRequest">Contains the details of the data operation requested.</param>
/// <returns>Returns a JSON object with the paginated data along with the total record count.</returns>
[HttpPost]
[Route("api/[controller]")]
public object Post([FromBody] DataManagerRequest DataManagerRequest) 
{
  // Retrieve data from the data source (e.g., database).
  IQueryable<Orders> DataSource = GetOrderData().AsQueryable();
  QueryableOperation queryableOperation = new QueryableOperation();

  // Get the total count of records.
  int totalRecordsCount = DataSource.Count();

  // Handling paging operation.
  if (DataManagerRequest.Skip != 0) 
  {
    DataSource = queryableOperation.PerformSkip(DataSource, DataManagerRequest.Skip);
    //Add custom logic here if needed and remove above method.
  }
  if (DataManagerRequest.Take != 0) 
  {
    DataSource = queryableOperation.PerformTake(DataSource, DataManagerRequest.Take);
    //Add custom logic here if needed and remove above method.
  }

  // Return data based on the request.
  return new { result = DataSource, count = totalRecordsCount };
}

{% endhighlight %}

{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild } from '@angular/core';
import { DataManager } from '@syncfusion/ej2-data';
import { GridComponent, PageService, GridModule } from '@syncfusion/ej2-angular-grids';
import { CustomAdaptor } from './CustomAdaptor'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  providers: [PageService],
  imports: [GridModule],
})
export class AppComponent {
  @ViewChild('grid') public grid?: GridComponent;
  public data?: DataManager;

  public ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://localhost:xxxx/api/Grid', // Replace your hosted link.
      adaptor: new CustomAdaptor()
    });
  }
}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

<ejs-grid #grid [dataSource]='data' allowPaging="true" height="348px">
  <e-columns>
    <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
    <e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
    <e-column field='EmployeeID' headerText='Employee ID' width='160' textAlign='Right'></e-column>
    <e-column field='Freight' headerText='Freight' format="C2" width='160' textAlign='Right'></e-column>
    <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
  </e-columns>
</ejs-grid>

{% endhighlight %}

{% highlight ts tabtitle="customAdaptor.ts" %}

import { UrlAdaptor } from '@syncfusion/ej2-data';

export class CustomAdaptor extends UrlAdaptor {
  public override processResponse(): any {
    // Calling base class processResponse function.
    const original: any = super.processResponse.apply(this, arguments as any);
    return original;
  }
}

{% endhighlight %}
{% endtabs %}

### Handling CRUD operations

To enable editing in the Syncfusion Angular Grid, utilize the [editSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/) property. The Grid offers multiple edit modes including the **Inline/Normal**, **Dialog** and **Batch** editing. For more details, refer to the Grid [editing](https://ej2.syncfusion.com/angular/documentation/grid/editing/edit) documentation.

In this scenario, the inline edit `mode` and [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) property configured to display toolbar items for editing purpose.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild } from '@angular/core';
import { DataManager } from '@syncfusion/ej2-data';
import { GridComponent, EditSettingsModel, ToolbarItems,EditService, ToolbarService,GridModule } from '@syncfusion/ej2-angular-grids';
import { CustomAdaptor } from './CustomAdaptor'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  providers: [EditService, ToolbarService ],
  imports: [GridModule],
})
export class AppComponent {
  @ViewChild('grid') public grid?: GridComponent;
  public data?: DataManager;
  public editSettings?: EditSettingsModel;
  public toolbar?: ToolbarItems[];
  public employeeIDRules?: Object;
  public customerIDRules?: Object;
  public freightRules?: Object;
  public shipCityRules?: Object;

  public ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://localhost:xxxx/api/Grid',
      insertUrl: 'https://localhost:xxxx/api/Grid/Insert',
      updateUrl: 'https://localhost:xxxx/api/Grid/Update',
      removeUrl: 'https://localhost:xxxx/api/Grid/Remove',
      // Enable batch URL when batch editing is enabled.
      //batchUrl: 'https://localhost:xxxx/api/Grid/BatchUpdate',
      adaptor: new CustomAdaptor()
    });
    this.employeeIDRules = { required: true, number: true };
    this.customerIDRules = { required: true };
    this.freightRules = { required: true, min: 1, max: 1000 };
    this.shipCityRules = { required: true };
    this.toolbar = ['Add', 'Update', 'Delete', 'Cancel', 'Search'];
    this.editSettings = { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Normal' };
  }
}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

<ejs-grid #grid [dataSource]='data' [toolbar]="toolbar" [editSettings]="editSettings" height="348px">
  <e-columns>
    <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isIdentity="true" isPrimaryKey="true"></e-column>
    <e-column field='CustomerID' headerText='Customer ID' [validationRules]='customerIDRules' width='160'></e-column>
    <e-column field='EmployeeID' headerText='Employee ID' [validationRules]='employeeIDRules' width='160' textAlign='Right'></e-column>
    <e-column field='Freight' headerText='Freight' [validationRules]='freightRules' format="C2" width='160' textAlign='Right'></e-column>
    <e-column field='ShipCity' headerText='Ship City' [validationRules]='shipCityRules' width='150'></e-column>
  </e-columns>
</ejs-grid>

{% endhighlight %}
{% endtabs %}

> * Normal/Inline editing is the default edit [mode](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) for the Grid. To enable CRUD operations, ensure that the [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isprimarykey) property is set to **true** for a specific Grid column, ensuring that its value is unique.
> * If database has an auto generated column, ensure to define [isIdentity](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isidentity) property of Grid column to disable them during adding or editing operations.

The CRUD operations can be performed and customized on our own by overriding the following CRUD methods of the `UrlAdaptor` 

* insert
* remove
* update
* batchRequest

Let’s see how to perform CRUD operations using Entity Framework in Microsoft SQL Server data with Syncfusion Angular Grid.

**Insert Operation:**

To execute the insert operation, you will need to override the `insert` method of the `CustomAdaptor`. Then, integrate the following code snippet into the `CustomAdaptor` class. The below code snippet demonstrated how to handle the insertion of new records within the `insert` method of `CustomAdaptor` . Modify the logic within this method according to the requirements of your application. Utilizing `Entity Framework` simplifies database tasks by managing database connections and queries through object-oriented programming, making it easier to work with databases in C# code, as shown in the following code snippet.

{% tabs %}
{% highlight ts tabtitle="CustomAdaptor.ts" %}

import { UrlAdaptor } from '@syncfusion/ej2-data';

export class CustomAdaptor extends UrlAdaptor {
  public override processResponse(): any {
    const original: any = super.processResponse.apply(this, arguments as any);
    return original;
  }

  public override insert(dm: any, data: any): any {
    return {
      url: dm.dataSource.insertUrl || dm.dataSource.url,
      data: JSON.stringify({
        __RequestVerificationToken: "Syncfusion",
        value: data,
        action: 'insert'
      }),
      type: 'POST'
    };
  }
}
{% endhighlight %}

{% highlight cs tabtitle="GridController.cs" %}

/// <summary>
/// Inserts a new data item into the data collection.
/// </summary>
/// <param name="value">It contains the new record detail which is need to be inserted.</param>
/// <returns>Returns void.</returns>
[HttpPost]
[Route("api/[controller]/Insert")]
public void Insert([FromBody] CRUDModel<Orders> value) 
{
  using (OrderDbContext Context = new OrderDbContext(ConnectionString))
  {
    // Add the provided order to the orders DbSet.
    Context.Orders.Add(value.value);

    // Save changes to the database.
    Context.SaveChanges();
  }

  //Add custom logic here if needed and remove above method.
}

// Create a class that inherits from DbContext(Entity Framework Core).
public class OrderDbContext : DbContext
{
  //Declare a private variable to store the connection string.
  private readonly string _ConnectionString;

  //Define a constructor that accepts a connection string.
  public OrderDbContext(string ConnectionString)
  {
    //Store the provided connection string.
    _ConnectionString = ConnectionString;
  }

  //Override the onConfiguring method to tell EF Core to use SQL server.
  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
    // Use the connection string to configure the database connection.
    optionsBuilder.UseSqlServer(_ConnectionString);
  }
      
  // Define a DbSet to represent the orders table in the database.
  public DbSet<Orders> Orders { get; set; }
}

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

**Update Operation:**

To execute the update operation, override the `update` method of the `CustomAdaptor`. Then, integrate the following code snippet into the `CustomAdaptor` class. The below code snippet demonstrated how to handle the updating of existing records within the `update` method of the `CustomAdaptor`. Modify the logic within this method according to the requirements of your application. Utilizing `Entity Framework` simplifies database tasks by managing database connections and queries through object-oriented programming, making it easier to work with databases in C# code, as shown in the following code snippet.

{% tabs %}
{% highlight ts tabtitle="CustomAdaptor.ts" %}

import { UrlAdaptor } from '@syncfusion/ej2-data';

export class CustomAdaptor extends UrlAdaptor {
  public override processResponse(): any {
    // Calling base class processResponse function.
    const original: any = super.processResponse.apply(this, arguments as any);
    return original;
  }

  public override update(dm: any, keyField: string, value: any): any {
    return {
      url: dm.dataSource.updateUrl || dm.dataSource.url,
      data: JSON.stringify({
        __RequestVerificationToken: "Syncfusion",
        value: value,
        action: 'update'
      }),
      type: 'POST'
    };
  }
}

{% endhighlight %}

{% highlight cs tabtitle="GridController.cs" %}

/// <summary>
/// Update a existing data item from the data collection.
/// </summary>
/// <param name="value">It contains the updated record detail which is need to be updated.</param>
/// <returns>Returns void.</returns>
[HttpPost]
[Route("api/[controller]/Update")]
public void Update([FromBody] CRUDModel<Orders> value) 
{
  using (OrderDbContext Context = new OrderDbContext(ConnectionString))
  {
    Orders existingOrder = Context.Orders.Find(value.value.OrderID);
    if (existingOrder != null)
    {
      // Update the existing order with the new values.
      Context.Entry(existingOrder).CurrentValues.SetValues(value.value);

      // Save changes to the database.
      Context.SaveChanges();
    }
  }

  //Add custom logic here if needed and remove above method.
}

// Create a class that inherits from DbContext(Entity Framework Core).
public class OrderDbContext : DbContext
{
  //Declare a private variable to store the connection string.
  private readonly string _ConnectionString;

  //Define a constructor that accepts a connection string.
  public OrderDbContext(string ConnectionString)
  {
    //Store the provided connection string.
    _ConnectionString = ConnectionString;
  }

  //Override the onConfiguring method to tell EF Core to use SQL server.
  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
    // Use the connection string to configure the database connection.
    optionsBuilder.UseSqlServer(_ConnectionString);
  }
      
  // Define a DbSet to represent the orders table in the database.
  public DbSet<Orders> Orders { get; set; }
}

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

**Delete Operation:**

To perform the delete operation, you need to override the `remove` method of the `CustomAdaptor`. Below is the code snippet that you can add to `CustomAdaptor` class. The below code snippet demonstrated how to handle the deletion of existing records within the `remove` method of `CustomAdaptor`. Modify the logic within this method according to the requirements of your application. Utilizing `Entity Framework` simplifies database tasks by managing database connections and queries through object-oriented programming, making it easier to work with databases in C# code, as shown in the following code snippet.

{% tabs %}
{% highlight ts tabtitle="CustomAdaptor.ts" %}

import { UrlAdaptor } from '@syncfusion/ej2-data';

export class CustomAdaptor extends UrlAdaptor {
  public override processResponse(): any {
    // Calling base class processResponse function.
    const original: any = super.processResponse.apply(this, arguments as any);
    return original;
  }

  public override remove(dm: any, keyField: string, value: any): any {
    return {
      url: dm.dataSource.removeUrl || dm.dataSource.url,
      data: JSON.stringify({
        __RequestVerificationToken: "Syncfusion",
        key: value,
        keyColumn: keyField,
        action: 'remove'
      }),
      type: 'POST'
    };
  }
}

{% endhighlight %}

{% highlight ts tabtitle="GridController.cs" %}

/// <summary>
/// Remove a specific data item from the data collection.
/// </summary>
/// <param name="value">It contains the specific record detail which is need to be removed.</param>
/// <return>Returns void.</return>
[HttpPost]
[Route("api/[controller]/Remove")]
public void Remove([FromBody] CRUDModel<Orders> value) 
{
  int OrderId = Convert.ToInt32(value.key.ToString());
  using (OrderDbContext Context = new OrderDbContext(ConnectionString))
  {
    Orders Order = Context.Orders.Find(OrderId);
    if (Order != null)
    {
      // Remove the order from the orders DbSet.
      Context.Orders.Remove(Order);

      // Save changes to the database.
      Context.SaveChanges();
    }
  }

  //Add custom logic here if needed and remove above method.
}

// Create a class that inherits from DbContext(Entity Framework Core).
public class OrderDbContext : DbContext
{
  //Declare a private variable to store the connection string.
  private readonly string _ConnectionString;

  //Define a constructor that accepts a connection string.
  public OrderDbContext(string ConnectionString)
  {
    //Store the provided connection string.
    _ConnectionString = ConnectionString;
  }

  //Override the onConfiguring method to tell EF Core to use SQL server.
  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
    // Use the connection string to configure the database connection.
    optionsBuilder.UseSqlServer(_ConnectionString);
  }
      
  // Define a DbSet to represent the orders table in the database.
  public DbSet<Orders> Orders { get; set; }
}

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

**Batch Operation:**

To perform the batch operation, override the `batchRequest` method of the `CustomAdaptor` and add the following code in the `CustomAdaptor`. The below code snippet demonstrated how to handle the batch update request within the `batchRequest` method of `CustomAdaptor`. Modify the logic within this method according to the requirements of your application.

{% tabs %}
{% highlight ts tabtitle="CustomAdaptor.ts" %}

import { UrlAdaptor } from '@syncfusion/ej2-data';

export class CustomAdaptor extends UrlAdaptor {
  public override processResponse(): any {
    // Calling base class processResponse function.
    const original: any = super.processResponse.apply(this, arguments as any);
    return original;
  }

  public override batchRequest(dm:any, changes: any, e:any, query: any, original?: Object): Object {
    return {
      url: dm.dataSource.batchUrl || dm.dataSource.url,
      data: JSON.stringify({
        __RequestVerificationToken: "Syncfusion",
        added: changes.addedRecords,
        changed: changes.changedRecords,
        deleted: changes.deletedRecords,
        key: e.key,
        action: 'batch'
      }),
      type: 'POST'
    };
  }
}

{% endhighlight %}

{% highlight cs tabtitle="GridController.cs" %}

/// <summary>
/// Batch update (Insert, Update, and Delete) a collection of data items from the data collection.
/// </summary>
/// <param name="value">The set of information along with details about the CRUD actions to be executed from the database.</param>
/// <returns>Returns void.</returns>
[HttpPost]
[Route("api/[controller]/BatchUpdate")]
public IActionResult BatchUpdate([FromBody] CRUDModel<Orders> value) 
{
  using (OrderDbContext Context = new OrderDbContext(ConnectionString))
  {
    if (value.changed != null && value.changed.Count > 0)
    {
      foreach (Orders Record in (IEnumerable<Orders>)value.changed)
      {
        // Update the changed records.
        Context.Orders.UpdateRange(Record);
      }
    }

    if (value.added != null && value.added.Count > 0)
    {
      foreach (Orders Record in (IEnumerable<Orders>)value.added)
      {
        foreach (Orders order in value.added)
        {
          // This ensures EF does not try to insert OrderID.
          order.OrderID = default; 
        }
        // Add new records.
        Context.Orders.AddRange(value.added);
      }
    }

    if (value.deleted != null && value.deleted.Count > 0)
    {
      foreach (Orders Record in (IEnumerable<Orders>)value.deleted)
      {
        // Find and delete the records.
        Orders ExistingOrder = Context.Orders.Find(Record.OrderID);
        if (ExistingOrder != null)
        {
          Context.Orders.Remove(ExistingOrder);
        }
      }
    }

    // Save changes to the database.
    Context.SaveChanges();
  }
  return new JsonResult(value);
}

// Create a class that inherits from DbContext(Entity Framework Core).
public class OrderDbContext : DbContext
{
  //Declare a private variable to store the connection string.
  private readonly string _ConnectionString;

  //Define a constructor that accepts a connection string.
  public OrderDbContext(string ConnectionString)
  {
    //Store the provided connection string.
    _ConnectionString = ConnectionString;
  }

  //Override the onConfiguring method to tell EF Core to use SQL server.
  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
    // Use the connection string to configure the database connection.
    optionsBuilder.UseSqlServer(_ConnectionString);
  }
      
  // Define a DbSet to represent the orders table in the database.
  public DbSet<Orders> Orders { get; set; }
}

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

![Syncfusion Angular Grid bound with Microsoft SQL Server data using Entity Framework](../images/connecting-micro-curd.gif)

> Find the complete example in [this GitHub repository](https://github.com/SyncfusionExamples/connecting-databases-to-angular-grid/tree/master/Bindind%20SQL%20database%20using%20EF%20and%20CustomAdaptor/Grid_EntityFramework).