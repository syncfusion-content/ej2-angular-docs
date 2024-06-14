---
layout: post
title: Getting started with Angular TreeGrid component | Syncfusion
description:  Checkout and learn about Getting started with Angular TreeGrid component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular TreeGrid component

This section explains the steps required to create a simple Essential JS 2 TreeGrid and demonstrates the basic usage of the [`Angular Tree Grid control`](https://www.syncfusion.com/angular-components/angular-tree-grid) in a Angular CLI application.

To get start quickly with Angular TreeGrid using CLI and Schematics, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=2LJKv7rao6Y" %}

## Setup Angular Environment

You can use the [`Angular CLI`](https://github.com/angular/angular-cli) to setup your Angular applications.
To install Angular CLI use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using the Angular CLI command as follows.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion TreeGrid package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-treegrid`](https://www.npmjs.com/package/@syncfusion/ej2-angular-treegrid/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-treegrid --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-treegrid@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-treegrid/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-treegrid@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-treegrid:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Registering TreeGrid Module

Import TreeGrid module into the Angular application(app.component.ts) from the package `@syncfusion/ej2-angular-treegrid` [src/app/app.component.ts].

```typescript
import { Component } from '@angular/core';
// import the TreeGridModule for the TreeGrid component
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-root',
  standalone: true,
  //declaration of ej2-angular-treegrid module
  imports:      [ TreeGridModule ],
 templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { }

```

## Adding CSS reference

The following CSS files are available in `../node_modules/@syncfusion` package folder.
This can be referenced in [src/styles.css] using the following code.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import '../node_modules/@syncfusion/ej2-treegrid/styles/material.css';
```

## Add TreeGrid component

Modify the template in [src/app/app.component.ts] file to render the TreeGrid component.
Add the Angular TreeGrid by using `<ejs-treegrid>` selector in `template` section of the app.component.ts file.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  // specifies the template string for the TreeGrid component
  template: `<ejs-treegrid> </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    ngOnInit(): void {
    }
}

```

## Defining Row Data

Bind data for the TreeGrid component by using `dataSource` property.
It accepts either an array of JavaScript object or `DataManager` instance.

```typescript
import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data'> </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data: Object[];

    ngOnInit(): void {
        this.data = sampleData;
    }
}
```

## Defining Columns

The TreeGrid has an option to define the columns as an array. In these columns, the following properties are used to customize the columns.

* The `field` has been added to map with a property name in an array of JavaScript objects.
* The `headerText` has been added to change the title of columns.
* The `textAlign` has been used to change the alignment of columns. By default, columns will be left aligned. To change the columns to right align, define the `textAlign` to `Right`.
* Also, the another useful property, `format` has been used. Using this, you can format number and date values to standard or custom formats. Here it is defined for the conversion of date objects to formatted strings.

Tree Column is used to expand or collapse child rows is defined by using the [`treeColumnIndex`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#treecolumnindex) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/getting-started-cs1/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/getting-started-cs1" %}

In the above code example, the hierarchical data binding is represented in which the [`childMapping`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#childmapping) property denotes the hierarchy relationship; whereas in self-referencing data binding [`idMapping`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#idmapping) and [`parentIdMapping`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#parentidmapping) denotes the hierarchy relationship.

## Module injection

To create TreeGrid with additional features, inject the required modules. The following modules are used to extend TreeGrid's basic functionality.

* `PageService`- Inject this module to use paging feature.
* `SortService` - Inject this module to use sorting feature.
* `FilterService` - Inject this module to use filtering feature.
* `ExcelExportService` - Inject this module to use Excel export feature.
* `PdfExportService` - Inject this module to use PDF export feature.

These modules should be injected into the `providers` section of root `NgModule` or component class.

> Additional feature modules are available [here](./modules)

## Enable Paging

The paging feature enables users to view the TreeGrid record in a paged view. It can be enabled by setting the  [`allowPaging`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowpaging) property to true. Also, need to inject the `PageService` module in the `providers` section as follows. If the `PageService` module is not injected, the pager will not be rendered in the TreeGrid. The pager can be customized using the [`pageSettings`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#pagesettings) property.

In root-level paging mode, paging is based on the root-level rows only i.e., it ignores the child rows count and it can be enabled by using the [`pageSettings.pageSizeMode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettingsModel/#pagesizemode) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/getting-started-cs2/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/getting-started-cs2" %}

## Enable Sorting

The sorting feature enables the user to order the records. It can be enabled by setting [`allowSorting`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowsorting) property to true. 

Also, need to inject the `SortService` module in the provider section as follow. If we didn't inject the `SortService` module, then user not able to sort when click on headers.

Sorting feature can be customized using [sortSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#sortsettings) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/getting-started-cs3/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/getting-started-cs3" %}

## Enable Filtering

The filtering feature enables you to view the reduced amount of records based on the filter criteria. It can be enabled by setting the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowfiltering) property to true.  Also, need to inject the `FilterService` module in the provider section as follow. If `FilterService` module is not injected, filter bar will not be rendered in TreeGrid. Filtering feature can be customized using the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#filtersettings) property.

By default, filtered records are shown along with its parent records. This behavior can be changed by using the [filterSettings-hierarchyMode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettingsModel/#hierarchymode) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/getting-started-cs4/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/getting-started-cs4" %}

> You can render the records in a collapsed state in the initial render of the tree grid by enabling the [enableCollapseAll](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#enablecollapseall) property.

## Run the application

Use the following command to run the application in browser.

```javascript
ng serve --open
```

The output will appear as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/getting-started-cs5/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/getting-started-cs5" %}

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.

## Handling errors

Error handling in Tree Grid identifies exceptions and notifies them through the [actionFailure](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionfailure) event. When configuring the Tree Grid or enabling specific features through its API, mistakes can occur. The `actionFailure` event can be used to manage these errors. This event triggers when such mistakes happen. The `actionFailure` event handles various scenarios, including:

* For CRUD operations, row drag and drop, and persisiting the selection, ensure the [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#isprimarykey) property is mapped to a unique data column. Failure to do so will cause an error.
* [Paging](https://ej2.syncfusion.com/angular/documentation/treegrid/paging) is not supported with [virtualization](https://ej2.syncfusion.com/angular/documentation/treegrid/virtual-scroll). Enabling `paging` with `virtualization` will result in an error.
* To render the Tree Grid, map either the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#datasource) or [columns](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#columns) property. Failure to do so will result in an error.
* Freeze columns by mapping either [isFrozen](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnDirective/#isfrozen) or [frozenColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid#frozencolumns). Enabling both properties simultaneously will result in an error.
* The [detailTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid#detailtemplate) is not supported with `virtualization` and [stacked header](https://ej2.syncfusion.com/angular/documentation/treegrid/columns/column-headers#stacked-header). Enabling them with these features will result in an error.
* The [frozenRows](https://ej2.syncfusion.com/angular/documentation/api/treegrid#frozenrows) and `frozenColumns` are not supported with [rowtemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid#rowtemplate), `detailTemplate`, and [cell editing](https://ej2.syncfusion.com/angular/documentation/treegrid/editing/cell-editing). Enabling them with these features will result in an error.
* In `stacked header`, the [freeze](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnDirective/#freeze) direction is incompatible with [column reordering](https://ej2.syncfusion.com/angular/documentation/treegrid/columns/column-reorder).
* [Selection](https://ej2.syncfusion.com/angular/documentation/treegrid/selection/selection) functionality is not supported when using `rowTemplate`. Enabling both properties simultaneously will result in an error.
* Set the [treeColumnIndex](https://ej2.syncfusion.com/angular/documentation/api/treegrid#treecolumnindex) value to display the tree structure. Make sure the value does not exceed the total column count, or it will result in an error.
* For `virtualization` do not specify height and width in percentages. Using percentages will result in an error.
* When using the default filter ([filterbar](https://ej2.syncfusion.com/angular/documentation/treegrid/filtering/filter-bar)) type, do not apply the other [filterType](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterType/)  to columns within the same tree grid, as this will result in an error.
* In Tree Grid, avoid enabling [idMapping](https://ej2.syncfusion.com/angular/documentation/api/treegrid#idmapping) and [childMapping](https://ej2.syncfusion.com/angular/documentation/api/treegrid#childmapping) simultaneously. Enabling both properties at the same time will result in an error.
* The [showCheckbox](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnDirective/#showcheckbox) column should only be defined in the tree column. Defining it elsewhere will result in an error.
* The [textAlign](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnDirective/#textalign) right is not applicable for tree columns in the Tree Grid. Enabling right alignment for tree columns will result in an error.

The following code example shows how to use the [actionFailure](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionfailure) event in the Tree Grid control to display an exception when `isPrimaryKey`are not configured properly in the Tree Grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/error-handling/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/error-handling/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/error-handling/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/error-handling" %}

## See Also

* [Getting Started with JavaScript documentation](https://ej2.syncfusion.com/documentation/treegrid/getting-started)
* [Getting Started with JavaScript (ES5) documentation](https://ej2.syncfusion.com/javascript/documentation/treegrid/getting-started)
* [Getting Started with React documentation](https://ej2.syncfusion.com/react/documentation/treegrid/getting-started)
* [Getting Started with Vue documentation](https://ej2.syncfusion.com/vue/documentation/treegrid/getting-started)
* [Getting Started with ASP.NET Core documentation](https://ej2.syncfusion.com/aspnetcore/documentation/tree-grid/getting-started-core)
* [Getting Started with ASP.NET MVC documentation](https://ej2.syncfusion.com/aspnetmvc/documentation/tree-grid/getting-started-mvc)
* [Getting Started with Blazor documentation](https://blazor.syncfusion.com/documentation/treegrid/getting-started-webapp)
