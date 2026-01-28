---
layout: post
title: Getting Started with Angular Rich Text Editor component | Syncfusion
description: Learn how to set up and configure the Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Rich Text Editor

The Syncfusion Angular Rich Text Editor is a WYSIWYG (What You See Is What You Get) editor that enables users to create, edit, and format rich text content with features like multimedia insertion, lists, and links. This section explains the steps to create a simple Angular Rich Text Editor component and configure its core functionalities.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

To get started quickly with the Angular Rich Text Editor using CLI and Schematics, refer to this video tutorial:

{% youtube "https://www.youtube.com/watch?v=wrod5Rzg85o" %}

## Setup Angular Environment

You can use [Angular CLI](https://github.com/angular/angular-cli) to set up your Angular applications. To install Angular CLI use the following command.

```bash
npm install -g @angular/cli@21.0.1
```

## Create an Angular Application

Create a new Angular application using the following Angular CLI command:

```bash
ng new my-app
```
This command will prompt you for a few settings for the new project, such as whether to add Angular routing and which stylesheet format to use.

![Initial_setup](images/getting-started/Initial-setup.png)

By default, it will create a CSS-based application.

Then the CLI also displays an additional prompt asking whether to enable Server‑Side Rendering (SSR) and Static Site Generation (SSG), as shown below:

![Server_Side_Rendering_Setup](images/getting-started/SSR.png)

For this setup, select **No**, as the Rich Text Editor does not require SSR or SSG for basic configuration.

Then the CLI displays another prompt related to AI tooling support, as shown below:

![AI_Tool_Setup](images/getting-started/AI-Tool.png)

Any preferred option can be selected based on the development workflow or project needs.

Next, navigate to the project folder:

```bash
cd my-app
```

## Adding Syncfusion Rich Text Editor package

All available Essential JS 2 packages are published in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry. Install the Rich Text Editor component with the following command:

```bash
npm install @syncfusion/ej2-angular-richtexteditor
```

## Adding CSS reference

The following CSS files are available in **../node_modules/@syncfusion** package folder.
This can be referenced in [src/styles.css] using the following code.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';;
```

## Module Injection

To create a Rich Text Editor with enhanced functionality, inject the required modules. The following modules extend the basic capabilities of the Rich Text Editor:

* **HtmlEditorService** - Inject this module to use Rich Text Editor as html editor.
* **ImageService** - Inject this module to use image feature in Rich Text Editor.
* **LinkService** - Inject this module to use link feature in Rich Text Editor.
* **QuickToolbarService** - Inject this module to use quick toolbar feature for the target element.
* **ToolbarService** - Inject this module to use Toolbar feature.

These modules should be injected into the **providers** section of root **NgModule** or component class.

> Additional feature modules are available [here](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/module).

## Adding Rich Text Editor component

Modify the template in the [src/app/app.component.ts] file to render the Rich Text Editor component. Add the Angular Rich Text Editor by using the `<ejs-richtexteditor>` selector in the `template` section of the app.component.ts file.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started/basic-editor/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started/basic-editor/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started/basic-editor" %}

## Configure the toolbar

Customize the toolbar using the [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor#toolbarsettings) property to define specific tools. The following example demonstrates basic toolbar configuration:

```typescript
import { RichTextEditorModule, ToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';
import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [RichTextEditorModule],
    selector: 'app-root',
    template: `
        <ejs-richtexteditor [toolbarSettings]="tools" [value]="value"></ejs-richtexteditor>
    `,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService],
})
export class App {
    public tools: ToolbarSettingsModel = {
        items: ['Undo', 'Redo', '|', 'Bold', 'Italic', 'Underline', 'StrikeThrough', '|', 'FontName',
        'FontSize', 'FontColor', 'BackgroundColor', '|', 'SubScript', 'SuperScript', '|', 'LowerCase',
        'UpperCase', '|', 'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|', 'Indent',
        'Outdent', '|', 'CreateLink', 'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen'],
    };

    public value: string = `<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul> <li> <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p> </li> <li> <p>Bulleted and numbered lists.</p> </li> <li> <p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p> </li> <li> <p>Contains undo/redo manager. </p> </li> </ul><p><img alt="Sky with sun" src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png" width="309" style="min-width: 10px; min-height: 10px; width: 309px; height: 174px;" class="e-rte-image e-imginline" height="174"></p>`;
}
```

## Run the application

Use the following command to run the application in the browser.

```bash
ng serve --open
```

Output will be displayed as follows

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started/editor-with-toolbar/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started/editor-with-toolbar/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/editor-with-toolbar" %}

## See also

* [How to change the editor type](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/editor-types/editor-mode)
* [How to render the iframe](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/editor-types/iframe)
* [How to render the toolbar in inline mode](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/editor-types/inline-editing)
* [How to insert Emoticons](https://ej2.syncfusion.com/angular/demos/#/tailwind3/rich-text-editor/insert-emoticons)
* [Blog posting using Rich Text Editor](https://ej2.syncfusion.com/angular/demos/#/tailwind3/rich-text-editor/blog-posting)
* [Reactive Form with Rich Text Editor](https://ej2.syncfusion.com/angular/demos/#/tailwind3/rich-text-editor/reactive-form)
* [Accessibility in Rich text editor](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/accessibility)
* [Keyboard support in Rich text editor](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/keyboard-support)
* [Globalization in Rich text editor](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/globalization)
