---
layout: post
title: Angular Grid - SQL Server via EF Core | Syncfusion
description: Bind SQL Server data to Syncfusion Angular Grid using Entity Framework Core with complete CRUD and data operations using UrlAdaptor and CustomAdaptor patterns.
platform: ej2-angular
control: grid
keywords: adaptors, urladaptor, customadaptor, remotedata, entityframework 
documentation: ug
domainurl: ##DomainURL##
---

# Connecting SQL Server to Syncfusion Grid Using Entity Framework

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid supports binding data from a SQL Server database. This documentation demonstrates integrating SQL Server with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid using **Entity Framework Core (EF Core)** for data operations with both `UrlAdaptor` and `CustomAdaptor` approaches.

**What is Entity Framework Core?**

Entity Framework Core (EF Core) is a lightweight, extensible, open-source, and cross-platform object-relational mapper (ORM) for .NET. It serves as a bridge between C# code and SQL Server, eliminating the need for raw SQL queries and providing a modern, code-first approach to database management.

**Key Benefits of Entity Framework**

- **Change Tracking**: Automatically detects and tracks changes to entities for persistence, simplifying CRUD operations.
- **LINQ Support**: Use familiar LINQ syntax for type-safe database queries.
- **Built-in Security**: Automatic parameterization prevents SQL injection attacks.
- **Database Migrations**: Manage schema changes version-by-version without manual SQL scripts.
- **Lazy Loading & Eager Loading**: Control entity relationship loading for optimized performance.
- **Fluent Configuration**: Fine-grained entity mapping configuration in code.
- **Compatibility with Syncfusion DataManager**: Works seamlessly with Syncfusion EJ2 Grid's `DataOperations` for filtering, sorting, paging, and searching.

**Entity Framework Core vs LINQ2DB**

| Aspect | Entity Framework Core | LINQ2DB |
|--------|---|---|
| **Learning Curve** | Moderate (more complex abstractions) | Lower (closer to LINQ) |
| **Performance** | Excellent (significantly improved in EF Core 6+) | Very fast (minimal overhead) |
| **Features** | Comprehensive (migrations, lazy loading, change tracking, tracking vs no-tracking queries) | Basic (simple CRUD, data operations) |
| **Configuration** | Moderate (DbContext, OnModelCreating, migrations, dependency injection) | Simple (connection string only) |
| **Async/Await Support** | Native async throughout (async by default) | Full async support |
| **Database Migrations** | Built-in with EF Core Migrations | Manual SQL scripts required |
| **Cross-Platform** | Yes (runs on Windows, Linux, macOS) | Yes (cross-platform) |
| **Use Case** | Complex business logic, enterprise apps, long-term projects, microservices | Simple CRUD, web grids, lightweight scenarios |
| **Syncfusion Integration** | Excellent (modern, optimized for .NET Core/5+) | Excellent (lightweight alternative) |

**Recommendation:**

- **Use Entity Framework Core**: If the application requires complex business logic, multiple related entities, database migrations, dependency injection, and long-term maintainability.
- **Use LINQ2DB**: If the project requires lightweight, fast performance for simple CRUD operations with minimal configuration overhead.

## Prerequisites

Ensure the following software and packages are installed before proceeding:

| Software/Package | Version | Purpose |
|-----------------|---------|---------|
| Visual Studio 2022 | 17.0 or later | Development IDE with ASP.NET Core workload |
| .NET SDK | 8.0 or later | Runtime and SDK for ASP.NET Core applications |
| Node.js | 18.0 or later | JavaScript runtime for Angular development |
| npm | 9.0 or later | Package manager for JavaScript (included with Node.js) |
| SQL Server | 2019 or later | Database server (Express edition acceptable) |
| Microsoft.EntityFrameworkCore | 9.0.0 or later | Modern Object-Relational Mapper for .NET Core |
| Microsoft.EntityFrameworkCore.SqlServer | 9.0.0 or later | SQL Server provider for Entity Framework Core |
| Microsoft.AspNetCore.Mvc.NewtonsoftJson | 9.0.0 or later | JSON serialization library for proper null handling with Syncfusion Grid |
| Syncfusion.EJ2.Base | 32.2.3 or later | Syncfusion DataManager and Grid operations |

## Key topics

