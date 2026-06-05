---
layout: post
title: Angular Grid - Local Data Binding | Syncfusion
description: Local data binding enables the Angular Grid to work with in-memory datasets, as well as fetch and display data from remote services through external requests.
platform: ej2-angular
control: Local data 
documentation: ug
domainurl: ##DomainURL##
---

# Local Data in Angular Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid provides a straightforward way to bind local data, such as arrays or JSON objects, to the grid component. This feature allows data to be displayed and manipulated within the grid without the need for external server calls, making it particularly useful for scenarios involving static or locally stored data.

Assign a JavaScript object array to the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#datasource) property. Optionally, provide the local data source using an instance of the `DataManager`.

The following example demonstrates the local data binding feature in the Angular Grid component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/databinding-cs1/src/app.component.ts %} 
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/databinding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
    
{% previewsample "page.domainurl/samples/grid/databinding-cs1" %}

## Data binding with SignalR 

The Syncfusion Angular Grid component supports real-time data binding using SignalR, enabling automatic grid updates as data changes on the server. This capability proves essential for applications requiring live updates and multi-client synchronization.

To implement real-time data binding with SignalR in the Syncfusion Angular Grid, follow these steps:

**Step 1:** Install the necessary SignalR package for the client application using npm:

```ts
npm install @microsoft/signalr --save
```

**Step 2:** Create a SignalR hub on the server to manage client-server communication. Create a "ChatHub.cs" file under the **Hubs** folder with the following code to define methods for sending data updates to clients:

```cs
using Microsoft.AspNetCore.SignalR;

namespace SignalRChat.Hubs
{
    public class ChatHub : Hub 
    {
        public async Task SendMessage(string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", message);
        }
    }
}
```

**Step 3:** Configure the SignalR server to route requests to the SignalR hub. In the **Program.cs** file, add the following configuration:

```cs
using SignalRChat.Hubs;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSignalR(); // Add SignalR services
// Add services to the container.
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.PropertyNamingPolicy = null; // Use PascalCase
    });

builder.Services.AddCors(options =>
{
    options.AddPolicy("CORSPolicy",
        builder => builder
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials()
        .SetIsOriginAllowed((hosts) => true));
});
builder.Services.AddControllersWithViews();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. Consider changing this for production scenarios; see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}
app.UseCors("CORSPolicy");
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.MapHub<ChatHub>("/chatHub"); // Map the ChatHub
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
```

