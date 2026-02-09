---
layout: post
title: Getting started with Angular Message component | Syncfusion
description: Get started with the Angular Message component in Syncfusion. Learn how to set up an Angular project, install packages, add styles, and render a basic message.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Message component

This section explains the steps required to create a simple Angular Message component and configure its available functionalities.

## Setup Angular Environment

Use the [Angular CLI](https://github.com/angular/angular-cli) to set up Angular applications. To install Angular CLI, use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using the following Angular CLI command.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Notifications package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed on npm as `@syncfusion` scoped packages. See the npm page for [Syncfusion Angular packages](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).
Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components. They are:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format).
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (`>=20.2.36`) have moved to the Ivy distribution to support the Angular [Ivy](https://v12.angular.io/guide/ivy) rendering engine, and the packages are compatible with Angular version 12 and above. To download the package, use the following command.

Add the [`@syncfusion/ej2-angular-notifications`](https://www.npmjs.com/package/@syncfusion/ej2-angular-notifications) package to the application.

```bash
npm install @syncfusion/ej2-angular-notifications --save
```

### Angular compatibility compiled package(ngcc)

For Angular versions below 12, use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package, use the following command.

Add [`@syncfusion/ej2-angular-notifications@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-notifications/v/32.1.19-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-notifications@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as follows.

```json
"@syncfusion/ej2-angular-notifications": "32.1.19-ngcc"
```

> Note: If the ngcc tag is not specified while installing the package, the Ivy library package will be installed and this package may throw a warning.

## Adding CSS Reference

Add the Message component’s styles as shown in the following `styles.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-angular-notifications/styles/message/material3.css';
```

## Add Message component

Use the following snippet in the `src/app/app.ts` file to import the Message component.

```typescript
import { MessageModule } from '@syncfusion/ej2-angular-notifications';
import { Component } from '@angular/core';

@Component({
  imports: [MessageModule],
  standalone: true,
  selector: 'app-root',
  template: '<ejs-message content="Please read the comments carefully"></ejs-message>'
})
export class App { }
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