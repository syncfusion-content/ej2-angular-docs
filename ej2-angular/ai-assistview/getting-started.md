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

The following list of dependencies are required to use the Angular AI AssistView component in your application.

```javascript
|-- @syncfusion/ej2-angular-interactive-chat
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-inputs
```

## Setup angular environment

Angular provides the easiest way to set angular CLI projects using [`Angular CLI`](https://github.com/angular/angular-cli) tool.

Install the CLI application globally to your machine.

```bash
npm install -g @angular/cli
```

## Create a new application

```bash
ng new syncfusion-angular-ai-assistview
```

By default, it install the CSS style base application. To setup with SCSS, pass --style=scss argument on create project.

Example code snippet.

```bash
ng new syncfusion-angular-ai-assistview --style=scss
```

Navigate to the created project folder.

```bash
cd syncfusion-angular-ai-assistview
```

## Installing Syncfusion AI AssistView package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://v17.angular.io/guide/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-interactive-chat`](https://www.npmjs.com/package/@syncfusion/ej2-angular-interactive-chat/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-interactive-chat --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-interactive-chat@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-interactive-chat/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-interactive-chat@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-interactive-chat:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Registering AI AssistView module

Import AI AssistView module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-interactive-chat`.

```javascript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the AIAssistViewModule for the AI AssistView component
import { AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of ej2-angular-interactive-chat module into NgModule
  imports:      [ BrowserModule, AIAssistViewModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

## Adding CSS reference

The following CSS files are available in `../node_modules/@syncfusion` package folder.
This can be referenced in [src/styles.css] using following code.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import '../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
```

## Adding AI AssistView component

Modify the template in [src/app/app.component.ts] file to render the Angular AI AssistView component. Add the Angular AI AssistView by using `<ejs-aiassistview>` selector in `template` section of the app.component.ts file.

```javascript
import { Component } from '@angular/core';
import { AIAssistViewComponent } from '@syncfusion/ej2-angular-interactive-chat';

@Component({
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

You can use the `promptSuggestions` property to add prompt suggestions and the `promptRequest` event to add responses when the prompt matches the specified prompts data otherwise, the default response will be displayed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/defaultprompts/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/defaultprompts/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/defaultprompts" %}
