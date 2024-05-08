---
layout: post
title: Data binding in Angular Kanban component | Syncfusion
description: Learn here all about Data binding in Syncfusion Angular Kanban component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data binding 
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Angular Kanban component

The Kanban uses `DataManager`, which supports both RESTful data service binding and JavaScript object array binding. The [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/kanban/#datasource) property of Kanban can be assigned either with the instance of `DataManager` or JavaScript object array collection, as it supports the following two data binding methods:

* Local data
* Remote data

## Local data

To bind local JSON data to the Kanban, you can simply assign a JavaScript object array to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/kanban/#datasource) property. The JSON object dataSource can also be provided as an instance of `DataManager` and assigned to the Kanban `dataSource` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/local-data-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/local-data-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/local-data-cs1" %}

> By default, `DataManager` uses `JsonAdaptor` for binding local data.

## Remote data

To bind remote data to kanban component, assign service data as an instance of [`DataManager`](../data) to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/kanban/#datasource) property. To interact with remote data source, provide the endpoint **url**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/remote-data-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/remote-data-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/remote-data-cs1" %}

> By default, [`DataManager`](../data) uses **ODataAdaptor** for remote data-binding.

### OData services

[`OData`](http://www.odata.org/documentation/odata-version-3-0/) is a standardized protocol for creating and consuming data. You can retrieve data from OData service using the DataManager. Refer to the following code example for remote Data binding using OData service.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/odata-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/odata-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/odata-cs1" %}

### OData v4 services

The ODataV4 is an improved version of OData protocols, and the [`DataManager`](../data) can also retrieve and consume OData v4 services. For more details on OData v4 services, refer to the [`odatadocumentation`](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752197). To bind OData v4 service, use the **ODataV4Adaptor**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/odataV4-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/odataV4-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/odataV4-cs1" %}

### Web API

You can use **WebApiAdaptor** to bind kanban with Web API created using OData endpoint.

```typescript
import { Component } from '@angular/core';
import { CardSettingsModel, DialogEventArgs } from '@syncfusion/ej2-angular-kanban';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  template: `<ejs-kanban keyField='Status' [dataSource]='dataManager' [cardSettings]='cardSettings' [allowDragAndDrop]='false' (dialogOpen)="dialogOpen($event)">
                <e-columns>
                  <e-column headerText='To do' keyField='Open'></e-column>
                  <e-column headerText='In Progress' keyField='InProgress'></e-column>
                  <e-column headerText='Testing' keyField='Testing'></e-column>
                  <e-column headerText='Done' keyField='Close'></e-column>
                </e-columns>
            </ejs-kanban>`
})
export class AppComponent {
    public cardSettings: CardSettingsModel = {
        contentField: 'Summary',
        headerField: 'Id'
    };
    private dataManager: DataManager = new DataManager({
        url: '/api/Tasks',
        adaptor: new WebApiAdaptor
    });
    public dialogOpen(args: DialogEventArgs): void {
      args.cancel = true;
    }
}

```

Below server-side controller code to get the Kanban data.

```typescript

[HttpGet]
        public object Get()
        {
            var data = OrdersDetails.GetAllRecords().ToList();
            return data;
        }

```

### URL adaptor

The CRUD (Create, Read, Update and Delete) actions can be performed easily on Kanban cards using the various adaptors available within the `DataManager`. Most preferably, we will be using `UrlAdaptor` for performing CRUD actions on Kanban.

The CRUD operation in Kanban can be mapped to server-side controller actions using the properties `insertUrl`, `removeUrl`, `updateUrl`, and `crudUrl`.

* `insertUrl` – You can perform a single insertion operation on the server-side.
* `updateUrl` – You can update single data on the server-side.
* `removeUrl` – You can remove single data on the server-side.
* `crudUrl` – You can perform bulk data operation on the server-side.

```typescript
import { Component } from '@angular/core';
import { CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  template: `<ejs-kanban keyField='Status' [dataSource]='dataManager' [cardSettings]='cardSettings'>
                <e-columns>
                  <e-column headerText='To do' keyField='Open'></e-column>
                  <e-column headerText='In Progress' keyField='InProgress'></e-column>
                  <e-column headerText='Testing' keyField='Testing'></e-column>
                  <e-column headerText='Done' keyField='Close'></e-column>
                </e-columns>
            </ejs-kanban>`
})
export class AppComponent {
    public cardSettings: CardSettingsModel = {
        contentField: 'Summary',
        headerField: 'Id'
    };
    private dataManager: DataManager = new DataManager({
        url: 'Home/DataSource',
        updateUrl: 'Home/Update',
        insertUrl: 'Home/Insert',
        removeUrl: 'Home/Delete',
        adaptor: new UrlAdaptor(),
        crossDomain: true
    });
}

```

The server-side controller code to handle the CRUD operations are as follows.

```typescript

private NORTHWNDEntities db = new NORTHWNDEntities();
public ActionResult DataSource() {
    var DataSource = db.Tasks.ToList();
    return Json(DataSource, JsonRequestBehavior.AllowGet);
}
public ActionResult Insert(Params value) {
    //Insert card data into the database
    return Json(value, JsonRequestBehavior.AllowGet);
}
public ActionResult Update(Params value) {
    //Update card data into the database
    return Json(value, JsonRequestBehavior.AllowGet);
}
public void Delete(Params value) {
    //Delete card data from the database
}

public class Params {
    public int Id { get; set; }
    public string Status { get; set; }
    public string Summary { get; set; }
    public string Assignee { get; set; }
}

```

### Custom adaptor

It is possible to create your own custom adaptor by extending the built-in available adaptors. The following example demonstrates the custom adaptor usage and how to add a custom field `TaskId` for the cards by overriding the built-in response processing using the `processResponse` method of the `ODataAdaptor`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/custom-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/custom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/custom-cs1" %}

### Sending additional parameters to the server

To add a custom parameter to the data request, use the **addParams** method of **Query** class. Assign the **Query** object with additional parameters to the kanban [`query`](https://ej2.syncfusion.com/angular/documentation/api/kanban/#query) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/additional-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/additional-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/additional-cs1" %}

> The parameters added using the [`query`](https://ej2.syncfusion.com/angular/documentation/api/kanban/#query) property will be sent along with the data request for every kanban action.

### Handling HTTP error

During server interaction from the kanban, some server-side exceptions may occur, and you can acquire those error messages or exception details in client-side using the [`actionFailure`](https://ej2.syncfusion.com/angular/documentation/api/kanban/#actionfailure) event.

The argument passed to the [`actionFailure`](https://ej2.syncfusion.com/angular/documentation/api/kanban/#actionfailure) event contains the error details returned from the server.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/error-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/error-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/error-cs1" %}

> The [`actionFailure`](https://ej2.syncfusion.com/angular/documentation/api/kanban/#actionfailure) event will be triggered not only for the server errors, but also when there is an exception while processing the kanban actions.

## Loading data via ajax

You can use Kanban [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/kanban/#datasource) property to bind the datasource to Kanban from external ajax request. In the following code, we have fetched the datasource from the server using ajax request and provided that to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/kanban/#datasource) property by using the **onSuccess** event of ajax.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/ajax-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/ajax-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/ajax-cs1" %}

> * If you bind the dataSource from this way, then it acts like a local dataSource. So you cannot perform any server-side crud actions.
