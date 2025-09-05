---
layout: post
title: Data binding in Angular Multi select component | Syncfusion
description: Learn here all about Data binding in Syncfusion Angular Multi select component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data binding 
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Angular Multi select component

The MultiSelect component loads data from either local data sources or remote data services using the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#datasource) property. It supports data types of `array` or `DataManager`.

The MultiSelect component also supports different kinds of data services such as OData, OData V4, and Web API, and data formats such as XML, JSON, and JSONP with the help of `DataManager` adaptors.

| Fields | Type | Description |
|------|------|-------------|
| [text](https://ej2.syncfusion.com/angular/documentation/api/multi-select/fieldSettingsModel/#text) |  `string` | Specifies the display text of each list item. |
| [value](https://ej2.syncfusion.com/angular/documentation/api/multi-select/fieldSettingsModel/#value) |  `number or string` | Specifies the hidden data value mapped to each list item that should contain a unique value. |
| [groupBy](https://ej2.syncfusion.com/angular/documentation/api/multi-select/fieldSettingsModel/#groupby) |  `string` | Specifies the category under which the list item has to be grouped. |
| [iconCss](https://ej2.syncfusion.com/angular/documentation/api/multi-select/fieldSettingsModel/#iconcss) |  `string` | Specifies the icon class of each list item. |

> When binding complex data to the MultiSelect component, fields should be mapped correctly. Otherwise, the selected item remains undefined.

## Binding local data

Local data can be represented in two ways as described below.

### 1. Array of string

The MultiSelect component supports loading arrays of primitive data such as strings and numbers. Here, both value and text field act the same.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/getting-started-cs3" %}

### 2. Array of object

The MultiSelect component can generate its list items through an array of complex data. For this,
the appropriate columns should be mapped to the [fields](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#fields) property.

In the following example, `id` column and `sports` column from complex data have been mapped to the `value` field and `text` field, respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/getting-started-cs4" %}

### 3. Array of complex object

The MultiSelect component can generate its list items through an array of complex data with nested properties. For this,
the appropriate nested columns should be mapped to the [fields](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#fields) property using dot notation.

In the following example, `Code.Id` column and `Country.Name` column from complex data have been mapped to the [`value`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/fieldSettingsModel/#value) field and [`text`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/fieldSettingsModel/#text) field, respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/getting-started-cs5" %}

## Binding remote data

The MultiSelect component supports retrieval of data from remote data services with the help of
`DataManager` component. The [Query](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#query) property is used to fetch data from the database and bind it to the MultiSelect component.

The following sample displays the first 6 contacts from "Customers" table of the `Northwind` Data Service.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/getting-started-cs6" %}

## Data binding using Async pipe

An `Observable` is used extensively by Angular since it provides significant benefits over techniques for event handling, asynchronous programming, and handling multiple values.

MultiSelect component data can be consumed from an `Observable` object by piping it through an `async` pipe. The `async` pipe is used to subscribe to the observable object and resolve with the latest value emitted by it.

[app.component.ts]
```ts
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    // specifies the template string for the MultiSelect component with dataSource
    template: `<ejs-multiselect  id='customers2' formControlName="skillname" name="skillname" #remote2 [dataSource]='data | async'  [fields]='remoteFields' [placeholder]='remoteWaterMark' ></ejs-multiselect >`,
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

  // set the placeholder to MultiSelect input element
  public remoteWaterMark: string = 'Select a customer';
}
```

[app.module.ts]
```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MultiSelectModule} from '@syncfusion/ej2-angular-dropdowns';
import { AppComponent } from './app.component';
import { ReactiveFormsModule }   from '@angular/forms';
@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule,
    MultiSelectModule,
    HttpClientModule,
    ReactiveFormsModule
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

> [View Sample in Github](https://github.com/SyncfusionExamples/angular-multiselect-async-pipe)

## See Also

* [How to load data using template](./templates#item-template)
* [How to group the data using header](./grouping)
* [How to filter the bound data](./filtering)