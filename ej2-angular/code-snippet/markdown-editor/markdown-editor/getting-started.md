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

To get start quickly with Angular Markdown Editor using CLI and Schematics, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=wrod5Rzg85o" %}

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
import { ToolbarService, LinkService, ImageService, MarkdownEditorService, MarkdownEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor'
@Component({
  imports: [
    RichTextEditorAllModule
  ],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-richtexteditor id='defaultRTE' [editorMode]='mode' [value]="value"></ejs-richtexteditor>`,
  providers: [ToolbarService, LinkService, ImageService, MarkdownEditorService, MarkdownEditorService]
})

export class AppComponent {
  public mode: string = 'Markdown';
  public value:string = `<p>The Syncfudion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul>
    <li>
        <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p>
    </li>
    <li>
        <p>Bulleted and numbered lists.</p>
    </li>
    <li>
        <p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p>
    </li>
    <li>
        <p>Contains undo/redo manager. </p>
    </li>
  </ul><div style="display: inline-block; width: 60%; vertical-align: top; cursor: auto;"><img alt="Sky with sun" src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png" width="309" style="min-width: 10px; min-height: 10px; width: 309px; height: 174px;" class="e-rte-image e-imginline e-rte-drag-image" height="174" /></div>  `;
}

```

## Module Injection

To create Markdown Editor with additional features, inject the required modules. The following modules are used to extend Markdown Editor's basic functionality.

* **MarkdownEditor** - Inject this module to use Rich Text Editor as markdown editor.
* **Image** - Inject this module to use image feature in Markdown Editor.
* **Link** - Inject this module to use link feature in Markdown Editor.
* **Toolbar** - Inject this module to use Toolbar feature.

These modules should be injected into the **providers** section of root **NgModule** or component class.

> Additional feature modules are available [here](https://helpstaging.syncfusion.com:14038/ej2-angular/rich-text-editor/module).

## Configure the Toolbar

Configure the toolbar with custom tools using items field of toolbarSettings property in your application.

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

To retrieve the editor contents, use the value property of Markdown Editor.

```typescript

  let rteValue: string = this.rteObj.value;

```

Or, you can use the [getHtml](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#gethtml) public method to retrieve the Markdown Editor content.

```typescript

  let rteValue: string = this.rteObj.getHtml();

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