| # | Topics | Link |
|---|---------|-------|
| 1 | Create a SQL database with ticket records | [View](#step-1-create-the-database-and-table-in-sql-server) |
| 2 | Install necessary NuGet packages for ASP.NET Core and Syncfusion | [View](#step-3-install-required-nuget-packages) |
| 3 | Create data models and DataConnection for database communication | [View](#step-4-create-the-data-model) |
| 4 | Configure connection strings and register services | [View](#step-6-configure-connection-string-in-appsettingsjson) |
| 5 | Create a Grid component that supports searching, filtering, sorting, paging, and CRUD operations | [View](#integrating-syncfusion-angular-grid) |
| 6 | Handle bulk operations and batch updates | [View](#step-10-perform-crud-operations) |


## Setting up the SQL server environment for Entity Framework Core

Ensure the SQL Server is running. Use SSMS or another client to run the script below to create the "TicketsDb" database and the "Tickets" table.

### Step 1: Create the Database and Table in SQL Server

First, the **SQL Server database** structure must be created to store ticket records.

**Instructions:**

1. Open SQL Server Management Studio (SSMS) or any SQL Server client.
2. Create a new database named "TicketsDb".
3. Define a "Tickets" table with the specified schema.
4. Insert sample data for testing.

Run the following SQL script:

```sql
-- Create Database
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'TicketsDb')
BEGIN
    CREATE DATABASE TicketsDb;
END
GO

USE TicketsDb;
GO

-- Create Tickets Table
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Tickets')
BEGIN
    CREATE TABLE dbo.Tickets (
        TicketId INT PRIMARY KEY IDENTITY(1,1),
        PublicTicketId VARCHAR(50) NOT NULL UNIQUE,
        Title VARCHAR(200) NULL,
        Description VARCHAR NULL,
        Category VARCHAR(100) NULL,
        Department VARCHAR(100) NULL,
        Assignee VARCHAR(100) NULL,
        CreatedBy VARCHAR(100) NULL,
        Status VARCHAR(50) NOT NULL DEFAULT 'Open',
        Priority VARCHAR(50) NOT NULL DEFAULT 'Medium',
        ResponseDue DATETIME2 NULL,
        DueDate DATETIME2 NULL,
        CreatedAt DATETIME2 NOT NULL DEFAULT GETDATE(),
        UpdatedAt DATETIME2 NOT NULL DEFAULT GETDATE()
    );
END
GO

-- Insert Sample Data (Optional)
INSERT INTO dbo.Tickets (PublicTicketId, Title, Description, Category, Department, Assignee, CreatedBy, Status, Priority, ResponseDue, DueDate, CreatedAt, UpdatedAt)
VALUES
('NET-1001', 'Network Connectivity Issue', 'Users unable to connect to the VPN', 'Network Issue', 'Network Ops', 'John Doe', 'Alice Smith', 'Open', 'High', '2026-01-14 10:00:00', '2026-01-15 17:00:00', '2026-01-13 10:15:30', '2026-01-13 10:15:30'),
('NET-1002', 'Server Performance Degradation', 'Email server responding slowly', 'Performance', 'Infrastructure', 'Emily White', 'Bob Johnson', 'InProgress', 'Critical', '2026-01-13 15:00:00', '2026-01-14 17:00:00', '2026-01-13 11:20:10', '2026-01-13 11:20:10');
GO
```

After executing this script, the ticket records are stored in the "Tickets" table within the "TicketsDb" database. The database is now ready for integration with the ASP.NET Core Web application.

### Step 2: Create a New ASP.NET Core project

Before installing NuGet packages, a new ASP.NET Core Web Application must be created.

**Instructions:**

1. Open **Visual Studio 2022**.
2. Click **Create a new project**.
3. Search for **ASP.NET Core Web API**.
4. Select the template and click **Next**.
5. Configure the project:
   - **Project name**: **Grid_EntityFramework.Server** (or a preferred name)
   - **Location**: Choose the desired folder
   - **Framework**: Select .NET 8.0 (or latest available)
6. Click **Create**.

Visual Studio will create the project with the default structure, including folders like **Controllers**, **Models** and configuration files.

### Step 3: Install Required NuGet Packages

NuGet packages are software libraries that add functionality to the application. These packages enable Entity Framework Core, SQL Server connectivity, and Syncfusion Grid integration.

**Method 1: Using .NET CLI (Recommended)**

1. Open a terminal in Visual Studio 2022 (View → Terminal).
2. Navigate to your project directory.
3. Run the following commands in sequence:

```bash
dotnet add package Microsoft.EntityFrameworkCore --version 9.0.0
dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 9.0.0
dotnet add package Microsoft.EntityFrameworkCore.Tools --version 9.0.0
dotnet add package Microsoft.AspNetCore.Mvc.NewtonsoftJson --version 9.0.0
dotnet add package Syncfusion.EJ2.Base --version 32.2.3
```

**Method 2: Using Package Manager Console**

1. Open Visual Studio 2022.
2. Navigate to **Tools → NuGet Package Manager → Package Manager Console**.
3. Run the following commands:

```powershell
Install-Package Microsoft.EntityFrameworkCore -Version 9.0.0
Install-Package Microsoft.EntityFrameworkCore.SqlServer -Version 9.0.0
Install-Package Microsoft.EntityFrameworkCore.Tools -Version 9.0.0
Install-Package Microsoft.AspNetCore.Mvc.NewtonsoftJson -Version 9.0.0
Install-Package Syncfusion.EJ2.Base -Version 32.2.3
```

**Method 3: Using NuGet Package Manager UI**

1. Open **Visual Studio 2022 → Tools → NuGet Package Manager → Manage NuGet Packages for Solution**.
2. Search for and install each package individually:
   - **Microsoft.EntityFrameworkCore** (version 9.0.0)
   - **Microsoft.EntityFrameworkCore.SqlServer** (version 9.0.0)
   - **Microsoft.EntityFrameworkCore.Tools** (version 9.0.0)
   - **Microsoft.AspNetCore.Mvc.NewtonsoftJson** (version 9.0.0)
   - **Syncfusion.EJ2.Base** (version 32.2.3)

All required packages are now installed. Verify the installation by checking the project's **.csproj** file or using `dotnet list package` command.


### Step 4: Create the data model

A data model is a C# class that represents the structure of a database table. This model defines the properties that correspond to the columns in the "Tickets" table.

**Instructions:**

1. In the **Solution Explorer**, right-click on the **Models** folder.
2. Select **Add → New Item**.
3. Choose **Class** and name it **Tickets.cs**.
4. Replace the default code with the following:

```csharp
// File: Models/Ticket.cs
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Grid_EntityFramework.Server.Models
{
    [Table("Tickets", Schema = "dbo")]
    public class Ticket
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TicketId { get; set; }

        [Required, MaxLength(50)]
        public string PublicTicketId { get; set; }

        [MaxLength(200)]
        public string Title { get; set; }

        // EF Core: prefer NVARCHAR(MAX) instead of deprecated TEXT.
        // We'll keep column type from your EF6 note if you must match legacy schema:
        [Column(TypeName = "text")] // Consider changing to nvarchar(max) for modern SQL Server
        public string Description { get; set; }

        [MaxLength(100)]
        public string Category { get; set; }

        [MaxLength(100)]
        public string Department { get; set; }

        [MaxLength(100)]
        public string Assignee { get; set; }

        [MaxLength(100)]
        public string CreatedBy { get; set; }

        [Required, MaxLength(50)]
        public string Status { get; set; } = "Open";

        [Required, MaxLength(50)]
        public string Priority { get; set; } = "Medium";

        [Column(TypeName = "datetime2")]
        public DateTime? ResponseDue { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? DueDate { get; set; }

        [Required, Column(TypeName = "datetime2")]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        [Required, Column(TypeName = "datetime2")]
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}
```

**Explanation:**

- **`[Table("Tickets", Schema = "dbo")]`**: Maps the class to the `dbo.Tickets` table in the database.
- **`[Key]`**: Marks `TicketId` as the primary key.
- **`[DatabaseGenerated(DatabaseGeneratedOption.Identity)]`**: Indicates auto-increment behavior via IDENTITY(1,1).
- **`[Required]`**: Indicates that a column does not allow NULL values.
- **`[MaxLength(n)]`**: Specifies the maximum length of a VARCHAR column.
- **`[Column(TypeName = "text")]`**: Explicitly specifies the SQL Server column type as TEXT.
- In EF Core, unique indexes are typically created using Fluent API in `OnModelCreating` rather than attributes.

The data model has been successfully created.


### Step 5: Create the DbContext class

The `DbContext` is a special class that manages the connection between the application and the SQL Server database. It handles all database operations such as saving, updating, deleting, and retrieving data.

**Instructions:**

1. In the **Solution Explorer**, right-click on the **Models** folder.
2. Select **Add → New Item**.
3. Choose **Class** and name it **TicketsDbContext.cs**.
4. Replace the default code with the following:

```csharp
// File: Data/TicketsDbContext.cs
using Grid_EntityFramework.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace Grid_EntityFramework.Server.Data
{
    public class TicketsDbContext(DbContextOptions<TicketsDbContext> options) : DbContext(options)
    {
        public DbSet<Ticket> Tickets => Set<Ticket>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var entity = modelBuilder.Entity<Ticket>();

            // Table and Schema
            entity.ToTable("Tickets", "dbo");

            // PK
            entity.HasKey(e => e.TicketId);

            // Identity (handled by [DatabaseGenerated] attribute, but we can be explicit)
            entity.Property(e => e.TicketId).ValueGeneratedOnAdd();

            // Column configs (equivalent to your EF6 constraints)
            entity.Property(e => e.PublicTicketId).HasMaxLength(50).IsRequired();
            entity.HasIndex(e => e.PublicTicketId).IsUnique(); // matches your EF6 unique index

            entity.Property(e => e.Title).HasMaxLength(200);
            entity.Property(e => e.Description).HasColumnType("text"); // or nvarchar(max)
            entity.Property(e => e.Category).HasMaxLength(100);
            entity.Property(e => e.Department).HasMaxLength(100);
            entity.Property(e => e.Assignee).HasMaxLength(100);
            entity.Property(e => e.CreatedBy).HasMaxLength(100);
            entity.Property(e => e.Status).HasMaxLength(50).IsRequired();
            entity.Property(e => e.Priority).HasMaxLength(50).IsRequired();

            entity.Property(e => e.ResponseDue).HasColumnType("datetime2");
            entity.Property(e => e.DueDate).HasColumnType("datetime2");
            entity.Property(e => e.CreatedAt).HasColumnType("datetime2").IsRequired();
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime2").IsRequired();

            base.OnModelCreating(modelBuilder);
        }
    }
}
```

**Explanation:**

- **`DbContext` Class**: Inherits from Entity Framework Core's `DbContext` base class, managing the database connection and entity tracking.
- **Primary Constructor**: EF Core uses primary constructors (C# 12+) with `DbContextOptions<TicketsDbContext>` for dependency injection configuration.
- **`DbSet<Ticket>` Property**: Provides access to Ticket records for querying and persistence operations.
- **`OnModelCreating`**: Configures entity mappings using Fluent API, such as primary keys, maximum lengths, required fields, unique indexes, and data types.
- **Fluent API Configuration**: EF Core prefers Fluent API in `OnModelCreating` over data annotations for complex configurations like unique indexes.

The **TicketsDbContext** class is essential because:

- It **connects** the application to the SQL Server database through dependency injection.
- It **manages** the entity lifecycle (Add, Update, Delete, SaveChanges, SaveChangesAsync).
- It **maps** C# models to actual database tables and columns.
- It **configures** the expected shape of data inside the database using Fluent API.
- It **enables** SQL Server-specific features like identity columns, datetime2 types, and unique constraints.
- It **supports** both tracking and no-tracking queries for optimal performance.

Without this class, Entity Framework Core cannot manage database operations. The DbContext has been successfully configured.

### Step 6: Configure connection string in appsettings.json

A connection string contains the information needed to connect the application to the SQL database, including the server address, database name, authentication method, and additional parameters.

**Instructions:**

1. Open the **appsettings.json** file in the project root.
2. Add or update the **ConnectionStrings** section with the SQL connection details:

```json
{
  "ConnectionStrings": {
    "TicketsDb": "Server=localhost;Database=TicketsDb;Trusted_Connection=True;TrustServerCertificate=True;"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}
``` 

**Connection string components:**

| Component | Description |
| ----------- | ------------- |
| **Server** | The address of the SQL Server (use "localhost" for local development) |
| **Port** | The SQL Server port number (default is 1433) |
| **Database** | The database name |
| **User Id** | The SQL Server username |
| **Password** | The SQL Server password |

The connection string has been successfully configured.


### Step 7: Register services

The **Program.cs** file is the entry point for configuring and bootstrapping the ASP.NET Core application. This is where all required services and middleware are registered, including CORS (Cross-Origin Resource Sharing), Entity Framework Core DbContext, JSON serialization, and controllers.

**Instructions:**

1. Open the **Program.cs** file in the project root.
2. Replace the existing content with the following configuration:

```csharp
// File: Program.cs
using Grid_EntityFramework.Server.Data;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

var builder = WebApplication.CreateBuilder(args);

builder
    .Services.AddControllers()
    .AddNewtonsoftJson(o =>
    {
        // Key setting: do not try to set null into value types (int)
        o.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
        // Optional hardening:
        // o.SerializerSettings.MissingMemberHandling = MissingMemberHandling.Ignore;
    });

// EF Core SQL Server
builder.Services.AddDbContext<TicketsDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("TicketsDb"))
);

// CORS if you call from Angular dev server
builder.Services.AddCors(opts =>
{
    opts.AddPolicy("dev", p => p.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});

var app = builder.Build();
app.UseCors("dev");
app.MapControllers();
app.Run();

```

**Explanation:**

- **AddControllers().AddNewtonsoftJson()**: Registers MVC controllers with Newtonsoft.Json serialization support instead of System.Text.Json. This is important for Syncfusion Grid compatibility.
- **NullValueHandling.Ignore**: Critical setting that prevents null values from being serialized to value types (like `int`), avoiding deserialization errors. This prevents issues when the Grid sends partial data updates.
- **AddDbContext<TicketsDbContext>()**: Registers the Entity Framework Core DbContext with dependency injection, making it available for controllers via constructor injection.
- **UseSqlServer()**: Specifies SQL Server as the database provider and retrieves the connection string from **appsettings.json**.
- **AddCors("dev")**: Configures CORS policy with `AllowAnyOrigin()`, `AllowAnyHeader()`, and `AllowAnyMethod()` for development purposes. This allows the Angular app to make HTTP requests to the API from any port.
- **UseCors("dev")**: Applies the CORS policy to the middleware pipeline. **Must be called before MapControllers()**.
- **MapControllers()**: Maps controller action methods to HTTP endpoints.
- **app.Run()**: Starts the Kestrel web server and listens for incoming HTTP requests.

The Program.cs configuration is now complete and Entity Framework Core is properly registered.

## Integrating Syncfusion Angular Grid

The Syncfusion Angular Grid is a robust, high‑performance component built to efficiently display, manage, and manipulate large datasets. It provides advanced features such as sorting, filtering, and paging. Follow these steps to render the grid and integrate it with a SQL Server database.

### Step 1: Creating the Angular client application

Open a Visual Studio Code terminal or Command prompt and run the below command to create an Angular application:

```bash
ng new grid_entityframework.client
cd grid_entityframework.client
```

### Step 2: Adding Syncfusion packages

Install the necessary Syncfusion packages using the below command in Visual Studio Code terminal or Command prompt.

```bash
npm install @syncfusion/ej2-angular-grids --save
npm install @syncfusion/ej2-data --save
```

After installation, the necessary CSS files are available in the (**../node_modules/@syncfusion**) directory. Add the required CSS references to the (**src/styles.css**) file to ensure proper styling of the Grid component.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/bootstrap5.3.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.3.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/bootstrap5.3.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/bootstrap5.3.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/bootstrap5.3.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/bootstrap5.3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/bootstrap5.3.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/bootstrap5.3.css';
@import '../node_modules/@syncfusion/ej2-angular-grids/styles/bootstrap5.3.css';

```

For this project, the "Bootstrap 5.3" theme is applied. Other themes can be selected, or the existing theme can be customized to meet specific project requirements. For detailed guidance on theming and customization, refer to the [Syncfusion Angular Components Appearance](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio) documentation.

### Step 3: Add Syncfusion Angular Grid

The Angular Grid component can be added to the application by following these steps. To get started, add the Grid component to the application using the following code in (**src/app/app.component.ts**):

```ts
// File: src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import {GridModule,} from '@syncfusion/ej2-angular-grids';
import { CustomAdaptor } from './custom-adaptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    GridModule,
  ],
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  public dataManager?: DataManager;

  ngOnInit(): void {
    this.dataManager = new DataManager({
      url: 'http://localhost:5018/api/tickets/url',
      insertUrl: 'http://localhost:5018/api/tickets/insert',
      updateUrl: 'http://localhost:5018/api/tickets/update',
      removeUrl: 'http://localhost:5018/api/tickets/remove',
      batchUrl: 'http://localhost:5018/api/tickets/batch',
      adaptor: new CustomAdaptor(),
    });
  }
}

```

```html
<ejs-grid [dataSource]="dataManager">
  <e-columns>
    <e-column field="SNo" headerText="S.No" width="70" textAlign="Right"></e-column>
    <!-- Include more columns here -->
  </e-columns>
</ejs-grid>
```

### Step 4: Implement the CustomAdaptor

The Syncfusion Angular Grid can bind data from a **SQL Server** database using [DataManager](https://ej2.syncfusion.com/angular/documentation/data/getting-started) and set the `adaptor` property to `CustomAdaptor` for scenarios that require full control over data operations.

The `CustomAdaptor` (client-side) is a bridge between the Angular Grid and the ASP.NET Core backend. It extends the `UrlAdaptor` and handles all data operation requests by constructing HTTP POST calls to corresponding server endpoints. When the Grid performs operations like reading, searching, filtering, sorting, paging, and CRUD operations, the CustomAdaptor intercepts these actions and formats them into HTTP requests. These requests are sent to the ASP.NET Core Web API controller on the server, which processes the `DataManagerRequest` using Entity Framework Core to query the SQL Server database and return the results.

**Instructions:**

1. Create a new **CustomAdaptor.ts** file in the (**app**) folder.
2. Add the following code inside this file:

```ts
// File: src/app/custom-adaptor.ts
import {
  DataManager,
  UrlAdaptor,
  Query,
  ReturnOption,
} from '@syncfusion/ej2-data';

export class CustomAdaptor extends UrlAdaptor {
  public override processResponse() {
    let i = 0;
    const original: any = super.processResponse.apply(this, arguments as any);
    // Adding serial number.
    if (original.result) {
      original.result.forEach((item: any) => (item.SNo = ++i));
    }
    return original;
  }

  public override beforeSend(
    dm: DataManager,
    request: Request,
    settings?: any,
  ): void {
    super.beforeSend(dm, request, settings);
  }

  public override insert(dm: DataManager, data: any, tableName?: string): any {
    return {
      url: `${(dm as any).dataSource['insertUrl']}`,
      type: 'POST',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(data),
    };
  }

  public override update(
    dm: DataManager,
    keyField: string,
    value: any,
    tableName?: string,
  ): any {
    return {
      url: `${(dm as any).dataSource['updateUrl']}`,
      type: 'POST',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(value),
    };
  }

  public override remove(
    dm: DataManager,
    keyField: string,
    value: any,
    tableName?: string,
  ): any {
    const keyValue =
      value && typeof value === 'object' ? value[keyField] : value;
    return {
      url: `${(dm as any).dataSource['removeUrl']}`,
      type: 'POST',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({ key: keyValue }),
    };
  }

  public override batchRequest(dm: DataManager, changes: any): any {
    return {
      url: `${(dm as any).dataSource['batchUrl']}`,
      type: 'POST',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        added: changes.addedRecords,
        changed: changes.changedRecords,
        deleted: changes.deletedRecords,
      }),
    };
  }
}

```

The `CustomAdaptor` class has been successfully implemented with all data operations.

 ### Step 5: Add toolbar with CRUD and search options

The toolbar provides buttons for adding, editing, deleting records, and searching the data.

**Instructions:**

1. Open the (**src/app/app.component.ts**) file.
2. Inject the `ToolbarService` in to the `providers` array of the "AppComponent".
3. Update the Grid component to include the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#toolbar) property with CRUD and search options:

```ts
// File: src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import {
  GridModule,
  ToolbarService,
} from '@syncfusion/ej2-angular-grids';
import { CustomAdaptor } from './custom-adaptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    GridModule, // NgModule imported directly into a standalone component
  ],
  providers: [
    ToolbarService,
  ],
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  public toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];

}
```

```html
<ejs-grid [dataSource]="dataManager" [toolbar]="toolbar">
  <e-columns>
    <e-column field="SNo" headerText="S.No" width="70" textAlign="Right"></e-column>
    <!-- Include more columns here -->
  </e-columns>
