---
layout: post
title: Getting Started with Angular Markdown Editor component | Syncfusion
description:  Checkout and learn about Getting started with Angular Markdown Editor component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting Started
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Markdown Editor Component

This section explains the steps required to create a simple Angular Markdown Editor component and configure its available functionalities.

To enable the quick Markdown editing feature, inject `MarkdownEditorService` in the provider section of AppComponent.

Refer to the video below for guidance on building a Markdown editor with the Angular Rich Text Editor.

{% youtube "https://www.youtube.com/watch?v=6fly8220gL8" %}

## Setup Angular Environment

You can use [Angular CLI](https://github.com/angular/angular-cli) to setup your Angular applications. To install Angular CLI use the following command.

```bash
npm install -g @angular/cli@21.0.1
```

## Create an Angular Application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
```
This command will prompt you for a few settings for the new project, such as whether to add Angular routing and which stylesheet format to use.

![Initial_setup](images/Initial-setup.png)

By default, it will create a CSS-based application.

Then the CLI also displays an additional prompt asking whether to enable Server‑Side Rendering (SSR) and Static Site Generation (SSG), as shown below:

![Server_Side_Rendering_Setup](images/SSR.png)

For this setup, select **No**, as the Rich Text Editor does not require SSR or SSG for basic configuration.

Then the CLI displays another prompt related to AI tooling support, as shown below:

![AI_Tool_Setup](images/AI-Tool.png)

Any preferred option can be selected based on the development workflow or project needs.

Next, navigate to the project folder:

```bash
cd my-app
```
## Adding Syncfusion Rich Text Editor package

All the available Essential JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry.

To install Rich Text Editor component, use the following command.

```bash
npm install @syncfusion/ej2-angular-richtexteditor
```

## Adding CSS reference

The following CSS files are available in **../node_modules/@syncfusion** package folder.
This can be referenced in [src/styles.css] using following code.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/material3.css';
```
## Module Injection

To create Markdown Editor with additional features, inject the required modules. The following modules are used to extend Markdown Editor's basic functionality.

* **MarkdownEditor** - Inject this module to use Rich Text Editor as markdown editor.
* **Image** - Inject this module to use image feature in Markdown Editor.
* **Link** - Inject this module to use link feature in Markdown Editor.
* **Toolbar** - Inject this module to use Toolbar feature.

These modules should be injected into the **providers** section of root **NgModule** or component class.

> Additional feature modules are available [here](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/module).

## Adding Markdown Editor component

Modify the template in the [src/app/app.component.ts] file to render the Markdown Editor component. Add the Angular Markdown Editor by using the `<ejs-richtexteditor>` selector in the `template` section of the app.component.ts file.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/markdown-editor/markdown-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/markdown-editor/markdown-cs2/src/main.ts %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/markdown-editor/markdown-cs2/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/markdown-editor/markdown-cs2" %}

## Configure the Toolbar

Configure the toolbar with custom tools using items field of [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor#toolbarsettings) property in your application.

```typescript

import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, MarkdownEditorService , HtmlEditorService, ImageService, LinkService, TableService, ToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [
        RichTextEditorModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='markdown-editor' [editorMode]='mode' [toolbarSettings]='tools' [value]="value"></ejs-richtexteditor>`,
    providers: [ToolbarService, HtmlEditorService, MarkdownEditorService, ImageService, LinkService, TableService]
})

export class AppComponent {
    public mode: string = 'Markdown';
    public value: string ='In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation. The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.';
    public tools: ToolbarSettingsModel = {
      items: [ 'Bold', 'Italic', 'StrikeThrough', 'InlineCode', 'SuperScript', 'SubScript', '|', 'Formats', 'Blockquote', '|', 'OrderedList', 'UnorderedList', 'CreateLink', 'Image', 'CreateTable', '|', 'Undo', 'Redo', ],
    };
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
{% include code-snippet/markdown-editor/markdown-tools/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/markdown-editor/markdown-tools/src/main.ts %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/markdown-editor/markdown-tools/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/markdown-editor/markdown-tools" %}

## See also

* [How to change the editor type](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/editor-types)
* [How to render the iframe](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/editor-types/iframe)
* [How to render the toolbar in inline mode](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/editor-types/inline-editing)
* [How to insert Emoticons](https://ej2.syncfusion.com/angular/demos/#/tailwind3/rich-text-editor/insert-emoticons)
* [Blog posting using Rich Text Editor](https://ej2.syncfusion.com/angular/demos/#/tailwind3/rich-text-editor/blog-posting)
* [Reactive Form with Rich Text Editor](https://ej2.syncfusion.com/angular/demos/#/tailwind3/rich-text-editor/reactive-form)
* [Accessibility in Rich text editor](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/accessibility)
* [Keyboard support in Rich text editor](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/keyboard-support)
* [Globalization in Rich text editor](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/globalization)