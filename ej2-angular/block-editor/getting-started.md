---
layout: post
title: Getting Started with Angular Block Editor Component | Syncfusion
description: Checkout and learn about getting started with Syncfusion Essential Angular Block Editor component, its elements, and more details.
platform: ej2-angular
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Angular Block Editor Component

This guide explains how to create and configure the Block Editor component in a new Angular application.

## Dependencies

The list of dependencies required to use the Block Editor component in your application is given below:

```javascript
|-- @syncfusion/ej2-angular-blockeditor
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-inputs
```

## Set up Angular Environment

Use the [Angular CLI](https://github.com/angular/angular-cli) to set up your Angular applications. To install the Angular CLI globally, run the following command.

```
npm install -g @angular/cli
```

## Create an Angular Application

Create a new Angular application using the Angular CLI.

```
ng new my-app
cd my-app
```

## Install the Syncfusion<sup style="font-size:70%">&reg;</sup> Block Editor Package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can find all Syncfusion Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages on npm [link](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Syncfusion<sup style="font-size:70%">&reg;</sup>  provides two package structures for Angular components:

1.  **Ivy library distribution package**: For modern Angular applications.
2.  **Angular compatibility compiler (ngcc) package**: For legacy Angular applications.

### Ivy Library Distribution Package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (`>=20.2.36`) use the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and are compatible with Angular version 12 and newer.

Install the [`@syncfusion/ej2-angular-blockeditor`](https://www.npmjs.com/package/@syncfusion/ej2-angular-blockeditor/v/30.1.37) package with the following command.

```bash
npm install @syncfusion/ej2-angular-blockeditor --save
```

### Angular Compatibility Compiled (ngcc) Package

For applications using Angular versions below 12, use the legacy (ngcc) package. of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package use the below.

Install the [`@syncfusion/ej2-angular-blockeditor@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-blockeditor/v/30.1.37-ngcc) package with the following command.

```bash
npm install @syncfusion/ej2-angular-blockeditor@ngcc --save
```

To specify the ngcc package in the `package.json` file, add the `-ngcc` suffix to the package version.

```bash
@syncfusion/ej2-angular-blockeditor:"20.4.38-ngcc"
```

> **Note**: If the `--tag ngcc` is not specified during installation, the Ivy library package will be installed by default, which may cause compatibility issues in older Angular versions.

## Add CSS Reference

The following CSS files are available in `https://ej2.syncfusion.com/angular/documentation/node_modules/@syncfusion` package folder.
This can be referenced in [src/styles.css] using following code.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-angular-blockeditor/styles/material3.css';
```

## Add Syncfusion Block Editor Component

Modify the template in the [src/app/app.component.ts] file to render the Block Editor component. Add the Angular Block Editor by using the `<ejs-blockeditor>` selector in `template` section of the app.component.ts file.

```typescript

import { BlockEditorModule } from '@syncfusion/ej2-angular-blockeditor';
import { Component } from '@angular/core';

@Component({
    imports: [ BlockEditorModule ],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render BlockEditor component. -->
    <div class="container" style="width: 40px; margin: 50px auto;">
        <ejs-blockeditor />
    </div>`
})

export class AppComponent { }

```

## Run the Application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a default Block Editor component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/getting-started/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/getting-started/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/getting-started" %}