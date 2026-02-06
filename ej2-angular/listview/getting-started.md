---
layout: post
title: Getting started with Angular ListView component | Syncfusion
description:  Checkout and learn about Getting started with Angular ListView component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: ListView
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular ListView component

The ListView component displays data in a list format with built-in support for headers, templates, grouping, and virtualization. It is available in the `@syncfusion/ej2-angular-lists` package, which provides comprehensive list management capabilities for Angular applications.

## Setup Angular Environment

You can use [`Angular CLI`](https://github.com/angular/angular-cli) to setup your Angular applications.
To install Angular CLI use the following command.

```bash
npm install -g @angular/cli
```

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

### Installing a specific version

To install a particular version of Angular CLI, use:

```bash
npm install -g @angular/cli@21.0.0
```

## Create a new application

With Angular CLI installed, execute this command to generate a new application:

```bash
ng new syncfusion-angular-app
```

* This command will prompt you to configure settings like enabling Angular routing and choosing a stylesheet format.

```bash

? Which stylesheet format would you like to use? (Use arrow keys)
> CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less            [ http://lesscss.org                                             ]

```
* By default, a CSS-based application is created. Use SCSS if required:

```bash
ng new syncfusion-angular-app --style=scss
```

* During project setup, when prompted for the Server-side rendering (SSR) option, choose the appropriate configuration.

![Initial_setup](images/SSR.png)

* Select the required AI tool or 'none' if you do not need any AI tool.

![Initial_setup](images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> Note: In Angular 19 and below, it uses `app.component.ts`, `app.component.html`, `app.component.css` etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).


## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> ListView package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular's legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) have been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the packages are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-lists`](https://www.npmjs.com/package/@syncfusion/ej2-angular-lists/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-lists --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package use the below command.

Add [`@syncfusion/ej2-angular-lists@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-lists/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-lists@ngcc --save
```

To mention the ngcc package in the **package.json** file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-lists:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding CSS Reference

Add ListView component styles as given below in **styles.css**.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-angular-lists/styles/material3.css";
```

Alternatively, you can import the styles directly relative to the node_modules folder based on your CSS file's location, as shown below:

```css
@import "node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "node_modules/@syncfusion/ej2-angular-lists/styles/material3.css";
```

If you are using `CheckList` behavior in ListView, add the `Button` component styles as given below in the `styles.css` file:

```css
@import "../node_modules/@syncfusion/ej2-angular-buttons/styles/material3.css";
```

> You can also use [CRG](https://crg.syncfusion.com/) to generate combined component styles.

## Add ListView component

Modify the template in **src/app/app.component.ts** file to render the ListView component.
Add the Angular ListView by using the `<ejs-listview>` selector in the `template` section of the **app.component.ts** file.

```typescript

import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { Component } from '@angular/core';

@Component({
    imports: [        
        ListViewModule
    ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the ListView component
    template: `<ejs-listview id='sample-list' [dataSource]='data'></ejs-listview>`
})

export class AppComponent {
    public data: Object[] = [
        { text: 'Artwork', id: '01' },
        { text: 'Abstract', id: '02' },
        { text: 'Modern Painting', id: '03' },
        { text: 'Ceramics', id: '04' },
        { text: 'Animation Art', id: '05' },
        { text: 'Oil Painting', id: '06' }
    ];
}

```

## Run the application

Use the following command to run the application in browser.

```javascript
ng serve --open
```

The output will appear as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/getting-started-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/getting-started-cs1" %}

## See Also

[Data Binding Types](./data-binding)

[ListView customization](./customizing-templates)

[Virtualization](./virtualization)