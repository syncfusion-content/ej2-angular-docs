---
layout: post
title: Data Binding in Angular Query Builder UI | Syncfusion
description: Bind the Syncfusion Angular Query Builder UI to local arrays, DataManager, OData, OData v4, Web API, and complex nested data sources.
platform: ej2-angular
control: Data binding 
documentation: ug
domainurl: ##DomainURL##
---

# Data Binding in Angular Query Builder UI

The Query Builder uses `DataManager` to support both local and remote data sources. Assign the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#datasource) property with either a `DataManager` instance or a JavaScript object array.

## Local data

Bind local data by assigning a JavaScript object array to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#datasource) property. Alternatively, create a `DataManager` instance with local data.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/filtering-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs4" %}

> By default, `DataManager` uses the `JsonAdaptor` for local data-binding, so no explicit adaptor configuration is required when binding a JavaScript object array.

## Remote data

Bind remote data by assigning a `DataManager` instance configured with a service endpoint to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#datasource) property. Provide the endpoint URL and the appropriate adaptor to enable communication with the remote data source. The following sample configures a `DataManager` with a remote endpoint URL and the `ODataAdaptor` to retrieve data from the service.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/default-cs1" %}

> By default, when a `DataManager` is initialized with a remote `url`, the `ODataAdaptor` is used for remote data-binding.

### Binding with OData services

[`OData`](https://www.odata.org/documentation/odata-version-3-0/) is a standardized protocol for data consumption and creation. Retrieve data from OData services using the `DataManager`. The following example demonstrates remote data binding with OData.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/default-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/default-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/default-cs2" %}

### Binding with OData v4 services

OData v4 is an improved version of the OData protocol. The `DataManager` supports OData v4 services for advanced data retrieval and consumption. To bind OData v4 services, use the `ODataV4Adaptor`. For detailed information, refer to the [`OData v4 specification`](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752197).

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/default-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/default-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/default-cs3" %}

### Web API

You can use the `WebApiAdaptor` to bind the Query Builder to a Web API created from an OData endpoint.

```typescript
import { Component, OnInit } from '@angular/core';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { RuleModel } from '@syncfusion/ej2-angular-querybuilder';

@Component({
    selector: 'app-root',
    template: `<!-- To render Query Builder. -->
               <ejs-querybuilder #querybuilder width="70%" [dataSource]="data" [rule]="importRules">
                <e-columns>
                  <e-column field="EmployeeID" label="Employee ID" type="number"></e-column>
                  <e-column field="FirstName" label="First Name" type="string"></e-column>
                  <e-column field="TitleOfCourtesy" label="Title Of Courtesy" type="boolean" [values]="values"></e-column>
                  <e-column field="Title" label="Title" type="string"></e-column>
                  <e-column field="HireDate" label="Hire Date" type="date" format="dd/MM/yyyy"></e-column>
                  <e-column field="Country" label="Country" type="string"></e-column>
                  <e-column field="City" label="City" type="string"></e-column>
                </e-columns>
              </ejs-querybuilder>`
})
export class AppComponent implements OnInit {
    public data?: DataManager;
    public importRules?: RuleModel;
    public values: string[] = ['Mr.', 'Mrs.'];

    ngOnInit(): void {
        this.data = new DataManager({
            url: 'api/OrderAPI',
            adaptor: new WebApiAdaptor()
        });
        this.importRules = {
          'condition': 'and',
          'rules': [{
                'label': 'Employee ID',
                'field': 'EmployeeID',
                'type': 'number',
                'operator': 'equal',
                'value': 1
            },
            {
                'label': 'Title',
                'field': 'Title',
                'type': 'string',
                'operator': 'equal',
                'value': 'Sales Manager'
            }]
        };
    }
}

```

## Data Manager

You can use the created conditions in a `DataManager` through the [`getPredicate`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#getpredicate) method of the Query Builder component. This method returns a predicate that can be used as a condition in the `DataManager`. Pass the returned predicate to a `Query` (for example, via `new Query().where(predicate)`) and execute the query against the `DataManager` using `executeLocal` for local data or `execute` for remote data to filter the records that match the Query Builder rules.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/filtering-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs5" %}

## Complex data binding

Complex data binding allows you to create subfields for columns. To implement complex data binding, either bind the complex data through nested columns, or specify a complex data source with field paths that use dot-notation and set the `separator` property on the Query Builder so it matches the delimiter used in the field path (the default separator is `.`). When the field names use dot-notation such as `Employee.ID`, the `separator` value (default `.`) must match the delimiter used in the field path so the Query Builder can resolve the nested values.

In the following sample, complex data is bound in nested columns.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/complex-data-binding-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/complex-data-binding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/complex-data-binding-cs1" %}

The following snippet shows the `separator` configuration, which is used when the complex data source is bound with dot-notation field names instead of nested columns:

```html
<ejs-querybuilder width="70%" [dataSource]="data" [rule]="importRules" separator=".">
    <e-columns>
      <e-column field="Employee.ID" label="Employee ID" type="number"></e-column>
      <e-column field="Name.LastName" label="Last Name" type="string"></e-column>
      <e-column field="Country.State.City" label="City" type="string"></e-column>
    </e-columns>
</ejs-querybuilder>
```
