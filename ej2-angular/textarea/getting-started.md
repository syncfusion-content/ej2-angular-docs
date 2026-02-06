---
layout: post
title: Getting started with Angular TextArea component | Syncfusion
description: Check out how to get started with the Angular TextArea component of Syncfusion Essential JS 2., including setup, configuration, and basic usage.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular TextArea component

This section explains how to create a simple TextArea component using the Angular CLI.

## Dependencies

The following list of dependencies are required to use the TextArea component in your application.

```js
|-- @syncfusion/ej2-angular-inputs
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-base
```

## Set up the Angular environment

Angular provides the easiest way to create Angular projects using the [`Angular CLI`](https://github.com/angular/angular-cli) tool.

Install the CLI application globally on your machine.

```bash
npm install -g @angular/cli
```

## Create a new application

```bash
ng new syncfusion-angular-textarea
```

By default, it installs a CSS-based application. To set up with SCSS, pass the --style=scss flag when creating the project.

Example:

```bash
ng new syncfusion-angular-textarea --style=scss
```

Navigate to the created project folder.

```bash
cd syncfusion-angular-textarea
```

## Installing syncfusion<sup style="font-size:70%">&reg;</sup> TextArea package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can find all Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages on npm: [Syncfusion Angular packages](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (`>=20.2.36`) have been moved to the Ivy distribution to support the Angular [Ivy](https://v12.angular.io/guide/ivy) rendering engine, and the packages are compatible with Angular version 12 and above. To download the package, use the following command.

Add [`@syncfusion/ej2-angular-inputs`](https://www.npmjs.com/package/@syncfusion/ej2-angular-inputs) package to the application.

```bash
npm install @syncfusion/ej2-angular-inputs --save
```

### Angular compatibility compiled package(ngcc)

For Angular versions below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package, use the following.

Add [`@syncfusion/ej2-angular-inputs@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-inputs/v/32.1.19-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-inputs@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-inputs:"32.1.19-ngcc"
```

> Note: If the `ngcc` tag is not specified while installing the package, the Ivy library package will be installed and the legacy Angular compiler may show a warning.

## Adding TextArea to the application

Use the following snippet in the `src/app/app.ts` file to import the TextArea component.

```ts
import { TextAreaModule } from '@syncfusion/ej2-angular-inputs';
import { Component } from '@angular/core';

@Component({
  imports: [TextAreaModule],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-textarea id="default"></ejs-textarea>`
})

export class App { }
```

## Adding CSS reference

The following CSS files are available in the `../node_modules/@syncfusion` package folder.
These can be referenced in [src/styles.css] using the following code.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
```

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.


## Running the application

After completing the configuration required to render a basic TextArea, run the following command to display the output in your default browser.

```
ng serve
```

The following example illustrates the output in your browser.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/default-textarea-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/default-textarea-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/default-textarea-cs1" %}

## Getting and setting values

Set the initial value of the TextArea component using the [`value`](https://ej2.syncfusion.com/angular/documentation/api/textarea/index-default#value) property:

```typescript
import { Component } from '@angular/core';
import { TextAreaModule } from '@syncfusion/ej2-angular-inputs';

@Component({
  imports: [TextAreaModule],
  standalone: true,
  selector: 'app-root',
  template: `<!-- To Render TextArea component. -->
    <div class='wrap'>
      <ejs-textarea id="default" value="Comments"></ejs-textarea>
    </div>`
})

export class App { }
```

* Alternatively, set the value of the TextArea using `ngModel`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextAreaModule } from '@syncfusion/ej2-angular-inputs';

@Component({
  imports: [TextAreaModule, FormsModule],
  standalone: true,
  selector: 'app-root',
  template: `<!-- To Render TextArea component. -->
    <div class='wrap'>
      <ejs-textarea id="default" [(ngModel)]="value"></ejs-textarea>
    </div>`
})

export class App {
  value: string = 'Comments';
}
```

* Retrieve the current value from the property bound via `ngModel`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextAreaModule } from '@syncfusion/ej2-angular-inputs';

@Component({
  imports: [TextAreaModule, FormsModule],
  standalone: true,
  selector: 'app-root',
  template: `
    <div class='wrap'>
      <ejs-textarea id="default" [(ngModel)]="value"></ejs-textarea>
      <button id="valuebtn" (click)="onButtonClick()">Get Value</button>
    </div>
  `
})
export class App {
  value: string = 'Comments'; // Set the initial value here

  onButtonClick() {
    // Get the value of the TextArea
    let textareaValue = this.value;
  }
}
```

* Retrieve the value from the [`change`](https://ej2.syncfusion.com/angular/documentation/api/textarea/index-default#change) event argument.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextAreaModule, ChangedEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
  imports: [TextAreaModule, FormsModule],
  standalone: true,
  selector: 'app-root',
  template: `<!-- To Render TextArea component. -->
    <div class="wrap">
      <ejs-textarea id='default' (change)="onChange($event)"></ejs-textarea>
    </div>`
})

export class App {
  public onChange(args: ChangedEventArgs) {
    // Get the value of the TextArea component
    let textareaValue = args.value;
  };
}
```