</ejs-grid>
```

**Toolbar Items Explanation:**

| Item | Function |
| ------ | ---------- |
| `Add` | Opens a form to add a new ticket record. |
| `Edit` | Enables editing of the selected record. |
| `Delete` | Deletes the selected record from the database. |
| `Update` | Saves changes made to the selected record. |
| `Cancel` | Cancels the current edit or add operation. |
| `Search` | Displays a search box to find records. |

The toolbar has been successfully added.

### Step 6: Implement paging feature

The paging feature allows efficient loading of large data sets through on‑demand loading.

**Instructions:**

1. Paging in the Grid is enabled by setting the [allowPaging](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#allowpaging) property to `true`.
2. And injecting the `PagerService` module in the `providers` property of the "AppComponent".

```ts
// File: src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import {
  GridModule,
  PageService,
} from '@syncfusion/ej2-angular-grids';
import { CustomAdaptor } from './custom-adaptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    GridModule, // NgModule imported directly into a standalone component
  ],
  providers: [
    PageService,
  ],
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {

}
```

```html
<ejs-grid [dataSource]="dataManager"   [allowPaging]="true">
  <e-columns>
    <e-column field="SNo" headerText="S.No" width="70" textAlign="Right"></e-column>
    <!-- Include more columns here -->
  </e-columns>
