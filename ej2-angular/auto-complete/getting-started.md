---
layout: post
title: Getting started with Angular Auto complete component | Syncfusion
description:  Checkout and learn about Getting started with Angular Auto complete component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Auto complete component

This section explains how to create a simple **AutoComplete** component and configure its available functionalities in Angular.

## Dependencies

The following list of dependencies are required to use the AutoComplete component in your application.

```javascript
|-- @syncfusion/ej2-angular-dropdowns
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-angular-base
```

## Setup angular environment

Angular provides the easiest way to set angular CLI projects using [`Angular CLI`](https://github.com/angular/angular-cli) tool.

Install the CLI application globally to your machine.

```bash
npm install -g @angular/cli
```

## Create a new application

```bash
ng new syncfusion-angular-autocomplete
```

By default, it install the CSS style base application. To setup with SCSS, pass --style=scss argument on create project.

Example code snippet.

```bash
ng new syncfusion-angular-autocomplete --style=scss
```

Navigate to the created project folder.

```bash
cd syncfusion-angular-autocomplete
```

## Installing Syncfusion AutoComplete package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-dropdowns`](https://www.npmjs.com/package/@syncfusion/ej2-angular-dropdowns/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-dropdowns --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-dropdowns@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-dropdowns/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-dropdowns@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-dropdowns:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Registering AutoComplete module

Import AutoComplete module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-dropdowns` [src/app/app.module.ts].

```javascript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the AutoCompleteModule for the AutoComplete component
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of ej2-angular-dropdowns module into NgModule
  imports:      [ BrowserModule, AutoCompleteModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

## Adding CSS reference

The following CSS files are available in `../node_modules/@syncfusion` package folder. This can be referenced in [src/styles.css] using following code.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-dropdowns/styles/material.css';
```

## Adding AutoComplete component

Modify the template in [src/app/app.component.ts] file to render the AutoComplete component.
Add the Angular Autocomplete by using `<ejs-autocomplete>` selector in `template` section of the app.component.ts file.

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // specifies the template string for the AutoComplete component
  template: `<ejs-autocomplete id='atcelement'></ejs-autocomplete>`
})
export class AppComponent  { }
```

## Binding data source

After initializing, populate the data in AutoComplete using [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#datasource) property. Here, an array of string values is passed to the AutoComplete component.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the AutoComplete component
    template: `<ejs-autocomplete id='atcelement' [dataSource]='sportsData'></ejs-autocomplete>`
})
export class AppComponent {
    constructor() {
    }
    // defined the array of data
    public sportsData: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
}

```

## Running the application

After completing the configuration required to render a basic AutoComplete, run the following command to display the output in your default browser.

```
ng serve
```

The following example illustrates the output in your browser.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/getting-started-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs11" %}

## Configure the popup list

By default, the width of the popup list automatically adjusts according to the DropDownList input element's width, and the height of the popup list has '300px'.

The height and width of the popup list can also be customized using the
[popupHeight](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#popupheight) &nbsp;and [popupWidth](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#popupwidth) properties respectively.

In the following sample, popup list's width and height are configured.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/getting-started-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs12" %}

## Two-way binding

In AutoComplete, the `value` property supports two-way binding functionality.

The following example demonstrates how to work with the two-way binding functionality in AutoComplete.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/getting-started-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs13" %}

## See Also

* [How to bind the data](./data-binding/)