**Step 4:** Create a basic Angular Grid by following the [Getting Started](https://ej2.syncfusion.com/angular/documentation/grid/getting-started) documentation.

**Step 5:** In the client-side code, establish a connection to the SignalR hub and configure grid data binding in the **fetch.component.ts** file:

```typescript
import { Component, ViewChild } from '@angular/core';
import { GridComponent, EditEventArgs, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { HubConnection} from '@microsoft/signalr';
import * as signalR from '@microsoft/signalr';

@Component({ 
  selector: 'app-fetch-data',
  template: ` 
    <ejs-grid #grid [dataSource]='data' (actionComplete)="actionComplete($event)" (created)="created()" [editSettings]='editSettings' [toolbar]='toolbar' allowPaging="true" height="320">
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' isPrimaryKey=true width='150'></e-column>
            <e-column field='CustomerID' headerText='Customer Name' width='150'></e-column>
            <e-column field='ShipCity' headerText='Ship City' width='150' textAlign='Right'></e-column>
        </e-columns>
    </ejs-grid>
  `
})
export class FetchDataComponent {
  @ViewChild('grid')
  public grid?: GridComponent;
  public data?: DataManager;
  public editSettings?: EditSettingsModel;
  public toolbar?: ToolbarItems[];
  public orderIDRules?: object;
  public customerIDRules?: object;
  public flag = false;
  private connection!: HubConnection;

  ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://localhost:****/Home/UrlDatasource',
      updateUrl: 'https://localhost:****/Home/Update',
      insertUrl: 'https://localhost:****/Home/Insert',
      removeUrl: 'https://localhost:****/Home/Delete',
      adaptor: new UrlAdaptor()
    }); //Use remote server host number instead ****
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:****/ChatHub")  //Use remote server host number instead ****
      .build();
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.orderIDRules = { required: true };
    this.customerIDRules = { required: true, minLength: 3 };
  }
  created() {
    // Add connection handler to receive messages from the hub
    this.connection.on("ReceiveMessage", function (message: string) {
      var grid = (document.getElementsByClassName('e-grid')[0] as HTMLFormElement)["ej2_instances"][0];
      grid.refresh();
    });

    // Start the connection
    this.connection.start()
  .then(() => {
    console.log("SignalR connection established successfully");
    // Send initial message once connection is established
    this.connection.invoke('SendMessage', "refreshPages")
      .catch((err: Error) => {
        console.error("Error sending data:", err.toString());
      });
  })
  .catch((err: Error) => {
    console.error("Error establishing SignalR connection:", err.toString());
  });

  }
  actionComplete(args: EditEventArgs) {
    if (args.requestType == "save" || args.requestType == "delete") {
      // Send message from connected client to all clients
      this.connection.invoke('SendMessage', "refreshPages")
        .catch((err:Error ) => {
          console.error(err.toString());
        });
    }
  }
}
```

**Step 6:** Create a controller on the server to manage data operations such as fetching, updating, inserting, and deleting records. Create a **HomeController.cs** file under the **Controllers** folder with the following code:

```cs
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using AngularwithASPCore.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AngularwithASPCore.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        // Fetch data source
        public IActionResult UrlDatasource([FromBody] Data dm)
        {
            var val = OrdersDetails.GetAllRecords();
            var Data = val.ToList();

            if (dm.@where != null)
            {
                Data = OrdersDetails.GetAllRecords().Where(or => or.EmployeeID.ToString() == dm.@where[0].value).ToList();
            }

            if (dm.skip != 0)
                Data = Data.Skip(dm.skip).ToList();
            if (dm.take != 0)
                Data = Data.Take(dm.take).ToList();
            int count = Data.Count();
            return dm.requiresCounts ? Json(new { result = Data, count = count }) : Json(Data);
        }

        // Update record
        public ActionResult Update([FromBody] CRUDModel<OrdersDetails> value)
        {
            var ord = value.value;
            OrdersDetails val = OrdersDetails.GetAllRecords().Where(or => or.OrderID == ord.OrderID).FirstOrDefault();
            val.OrderID = ord.OrderID;
            val.EmployeeID = ord.EmployeeID;
            val.CustomerID = ord.CustomerID;
            val.Freight = ord.Freight;
            val.OrderDate = ord.OrderDate;
            val.ShipCity = ord.ShipCity;
            val.ShipCountry = ord.ShipCountry;

            return Json(value.value);
        }
        // Insert record
        public ActionResult Insert([FromBody] CRUDModel<OrdersDetails> value)
        {
            OrdersDetails.GetAllRecords().Insert(0, value.value);
            return Json(value.value);
        }
        // Delete record
        public ActionResult Delete([FromBody] CRUDModel<OrdersDetails> value)
        {
            // Find and remove record with matching OrderID
            OrdersDetails.GetAllRecords().Remove(OrdersDetails.GetAllRecords().Where(or => or.OrderID == int.Parse(value.key.ToString())).FirstOrDefault());
            return Json(value);
        }
    }
}

public class Data
{
    public bool requiresCounts { get; set; }
    public int skip { get; set; }
    public int take { get; set; }
    public List<Wheres> where { get; set; }
}

public class CRUDModel<T> where T : class
{
    public string action { get; set; }
    public string table { get; set; }
    public string keyColumn { get; set; }
    public object key { get; set; }
    public T value { get; set; }
    public List<T> added { get; set; }
    public List<T> changed { get; set; }
    public List<T> deleted { get; set; }
    public IDictionary<string, object> @params { get; set; }
}

public class Wheres
{
    public List<Predicates> predicates { get; set; }
    public string field { get; set; }
    public bool ignoreCase { get; set; }
    public bool isComplex { get; set; }
    public string value { get; set; }
    public string Operator { get; set; }
}

public class Predicates
{
    public string value { get; set; }
    public string field { get; set; }
    public bool isComplex { get; set; }
    public bool ignoreCase { get; set; }
    public string Operator { get; set; }
}
```

**Step 7:** Define a model class to represent the data structure. Create an **OrdersDetails.cs** file under the **Models** folder with the following code:

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularwithASPCore.Models
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
            this.ShipCity = ShipCity;
            this.Verified = Verified;
            this.OrderDate = OrderDate;
            this.ShipName = ShipName;
            this.ShipCountry = ShipCountry;
            this.ShippedDate = ShippedDate;
            this.ShipAddress = ShipAddress;
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
                    order.Add(new OrdersDetails(code + 3, "ANTON", i + 1, 4.3 * i, true, new DateTime(1957, 11, 30), "Cholchester", "Frankenversand", "Germany", new DateTime(1996, 10, 7), "Carrera 52 con Ave. Bolívar #65-98 Llano Largo"));
                    order.Add(new OrdersDetails(code + 4, "BLONP", i + 3, 5.3 * i, false, new DateTime(1930, 10, 22), "Marseille", "Ernst Handel", "Austria", new DateTime(1996, 12, 30), "Magazinweg 7"));
                    order.Add(new OrdersDetails(code + 5, "BOLID", i + 4, 6.3 * i, true, new DateTime(1953, 02, 18), "Tsawassen", "Hanari Carnes", "Switzerland", new DateTime(1997, 12, 3), "1029 - 12th Ave. S."));
                    code += 5;
                }
            }
            return order;
        }

        public int OrderID { get; set; }
        public string CustomerID { get; set; }
        public int EmployeeID { get; set; }
        public double Freight { get; set; }
        public string ShipCity { get; set; }
        public bool Verified { get; set; }
        public DateTime OrderDate { get; set; }
        public string ShipName { get; set; }
        public string ShipCountry { get; set; }
        public DateTime ShippedDate { get; set; }
        public string ShipAddress { get; set; }
    }
}
```

The following screenshot demonstrates addition, editing, and deletion operations with changes reflected across all connected clients:

![SignalR real-time data synchronization across multiple clients](../../grid/images/signalR.gif)

## Binding data from Excel file

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid supports importing data from Excel files for display and manipulation within the grid. This streamlines transferring Excel data into a web-based environment. Use the [Uploader](https://ej2.syncfusion.com/angular/documentation/uploader/getting-started) component's [change](https://ej2.syncfusion.com/angular/documentation/api/uploader#change) event to handle the import.

To import Excel data into the grid, follow these steps:

1. Import the Excel file using the `Uploader` component.
2. Parse the Excel file data using `XLSX` library.
3. Bind the resulting JSON to the grid.

The following example demonstrates Excel data import into the grid utilizing the `Uploader` component's `change` event with the `XLSX` library:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/imported-data/src/app.component.ts %} 
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/imported-data/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/imported-data" %}

## Binding data and performing CRUD actions via Fetch request

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid provides a seamless way to bind data from external sources using Fetch requests, facilitating CRUD (Create, Read, Update, Delete) operations with data retrieved from a server. This feature is particularly valuable for sending data to a server for database updates and for asynchronously retrieving data without refreshing the entire web page.

To achieve data binding and perform CRUD actions using Ajax requests in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid, follow these steps:

**Step 1:** Include the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid in the HTML with necessary configurations:

```html
<button ejs-button (click)="click()">Bind data via Fetch</button>
<div style="padding: 20px 17px 0 0">
    <ejs-grid #grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' allowPaging="true" height="320" (actionBegin)="actionBegin($event)" (actionComplete)="actionComplete($event)">
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' isPrimaryKey=true width='150'></e-column>
            <e-column field='CustomerID' headerText='Customer Name' width='150'></e-column>
            <e-column field='ShipCity' headerText='Ship City' width='150' textAlign='Right'></e-column>
        </e-columns>
    </ejs-grid>
