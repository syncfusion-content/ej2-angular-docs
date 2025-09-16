---
layout: post
title: Validation in Angular Grid component | Syncfusion
description: Learn here all about Validation in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Validation 
documentation: ug
domainurl: ##DomainURL##
---

# Validation in Angular Grid component

Validation is essential for ensuring data integrity in applications. The Syncfusion Angular Grid component provides robust, built-in support for data validation, helping guarantee that data entered or edited in the grid meets predefined criteria and maintaining accuracy across all records.

## Column validation

Column validation verifies edited or newly added data against field-specific rules before saving. By applying rules to individual columns, erroneous data is prevented, error messages are shown, and only valid records are committed. Syncfusion Grid leverages the **Form Validator** component for this purpose. Use the [columns.validationRules](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#validationrules) property to define validation logic for columns.

Example of applying validation rules to a grid column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs33/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs33/src/main.ts %}
{% endhighlight %}
{% endtabs %} 
  
{% previewsample "page.domainurl/samples/grid/edit-cs33" %}

## Custom validation

Custom validation allows you to implement specific logic for validating column data, beyond built-in rules. Using the **Form Validator custom rules**, custom validation logic and tailored error messages can be presented to users for any field.

Example: Custom validation for the **CustomerID** column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs34/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs34/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs34" %}

### Custom validation based on dropdown change

Validation rules can be dynamically applied to one column based on the value of another—for example, altering **Salary** validation based on the selection in a **Role** dropdown.

Example applying dependent validation between **Role** and **Salary** columns:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs35/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs35/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs35" %}

### Custom validation for numeric columns

Custom validation for a numeric column Grid is useful when you want to enforce specific validation rules on numeric values in a column. This allows you to define your own validation logic and display custom error messages when the you enters invalid data.

