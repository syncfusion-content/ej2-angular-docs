---
layout: post
title: Angular DataManager - Applying Middleware logic | Syncfusion
description: Use middleware logic in Syncfusion Angular DataManager to add authentication, validate requests, or transform responses.
platform: ej2-angular
control: Applying Middleware logic
documentation: ug
domainurl: ##DomainURL##
---

# Applying Middleware logic in Angular DataManager

The Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager supports applying middleware logic to modify requests and responses during data processing. This capability is useful for handling tasks such as authentication, validation, logging, and transforming response data. Middleware can be applied through two methods: `applyPreRequestMiddlewares` and `applyPostRequestMiddlewares`, each serving a specific stage in the data handling workflow.

**Pre-Request Middleware**

The `applyPreRequestMiddlewares` method executes before a request is sent to the server. It enables modification of request headers, query parameters, or payloads. This is commonly used for adding authentication tokens, restructuring requests, or performing validations. The following code snippet demonstrates how to add an authorization token:

```ts

this.dataManager.applyPreRequestMiddlewares([
    async (context) => {
      context.request.headers['Authorization'] = 'Bearer your-access-token';
    }
]);

```

**Post-Request Middleware**

The `applyPostRequestMiddlewares` method runs after a response is received from the server but before the data is bound to a component. It allows filtering, formatting, or restructuring the response to meet application requirements. The following code snippet demonstrates how to format response data:

```ts

this.dataManager.applyPostRequestMiddlewares([
    async (context) => {
        context.response.result = context.response.result.map(item => ({
            id: item.Id,
            name: item.Name.toUpperCase(),
            date: new Date(item.Timestamp).toLocaleDateString()
        }));
    }
]);

```

**Supported data adaptors**

Middleware functions are supported across multiple DataManager adaptors, including the [WebApiAdaptor](./adaptors/webapi-adaptor), [ODataAdaptor](./adaptors/odatav4-adaptor), and [CustomAdaptor](./adaptors/custom-adaptor), and can be applied to both local and remote data operations. This enhances flexibility, security, and overall control of data processing.

The example demonstrates using the [UrlAdaptor](./adaptors/url-adaptor) with middleware to adjust requests and responses. Before sending a request, `applyPreRequestMiddlewares` fetches an authentication token from an external server and adds it to the request headers. If the token retrieval fails, the DataManager failure event handles the error. Likewise, `applyPostRequestMiddlewares` processes the server response before it is bound to the UI, enabling any required transformations or filtering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}

import { Component, OnInit } from '@angular/core';
import { DataManager, Query, UrlAdaptor } from '@syncfusion/ej2-data';
import { CommonModule } from '@angular/common';

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
    public items: any[] = [];

    public ngOnInit(): void {
        const dataManager = new DataManager({
            url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
            adaptor: new UrlAdaptor(),
        }).executeQuery(new Query().take(8))
            .then((e: any) => {
                this.items = e.result;
            });

        // Method to apply middleware before sending a request to the server.
        dataManager.applyPreRequestMiddlewares = async (request: string | Object): Promise<object> => {
            const response = await fetch('https://example.com/api/token', { // Replace with your actual endpoint. This URL is just for example purposes.
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return { token: "your_token_value" };
        };

        dataManager.dataManagerFailure = (e: Error) => {
            //Handle DataManager failure event.
        }

        // Method to apply middleware after receiving a response from the server.
        dataManager.applyPostRequestMiddlewares = async (response: string | Object): Promise<object> => {
            return response;
        };
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