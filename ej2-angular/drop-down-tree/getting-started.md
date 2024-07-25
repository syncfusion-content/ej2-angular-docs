---
layout: post
title: Getting started with Angular Drop down tree component | Syncfusion
description:  Checkout and learn about Getting started with Angular Drop down tree component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Drop down tree component

This section explains you about how to create a simple **Dropdown Tree** component and configure its available functionalities in Angular.

## Dependencies

The following list of dependencies are required to use the Dropdown Tree component in your application.

```javascript
|-- @syncfusion/ej2-angular-dropdowns
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-ng-base
    |-- @syncfusion/ej2-dropdowns
        |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons

```

## Setup angular environment

Angular provides the easiest way to set angular CLI projects using [`Angular CLI`](https://github.com/angular/angular-cli) tool.

Install the CLI application globally to your machine.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion DropDownTree package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-dropdowns`](https://www.npmjs.com/package/@syncfusion/ej2-angular-dropdowns/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-dropdowns --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-dropdowns@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-dropdowns/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-dropdowns@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-dropdowns:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Registering Dropdown Tree Module

Import Dropdown Tree module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-dropdowns`.

```javascript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the DropDownTreeModule for the DropDownTree component
import { DropDownTreeModule } from '@syncfusion/ej2-angular-dropdowns';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of ej2-angular-dropdowns module into NgModule
  imports:      [ BrowserModule, DropDownTreeModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

## Adding CSS Reference

Add Dropdown Tree component's styles as given below in `styles.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-dropdowns/styles/material.css';
```

>Note: If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Add Dropdown Tree component

Modify the template in [src/app/app.component.ts] file to render the Dropdown Tree component. Add the Angular Dropdown Tree by using `ejs-dropdowntree` selector in `template` section of the app.component.ts file.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ejs-dropdowntree id='dropdowntree'></ejs-dropdowntree>`
})
export class AppComponent {}
```

## Binding data source

The Dropdown Tree component can load the data either from local data sources or remote data services. This can be done using the `dataSource` property that is a member of the `fields` property. The dataSource property supports array of JavaScript objects and DataManager. Here, an array of JSON values is passed to the Dropdown Tree component.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the DropDownTree component
    template: `<ejs-dropdowntree id='dropdowntree' [fields]='fields' placeholder='Select a Item'></ejs-dropdowntree>`
})
export class AppComponent {
    constructor() {
    }
    // defined the array of data
    public data: { [key: string]: Object }[] = [
     {
        nodeId: '01', nodeText: 'Music',
        nodeChild: [
            { nodeId: '01-01', nodeText: 'Gouttes.mp3' }
        ]
     },
     {
        nodeId: '02', nodeText: 'Videos', expanded: true,
        nodeChild: [
            { nodeId: '02-01', nodeText: 'Naturals.mp4' },
            { nodeId: '02-02', nodeText: 'Wild.mpeg' },
        ]
     },
     {
        nodeId: '03', nodeText: 'Documents',
        nodeChild: [
            { nodeId: '03-01', nodeText: 'Environment Pollution.docx' },
            { nodeId: '03-02', nodeText: 'Global Water, Sanitation, & Hygiene.docx' },
            { nodeId: '03-03', nodeText: 'Global Warming.ppt' },
            { nodeId: '03-04', nodeText: 'Social Network.pdf' },
            { nodeId: '03-05', nodeText: 'Youth Empowerment.pdf' },
        ]
     },
    ];
     //binding data source through fields property
    public fields: Object = { dataSource: this.data, value: 'nodeId', text: 'nodeText', child: 'nodeChild' };
}

```

## Run the application

After completing the configuration required to render a basic Dropdown Tree, run the following command to display the output in your default browser.

```javascript
ng serve --open
```

The following example illustrates the output in your browser.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdowntree/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdowntree/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdowntree/getting-started-cs1" %}