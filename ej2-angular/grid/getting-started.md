---
layout: post
title: Getting started with Angular Grid component | Syncfusion
description:  Checkout and learn about Getting started with Angular Grid component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Grid component

This section explains you the steps required to create a simple Grid and demonstrate the basic usage of the Grid component in an Angular environment.

To get start quickly with Angular Grid using CLI and Schematics, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=lk83TlHQ95c" %}

## Setup Angular Environment

You can use [Angular CLI](https://github.com/angular/angular-cli) to setup your Angular applications. To install Angular CLI use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
```

This command will prompt you for a few settings for the new project, such as whether to add Angular routing and which stylesheet format to use.

![Initial_setup](images/Initial-setup.png)

By default, it will create a CSS-based application.

Next, navigate to the created project folder:

```
cd my-app
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Grid package

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry.

To install Grid component, use the following command.

```bash
npm install @syncfusion/ej2-angular-grids --save
```

> The **--save** will instruct NPM to include the grid package inside of the **dependencies** section of the **package.json**.

## Adding CSS reference

The following CSS files are available in **../node_modules/@syncfusion** package folder.
This can be referenced in [src/styles.css] using following code.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-grids/styles/material.css';
```

## Add Grid component

Modify the template in [src/app/app.component.ts] file to render the grid component.
Add the Angular Grid by using `<ejs-grid>` selector in **template** section of the app.component.ts file.

```typescript
import { Component, OnInit } from '@angular/core';
import { GridModule } from '@syncfusion/ej2-angular-grids'

@Component({
    imports: [
      GridModule
    ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Grid component
    template: `<ejs-grid> </ejs-grid>`
})
export class AppComponent implements OnInit {

    ngOnInit(): void {
    }
}

```

## Defining Row Data

Bind data for the Grid component by using [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource) property. It accepts either array of JavaScript object or [DataManager](https://ej2.syncfusion.com/angular/documentation/grid/data-binding/data-binding) instance.

```typescript
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    imports: [
      GridModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data'> </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = data;
    }
}
```

Create a [src/app/datasource.ts] file and utilize the following dataset to provide JSON data for the grid component.

```typescript
export let data: Object[] = [
    {
        OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
        ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
        ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
    },
    {
        OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
        ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
        ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
    },
    {
        OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date(8367642e5),
        ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
        ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0
    },
    {
        OrderID: 10251, CustomerID: 'VICTE', EmployeeID: 3, OrderDate: new Date(8367642e5),
        ShipName: 'Victuailles en stock', ShipCity: 'Lyon', ShipAddress: '2, rue du Commerce',
        ShipRegion: 'CJ', ShipPostalCode: '69004', ShipCountry: 'France', Freight: 41.34, Verified: !0
    },
    {
        OrderID: 10252, CustomerID: 'SUPRD', EmployeeID: 4, OrderDate: new Date(8368506e5),
        ShipName: 'Suprêmes délices', ShipCity: 'Charleroi', ShipAddress: 'Boulevard Tirou, 255',
        ShipRegion: 'CJ', ShipPostalCode: 'B-6000', ShipCountry: 'Belgium', Freight: 51.3, Verified: !0
    },
    {
        OrderID: 10253, CustomerID: 'HANAR', EmployeeID: 3, OrderDate: new Date(836937e6),
        ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
        ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 58.17, Verified: !0
    },
    {
        OrderID: 10254, CustomerID: 'CHOPS', EmployeeID: 5, OrderDate: new Date(8370234e5),
        ShipName: 'Chop-suey Chinese', ShipCity: 'Bern', ShipAddress: 'Hauptstr. 31',
        ShipRegion: 'CJ', ShipPostalCode: '3012', ShipCountry: 'Switzerland', Freight: 22.98, Verified: !1
    },
    {
        OrderID: 10255, CustomerID: 'RICSU', EmployeeID: 9, OrderDate: new Date(8371098e5),
        ShipName: 'Richter Supermarkt', ShipCity: 'Genève', ShipAddress: 'Starenweg 5',
        ShipRegion: 'CJ', ShipPostalCode: '1204', ShipCountry: 'Switzerland', Freight: 148.33, Verified: !0
    },
    {
        OrderID: 10256, CustomerID: 'WELLI', EmployeeID: 3, OrderDate: new Date(837369e6),
        ShipName: 'Wellington Importadora', ShipCity: 'Resende', ShipAddress: 'Rua do Mercado, 12',
        ShipRegion: 'SP', ShipPostalCode: '08737-363', ShipCountry: 'Brazil', Freight: 13.97, Verified: !1
    },
    {
        OrderID: 10257, CustomerID: 'HILAA', EmployeeID: 4, OrderDate: new Date(8374554e5),
        ShipName: 'HILARION-Abastos', ShipCity: 'San Cristóbal', ShipAddress: 'Carrera 22 con Ave. Carlos Soublette #8-35',
        ShipRegion: 'Táchira', ShipPostalCode: '5022', ShipCountry: 'Venezuela', Freight: 81.91, Verified: !0
    },
    {
        OrderID: 10258, CustomerID: 'ERNSH', EmployeeID: 1, OrderDate: new Date(8375418e5),
        ShipName: 'Ernst Handel', ShipCity: 'Graz', ShipAddress: 'Kirchgasse 6',
        ShipRegion: 'CJ', ShipPostalCode: '8010', ShipCountry: 'Austria', Freight: 140.51, Verified: !0
    },
    {
        OrderID: 10259, CustomerID: 'CENTC', EmployeeID: 4, OrderDate: new Date(8376282e5),
        ShipName: 'Centro comercial Moctezuma', ShipCity: 'México D.F.', ShipAddress: 'Sierras de Granada 9993',
        ShipRegion: 'CJ', ShipPostalCode: '05022', ShipCountry: 'Mexico', Freight: 3.25, Verified: !1
    },
    {
        OrderID: 10260, CustomerID: 'OTTIK', EmployeeID: 4, OrderDate: new Date(8377146e5),
        ShipName: 'Ottilies Käseladen', ShipCity: 'Köln', ShipAddress: 'Mehrheimerstr. 369',
        ShipRegion: 'CJ', ShipPostalCode: '50739', ShipCountry: 'Germany', Freight: 55.09, Verified: !0
    },
    {
        OrderID: 10261, CustomerID: 'QUEDE', EmployeeID: 4, OrderDate: new Date(8377146e5),
        ShipName: 'Que Delícia', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua da Panificadora, 12',
        ShipRegion: 'RJ', ShipPostalCode: '02389-673', ShipCountry: 'Brazil', Freight: 3.05, Verified: !1
    },
    {
        OrderID: 10262, CustomerID: 'RATTC', EmployeeID: 8, OrderDate: new Date(8379738e5),
        ShipName: 'Rattlesnake Canyon Grocery', ShipCity: 'Albuquerque', ShipAddress: '2817 Milton Dr.',
        ShipRegion: 'NM', ShipPostalCode: '87110', ShipCountry: 'USA', Freight: 48.29, Verified: !0
    }];
```

## Defining Columns

The Grid has an option to define columns as directives. In these column directives, we have properties to customize columns.

Let’s check the properties used here:

* We have added [field](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#field) to map with a property name an array of JavaScript objects.
* We have added [headerText](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#headertext) to change the title of columns.
* We have used [textAlign](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#textalign) to change the alignment of columns.
By default, columns will be left aligned. To change columns to right align, we need to define [textAlign](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#textalign) as **Right**.
* Also, we have used another useful property, [format](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format).
Using this, we can format number and date values to standard or custom formats.
Here, we have defined it for the conversion of numeric values to currency.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging-cs1" %}

## Module Injection

To create grid with additional features, inject the required modules. The following modules are used to extend grid's basic functionality.

* **PageService** - Inject this provider to use paging feature.
* **SortService** - Inject this provider to use sorting feature.
* **FilterService** - Inject this provider to use filtering feature.
* **GroupService** - Inject this provider to use grouping feature.

These modules should be injected into the **providers** section of root **NgModule** or component class.

> Additional feature modules are available [here](https://ej2.syncfusion.com/angular/documentation/grid/module).

## Enable Paging

The paging feature enables users to view the Grid record in a paged view. It can be enabled by setting [allowPaging](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowpaging) property to true. Also, need to inject the **PageService** module in the provider section as follows. If we didn't inject the **PageService** module, then the pager will not be rendered in Grid. The pager can be customized using [pageSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/#pagesettings) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging-cs2" %}

## Enable Sorting

The sorting feature enables the user to order the records. It can be enabled by setting [allowSorting](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowsorting) property as true. Also, need to inject the **SortService** module in the provider section as follow. If we didn't inject the **SortService** module, then user not able to sort when click on headers. Sorting feature can be customized using [sortSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/#sortsettings) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/sorting-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/sorting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/sorting-cs1" %}

## Enable Filtering

The filtering feature enables the user to view the reduced amount of records based on filter criteria. It can be enabled by setting [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowfiltering) property as true. Also, need to inject the **FilterService** module in the provider section as follow. If we didn't inject the **FilterService** module, then filter bar will not be rendered in Grid. Filtering feature can be customized using [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/#filtersettings) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filtering-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filtering-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filtering-cs1" %}

## Enable Grouping

The grouping feature enables users to view the Grid record in a grouped view. It can be enabled by setting [allowGrouping](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowgrouping) property to true. Also, need to inject the **GroupService** module in the provider section as follow. If we didn't inject the **GroupService** module, then the group drop area will not be rendered in Grid. Grouping feature can be customized using [groupSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/#groupsettings) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping-cs2" %}

## Run the application

Use the following command to run the application in browser.

```javascript
ng serve --open
```

The output will appear as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping-cs3" %}

## See Also

* [How to get current query in Angular Grid](https://www.syncfusion.com/forums/147454/how-to-get-current-query-in-angular-grid)
* [Apply Grid Localization from external JSON file in Angular Grid](https://www.syncfusion.com/forums/144844/apply-grid-localization-from-external-json-file-in-angular-grid)
* [How to render the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid in jHipster spring boot Angular App](https://www.syncfusion.com/forums/156933/how-to-render-the-syncfusion-grid-in-jhipster-spring-boot-angular-app)
* [Calculate Height of Angular Grid](https://www.syncfusion.com/forums/151191/calculate-height-of-angular-grid)
* [How to set tabindex for input element and NumericTextBox in Angular Grid](https://www.syncfusion.com/forums/145969/how-to-prevent-columns-from-persisting-in-asp-net-mvc-grid)
* [How to toggle between List and Grid View in Angular?](https://support.syncfusion.com/kb/article/11667/how-to-toggle-between-list-and-grid-view-in-angular)
* [How to get started easily with an example of Syncfusion<sup style="font-size:70%">&reg;</sup> angular 6 data grid/datatable?](https://support.syncfusion.com/kb/article/10068/how-to-get-started-easily-with-an-example-of-syncfusion-angular-6-data-grid-datatable)
* [How to render Angular Grid with material theme](https://support.syncfusion.com/kb/article/11617/how-to-render-angular-grid-with-material-theme)
* [How to get started easily with Syncfusion<sup style="font-size:70%">&reg;</sup> angular 9 data grid?](https://support.syncfusion.com/kb/article/9726/how-to-get-started-easily-with-syncfusion-angular-9-data-grid)
* [How to get started easily with Syncfusion<sup style="font-size:70%">&reg;</sup> angular 8 data grid?](https://support.syncfusion.com/kb/article/9761/how-to-get-started-easily-with-syncfusion-angular-8-data-grid)
* [How to handle errors in Angular Grid component?](https://support.syncfusion.com/kb/article/11649/how-to-handle-errors-in-angular-grid-component)
* [How to get started easily with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular 7 Data Grid/DataTable?](https://support.syncfusion.com/kb/article/11603/how-to-get-started-easily-with-syncfusion-angular-7-data-grid-datatable)
* [How to get started easily with an example of Syncfusion<sup style="font-size:70%">&reg;</sup> angular 5 data grid?](https://support.syncfusion.com/kb/article/8578/how-to-get-started-easily-with-an-example-of-syncfusion-angular-5-data-grid)
* [How to get started easily with Syncfusion<sup style="font-size:70%">&reg;</sup> angular 4 data grid?](https://support.syncfusion.com/kb/article/11670/how-to-get-started-easily-with-syncfusion-angular-4-data-grid)
