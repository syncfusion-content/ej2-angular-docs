---
layout: post
title: Getting started with Angular Chat UI | Syncfusion
description:  Checkout and learn about Getting started with Angular Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Angular Chat Component

This section explains how to create a simple Syncfusion **Chat** component and configure its features in an Angular application.

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

You can use the [Angular CLI](https://github.com/angular/angular-cli) to set up your Angular applications. To install the Angular CLI, use the following command.

```
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using the Angular CLI.

```
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Chat UI package

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

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-interactive-chat@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-interactive-chat/v/27.1.48-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-interactive-chat@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-interactive-chat:"27.1.48-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

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
import { ChatUIModule } from '@syncfusion/ej2-angular-interactive-chat';

@Component({
    imports: [ ChatUIModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Chat UI component
    template: `<div ejs-chatui id='chatui'></div>`
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

## Configure Messages and User

To define the chat content, use the `<e-messages>` tag to group all messages, and the `<e-message>` tag for each individual message. The `user` property assigns an identity to the current user, which is essential for distinguishing the user's messages from those of other participants.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/defaultmessages/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/defaultmessages/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/defaultmessages" %}
```