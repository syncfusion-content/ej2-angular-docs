---
layout: post
title: Initialize Sidebar in Angular Sidebar component | Syncfusion
description: Learn here all about Initialize Sidebar using systemjs in Syncfusion Angular Sidebar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sidebar
documentation: ug
domainurl: ##DomainURL##
---

# Initialize Sidebar with SystemJS in Angular Sidebar component

Sidebar can also be initialized using `SystemJS` as follows:

## Installation and configuration

To set up a basic Angular application with SystemJS:

```sh
git clone https://github.com/angular/quickstart.git quickstart
cd quickstart
npm install
```

For more details, refer to the [Angular setup guide](https://angular.io/docs/ts/latest/guide/setup.html).

* Install Syncfusion<sup style="font-size:70%">&reg;</sup> Sidebar package:

```sh
npm install @syncfusion/ej2-angular-navigations --save
```

This installs the Sidebar and its dependencies required for rendering in an Angular environment.

* Syncfusion `ej2-angular-navigations` packages need to be mapped in `systemjs.config.js` configuration file.

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
      "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
      "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
      "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
      "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
      "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
      "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
      "@syncfusion/ej2-angular-base": "syncfusion:ej2-angular-base/dist/ej2-angular-base.umd.min.js",
      "@syncfusion/ej2-angular-navigations": "syncfusion:ej2-angular-navigations/dist/ej2-angular-navigations.umd.min.js",

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

Import the Sidebar and dependent component's styles in `style.css`:

```css
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-angular-navigations/styles/material.css';
```

> **Note**: If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Create a simple Sidebar

Refer the following code to include the Sidebar in your application .

* Create an `Angular` application with Sidebar component. Add the following Sidebar template in component template of `app.component.ts`

```HTML
<ejs-sidebar id="default-sidebar" >
    <div class="title"> Sidebar content</div>
</ejs-sidebar>
<div>
    <div class="title">Main content</div>
    <div class="sub-title">
        Content goes here.
    </div>
</div>
```

* Create an `Angular` module and include the above Sidebar component.
* In the module, declare the Component and Directives required to render the Sidebar.
* Bootstrap the application with the above module.

Refer to the following snippet to import the Sidebar module in app.module.ts from the @syncfusion/ej2-angular-navigations.

```Typescript
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SidebarModule } from '@syncfusion/ej2-angular-navigations';

@NgModule({
    imports: [SidebarModule, BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

> `systemjs.config.js` file should be configured as described in the [Installation and configuration](#installation-and-configuration) section.

## Run the application

Use the npm run start command to run the application in the browser.

```sh
npm start
```

The following sample shows the Sidebar component in the browser.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/sidebar/getting-started-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/getting-started-cs2" %}