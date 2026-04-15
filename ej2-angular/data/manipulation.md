---
layout: post
title: Angular DataManager - Manipulation | Syncfusion
description: Perform CRUD operations in Syncfusion Angular DataManager insert, update, remove records and batch edits.
control: Manipulation 
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Manipulation in Angular DataManager

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular DataManager enables easy data manipulation, including creating, updating, and deleting records. It works with both local and remote data sources and offers a consistent interface for handling data operations.

Data manipulation refers to performing CRUD (Create, Read, Update, Delete) actions on a data source. These operations are crucial for managing application data. [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) streamlines this process by providing a unified approach to executing CRUD operations across different data sources.

## Insert

The Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager provides a way to add new records to a data source. The [insert](https://ej2.syncfusion.com/documentation/api/data/dataManager#insert) method allows new entries to be added programmatically.

Insert operations in DataManager enable adding new records by collecting input from form elements and triggering the insertion programmatically, as shown in the example below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/editing-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight html tabtitle="app.template.html" %}
{% raw %}

<div class="e-form">
    <input type="number" id='OrderID' placeholder="Order ID" [(ngModel)]="edit.OrderID" />
    <input type="text" id="CustomerID" placeholder="Customer ID" [(ngModel)]="edit.CustomerID" *ngIf="show"/>
    <input type="number" id="EmployeeID" placeholder="Employee ID" [(ngModel)]="edit.EmployeeID" *ngIf="show"/>
    <input type="button" [value]="text" id="manipulate" (click)="insertRecord()" />
</div>
<table class='e-table'>
    <tr>
        <th>Order ID</th>
        <th>Customer ID</th>
        <th>Employee ID</th>
    </tr>
    <tr *ngFor="let item of items">
        <td>{{item.OrderID}}</td>
        <td>{{item.CustomerID}}</td>
        <td>{{item.EmployeeID}}</td>
    </tr>
</table>

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/editing-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/editing-cs1" %}

> In remote data sources, when the primary key field is an identity field, then it is advised to return the created data in the response.

## Update

The Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager provides a powerful way to update existing records in a data source without replacing the entire dataset.

Update operations allow modifying specific records through the [update](https://ej2.syncfusion.com/documentation/api/data/dataManager#update) method in the [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) class, ensuring accuracy and consistency in the data. To use the `update` method, a "KeyField (primary key)" must be defined. This unique identifier allows `DataManager` to accurately locate and update the corresponding record.

The example includes an input box for editing values and a button that triggers the `update` method to apply the changes efficiently.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/editing-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight html tabtitle="app.template.html" %}
{% raw %}

<div class="e-form">
    <input type="number" id='OrderID' placeholder="Order ID" [(ngModel)]="edit.OrderID" />
    <input type="text" id="CustomerID" placeholder="Customer ID" [(ngModel)]="edit.CustomerID" *ngIf="show"/>
    <input type="number" id="EmployeeID" placeholder="Employee ID" [(ngModel)]="edit.EmployeeID" *ngIf="show"/>
    <input type="button" [value]="text" id="manipulate" (click)="updateRecord()" />
</div>
<table class='e-table'>
    <tr>
        <th>Order ID</th>
        <th>Customer ID</th>
        <th>Employee ID</th>
    </tr>
    <tr *ngFor="let item of items">
        <td>{{item.OrderID}}</td>
        <td>{{item.CustomerID}}</td>
        <td>{{item.EmployeeID}}</td>
    </tr>
</table>

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/editing-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/editing-cs2" %}

> Primary key name is required by the `update` method to find the record to be updated.

## Remove

The Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager provides a seamless way to delete specific records from a data source without affecting the entire dataset. The [remove](https://ej2.syncfusion.com/documentation/api/data/dataManager#remove) method handles this operation, and defining a "KeyField (primary key)" is required to uniquely identify each record.

The KeyField parameter enables the `remove` method to accurately locate and delete the intended entry. The example demonstrates how to delete a record using `DataManager`, with an input box to enter the KeyField value and a button that triggers the remove method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/editing-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight html tabtitle="app.template.html" %}
{% raw %}

<div class="e-form">
    <input type="number" id='OrderID' placeholder="Order ID" [(ngModel)]="edit.OrderID" />
    <input type="text" id="CustomerID" placeholder="Customer ID" [(ngModel)]="edit.CustomerID" *ngIf="show"/>
    <input type="number" id="EmployeeID" placeholder="Employee ID" [(ngModel)]="edit.EmployeeID" *ngIf="show"/>
    <input type="button" [value]="text" id="manipulate" (click)="removeRecord()" />
</div>
<table class='e-table'>
    <tr>
        <th>Order ID</th>
        <th>Customer ID</th>
        <th>Employee ID</th>
    </tr>
    <tr *ngFor="let item of items">
        <td>{{item.OrderID}}</td>
        <td>{{item.CustomerID}}</td>
        <td>{{item.EmployeeID}}</td>
    </tr>
</table>

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/editing-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/editing-cs3" %}

> Primary key name and its value are required to find the record to be removed.

## Batch edit operation

The Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager provides built‑in support for batch processing of CRUD (Create, Read, Update, Delete) operations, enabling efficient handling of multiple edits in a single request. This approach improves performance by grouping multiple add, update, and remove actions, thereby reducing server interactions and overall network overhead.

Batch edits are managed through the [saveChanges](https://ej2.syncfusion.com/documentation/api/data/dataManager#savechanges) method, which processes all pending operations together. The example demonstrates this workflow by using input fields to gather the required data for each action and buttons to enqueue the corresponding operations. Finally, the Save Changes button commits all modifications to the data source through the `saveChanges` method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/batchediting-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight html tabtitle="app.template.html" %}
{% raw %}

<div class="e-form">
    <input type="number" id='OrderID' placeholder="Order ID" [(ngModel)]="edit.OrderID" />
    <input type="text" id="CustomerID" placeholder="Customer ID" [(ngModel)]="edit.CustomerID"/>
    <input type="number" id="EmployeeID" placeholder="Employee ID" [(ngModel)]="edit.EmployeeID"/>
    <input type="button" value="Insert" (click)="batchChanges('addedRecords')" />
    <input type="button" value="Update" (click)="batchChanges('changedRecords')" />
    <input type="button" value="Remove" (click)="batchChanges('deletedRecords')" />
</div>
<div class="e-form">
    <label>Click to Save changes: </label>
    <input type="button" value="Save Changes" (click)="saveChanges()" />
</div>
<table class='e-table'>
    <tr>
        <th>Order ID</th>
        <th>Customer ID</th>
        <th>Employee ID</th>
    </tr>
    <tr *ngFor="let item of items">
        <td>{{item.OrderID}}</td>
        <td>{{item.CustomerID}}</td>
        <td>{{item.EmployeeID}}</td>
    </tr>
</table>

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/batchediting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/batchediting-cs1" %}