</ejs-grid>
```

On the server side create a file **TicketsController.cs** and add the **UrlDataSource** method provided below:

```csharp
using Grid_EntityFramework.Server.Data;
using Grid_EntityFramework.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Syncfusion.EJ2.Base;

namespace Grid_EntityFramework.Server.Controllers
{
    [Route("api/[controller]")]
    public class TicketsController : ControllerBase
    {
        private readonly TicketsDbContext _db;

        public TicketsController(TicketsDbContext db)
        {
            _db = db;
        }

        // READ
        [HttpPost("url")]
        public IActionResult UrlDataSource([FromBody] DataManagerRequest dm)
        {
            IQueryable<Ticket> query = _db.Tickets.AsNoTracking();
            var op = new DataOperations();

            if (dm.Search?.Count > 0)
                query = op.PerformSearching(query, dm.Search).Cast<Ticket>().AsQueryable();

            if (dm.Where?.Count > 0)
                query = op.PerformFiltering(query, dm.Where, dm.Where[0].Operator)
                    .Cast<Ticket>()
                    .AsQueryable();

            if (dm.Sorted?.Count > 0)
                query = op.PerformSorting(query, dm.Sorted).Cast<Ticket>().AsQueryable();
            else
                query = query.OrderBy(t => t.TicketId);

            var count = query.Count();

            if (dm.Skip > 0)
                query = query.Skip(dm.Skip);

            if (dm.Take > 0)
                query = query.Take(dm.Take);

            return dm.RequiresCounts
                ? Ok(new { result = query.ToList(), count })
                : Ok(query.ToList());
        }
    }
}

