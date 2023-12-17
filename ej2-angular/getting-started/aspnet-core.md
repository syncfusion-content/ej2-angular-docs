---
layout: post
title: Aspnet core with Angular Getting started component | Syncfusion
description:  Checkout and learn about Aspnet core with Angular Getting started component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Aspnet core 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started ASP.NET Core with Angular using Project Template

This document provides step-by-step instructions on how to create a simple ASP.NET Core application with the Angular Framework using the dotnet CLI and integrate with Syncfusion Angular UI components.

## Prerequisites

Before getting started with Syncfusion Angular Components in an ASP.NET Core with Angular project, check whether the following are installed on the developer machine. 

* [System requirements for Syncfusion Angular UI components](https://ej2.syncfusion.com/angular/documentation/system-requirement)
* [.NET 7.0 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)

## Create an application

Create an ASP.NET Core application with Angular using the dotnet CLI.

1. Open the command prompt at your preferred location, and run the following command to create an ASP.NET Core application with Angular.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

dotnet new angular -o Syncfusion-ASP.NET-Core-Angular

{% endhighlight %}
{% endtabs %}

2.Navigate to the application folder using the following command.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd Syncfusion-ASP.NET-Core-Angular

{% endhighlight %}
{% endtabs %}

3.Set an environment variable called `ASPNETCORE_ENVIRONMENT` with a value of `Development` on Windows, run the following command.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

SET ASPNETCORE_ENVIRONMENT=Development 

{% endhighlight %}
{% endtabs %}

>For Linux or macOS, run the `export ASPNETCORE_ENVIRONMENT=Development` in the terminal.

4.Now, run the build command to ensure the application builds correctly. During the initial run, the build process restores npm dependencies, which may take several minutes. Subsequent builds will be significantly faster.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

dotnet build

{% endhighlight %}
{% endtabs %}

5.The ASP.NET Core with angular project template is created successfully.

## Installing Syncfusion Grid Package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. Users can obtain all the Syncfusion Angular packages from the npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Navigate to the ClientApp folder and install the Syncfusion Angular DataGrid package using the following commands.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ClientApp

npm install @syncfusion/ej2-angular-grids --save

{% endhighlight %}
{% endtabs %}

## Adding Grid Module

After installing the package, users can configure the component modules in your application from the Syncfusion installed package. Open the `~/src/app.module.ts` file in the `ClientApp` folder using Visual Studio Code or your preferred code editor, and refer to the following code snippet to import the Grid module.

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

## Adding Syncfusion Component

Add the following grid component code snippet in the `~/src/home/home.component.ts` file as follows.

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

## Adding CSS reference

Syncfusion Angular components offer a variety of built-in [themes](../appearance/theme-studio/) that you can easily add to your project by importing the relevant css file from the `~/node_modules/@syncfusion` package. Add the following Grid component styles as shown in the `~/src/styles.css` file.

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

## Run the application

Navigate to the root directory, and execute the following commands to run the application.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ..

dotnet run

{% endhighlight %}
{% endtabs %}

![output](images/ang-cli.PNG)

N> [View the Angular Sample with ASP.NET Core on GitHub](https://github.com/SyncfusionExamples/ASP-.NET-Core-with-Angular-using-EJ2-controls)

## See also

* [How to create an ASP.NET Core with Angular project using the visual studio](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-angular?view=vs-2022)

* [Getting started with angular CLI](../getting-started/angular-cli/)