In the following example, custom validation functions, namely **customFn** and **customFn1**, are defined to check the entered numeric value against your validation criteria. Then, the grid column is configured with the appropriate validation settings using the **freightRules** object, specifying the custom validation functions along with corresponding error messages. Additionally, the `change` event of the numeric column is bound to the [validate](https://ej2.syncfusion.com/angular/documentation/api/form-validator/#validate) method of the form element through the edit params. This enables you to trigger validation and display error messages whenever the you modifies the value in the **NumericTextBox**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-validation-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-validation-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-validation-cs5" %}

## Dynamically add or remove validation rules from the form

Validation rules can be adjusted at runtime based on application logic or user interaction. Use [addRules](https://ej2.syncfusion.com/angular/documentation/api/form-validator/#addrules) to attach rules or [removeRules](https://ej2.syncfusion.com/angular/documentation/api/form-validator/#removerules) to detach them, by targeting the input name attribute.

Example: Dynamically toggle required validation with a **checkbox** selection:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-validation-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-validation-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-validation-cs3" %}

> To remove an existing validation rule from an input element, use the [removeRules](https://ej2.syncfusion.com/angular/documentation/api/form-validator/#removerules) method.

## Change the position of validation error messages

The default placement for validation error messages is below the input field. To customize error message position (for example, above or beside the input), implement the [customPlacement](https://ej2.syncfusion.com/documentation/api/form-validator/#customplacement) event.

Example displaying error messages at the top of the input field:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-validation-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-validation-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-validation-cs4" %}

## Show custom error message for failed CRUD actions

During CRUD operations, errors (such as validation failures or server exceptions) can be handled and presented to users via custom messages. Use the [actionFailure](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionfailure) event to intercept failures, extract server messages, and display them appropriately in the UI.

Example showing server error feedback in Angular Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, ViewChild } from '@angular/core';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { GridComponent, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { FailureEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('grid') public grid?: GridComponent;
  public data?: DataManager;
  public editSettings?: EditSettingsModel;
  public toolbar?: ToolbarItems[];
  public errorMessage: string = '';

  public ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://localhost:****/api/grid', // Replace with your endpoint.
      insertUrl: 'https://localhost:****/api/grid/Insert',
      updateUrl:'https://localhost:****/api/grid/Update',
      removeUrl: 'https://localhost:****/api/grid/Remove',
      adaptor: new UrlAdaptor()
    });
    this.editSettings = { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Normal' };
    this.toolbar = ['Add', 'Update', 'Delete', 'Cancel'];
  }

  public onActionFailure(args: FailureEventArgs): void {
   (args as any).error?.[0]?.error?.json().then((data: any) => {
      this.errorMessage = data.message; // Assign error message.
    }).catch(() => {
      this.errorMessage = "Error occurred, but message could not be retrieved.";
    });
  }
}
{% endraw %}
{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}
{% raw %}
<div *ngIf="errorMessage" class="error-message">
  {{ errorMessage }}
</div>
<div style="padding: 20px 17px 0 0">
  <ejs-grid #grid [dataSource]='data' (actionFailure)="onActionFailure($event)" allowPaging="true" height="320" [toolbar]="toolbar" [editSettings]="editSettings">
    <e-columns>
      <e-column field='OrderID' headerText='Order ID' isPrimaryKey=true textAlign='Right' width='150'></e-column>
      <e-column field='CustomerID' headerText='Customer Name' width='150'></e-column>
      <e-column field='Freight' headerText='Freight' format="C2" width='150' textAlign='Right'></e-column>s
      <e-column field='ShipCity' headerText='ShipCity' width='150'></e-column>
    </e-columns>
  </ejs-grid>
</div>
{% endraw %}
{% endhighlight %}

{% highlight cs tabtitle="GridController.cs" %}
{% raw %}
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UrlAdaptor.Server.Models;
using Syncfusion.EJ2.Base;
using Newtonsoft.Json.Linq;

namespace UrlAdaptor.Server.Controllers
{
  [ApiController]
  public class GridController : Controller 
  {
    /// <summary>
    /// Handles the HTTP POST request to retrieve data from the data source based on the DataManagerRequest.
    /// Supports filtering,searching, sorting, and paging operations (skip and take).
    /// </summary>
    /// <param name="DataManagerRequest">Contains the filtering, sorting, and paging options requested by the client.</param>
    /// <returns>Returns the filtered,searched, sorted, and paginated data along with the total record count.</returns>
    [HttpPost]
    [Route("api/[controller]")]
    public object Post([FromBody] DataManagerRequest DataManagerRequest) {
      // Retrieve data from the data source (e.g., database).
      IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();
      QueryableOperation queryableOperation = new QueryableOperation(); // Initialize QueryableOperation instance.
      // Get the total count of records.
      int totalRecordsCount = DataSource.Count();
      // Handling paging operation.
      if (DataManagerRequest.Skip != 0) {
        DataSource = queryableOperation.PerformSkip(DataSource, DataManagerRequest.Skip);
      }
      if (DataManagerRequest.Take != 0) {
        DataSource = queryableOperation.PerformTake(DataSource, DataManagerRequest.Take);
      }
      // Return data based on the request.
      return new { result = DataSource, count = totalRecordsCount };
    }

    /// <summary>
    /// Handles the HTTP GET request to retrieve all order records.
    /// </summary>
    /// <returns>Returns a list of order details.</returns>
    [HttpGet]
    [Route("api/[controller]")]
    public List<OrdersDetails> GetOrderData() {
      var data = OrdersDetails.GetAllRecords().ToList();
      return data;
    }

    /// <summary>
    /// Inserts a new data item into the data collection.
    /// </summary>
    /// <param name="newRecord">It contains the new record detail which is need to be inserted.</param>
    /// <returns>Returns void.</returns>
    [HttpPost]
    [Route("api/[controller]/Insert")]
    public IActionResult Insert([FromBody] CRUDModel<OrdersDetails> value) {
      if (value == null) {
        return BadRequest(new { message = "Invalid data received." });
      }
      var existingOrder = OrdersDetails.order.FirstOrDefault(or => or.OrderID == value.value.OrderID);
      if (existingOrder == null) {
        OrdersDetails.order.Insert(0, value.value);
        return Ok(new { success = true, message = "Order added successfully.", data = value });
      }
      else {
        return BadRequest(new { success = false, message = "Duplicate values cannot be inserted." });
      }
    }

    /// <summary>
    /// Update a existing data item from the data collection.
    /// </summary>
    /// <param name="Order">It contains the updated record detail which is need to be updated.</param>
    /// <returns>Returns void.</returns>
    [HttpPost]
    [Route("api/[controller]/Update")]
    public IActionResult Update([FromBody] CRUDModel<OrdersDetails> Order) {
      var updatedOrder = Order.value;
      if (updatedOrder.OrderID > 10010 || updatedOrder.OrderID < 10030) {
        return BadRequest(new { message = "OrderID must be between 10010 and 10030 to update." });
      }
      var data = OrdersDetails.GetAllRecords().FirstOrDefault(or => or.OrderID == updatedOrder.OrderID);
      // Update the existing record
      data.OrderID = updatedOrder.OrderID;
      data.CustomerID = updatedOrder.CustomerID;
      data.ShipCity = updatedOrder.ShipCity;
      data.ShipCountry = updatedOrder.ShipCountry;
      return Ok(new { success = true, message = "Order updated successfully." });
    }

    /// <summary>
    /// Remove a specific data item from the data collection.
    /// </summary>
    /// <param name="value">It contains the specific record detail which is need to be removed.</param>
    /// <return>Returns void</return>
    [HttpPost]
    [Route("api/[controller]/Remove")]
    public IActionResult Remove([FromBody] CRUDModel<OrdersDetails> value) {
      int orderId = int.Parse(value.key.ToString());
      if (orderId > 10031 || orderId < 10045) {
        return BadRequest(new { message = "OrderID must be between 10031 and 10045 to delete." });
      }
      var data = OrdersDetails.GetAllRecords().FirstOrDefault(orderData => orderData.OrderID == orderId);
      OrdersDetails.GetAllRecords().Remove(data);
      return Ok(new { success = true, message = "Order deleted successfully." });
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
{% endraw %}
{% endhighlight %}

{% highlight cs tabtitle="OrderDetails.cs" %}
{% raw %}
namespace UrlAdaptor.Server.Models
{
    public class OrdersDetails
    {
      public static List<OrdersDetails> order = new List<OrdersDetails>();
      public OrdersDetails(){}
      public OrdersDetails(
      int OrderID, string CustomerId, int EmployeeId, double Freight, bool Verified,
      DateTime OrderDate, string ShipCity, string ShipName, string ShipCountry,
      DateTime ShippedDate, string ShipAddress) {
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
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

The following screenshot demonstrates displaying error messages when CRUD operations fail:

![custom error message](../../grid/images/custom-error-message.png)