```

**Paging details:**

- The Grid sends page size `Take` and skip count `Skip` parameters to the server.
- The `operation.PerformSkip()` method skips the specified number of records.
- The `operation.PerformTake()` method retrieves only the required number of records for the current page.
- The total count is calculated before paging to display the total number of records.
- Results are returned and displayed in the Grid with pagination controls.

When paging is performed in the Grid, a request is sent to the server with the following payload.

![Paging Operation Payload](../images/entityframework-paging.png)

### Step 7: Implement searching feature

Searching allows finding records by entering keywords in the search box.

**Instructions:**

1. Ensure the toolbar includes the `Search` item.

```ts
// File: src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import {
  GridModule,
  ToolbarService,
} from '@syncfusion/ej2-angular-grids';
import { CustomAdaptor } from './custom-adaptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    GridModule, // NgModule imported directly into a standalone component
  ],
  providers: [
    ToolbarService,
  ],
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  public toolbar = ['Search'];
}
```

```html
<ejs-grid [dataSource]="dataManager" [toolbar]="toolbar">
  <e-columns>
    <e-column field="SNo" headerText="S.No" width="70" textAlign="Right"></e-column>
    <!-- Include more columns here -->
  </e-columns>
</ejs-grid>
```

Update the "UrlDataSource" method in the **TicketsController.cs** file to handle searching:

```csharp
  using Grid_EntityFramework.Server.Data;
using Grid_EntityFramework.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Syncfusion.EJ2.Base;

namespace Grid_EntityFramework.Server.Controllers
{
    [Route("api/[controller]")]
    public class TicketsController : ControllerBase
    {
        private readonly TicketsDbContext _db;

        public TicketsController(TicketsDbContext db)
        {
            _db = db;
        }

        // READ
        [HttpPost("url")]
        public IActionResult UrlDataSource([FromBody] DataManagerRequest dm)
        {
            IQueryable<Ticket> query = _db.Tickets.AsNoTracking();
            var op = new DataOperations();

            if (dm.Search?.Count > 0)
                query = op.PerformSearching(query, dm.Search).Cast<Ticket>().AsQueryable();

            // Other action code goes here

            var count = query.Count();

            return dm.RequiresCounts
                ? Ok(new { result = query.ToList(), count })
                : Ok(query.ToList());
        }
    }
}

```

**Searching details:**

-- When text is entered in the search box and Enter is pressed, the Grid sends a search request to the server.
- The "UrlDataSource" method receives the search criteria in `Search` parameter.
- The `operation.PerformSearching()` method filters the data based on the search term.
- Results are returned and displayed in the Grid.

When searching is performed in the Grid, a request is sent to the server with the following payload.

![Searching Operation Payload](../images/entityframework-searching.png)

### Step 8: Implement filtering feature

Filtering allows restricting data based on column values using a menu interface.

**Instructions:**

1. Filtering is enabled by setting the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#allowfiltering) property to `true`.
2. Inject the `FilterService` module in the `providers` property of the "AppComponent".

```ts
// File: src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import {
  GridModule,
  FilterService,
} from '@syncfusion/ej2-angular-grids';
import { CustomAdaptor } from './custom-adaptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    GridModule, // NgModule imported directly into a standalone component
  ],
  providers: [
    FilterService,
  ],
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  public toolbar = ['Search'];
}
```

```html
<ejs-grid [dataSource]="dataManager"  [allowFiltering]="true">
  <e-columns>
    <e-column field="SNo" headerText="S.No" width="70" textAlign="Right"></e-column>
    <!-- Include more columns here -->
  </e-columns>
</ejs-grid>
```

Update the "UrlDataSource" method in the **TicketsController.cs** file to handle filtering:

```csharp
using Grid_EntityFramework.Server.Data;
using Grid_EntityFramework.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Syncfusion.EJ2.Base;

namespace Grid_EntityFramework.Server.Controllers
{
    [Route("api/[controller]")]
    public class TicketsController : ControllerBase
    {
        private readonly TicketsDbContext _db;

        public TicketsController(TicketsDbContext db)
        {
            _db = db;
        }

