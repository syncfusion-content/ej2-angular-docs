---
layout: post
title: Getting started with Angular RadioButton component | Syncfusion
description: Check out and learn about getting started with the Angular RadioButton component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular RadioButton component

This section explains how to create a simple RadioButton and demonstrates the basic usage of the RadioButton component in an Angular application.

## Dependencies

The following dependencies are required to use the RadioButton component in your application.

```typescript
|-- @syncfusion/ej2-angular-buttons
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-buttons
        |-- @syncfusion/ej2-base
```

## Setup Angular environment

You can use the [Angular CLI](https://v17.angular.io/cli) to set up Angular applications. To install Angular CLI, use the following command:

```
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using the following Angular CLI commands.

```
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> RadioButton package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can find all Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages on npm in this [listing](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (`>= 20.2.36`) have been moved to the Ivy distribution to support the Angular [Ivy](https://angular.io/guide/ivy) rendering engine, and the packages are compatible with Angular version 12 and above. To download the package, use the following command.

Add [`@syncfusion/ej2-angular-buttons`](https://www.npmjs.com/package/@syncfusion/ej2-angular-buttons) package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons --save
```

### Angular compatibility compiled package(ngcc)

For Angular versions below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package, use the following command.

Add [`@syncfusion/ej2-angular-buttons@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-buttons/v/32.1.19-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons@ngcc --save
```

To specify the ngcc package in the `package.json` file, add the suffix `-ngcc` to the package version as shown below.

```bash
@syncfusion/ej2-angular-buttons:"32.1.19-ngcc"
```

>Note: If the ngcc tag is not specified when installing the package, the Ivy library package will be installed and may display a warning.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> RadioButton component

Use the following snippet in the `src/app/app.ts` file to import the RadioButton component.

```typescript
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons'
import { Component } from '@angular/core';

@Component({
  imports: [RadioButtonModule],
  standalone: true,
  selector: 'app-root',
  template: `<!-- To Render RadioButton. -->
    <ejs-radiobutton label="Default"></ejs-radiobutton>`
})

export class AppComponent { }
```

## Adding CSS reference

Add the RadioButton component styles in `styles.css` as shown below.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a basic RadioButton component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/radio-button/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/radio-button/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/radio-button/getting-started-cs1" %}

## Change the RadioButton state

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 RadioButton has two visual states:
* Checked
* Unchecked

The RadioButton [`checked`](https://ej2.syncfusion.com/angular/documentation/api/radio-button/index-default#checked) property is used to control the checked and unchecked states.
In the checked state, an inner circle appears inside the RadioButton.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/radio-button/label-and-size-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/radio-button/label-and-size-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/radio-button/label-and-size-cs1" %}