</div>
```

**Step 2:** To bind data from an external Fetch request, utilize the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid#datasource) property of the grid. Fetch data from the server and provide it to the `dataSource` property using the fetch API:

```ts
click() {
    fetch("https://localhost:****/Home/Getdata", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }) //Use remote server host number instead ****
    .then(response => response.json())
    .then(data => {
        this.grid.dataSource = data;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
```

On the server side, the **GetData** method within the HomeController contains the grid's data source. When the button is clicked, a Fetch request retrieves data from the server and binds it to the Grid component.

```cs
public class HomeController : Controller
{        
    public ActionResult Getdata()
    {
        IEnumerable DataSource = OrdersDetails.GetAllRecords();
        return Json(DataSource);
    } 

    // Create model class to define properties
    public class OrdersDetails
    {
        public OrdersDetails()
        {
        }

        public OrdersDetails(int OrderID, string CustomerId, int EmployeeId, double Freight, bool Verified, DateTime OrderDate, string ShipCity, string ShipName, string ShipCountry, DateTime ShippedDate, string ShipAddress)
        {
            this.OrderID = OrderID;
            this.CustomerID = CustomerId;
            this.EmployeeID = EmployeeId;
            this.Freight = Freight;
            this.ShipCity = ShipCity;
            this.Verified = Verified;
            this.OrderDate = OrderDate;
            this.ShipName = ShipName;
            this.ShipCountry = ShipCountry;
            this.ShippedDate = ShippedDate;
            this.ShipAddress = ShipAddress;
        }

        // Render data in this method
        public static List<OrdersDetails> GetAllRecords()
        {
            List<OrdersDetails> order = new List<OrdersDetails>();
            int code = 10000;
            for (int i = 1; i < 10; i++)
            {
                order.Add(new OrdersDetails(code + 1, "ALFKI", i + 0, 2.3 * i, false, new DateTime(1991, 05, 15), "Berlin", "Simons bistro", "Denmark", new DateTime(1996, 7, 16), "Kirchgasse 6"));
                order.Add(new OrdersDetails(code + 2, "ANATR", i + 2, 3.3 * i, true, new DateTime(1990, 04, 04), "Madrid", "Queen Cozinha", "Brazil", new DateTime(1996, 9, 11), "Avda. Azteca 123"));
                order.Add(new OrdersDetails(code + 3, "ANTON", i + 1, 4.3 * i, true, new DateTime(1957, 11, 30), "Cholchester", "Frankenversand", "Germany", new DateTime(1996, 10, 7), "Carrera 52 con Ave. Bolívar #65-98 Llano Largo"));
                order.Add(new OrdersDetails(code + 4, "BLONP", i + 3, 5.3 * i, false, new DateTime(1930, 10, 22), "Marseille", "Ernst Handel", "Austria", new DateTime(1996, 12, 30), "Magazinweg 7"));
                order.Add(new OrdersDetails(code + 5, "BOLID", i + 4, 6.3 * i, true, new DateTime(1953, 02, 18), "Tsawassen", "Hanari Carnes", "Switzerland", new DateTime(1997, 12, 3), "1029 - 12th Ave. S."));
                code += 5;
            }
            return order;
        }

        public int? OrderID { get; set; }
        public string CustomerID { get; set; }
        public int? EmployeeID { get; set; }
        public double? Freight { get; set; }
        public string ShipCity { get; set; }
        public bool Verified { get; set; }
        public DateTime OrderDate { get; set; }
        public string ShipName { get; set; }
        public string ShipCountry { get; set; }
        public DateTime ShippedDate { get; set; }
        public string ShipAddress { get; set; }
    }    
}
```

**Step 3:** To perform CRUD actions, leverage the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#actionbegin) event. The default CRUD operations can be canceled by utilizing the `cancel` argument provided by this event. This allows dynamic invocation of server-side methods using Fetch, along with the relevant data received from the `actionBegin` event, to update server data accordingly.

A. To add a new record using Fetch requests, follow these steps:

```ts
public flag = false;

actionBegin(e: EditEventArgs) {
    // Initially this.flag needs to be false to enter this condition
    if (!this.flag) {
        // Add operations
        if (e.requestType == 'save' && ((e as any).action == 'add')) {
            var editedData = (e as any).data;
            // Cancel default edit operation
            e.cancel = true;
            // Send updated data to server using fetch call
            fetch('https://localhost:****/Home/Insert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ value: editedData })
            }) //Use remote server host number instead ****
            .then(response => response.json())
            .then(data => {
                // this.flag is enabled to skip this execution when grid ends add/edit
                this.flag = true;
                // The added/edited data will be saved in the Grid
                this.grid.endEdit();
            })
            .catch(error => {
                // Add/edit failed
                // The this.flag is disabled if operation fails so it can enter the condition on next execution
                this.flag = false;
                console.error('Add operation failed:', error);
            });
        }
    }
}
```

```cs
// Insert record
public ActionResult Insert(OrdersDetails value)
{
    OrdersDetails.GetAllRecords().Insert(0, value);
    return Json(value);
}
```

B. To edit and save a record using a Fetch request, follow these steps:

```ts
public flag = false;

actionBegin(e: EditEventArgs) {
    // Initially this.flag needs to be false to enter this condition
    if (!this.flag) {
        if (e.requestType == 'save' && ((e as any).action == "edit")) {
            var editedData = (e as any).data;
            // Cancel default edit operation
            e.cancel = true;
            // Send updated data to server using fetch call
            fetch('https://localhost:****/Home/Update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ value: editedData })
            }) //Use remote server host number instead ****
            .then(response => response.json())
            .then(data => {
                // this.flag is enabled to skip this execution when grid ends add/edit
                this.flag = true;
                // The added/edited data will be saved in the Grid
                this.grid.endEdit();
            })
            .catch(error => {
                // Add/edit failed
                // The this.flag is disabled if operation fails so it can enter the condition on next execution
                this.flag = false;
                console.error('Update operation failed:', error);
            });
        }        
    }
}
```

```cs
// Update record
public ActionResult Update(OrdersDetails value)
{
    var ord = value;
    OrdersDetails val = OrdersDetails.GetAllRecords().Where(or => or.OrderID == ord.OrderID).FirstOrDefault();
    val.OrderID = ord.OrderID;
    val.EmployeeID = ord.EmployeeID;
    val.CustomerID = ord.CustomerID;
    return Json(value);
}
```

C. To delete a record using a Fetch request, follow these steps:

```ts
public flag = false;

