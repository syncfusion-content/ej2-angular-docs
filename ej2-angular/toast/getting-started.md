---
layout: post
title: Getting started with Angular Toast component | Syncfusion
description:  Checkout and learn about Getting started with Angular Toast component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Toast component

This section briefly explains about how to create a simple **Toast** and configure its available functionalities in Angular using Angular quickstart.

## Getting Started with Angular CLI

The following section explains the steps required to create a simple `angular-cli` application and how to configure `Toast` component.

### Prerequisites

To get started with Syncfusion Angular UI Components, make sure that you have compatible versions of Angular and TypeScript.

* Angular : 6+
* TypeScript : 2.6+

### Setting up an Angular project

Angular provides an easiest way to setup project using Angular CLI [Angular CLI](https://github.com/angular/angular-cli) tool.

Install the CLI application globally in your machine.

```javascript

  npm install -g @angular/cli

```

### Create a new application

```javascript

  ng new syncfusion-angular-app

```

Once you have executed the above command you may ask for following options,
* Would you like to add Angular routing?
* Which stylesheet format would you like to use?

By default it install the CSS style base application. To setup with SCSS, pass --style=SCSS argument on create project.

Example code snippet.

```javascript

  ng new syncfusion-angular-app --style=SCSS

```

Navigate to the created project folder.

```javascript

  cd syncfusion-angular-app

```

## Installing Syncfusion notifications Package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-notifications`](https://www.npmjs.com/package/@syncfusion/ej2-angular-notifications/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-notifications --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-notifications@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-notifications/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-notifications@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-notifications:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding Toast module

After installing the package, the component modules are ready to configure in your application from installed syncfusion package. Syncfusion Angular package provides two different types of ngModules.

Refer to [Ng-Module](https://ej2.syncfusion.com/angular/documentation/common/ng-module) to learn about `ngModules`.

Refer the following snippet to import the `ToastModule` in `app.module.ts` from the `@syncfusion/ej2-angular-notifications`.

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Imported syncfusion ToastModule from ej2-angular-notifications package
import { ToastModule } from '@syncfusion/ej2-angular-notifications';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Registering EJ2 Toast Module
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## Adding Toast component

Add the Toast component snippet in `app.component.ts` as follows.

```typescript

import { Component, ViewChild } from '@angular/core';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';

@Component({
  selector: 'app-root',
  template: `<ejs-toast #element (created)="onCreate($event)">
    <ng-template #title>
      <div>Sample Toast Title</div>
    </ng-template>
    <ng-template #content>
      <div>Sample Toast Content</div>
    </ng-template>
    </ejs-toast>`
})

export class AppComponent {
  @ViewChild('element') element: ToastComponent;

    onCreate() {
    this.element.show();
  }

  constructor() {
  }
}

```

## Adding CSS reference

The following CSS files are available in `../node_modules/@syncfusion` package folder. This can be referenced in [src/styles.css] using following code.

```css

      @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-angular-notifications/styles/material.css';


```

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

## Initialize the Toast with message

The Toast message can be rendered by defining an `title` or `content`.

## Running the application

Run the `ng serve` command in command window, it will serve your application and you can open the browser window. Output will appear as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toast/toast-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/toast/toast-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs7" %}

## See Also

* [Render different types of toast](./how-to/show-different-types-of-toast)
