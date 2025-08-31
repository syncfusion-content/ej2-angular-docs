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

This guide demonstrates how to create an ASP.NET Core application with Angular integration and incorporate Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI components. This combination provides a powerful foundation for building modern web applications with a robust backend framework and responsive frontend components.

## Prerequisites

Before starting, ensure your development environment meets these requirements:

* [System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI components](https://ej2.syncfusion.com/angular/documentation/system-requirement)
* [.NET 7.0 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)

## Understanding ASP.NET Core with Angular

ASP.NET Core with Angular combines Microsoft's server-side framework with Google's client-side framework to create full-stack web applications. The template provides:

- ASP.NET Core backend for API endpoints, authentication, and business logic
- Angular frontend for interactive user interfaces
- Seamless integration between both frameworks with proxy configuration
- Webpack for building and bundling client assets

## Create an Application

Follow these steps to create an ASP.NET Core application with Angular integration:

1. Open the command prompt in your desired directory and run the following command:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

dotnet new angular -o Syncfusion-ASP.NET-Core-Angular

{% endhighlight %}
{% endtabs %}

2. Navigate to the application folder:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd Syncfusion-ASP.NET-Core-Angular

{% endhighlight %}
{% endtabs %}

3. Set the development environment variable:

**For Windows:**
{% tabs %}
{% highlight bash tabtitle="CMD" %}

SET ASPNETCORE_ENVIRONMENT=Development 

{% endhighlight %}
{% endtabs %}

**For Linux/macOS:**
{% tabs %}
{% highlight bash tabtitle="CMD" %}

export ASPNETCORE_ENVIRONMENT=Development

{% endhighlight %}
{% endtabs %}

4. Build the application to verify everything works correctly:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

dotnet build

{% endhighlight %}
{% endtabs %}

> Note: The initial build process restores npm dependencies, which may take several minutes. Subsequent builds will be faster.

5. After successful build, you'll have a project with the following structure:
   - `ClientApp/`: Contains the Angular application
   - `Controllers/`: Houses ASP.NET Core API controllers
   - `Pages/`: Contains Razor pages (if any)
   - `Program.cs`: Configures ASP.NET Core services and middleware

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Grid Package

To add Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components to your application:

1. Navigate to the ClientApp folder:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ClientApp

{% endhighlight %}
{% endtabs %}

2. Install the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular DataGrid package:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

npm install @syncfusion/ej2-angular-grids --save

{% endhighlight %}
{% endtabs %}

> All Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages are available under the `@syncfusion` scope. You can find the complete list of packages at [npmjs.com](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

## Adding Grid Module

Now, configure your Angular application to use the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component:

1. Open the `~/ClientApp/src/app/app.module.ts` file in your preferred code editor.
2. Import and register the Grid module:

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

Insert the following grid component code snippet in the `~/src/app/home/home.component.ts` file as follows.

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

This code:
- Creates a component with a Grid element (`<ejs-grid>`)
- Defines four columns with various configurations
- Provides sample data for the grid to display

## Adding CSS Reference

Add the required CSS files to style your Syncfusion<sup style="font-size:70%">&reg;</sup> components:

1. Open the `~/ClientApp/src/styles.css` file.
2. Add the following CSS imports:

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

These imports provide the Material theme styling for various UI components that the Grid depends on. The imports should be in this specific order to ensure proper styling.

## Run the Application

Return to the root directory and start your application:

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
