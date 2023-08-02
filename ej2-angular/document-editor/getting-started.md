---
layout: post
title: Getting started with Angular Document editor component | Syncfusion
description:  Checkout and learn about Getting started with Angular Document editor component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Document editor component

This section explains the steps to create a Word document editor within your application and demonstrates the basic usage of the Document Editor component.

## Dependencies

The list of dependencies required to use the Document Editor component in your application is given below:

```javascript
|-- @syncfusion/ej2-angular-documenteditor
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-documenteditor
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-charts
```

### Server side dependencies

The Document Editor component requires server-side interactions for the following operations:

* [Open file formats other than SFDT](../document-editor/import#convert-word-documents-into-sfdt)
* [Paste with formatting](../document-editor/clipboard#paste-with-formatting)
* [Restrict editing](../document-editor/document-management)
* [SpellCheck](../document-editor/spell-check)
* [Save as file formats other than SFDT and DOCX](../document-editor/server-side-export)

>Note: If you don't require the above functionalities then you can deploy as pure client-side component without any server-side interactions.

To know about server-side dependencies, please refer this [page](../document-editor/web-services).

## Setup your development environment

* To setup basic `Angular` sample use following commands.

    ```javascript
    git clone https://github.com/angular/quickstart.git quickstart
    cd quickstart
    npm install
    ```

For more information, refer to [Angular sample setup](https://angular.io/guide/setup/)

## Installing Syncfusion DocumentEditor package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-documenteditor`](https://www.npmjs.com/package/@syncfusion/ej2-angular-documenteditor/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-documenteditor --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-documenteditor@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-documenteditor/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-documenteditor@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-documenteditor:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Configuring system JS

[Syncfusion DocumentEditor packages](./getting-started#dependencies/) need to be mapped in systemjs.config.js configuration file.

Syncfusion `ej2-angular-documenteditor` packages have to be mapped in the systemjs.config.js configuration file.

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
      'syncfusion:': './node_modules/@syncfusion/',
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
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-dropdowns": "syncfusion:ej2-dropdowns/dist/ej2-dropdowns.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-compression": "syncfusion:ej2-compression/dist/ej2-compression.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-file-utils": "syncfusion:ej2-file-utils/dist/ej2-file-utils.umd.min.js",
        "@syncfusion/ej2-office-chart": "syncfusion:ej2-office-chart/dist/ej2-office-chart.umd.min.js",
        "@syncfusion/ej2-calendars": "syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js",
        "@syncfusion/ej2-pdf-export": "syncfusion:ej2-pdf-export/dist/ej2-pdf-export.umd.min.js",
        "@syncfusion/ej2-svg-base": "syncfusion:ej2-svg-bases/dist/ej2-svg-base.umd.min.js",
        "@syncfusion/ej2-charts": "syncfusion:ej2-charts/dist/ej2-charts.umd.min.js",
        "@syncfusion/ej2-documenteditor": "syncfusion:ej2-documenteditor/dist/ej2-documenteditor.umd.min.js",
        "@syncfusion/ej2-angular-base": "syncfusion:ej2-angular-base/dist/ej2-angular-base.umd.min.js",

        "@syncfusion/ej2-angular-documenteditor": "syncfusion:ej2-angular-documenteditor/dist/ej2-angular-documenteditor.umd.min.js",
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

## Adding CSS reference

To render the Documenteditor component, need to import document editor and its dependent component’s styles.
This can be referenced in your `[src/styles/styles.css]` using the following code.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-documenteditor/styles/material.css';
```

> To know about individual component CSS, please refer to [Individual Component theme files](../appearance/theme-studio#filtering-a-specific-list-of-components) section.

In case, if you want to make use of the combined CSS files of entire components, then you can avail it from the root folder of Essential JS 2 package and reference it with the code shown below.

```css
@import '../node_modules/@syncfusion/ej2/material.css';
```

## Adding Component -

You can add `DocumentEditorContainer` Component with  predefined toolbar and properties pane options or `DocumentEditor` component with customize options.

>Note: Starting from `v19.3.0.x`, we have optimized the accuracy of text size measurements such as to match Microsoft Word pagination for most Word documents. This improvement is included as default behavior along with an optional API [to disable it and retain the document pagination behavior of older versions](../document-editor/how-to/disable-optimized-text-measuring).

### DocumentEditor Component

DocumentEditor Component is used to create , view and edit word documents. In this , you can customize the UI options based on your requirements to modify the document.

#### Registering DocumentEditor Module

Import Document Editor module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-documenteditor` [src/app/app.module.ts].

```typescript
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  // import the DocumentEditorModule for the DocumentEditor component
  import { DocumentEditorModule } from '@syncfusion/ej2-angular-documenteditor';
  import { AppComponent } from './app.component';

  @NgModule({
        //declaration of ej2-angular-documenteditor module into NgModule
        imports: [BrowserModule, DocumentEditorModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
  })
  export class AppModule { }
```

#### Adding DocumentEditor component

Modify the template in [src/app/app.component.ts] file to render the Document Editor component.
Add the Angular Document Editor by using `<ejs-documenteditor>` selector in `template` section of the app.component.ts file.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
      selector: 'app-container',
      // specifies the template string for the DocumentEditor component
      template: `<ejs-documenteditor serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"> </ejs-documenteditor>`
})
export class AppComponent implements OnInit {

    ngOnInit(): void {
    }
}
```

#### Run the  DocumentEditor application

The quickstart project is configured to compile and run the application in a browser. Use the following command to run the application.

```javascript
npm start
```

Output will be displayed as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/getting-started-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/document-editor/getting-started-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/getting-started-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/getting-started-cs1" %}

### DocumentEditorContainer Component

DocumentEditorContainer is a predefined component which wraps DocumentEditor, Toolbar, Properties pane, and Status bar into a single component. And the toolbar and properties pane is used to view and modify the document in DocumentEditor thought public APIs available in it.

#### Registering DocumentEditorContainer Module

Import `DocumentEditorContainer` module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-documenteditor` [src/app/app.module.ts].

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';
import { AppComponent } from './default.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        DocumentEditorContainerModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

#### Adding DocumentEditorContainer component

Modify the template in [src/app/app.component.ts] file to render the Document Editor Container component.
Add the Angular Document Editor Container by using `<ejs-documenteditor>` selector in `template` section of the app.component.ts file.

```typescript
import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '@syncfusion/ej2-angular-documenteditor';

@Component({
    selector: 'app-container',
    // specifies the template string for the DocumentEditorContainer component
    template: `<ejs-documenteditorcontainer serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" [enableToolbar]=true> </ejs-documenteditorcontainer>`,
    providers: [ToolbarService]
})
export class AppComponent implements OnInit {

    ngOnInit(): void {
    }
}
```

#### Run the DocumentEditorContainer application

The quickstart project is configured to compile and run the application in a browser. Use the following command to run the application.

```javascript
npm start
```

DocumentEditorContainer output will be displayed as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/document-editor-container-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/document-editor/document-editor-container-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/document-editor-container-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/document-editor-container-cs2" %}

## Frequently Asked Questions

* [How to localize the Documenteditor container](../document-editor/global-local).
* [How to load the document by default](../document-editor/how-to/open-default-document).
* [How to customize tool bar](../document-editor/how-to/customize-tool-bar).
* [How to resize Document editor component?](../document-editor/how-to/resize-document-editor)