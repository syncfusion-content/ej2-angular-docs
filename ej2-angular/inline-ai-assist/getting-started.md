---
layout: post
title: Getting started with Angular Inline AI Assist | Syncfusion
description:  Checkout and learn about Getting started with Angular Inline AI Assist component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in Angular Inline AI Assist component

This section explains how to create a simple **Inline AI Assist** component and configure its available functionalities in Angular.

## Dependencies

The following list of dependencies is required to use the Angular Inline AI Assist component in your application. The component is distributed as part of the `@syncfusion/ej2-angular-interactive-chat` package.

```javascript
|-- @syncfusion/ej2-angular-interactive-chat
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-dropdowns
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

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> package

Add the `@syncfusion/ej2-angular-interactive-chat` package to the application.

```bash
npm install @syncfusion/ej2-angular-interactive-chat --save
```

## Adding CSS reference

The required CSS files are available in the `../node_modules/@syncfusion` package folder. This can be referenced in [src/styles.css] using the following import statements.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import '../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
```

## Adding Inline AI Assist component

Modify the template in the `src/app/app.component.ts` file to render the Angular Inline AI Assist component. Add the component by applying the `ejs-inlineaiassist` attribute directive to a `div` element within the `template` section of the `app.component.ts` file.

```javascript
import { Component } from '@angular/core';
import { InlineAIAssistModule } from '@syncfusion/ej2-angular-interactive-chat';

@Component({
    imports: [ InlineAIAssistModule ],
    standalone: true,
    selector: 'app-root',
    template: `
      <input id="messageInput" placeholder="Type a message..." />
      <div ejs-inlineaiassist id='inlineAssist'></div>
    `
})
export class AppComponent  { }
```

## Run the application

After completing the configuration required to render a basic Inline AI Assist, run the following command to display the output in your default browser.

```
ng serve
```

The following example illustrates the output in your browser.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/getting-started/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/inline-ai-assist/getting-started/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/getting-started" %}

## Configure relateTo property

You can use the `relateTo` property to position the Inline AI Assist relative to a specific DOM element. It accepts either a CSS selector string (e.g., '.container' or '#id') or an HTMLElement.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/relateTo/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/inline-ai-assist/relateTo/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/relateTo" %}

## Configure target property

You can use the `target` property to position the Inline AI Assist relative to a specific DOM element. It accepts either a CSS selector string (e.g., '.container' or '#id') or an HTMLElement.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/target/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/inline-ai-assist/target/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/target" %}

## Response display modes

The Inline AI Assist supports two response display modes: `Inline` (renders responses at the caret position) and `Popup` (shows responses in a popup near the prompt). Choose `Inline` for in-context editing and `Popup` when you prefer a detached response view. The component exposes a `responseMode` property so you can switch modes at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/response-mode/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/inline-ai-assist/response-mode/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/response-mode" %}
