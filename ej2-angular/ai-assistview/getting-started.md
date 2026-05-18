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

## Set up Angular environment

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

## Adding Syncfusion AI AssistView package

All available Essential JS 2 packages are published in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry. Install the AI AssistView component with the following command:

```bash
npm install @syncfusion/ej2-angular-interactive-chat
```

## Adding CSS reference

The required CSS files are available in the `../node_modules/@syncfusion` package folder. This can be referenced in [src/styles.css] using the following import statements.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import '../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css';
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
    template: `<div ejs-aiassistview ></div>`
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

> **Note:** Starting from version 33.1x, when a user submits a prompt to the AI AssistView, the component automatically scrolls and focuses on the latest prompt and response. This behavior eliminates the need for users to manually scroll down to see the new response, ensuring they always view the most recent AI response without interruption. Prior to version 33.1x, the previous responses remained visible when new responses were added.

## Configure suggestions and responses

Use the [promptSuggestions](../api/ai-assistview#promptsuggestions) property to display a list of predefined suggestion chips. To provide custom responses, handle the [promptRequest](../api/ai-assistview#promptrequest) event, which is triggered when a user query is sent.

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