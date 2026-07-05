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

To get started quickly with the Angular Chat UI component, you can check out this video tutorial:
{% youtube "https://www.youtube.com/watch?v=01mflB3c8WQ" %}

## Setup angular environment

You can use the [Angular CLI](https://github.com/angular/angular-cli) to set up your Angular applications. To install the Angular CLI, use the following command.

```
npm install -g @angular/cli
```

## Create an Angular Application

Create a new Angular application using the following Angular CLI command:

```bash
ng new my-app
```
This command will prompt you for a few settings for the new project, such as which stylesheet format to use.

![Initial_setup](images/getting-started/Initial-setup.png)

By default, it will create a CSS-based application.

Then the CLI also displays an additional prompt asking whether to enable Server‑Side Rendering (SSR) and Static Site Generation (SSG), as shown below:

![Server_Side_Rendering_Setup](images/getting-started/SSR.png)

For this setup, when prompted for the Server-side rendering (SSR) option, choose the appropriate configuration.

Then the CLI displays another prompt related to AI tooling support, as shown below:

![AI_Tool_Setup](images/getting-started/AI-Tool.png)

Any preferred option can be selected based on the development workflow or project needs.

Next, navigate to the project folder:

```bash
cd my-app
```

## Adding Syncfusion Chat UI package

All available Essential JS 2 packages are published in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry. Install the Chat UI component with the following command:

```bash
npm install @syncfusion/ej2-angular-interactive-chat
```

## Adding CSS reference

To install the [tailwind3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme --save
```

To render the Chat UI component, add the below import in the [src/styles.css] file which loads all the required dependency styles, as shown below:

```css
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/chat-ui/index.css";
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
    template: `<div ejs-chatui ></div>`
})
export class AppComponent  { }
```
## Configure User

To define the chat content, use the `user` property assigns an identity to the current user, which is essential for distinguishing the user's messages from those of other participants.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/defaultmessages/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/defaultmessages/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/defaultmessages" %}


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