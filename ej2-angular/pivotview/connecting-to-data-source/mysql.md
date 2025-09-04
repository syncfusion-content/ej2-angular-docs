---
title: "MySQL Data Binding in Angular Pivotview component | Syncfusion"
component: "Pivot Table"
description: "Learn how to bind data from a MySQL database in the Syncfusion Angular Pivot Table of Syncfusion Essential JS 2 and more."
---

# MySQL in EJ2 Angular Pivotview Component

This guide explains how to retrieve data from a MySQL database using the [MySqlClient](https://mysqlclient.readthedocs.io/) library and bind it to the Pivot Table through a Web API controller.

## Creating a Web API Service to Fetch MySQL Data

Follow these steps to create a Web API service that retrieves data from a MySQL database and prepares it for the Pivot Table.

### Step 1: Create an ASP.NET Core Web Application
1. Open Visual Studio and create a new **ASP.NET Core Web App** project named **MyWebService**
2. Follow the official [Microsoft documentation](https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-aspnet-core?view=vs-2022) for detailed instructions on creating an ASP.NET Core Web application.

![Create ASP.NET Core Web App project](../images/azure-asp-core-web-service-create.png)

### Step 2: Install the MySql.Data NuGet Package
To enable MySQL database connectivity in your application:
1. Open the **NuGet Package Manager** in your project solution and search for **MySql.Data**.
2. Install the **MySql.Data** package to add MySQL database support.

![Add the NuGet package MySql.Data to the project](../images/mysql-data-nuget-package-install.png)

### Step 3: Create a Web API Controller
1. In the **Controllers** folder, create a new file named **PivotController.cs**.
2. This controller will handle data communication between the MySQL database and the Pivot Table.

### Step 4: Connect to MySQL and Retrieve Data
In the **PivotController.cs** file, use the [MySqlClient](https://mysqlclient.readthedocs.io/) from the **MySql.Data** library to connect to a MySQL database and retrieve data for the Pivot Table.

1. **Establish Connection**: Use **MySqlConnection** with a valid connection string (e.g., `Server=localhost;Database=mydb;Uid=myuser;Pwd=mypassword;`) to connect to the MySQL database.
2. **Query and Fetch Data**: Execute a SQL query (e.g., `SELECT * FROM orders`) using **MySqlCommand** to retrieve data for the pivot table.
3. **Structure the Data**: Use **MySqlDataAdapter**'s **Fill** method to populate query results into a **DataTable** for JSON serialization.

```csharp
    using Microsoft.AspNetCore.Mvc;
    using MySql.Data.MySqlClient;
    using Newtonsoft.Json;
    using System.Data;

    namespace MyWebService.Controllers
    {
        [ApiController]
        [Route("[controller]")]
        public class PivotController : ControllerBase
        {
            public dynamic GetMySQLResult()
            {
                // Replace with your own connection string.
                MySqlConnection connection = new MySqlConnection("<Enter your valid connection string here>");
                connection.Open();
                MySqlCommand command = new MySqlCommand("SELECT * FROM orders", connection);
                MySqlDataAdapter dataAdapter = new MySqlDataAdapter(command);
                DataTable dataTable = new DataTable();
                dataAdapter.Fill(dataTable);
                connection.Close();
                return dataTable;
            }
        }
    }

```

> Replace the placeholder connection string with your actual MySQL credentials.

### Step 5: Serialize Data to JSON
In the **PivotController.cs** file, define a **Get** method that calls **GetMySQLResult** to retrieve data from the MySQL database as a **DataTable**. Then, use **JsonConvert.SerializeObject** from the **Newtonsoft.Json** library to convert the **DataTable** into a JSON format. This JSON data will be used by the Pivot Table component.

> Ensure the **Newtonsoft.Json** NuGet package is installed in your project to use **JsonConvert**.

```csharp
    using Microsoft.AspNetCore.Mvc;
    using MySql.Data.MySqlClient;
    using Newtonsoft.Json;
    using System.Data;

    namespace MyWebService.Controllers
    {
        [ApiController]
        [Route("[controller]")]
        public class PivotController : ControllerBase
        {
            [HttpGet(Name = "GetMySQLResult")]
            public object Get()
            {
                return JsonConvert.SerializeObject(GetMySQLResult());
            }

            public dynamic GetMySQLResult()
            {
                // Replace with your own connection string.
                MySqlConnection connection = new MySqlConnection("<Enter your valid connection string here>");
                connection.Open();
                MySqlCommand command = new MySqlCommand("SELECT * FROM orders", connection);
                MySqlDataAdapter dataAdapter = new MySqlDataAdapter(command);
                DataTable dataTable = new DataTable();
                dataAdapter.Fill(dataTable);
                connection.Close();
                return dataTable;
            }
        }
    }

```

### Step 6: Run the Web API Service
1. Build and run the application in Visual Studio.
2. The application will be hosted at a URL such as `https://localhost:7146`(the port number may vary based on your configuration).

### Step 7: Verify the JSON Data
1. Access the Web API endpoint at `https://localhost:7146/Pivot` to view the JSON data retrieved from the MySQL database.
2. The browser will display the JSON data, as shown below.

![Hosted Web API URL](../images/mysql-data.png)

## Connecting the Pivot Table to a MySQL Database Using the Web API Service

This section explains how to connect the pivot table to a MySQL database by fetching data from the Web API service created above.

### Step 1: Create a Pivot Table in Angular
1. Set up an Angular project with the pivot table by following the [Getting Started](../getting-started) documentation.
2. Ensure all necessary Syncfusion EJ2 Pivot Table dependencies are installed in your Angular project.

### Step 2: Configure the Web API URL in the Pivot Table
1. In the **app.component.ts** file, map the Web API URL (`https://localhost:7146/Pivot`) to the Pivot Table using the [url](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#url) property within the [dataSourceSettings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/).
2. Below is the sample code to configure the pivot table to fetch data from the Web API:

```typescript
import { Component, OnInit } from '@angular/core';
import { FieldListService, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
     selector: 'app-root',
     // specifies the template string for the pivot table component
     template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings showFieldList='true'></ejs-pivotview>`,
     providers: [FieldListService],
})
export class AppComponent implements OnInit {
    public pivotData: IDataSet[];
    public dataSourceSettings: DataSourceSettingsModel;

    ngOnInit(): void {
        this.dataSourceSettings = {
            url: 'https://localhost:7146/pivot'
            // Additional configuration will be added in the next step
        };
    }
}

```

### Step 3: Define the Pivot Table Report
1. Configure the pivot table report in the **app.component.ts** file to structure the data retrieved from the MySQL database.
2. Use the [rows](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#rows), [columns](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#columns), [values](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#values), and [filters](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#filters) properties of [dataSourceSettings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/) to define how data fields are organized and aggregated.
3. Enable the field list by setting the [showFieldList](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#showfieldlist) property to **true** and including the `FieldListService` module in the providers. This allows users to interactively modify the pivot table’s structure by adding or rearranging fields.

```typescript
import { Component, OnInit } from '@angular/core';
import { FieldListService, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
  selector: 'app-root',
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings showFieldList='true'></ejs-pivotview>`,
  providers: [FieldListService],
})
export class AppComponent implements OnInit {
    public pivotData: IDataSet[];
    public dataSourceSettings: DataSourceSettingsModel;

    ngOnInit(): void {
        this.dataSourceSettings = {
            url: 'https://localhost:7146/Pivot',
            columns: [{ name: 'ShipName' }],
            values: [{ name: 'Freight', caption: 'Sum of Freight' }],
            rows: [{ name: 'ShipCity' }],
        };
    }
}
```

### Step 4: Run and Verify the Pivot Table
1. Run the Angular application.
2. The pivot table will display the data fetched from the MySQL database via the Web API, structured according to the defined report.
3. The resulting pivot table will look like this:

![Pivot table bound with MySQL database](../images/pivottable-with-mysql-data.png)

### Additional Resources
Explore a complete example of the Angular Pivot Table integrated with an ASP.NET Core Web Application to fetch data from a MySQL database in this [GitHub](https://github.com/SyncfusionExamples/how-to-bind-MySQL-database-to-pivot-table) repository.