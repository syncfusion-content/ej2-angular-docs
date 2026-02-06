---
layout: post
title: Getting Started with Angular TreeView Component | Syncfusion
description:  Checkout and learn about getting started with Angular TreeView component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular TreeView Component

This section explains the steps required to create a simple [Angular TreeView](https://www.syncfusion.com/angular-components/angular-treeview) component and configure its available functionalities in your Angular application.

## Setup Angular Environment

You can use [`Angular CLI`](https://github.com/angular/angular-cli) to set up your Angular applications. To install Angular CLI, use the following command.

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

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> TreeView Package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages from npm [link](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler (Angular's legacy compilation and rendering pipeline) package

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) have been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine. The packages are compatible with Angular version 12 and above. To download the package, use the command below.

Add [`@syncfusion/ej2-angular-navigations`](https://www.npmjs.com/package/@syncfusion/ej2-angular-navigations/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-navigations --save
```

### Angular compatibility compiled package (ngcc)

For Angular versions below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package, use the command below.

Add [`@syncfusion/ej2-angular-navigations@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-navigations/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-navigations@ngcc --save
```

To specify the ngcc package in the **package.json** file, add the suffix `-ngcc` with the package version as shown below.

```bash
@syncfusion/ej2-angular-navigations:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will display a warning.

## Adding CSS Reference

Add the TreeView component's styles as given below in **styles.css**.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-angular-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
```

Alternatively, based on the location of your CSS file, you can import the styles as shown below:

```css
@import "node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "node_modules/@syncfusion/ej2-angular-navigations/styles/material3.css";
@import "node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "node_modules/@syncfusion/ej2-buttons/styles/material3.css";
```

>Note: If you want to refer to the combined component styles, make use of the [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Add TreeView component

Modify the template in the **src/app/app.component.ts** file to render the TreeView component. Add the Angular TreeView by using the `<ejs-treeview>` selector in the `template` section of the **app.component.ts** file.

```typescript
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations'
import { Component } from '@angular/core';

@Component({
imports: [
  TreeViewModule
],
standalone: true,
selector: 'app-root',
template: `<ejs-treeview id='treeelement'></ejs-treeview>`
})
export class AppComponent { }
```

## Binding data source

The TreeView can load data from either local data sources or remote data services. This is accomplished using the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/treeview/fieldsSettingsModel/#datasource) property that is a member of the `fields` property. The `dataSource` property supports array of JavaScript objects and `DataManager`. In this example, an array of JavaScript objects is passed to the TreeView component.

The `fields` property defines the mapping between your data source and the TreeView display. The key properties include `id` for unique identification, `text` for the display text, and `child` for nested hierarchical data structure.

```typescript
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations'
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
imports: [
  TreeViewModule
],
standalone: true,
selector: 'app-root',
template: `<ejs-treeview id='treeelement' [fields]='field'></ejs-treeview>`,
encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    constructor() {
    }
    // defined the array of data
    public hierarchicalData: Object[] = [
        { id: '01', name: 'Music', expanded: true,
            subChild: [
                {id: '01-01', name: 'Gouttes.mp3'}
            ]
        },
        {
            id: '02', name: 'Videos',
            subChild: [
                {id: '02-01', name: 'Naturals.mp4'},
                {id: '02-02', name: 'Wild.mpeg'}
            ]
        },
        {
            id: '03', name: 'Documents',
            subChild: [
                {id: '03-01', name: 'Environment Pollution.docx'},
                {id: '03-02', name: 'Global Water, Sanitation, & Hygiene.docx'},
                {id: '03-03', name: 'Global Warming.ppt'},
                {id: '03-04', name: 'Social Network.pdf'},
                {id: '03-05', name: 'Youth Empowerment.pdf'}
            ]
        }
    ];
    public field: Object = { dataSource: this.hierarchicalData, id: 'id', text: 'name', child: 'subChild' };
}
```

## Run the application

Use the following command to run the application in the browser.

```javascript
ng serve --open
```

The output will appear as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/getting-started-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/getting-started-cs8/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/getting-started-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/getting-started-cs8" %}

> You can also explore the [Angular TreeView](https://ej2.syncfusion.com/angular/demos/#/material3/treeview/default) example to learn how to present and manipulate data.

## See Also

* [How to customize TreeView as Accordion](./how-to/accordion-tree)

* [How to set tooltip for TreeView nodes](./how-to/set-tool-tip-for-tree-nodes)

* [How to filter nodes in TreeView](./how-to/filtering-tree-nodes)

* [How to get all the child nodes through parentID](./how-to/get-all-child-nodes)