actionBegin(e: EditEventArgs) {
    // Initially this.flag needs to be false to enter this condition
    if (!this.flag) {
        if (e.requestType == 'delete') {
            var editedData = (e as any).data;
            // Cancel default delete operation
            e.cancel = true;
            // Send deleted data to server using fetch call
            fetch('https://localhost:****/Home/Delete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ key: editedData[0][this.grid.getPrimaryKeyFieldNames()[0]] })
            }) //Use remote server host number instead ****
            .then(response => response.json())
            .then(data => {
                // this.flag is enabled to skip this execution when grid deletes record
                this.flag = true;
                // The deleted data will be removed in the Grid
                this.grid.deleteRecord();
            })
            .catch(error => {
                // Delete failed
                // The this.flag is disabled if operation fails so it can enter the condition on next execution
                this.flag = false;
                console.error('Delete operation failed:', error);
            });
        }
    }
}
```

```cs
// Delete record
public ActionResult Delete(int key)
{
    OrdersDetails.GetAllRecords().Remove(OrdersDetails.GetAllRecords().Where(or => or.OrderID == key).FirstOrDefault());
    var data = OrdersDetails.GetAllRecords();
    return Json(data);
}
```

**Step 4:** In the Fetch success event, the grid's [endEdit](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#endedit) and [deleteRecord](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#deleterecord) methods can be utilized to handle the addition, editing, and deletion of corresponding data in the grid. However, invoking these methods triggers the `actionBegin` event once again to save the changes in the grid. To prevent this behavior and maintain control over the execution flow, a flag variable can be employed and managed within the `actionComplete` and Fetch failure events. The following code snippet demonstrates this approach:

```ts
actionComplete(e: EditEventArgs) {
    if (e.requestType === 'save' || e.requestType === 'delete') {
        // The this.flag is disabled after operation is successfully performed so it can enter the condition on next execution
        this.flag = false;
    }
}
```

The following screenshot demonstrates data loading when the button is clicked and CRUD operations performance:

![Fetch API data loading and CRUD operations demonstration](../../grid/images/fetch.gif)

### Display loading indicator with local data

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid allows the display of a loading indicator while loading local data. This is useful when data loading from a local source is delayed and a visual indication is required to show that data is being fetched.

To display the loading indicator when using local data, set the [showSpinner](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#showspinner) property to `true`. This property controls the visibility of the loading indicator.

The following example demonstrates displaying the loading indicator in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid using the [load](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#load) and [created](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#created) events:

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
  selector: 'app-root',
  template: `
    <ejs-grid #Grid (load)='load()' (created)='created()' >
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
            <e-column field='CustomerID' headerText='Customer ID' textAlign='Right' width=120></e-column>
            <e-column field='Quantity' headerText='Quantity' textAlign='Right' width=120></e-column>
            <e-column field='CustomerAddress' headerText='Ship Address' textAlign='Right' width=120></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {
 
  @ViewChild('Grid') public grid?: GridComponent;
  public isDataLoading = true;
  
  load() {
    if (this.isDataLoading) { 
      (this.grid as GridComponent).showSpinner();
    }
  }

  created(){
    this.isDataLoading = true;
    (this.grid as GridComponent).dataSource = data as Object[];
  }
}
```

## Binding data and performing CRUD actions via AJAX request

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid provides a seamless way to bind data from external sources using AJAX requests, facilitating CRUD (Create, Read, Update, Delete) operations with data retrieved from a server. This feature is particularly valuable for sending data to a server for database updates and asynchronously retrieving data without refreshing the entire web page.

To achieve data binding and perform CRUD actions using Ajax requests in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid, follow these steps:

**Step 1:** Include the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid in the HTML with necessary configurations:

```html
<button ejs-button (click)="click()">Bind data via AJAX</button>
<div style="padding: 20px 17px 0 0">
    <ejs-grid #grid [dataSource]='data' allowFiltering="true" [editSettings]='editSettings' [toolbar]='toolbar' allowPaging="true" height="320" (actionBegin)="actionBegin($event)" (actionComplete)="actionComplete($event)">
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' isPrimaryKey=true width='150'></e-column>
            <e-column field='CustomerID' headerText='Customer Name' width='150'></e-column>
            <e-column field='ShipCity' headerText='Ship City' width='150' textAlign='Right'></e-column>
        </e-columns>
    </ejs-grid>
