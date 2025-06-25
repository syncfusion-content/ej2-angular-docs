---
layout: post
title: Getting Started with Angular Block Editor Component | Syncfusion
description: Checkout and learn about getting started with Syncfusion Essential Angular Block Editor component, its elements, and more details.
platform: ej2-angular
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Block Editor component

This section explains how to create a default Block Editor component and demonstrate the basic usage of the Block Editor.

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

## Setup Angular environment

You can use [Angular CLI](https://github.com/angular/angular-cli) to setup your Angular applications. To install Angular CLI use the following command.

```
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using below Angular CLI command.

```
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Block Editor package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://v17.angular.io/guide/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-blockeditor`](https://www.npmjs.com/package/@syncfusion/ej2-angular-blockeditor/v/20.4.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-blockeditor --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-blockeditor@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-blockeditor/v/20.4.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-blockeditor@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-blockeditor:"20.4.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding CSS reference

The following CSS files are available in `../node_modules/@syncfusion` package folder.
This can be referenced in [src/styles.css] using following code.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-blockeditor/styles/material.css';
```

## Adding Syncfusion Block Editor component

Modify the template in [src/app/app.component.ts] file to render the Block Editor component. Add the Angular Block Editor by using `<ejs-blockeditor>` selector in `template` section of the app.component.ts file.

```typescript

import { BlockEditorModule } from '@syncfusion/ej2-angular-blockeditor';
import { Component } from '@angular/core';

@Component({
    imports: [ BlockEditorModule ],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render BlockEditor component. -->
    <div class="container" style="width: 40px; margin: 50px auto;">
        <div ejs-blockeditor></div>
    </div>`
})

export class AppComponent { }

```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a default Block Editor component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/getting-started/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/block-editor/getting-started/src/styles.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/getting-started/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/getting-started/index" %}