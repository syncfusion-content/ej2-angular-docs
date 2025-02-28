---
layout: post
title: Foreign key column in Angular Grid component | Syncfusion
description: Learn here all about Foreign key column in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Foreign key column 
documentation: ug
domainurl: ##DomainURL##
---

# Foreign key column in Angular Grid component

The Foreign key column in the Syncfusion Grid component allows you to display related data from a foreign key data source in a column within the grid. This feature is particularly useful when you have a column in the grid that represents a foreign key relationship with another data source.

To enable and integrate the foreign key column in the Angular Grid component, follow these steps:

1.Inject the ForeignKeyService in the provider section of the AppModule.

```typescript

import { ForeignKeyService } from '@syncfusion/ej2-angular-grids';

@NgModule({
  providers: [ForeignKeyService]
})
export class AppModule { }

```

2.Define the foreign key column in the grid using the following properties:

* [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#datasource): Specifies the foreign data source that contains the related data.

* [foreignKeyField](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#foreignkeyfield): Maps the column name in the grid to the field in the foreign data source that represents the foreign key relationship.

* [foreignKeyValue](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#foreignkeyvalue): Specifies the field from the foreign data source that should be displayed in the grid as the related data.

```html
    <e-column field='EmployeeID' headerText='Employee ID' foreignKeyValue='FirstName' foreignKeyField='EmployeeID' [dataSource]='employeesData'></e-column>
```

>The `foreignKeyField` property should match the name of the field in the foreign data source that represents the foreign key relationship, and the `foreignKeyValue` property should specify the field from the foreign data source that should be displayed in the grid as the related data.

## Binding local data

The Syncfusion Grid component provides a convenient way to bind local data to a foreign key column. This allows you to display related data from a local data source within the grid. Here's an example of how to bind local data to a Foreign Key column in Syncfusion Grid:

In this example, **data** is the local data source for the Grid, and **employeeData** is the local data source for the foreign key column. The `field` property of the e-column component is set to **EmployeeID** which represents the foreign key value in the **data**. The `foreignKeyValue` property is set to **FirstName** which represents the field name in the **employeeData** that you want to display in the foreign key column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs19/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs19" %}

## Binding remote data

The Foreign key column in Syncfusion Grid allows you to bind remote data for a foreign key column. You can assign the service data as an instance of `DataManager` to the `dataSource` property, and provide the endpoint `URL` as the data source URL.

This example demonstrates how to use the foreign key column with remote data binding using the [ODataV4Adaptor](https://ej2.syncfusion.com/angular/documentation/grid/data-binding/remote-data#odata-v4-adaptor---binding-odata-v4-service) in the grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/foreignkey-cs12" %}

> * For remote data, the sorting and grouping is done based on [column.foreignKeyField](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#foreignkeyfield) instead of [column.foreignKeyValue](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#foreignkeyvalue).
> * If [column.foreignKeyField](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#foreignkeyfield) is not defined, then the column uses [column.field](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#field).

## Use edit template in foreign key column

The Syncfusion Grid provides support for using an edit template in a foreign key column. By default, a dropdown component is used for editing foreign key column. However, you can render a different component for editing by using the [column.edit](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#edit) property. Here's an example that demonstrates how to use an edit template in a foreign key column:

In this example, an [AutoComplete](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/auto-complete/default) component is rendered as the edit template for the **"EmployeeID"** foreign key column. The [dataSource](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#datasource) property of the AutoComplete component is set to the employees data, and the fields property is configured to display the **"FirstName"** field as the value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/foreignkey-cs1" %}

## Customize filter UI of foreign key column

The Syncfusion Grid allows you to customize the filtering user interface (UI) for foreign key columns by using the [column.filter](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filter) property. By default, a dropdown component is used for filtering foreign key columns. However, you can create your own custom filtering UI by specifying a template function for the `column.filter` property. Here's an example that demonstrates how to create a custom filtering UI in a foreign key column:

In this example, a [DropDownList](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/drop-down-list/default) component is rendered as the filter UI for the **"EmployeeID"** foreign key column. The [dataSource](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#datasource) property of the DropDownList component is set to the employees data, and the fields property is configured to display the **FirstName** field as the [text](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#text) and **EmployeeID** field as the [value](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#value). The `value` property is set to the current filter value of the column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/foreignkey-cs2" %}

## Use filter bar template in foreign key column

You can use the filter bar template in a foreign key column in Grid by defining the [column.filterBarTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filterbartemplate) property. This allows you to customize the filter bar for the foreign key column with a custom component or HTML template. Here's an example that demonstrates how to use a filter bar template in a foreign key column:

In this example, the **"EmployeeID"** column is a foreign key column, and the **filter** function is used as the filter bar template for this column. The `filter` function can be defined in your component code and should return the desired component or HTML template for the filter bar. The column header shows the custom filter bar template and you can select filter value by using the **DropDown** options.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/foreignkey-cs3" %}

## Perform aggregation in foreign key column

By default, aggregations are not supported in a foreign key column in the Syncfusion Grid. However, you can achieve aggregation for a foreign key column by using [customAggregate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#customaggregate).

To perform aggregation in a foreign key column, follow these steps:

1.Define a foreign key column in the Grid.
2.Implement a custom aggregate function to calculate the aggregation for the foreign key column.
3.Set the [customAggregate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#customaggregate) property of the column to the custom aggregate function.

Here's an example that demonstrates how to perform aggregation in a foreign key column:

In the provided example, the `customAggregateFn` function is used to filter the data based on the **FirstName** field of the foreign key column, using the `getForeignData` internal function. The function then counts the occurrences of **Margaret**. The result is displayed in the grid's footer template using the ng-template with the `#footerTemplate` reference.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { Component, OnInit, ViewChild } from '@angular/core';
import { ForeignKeyService, AggregateService, getForeignData, CustomSummaryType, AggregateColumnModel, GridComponent, Column } from '@syncfusion/ej2-angular-grids';
import { data, employeeData } from './datasource';
import { getValue } from '@syncfusion/ej2-base';

@Component({
imports: [
        
        GridModule
    ],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='280'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='EmployeeID' headerText='Employee Name' width=120
                         foreignKeyValue='FirstName' [dataSource]='employeeData'></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130  ></e-column>
                    </e-columns>
                    <e-aggregates>
                        <e-aggregate>
                            <e-columns>
                                <e-column field="EmployeeID" type="Custom" [customAggregate]= 'customAggregateFn'>
                                    <ng-template #footerTemplate let-data>
                                        Count of Margaret:  {{data.Custom}}
                                    </ng-template>
                                </e-column>
                            </e-columns>
                        </e-aggregate>
                    </e-aggregates>
                </ejs-grid>`,
    providers: [ForeignKeyService, AggregateService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;
    public employeeData?: object[];

    // Custom Aggregate function for foreign column
    public customAggregateFn: CustomSummaryType = (customData: object, column: AggregateColumnModel) => {
        var count = 0;
        data.forEach((dObj) => {
            count = getValue('FirstName', getForeignData((this.grid as GridComponent).getColumnByField((column as Column).field), dObj)[0]) === 'Margaret' ? count + 1 : count;
        })
        return count;
    }

    ngOnInit(): void {
        this.data = data;
        this.employeeData = employeeData;
    }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/foreignkey-cs4" %}

## Enable multiple foreign key columns

The Syncfusion Grid component supports the feature of enabling multiple foreign key columns with editing options. This allows users to display columns from foreign data sources in the Grid component.

In the following example, **Customer Name** and **Ship City** are foreign key columns that display the **ContactName** and **City** columns from foreign data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/foreignkey-cs5" %}

## Edit template in foreign key column using remote data

The Syncfusion Angular Grid allows you to customize the edit template for foreign key columns when using remote data. By default, a [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) component is used for editing foreign key column. However, you can render a different component by configuring the [column.edit](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#edit) property. 

This example demonstrates how to use an edit template in a foreign key column with remote data. In this case, an [AutoComplete](https://ej2.syncfusion.com/angular/documentation/auto-complete/getting-started) component is rendered as the edit template for the **EmployeeID** foreign key column. The [dataSource](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#datasource) property of the **AutoComplete** component is set to the employees data, and the [field](https://helpej2.syncfusion.com/angular/documentation/api/grid/column/#field) property is configured to display the **FirstName** field as the value. Follow the steps below to achieve this:

**Step 1:** Open Visual Studio and create an **Angular and ASP.NET Core** project named **EditTemplate**. To create an Angular and ASP.NET Core application, follow the documentation [link](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-angular?view=vs-2022) for detailed steps.

**Step 2 :** Create a simple Syncfusion Angular Grid by following the [Getting Started](https://ej2.syncfusion.com/angular/documentation/grid/getting-started) documentation link.

**Step 3:**  In your Angular component HTML file (e.g., **src/app.component.html**), define the Syncfusion Angular Grid with the necessary configurations, including a foreign key column for **EmployeeID**:

```ts
<ejs-grid #grid [dataSource]='data' [height]='260' [editSettings]='editSettings' [toolbar]='toolbar' allowPaging="true">
  <e-columns>
    <e-column field='OrderID' headerText='Order ID' isPrimaryKey="true" textAlign='Right' width=100></e-column>
    <e-column field='EmployeeID' headerText='Employee Name' width=120 foreignKeyField='EmployeeID' foreignKeyValue='FirstName' [dataSource]='employeeData' [edit]='daParams'></e-column>
    <e-column field='Freight' headerText='Freight' editType="numericedit" format="C2" textAlign='Right' width=80></e-column>
    <e-column field='ShipCity' headerText='Ship City' width=130 ></e-column>
  </e-columns>
</ejs-grid>
```

**Step 4:** In your Angular component styles file (**src/styles.css**), include the following styles to import necessary Syncfusion styles:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-grids/styles/material.css';

```

**Step 5:** In your Angular component (e.g., **app.component.ts**), implement the following logic:

```ts

import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, EditSettingsModel, ToolbarItems, IEditCell } from '@syncfusion/ej2-angular-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { AutoComplete } from '@syncfusion/ej2-dropdowns';
interface Employee {
  employeeID: number;
  firstName: string;
}

interface GridRowData {
  customerID?: string;
  employeeID?: number;
  firstName?: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild('grid') public grid?: GridComponent;
  public autoCompleteInstance?: AutoComplete;
  public data?: DataManager;
  public employeeData?: DataManager;
  public editSettings?: EditSettingsModel;
  public toolbar?: ToolbarItems[];
  public daParams?: IEditCell;
  public inpuElement?: HTMLElement;

  ngOnInit(): void {
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: "Normal" };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.data = new DataManager({
      url: 'https://localhost:****/api/Grid',
      insertUrl: 'https://localhost:****/api/Grid/Insert',
      updateUrl: 'https://localhost:****/api/Grid/Update',
      removeUrl: 'https://localhost:****/api/Grid/Remove',
      adaptor: new UrlAdaptor(),
      crossDomain: true,
    });  //Use remote server host number instead ****.
    // Use employeeData as foreign key data source.
    this.employeeData = new DataManager({
      url: 'https://localhost:****/api/grid/employees',
      adaptor: new UrlAdaptor(),
      crossDomain: true,

    }); //Use remote server host number instead ****.
    this.daParams = {
      create: this.createCustomerIDFunction,
      read: this.readCustomerIDFunction,
      destroy: this.destroyCustomerIDFunction,
      write: this.writeCustomerIDFunction
    };
  }
  public createCustomerIDFunction = ():HTMLElement => {
    this.inpuElement = document.createElement('input');
    return this.inpuElement;
  }
  public destroyCustomerIDFunction = () : void => {
    this.autoCompleteInstance?.destroy();
  }
  public readCustomerIDFunction = ():number => {
    return (this.autoCompleteInstance as any).itemData.employeeID;
  }
  public writeCustomerIDFunction = (args: { rowData: GridRowData; foreignKeyData?: Employee[] }): void => {
    let selectedValue =
      args.foreignKeyData && args.foreignKeyData.length > 0
        ? args.foreignKeyData[0]['firstName']
        : '';
    this.autoCompleteInstance = new AutoComplete({
      value: selectedValue,
      dataSource: this.employeeData,
      fields: { value: 'firstName' }, 
    });
    this.autoCompleteInstance?.appendTo(this.inpuElement);
  }
}

```

**Step 6:** On the server side, create a controller named **GridController.cs** under the **Controllers** folder to handle API requests:

```cs

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Syncfusion.EJ2.Base;
using EditTemplate.Server.Models;

namespace EditTemplate.Server.Controllers
{
    [ApiController]
    public class GridController : Controller
    {
        [HttpGet("employees")]
        public ActionResult<List<Employee>> GetEmployees()
        {
            return Employee.GetAllEmployees();
        }
        [HttpPost]
        [Route("api/[controller]")]
        public object Post([FromBody] DataManagerRequest DataManagerRequest)
        {
            // Retrieve data from the data source (e.g., database).
            IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();
            QueryableOperation queryableOperation = new QueryableOperation(); // Initialize DataOperations instance.
            // Handling searching operation.
            if (DataManagerRequest.Search != null && DataManagerRequest.Search.Count > 0)
            {
                DataSource = queryableOperation.PerformSearching(DataSource, DataManagerRequest.Search);
            }
            // Handling filtering operation.
            if (DataManagerRequest.Where != null && DataManagerRequest.Where.Count > 0)
            {
                foreach (var condition in DataManagerRequest.Where)
                {
                    foreach (var predicate in condition.predicates)
                    {
                        DataSource = queryableOperation.PerformFiltering(DataSource, DataManagerRequest.Where, predicate.Operator);
                    }
                }
            }
            // Handling sorting operation.
            if (DataManagerRequest.Sorted != null && DataManagerRequest.Sorted.Count > 0)
            {
                DataSource = queryableOperation.PerformSorting(DataSource, DataManagerRequest.Sorted);
            }
            // Get the total count of records.
            int totalRecordsCount = DataSource.Count();
            // Handling paging operation.
            if (DataManagerRequest.Skip != 0)
            {
                DataSource = queryableOperation.PerformSkip(DataSource, DataManagerRequest.Skip);
            }
            if (DataManagerRequest.Take != 0)
            {
                DataSource = queryableOperation.PerformTake(DataSource, DataManagerRequest.Take);
            }
            // Return data based on the request.
            return new { result = DataSource, count = totalRecordsCount };
        }

        [HttpPost]
        [Route("api/[controller]/employees")]
        public ActionResult<List<Employee>> employees()
       {
            return Employee.GetAllEmployees();
        }
        [HttpGet]
        [Route("api/[controller]")]
        public List<OrdersDetails> GetOrderData()
        {
            var data = OrdersDetails.GetAllRecords().ToList();
            return data;
        }
        [HttpPost]
        [Route("api/[controller]/Insert")]
        public void Insert([FromBody] CRUDModel<OrdersDetails> newRecord)
        {
            if (newRecord.value != null)
            {
                OrdersDetails.GetAllRecords().Insert(0, newRecord.value);
            }
        }
        /// <summary>
        /// Update a existing data item from the data collection.
        /// </summary>
        /// <param name="Order">It contains the updated record detail which is need to be updated.</param>
        /// <returns>Returns void.</returns>
        [HttpPost]
        [Route("api/[controller]/Update")]
        public void Update([FromBody] CRUDModel<OrdersDetails> Order)
        {
            var updatedOrder = Order.value;
            if (updatedOrder != null)
            {
                var data = OrdersDetails.GetAllRecords().FirstOrDefault(or => or.OrderID == updatedOrder.OrderID);
                if (data != null)
                {
                    // Update the existing record.
                    data.OrderID = updatedOrder.OrderID;
                    data.CustomerID = updatedOrder.CustomerID;
                    data.ShipCity = updatedOrder.ShipCity;
                    data.ShipCountry = updatedOrder.ShipCountry;
                }
            }
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
    }
}

```

**Step 7:** Create a model class named **OrdersDetails.cs** under the **Models** folder in the server-side project to represent the order data and employee data:

```cs

namespace EditTemplate.Server.Models
{
    public class OrdersDetails
    {
        private static List<OrdersDetails> order = new List<OrdersDetails>();

        public OrdersDetails() { }

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
            if (order.Count == 0)
            {
                int code = 10000;
                List<Employee> employees = Employee.GetAllEmployees();
                int employeeCount = employees.Count;

                for (int i = 1; i < 10; i++)
                {
                    order.Add(new OrdersDetails(code++, "ALFKI", employees[(code + 0) % employeeCount].EmployeeID, 2.3 * i, false, new DateTime(1991, 05, 15), "Berlin", "Simons bistro", "Denmark", new DateTime(1996, 7, 16), "Kirchgasse 6"));
                    order.Add(new OrdersDetails(code++, "ANATR", employees[(code + 1) % employeeCount].EmployeeID, 3.3 * i, true, new DateTime(1990, 04, 04), "Madrid", "Queen Cozinha", "Brazil", new DateTime(1996, 9, 11), "Avda. Azteca 123"));
                    order.Add(new OrdersDetails(code++, "ANTON", employees[(code + 2) % employeeCount].EmployeeID, 4.3 * i, true, new DateTime(1957, 11, 30), "Cholchester", "Frankenversand", "Germany", new DateTime(1996, 10, 7), "Carrera 52 con Ave. Bolívar #65-98 Llano Largo"));
                    order.Add(new OrdersDetails(code++, "BLONP", employees[(code + 3) % employeeCount].EmployeeID, 5.3 * i, false, new DateTime(1930, 10, 22), "Marseille", "Ernst Handel", "Austria", new DateTime(1996, 12, 30), "Magazinweg 7"));
                    order.Add(new OrdersDetails(code++, "BOLID", employees[(code + 4) % employeeCount].EmployeeID, 6.3 * i, true, new DateTime(1953, 02, 18), "Tsawassen", "Hanari Carnes", "Switzerland", new DateTime(1997, 12, 3), "1029 - 12th Ave. S."));
                }
            }
            return order;
        }

        public int? OrderID { get; set; }
        public string? CustomerID { get; set; }
        public int? EmployeeID { get; set; }
        public double? Freight { get; set; }
        public string? ShipCity { get; set; }
        public bool? Verified { get; set; }
        public DateTime OrderDate { get; set; }
        public string? ShipName { get; set; }
        public string? ShipCountry { get; set; }
        public DateTime ShippedDate { get; set; }
        public string? ShipAddress { get; set; }
    }
    public class Employee
    {
        public int EmployeeID { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Department { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }

        public static List<Employee> GetAllEmployees()
        {
            return new List<Employee>
        {
            new Employee { EmployeeID = 1, FirstName = "John", LastName = "Doe", Department = "Sales", Email = "john.doe@example.com", PhoneNumber = "123-456-7890" },
            new Employee { EmployeeID = 2, FirstName = "David", LastName = "Smith", Department = "Marketing", Email = "david.smith@example.com", PhoneNumber = "987-654-3210" },
            new Employee { EmployeeID = 3, FirstName = "Maria", LastName = "Gonzalez", Department = "HR", Email = "maria.gonzalez@example.com", PhoneNumber = "456-789-0123" },
            new Employee { EmployeeID = 4, FirstName = "Sophia", LastName = "Brown", Department = "Finance", Email = "sophia.brown@example.com", PhoneNumber = "321-654-0987" },
            new Employee { EmployeeID = 5, FirstName = "James", LastName = "Wilson", Department = "IT", Email = "james.wilson@example.com", PhoneNumber = "654-321-7654" },
            new Employee { EmployeeID = 6, FirstName = "Emma", LastName = "Taylor", Department = "Operations", Email = "emma.taylor@example.com", PhoneNumber = "213-546-8790" },
            new Employee { EmployeeID = 7, FirstName = "Daniel", LastName = "Anderson", Department = "Logistics", Email = "daniel.anderson@example.com", PhoneNumber = "789-654-3210" },
            new Employee { EmployeeID = 8, FirstName = "Olivia", LastName = "Thomas", Department = "Procurement", Email = "olivia.thomas@example.com", PhoneNumber = "567-890-1234" },
            new Employee { EmployeeID = 9, FirstName = "Michael", LastName = "Harris", Department = "R&D", Email = "michael.harris@example.com", PhoneNumber = "890-123-4567" },
            new Employee { EmployeeID = 10, FirstName = "Lucas", LastName = "Martin", Department = "Customer Service", Email = "lucas.martin@example.com", PhoneNumber = "345-678-9012" },
            new Employee { EmployeeID = 11, FirstName = "Elijah", LastName = "Clark", Department = "Support", Email = "elijah.clark@example.com", PhoneNumber = "741-852-9630" },
            new Employee { EmployeeID = 12, FirstName = "Isabella", LastName = "Hall", Department = "Legal", Email = "isabella.hall@example.com", PhoneNumber = "963-852-7410" },
            new Employee { EmployeeID = 13, FirstName = "Ethan", LastName = "Young", Department = "Administration", Email = "ethan.young@example.com", PhoneNumber = "258-963-1470" },
            new Employee { EmployeeID = 14, FirstName = "Charlotte", LastName = "Scott", Department = "Design", Email = "charlotte.scott@example.com", PhoneNumber = "147-258-3690" },
            new Employee { EmployeeID = 15, FirstName = "Alexander", LastName = "Allen", Department = "Engineering", Email = "alexander.allen@example.com", PhoneNumber = "369-147-2580" }
        };
        }
    }
}

```

**Step 8:** In the **Program.cs** file, add the following code:

```cs

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var app = builder.Build();
app.UseCors();
app.UseDefaultFiles();
app.UseStaticFiles();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.MapFallbackToFile("/index.html");
app.Run();


```

![Edit template in foreign key column using remote data](../grid/images/save.gif)


