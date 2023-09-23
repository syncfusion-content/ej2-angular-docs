---
layout: post
title: Remote data in Angular Grid component | Syncfusion
description: Learn here all about Remote data in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Remote data 
documentation: ug
domainurl: ##DomainURL##
---

# Remote data in Angular Grid component

To bind remote data to grid component, assign service data as an instance of **DataManager** to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource) property. To interact with remote data source, provide the endpoint **url**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/databinding-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/databinding-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/databinding-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/databinding-cs2" %}

> By default, **DataManager** uses **ODataAdaptor** for remote data-binding.

## OData adaptor - Binding OData service

[`OData`](http://www.odata.org/documentation/odata-version-3-0/) is a standardized protocol for creating and consuming data. You can retrieve data from OData service using DataManager. You can refer to the following code example of remote data binding using OData service.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/databinding-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/databinding-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/databinding-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/databinding-cs3" %}

## OData v4 adaptor - Binding OData v4 service

The ODataV4 is an improved version of OData protocols, and the **DataManager** can also retrieve and consume OData v4 services. For more details on OData v4 services, refer to the [`odata documentation`](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752197).

To bind OData v4 service, use the **ODataV4Adaptor**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/databinding-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/databinding-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/databinding-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/databinding-cs4" %}

## Web API adaptor

You can use **WebApiAdaptor** to bind grid with Web API created using OData endpoint.

```typescript
import { Component, OnInit } from '@angular/core';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: DataManager;

    ngOnInit(): void {
        this.data = new DataManager({
            url: 'api/OrderApi',
            adaptor: new WebApiAdaptor()
        });
    }
}

```

The response object should contain properties **Items** and **Count** whose values are a collection of entities and the total count of the entities respectively.

The sample response object should look like below.

```json
{
    Items: [{..}, {..}, {..}, ...],
    Count: 830
}
```

## Remote save adaptor

You may need to perform all Grid Actions in client-side except the CRUD operations, that should be interacted with server-side to persist data. It can be achieved in Grid by using **RemoteSaveAdaptor**.

Datasource must be set to **json** property and set **RemoteSaveAdaptor** to the **adaptor** property. CRUD operations can be mapped to server-side using **updateUrl**, **insertUrl**, **removeUrl**, **batchUrl**, **crudUrl** properties.

You can use the following code example to use **RemoteSaveAdaptor** in Grid.

```typescript
import { Component, OnInit } from '@angular/core';
import { DataManager, RemoteSaveAdaptor } from '@syncfusion/ej2-data';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='dataSource' [editSettings]='editSettings' [toolbar]='toolbar'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: DataManager;
    public value: any;
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];

    ngOnInit(): void {
        this.value = (window as any).griddata;
        this.data = new DataManager({
            json: JSON.parse(this.value),
            adaptor: new RemoteSaveAdaptor(),
            insertUrl: '/Home/Insert',
            updateUrl: '/Home/Update',
            removeUrl: '/Home/Delete'
        });
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
}

```

The following code example describes how to fetch the data from **ViewBag** in angular.

```
<script type="text/javascript">
    window.griddata = '@Html.Raw(Json.Encode(ViewBag.dataSource))';
</script>
```

The following code example describes the CRUD operations handled at server-side.

```json
public ActionResult Index()
{
    ViewBag.dataSource = OrdersDetails.GetAllRecords().ToArray();
    return View();
}
public ActionResult Update(OrdersDetails value)
{
    ...
    return Json(value);
}
public ActionResult Insert(OrdersDetails value)
{
    ...
    return Json(value);
}
public ActionResult Delete(int key)
{
    ...
    return Json(data);
}
```

## Custom adaptor

You can create your own adaptor by extending the built-in adaptors. For the sake of demonstrating custom adaptor approach, we are going to see how to add a serial number for the records by overriding the built-in response processing using the **processResponse** method of the **ODataAdaptor**.

we are going to see how to add a serial number for the records by overriding the built-in response processing using the **processResponse** method of the **ODataAdaptor**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/databinding-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/databinding-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/databinding-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/databinding-cs5" %}

## Offline mode

On remote data binding, all grid actions such as paging, sorting, editing, grouping, filtering, etc, will be processed on server-side. To avoid post back for every action, set the grid to load all data on initialization and make the actions process in client-side. To enable this behavior, use the **offline** property of **DataManager**.

```typescript
import { Component, OnInit } from '@angular/core';
import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowPaging]='true' [allowGrouping]='true' [allowSorting]='true' [pageSettings]='pageOptions'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: DataManager;
    public pageOptions = { pageSize: 7 };

    ngOnInit(): void {
        this.data = new DataManager({
            url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders?$top=7',
            adaptor: new ODataAdaptor(),
            offline: true
        });
    }
}

```