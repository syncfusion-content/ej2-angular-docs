---
layout: post
title: Data Binding in Angular AutoComplete | Syncfusion®
description: Bind Angular AutoComplete to local arrays, complex objects, or remote services using OData, Web API, and DataManager with field mapping.
platform: ej2-angular
control: Data binding 
documentation: ug
domainurl: ##DomainURL##
---

# Data Binding in Angular AutoComplete

The AutoComplete loads the data either from local data sources or remote data services using the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#datasource) property. It supports the data type of array or `DataManager`.

The AutoComplete also supports different kinds of data services such as OData, OData V4, and Web API, and data formats such as XML, JSON, and JSONP with the help of `DataManager` adaptors.

| Fields | Type | Description |
|------|------|-------------|
| value |  `number or string` | Specifies the hidden data value mapped to each list item that should contain a unique value. |
| groupBy |  `string` | Specifies the category under which the list item has to be grouped. |
| iconCss |  `string` | Specifies the icon class of each list item. |

> While binding complex data to AutoComplete, fields should be mapped correctly. Otherwise, the selected item remains undefined.

## Bind to local data

Local data can be represented in three ways as described below.

### Array of string

The AutoComplete has support to load array of primitive data such as strings and numbers.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs2" %}

### Array of object

The AutoComplete can generate its list items through an array of complex data. To do so, map the appropriate columns to the [`fields`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#fields) property.

In the following example, the `Game` column from complex data is mapped to the `value` field.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs3" %}

### Array of complex object

The AutoComplete can generate its list items through an array of complex data. To do so, map the appropriate columns to the [`fields`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#fields) property using dot notation.

In the following example, the `Country.Name` column from complex data is mapped to the `value` field.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs4" %}

## Bind to remote data

The AutoComplete supports retrieval of data from remote data services with the help of the `DataManager`. The [`Query`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#query) property is used to fetch data from the database and bind it to the AutoComplete.

The following sample displays the first 6 contacts from the `Customers` table of the `Northwind` data service.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs5" %}

## Data binding using Async pipe

An `Observable` is used extensively by Angular since it provides significant benefits over techniques for event handling, asynchronous programming, and handling multiple values.

AutoComplete data can be consumed from an `Observable` object by piping it through an `async` pipe. The `async` pipe is used to subscribe to the observable object and resolve with the latest value emitted by it.

[app.component.ts]
```ts
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    // specifies the template string for the AutoComplete component with dataSource
    template: ` <ejs-autocomplete  id='customers2' #remote2 [dataSource]='data | async'  [fields]='remoteFields' [placeholder]='remoteWaterMark' ></ejs-autocomplete >`
})
export class AppComponent {
    constructor(private http: HttpClient){
      this.data=this.http.get<{[key: string]:object;}[]>('https://services.odata.org/V4/Northwind/Northwind.svc/Customers').pipe(
      map((results : {[key: string]:any;}) => {
        return results['value'];
      })
    );
  }

 public data: Observable<any>;

  // maps the remote data column to fields property
  public remoteFields: Object = { value: 'CustomerID' };

  // set the placeholder to AutoComplete input element
  public remoteWaterMark: string = 'Select a customer';
}
```

 [app.module.ts] 
 ```ts 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AutoCompleteModule} from '@syncfusion/ej2-angular-dropdowns';
import { AppComponent } from './app.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    AutoCompleteModule,
    HttpClientModule
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
 ```

[main.ts] 
 ```ts 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
 ```

 [View Samples in Github](https://github.com/SyncfusionExamples/angular-autocomplete-async-pipe)

## See Also

* [How to load data using template](./templates#item-template)
* [How to group the data using header](./grouping.md)
* [How to filter the bound data](./filtering.md)
