---
layout: post
title: Getting started with Angular Mention component | Syncfusion
description:  Checkout and learn about Getting started with Angular Mention component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Mention component

This section explains how to create a simple **Mention** component and demonstrates the basic usage of the Mention component in an Angular environment.

To get started quickly with angular Mention component using angular CLI, you can check the video below.

{% youtube "https://www.youtube.com/watch?v=CNsnT4i67Qw" %}

## Dependencies

The list of dependencies required to use the Mention component in your application is given below:

```javascript
|-- @syncfusion/ej2-angular-dropdowns
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-dropdowns
        |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-popups
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

## Installing Syncfusion Mention package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package, use the below command.

Add [`@syncfusion/ej2-angular-dropdowns`](https://www.npmjs.com/package/@syncfusion/ej2-angular-dropdowns/v/20.3.47) package to the application.

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
@syncfusion/ej2-angular-dropdowns:"20.3.47-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding CSS reference

The following CSS files are available in `../node_modules/@syncfusion` package folder. Add Mentions component's styles as given below in `style.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-angular-dropdowns/styles/bootstrap5.css';
```

## Adding Mention component

Modify the template in the [src/app/app.component.ts] file to render the Mention component. Add the Angular Mention by using `<ejs-mention>` selector in `template` section of the app.component.ts file. To use the Mention component properly, the [`target`](https://ej2.syncfusion.com/angular/documentation/api/mention/#target) property should be configured so that it renders the Mention component in the configured element.

```javascript

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MentionModule } from '@syncfusion/ej2-angular-dropdowns'
import { Component } from '@angular/core';

@Component({
imports: [
        FormsModule, ReactiveFormsModule, MentionModule
    ],
    standalone: true,
    selector: 'app-root',
    // Specifies the template string for the Mention component
    template: `
    <label id="comment" >Comments</label>
    <!--Element which is the Mention component's target to list the suggestions-->
    <div id="mentionElement" placeholder = "Type @ and tag user"></div>
    <ejs-mention [dataSource]='userData' [target]='mentionTarget'></ejs-mention>`
})
export class AppComponent {
    constructor() {
    }
    // Defines the array of data.
    public userData: string[] = ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph'];
    // Defines the target in which the Mention component is rendered.
    public mentionTarget: string = "#mentionElement";
}

```

## Binding data source

After initializing, populate the data in Mention using the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/mention/#datasource) property. Here, an array of string values is passed to the Mention component.

```typescript

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MentionModule } from '@syncfusion/ej2-angular-dropdowns'
import { Component } from '@angular/core';

@Component({
imports: [
        FormsModule, ReactiveFormsModule, MentionModule
    ],
    standalone: true,
    selector: 'app-root',
    // Specifies the template string for the Mention component
    template: `
    <label id="comment" >Comments</label>
    <!--Element which is the Mention component's target to list the suggestions-->
    <div id="mentionElement" placeholder = "Type @ and tag user"></div>
    <ejs-mention [dataSource]='userData' [target]='mentionTarget'></ejs-mention>`
})
export class AppComponent {
    constructor() {
    }
    // Defines the array of data.
    public userData: string[] = ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph'];
    // Defines the target in which the Mention component is rendered.
    public mentionTarget: string = "#mentionElement";
}

```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a basic `Mention` component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/mention/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/mention/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/mention/getting-started-cs6" %}

## Display Mention character

By using the [showMentionChar](https://ej2.syncfusion.com/angular/documentation/api/mention/#showMentionChar) property, the text content can be displayed along with the mention character. You can customize the mention character by using the [mentionChar](https://ej2.syncfusion.com/angular/documentation/api/mention/#mentionChar) property in the Mention component.

> By default, the [mentionChar](https://ej2.syncfusion.com/angular/documentation/api/mention/#mentionChar) is `@` and the [showMentionChar](https://ej2.syncfusion.com/angular/documentation/api/mention/#showMentionChar) property is disabled.

The following example displays the text content along with the mention character configured as `#`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/mention/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/mention/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/mention/getting-started-cs7" %}