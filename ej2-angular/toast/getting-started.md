---
layout: post
title: Getting started with Angular Toast component | Syncfusion
description: Get started with the Angular Toast component in Syncfusion. Learn how to set up an Angular project, install packages, add styles, and display a basic toast.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Toast component

This section briefly explains how to create a simple **Toast** and configure its available functionalities in Angular using the Angular CLI quickstart.

## Getting started with Angular CLI

The following section explains the steps required to create a simple `angular-cli` application and how to configure the `Toast` component.

### Prerequisites

To get started with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components, make sure that you have compatible versions of Angular and TypeScript.

* Angular : 6+
* TypeScript : 2.6+

## Dependencies

The following dependencies are required to use the Toast component in your application.

```javascript
|-- @syncfusion/ej2-angular-notifications
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-notifications
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-button
        |-- @syncfusion/ej2-popups
```

### Setting up an Angular project

Angular provides an easy way to set up a project using the [Angular CLI](https://github.com/angular/angular-cli) tool.

Install the CLI application globally on your machine.

```bash
npm install -g @angular/cli
```

### Create a new application

```bash
ng new syncfusion-angular-app
```

After running the above command, you may be asked the following options:
* Would you like to add Angular routing?
* Which stylesheet format would you like to use?

By default, it installs a CSS-based application. To set up with SCSS, pass the --style=scss argument when creating the project.

Example:

```bash
ng new syncfusion-angular-app --style=scss
```

Navigate to the created project folder.

```bash
cd syncfusion-angular-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Notifications package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed on npm as `@syncfusion` scoped packages. See the npm page for [Syncfusion Angular packages](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (`>=20.2.36`) have moved to the Ivy distribution to support the Angular [Ivy](https://v12.angular.io/guide/ivy) rendering engine, and the packages are compatible with Angular version 12 and above. To download the package, use the following command.

Add the [`@syncfusion/ej2-angular-notifications`](https://www.npmjs.com/package/@syncfusion/ej2-angular-notifications) package to the application.

```bash
npm install @syncfusion/ej2-angular-notifications --save
```

### Angular compatibility compiled package(ngcc)

For Angular versions below 12, use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package, use the following.

Add [`@syncfusion/ej2-angular-notifications@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-notifications/v/32.1.19-ngcc) to the application.

```bash
npm install @syncfusion/ej2-angular-notifications@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```json
"@syncfusion/ej2-angular-notifications": "32.1.19-ngcc"
```

> Note: If the ngcc tag is not specified while installing the package, the Ivy library package will be installed and this package may throw a warning.

## Adding Toast component

Use the following snippet in the `src/app/app.ts` file to import the Toast component.

```typescript
import { ToastModule } from '@syncfusion/ej2-angular-notifications'
import { Component, ViewChild } from '@angular/core';

@Component({
  imports: [ToastModule],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-toast #element (created)="onCreate()">
    <ng-template #title>
      <div>Sample Toast Title</div>
    </ng-template>
    <ng-template #content>
      <div>Sample Toast Content</div>
    </ng-template>
  </ejs-toast>`
})

export class App {
  @ViewChild('element') element: any;

  onCreate() {
    this.element.show();
  }
}
```

## Adding CSS reference

The following CSS files are available in the `../node_modules/@syncfusion` package folder. These can be referenced in `src/styles.css` using the following code.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-angular-notifications/styles/material3.css';
```

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

## Initialize the Toast with message

The Toast message can be rendered by defining a `title` or `content`.

## Running the application

Run the `ng serve` command in a command window; it will serve your application and you can open the browser window. The output will appear as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toast/toast-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs7" %}

## See Also

* [Render different types of toast](./how-to/show-different-types-of-toast)
