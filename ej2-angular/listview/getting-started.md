---
layout: post
title: Getting started with Angular Listview component | Syncfusion
description:  Checkout and learn about Getting started with Angular Listview component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Listview component

The ListView component is available in `@syncfusion/ej2-angular-lists` package. Utilize this package to render the ListView Component.

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

## Installing Syncfusion Listview package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-lists`](https://www.npmjs.com/package/@syncfusion/ej2-angular-lists/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-lists --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-lists@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-lists/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-lists@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-lists:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Registering ListView Module

Import ListView module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-lists` [src/app/app.module.ts].

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import Listview component Module
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of listview module into NgModule
  imports:      [ BrowserModule, ListViewModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

## Adding CSS Reference

* Add ListView component's styles as given below in `styles.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-angular-lists/styles/material.css";
```

* If you are using `CheckList` behaviour in ListView, we need to add `Button` component's styles as given below in `styles.css` file

```css
@import "../node_modules/@syncfusion/ej2-angular-buttons/styles/material.css";
```

> We can also use [CRG](https://crg.syncfusion.com/) to generate combined component styles.

## Add Listview component

Modify the template in [src/app/app.component.ts] file to render the listview component.
Add the Angular Listview by using `<ejs-listview>` selector in `template` section of the app.component.ts file.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  // specifies the template string for the Listview component
    template: `<ejs-listview id='sample-list' [dataSource]='data'></ejs-listview>`
})

export class AppComponent {
    public data: Object = [
    { text: 'Artwork', id: '01' },
    { text: 'Abstract', id: '02' },
    { text: 'Modern Painting', id: '03' },
    { text: 'Ceramics', id: '04' },
    { text: 'Animation Art', id: '05' },
    { text: 'Oil Painting', id: '06' }];
}

```

## Run the application

Use the following command to run the application in browser.

```javascript
ng serve --open
```

The output will appear as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/listview/getting-started-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/getting-started-cs1" %}

## See Also

[Data Binding Types](./data-binding)

[ListView customization](./customizing-templates)

[Virtualization](./virtualization)