</div>
```

**Step 2:** To bind data from an external AJAX request, utilize the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid#datasource) property of the grid. Fetch data from the server and provide it to the `dataSource` property using the `onSuccess` event of the AJAX request:

```ts
import { Ajax } from '@syncfusion/ej2-base';

click() {
    const ajax = new Ajax("https://localhost:****/Home/Getdata", 'POST'); //Use remote server host number instead ****
    ajax.send();
    ajax.onSuccess = (data: string) => {
        this.grid.dataSource = JSON.parse(data);
    };
}  
```

On the server side, the **GetData** method within the HomeController contains the grid's data source. When the button is clicked, an AJAX request retrieves data from the server and binds it to the Grid component.

```cs
public class HomeController : Controller
{        
    public ActionResult Getdata()
    {
        var DataSource = OrdersDetails.GetAllRecords();
        return Json(DataSource);
    } 

    // Create model class to define properties
    public class OrdersDetails
    {
        public OrdersDetails()
        {
        }

        public OrdersDetails(int OrderID, string CustomerId, int EmployeeId, double Freight, bool Verified, DateTime OrderDate, string ShipCity, string ShipName, string ShipCountry, DateTime ShippedDate, string ShipAddress)
        {
            this.OrderID = OrderID;
            this.CustomerID = CustomerId;
            this.EmployeeID = EmployeeId;
            this.Freight = Freight;
            this.ShipCity = ShipCity;
            this.Verified = Verified;
            this.OrderDate = OrderDate;
            this.ShipName = ShipName;
            this.ShipCountry = ShipCountry;
            this.ShippedDate = ShippedDate;
            this.ShipAddress = ShipAddress;
        }

        // Render data in this method
        public static List<OrdersDetails> GetAllRecords()
        {
            List<OrdersDetails> order = new List<OrdersDetails>();
            int code = 10000;
            for (int i = 1; i < 10; i++)
            {
                order.Add(new OrdersDetails(code + 1, "ALFKI", i + 0, 2.3 * i, false, new DateTime(1991, 05, 15), "Berlin", "Simons bistro", "Denmark", new DateTime(1996, 7, 16), "Kirchgasse 6"));
                order.Add(new OrdersDetails(code + 2, "ANATR", i + 2, 3.3 * i, true, new DateTime(1990, 04, 04), "Madrid", "Queen Cozinha", "Brazil", new DateTime(1996, 9, 11), "Avda. Azteca 123"));
                order.Add(new OrdersDetails(code + 3, "ANTON", i + 1, 4.3 * i, true, new DateTime(1957, 11, 30), "Cholchester", "Frankenversand", "Germany", new DateTime(1996, 10, 7), "Carrera 52 con Ave. Bolívar #65-98 Llano Largo"));
                order.Add(new OrdersDetails(code + 4, "BLONP", i + 3, 5.3 * i, false, new DateTime(1930, 10, 22), "Marseille", "Ernst Handel", "Austria", new DateTime(1996, 12, 30), "Magazinweg 7"));
                order.Add(new OrdersDetails(code + 5, "BOLID", i + 4, 6.3 * i, true, new DateTime(1953, 02, 18), "Tsawassen", "Hanari Carnes", "Switzerland", new DateTime(1997, 12, 3), "1029 - 12th Ave. S."));
                code += 5;
            }
            return order;
        }