        // READ
        [HttpPost("url")]
        public IActionResult UrlDataSource([FromBody] DataManagerRequest dm)
        {
            IQueryable<Ticket> query = _db.Tickets.AsNoTracking();
            var op = new DataOperations();

            if (dm.Where?.Count > 0)
                query = op.PerformFiltering(query, dm.Where, dm.Where[0].Operator)
                    .Cast<Ticket>()
                    .AsQueryable();

         // Other action code goes here
            var count = query.Count();

            return dm.RequiresCounts
                ? Ok(new { result = query.ToList(), count })
                : Ok(query.ToList());
        }
    }
}
```

**Filtering details:**

- Open the filter menu from any of the column header.
- Select filtering criteria (equals, contains, greater than, less than, etc.).
- Click the "Filter" button to apply the filter.
- The "UrlDataSource" method receives the filter criteria in `Where` property.
- Results are filtered accordingly and displayed in the DataGrid.

When filtering is performed in the Grid, a request is sent to the server with the following payload.

![Filtering Operation Payload](../images/entityframework-filtering.png)

### Step 9: Implement sorting feature

Sorting enables arranging records in ascending or descending order based on column values.

**Instructions:**

1. Sorting can be enabled by setting the [allowSorting](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#allowsorting) property to `true`.
2. Inject the `SortService` module in the `providers` property of the "AppComponent".

```ts
// File: src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import {
  GridModule,
  SortService,
} from '@syncfusion/ej2-angular-grids';
import { CustomAdaptor } from './custom-adaptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    GridModule, // NgModule imported directly into a standalone component
  ],
  providers: [
    SortService,
  ],
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {

}
```

```html
<ejs-grid [dataSource]="dataManager"  [allowSorting]="true">
  <e-columns>
    <e-column field="SNo" headerText="S.No" width="70" textAlign="Right"></e-column>
    <!-- Include more columns here -->
  </e-columns>
</ejs-grid>
```

Update the "UrlDataSource" method in the **TicketsController.cs** file to handle sorting:

```csharp
using Grid_EntityFramework.Server.Data;
using Grid_EntityFramework.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Syncfusion.EJ2.Base;

namespace Grid_EntityFramework.Server.Controllers
{
    [Route("api/[controller]")]
    public class TicketsController : ControllerBase
    {
        private readonly TicketsDbContext _db;

        public TicketsController(TicketsDbContext db)
        {
            _db = db;
        }

        // READ
        [HttpPost("url")]
        public IActionResult UrlDataSource([FromBody] DataManagerRequest dm)
        {
            IQueryable<Ticket> query = _db.Tickets.AsNoTracking();
            var op = new DataOperations();

            if (dm.Sorted?.Count > 0)
                query = op.PerformSorting(query, dm.Sorted).Cast<Ticket>().AsQueryable();
            else
                query = query.OrderBy(t => t.TicketId);

                // Other action code goes here

            var count = query.Count();

            return dm.RequiresCounts
                ? Ok(new { result = query.ToList(), count })
                : Ok(query.ToList());
        }
    }
}

```

**Sorting details:**

- Click on the column header to sort in ascending order.
- Click again to sort in descending order.
- The "UrlDataSource" method receives the sort criteria in `Sorted` property.
- Records are sorted accordingly and displayed in the DataGrid.

When sorting is performed in the Grid, a request is sent to the server with the following payload.

![Sorting Operation Payload](../images/entityframework-sorting.png)

### Step 10: Perform CRUD operations

CRUD operations allow adding new records, modifying existing records, and removing items that are no longer relevant. The `DataManager` posts a specific action for each operation so that the server can route to the appropriate handler.

Editing operations in the Grid are enabled through configuring the [editSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#editsettings) properties ([allowEditing](https://ej2.syncfusion.com/angular/documentation/api/grid/gridModel#allowediting), [allowAdding](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettingsModel#allowadding), and [allowDeleting](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettingsModel#allowdeleting)) to `true`. Inject the `EditService` and `ToolbarService` modules in the `providers` property of "AppComponent".

```ts
// File: src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import {
  GridModule,
  ToolbarService,
} from '@syncfusion/ej2-angular-grids';
import { CustomAdaptor } from './custom-adaptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    GridModule, // NgModule imported directly into a standalone component
  ],
  providers: [
    ToolbarService,
  ],
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  public toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
  public edit = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
  };
    public dataManager?: DataManager;
    ngOnInit(): void {
    this.dataManager = new DataManager({
      url: 'http://localhost:5018/api/tickets/url',
      insertUrl: 'http://localhost:5018/api/tickets/insert',
      updateUrl: 'http://localhost:5018/api/tickets/update',
      removeUrl: 'http://localhost:5018/api/tickets/remove',
      batchUrl: 'http://localhost:5018/api/tickets/batch',
      adaptor: new CustomAdaptor(),
    });
  }
}
```

```html
<ejs-grid [dataSource]="dataManager" [editSettings]="edit"
  [toolbar]="toolbar">
  <e-columns>
    <e-column field="SNo" headerText="S.No" width="70" textAlign="Right"></e-column>
    <!-- Include more columns here -->
  </e-columns>
</ejs-grid>
```

**Insert:**

Record insertion allows new tickets to be added directly through the Grid component. The adaptor processes the insertion request, performs any required business‑logic validation, and saves the newly created record to the SQL database.

Implement the `insert` method in (**src/app/CustomAdaptor.ts**) to handle record insertion within the `CustomAdaptor` class:

```ts
  public override insert(dm: DataManager, data: DataResult) {
    return {
      url: `${dm.dataSource["insertUrl"]}`,
      type: "POST",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({ value: data }),
    };
  }
```

In **TicketsController.cs**, implement the "Insert" method:

```csharp
        // CREATE
        [HttpPost("insert")]
        public IActionResult Insert([FromBody] CRUDModel<Ticket> value)
        {
            var ticket = value.Value;

            ticket.TicketId = 0;

            _db.Tickets.Add(ticket);
            _db.SaveChanges();

            return Ok(ticket);
        }
```

**What happens behind the scenes:**

1. The form data is collected and validated in the CustomAdaptor's `insert` method.
2. The `Insert` method in **TicketsController.cs** file is called.
3. The new record is added to the "Ticket" collection.
4. The DataGrid automatically refreshes to display the new record.

Now the new ticket is persisted to the database and reflected in the grid.

When a new record added in the Grid, a request is sent to the server with the following payload.

![Insert Operation Payload](../images/entityframework-adding.png)

**Update:**

Record modification allows ticket details to be updated directly within the Grid. The adaptor processes the edited row, validates the updated values, and applies the changes to the SQL database while ensuring data integrity is preserved.

Implement the `update` method in (**src/app/CustomAdaptor.ts**) to handle record update within the `CustomAdaptor` class:

```ts
  public override update(dm: DataManager, _keyField: string, value: any) {
    return {
      url: `${dm.dataSource["updateUrl"]}`,
      type: "POST",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({ value }),
    };
  }
