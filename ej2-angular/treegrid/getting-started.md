---
layout: post
title: Getting started with Angular TreeGrid component | Syncfusion
description: Learn how to get started with the Angular TreeGrid component in Syncfusion Essential JS 2, including installation, configuration, and basic usage.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular TreeGrid component

This section outlines the steps required to create an Essential<sup style="font-size:70%">&reg;</sup> JS 2 TreeGrid and demonstrates basic usage of the [Angular TreeGrid control](https://www.syncfusion.com/angular-components/angular-tree-grid) within an Angular CLI application.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

To get started quickly with the Angular TreeGrid using CLI and Schematics, refer to the following video:

{% youtube "https://www.youtube.com/watch?v=2LJKv7rao6Y" %}

## Setup Angular environment

Use the [Angular CLI](https://github.com/angular/angular-cli) to set up Angular applications. To install Angular CLI, execute:

```bash
npm install -g @angular/cli
```
> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. For more information about the standalone architecture, refer to the [Standalone Guide](./angular-standalone).

### Installing a specific version
To install a particular version of Angular CLI, use:

```bash
npm install -g @angular/cli@21.0.0
```

## Create a new application

With Angular CLI installed, execute this command to generate a new application:

```bash
ng new syncfusion-angular-app
```

* This command will prompt to configure settings like enabling Angular routing and choosing a stylesheet format.

```bash

? Which stylesheet format would you like to use? (Use arrow keys)
> CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less            [ http://lesscss.org                                             ]

```

* By default, a CSS-based application is created. Use SCSS if required:

```bash
ng new syncfusion-angular-app --style=scss
```

* During project setup, when prompted for the Server-side rendering (SSR) option, choose the appropriate configuration.

![Initial_setup](images/SSR.png)

* Select the required AI tool or 'none' if you do not need any AI tool.

![Initial_setup](images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> Note: In Angular 19 and below, it uses `app.component.ts`, `app.component.html`, `app.component.css` etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular TreeGrid Component](https://www.syncfusion.com/angular-components/angular-tree-grid) for demonstration. Add the Angular TreeGrid component with:

```bash
ng add @syncfusion/ej2-angular-treegrid
```

This command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-treegrid` package and peer dependencies to your `package.json`.
- Import the TreeGrid component in your application.
- Register the default Syncfusion<sup style="font-size:70%">&reg;</sup> Material theme in `angular.json`.

For more details on version compatibility, refer to the [Version Compatibility](../upgrade/version-compatibility) section.

Syncfusion<sup style="font-size:70%">&reg;</sup> offers two package structures for Angular components:		
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)		
2. Angular compatibility compiler (ngcc), which is Angular's legacy compilation pipeline.		
Syncfusion<sup style="font-size:70%">&reg;</sup>'s latest Angular packages are provided as Ivy-compatible and suited for Angular 12 and above. To install the package, execute:		
```bash		
ng add @syncfusion/ej2-angular-treegrid	
```		
For applications not compiled with Ivy, use the `ngcc` tagged packages:		
> The ngcc packages are still compatible with Angular CLI versions 15 and below. However, they may generate warnings suggesting the use of Ivy compiled packages. Starting from Angular 16, support for the ngcc package has been completely removed. If you have further questions regarding ngcc compatibility, please refer to the following [FAQ](../common/troubleshooting/ngcc-compatibility).		
```bash		
npm add @syncfusion/ej2-angular-treegrid@32.1.19-ngcc		
```

## Registering TreeGrid module

Import the TreeGridModule from the `@syncfusion/ej2-angular-treegrid` package into the Angular application (`src/app/app.component.ts`).

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

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component themes can be added in various ways: via CSS or SCSS styles from npm packages, CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio).

The `Material` theme is added to your `styles.css` when you run `ng add` (this happens automatically by default).

To stylize only specific Syncfusion<sup style="font-size:70%">&reg;</sup> components, import the necessary styles. For example, to style only the TreeGrid component:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-treegrid/styles/material3.css';
```

> Ensure that the import order aligns with the component's dependency sequence.

For using SCSS styles, refer to [this guide](../common/how-to/sass).

## Add TreeGrid component

Modify the template in `src/app/app.ts` to render the TreeGrid component. Add the Angular TreeGrid by using `<ejs-treegrid>` selector in **template** section of the app.component.ts file.

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

Bind data to the TreeGrid using the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/treegrid/index-default#datasource) property. This accepts an array of JavaScript objects or a [DataManager](https://ej2.syncfusion.com/angular/documentation/treegrid/data-binding/data-binding) instance.

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

* [field](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#field): Maps to a property in the data source.
* [headerText](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#headertext): Sets the column header title.
* [textAlign](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#textalign): Adjusts the column alignment (default is left; set to `Right` for right alignment).
* [format](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#format): Formats number and date values using standard or custom formats.

### Tree Column Index

The **tree column** is the column that displays the hierarchical structure with expand/collapse icons. Specify which column acts as the tree column using the [`treeColumnIndex`](https://ej2.syncfusion.com/angular/documentation/api/treegrid#treecolumnindex) property. This property accepts a zero-based column index (0 = first column, 1 = second column, etc.). For example, if the `treeColumnIndex` is set to 0, the first column will display the expand/collapse tree icons and hierarchical data. Only one column can be a tree column.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
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

In the above example, hierarchical data binding uses the [childMapping](https://ej2.syncfusion.com/angular/documentation/api/treegrid#childmapping) property to define hierarchy. For self-referencing data binding, use [idMapping](https://ej2.syncfusion.com/angular/documentation/api/treegrid#idmapping) and [parentIdMapping](https://ej2.syncfusion.com/angular/documentation/api/treegrid#parentidmapping) to establish hierarchy.

## Module injection

To create a TreeGrid with additional features, inject the required modules. The following modules extend the TreeGrid's basic functionality:

* **PageService** - Inject this service to enable paging features.
* **SortService** - Inject this service to enable sorting features.
* **FilterService** - Inject this service to enable filtering features.

These modules should be injected into the **providers** section of the root **NgModule** or component class.

> Additional feature modules are available [here](https://ej2.syncfusion.com/angular/documentation/treegrid/modules).

## Enable paging

Paging divides TreeGrid records into manageable pages, improving performance with large datasets. Enable paging by:

1. Setting the [allowPaging](https://ej2.syncfusion.com/angular/documentation/api/treegrid#allowpaging) property to `true`
2. Injecting the `PageService` module in the component's `providers` array

**Important:** If `PageService` is not injected, paging controls won't appear even if `allowPaging` is set to true.

**Example:**
```typescript
@Component({
  // ... other component properties
  providers: [PageService]
})
```

**Customizing the pager:** Use the [pageSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid#pagesettings) property to customize pager behavior (page size, page size options, etc.).

### Root-Level Paging Mode

By default, TreeGrid counts ALL records (parent and child) when calculating pages. In **root-level paging mode**, only parent-level rows are paged; child rows don't affect pagination. This is useful for large hierarchies where you want to show only 10 parent groups per page, regardless of how many children they have.

Enable root-level paging with the [pageSettings.pageSizeMode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettingsModel#pagesizemode) property set to `Root`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
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

Sorting allows records to be ordered. Set the [allowSorting](https://ej2.syncfusion.com/angular/documentation/api/treegrid#allowsorting) property to true and inject the `SortService` module. If `SortService` is not injected, sorting via headers is unavailable.

Customize sorting with the [`sortSettings`](https://ej2.syncfusion.com/angular/documentation/api/treegrid#sortsettings) property.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
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

Filtering displays a reduced subset of records based on criteria. Enable it by setting the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/treegrid#allowfiltering) property to true and injecting the `FilterService` module. If `FilterService` is not injected, the filter bar will not be rendered.

Customize filtering using the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid#filtersettings) property.

By default, filtered records are shown with their parent records. Modify this using [filterSettings.hierarchyMode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettingsModel#hierarchymode).

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
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

> To render records in a collapsed initial state, enable the [enableCollapseAll](https://ej2.syncfusion.com/angular/documentation/api/treegrid#enablecollapseall) property.

## Run the application

Start the application in a browser with:

```bash
ng serve --open
```

The output appears as follows.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
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

> For a complete feature overview, see the [Angular TreeGrid feature tour](https://www.syncfusion.com/angular-components/angular-tree-grid). Explore the [Angular TreeGrid example](https://ej2.syncfusion.com/angular/demos/#/tailwind3/treegrid/treegrid-overview) to learn how to present and manipulate data.

## Handling errors

TreeGrid identifies exceptions and notifies them through the [actionFailure](https://ej2.syncfusion.com/angular/documentation/api/treegrid#actionfailure) event. This event is triggered when errors occur due to incorrect configuration or invalid API usage. The `actionFailure` event handles scenarios such as:

* For CRUD operations, row drag-and-drop, and persistent selection, ensure the [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#isprimarykey) property is mapped to a unique data column.
* [Paging](https://ej2.syncfusion.com/angular/documentation/treegrid/paging) is not supported with [virtualization](https://ej2.syncfusion.com/angular/documentation/treegrid/virtual-scroll).
* Either the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/treegrid#datasource) or [columns](https://ej2.syncfusion.com/angular/documentation/api/treegrid#columns) property must be set to render TreeGrid.
* To freeze columns, use only [isFrozen](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnDirective#isfrozen) or [frozenColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid#frozencolumns), not both simultaneously.
* The [detailTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid#detailtemplate) is not supported with virtualization or [stacked header](https://ej2.syncfusion.com/angular/documentation/treegrid/columns/column-headers#stacked-header).
* [frozenRows](https://ej2.syncfusion.com/angular/documentation/api/treegrid#frozenrows) and `frozenColumns` are not supported with [rowTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid#rowtemplate), detailTemplate, or [cell editing](https://ej2.syncfusion.com/angular/documentation/treegrid/editing/inline-editing#cell-editing).
* With stacked header, the [freeze](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnDirective#freeze) direction cannot be used with [column reordering](https://ej2.syncfusion.com/angular/documentation/treegrid/columns/column-reorder).
* [Selection](https://ej2.syncfusion.com/angular/documentation/treegrid/selection/selection) is not supported when using rowTemplate.
* Ensure [treeColumnIndex](https://ej2.syncfusion.com/angular/documentation/api/treegrid#treecolumnindex) does not exceed the total number of columns.
* For virtualization, do not specify height and width in percentages.
* When using the default filter ([filter bar](https://ej2.syncfusion.com/angular/documentation/treegrid/filtering/filter-bar)), avoid mixing other filter types within the same TreeGrid.
* Do not enable both [idMapping](https://ej2.syncfusion.com/angular/documentation/api/treegrid#idmapping) and [childMapping](https://ej2.syncfusion.com/angular/documentation/api/treegrid#childmapping) at the same time.
* The [showCheckbox](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnDirective#showcheckbox) column must be defined only in the tree column.
* [textAlign](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnDirective#textalign) right is not applicable for tree columns.

The following example demonstrates use of the [actionFailure](https://ej2.syncfusion.com/angular/documentation/api/treegrid#actionfailure) event to display an exception for a missing `isPrimaryKey` configuration:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
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