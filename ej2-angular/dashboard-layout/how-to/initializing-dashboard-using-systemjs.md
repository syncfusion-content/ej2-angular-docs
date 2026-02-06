---
layout: post
title: Angular Dashboard layout component with SystemJS | Syncfusion
description: Learn here all about Initializing dashboard using systemjs in Syncfusion Angular Dashboard layout component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dashboard Layout 
documentation: ug
domainurl: ##DomainURL##
---

# SystemJS Setup for Angular Dashboard Layout Component

The Dashboard Layout component can be initialized using `SystemJS` as follows.

## Installation and Configuration

### Setting up Basic Angular Application

To set up a basic Angular sample with `SystemJS` support, use the following commands:

    ```
      git clone https://github.com/angular/quickstart.git quickstart
      cd quickstart
      npm install
    ```

   For more information about Angular application setup, refer to the [Angular sample setup](https://v17.angular.io/guide/setup-local).


### Installing Dashboard Layout Package

Install the Syncfusion<sup style="font-size:70%">&reg;</sup> Dashboard Layout package using the following command:

    ```
      npm install @syncfusion/ej2-angular-layouts --save
    ```

   The above package installs [Dashboard Layout component dependencies](#dependencies) which are required to render the component in an Angular environment.

### SystemJS Configuration

Configure the Syncfusion<sup style="font-size:70%">&reg;</sup> [ej2-angular-layouts](#dependencies) packages need to be mapped in `systemjs.config.js` configuration file.

```javascript
/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/',
      "syncfusion:": "node_modules/@syncfusion/", // syncfusion alias
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // syncfusion bundles
      "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
      "@syncfusion/ej2-layouts": "syncfusion:ej2-layouts/dist/ej2-layouts.umd.min.js",
      "@syncfusion/ej2-angular-layouts": "syncfusion:ej2-angular-layouts/dist/ej2-angular-layouts.umd.min.js",
      "@syncfusion/ej2-angular-base": "syncfusion:ej2-angular-base/dist/ej2-angular-base.umd.min.js",

      // other libraries
      'rxjs': 'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
```

## Adding style sheet to the application

To render the DashboardLayout component, import the DashboardLayout and its dependent component's styles as given below in `[src/styles.css]`.

```css
@import "../../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../../node_modules/@syncfusion/ej2-angular-layouts/styles/material3.css";
```

>Note: To refer the combined component styles, use Syncfusion [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Add DashboardLayout to the application

You can render the DashboardLayout component by adding the panels property as the attribute to the HTML element directly. Add the HTML div element with panel definition for DashboardLayout into your `app.template.html` file.

`[src/app/app.template.html]`

```html
<div class="control-section">
    <ejs-dashboardlayout id='defaultLayout' [columns]="5" #defaultLayout [cellSpacing]='cellSpacing'>
        <div id="one" class="e-panel" data-row="0" data-col="0" data-sizeX="1" data-sizeY="1">
            <span id="close" class="e-template-icon e-clear-icon"></span>
            <div class="e-panel-container">
                <div class="text-align">0</div>
            </div>
        </div>
        <div id="two" class="e-panel" data-row="1" data-col="0" data-sizeX="1" data-sizeY="2">
            <span id="close" class="e-template-icon e-clear-icon"></span>
            <div class="e-panel-container">
                <div class="text-align">1</div>
            </div>
        </div>
        <div id="three" class="e-panel" data-row="0" data-col="1" data-sizeX="2" data-sizeY="2">
            <span id="close" class="e-template-icon e-clear-icon"></span>
            <div class="e-panel-container">
                <div class="text-align">2</div>
            </div>
        </div>
        <div id="four" class="e-panel" data-row="2" data-col="1" data-sizeX="1" data-sizeY="1">
            <span id="close" class="e-template-icon e-clear-icon"></span>
            <div class="e-panel-container">
                <div class="text-align">3</div>
            </div>
        </div>
        <div id="five" class="e-panel" data-row="2" data-col="2" data-sizeX="2" data-sizeY="1">
            <span id="close" class="e-template-icon e-clear-icon"></span>
            <div class="e-panel-container">
                <div class="text-align">4</div>
            </div>
        </div>
        <div id="six" class="e-panel" data-row="0" data-col="3" data-sizeX="1" data-sizeY="1">
            <span id="close" class="e-template-icon e-clear-icon"></span>
            <div class="e-panel-container">
                <div class="text-align">5</div>
            </div>
        </div>
        <div id="seven" class="e-panel" data-row="1" data-col="3" data-sizeX="1" data-sizeY="1">
            <span id="close" class="e-template-icon e-clear-icon"></span>
            <div class="e-panel-container">
                <div class="text-align">6</div>
            </div>
        </div>
        <div id="eight" class="e-panel" data-row="0" data-col="4" data-sizeX="1" data-sizeY="3">
            <span id="close" class="e-template-icon e-clear-icon"></span>
            <div class="e-panel-container">
                <div class="text-align">7</div>
            </div>
        </div>
    </ejs-dashboardlayout>
</div>
```

Now, modify the `templateUrl` in `app.component.ts` file to render DashboardLayout component.

`[src/app/app.component.ts]`

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: 'app.template.html'
})

export class AppComponent {
}
```

* Import the  Dashboard Layout module in the main Angular application module(`app.module.ts`) from the package `@syncfusion/ej2-angular-layouts`.

```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the DashboardLayoutModule for the Dashboard Layout component
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { AppComponent } from './app.component';

@NgModule({
  //declaration of ej2-angular-layouts module into NgModule
  imports: [ BrowserModule, DashboardLayoutModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

## Run the application

Now, use the `npm start` command to run the application in the browser.

```html
npm start
```

The following example demonstrates a basic DashboardLayout by adding the panels property directly into the HTML element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dashboard-layout/getting-started-cs2/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/getting-started-cs2" %}

> You can refer to our [Angular Dashboard Layout](https://www.syncfusion.com/angular-ui-components/angular-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Dashboard Layout example](https://ej2.syncfusion.com/angular/demos/#/material/dashboard-layout/default) to knows how to present and manipulate data.
