---
layout: post
title: Aspnet core with Angular Getting started component | Syncfusion
description:  Checkout and learn about Aspnet core with Angular Getting started component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Aspnet core 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ASP.NET Core and Angular using Project Template

This guide provides detailed instructions on creating a simple ASP.NET Core application with the Angular Framework using the dotnet CLI, integrating it with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI components.

## Prerequisites

Ensure the following prerequisites are installed on your development machine before you start using Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components in an ASP.NET Core with Angular project:

* [System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI components](https://ej2.syncfusion.com/angular/documentation/system-requirement)
* [.NET 7.0 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)

## Create an Application

Use the dotnet CLI to create an ASP.NET Core application with Angular:

1. Open the command prompt in your desired directory and run the following command to create an ASP.NET Core application with Angular.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

dotnet new angular -o Syncfusion-ASP.NET-Core-Angular

{% endhighlight %}
{% endtabs %}

2. Navigate to the application folder using the following command.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd Syncfusion-ASP.NET-Core-Angular

{% endhighlight %}
{% endtabs %}

3. On Windows, set the `ASPNETCORE_ENVIRONMENT` environment variable to `Development` by running:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

SET ASPNETCORE_ENVIRONMENT=Development 

{% endhighlight %}
{% endtabs %}

> For Linux or macOS, run the `export ASPNETCORE_ENVIRONMENT=Development` in the terminal.

4. Now, execute the build command to ensure the application builds correctly. During the initial run, the build process restores npm dependencies, which may take several minutes. Subsequent builds will be significantly faster.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

dotnet build

{% endhighlight %}
{% endtabs %}

5. The ASP.NET Core with Angular project template has been successfully created.

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Grid Package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available on npm under the `@syncfusion` scope. Access all Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages via this [npm link](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

To install the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular DataGrid package, navigate to the ClientApp folder and execute the following commands:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ClientApp

npm install @syncfusion/ej2-angular-grids --save

{% endhighlight %}
{% endtabs %}

## Adding Grid Module

After installing the package, configure the component modules in your application using the installed Syncfusion<sup style="font-size:70%">&reg;</sup> package. Open the `~/src/app.module.ts` file located in the `ClientApp` folder using Visual Studio Code or your preferred code editor, and use the following code snippet to import the Grid module.

{% tabs %}
{% highlight ts tabtitle="app.module.ts" hl_lines="14 29" %}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

// Imported Syncfusion grid module from grids package
import { GridModule } from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    //Registering EJ2 grid module
    GridModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


{% endhighlight %}
{% endtabs %}

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Component

Insert the following grid component code snippet in the `~/src/home/home.component.ts` file as follows.

{% tabs %}
{% highlight ts tabtitle="home.component.ts" %}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <h1>
    Syncfusion Angular UI Grid!
  </h1>

  <ejs-grid [dataSource]='data'>
    <e-columns>
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
      <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
      <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
      <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
    </e-columns>
  </ejs-grid>
 `
})

export class HomeComponent {
  public data: Object[] = [
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
    }
  ];
}

{% endhighlight %}
{% endtabs %}

## Adding CSS Reference

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components come with a range of pre-built [themes](../appearance/theme-studio/) that are easily incorporated into your project. You can achieve this by importing the necessary CSS files directly from the `~/node_modules/@syncfusion` package. Below, you will find the styles specific to the Grid component, which need to be added to your `~/src/styles.css` file.

{% tabs %}
{% highlight css tabtitle="styles.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-grids/styles/material.css';

{% endhighlight %}
{% endtabs %}

## Run the Application

To run the application, navigate to the root directory and execute the following commands:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ..

dotnet run

{% endhighlight %}
{% endtabs %}

![output](images/ang-cli.PNG)

N> [Access the Angular Sample integrated with ASP.NET Core on GitHub](https://github.com/SyncfusionExamples/ASP-.NET-Core-with-Angular-using-EJ2-controls)

## See Also

- [Creating an ASP.NET Core with Angular project using Visual Studio](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-angular?view=vs-2022)
- [Getting Started with Angular CLI](../getting-started/angular-cli)
