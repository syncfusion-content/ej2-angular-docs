---
layout: post
title: Getting started with Angular Uploader component | Syncfusion
description: Learn how to get started with the Syncfusion Angular Uploader component, including setup, installation, configuration, and file handling.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Uploader component

This guide demonstrates how to set up and configure the Syncfusion Angular Uploader component, from initial installation through enabling core features like asynchronous file uploads and drag-and-drop functionality. The Uploader component allows users to upload files to a server with support for multiple file formats, drag-and-drop, progress tracking, and event handling.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

## Dependencies

The following packages are required to render the uploader component in your Angular application.

```js
|-- @syncfusion/ej2-angular-inputs
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-angular-popups
    |-- @syncfusion/ej2-angular-buttons
    |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
        |-- @syncfusion/ej2-splitbuttons

```

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion Angular UI Components](../system-requirement).

## Setup Angular environment

Angular provides the easiest way to set up Angular CLI projects using the [Angular CLI](https://github.com/angular/angular-cli) tool.

Install the CLI application globally to your machine.

```bash
npm install -g @angular/cli
```

> **Angular 19+ Standalone Architecture:** Standalone components are the default in Angular 19 and later. This guide uses the modern standalone architecture. If you need more information about standalone components, refer to the [Standalone Guide](./angular-standalone).

## Create a new application

With Angular CLI installed, execute this command to generate a new application:

```bash
ng new syncfusion-angular-uploader
```

* This command will prompt you to configure settings like enabling Angular routing and choosing a stylesheet format.

* By default, Angular CLI creates a CSS style-based application. Use SCSS if required:

```bash
ng new syncfusion-angular-uploader --style=scss
```

Navigate to the created project folder.

```bash
cd syncfusion-angular-uploader
```

> Note: In Angular 19 and below, it uses `app.component.ts`, `app.component.html`, `app.component.css` etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular Uploader Component](https://www.syncfusion.com/angular-components/angular-file-upload) for demonstration. Add the Angular Uploader component with:

```bash
ng add @syncfusion/ej2-angular-inputs
```

This command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-inputs` package and peer dependencies to your `package.json`.
- Import the Uploader component in your application.
- Register the default Syncfusion<sup style="font-size:70%">&reg;</sup> Material theme in `angular.json`.

For more details on version compatibility, refer to the [Version Compatibility](../upgrade/version-compatibility) section.

Syncfusion<sup style="font-size:70%">&reg;</sup> offers two package structures for Angular components:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler (ngcc), which is Angular's legacy compilation pipeline.

Syncfusion<sup style="font-size:70%">&reg;</sup>'s latest Angular packages are provided as Ivy-compatible and suited for Angular 12 and above. To install the package, execute:

```bash
ng add @syncfusion/ej2-angular-inputs
```

For applications not compiled with Ivy, use the `ngcc` tagged packages:

> The ngcc packages are still compatible with Angular CLI versions 15 and below. However, they may generate warnings suggesting the use of IVY compiled packages. Starting from Angular 16, support for the ngcc package has been completely removed. If you have further questions regarding ngcc compatibility, please refer to the following [FAQ](../common/troubleshooting/ngcc-compatibility).

```bash
npm add @syncfusion/ej2-angular-inputs@32.1.19-ngcc
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component themes can be added in various ways: via CSS or SCSS styles from npm packages, CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio).

The `Material` theme is added to your `styles.css` when you run `ng add` (this happens automatically by default).

The following CSS files are available in `../node_modules/@syncfusion` package folder.
This can be referenced in [src/styles.css] using following code.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-inputs/styles/material.css';
```

> Ensure that the import order aligns with the component's dependency sequence.

For using SCSS styles, refer to [this guide](../common/how-to/sass).

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

## Add Uploader component

Modify the template in [src/app/app.ts] file to render the Uploader component.
Add the Angular Uploader by using `<ejs-uploader>` selector in **template** section of the app.ts file.

```typescript
import { Component, OnInit } from '@angular/core';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs'

@Component({
    imports: [
      UploaderModule
    ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Uploader component
    template: `<ejs-uploader [autoUpload]='false'></ejs-uploader>`
})
export class AppComponent implements OnInit {

    ngOnInit(): void {
    }
}
```

## Running the application

After completing the configuration required to render the uploader, run the application using the following command to display the output in your default browser.

```
ng serve
```

The output will appear as follows.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/uploader-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/uploader-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/uploader-cs8" %}

> From v16.2.41 version, the **Essential<sup style="font-size:70%">&reg;</sup> JS2 AJAX** library has been integrated for uploader server requests.
Hence, use the third party `promise` library like blue-bird to use the uploader in Internet Explorer.

## Adding drop area

By default, the Uploader component allows uploading files by dragging files from file explorer and dropping them into the drop area.
You can configure any other external element as a drop target using the `dropArea` property.

In the following sample, an external element is configured as a drop target for the Uploader component.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/draganddrop-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/draganddrop-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/draganddrop-cs2" %}

## Configure asynchronous settings

By default, the Uploader component processes files in asynchronous mode.
Define the properties `saveUrl` and `removeUrl` to handle the save and remove actions as follows.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/uploader-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/uploader-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/uploader-cs9" %}

## Handle success and failed upload

You can handle the success and failure actions using the `success` and `failure` events.
To handle these events, define the function and assign it to the corresponding event as follows.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/uploader-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/uploader-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/uploader-cs10" %}

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/uploader/default) to understand how to browse the files which you want to upload to the server.

## See Also

* [How to add additional data on upload](./how-to/add-additional-data-on-upload)
* [Achieve file upload programmatically](./how-to/achieve-file-upload-programmatically)
* [Achieve invisible upload](./how-to/achieve-invisible-upload)

N> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/uploader/default) to understand how to browse the files which you want to upload to the server.
