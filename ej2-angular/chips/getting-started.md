---
layout: post
title: Getting started with Angular Chips component | Syncfusion
description:  Checkout and learn about Getting started with Angular Chips component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Chips component

This section explains the steps required to create a simple `Chips` and demonstrate the basic usage of the Chips component in an Angular environment.

## Setup Angular Environment

You can use [`Angular CLI`](https://github.com/angular/angular-cli) to setup your Angular applications.
To install Angular CLI, use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion Chips package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-buttons`](https://www.npmjs.com/package/@syncfusion/ej2-angular-buttons/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons --save
```

### Angular compatibility compiled package(ngcc)

For Angular versions below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-buttons@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-buttons/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-buttons:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding CSS reference

Add `Chips` component CSS using the following code in [`src/styles.css`].

```css
@import "../node_modules/@syncfusion/ej2-angular-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-angular-buttons/styles/material.css";
```

Alternatively, based on the location of your CSS file, you can import the styles as shown below:

```css
@import "node_modules/@syncfusion/ej2-angular-base/styles/material.css";
@import "node_modules/@syncfusion/ej2-angular-buttons/styles/material.css";
```

## Add Chips component

Modify the template in [src/app/app.component.ts] file to render the `Chips` component. Add the Angular `Chips` by using `<e-chip>` child selector with text attribute inside of `Chips` component selector `<ejs-chiplist>` in `template` section of the `app.component.ts` file.

```typescript

import { ChipListModule } from '@syncfusion/ej2-angular-buttons'
import { Component } from '@angular/core';

@Component({
imports: [
        
        ChipListModule
    ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Chips component
    template: `<ejs-chiplist text="Janet Leverling"></ejs-chiplist>`
})
export class AppComponent {

}

```

Now, the basic `Chips` is included in Angular CLI application.

## Run the application

Use the following command to run the application in the browser.

```javascript
ng serve --open
```

The output will appear as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/default-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/chips/default-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/default-cs1" %}
