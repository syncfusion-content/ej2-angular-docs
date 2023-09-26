---
layout: post
title: Getting started with Angular Progress bar component | Syncfusion
description:  Checkout and learn about Getting started with Angular Progress bar component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Progress bar component

This section explains you the steps required to create a progressbar and demonstrate the basic usage of the progressbar control.

## Dependencies

Below is the list of minimum dependencies required to use the progressbar component.

```javascript
    |-- @syncfusion/ej2-angular-progressbar
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data: "*"
    |-- @syncfusion/ej2-svg-base
```

## Installation and Configuration

* You can use `Angular CLI` to setup your angular applications.

  ```shell
  npm install -g @angular/cli
  ```

 For more information, refer to [Angular sample setup](https://angular.io/guide/setup)

* Install progressbar packages using below command.

  ```javascript
  npm install @syncfusion/ej2-angular-progressbar --save
  ```

 The above package installs `progressbar dependencies` which are required to render the component in Angular environment

* Syncfusion `ej2-angular-progressbar` packages needs to be mapped in `systemjs.config.js` configuration file.

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
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-progressbar": "syncfusion:ej2-progressbar/dist/ej2-progressbar.umd.min.js",
        "@syncfusion/ej2-angular-progressbar": "syncfusion:ej2-angular-progressbar/dist/ej2-angular-progressbar.umd.min.js",


      // other libraries
      'rxjs':                      'npm:rxjs',
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

* Import Chart module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-progressbar`

`[src/app/app.module.ts]`.

```javascript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the ProgressBarModule for the Chart component
import { ProgressBarModule } from '@syncfusion/ej2-angular-progressbar';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of ej2-ng-progressbar module into NgModule
  imports:      [ BrowserModule, ProgressBarModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

* Modify the template in `app.component.ts` file to render the `ej2-ng-progressbar` component

`[src/app/app.component.ts]`.

```javascript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-container',
  // specifies the template string for the Charts component
  template: `<ejs-progressbar id='percentage'></ejs-progressbar>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  { }
```

Now use the **app-container** in the index.html instead of default one.

```html
<app-container></app-container>
```

* Now run the application in the browser using the below command.

```
npm start
```

The below example shows a basic Progressbar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progressbar/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/progressbar/getting-started-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progressbar/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progressbar/getting-started-cs1" %}