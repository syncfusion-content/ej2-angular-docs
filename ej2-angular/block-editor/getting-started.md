---
layout: post
title: Getting Started with Angular Block Editor Component | Syncfusion
description: Checkout and learn about getting started with Syncfusion Essential Angular Block Editor component, its elements, and more details.
platform: ej2-angular
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Angular Block Editor Component

This guide explains how to create and configure the Block Editor component in a new Angular application.

## Set up Angular Environment

Use the [Angular CLI](https://github.com/angular/angular-cli) to set up your Angular applications. To install the Angular CLI globally, run the following command.

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
## Adding Syncfusion Block Editor package

All available Essential JS 2 packages are published in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry. Install the Block Editor component with the following command:

```bash
npm install @syncfusion/ej2-angular-blockeditor
```

## Add CSS Reference

To install the [tailwind3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme --save
```

To render the BlockEditor component, add the below import in the [src/styles.css] file which loads all the required dependency styles, as shown below:

```css
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/blockeditor/index.css";
```

## Add Syncfusion Block Editor Component

Modify the template in the [src/app/app.component.ts] file to render the Block Editor component. Add the Angular Block Editor by using the `<ejs-blockeditor>` selector in `template` section of the app.component.ts file.

```typescript

import { BlockEditorModule } from '@syncfusion/ej2-angular-blockeditor';
import { Component } from '@angular/core';

@Component({
    imports: [ BlockEditorModule ],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render BlockEditor component. -->
    <div class="container" style="width: 40px; margin: 50px auto;">
        <ejs-blockeditor />
    </div>`
})

export class AppComponent { }

```

## Run the Application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a default Block Editor component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/getting-started/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/getting-started/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/getting-started" %}