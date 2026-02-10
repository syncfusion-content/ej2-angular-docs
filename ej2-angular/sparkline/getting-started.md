---
layout: post
title: Getting started with Angular Sparkline component | Syncfusion
description:  Checkout and learn about Getting started with Angular Sparkline component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Sparkline component

This section explains the steps required to create a Sparkline and demonstrates basic usage of the Sparkline control.

## Setup Angular Environment

Use the [`Angular CLI`](https://github.com/angular/angular-cli) to set up Angular applications. Install the CLI with the following command and ensure a compatible Node.js (LTS) and Angular version are installed; the `standalone: true` examples require Angular 14 or later. Verify compatibility between the installed Angular version and `@syncfusion/ej2-angular-charts`; Angular version 21 and above is recommended.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using the following Angular CLI commands.

```bash
ng new my-app
cd my-app
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Sparkline package

All Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published on the npm registry. To install the Sparkline package, use the following command. Verify the package's peer dependencies for Angular compatibility before installation.

```bash
npm install @syncfusion/ej2-angular-charts --save
```

> The **--save** will instruct NPM to include the sparkline package inside of the `dependencies` section of the `package.json`.

## Add Sparkline component

Modify the `app.component.ts` file to render the Sparkline component (`ejs-sparkline`). Ensure the component selector used in `index.html` matches the `selector` value defined in the component (for example `<app-root>` when `selector: 'app-root'`).
  ```javascript

import { SparklineModule } from '@syncfusion/ej2-angular-charts'
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
imports: [
      SparklineModule
    ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Sparkline component
    template: `<ejs-sparkline id='sparkline-container'></ejs-sparkline>`,
    encapsulation: ViewEncapsulation.None
  })
  export class AppComponent  { }

  ```

  <!-- markdownlint-disable MD033 -->

  Use the component selector defined in `app.component.ts` (for example `<app-root>`) in `index.html` so the root component mounts correctly.

  ```html
  <app-container></app-container>
  ```

Run the development server. Use `ng serve` for the Angular dev server. Alternatively, `npm start` works if a `start` script is configured in `package.json`.

  ```
  npm start
  ```

The below example shows a basic Sparkline.
```typescript

import { SparklineModule } from '@syncfusion/ej2-angular-charts'
import { Component } from '@angular/core';

@Component({
imports: [
      SparklineModule
    ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Sparkline component
    template: `<ejs-sparkline id='sparkline-container'></ejs-sparkline>`
  })
  export class AppComponent  { }

```

Because no `dataSource` is specified, the Sparkline renders an empty SVG element. To render a Sparkline provide a `dataSource` (an array of numbers or an array of objects) and map fields using `xName` and `yName`. For example, when using an array of objects such as `{ x: 'Jan', y: 10 }`, set `xName='x'` and `yName='y'`.

## Module Injection

Sparkline features are provided by optional services. To enable a feature, register its service either in the application module `providers` (module-based applications) or in a standalone component's `providers` array. Relevant services include:

* SparklineTooltipService - Inject this provider to enable tooltip support for the Sparkline.

The following examples demonstrate enabling tooltip support and other feature services. Import `SparklineTooltipService` from `@syncfusion/ej2-angular-charts` and provide it according to the application architecture (module providers or component `providers`).

  ```javascript

    import { SparklineModule, SparklineTooltipService } from '@syncfusion/ej2-angular-charts'
    import { Component } from '@angular/core';

    @Component({
      imports: [
        SparklineModule,
      ],
      standalone: true,
      providers: [ SparklineTooltipService ]
    })

  ```

## Bind data source to Sparkline

The `dataSource` property binds data to the Sparkline. This property accepts an array of primitive values or an array of objects. For object arrays, set `xName` and `yName` to map object fields to the Sparkline's X and Y values. Example data shape: `{ x: 'Jan', y: 10 }` with `xName='x'` and `yName='y'`.
[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs14" %}

## Change the type of Sparkline

We can change the Sparkline types by setting the [`type`] property as [`Line`],[`Column`],[`WinLoss`],[`Pie`],[`Area`]. Here, we have given the Sparkline type as [`Area`].

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs15" %}

## Enable tooltip for Sparkline

Sparkline will displays the sparkline details through tooltip, when the mouse is moved over the sparkline. You can enable tooltip by setting the [`visible`] property as true in [`tooltipSettings`] object and by injecting `SparklineTooltipService` module in the AppModule.

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs16" %}