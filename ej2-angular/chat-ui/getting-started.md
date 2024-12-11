---
layout: post
title: Getting started with Angular Chat UI | Syncfusion
description:  Checkout and learn about Getting started with Angular Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in Angular Chat UI component

This section explains how to create a simple **Chat UI** component and configure its available functionalities in Angular.

## Dependencies

The following list of dependencies are required to use the Angular Chat UI component in your application.

```javascript
|-- @syncfusion/ej2-angular-interactive-chat
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons
```

## Setup angular environment

Angular provides the easiest way to set angular CLI projects using [`Angular CLI`](https://github.com/angular/angular-cli) tool.

Install the CLI application globally to your machine.

```bash
npm install -g @angular/cli
```

## Create a new application

```bash
ng new syncfusion-angular-chat-ui
```

By default, it install the CSS style base application. To setup with SCSS, pass --style=scss argument on create project.

Example code snippet.

```bash
ng new syncfusion-angular-chat-ui --style=scss
```

Navigate to the created project folder.

```bash
cd syncfusion-angular-chat-ui
```

## Installing Syncfusion Chat UI package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://v17.angular.io/guide/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add `@syncfusion/ej2-angular-interactive-chat` package to the application.

```bash
npm install @syncfusion/ej2-angular-interactive-chat --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add `@syncfusion/ej2-angular-interactive-chat@ngcc` package to the application.

```bash
npm install @syncfusion/ej2-angular-interactive-chat@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-interactive-chat:"27.1.48-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Registering Chat UI module

Import Chat UI module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-interactive-chat`.

```javascript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the ChatUIModule for the Chat UI component
import { ChatUIModule } from '@syncfusion/ej2-angular-interactive-chat';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of ej2-angular-interactive-chat module into NgModule
  imports:      [ BrowserModule, ChatUIModule ],
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
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-interactive-chat/styles/material.css';
```

## Adding Chat UI component

Modify the template in [src/app/app.component.ts] file to render the Angular Chat UI component. Add the Angular Chat UI by using `<ejs-chatui>` selector in `template` section of the app.component.ts file.

```javascript
import { Component } from '@angular/core';
import { ChatUIComponent } from '@syncfusion/ej2-angular-interactive-chat';

@Component({
  selector: 'app-root',
  // specifies the template string for the Chat UI component
  template: `<div ejs-chatui id='chatUI'></div>`
})
export class AppComponent  { }
```

## Run the application

After completing the configuration required to render a basic Chat UI, run the following command to display the output in your default browser.

```
ng serve
```

The following example illustrates the output in your browser.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/getting-started/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/getting-started/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/getting-started" %}

## Configure messages and user

You can use the `<e-messages>` tag directive to group all the messages and `<e-message>` tag to define each message and the `user` property to configure the current user for the chat.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/defaultmessages/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/defaultmessages/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/defaultmessages" %}
