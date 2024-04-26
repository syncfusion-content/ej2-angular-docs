---
layout: post
title: Getting started with Angular Message component | Syncfusion
description:  Checkout and learn about Getting started with Angular Message component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Message component

This section explains the steps required to create a simple Angular Message component and configure its available functionalities.

## Setup Angular Environment

Use [`Angular CLI`](https://github.com/angular/angular-cli) to setup the Angular applications. To install Angular CLI, use the following command.

```
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using the following Angular CLI command.

```
ng new my-app
cd my-app
```

## Installing Syncfusion Notification package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. Get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).
Currently, Syncfusion provides two types of package structures for Angular components. They are:
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format).
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package, use the following command.

Add [`@syncfusion/ej2-angular-notifications`](https://www.npmjs.com/package/@syncfusion/ej2-angular-notifications/v/20.3.47) package to the application.

```bash
npm install @syncfusion/ej2-angular-notifications --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package, use the following command.

Add [`@syncfusion/ej2-angular-notifications@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-notifications/v/20.3.47-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-notifications@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as follows.

```bash
@syncfusion/ej2-angular-notifications:"20.3.47-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding Message module

Import Message module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-notifications` [src/app/app.module.ts].

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Import the Message Module for the Message component
import { MessageModule } from '@syncfusion/ej2-angular-notifications';
import { AppComponent }  from './app.component';

@NgModule({
  //Declaration of the MessageModule module into NgModule
  imports:      [ BrowserModule, MessageModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

```

## Adding CSS Reference

Add Message component’s styles as given in the following `styles.css.`

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-notifications/styles/message/material.css';
```

## Add Message component

Modify the template in the [src/app/app.component.ts] file to render the Message component. Add the Angular Message by using the `<ejs-message>` selector in the `template` section of the app.component.ts file.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<ejs-message content="Please read the comments carefully"></ejs-message>'
})
export class AppComponent{
}
```

## Run the application

Use the following command to run the application in the browser.

```bash

ng serve --open
```

The output will appear as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/message/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/message/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/message/getting-started-cs1" %}