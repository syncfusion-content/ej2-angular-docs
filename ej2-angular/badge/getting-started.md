---
layout: post
title: Getting started with Angular Badge component | Syncfusion
description:  Checkout and learn about Getting started with Angular Badge component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Badge component

The following section explains the steps required to create a simple **Badge** component using styles and its basic usage.

## Setting up angular project

Angular provides the easiest way to set angular CLI projects using Angular CLI tool.

Install the CLI application globally to your machine by using following command.

```sh
npm install -g @angular/cli
```

Create a new angular application

```sh
ng new syncfusion-angular-app
```

Navigate to the created project folder by using following command.

```sh
cd syncfusion-angular-app
```

>Refer [Syncfusion Angular Getting Started](../getting-started/angular-cli) section to know more about setting up `angular-cli` project.

## Dependencies

The `Badge` component is pure CSS component which doesn't need specific dependencies to render.

```javascript
|-- @syncfusion/ej2-notifications
```

## Installing Syncfusion notifications Package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

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

## Adding style sheet to the application

To render the Badge component, import the Badge and its dependent component's styles as given below in `[src/styles.css]`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-notifications/styles/material.css';
```

>Note: To refer the combined component styles, use Syncfusion [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Add Badge into application

Modify the `template` in `app.component.ts` file to render the Badge component.

`[src/app/app.component.ts]`

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div id='element'><h1>Badge Component <span class="e-badge">New</span></h1></div>`
})

export class AppComponent {}
```

## Run the application

Run the application in the browser using the following command.

```html
npm start
```

The following example shows a basic badge component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/badge/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/badge/getting-started-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/badge/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/badge/getting-started-cs1" %}

> You can refer to our [Angular Badge](https://www.syncfusion.com/angular-components/angular-badge) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Badge example](https://ej2.syncfusion.com/angular/demos/#/material/badge/default) to knows how to present and manipulate data.
