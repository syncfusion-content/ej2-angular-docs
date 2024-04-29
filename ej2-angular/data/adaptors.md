---
layout: post
title: Adaptors in Angular Data component | Syncfusion
description: Learn here all about Adaptors in Syncfusion Angular Data component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Adaptors 
documentation: ug
domainurl: ##DomainURL##
---

# Adaptors in Angular Data component

Each datasource or remote service uses different way in accepting request and sending back the response. [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) cannot anticipate every way a datasource works. To tackle this problem the [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) uses the adaptor concept to communicate with particular data source.

For local datasources, the role of the data adaptor is to query the JavaScript object array based on the [`Query`](https://ej2.syncfusion.com/documentation/api/data/query/) object and manipulate them.

When comes with remote datasource, the data adaptor is used to send the request that the server can understand and process the server response.

The adaptor can be assigned using the **adaptor** property of the [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/).

## Json adaptor

**JsonAdaptor** is used to query and manipulate JavaScript object array.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/data/getting-started/default-cs1/src/app.template.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/getting-started/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs1" %}

## Url adaptor

**UrlAdaptor** act as the base adaptor for interacting with remote data services. Most of the built-in adaptors are derived from the **UrlAdaptor**.

```typescript
import { DataManager, Query, UrlAdaptor } from '@syncfusion/ej2-data';

const SERVICE_URI = 'https://ej2services.syncfusion.com/angular/development/api/UrlDataSource';

new DataManager({
        url: SERVICE_URI,
        adaptor: new UrlAdaptor()
    }).executeQuery(new Query().take(8)).then((e) => {
        //e.result will contain the records
    });

```

**UrlAdaptor** expects response as a JSON object with properties **result** and **count** which contains the collection of entities and the total number of records respectively.

The sample response object should be as follows,

```json
{
    "result": [{..}, {..}, {..}, ...],
    "count": 67
}
```

## OData adaptor

[`OData`](http://www.odata.org/documentation/odata-version-3-0/) is standardized protocol for creating and consuming data. You can retrieve data from OData service using [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/). The **ODataAdaptor** helps you to interact with OData service. You can refer to the following code example of remote Data binding using OData service.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/data/getting-started/default-cs2/src/app.template.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/getting-started/default-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs2" %}

> By default, **ODataAdaptor** is used by [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/).

## ODataV4 adaptor

The ODataV4 is an improved version of OData protocols and the [`DataManager`](https://ej2.syncfusion.com/documentation/data/api-dataManager.html) can also retrieve and consume OData v4 services. For more details on OData v4 Services, refer the [`odata documentation`](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html).
You can use the **ODataV4Adaptor** to interact with ODataV4 service.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/data/getting-started/default-cs3/src/app.template.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/getting-started/default-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs3" %}

## Web API adaptor

You can use the **WepApiAdaptor** to interact with Web API created with OData endpoint. The **WepApiAdaptor** is extended from the **ODataAdaptor**. Hence to use **WepApiAdaptor**, the endpoint should understand the OData formatted queries send along with request.

To enable OData query option for Web API, please refer to the [`documentation`](https://docs.microsoft.com/en-us/aspnet/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options)

```typescript
import { DataManager, Query, WebApiAdaptor } from '@syncfusion/ej2-data';

const SERVICE_URI = 'https://ej2services.syncfusion.com/angular/development/api/Orders';

new DataManager({
        url: SERVICE_URI,
        adaptor: new WebApiAdaptor()
    }).executeQuery(new Query().take(8)).then((e) => {
        //e.result will contain the records
    });
```

**WepApiAdaptor** expects JSON response from the server and the response object should contain properties **Items** and **Count** whose values are collection of entities and total count of the entities respectively.

The sample response object should look like below.

```json
{
    Items: [{..}, {..}, {..}, ...],
    Count: 830
}
```

## WebMethod Adaptor

The **WebMethodAdaptor** is used to bind data source from remote services and code behind methods. It can be enabled in Grid using Adaptor property of DataManager as **WebMethodAdaptor**.

For every operations, an Fetch post will be send to the specified data service.

```typescript
import { DataManager, Query, WebMethodAdaptor } from '@syncfusion/ej2-data';

let SERVICE_URI = 'Default.aspx/DataSource';

new DataManager({
        url: SERVICE_URI,
        adaptor: new WebMethodAdaptor
    }).executeQuery(new Query().take(8)).then((e) => {
        //e.result will contain the records
    });
```

**WebMethodAdaptor** expects JSON response from the server and the response object should contain properties **result** and **count** whose values are collection of entities and total count of the entities respectively.

The sample response object should look like below.

```json
{
    result: [{..}, {..}, {..}, ...],
    count: 830
}
```

> The controller method's data parameter name must be **value**.

## GraphQL Adaptor

The `GraphQLAdaptor` provides an option to retrieve data from the GraphQL server. It performs CRUD and data operations such as paging, sorting, filtering etc by sending the required arguments to the server.

You can provide the GraphQL query string by using the `query` property of the `GraphQLAdaptor`. Since, the `GraphQLAdaptor` is extended from the `UrlAdaptor`, it expects response as a JSON object with properties `result` and `count` which contains the collection of entities and the total number of records respectively. The GraphQL response should be returned in JSON format like { "data": { ... }} with query name as field, you need to set the `result` and `count` properties to map the response.

```typescript
import { DataManager, Query, GraphQLAdaptor } from '@syncfusion/ej2-data';

const SERVICE_URI: string = 'http://controller.com/actions';

new DataManager({
        url: SERVICE_URI, adaptor: new GraphQLAdaptor({
        response: {
            result: 'getOrders.OrderData',
            count: 'getOrders.OrderCount'
        },
        query: `query getOrders($datamanager: String) {
            getOrders(datamanager: $datamanager) {
                OrderCount,
                OrderData{OrderID, CustomerID, EmployeeID, ShipCity, ShipCountry}
             }
    }`
    })
    }).executeQuery(new Query().take(8)).then((e) => {
        //e.result will contain the records
    });
```

The Schema for the GraphQL server is

```typescript

input OrderInput {
  OrderID: Int!
  CustomerID: String!
  EmployeeID: Int!
  ShipCity: String!
  ShipCountry: String!
}

type Order {
  OrderID: Int!
  CustomerID: String!
  EmployeeID: Int!
  ShipCity: String!
  ShipCountry: String!
}

type ReturnType {
  getOrders: [Order]
  count: Int
}

type Query {
  getOrders(datamanager: String): ReturnType
}
type Mutation {
  createOrder(value: OrderInput): Order!
  updateOrder(key: Int!, keyColumn: String, value: OrderInput): Order
  deleteOrder(key: Int!, keyColumn: String, value: OrderInput): Order!
}
```

The resolver for the corresponding action is

```typescript
import { data } from "./db";

const resolvers = {
  Query: {
    getOrders: (parent, { datamanager }, context, info) => {
      if (datamanager.search) {
        // Perform searching
      }
      if (datamanager.sorted) {
        // Perform sorting
      }
      if (datamanager.where) {
        // Perform filtering
      }
      if (datamanager.search) {
        // Perform search
      }
      if (datamanager.skip && datamanager.take) {
        // Perform Paging
      }
      return { OrderData: data, OrderCount: data.length };
    }
  },
  Mutation: {
    createOrder: (parent, { value }, context, info) => {
      // Perform Insert
      return value;
    },
    updateOrder: (parent, { key, keyColumn, value }, context, info) => {
      // Perform Update
      return value;
    },
    deleteOrder: (parent, { key, keyColumn, value }, context, info) => {
      // Perform Delete
      return value;
    },
  }
};

export default resolvers;

```

The query parameters will be send in a string format which contains the below details.

| Parameters | Description |
|-----|-----|
| `RequiresCounts` | If it is `true` then the total count of records will be included in response. |
| `Skip` | Holds the number of records to skip. |
| `Take` | Holds the number of records to take. |
| `Sorted` | Contains details about current sorted column and its direction. |
| `Where` | Contains details about current filter column name and its constraints. |
| `Group` | Contains details about current Grouped column names. |

### Performing CRUD action with GraphQLAdaptor

You can perform the CRUD actions by returning the mutation queries inside the `getMutation` method based on the action.

```typescript
import { DataManager, Query, GraphQLAdaptor } from '@syncfusion/ej2-data';

const SERVICE_URI: string = 'http://controller.com/actions';

new DataManager({
        url: SERVICE_URI, adaptor: new GraphQLAdaptor({
        response: {
            result: 'getOrders.getOrders',
            count: 'getOrders.count'
        },
        query: `query getOrders($datamanager: String) {
            getOrders(datamanager: $datamanager) {
                count,
                getOrders{OrderID, CustomerID, EmployeeID, ShipCity, ShipCountry}
             }
    }`,
    getMutation: function (action): string {
            if (action === 'insert') {
                return `mutation CreateOrderMutation($value: OrderInput!){
                                        createOrder(value: $value){
                                            OrderID, CustomerID, EmployeeID, ShipCity, ShipCountry
                                    }}`;
            }
            if (action === 'update') {
                return `mutation Update($key: ID!, $keyColumn: String,$value: OrderInput){
                            updateOrder(key: $key, keyColumn: $keyColumn, value: $value) {
                                OrderID, CustomerID, EmployeeID, ShipCity, ShipCountry
                            }
                            }`;
            } else {
                return `mutation Remove($key: ID!, $keyColumn: String, $value: OrderInput){
                    deleteOrder(key: $key, keyColumn: $keyColumn, value: $value) {
                                OrderID, CustomerID, EmployeeID, ShipCity, ShipCountry
                            }
                            }`;
            }
        }
    })
    }).executeQuery(new Query().take(8)).then((e) => {
        //e.result will contain the records
    });

```

## Writing custom adaptor

Sometimes the built-in adaptors does not meet your requirement. In such cases you can create your own adaptor.

To create and use custom adaptor, please refer to the below steps.

* Select an built-in adaptor which will act as base class for your custom adaptor.
* Override the desired method to achieve your requirement.
* Assign the custom adaptor to the **adaptor** property of [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/).

For the sake of demonstrating custom adaptor approach, we are going to see how to add serial number for the records by overriding the built-in response processing using **processResponse** method of the **ODataAdaptor**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/custom-adaptor-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/data/custom-adaptor-cs1/src/app.template.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/custom-adaptor-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/custom-adaptor-cs1" %}
