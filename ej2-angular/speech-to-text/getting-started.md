---
layout: post
title: Getting Started with Angular SpeechToText Component | Syncfusion
description: Checkout and learn about getting started with Syncfusion Essential Angular SpeechToText component, its elements, and more details.
platform: ej2-angular
control: SpeechToText
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Angular SpeechToText Component

This section provides a step-by-step guide to creating your first Angular application and integrating the Syncfusion SpeechToText component.

## Dependencies

The list of dependencies required to use the SpeechToText component in your application is given below:

```javascript
|-- @syncfusion/ej2-angular-inputs
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-popups
```

## Set up Angular environment

You can use the [Angular CLI](https://github.com/angular/angular-cli) to set up your Angular applications. To install the Angular CLI, use the following command.

```
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using the following Angular CLI command.

```
ng new my-app
cd my-app
```

## Installing the Syncfusion SpeechToText package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion packages from this npm [link](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion provides two types of package structures for Angular components:
1. Ivy library distribution package [format](https://v17.angular.io/guide/angular-package-format)
2. Angular compatibility compiler (Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages (`>=20.2.36`) have been updated to the Ivy distribution format to support the Angular `Ivy` rendering engine. These packages are compatible with Angular version 12 and above. To download the package, use the below command.

The Syncfusion Angular SpeechToText component is included in the [`@syncfusion/ej2-angular-inputs`](https://www.npmjs.com/package/@syncfusion/ej2-angular-inputs/v/20.4.38) package. Install it using the following command:

```bash
npm install @syncfusion/ej2-angular-inputs --save
```

### Angular compatibility compiled package(ngcc)

For applications using an Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package, use the below command.

Add the [`@syncfusion/ej2-angular-inputs@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-inputs/v/20.4.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-inputs@ngcc --save
```

To specify the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as shown below.

```bash
@syncfusion/ej2-angular-inputs:"20.4.38-ngcc"
```

>Note: If the `ngcc` tag is not specified while installing the package, the Ivy library package will be installed by default, which may cause a warning in projects using older versions of Angular.

## Adding CSS reference

To install the [tailwind3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme --save
```

To render the SpeechToText component, add the below import in the [src/styles.css] file which loads all the required dependency styles, as shown below:

```css
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/speech-to-text/index.css";
```

## Adding the Syncfusion SpeechToText component

Modify the `app.component.ts` file to apply the [`ejs-speechtotext`] directive to a standard HTML button element. This directive initializes the SpeechToText component with its default functionality.

```typescript

import { SpeechToTextModule } from '@syncfusion/ej2-angular-inputs'
import { Component } from '@angular/core';

@Component({
    imports: [
        SpeechToTextModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render SpeechToText component. -->
    <div class="container" style="width: 40px; margin: 50px auto;">
        <button ejs-speechtotext></button>
    </div>`
})

export class AppComponent { }

```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The following example demonstrates a default SpeechToText component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/speech-to-text/getting-started/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/getting-started/src/styles.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speech-to-text/getting-started/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/speech-to-text/getting-started/index" %}

> The [SpeechToText](../api/speech-to-text) component requires an active internet connection and must be used in a browser that supports the [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) Web Speech API.

## Customizing button content

The content of the SpeechToText button can be customized for its active and inactive states. Use the [`content`](../api/speech-to-text/buttonSettingsModel#content) property to define the text for the start listening state and the [`stopContent`](../api/speech-to-text/buttonSettingsModel#stopContent) property for the stop listening state. These properties are configured within the [`buttonSettings`](../api/speech-to-text#buttonSettings) property.

The following example shows how to configure `buttonSettings` in the SpeechToText component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/speech-to-text/button-settings/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/button-settings/src/styles.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speech-to-text/button-settings/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/speech-to-text/button-settings/index" %}