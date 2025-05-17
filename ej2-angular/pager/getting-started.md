---
layout: post
title: Getting started with Angular Pager component | Syncfusion
description:  Checkout and learn about Getting started with Angular Pager component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Pager component

This section explains you the steps required to create a simple Pager and demonstrate the basic usage of the Pager component in Angular environment.

## Setup Angular Environment

You can use [`Angular CLI`](https://github.com/angular/angular-cli) to setup your Angular applications.
To install Angular CLI use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion Pager package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-grids`](https://www.npmjs.com/package/@syncfusion/ej2-angular-grids/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-grids --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-grids@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-grids/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-grids@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-grids:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Registering Pager Module

Import Pager module into Angular application(app.module.ts) from the package **@syncfusion/ej2-angular-grids** [src/app/app.module.ts].

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagerModule} from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Adding CSS reference

The CSS files are available in ../node_modules/@syncfusion package folder. This can be referenced in [src/styles.css] using following code..

```css
@import '../node_modules/@syncfusion/ej2-angular-grids/styles/material.css';
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
```

## Adding Pager component

Modify the template in [src/app/app.component.ts] file to render the Angular pager component. Add the Angular pager by using `<ejs-pager>` selector in template section of the app.component.ts file.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  // specifies the template string for the Pager component
  template: `<ejs-pager [totalRecordsCount]='20'>
               </ejs-pager>`
})
export class AppComponent implements OnInit {
     ngOnInit(): void {
    }

}
```

## Page Size

`pageSize` value defines the number of records to be displayed per page. The default value for the `pageSize` is 12.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pager/pager-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pager/pager-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pager/pager-cs1" %}

## Page sizes

The [pageSizes](https://ej2.syncfusion.com/angular/documentation/api/pager/#pagesizes) property in the Syncfusion Pager component allows you to control the number of records displayed per page through a `DropDownList` integrated into the pager. This feature enhances the experience by providing flexibility in data viewing.

**Enabling Page Sizes**

To enable the `pageSizes` property, follow these steps:

1. Import the `PagerDropDown` and `Pager` modules from the Syncfusion Grid package.

2. Inject the `PagerDropDown` into the `Pager` module to enable the `DropDownList` in the pager.

3. Configure the `pageSizes` property by setting it to either **true** or providing an array of custom values to define the available page size options.

The following example demonstrates how to include the `pageSizes` property in the pager component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pager/pager-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pager/pager-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pager/pager-cs4" %}

> When the `pageSizes` property is set to **true**, it utilizes the default values.

## Page Count

`pageCount` value defines the number of pages to be displayed in the pager component for navigation.
The default value for `pageCount` is 10 and value will be updated based on [`totalRecordsCount`](https://ej2.syncfusion.com/angular/documentation/api/pager#totalrecordscount)
and [`pageSize`](#page-size) values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pager/pager-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pager/pager-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pager/pager-cs2" %}

## Run the application

The quickstart project is configured to compile and run the application in browser. Use the following command to run the application.

```javascript
ng serve --open
```

Output will be appears as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pager/pager-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pager/pager-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pager/pager-cs3" %}