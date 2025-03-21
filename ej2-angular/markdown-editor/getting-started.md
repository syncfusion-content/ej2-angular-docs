---
layout: post
title: Getting started with Angular Markdown Editor component | Syncfusion
description:  Checkout and learn about Getting started with Angular Markdown editor component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Markdown Editor Component

This section explains the steps required to create a simple Angular Markdown Editor component and configure its available functionalities.

To enable the quick Markdown editing feature, inject `MarkdownEditorService` in the provider section of AppComponent.

Refer to the video below for guidance on building a Markdown editor with the Angular Rich Text Editor.

{% youtube "https://www.youtube.com/watch?v=6fly8220gL8" %}

## Setup Angular Environment

You can use [Angular CLI](https://github.com/angular/angular-cli) to setup your Angular applications. To install Angular CLI use the following command.

```bash
npm install -g @angular/cli@16.0.1
```

## Create an Angular Application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
```
This command will prompt you for a few settings for the new project, such as whether to add Angular routing and which stylesheet format to use.

![Initial_setup](images/Initial-setup.png)

By default, it will create a CSS-based application.

Next, navigate to the created project folder:

```
cd my-app
```
## Adding Syncfusion Rich Text Edior package

All the available Essential JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry.

To install Rich Text Editor component, use the following command.

```bash
npm install @syncfusion/ej2-angular-richtexteditor --save
```

> The **--save** will instruct NPM to include the rich text editor package inside of the **dependencies** section of the **package.json**.

## Adding CSS reference

The following CSS files are available in **../node_modules/@syncfusion** package folder.
This can be referenced in [src/styles.css] using following code.

```css

  @import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-icons/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-lists/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-richtexteditor/styles/material.css';

```

## Adding Markdown Editor component

Modify the template in the [src/app/app.component.ts] file to render the Markdown Editor component. Add the Angular Markdown Editor by using the `<ejs-richtexteditor>` selector in the `template` section of the app.component.ts file.

```typescript

import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, MarkdownEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor'
@Component({
  imports: [
    RichTextEditorAllModule
  ],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-richtexteditor id='markdown-editor' [editorMode]='mode' [value]="value"></ejs-richtexteditor>`,
  providers: [ToolbarService, LinkService, ImageService, MarkdownEditorService]
})

export class AppComponent {
  public mode: string = 'Markdown';
  public value:string = `In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content. `;
}

```

## Module Injection

To create Markdown Editor with additional features, inject the required modules. The following modules are used to extend Markdown Editor's basic functionality.

* **MarkdownEditor** - Inject this module to use Rich Text Editor as markdown editor.
* **Image** - Inject this module to use image feature in Markdown Editor.
* **Link** - Inject this module to use link feature in Markdown Editor.
* **Toolbar** - Inject this module to use Toolbar feature.

These modules should be injected into the **providers** section of root **NgModule** or component class.

> Additional feature modules are available [here](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/module).

## Configure the Toolbar

Configure the toolbar with custom tools using items field of [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#toolbarsettings) property in your application.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/markdown-editor/markdown-tools/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/markdown-editor/markdown-tools/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/markdown-editor/markdown-tools" %}

## Run the application

Use the following command to run the application in the browser.

```bash
ng serve --open
```

## Retrieve the formatted content

To retrieve the editor contents, use the [value](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#value) property of Markdown Editor.

```typescript

  let rteValue: string = this.rteObj.value;

```

To fetch the Markdown Editor's text content, use [getText](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#gettext) method.

```typescript
  
  let rteValue: string = this.rteObj.contentModule.getText();

```

## Retrieve the number of characters in the Markdown Editor

To get the maximum number of characters in the Markdown Editor's content, use [getCharCount](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#getcharcount)

```typescript

  let rteCount: number = this.rteObj.getCharCount();

```

> You can refer to our [Angular Rich Text Editor](https://www.syncfusion.com/angular-components/angular-wysiwyg-rich-text-editor) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Markdown Editor example](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/markdown-editor/overview) to knows how to render and configure the markdown editor tools.

## See Also

* [How to change the editor type](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/editor-modes)
* [How to render the iframe](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/iframe)
* [How to render the toolbar in inline mode](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/inline-mode)
* [How to insert Emoticons](https://ej2.syncfusion.com/angular/demos/#/material/rich-text-editor/insert-emoticons)
* [Blog posting using Rich Text Editor](https://ej2.syncfusion.com/angular/demos/#/material/rich-text-editor/blog-posting)
* [Reactive Form with Rich Text Editor](https://ej2.syncfusion.com/angular/demos/#/material/rich-text-editor/reactive-form)
* [Accessibility in Rich text editor](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/accessibility)
* [Keyboard support in Rich text editor](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/keyboard-support)
* [Globalization in Rich text editor](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/globalization)
