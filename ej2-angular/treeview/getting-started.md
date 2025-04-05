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

This section explains the steps required to create a simple [Angular TreeView](https://www.syncfusion.com/angular-components/angular-treeview) component, and configure its available functionalities.

## Setup Angular Environment

You can use [`Angular CLI`](https://github.com/angular/angular-cli) to setup your Angular applications. To install Angular CLI use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> TreeView Package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-navigations`](https://www.npmjs.com/package/@syncfusion/ej2-angular-navigations/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-navigations --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-navigations@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-navigations/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-navigations@ngcc --save
```

To mention the ngcc package in the **package.json** file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-navigations:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding CSS Reference

* Add TreeView component's styles as given below in **styles.css**.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-angular-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
```

Alternatively, based on the location of your CSS file, you can import the styles as shown below:

```css
@import "node_modules/@syncfusion/ej2-base/styles/material.css";
@import "node_modules/@syncfusion/ej2-angular-navigations/styles/material.css";
@import "node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "node_modules/@syncfusion/ej2-buttons/styles/material.css";
```

>Note: If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Add TreeView component

Modify the template in **src/app/app.component.ts** file to render the TreeView component.
Add the Angular TreeView by using `<ejs-treeview>` selector in `template` section of the **app.component.ts** file.

```typescript

import { TreeViewModule } from '@syncfusion/ej2-angular-navigations'
import { Component } from '@angular/core';

@Component({
imports: [
  TreeViewModule
],
standalone: true,
selector: 'app-root',
template: `<ejs-treeview id='treeelement' ></ejs-treeview>`
})
export class AppComponent { }

```

## Binding data source

TreeView can load data either from local data sources or remote data services. This can be done using the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/treeview/fieldsSettingsModel/#datasource) property that is a member of the `fields` property. The `dataSource` property supports array of JavaScript objects and `DataManager`. Here, an array of JavaScript objects is passed to the TreeView component.

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
                {id: '01-01', name: 'Gouttes.mp3'},
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
                {id: '03-02', name: 'Social Network.pdf'},
                {id: '03-03', name: 'Youth Empowerment.pdf'},
            ]
        }
    ];
    public field:Object ={ dataSource: this.hierarchicalData, id: 'id', text: 'name', child: 'subChild' };
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

> You can also explore our [Angular TreeView](https://ej2.syncfusion.com/angular/demos/#/material/treeview/default) example to knows how to present and manipulate data.

## See Also

* [How to customize TreeView as Accordion](./how-to/accordion-tree)

* [How to set tooltip for TreeView nodes](./how-to/set-tool-tip-for-tree-nodes)

* [How to filter nodes in TreeView](./how-to/filtering-tree-nodes)

* [How to get all the child nodes through parentID](./how-to/get-all-child-nodes)
