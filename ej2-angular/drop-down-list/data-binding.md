---
layout: post
title: Data binding in Angular Drop down list component | Syncfusion
description: Learn here all about Data binding in Syncfusion Angular Drop down list component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data binding 
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Angular Drop down list component

The DropDownList loads the data either from local data sources or remote data services using the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/combo-box/#datasource) property. It supports the data type of `array` or `DataManager`.
remote data services using the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/combo-box/#datasource) property. It supports the data type of `array` or `DataManager`.

The DropDownList also supports different kinds of data services such as OData, OData V4, and Web API, and data formats such as XML, JSON, and JSONP with the help of `DataManager`adaptors.

| Fields | Type | Description |
|------|------|-------------|
| text |  `string` | Specifies the display text of each list item. |
| value |  `number or string` | Specifies the hidden data value mapped to each list item that should contain a unique value. |
| groupBy |  `string` | Specifies the category under which the list item has to be grouped. |
| iconCss |  `string` | Specifies the icon class of each list item. |

> When binding complex data to the DropDownList, fields should be mapped correctly. Otherwise, the selected item remains undefined.

## Binding local data

Local data can be represented in two ways as described below.

### 1. Array of simple data

The DropDownList has support to load array of primitive data such as strings and numbers. Here, both value and text field act the same.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/getting-started-cs2" %}

### 2. Array of JSON data

The DropDownList can generate its list items through an array of complex data. For this,
the appropriate columns should be mapped to the [fields](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#fields)
property.

In the following example, `Id` column and `Game` column from complex data have been mapped to the `value` field and `text` field, respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/getting-started-cs3" %}

### 3. Array of Complex data

The DropDownList can generate its list items through an array of complex data. For this,
the appropriate columns should be mapped to the [fields](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#fields) property.

In the following example, `Code.Id` column and `Country.Name` column from complex data have been mapped to the `value` field and `text` field, respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/getting-started-cs4" %}

## Binding remote data

The DropDownList supports retrieval of data from remote data services with the help
of `DataManager` component. The `Query` property is used to fetch data from the database and bind it to the DropDownList.

The following sample displays the first 6 contacts from “Customers” table of the `Northwind` Data Service.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/getting-started-cs5" %}

## Data binding using Async pipe

An `Observable` is used extensively by Angular since it provide significant benefits over techniques for event handling, asynchronous programming, and handling multiple values.

DropDownList data can be consumed from an `Observable` object by piping it through an `async` pipe. The `async` pipe is used to subscribe the observable object and resolve with the latest value emitted by it.

[app.component.ts]
```ts
import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    // specifies the template string for the DropDownList component with dataSource
    template: `<ejs-dropdownlist  id='customers2' formControlName="skillname" name="skillname" #remote2 [dataSource]='data | async'  [fields]='remoteFields' [placeholder]='remoteWaterMark' ></ejs-dropdownlist >`,
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

  // set the placeholder to DropDownList input element
  public remoteWaterMark: string = 'Select a customer';
}
```

[app.module.ts]
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropDownListModule, AutoCompleteModule} from '@syncfusion/ej2-angular-dropdowns';
import { AppComponent } from './app.component';
import {DialogModule} from '@syncfusion/ej2-angular-popups';
import { ReactiveFormsModule }   from '@angular/forms';
@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    DropDownListModule,
    AutoCompleteModule,
    DialogModule,
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
[View Sample in Github](https://github.com/SyncfusionExamples/ej2-angular-dropdownlist-async-pipe)

## See Also

* [How to load data using template](./templates#item-template)
* [How to group the data using header](./grouping/)
* [How to filter the bound data](./filtering/)
* [How to get the count of the data when using remote data](./how-to/remote-data-bind/)
* [How to achieve cascading](./how-to/cascading/)
* [How to add item in between the options](./how-to/add-item/)
* [How to remove an item](./how-to/remove-item/)