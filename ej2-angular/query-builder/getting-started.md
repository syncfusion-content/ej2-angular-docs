---
layout: post
title: Getting started with Angular Query Builder component | Syncfusion
description:  Check out and learn how to get started with the Angular Query Builder component in Syncfusion, including setup, dependencies, and a basic example.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Query Builder component

This section explains how to create and use the [Angular Query Builder](https://www.syncfusion.com/angular-components/angular-query-builder) module.

## Dependencies

The list of dependencies required to use the Query Builder module in your application is given below:

```javascript
|-- @syncfusion/ej2-angular-querybuilder
  |-- @syncfusion/ej2-angular-base
  |-- @syncfusion/ej2-querybuilder
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-splitbuttons
```

## Set up Angular environment

You can use [Angular CLI](https://github.com/angular/angular-cli) to set up Angular applications. Use the following command to install Angular CLI.

```
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using the following Angular CLI commands.

```
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Query Builder package

To install the Query Builder package, use the following command.

```
npm install @syncfusion/ej2-angular-querybuilder --save
```

This package installs the [Query Builder dependencies](./getting-started#dependencies) which are required to render the component in the Angular environment.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Query Builder component

Use the following snippet in the `src/app/app.ts` file to import the Query Builder component.

```typescript
import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder';
import { Component } from '@angular/core';

@Component({
  imports: [QueryBuilderModule],
  standalone: true,
  selector: 'app-root',
  template: `<!-- To render Query Builder. -->
    <ejs-querybuilder width="70%">
    <e-columns>
      <e-column field="EmployeeID" label="Employee ID" type="number"></e-column>
      <e-column field="FirstName" label="First Name" type="string"></e-column>
      <e-column field="TitleOfCourtesy" label="Title Of Courtesy" type="string" [values]="values"></e-column>
      <e-column field="Title" label="Title" type="string"></e-column>
      <e-column field="HireDate" label="Hire Date" type="date" format="dd/MM/yyyy"></e-column>
      <e-column field="Country" label="Country" type="string"></e-column>
      <e-column field="City" label="City" type="string"></e-column>
    </e-columns>
  </ejs-querybuilder>`
})
export class App {
  public values: string[] = ['Mr.', 'Mrs.'];
}
```

## Adding CSS reference

Add Angular Query Builder component's styles as given below in `styles.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-angular-querybuilder/styles/material3.css";
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

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/default-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/default-cs4" %}

## Rendering with rule

To render the Angular Query Builder component with rule, use the [`rule`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#rule) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/default-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/default-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/default-cs5" %}

> You can also explore our [Angular Query Builder example](https://ej2.syncfusion.com/angular/demos/#/material3/query-builder/default) that shows how to render the Query Builder in Angular.
