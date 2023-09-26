---
layout: post
title: How to in Angular Data component | Syncfusion
description: Learn here all about How to in Syncfusion Angular Data component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: How to 
documentation: ug
domainurl: ##DomainURL##
---

# How to in Angular Data component

## Work in offline mode

On remote data binding, every time invoking [`executeQuery`](https://ej2.syncfusion.com/documentation/api/data/dataManager/#executequery) will send request to the server and the query will be processed on server-side.
To avoid post back to server on calling [`executeQuery`](https://ej2.syncfusion.com/documentation/api/data/dataManager/#executequery), you can set the [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) to load all the data on initialization time and make the query processing in client-side.
To enable this behavior, you can use **offline** property of [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/).

```typescript
import { Component, OnInit } from '@angular/core';
import { DataManager, Query, ODataAdaptor, ReturnOption } from '@syncfusion/ej2-data';

const SERVICE_URI =  'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders';

@Component({
    selector: 'app-root',
    templateUrl: 'app.template.html',
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

    public items: object[];

    public ngOnInit(): void {
        const dm: DataManager = new DataManager(
            { url: SERVICE_URI, adaptor: new ODataAdaptor(), offline: true },
            new Query().take(8)
        );

        dm.ready.then((e: ReturnOption) => this.items = e.result as object[]).catch((e) => true);
    }
}

```

> The loaded data will be cached in the **json** property of [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/).

## Sending additional parameters to server

You can use the [`addParams`](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method of [`Query`](https://ej2.syncfusion.com/documentation/api/data/query/) class, to add custom parameter to the data request.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/data/getting-started/default-cs11/src/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/data/getting-started/default-cs11/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/getting-started/default-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs11" %}

## Adding custom headers

You can add custom headers to the request made by [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) using the **headers** property.

```typescript
import { DataManager, Query, ReturnOption, ODataAdaptor } from '@syncfusion/ej2-data';

const SERVICE_URI =  'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders';

new DataManager({ url: SERVICE_URI, adaptor: new ODataAdaptor, headers: [{ 'syncfusion': 'true' }] })
    .executeQuery(new Query())
    .then((e: ReturnOption) => {
        //get result from e.result
    });

```

> Adding custom headers while making cross domain request will initiate preflight request.