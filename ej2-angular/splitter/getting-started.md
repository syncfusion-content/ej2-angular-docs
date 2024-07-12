---
layout: post
title: Getting started with Angular Splitter component | Syncfusion
description:  Checkout and learn about Getting started with Angular Splitter component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---
# Getting started with Angular Splitter component

The following section explains the steps required to create the Syncfusion's Angular Splitter component.
The Splitter component will make splittable layouts by placing separator in-between two panes. Based on the position of the separator you can adjust size of the splitter panes in the dynamic manner.

To get start quickly with Angular Splitter using CLI and Schematics, you can check on this video:
{% youtube "https://www.youtube.com/watch?v=fAWnD2lbsvQ" %}

## Getting Started with Angular CLI

The following section explains the steps required to create and configure basic angular-cli application.

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

By default, it install the CSS style base application. To setup with SCSS, pass --style=SCSS argument on create project.

Example code snippet.

```javascript

  ng new syncfusion-angular-app --style=SCSS

```

Navigate to the created project folder.

```javascript

  cd syncfusion-angular-app

```

## Installing Syncfusion Splitter package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-layouts`](https://www.npmjs.com/package/@syncfusion/ej2-angular-layouts/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-layouts --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-layouts@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-layouts/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-layouts@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-layouts:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding Splitter component

Add the Splitter component snippet in `app.component.ts` as follows.

```typescript

import { FormsModule } from '@angular/forms'
import { SplitterModule } from '@syncfusion/ej2-angular-layouts'
import { Component } from '@angular/core';

@Component({
imports: [
         FormsModule, SplitterModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `
      <div id='container'>
        <ejs-splitter #horizontal height='110px' width='100%' >
            <e-panes>
              <e-pane></e-pane>
              <e-pane></e-pane>
            </e-panes>
        </ejs-splitter>
      </div>`
})
export class AppComponent {
    constructor() {
    }
}

```

Add following styles in corresponding css file. The below example contains styles in styles.css file,

```css

#container {
  margin: 50px auto;
}

```

## Adding CSS reference

The following CSS files are available in `../node_modules/@syncfusion` package folder. This can be referenced in [src/styles.css] using following code.

```css

      @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-icons/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-angular-layouts/styles/material.css';

```

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

## Load content to the pane

You can load the pane contents either as HTML element or string type using [content](https://ej2.syncfusion.com/angular/documentation/api/splitter/panePropertiesModel/#content) property.

For detailed information, refer to the [Pane Content](./pane-content/) section.

## Running the application

Run the `ng serve` command in command window, it will serve your application and you can open the browser window. Output will appear as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/getting-started-cs1" %}

## See Also

* [Construct different layouts using Splitter](./different-layouts)