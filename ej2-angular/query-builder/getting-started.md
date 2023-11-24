---
layout: post
title: Getting Started with Angular Query Builder Component | Syncfusion
description: Checkout and learn about getting started with Angular Query Builder component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Query Builder component

This section explains how to create and demonstrate the basic usage of the [Angular Query Builder](https://www.syncfusion.com/angular-components/angular-query-builder) module.

## Dependencies

The list of dependencies required to use the Query Builder module in your application is given below:

```javascript
|-- @syncfusion/ej2-angular-querybuilder
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-querybuilder
    |-- @syncfusion/ej2-datamanager
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-calenders
    |-- @syncfusion/ej2-inputs
```

## Setup Angular environment

You can use [Angular CLI](https://github.com/angular/angular-cli) to setup your Angular applications. To install Angular CLI use the following command.

```
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using below Angular CLI command.

```
ng new my-app
cd my-app
```

## Installing Syncfusion Query Builder package

To install Query Builder package, use the following command.

```
npm install @syncfusion/ej2-angular-querybuilder --save
```

The above package installs [Query Builder dependencies](./getting-started#dependencies) which are required to render the component in the Angular environment.

## Adding Query Builder module

Import Query Builder module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-querybuilder`.

```typescript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importing QueryBuilderModule from ej2-angular-querybuilder package.
import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, QueryBuilderModule ], // Declaration of QueryBuilder module into NgModule.
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

```

## Adding Syncfusion Query Builder component

Modify the template in `app.component.ts` file to render the Angular Query Builder component.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<!-- To render Query Builder. -->
               <ejs-querybuilder width="70%">
                <e-columns>
                  <e-column field="EmployeeID" label="Employee ID" type="number"></e-column>
                  <e-column field="FirstName" label="First Name" type="string"></e-column>
                  <e-column field="TitleOfCourtesy" label="Title Of Courtesy" type="boolean" [values]="values"></e-column>
                  <e-column field="Title" label="Title" type="string"></e-column>
                  <e-column field="HireDate" label="Hire Date" type="date" format="dd/MM/yyyy"></e-column>
                  <e-column field="Country" label="Country" type="string"></e-column>
                  <e-column field="City" label="City" type="string"></e-column>
                </e-columns>
              </ejs-querybuilder>`
})
export class AppComponent  {
  public values: string[] = ['Mr.', 'Mrs.'];
}
```

## Adding CSS reference

Add Angular Query Builder component's styles as given below in `style.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import "../node_modules/@syncfusion/ej2-querybuilder/styles/material.css";
```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a basic Query Builder component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/default-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/query-builder/default-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/default-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/default-cs4" %}

## Rendering with rule

To render the Angular Query Builder component with rule, use the [`rule`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#rule) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/default-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/query-builder/default-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/default-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/default-cs5" %}

> You can also explore our [Angular Query Builder example](https://ej2.syncfusion.com/angular/demos/#/material/query-builder/default.html) that shows how to render the Query Builder in Angular.