        public int? OrderID { get; set; }
        public string CustomerID { get; set; }
        public int? EmployeeID { get; set; }
        public double? Freight { get; set; }
        public string ShipCity { get; set; }
        public bool Verified { get; set; }
        public DateTime OrderDate { get; set; }
        public string ShipName { get; set; }
        public string ShipCountry { get; set; }
        public DateTime ShippedDate { get; set; }
        public string ShipAddress { get; set; }
    }    
}
```

**Step 3:** To perform CRUD actions, leverage the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#actionbegin) event. The default CRUD operations can be canceled by utilizing the `cancel` argument provided by this event. This allows dynamic invocation of server-side methods using AJAX, along with the relevant data received from the `actionBegin` event, to update server data accordingly.

A. To add a new record using AJAX requests, follow these steps:

```typescript
import { Ajax } from '@syncfusion/ej2-base';

public flag = false;

actionBegin(e: EditEventArgs) {
    // Initially this.flag needs to be false to enter this condition
    if (!this.flag) {
        // Add operations
        if (e.requestType == 'save' && ((e as any).action == 'add')) {
            var editedData = (e as any).data;
            // Cancel default edit operation
            e.cancel = true;
            // Send updated data to server using AJAX call
            var ajax = new Ajax({
                url: 'https://localhost:****/Home/Insert',
                type: 'POST',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify({ value: editedData })
            });  //Use remote server host number instead ****
            ajax.onSuccess = () => {
                // this.flag is enabled to skip this execution when grid ends add/edit
                this.flag = true;
                // The added/edited data will be saved in the Grid
                this.grid.endEdit();
            }
            ajax.onFailure = () => {
                // Add/edit failed
                // The this.flag is disabled if operation fails so it can enter the condition on next execution
                this.flag = false;
            }
            ajax.send();
        }
    }
}
```

```cs
// Insert record
public ActionResult Insert([FromBody] CRUDModel<OrdersDetails> value)
{
    OrdersDetails.GetAllRecords().Insert(0, value.value);
    return Json(value.value);
}
```

B. To edit and save a record using an AJAX request, follow these steps:

```typescript
public flag = false;

actionBegin(e: EditEventArgs) {
    // Initially this.flag needs to be false to enter this condition
    if (!this.flag) {
        if (e.requestType == 'save' && ((e as any).action == "edit")) {
            var editedData = (e as any).data;
            // Cancel default edit operation
            e.cancel = true;
            // Send updated data to server using AJAX call
            var ajax = new Ajax({
                url: 'https://localhost:****/Home/Update',
                type: 'POST',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify({ value: editedData })
            }); //Use remote server host number instead ****
            ajax.onSuccess = () => {
                // this.flag is enabled to skip this execution when grid ends add/edit
                this.flag = true;
                // The added/edited data will be saved in the Grid
                this.grid.endEdit();
            }
            ajax.onFailure = () => {
                // Add/edit failed
                // The this.flag is disabled if operation fails so it can enter the condition on next execution
                this.flag = false;
            }
            ajax.send();
        }
    }
}
```

```cs
// Update record
public ActionResult Update([FromBody] CRUDModel<OrdersDetails> value)
{
    var ord = value.value;
    OrdersDetails val = OrdersDetails.GetAllRecords().Where(or => or.OrderID == ord.OrderID).FirstOrDefault();
    val.OrderID = ord.OrderID;
    val.EmployeeID = ord.EmployeeID;
    val.CustomerID = ord.CustomerID;
    val.Freight = ord.Freight;
    val.OrderDate = ord.OrderDate;
    val.ShipCity = ord.ShipCity;
    val.ShipCountry = ord.ShipCountry;
    return Json(value.value);
}
```

C. To delete a record using an AJAX request, follow these steps:

```typescript
public flag = false;

