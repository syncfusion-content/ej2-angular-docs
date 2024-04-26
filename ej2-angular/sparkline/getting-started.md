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

This section explains you the steps required to create a Sparkline and demonstrate the basic usage of the Sparkline control.

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

## Adding Syncfusion Sparkline package

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

To install sparkline component, use the following command.

```bash
npm install @syncfusion/ej2-angular-charts --save
```

> The **--save** will instruct NPM to include the sparkline package inside of the `dependencies` section of the `package.json`.

## Registering Sparkline Module

* Import Sparkline module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-charts` [src/app/app.module.ts].

  ```typescript
  import { NgModule }      from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  // import the SparklineModule for the Sparkline component
  import { SparklineModule } from '@syncfusion/ej2-angular-charts';
  import { AppComponent }  from './app.component';

  @NgModule({
    //declaration of sparkline module into NgModule
    imports:      [ BrowserModule, SparklineModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
  })
  export class AppModule { }
  ```

Modify the template in `app.component.ts` file to render the `ej2-angular-charts` component `[src/app/app.component.ts]`.

  ```javascript
  import { Component, ViewEncapsulation } from '@angular/core';

  @Component({
    selector: 'app-container',
    // specifies the template string for the Sparkline component
    template: `<ejs-sparkline id='sparkline-container'></ejs-sparkline>`,
    encapsulation: ViewEncapsulation.None
  })
  export class AppComponent  { }
  ```

  <!-- markdownlint-disable MD033 -->

  Now use the <code>app-container</code> in the index.html instead of default one.

  ```html
  <app-container></app-container>
  ```

Now run the application in the browser using the below command.

  ```
  npm start
  ```

The below example shows a basic Sparkline.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    // specifies the template string for the Sparkline component
    template: `<ejs-sparkline id="sparkline-container"></ejs-sparkline>`
})
export class AppComponent {

}
```

As we didn't specify dataSource to the Sparkline, no shape will be rendered and only an empty SVG element is appended to the Sparkline container.

## Module Injection

Sparkline component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the AppModule. Find the relevant feature service available in Sparkline and its description as follows.

* SparklineTooltipService - Inject this provider to use tooltip series.

  In the current application, we are going to modify the above basic Sparkline to visualize the sparkline types.

  For this application we are going to use tooltip features of the Sparkline.
  Now import the SparklineTooltipService from Sparkline package and inject it into the AppModule.

  ```javascript

      import { NgModule } from '@angular/core';
      import { BrowserModule } from '@angular/platform-browser';
      import { AppComponent } from './app.component';
      import { SparklineComponent, SparklineTooltipService } from '@syncfusion/ej2-angular-charts';

      @NgModule({
          imports: [
              BrowserModule,
          ],
          declarations: [AppComponent, SparklineComponent],
          bootstrap: [AppComponent],
          providers: [ SparklineTooltipService ]
      })

  ```

## Bind data source to Sparkline

The [`dataSource`] property is used for binding data source to Sparkline. This property takes collection value as input. For example, the list of objects can be provided as input.

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