```

In **TicketsController.cs**, implement the update method:

```csharp
        // UPDATE
        [HttpPost("update")]
        public IActionResult Update([FromBody] CRUDModel<Ticket> value)
        {
            var ticket = value.Value;

            _db.Entry(ticket).State = EntityState.Modified;
            _db.SaveChanges();

            return Ok(ticket);
        }
```

**What happens behind the scenes:**

1. The modified data is collected and validated in the CustomAdaptor's `update` method.
2. The `Update` method in **TicketsController.cs** file is called.
3. The existing record is retrieved from the database by "ID".
4. All properties are updated with the new values.
5. The DataGrid refreshes to display the updated record.

Now modifications are synchronized to the database and reflected in the grid UI.

When a record updated is in the Grid, a request is sent to the server with the following payload.

![Update Operation Payload](../images/entityframework-editing.png)

**Delete:**

Record deletion allows tickets to be removed directly from the DataGrid. The adaptor captures the delete request, executes the corresponding SQL DELETE operation, and updates both the database and the grid to reflect the removal.

Implement the `remove` method in (**src/app/CustomAdaptor.ts**) to handle record deletion within the `CustomAdaptor` class:

```ts
  public override remove(dm: DataManager, keyField: string, value: any) {
    const keyValue =
      value && typeof value === "object" ? value[keyField] : value;
    return {
      url: `${dm.dataSource["removeUrl"]}`,
      type: "POST",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({ key: keyValue }),
    };
  }
```

In **TicketsController.cs**, implement the delete method:

```csharp
        [HttpPost("remove")]
        public IActionResult Remove([FromBody] CRUDModel<Ticket> value)
        {
            var key = Convert.ToInt32(value.Key);
            var ticket = _db.Tickets.First(t => t.TicketId == key);

            _db.Tickets.Remove(ticket);
            _db.SaveChanges();

            return Ok(value);
        }
```

**What happens behind the scenes:**

1. A record is selected and the `Delete` button is clicked.
2. The CustomAdaptor's `remove` method is called.
3. The `Remove` method in **TicketsController.cs** file is called.
4. The record is located in the database by its ID.
5. The record is removed from the `_db.Tickets` collection.
6. The Grid refreshes to remove the deleted record from the UI.

Now tickets are removed from the database and the grid UI reflects the changes immediately.

When a record is deleted in the Grid, a request is sent to the server with the following payload.

![Delete Operation Payload](../images/entityframework-deleting.png)

**Batch update:**

Batch operations combine multiple insert, update, and delete actions into a single request, minimizing network overhead by applying all changes atomically to the SQL database.

Implement the `batchRequest` method in (**src/app/CustomAdaptor.ts**) to handle multiple record updates in a single request within the `CustomAdaptor` class:

```ts
  public override batchRequest(dm: DataManager, changes: BatchChanges) {
    return {
      url: `${dm.dataSource["batchUrl"]}`,
      type: "POST",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({
        added: changes.addedRecords,
        changed: changes.changedRecords,
        deleted: changes.deletedRecords,
      }),
    };
  }
```

In **TicketsController.cs**, implement the batch method:

```csharp
 // BATCH
        [HttpPost("batch")]
        public IActionResult Batch([FromBody] CRUDModel<Ticket> value)
        {
            if (value.Changed != null)
            {
                foreach (var ticket in value.Changed)
                {
                    _db.Tickets.Attach(ticket);
                    _db.Entry(ticket).State = EntityState.Modified;
                }
            }

            if (value.Added != null)
            {
                foreach (var ticket in value.Added)
                {
                    ticket.TicketId = 0;
                    _db.Tickets.Add(ticket);
                }
            }

            if (value.Deleted != null)
            {
                foreach (var ticket in value.Deleted)
                {
                    var existing = _db.Tickets.Find(ticket.TicketId);
                    if (existing != null)
                        _db.Tickets.Remove(existing);
                }
            }

            _db.SaveChanges();
            return Ok(value);
        }
```

> This method is triggered when the Grid is operating in [Batch](https://ej2.syncfusion.com/angular/documentation/grid/editing/batch-editing) Edit mode.

**What happens behind the scenes:**

- The Grid collects all added, edited, and deleted records in Batch Edit mode.
- The combined batch request is passed to the CustomAdaptor’s `batchRequest` method.
- Each modified record, added and deleted records are processed using `BatchUpdate` method in **TicketsController.cs** file.
- All repository operations persist changes to the SQL database.
- The DataGrid refreshes to display the updated, added, and removed records in a single response.

Now the adaptor supports bulk modifications with atomic database synchronization. All CRUD operations are now fully implemented, enabling comprehensive data management capabilities within the Grid.

When a batch update is performed in the Grid, a request is sent to the server with the following payload.

![Batch Update Operation Payload](../images/entityframework-batch.png)

### Step 11: Complete code

Here is the complete and final (**src/app/app.component.ts**) component with all features integrated:


```ts
// File: src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import {
  GridModule,
  ToolbarService,
  EditService,
  SortService,
  FilterService,
  PageService,
} from '@syncfusion/ej2-angular-grids';
import { CustomAdaptor } from './custom-adaptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    GridModule, // NgModule imported directly into a standalone component
  ],
  providers: [
    ToolbarService,
    EditService,
    SortService,
    FilterService,
    PageService,
  ],
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  public toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
  public edit = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    // mode: 'Batch',
  };
  public dataManager?: DataManager;

  ngOnInit(): void {
    this.dataManager = new DataManager({
      url: 'http://localhost:5018/api/tickets/url',
      insertUrl: 'http://localhost:5018/api/tickets/insert',
      updateUrl: 'http://localhost:5018/api/tickets/update',
      removeUrl: 'http://localhost:5018/api/tickets/remove',
      batchUrl: 'http://localhost:5018/api/tickets/batch',
      adaptor: new CustomAdaptor(),
    });
  }
}

