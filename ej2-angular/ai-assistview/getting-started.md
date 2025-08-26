---
layout: post
title: Getting started with Angular AI AssistView | Syncfusion
description:  Checkout and learn about Getting started with Angular AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in Angular AI AssistView component

This section explains how to create a simple **AI AssistView** component and configure its available functionalities in Angular.

## Dependencies

The following list of dependencies is required to use the Angular AI AssistView component in your application. The component is distributed as part of the `@syncfusion/ej2-angular-interactive-chat` package.

```javascript
|-- @syncfusion/ej2-angular-interactive-chat
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-inputs
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

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> AI AssistView package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://v17.angular.io/guide/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-interactive-chat`](https://www.npmjs.com/package/@syncfusion/ej2-angular-interactive-chat/v/27.1.48) package to the application.

```bash
npm install @syncfusion/ej2-angular-interactive-chat --save
```

### Angular compatibility compiled package (ngcc)

For projects using Angular versions below 12, you can use the legacy (`ngcc`) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package, use the command below.

Add the [`@syncfusion/ej2-angular-interactive-chat@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-interactive-chat/v/27.1.48-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-interactive-chat@ngcc --save
```

To specify the `ngcc` package in the `package.json` file, add the `-ngcc` suffix to the package version, as shown below.

```bash
@syncfusion/ej2-angular-interactive-chat:"27.1.48-ngcc"
```

>Note: If the `ngcc` tag is not specified while installing the package, the Ivy Library Package will be installed, which may cause warnings in pre-Ivy applications.

## Adding CSS reference

The required CSS files are available in the `../node_modules/@syncfusion` package folder. This can be referenced in [src/styles.css] using the following import statements.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import '../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';
```

## Adding AI AssistView component

Modify the template in the [src/app/app.component.ts] file to render the Angular AI AssistView component. Add the component by applying the [`ejs-aiassistview`] attribute directive to a `div` element within the `template` section of the `app.component.ts` file.

```javascript
import { Component } from '@angular/core';
import { AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';

@Component({
    imports: [ AIAssistViewModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the AI AssistView component
    template: `<div ejs-aiassistview id='aiAssistView'></div>`
})
export class AppComponent  { }
```

## Run the application

After completing the configuration required to render a basic AI AssistView, run the following command to display the output in your default browser.

```
ng serve
```

The following example illustrates the output in your browser.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/getting-started/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/getting-started/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/getting-started" %}

## Configure suggestions and responses

Use the [promptSuggestions](../api/ai-assistview/#promptsuggestions) property to display a list of predefined suggestion chips. To provide custom responses, handle the [promptRequest](../api/ai-assistview/#promptrequest) event, which is triggered when a user query is sent.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/defaultprompts/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/defaultprompts/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/defaultprompts" %}
```