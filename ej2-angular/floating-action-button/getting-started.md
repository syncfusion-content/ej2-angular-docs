---
layout: post
title: Getting started with Angular Floating Action Button component | Syncfusion
description:  Check out and learn about getting started with the Angular Floating Action Button component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Floating Action Button component

This section explains how to create a simple Floating Action Button and demonstrates the basic usage of the Floating Action Button component in an Angular environment.

To get started quickly with the Angular Floating Action Button component, you can check out this video:

{% youtube "https://www.youtube.com/watch?v=Ok7F9jm6DrU" %}

## Dependencies

The list of dependencies required to use the Floating Action Button component in your application is given below:

```typescript
|-- @syncfusion/ej2-angular-buttons
  |-- @syncfusion/ej2-angular-base
  |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-base
```

## Set up Angular environment

You can use [Angular CLI](https://github.com/angular/angular-cli) to set up Angular applications. To install Angular CLI, use the following command.

```
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using the following Angular CLI commands.

```
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Buttons package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy Library Distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (>= 20.2.36) have moved to the Ivy distribution to support the Angular [Ivy](https://angular.dev/guide/ivy) rendering engine, and the packages are compatible with Angular version 12 and above. To download the package, use the following command.

Add [`@syncfusion/ej2-angular-buttons`](https://www.npmjs.com/package/@syncfusion/ej2-angular-buttons) package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons --save
```

### Angular Compatibility Compiled Package(ngcc)

For Angular versions below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. Use the following command to install the `ngcc` package.

Add [`@syncfusion/ej2-angular-buttons@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-buttons/v/32.1.19-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
"@syncfusion/ej2-angular-buttons": "32.1.19-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy library package will be installed, and a warning will be shown.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Floating Action Button component

Use the following snippet in the `src/app/app.ts` file to import the Floating Action Button component.

 ```ts
import { FabModule } from '@syncfusion/ej2-angular-buttons';
import { Component } from '@angular/core';

@Component({
  imports: [FabModule],
  standalone: true,
  selector: 'app-root',
  template: `
    <!-- To render Floating Action Button -->
    <button ejs-fab id='fab' content='Add'></button>`
})

export class AppComponent { }
```

## Add CSS reference

Add the Floating Action Button component styles in the `styles.css` file as shown below.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-icons/styles/material.css';
```

## Run the application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a basic Floating Action Button component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/floating-action-button/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/floating-action-button/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/floating-action-button/getting-started-cs1" %}

## Click event

The Floating Action Button triggers the `click` event when the button is clicked. Use this event to perform the required action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/floating-action-button/events-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/floating-action-button/events-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/floating-action-button/events-cs2" %}
