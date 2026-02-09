---
layout: post
title: Getting started with Angular Rating component | Syncfusion
description: Check out and learn how to get started with the Angular Rating component from Syncfusion Essential JS 2.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Rating component

This section explains how to create a default Rating and demonstrates the basic usage of the Rating module.

To get started quickly with the Angular Rating component, see the following video:
{% youtube "https://www.youtube.com/watch?v=PqverjTfSt8&ab_channel=Syncfusion%2CInc" %}

## Dependencies

The list of dependencies required to use the Rating module in your application is given below:

```javascript
|-- @syncfusion/ej2-angular-inputs
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-popups
```

## Setup Angular environment

Use the Angular CLI (https://angular.io/cli) to set up an Angular application. To install the Angular CLI, run:

```
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using the following Angular CLI commands.

```
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Rating package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed on npm as `@syncfusion` scoped packages. Find Syncfusion Angular packages on npm: https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-

Syncfusion<sup style="font-size:70%">&reg;</sup> provides two package formats for Angular components:
1. Ivy library distribution package [format](https://v12.angular.io/guide/ivy)
2. Angular compatibility compiler (ngcc) package (legacy compilation and rendering pipeline)

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (>=20.2.36) have been distributed as Ivy libraries to support the Angular Ivy rendering engine. These packages are compatible with Angular version 12 and above. To install the package, run:

Add [`@syncfusion/ej2-angular-inputs`](https://www.npmjs.com/package/@syncfusion/ej2-angular-inputs/v/32.1.19) package to the application.

```bash
npm install @syncfusion/ej2-angular-inputs --save
```

### Angular compatibility compiled package(ngcc)

For Angular versions below 12, use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To install the `ngcc` package, run:

Add [`@syncfusion/ej2-angular-inputs@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-inputs/v/32.1.19-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-inputs@ngcc --save
```

To specify the ngcc package in `package.json`, add the suffix `-ngcc` to the package version as shown below.

```bash
@syncfusion/ej2-angular-inputs:"32.1.19-ngcc"
```

>Note: If the ngcc suffix is not specified while installing the package, the Ivy library package will be installed and the installer may emit a warning.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Rating component

Use the following snippet in the `src/app/app.ts` file to import the Rating component.

```ts
import { FormsModule } from '@angular/forms';
import { RatingModule } from '@syncfusion/ej2-angular-inputs';
import { Component } from '@angular/core';

@Component({
  imports: [FormsModule, RatingModule],
  standalone: true,
  selector: 'app-root',
  template: `<!-- To render Rating. -->
    <input ejs-rating id="rating" />`
})

export class App { }
```

## Adding CSS reference

Add the Rating component's styles as shown below in `style.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a default Rating component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/getting-started/default-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/getting-started/default-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/getting-started/default-cs" %}

## Value

You can set the rating value by using the [`value`](https://ej2.syncfusion.com/angular/documentation/api/rating#value) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/getting-started/value-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/getting-started/value-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/getting-started/value-cs" %}
