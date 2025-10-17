---
layout: post
title: Data binding in Angular Drop down list component | Syncfusion
description: Learn about binding data to the Syncfusion Angular DropDownList component from local and remote data sources.
platform: ej2-angular
control: Drop down list
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Angular DropDownList component

The DropDownList loads data from local data sources or remote data services through the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#datasource) property. It supports `array` and `DataManager` data types.

The DropDownList also supports different kinds of data services, such as OData, OData V4, and Web API, and data formats, such as XML, JSON, and JSONP, with the help of `DataManager` adapters.

| Fields | Type | Description |
|------|------|-------------|
| [text](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/fieldSettingsModel/#text) |  `string` | Specifies the display text of each list item. |
| [value](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/fieldSettingsModel/#value) |  `number` or `string` | Specifies the hidden data value mapped to each list item that should contain a unique value. |
| [groupBy](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/fieldSettingsModel/#groupby) |  `string` | Specifies the category under which the list item has to be grouped. |
| [iconCss](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/fieldSettingsModel/#iconcss) |  `string` | Specifies the icon class for each list item. |
| [disabled](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/fieldSettingsModel/#disabled) |
`string` | Defines whether the particular field value is disabled or not. |
| [htmlAttributes](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/fieldSettingsModel/#htmlattributes) | `string` | Allows additional attributes such as title, disabled, etc., to configure the elements in various ways to meet the criteria.

> When binding complex data to the DropDownList, ensure that the fields are mapped correctly. Otherwise, the selected item will be undefined.

## Binding local data

Local data can be bound to the DropDownList from different types of arrays as described below.

### 1. Array of simple data

The DropDownList supports loading an array of primitive data, such as strings and numbers. In this case, the [`value`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/fieldSettingsModel/#value) and [`text`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/fieldSettingsModel/#text) fields are mapped to the same field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/getting-started-cs2" %}

### 2. Binding to an array of objects

The DropDownList can generate its list items from an array of objects. To do this, map the appropriate data source columns to the [fields](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#fields) property.

In the following example, the `Id` and `Game` columns are mapped to the [`value`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/fieldSettingsModel/#value) and [`text`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/fieldSettingsModel/#text) fields, respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/getting-started-cs3" %}

### 3. Binding to an array of complex objects

The DropDownList can also be bound to an array of nested complex objects. To do this, provide the nested column name to the [`value`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/fieldSettingsModel/#value) and [`text`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/fieldSettingsModel/#text) fields.

In the following example, the `Code.Id` and `Country.Name` nested columns are mapped to the [`value`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/fieldSettingsModel/#value) and [`text`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/fieldSettingsModel/#text) fields, respectively.

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

The DropDownList supports retrieving data from remote data services with the help of the `DataManager` component. The [`Query`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#query) property is used to fetch data from the database and bind it to the DropDownList.

The following sample displays the first six contacts from the "Customers" table of the `Northwind` Data Service.

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

An `Observable` is used extensively by Angular since it provides significant benefits over other techniques for event handling, asynchronous programming, and handling multiple values.

The DropDownList data can be consumed from an `Observable` object by piping it through an `async` pipe. The `async` pipe subscribes to the observable object and resolves the latest value it has emitted.

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
* [How to group the data using header](./grouping)
* [How to filter the bound data](./filtering)
* [How to get the count of the data when using remote data](./how-to/remote-data-bind)
* [How to achieve cascading](./how-to/cascading)
* [How to add item in between the options](./how-to/add-item)
* [How to remove an item](./how-to/remove-item)