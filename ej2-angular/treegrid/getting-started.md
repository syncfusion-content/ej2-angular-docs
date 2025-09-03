---
layout: post
title: Getting started with Angular TreeGrid component | Syncfusion
description: Learn how to get started with the Angular TreeGrid component in Syncfusion Essential JS 2, including installation, configuration, and basic usage in Angular CLI applications.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular TreeGrid component

This section outlines the steps required to create an Essential<sup style="font-size:70%">&reg;</sup> JS 2 TreeGrid and demonstrates basic usage of the [Angular TreeGrid control](https://www.syncfusion.com/angular-components/angular-tree-grid) within an Angular CLI application.

To get started quickly with the Angular TreeGrid using CLI and Schematics, refer to the following video:

{% youtube "https://www.youtube.com/watch?v=2LJKv7rao6Y" %}

## Setup Angular environment

Use the [Angular CLI](https://github.com/angular/angular-cli) to set up Angular applications. To install Angular CLI, execute:

```bash
npm install -g @angular/cli
```

## Create an Angular application

Create a new Angular application using the Angular CLI:

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed as `@syncfusion` scoped packages on npm. Find all Angular Syncfusion packages on [npm](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Syncfusion<sup style="font-size:70%">&reg;</sup> provides two package structures for Angular components:
1. Ivy library distribution package ([format](https://angular.dev/tools/libraries/angular-package-format))
2. Angular compatibility compiler (ngcc) package

### Ivy library distribution package

Syncfusion Angular packages (`>=20.2.36`) are distributed as Ivy packages, supporting the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and compatible with Angular version 12 and above. Install the package as follows:

Add [`@syncfusion/ej2-angular-treegrid`](https://www.npmjs.com/package/@syncfusion/ej2-angular-treegrid/v/20.2.38):

```bash
npm install @syncfusion/ej2-angular-treegrid --save
```

### Angular compatibility compiled package (ngcc)

For Angular versions below 12, use the legacy (ngcc) package. To install the ngcc package:

Add [`@syncfusion/ej2-angular-treegrid@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-treegrid/v/20.2.38-ngcc):

```bash
npm install @syncfusion/ej2-angular-treegrid@ngcc --save
```

To specify the ngcc package in `package.json`, add the `-ngcc` suffix as shown:

```bash
@syncfusion/ej2-angular-treegrid:"20.2.38-ngcc"
```

> Note: If the ngcc tag is not specified during installation, the Ivy library package will be installed by default.

## Registering TreeGrid module

Import the TreeGridModule from the `@syncfusion/ej2-angular-treegrid` package into the Angular application ([src/app/app.component.ts](src/app/app.component.ts)).

```typescript
import { Component } from '@angular/core';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ TreeGridModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { }
```

## Adding CSS references

The following CSS files are available in the `../node_modules/@syncfusion` package folder. Reference them in [src/styles.css]:

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

Modify the template in [src/app/app.component.ts] to render the TreeGrid component. Use the `<ejs-treegrid>` selector in the template section.

```typescript
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { Component, OnInit } from '@angular/core';

@Component({
    imports: [ TreeGridModule ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-treegrid></ejs-treegrid>`
})
export class AppComponent implements OnInit {
    ngOnInit(): void { }
}
```

## Defining row data

Bind data to the TreeGrid using the `dataSource` property. This accepts an array of JavaScript objects or a `DataManager` instance.

```typescript
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';

@Component({
    imports: [ TreeGridModule ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-treegrid [dataSource]='data'></ejs-treegrid>`
})
export class AppComponent implements OnInit {
    public data!: Object[];
    ngOnInit(): void {
        this.data = sampleData;
    }
}
```

## Defining columns

TreeGrid columns are defined as an array. The following properties customize columns:

* `field`: Maps to a property in the data source.
* `headerText`: Sets the column header title.
* `textAlign`: Adjusts the column alignment (default is left; set to `Right` for right alignment).
* `format`: Formats number and date values using standard or custom formats.

Tree column expansion/collapse is enabled using the [`treeColumnIndex`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#treecolumnindex) property.

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

In the above example, hierarchical data binding uses the [childMapping](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#childmapping) property to define hierarchy. For self-referencing data binding, use [idMapping](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#idmapping) and [parentIdMapping](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#parentidmapping) to establish hierarchy.

## Module injection

To enable additional TreeGrid features, inject the required modules:

* `PageService`: Enables paging.
* `SortService`: Enables sorting.
* `FilterService`: Enables filtering.
* `ExcelExportService`: Enables Excel export.
* `PdfExportService`: Enables PDF export.

Inject these modules in the `providers` section of the root `NgModule` or component class.

> Additional feature modules are listed [here](./modules)

## Enable paging

Paging provides a paged view of TreeGrid records. Enable it by setting the [allowPaging](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowpaging) property to true and injecting the `PageService` module. If `PageService` is not injected, the pager will not appear. Customize the pager using the [pageSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#pagesettings) property.

In root-level paging mode, only root-level rows are paged; child rows do not affect paging. Enable this using the [pageSettings.pageSizeMode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettingsModel/#pagesizemode) property.

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

## Enable sorting

Sorting allows records to be ordered. Set the [allowSorting](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowsorting) property to true and inject the `SortService` module. If `SortService` is not injected, sorting via headers is unavailable.

Customize sorting with the [`sortSettings`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#sortsettings) property.

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

## Enable filtering

Filtering displays a reduced subset of records based on criteria. Enable it by setting the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowfiltering) property to true and injecting the `FilterService` module. If `FilterService` is not injected, the filter bar will not be rendered.

Customize filtering using the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#filtersettings) property.

By default, filtered records are shown with their parent records. Modify this using [filterSettings.hierarchyMode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettingsModel/#hierarchymode).

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

> To render records in a collapsed initial state, enable the [enableCollapseAll](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#enablecollapseall) property.

## Run the application

Start the application in a browser with:

```bash
ng serve --open
```

The output appears as follows.

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

> For a complete feature overview, see the [Angular TreeGrid feature tour](https://www.syncfusion.com/angular-components/angular-tree-grid). Explore the [Angular TreeGrid example](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.

## Handling errors

TreeGrid identifies exceptions and notifies them through the [actionFailure](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionfailure) event. This event is triggered when errors occur due to incorrect configuration or invalid API usage. The `actionFailure` event handles scenarios such as:

* For CRUD operations, row drag-and-drop, and persistent selection, ensure the [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#isprimarykey) property is mapped to a unique data column.
* [Paging](https://ej2.syncfusion.com/angular/documentation/treegrid/paging) is not supported with [virtualization](https://ej2.syncfusion.com/angular/documentation/treegrid/virtual-scroll).
* Either the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#datasource) or [columns](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#columns) property must be set to render TreeGrid.
* To freeze columns, use only [isFrozen](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnDirective/#isfrozen) or [frozenColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid#frozencolumns), not both simultaneously.
* The [detailTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid#detailtemplate) is not supported with virtualization or [stacked header](https://ej2.syncfusion.com/angular/documentation/treegrid/columns/column-headers#stacked-header).
* [frozenRows](https://ej2.syncfusion.com/angular/documentation/api/treegrid#frozenrows) and `frozenColumns` are not supported with [rowTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid#rowtemplate), detailTemplate, or [cell editing](https://ej2.syncfusion.com/angular/documentation/treegrid/editing/cell-editing).
* With stacked header, the [freeze](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnDirective/#freeze) direction cannot be used with [column reordering](https://ej2.syncfusion.com/angular/documentation/treegrid/columns/column-reorder).
* [Selection](https://ej2.syncfusion.com/angular/documentation/treegrid/selection/selection) is not supported when using rowTemplate.
* Ensure [treeColumnIndex](https://ej2.syncfusion.com/angular/documentation/api/treegrid#treecolumnindex) does not exceed the total number of columns.
* For virtualization, do not specify height and width in percentages.
* When using the default filter ([filter bar](https://ej2.syncfusion.com/angular/documentation/treegrid/filtering/filter-bar)), avoid mixing other filter types within the same TreeGrid.
* Do not enable both [idMapping](https://ej2.syncfusion.com/angular/documentation/api/treegrid#idmapping) and [childMapping](https://ej2.syncfusion.com/angular/documentation/api/treegrid#childmapping) at the same time.
* The [showCheckbox](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnDirective/#showcheckbox) column must be defined only in the tree column.
* [textAlign](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnDirective/#textalign) right is not applicable for tree columns.

The following example demonstrates use of the [actionFailure](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionfailure) event to display an exception for a missing `isPrimaryKey` configuration:

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

## See also

* [Getting Started with JavaScript documentation](https://ej2.syncfusion.com/documentation/treegrid/getting-started)
* [Getting Started with JavaScript (ES5) documentation](https://ej2.syncfusion.com/javascript/documentation/treegrid/getting-started)
* [Getting Started with React documentation](https://ej2.syncfusion.com/react/documentation/treegrid/getting-started)
* [Getting Started with Vue documentation](https://ej2.syncfusion.com/vue/documentation/treegrid/getting-started)
* [Getting Started with ASP.NET Core documentation](https://ej2.syncfusion.com/aspnetcore/documentation/tree-grid/getting-started-core)
* [Getting Started with ASP.NET MVC documentation](https://ej2.syncfusion.com/aspnetmvc/documentation/tree-grid/getting-started-mvc)
* [Getting Started with Blazor documentation](https://blazor.syncfusion.com/documentation/treegrid/getting-started-webapp)
