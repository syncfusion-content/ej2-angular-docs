---
layout: post
title: Angular DataManager - Custom headers | Syncfusion
description: Send custom HTTP headers (e.g., authentication tokens, API keys) with Syncfusion Angular DataManager using the headers property.
platform: ej2-angular
control: Adding custom headers in Angular DataManager
documentation: ug
domainurl: ##DomainURL##
---

# Custom headers for Angular DataManager

Custom headers provide a mechanism to send additional information along with HTTP requests made by the Syncfusion<sup style="font-size:70%">&reg;</sup> [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager). These headers can include authentication tokens, API keys, session identifiers, or any other metadata required by the server to validate and process the request correctly.

The Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager supports custom headers through its `headers` property, enabling secure and flexible communication between the client application and the server. This feature is particularly useful when requests must carry additional information for authentication, authorization, or contextual processing.

Steps to integrate custom headers into DataManager requests:

1. Create a new instance of `DataManager` with the required `URL` and `adaptor`.

2. Assign the custom headers to the `headers` property of the `DataManager` instance. 

3. Trigger the [executeQuery](https://ej2.syncfusion.com/documentation/api/data/dataManager/executequery) method to send the request to the server with the custom headers.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataManager, Query, ODataV4Adaptor, ReturnOption } from '@syncfusion/ej2-data';

const SERVICE_URL = 'https://services.syncfusion.com/angular/production/api/Orders';
@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.template.html',
  styles: [`
    .e-table {
      border: solid 1px #e0e0e0;
      border-collapse: collapse;
      font-family: Roboto;
    }

    .e-table td, .e-table th {
      border-style: solid;
      border-width: 1px 0 0;
      border-color: #e0e0e0;
      display: table-cell;
      font-size: 14px;
      line-height: 20px;
      overflow: hidden;
      padding: 8px 21px;
      vertical-align: middle;
      white-space: nowrap;
      width: auto;
    }
  `]
})
export class AppComponent implements OnInit {
  public items: object[] | any = [];

  public ngOnInit(): void {
    new DataManager({ url: SERVICE_URL, adaptor: new ODataV4Adaptor(), headers: [{ 'syncfusion-data-manager': 'true' }],})
    .executeQuery(new Query()).then((e: ReturnOption) => this.items = e.result as object[]).catch((e) => true);
  }
}

{% endraw %}
{% endhighlight %}

{% highlight html tabtitle="app.template.html" %}
{% raw %}

<table class='e-table'>
    <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th></tr>
    <tr *ngFor="let item of items">
        <td>{{item.OrderID}}</td><td>{{item.CustomerID}}</td><td>{{item.EmployeeID}}</td>
    </tr>
</table>

{% endraw %}
{% endhighlight %}
{% endtabs %}
