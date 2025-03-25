---
layout: post
title: Cache in Angular Data component | Syncfusion
description: Learn here all about Cache in Syncfusion Angular Data component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Cache 
documentation: ug
domainurl: ##DomainURL##
---

# Enable Cache in Angular Data component

The Syncfusion DataManager provides the `enableCache` property, which enhances performance by reducing redundant HTTP requests for previously visited pages. When caching is enabled, the [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager/) retrieves data from the cache instead of sending a new request, minimizing server load and improving user experience.

**How it works**

* When `enableCache` is set to true, the DataManager generates a unique ID at initialization and uses it to store previously loaded page data in cache memory. This enables efficient data retrieval without redundant server requests.
* The cache is automatically cleared when data actions such as sorting, filtering, grouping, searching, or CRUD operations (Create, Read, Update, Delete) are performed.
* This feature is supported by all adaptors in Syncfusion DataManager, ensuring consistent caching behavior across different data sources.

The following example demonstrates how to enable caching using the `enableCache` property in the Syncfusion Angular DataManager:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit } from '@angular/core';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  template: `
    <ejs-grid [dataSource]="data">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="100" textAlign="Right"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="100"></e-column>
        <e-column field="EmployeeID" headerText="Employee ID" textAlign="Right" width="100"></e-column>
        <e-column field="OrderDate" headerText="Order Date" format="yMd" textAlign="Right" width="120"></e-column>
      </e-columns>
    </ejs-grid>
  `
})
export class AppComponent implements OnInit {
  public data: DataManager;

  ngOnInit(): void {
    this.data = new DataManager({
        url: 'https://services.syncfusion.com/angular/production/api/Orders',
        adaptor: new WebApiAdaptor(),
        crossDomain: true,
        enableCache: true // Enables caching to prevent repeated HTTP requests.
    });
  }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}