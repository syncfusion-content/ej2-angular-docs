---
layout: post
title: Getting Started with Angular Split Button Component | Syncfusion
description: Learn how to get started with the Syncfusion Angular Split Button component, including installation, configuration, and a basic example.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Split Button component

This section shows how to create a Split Button and demonstrates the basic usage of the component in an Angular application.

## Dependencies

The list of dependencies required to use the Split Button component in your application is:

```typescript
|-- @syncfusion/ej2-angular-splitbuttons
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-splitbuttons
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```

## Setup Angular environment

You can use the [Angular CLI](https://angular.dev/tools/cli) to set up Angular applications. To install the Angular CLI, use the following command:

```
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using the following Angular CLI commands.

```
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> SplitButton package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed on npm as `@syncfusion` scoped packages. You can browse all Syncfusion Angular packages on npm [here](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (>= 20.2.36) have been moved to the Ivy distribution to support the Angular [Ivy](https://angular.io/guide/ivy) rendering engine, and the packages are compatible with Angular version 12 and above. To download the package, use the following command.

Add [`@syncfusion/ej2-angular-splitbuttons`](https://www.npmjs.com/package/@syncfusion/ej2-angular-splitbuttons) package to the application.

```bash
npm install @syncfusion/ej2-angular-splitbuttons --save
```

### Angular compatibility compiled package(ngcc)

For Angular versions below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package, use the following command.

Add [`@syncfusion/ej2-angular-splitbuttons@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-splitbuttons/v/32.1.19-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-splitbuttons@ngcc --save
```

To reference the ngcc package in the `package.json` file, add the suffix `-ngcc` to the package version as shown below.

```bash
"@syncfusion/ej2-angular-splitbuttons": "32.1.19-ngcc"
```

> Note: If the ngcc tag is not specified while installing the package, the Ivy library package will be installed, and a warning will be shown.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> SplitButton component

Use the following snippet in the `src/app/app.ts` file to import the SplitButton component.

 ```ts
import { SplitButtonModule, ItemModel } from '@syncfusion/ej2-angular-splitbuttons';
import { Component } from '@angular/core';

@Component({
  imports: [SplitButtonModule],
  standalone: true,
  selector: 'app-root',
  template: `<div class="e-section-control">
      <!-- To render a Split Button. -->
    <ejs-splitbutton content="Paste" [items]='items'></ejs-splitbutton></div>`
})

export class AppComponent {
  public items: ItemModel[] = [
    { text: 'Cut' },
    { text: 'Copy' },
    { text: 'Paste' }
  ];
}
```

## Adding CSS reference

Add Split Button component styles as shown below in `styles.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a basic Split Button component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/split-button/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/split-button/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/split-button/getting-started-cs1" %}