actionBegin(e: EditEventArgs) {
    // Initially this.flag needs to be false to enter this condition
    if (!this.flag) {
        if (e.requestType == 'delete') {
            var editedData = (e as any).data;
            // Cancel default delete operation
            e.cancel = true;
            // Send deleted data to server using AJAX call
            var ajax = new Ajax({
                url: 'https://localhost:****/Home/Delete',
                type: 'POST',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify({ key: editedData[0][this.grid.getPrimaryKeyFieldNames()[0]] })
            }) //Use remote server host number instead ****
            ajax.onSuccess = () => {
                // this.flag is enabled to skip this execution when grid deletes record
                this.flag = true;
                // The deleted data will be removed in the Grid
                this.grid.deleteRecord();
            }
            ajax.onFailure = () => {
                // Delete failed
                // The this.flag is disabled if operation fails so it can enter the condition on next execution
                this.flag = false;
            }
            ajax.send();
        }
    }
}
```

```cs
// Delete record
public ActionResult Delete(int key)
{
    OrdersDetails.GetAllRecords().Remove(OrdersDetails.GetAllRecords().Where(or => or.OrderID == key).FirstOrDefault());
    var data = OrdersDetails.GetAllRecords();
    return Json(data);
}
```

**Step 4:** In the AJAX success event, the grid's [endEdit](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#endedit) and [deleteRecord](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#deleterecord) methods can be utilized to handle the addition, editing, and deletion of corresponding data in the grid. However, invoking these methods triggers the `actionBegin` event once again to save the changes in the grid. To prevent this behavior and maintain control over the execution flow, a flag variable can be employed and managed within the `actionComplete` and AJAX failure events. The following code snippet demonstrates this approach:

```typescript
actionComplete(e: EditEventArgs) {
    if (e.requestType === 'save' || e.requestType === 'delete') {
        // The this.flag is disabled after operation is successfully performed so it can enter the condition on next execution
        this.flag = false;
    }
}
```

The following screenshot demonstrates data loading when the button is clicked and CRUD operations performance:

![AJAX request data loading and CRUD operations demonstration](../../grid/images/Ajaxreq.gif)

### Display loading indicator using AJAX

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid allows the display of a loading indicator while loading data using AJAX. This feature is useful when there is a delay in loading data from a data source, and a visual indication is required to show that the data is being fetched. This is particularly beneficial when working with large datasets or under conditions of slower internet connections.

Set the [showSpinner](https://ej2.syncfusion.com/angular/documentation/api/grid#showspinner) property to `true` to display the loading indicator. This property controls the spinner visibility.

The following example demonstrates displaying the loading indicator in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid using the [load](https://ej2.syncfusion.com/angular/documentation/api/grid#load) and [created](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#created) events:

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { Ajax } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `
    <ejs-grid #Grid allowPaging="true" [pageSettings]="pageSettings" (created)='created()' (load)='load()'>
    <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' textAlign='Right' width=120></e-column>
        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' textAlign='Right' width=120></e-column>
    </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: object[];
    public isDataLoading = true;
    public pageSettings?: object = { pageSize: 5, pageCount: 3 }
    @ViewChild('Grid') public grid?: GridComponent;
    
    ngOnInit(): void {
    }
    
    load() {
        if (this.isDataLoading) {
            (this.grid as GridComponent).showSpinner();
            this.isDataLoading = false;
        }
    }
    
    created() {
        this.isDataLoading = true;
        const grid = this.grid;  // Grid instance
        const ajax = new Ajax(
                'https://services.syncfusion.com/angular/production/api/orders',
                'GET'
              );
        ajax.send();
        ajax.onSuccess = (data: string) => {
            (grid as GridComponent).dataSource = JSON.parse(data);
        };
    }
}
```

## Managing spinner visibility during data loading

Showing a spinner during data loading in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid enhances the experience by providing a visual indication of the loading progress. This feature helps to understand that data is being fetched or processed.

To show or hide a spinner during data loading in the grid, the [showSpinner](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#showspinner) and [hideSpinner](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#hidespinner) methods provided by the Grid component.

The following example demonstrates showing and hiding the spinner during data loading using external buttons in a grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/show-hide-spinner-cs1/src/app.component.ts %} 
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/show-hide-spinner-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
    
{% previewsample "page.domainurl/samples/grid/show-hide-spinner-cs1" %}

## Immutable mode

Immutable mode in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid is designed to optimize re-rendering performance by utilizing the object reference and deep compare concept. This mode ensures that when performing grid actions, only the modified or newly added rows are re-rendered, preventing unnecessary re-rendering of unchanged rows. 

Enable immutable mode by setting [enableImmutableMode](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#enableimmutablemode) to `true`.

If immutable mode is enabled, when the datasource changes, only newly added rows are regenerated or reused. Consequently, the grid's [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#querycellinfo) and [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#rowdatabound) events trigger only for newly generated rows, not for existing rows. 

If immutable mode is not enabled, both newly added rows and existing rows are regenerated or reused when the datasource changes. As a result, the `rowDataBound` and `queryCellInfo` events trigger for both newly added and existing rows. 

> This feature uses the primary key value for data comparison. Therefore, the [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/column#isprimarykey) column must be provided.

The following example demonstrates enabling immutable mode in an Angular component. When add, delete, or update actions are performed, existing rows are not regenerated or reused, ensuring efficient rendering of only the modified or newly added rows:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { Component, ViewChild, OnInit } from "@angular/core";
import { GridComponent, RowDataBoundEventArgs, SelectionSettingsModel } from "@syncfusion/ej2-angular-grids";
import { data } from "./datasource";

interface CustomRowDataBoundEventArgs extends RowDataBoundEventArgs {
  column: {
    field: string;
  };
  cell: HTMLElement;
  data: DataType;
}

interface DataType {
  OrderID: number;
  CustomerID: string;
  Freight: number;
  ShipName: string;
  ShipCity: string;
  isNewlyAdded: boolean;
}

@Component({
imports: [GridModule],
providers: [PageService],
standalone: true,
  selector: 'app-root',
  template: `
      <button  #addtop ejs-button class="e-control e-btn e-lib e-info" (click)="addTopEvent()">Add rows Data</button>
      <button style="margin-left: 20px" #delete ejs-button class="e-control e-btn e-lib e-info" (click)="deleteEvent()">Delete rows</button>
      <button style="margin-left: 20px" #addbottom ejs-button class="e-control e-btn e-lib e-info" (click)="updateEvent()">Update Freight Data</button>
      <div id="message"> {{ message }}</div>
      <div  style="padding-top: 20px">
        <ejs-grid #immutable [dataSource]='rowData' [enableHover]="false" height='350' [enableImmutableMode]="true" allowPaging="true" [selectionSettings]="selectionOptions"
          [pageSettings]="pageSettings"  (rowDataBound)="rowDataBound($event)" (queryCellInfo)="queryCellInfo($event)">
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' isPrimaryKey="true" width='120'
            textAlign='Right'></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width='120'></e-column>
            <e-column field='Freight' headerText='Freight' width='120'></e-column>
            <e-column field='ShipName' headerText='Ship Name' width='120'></e-column>
          </e-columns>
        </ejs-grid>
      </div>`
})
export class AppComponent implements OnInit {

  public pageSettings?: Object = { pageSize: 50 };
  public rowData?: DataType[];
  @ViewChild("immutable")
  public immutablegrid?: GridComponent;
  public intervalId: NodeJS.Timeout;
  public selectionOptions?: SelectionSettingsModel;
  public message: string = '';

  ngOnInit(): void {
    this.rowData = data as DataType[];
    this.selectionOptions = { type: 'Multiple' };
    this.message = `Initial rows rendered: ${this.rowData.length}`;
  }

  queryCellInfo(args: CustomRowDataBoundEventArgs): void {
    if (args.column.field === 'ShipName' && args.data.ShipName === "Gems Chevalier") {
      (args.cell as HTMLElement).style.backgroundColor = 'rgb(210, 226, 129)';
    }
  }
  
  rowDataBound(args: RowDataBoundEventArgs): void {
    (args.row as HTMLElement).style.backgroundColor = (args.data as DataType).isNewlyAdded ? '' : ' rgb(208, 255, 255)';
  }
  
  addTopEvent(): void {
    // Set the background color of all rows to indicate existing data
    (this.immutablegrid as GridComponent).getAllDataRows().forEach(row => {
      (row as HTMLElement).style.backgroundColor = "rgb(208, 255, 255)";
    });
    let count = 0;
    if (count < 1) {
      let newRowData: object[] = [];
      let addedRecords: object = {
        'OrderID': this.generateOrderId(),
        'CustomerID': this.generateCustomerId(),
        'ShipCity': this.generateShipCity(),
        'Freight': this.generateFreight(),
        'ShipName': this.generateShipName(),
        'isNewlyAdded': true
      };
      newRowData.push(addedRecords);
      this.rowData = ([...newRowData, ...this.rowData as DataType[]] as DataType[]);
      count++;
      this.message = `${count} rows rendered after performing the add action`;
    }
  }
  
  deleteEvent(): void {
    let count = 0;
    if (count < 1 && (this.rowData as DataType[]).length > 0) {
      this.rowData = (this.rowData as DataType[]).slice(1);
      count++;
      this.message = `${count} rows deleted after performing delete action`;
    }
  }
  
  updateEvent(): void {
    let count = 0;
    let newRowData = (this.rowData as any).map((row: any) => {
    if (row.ShipName === 'Hanari Carnes') {
        count++;
        return { ...row, 'ShipName': "Gems Chevalier" };
      } else {
        return row;
      }
    });
    this.rowData = newRowData;
    this.message = ` ${count} rows updated after performing update action`;
  }

  generateOrderId(): number {
    return Math.floor(10000 + Math.random() * 90000);
  }

  generateCustomerId(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  generateShipCity(): string {
    const cities = ['London', 'Paris', 'New York', 'Tokyo', 'Berlin'];
    return cities[Math.floor(Math.random() * cities.length)];
  }

  generateFreight(): number {
    const randomValue = Math.random() * 100;
    return parseFloat(randomValue.toFixed(2));
  }

  generateShipName(): string {
    const names = ['Que Delícia', 'Hanari Carnes', 'Island Trading', 'Laughing Bacchus Winecellars'];
    return names[Math.floor(Math.random() * names.length)];
  }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/immutable-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/immutable-cs1" %}

### Limitations

The following features are not supported in immutable mode:

* Frozen rows and columns
* Grouping
* Row Template 
* Detail Template
* Hierarchy Grid
* Scrolling 
* Virtual scrolling
* Infinite scrolling
* Column reordering
* Row and column spanning
* PDF export, Excel export, and Print
* Column resizing
* Drag and drop
* Column template
* Column chooser
* Clipboard operations
* AutoFit
* Filtering