```

```html
<ejs-grid
  [dataSource]="dataManager"
  [allowSorting]="true"
  [allowFiltering]="true"
  [allowPaging]="true"
  [pageSettings]="{ pageSize: 10 }"
  [editSettings]="edit"
  [toolbar]="toolbar">

  <e-columns>
    <e-column field="SNo" headerText="S.No" width="70" textAlign="Right"></e-column>
    <e-column field="TicketId" headerText="ID" width="50" isPrimaryKey="true" isIdentity="true"></e-column>
    <e-column field="PublicTicketId" headerText="Ticket ID" width="120" textAlign="Right" [validationRules]="{ required: true }"></e-column>
    <e-column field="Title" headerText="Title" width="150"></e-column>
    <e-column field="Department" headerText="Department" width="110"></e-column>
    <e-column field="Assignee" headerText="Assignee" width="150"></e-column>
    <e-column field="Status" headerText="Status" width="120" [defaultValue]="'Open'" [validationRules]="{ required: true }"></e-column>
    <e-column field="Priority" headerText="Priority" width="120" [defaultValue]="'Medium'" [validationRules]="{ required: true }"></e-column>
    <e-column field="CreatedAt" headerText="Created At" editType="datetimepickeredit" type="datetime" width="180" format="dd/MM/yyyy hh:mm:ss a" [validationRules]="{ required: true }"></e-column>
    <e-column field="UpdatedAt" headerText="Updated At" editType="datetimepickeredit" type="datetime" width="180" format="dd/MM/yyyy hh:mm:ss a" [validationRules]="{ required: true }"></e-column>
  </e-columns>
</ejs-grid>

```

> - Set [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/column#isprimarykey) to `true` for a column that contains unique values.
> - The [editType](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edittype) property can be used to specify the desired editor for each column.(https://ej2.syncfusion.com/angular/documentation/grid/editing/edit-types)
> - [type](https://ej2.syncfusion.com/angular/documentation/api/grid/columnmodel#type) property of the Grid columns specifies the data type of a grid column.

Here is the complete Controller **TicketsController.cs** file:

```csharp
using Grid_EntityFramework.Server.Data;
using Grid_EntityFramework.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Syncfusion.EJ2.Base;

namespace Grid_EntityFramework.Server.Controllers
{
    [Route("api/[controller]")]
    public class TicketsController : ControllerBase
    {
        private readonly TicketsDbContext _db;

        public TicketsController(TicketsDbContext db)
        {
            _db = db;
        }

        // READ
        [HttpPost("url")]
        public IActionResult UrlDataSource([FromBody] DataManagerRequest dm)
        {
            IQueryable<Ticket> query = _db.Tickets.AsNoTracking();
            var op = new DataOperations();

            if (dm.Search?.Count > 0)
                query = op.PerformSearching(query, dm.Search).Cast<Ticket>().AsQueryable();

            if (dm.Where?.Count > 0)
                query = op.PerformFiltering(query, dm.Where, dm.Where[0].Operator)
                    .Cast<Ticket>()
                    .AsQueryable();

            if (dm.Sorted?.Count > 0)
                query = op.PerformSorting(query, dm.Sorted).Cast<Ticket>().AsQueryable();
            else
                query = query.OrderBy(t => t.TicketId);

            var count = query.Count();

            if (dm.Skip > 0)
                query = query.Skip(dm.Skip);

            if (dm.Take > 0)
                query = query.Take(dm.Take);

            return dm.RequiresCounts
                ? Ok(new { result = query.ToList(), count })
                : Ok(query.ToList());
        }

        // CREATE
        [HttpPost("insert")]
        public IActionResult Insert([FromBody] CRUDModel<Ticket> value)
        {
            var ticket = value.Value;

            // Identity handled like MVC
            ticket.TicketId = 0;

            _db.Tickets.Add(ticket);
            _db.SaveChanges();

            return Ok(ticket);
        }

        // UPDATE
        [HttpPost("update")]
        public IActionResult Update([FromBody] CRUDModel<Ticket> value)
        {
            var ticket = value.Value;

            _db.Entry(ticket).State = EntityState.Modified;
            _db.SaveChanges();

            return Ok(ticket);
        }

        // DELETE
        [HttpPost("remove")]
        public IActionResult Remove([FromBody] CRUDModel<Ticket> value)
        {
            var key = Convert.ToInt32(value.Key);
            var ticket = _db.Tickets.First(t => t.TicketId == key);

            _db.Tickets.Remove(ticket);
            _db.SaveChanges();

            return Ok(value);
        }

        // BATCH
        [HttpPost("batch")]
        public IActionResult Batch([FromBody] CRUDModel<Ticket> value)
        {
            if (value.Changed != null)
            {
                foreach (var ticket in value.Changed)
                {
                    _db.Tickets.Attach(ticket);
                    _db.Entry(ticket).State = EntityState.Modified;
                }
            }

            if (value.Added != null)
            {
                foreach (var ticket in value.Added)
                {
                    ticket.TicketId = 0;
                    _db.Tickets.Add(ticket);
                }
            }

            if (value.Deleted != null)
            {
                foreach (var ticket in value.Deleted)
                {
                    var existing = _db.Tickets.Find(ticket.TicketId);
                    if (existing != null)
                        _db.Tickets.Remove(existing);
                }
            }

            _db.SaveChanges();
            return Ok(value);
        }
    }
}

```

## Running the application

### Running the ASP.NET Core backend server

- Open a terminal or Package Manager Console, navigate to the **Grid_EntityFramework.Server** project directory, and run the following commands to build and start the backend server:

```powershell
dotnet build
dotnet run
```
- The backend server starts on **http://localhost:5018** (or the displayed port), and the API can be tested at **http://localhost:5018/api/tickets/url**.

### Running the Angular frontend Client

- Open a terminal, navigate to the **grid_EntityFramework.client** directory, and run the following command:

```bash
ng serve
```

- Open a browser, go to **http://localhost:4200** (or the shown port), where the app connects to **http://localhost:5018/api/tickets/url** and becomes ready for use.

**Available Features:**

- **View Data**: All tickets from the SQL database are displayed in the Grid.
- **Search**: Use the search box to find tickets by any field.
- **Filter**: Click on column headers to apply filters.
- **Sort**: Click on column headers to sort data in ascending or descending order.
- **Pagination**: Navigate through records using page numbers.
- **Add**: Click the "Add" button to create a new tickets.
- **Edit**: Click the "Edit" button to modify existing tickets.
- **Delete**: Click the "Delete" button to remove tickets.

## Complete Sample Repository

A complete, working sample implementation is available in the [GitHub](https://github.com/SyncfusionExamples/ej2-angular-grid-samples/tree/master/connecting-to-database/syncfusion-angular-grid-EntityFrameWork) repository.

## See also

- [Types of Editing](https://ej2.syncfusion.com/angular/documentation/grid/grouping/grouping)
- [Excel Export](https://ej2.syncfusion.com/angular/documentation/grid/excel-export/excel-exporting)
- [Integration with Filter UIs](https://ej2.syncfusion.com/angular/documentation/grid/filtering/filter-menu#custom-component-in-filter-menu)