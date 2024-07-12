---
layout: post
title: Getting started with Angular Rich text editor component | Syncfusion
description:  Checkout and learn about Getting started with Angular Rich text editor component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---
# Getting started with Angular Rich text editor component

This section explains the steps required to create a simple Angular Rich Text Editor component and configure its available functionalities.

## Setup Angular Environment

Use [Angular CLI](https://github.com/angular/angular-cli) to setup the Angular applications. To install Angular CLI, use the following command.

```javascript

  npm install -g @angular/cli

```

## Create an Angular Application

Start a new Angular application using the following Angular CLI command.

```javascript

  ng new my-app
  cd my-app

```

## Installing Syncfusion Rich Text Editor package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. Get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components. They are:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the following command.

Add [`@syncfusion/ej2-angular-richtexteditor`](https://www.npmjs.com/package/@syncfusion/ej2-angular-richtexteditor/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-richtexteditor --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package, use the following command.

Add [`@syncfusion/ej2-angular-richtexteditor@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-richtexteditor/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-richtexteditor@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as follows.

```bash
@syncfusion/ej2-angular-richtexteditor:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding CSS reference

Add Rich Text Editor component’s styles as given in the following `styles.css`.

```css

      @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-icons/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-richtexteditor/styles/material.css';

```

## Adding Rich Text Editor component

Modify the template in the [src/app/app.component.ts] file to render the Rich Text Editor component. Add the Angular Rich Text Editor by using the `<ejs-richtexteditor>` selector in the `template` section of the app.component.ts file.

```typescript

import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor'
@Component({
  imports: [
    RichTextEditorAllModule
  ],

  standalone: true,
  selector: 'app-root',
  template: `<ejs-richtexteditor id='defaultRTE'>
  <ng-template #valueTemplate>
  <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.
  Users can format their content using standard toolbar commands.</p>
  <p><b>Key features:</b></p>
  <ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p></li>
  <li><p>Capable of handling markdown editing.</p></li>
  <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
  <li><p>Provides a fully customizable toolbar.</p></li>
  <li><p>Provides HTML view to edit the source directly for developers.</p></li>
  <li><p>Supports third-party library integration.</p></li>
  <li><p>Allows preview of modified content before saving it.</p></li>
  <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>
  <li><p>Contains undo/redo manager. </p></li>
  <li><p>Creates bulleted and numbered lists.</p></li>
  </ul>
  </ng-template>
  </ejs-richtexteditor>`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})

export class AppComponent {

}

```

## Initialize Rich Text Editor from `<iframe>` element

The Rich Text Editor’s content is placed in an `iframe` and isolated from the rest of the page.

Initialize the Rich Text Editor on div element and set the enable field [`iframeSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#iframesettings) property to true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-iframe-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-iframe-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-iframe-cs1" %}

## Module Injection

To create Rich Text Editor with additional features, inject the required modules. The following modules are used to extend Rich Text Editor’s basic functionality.

* `Toolbar` - Inject this module to use Toolbar feature.
* `Link` - Inject this module to use link feature in Rich Text Editor.
* `Image`- Inject this module to use image feature in Rich Text Editor.
* `Table`- Inject this module to use table feature in Rich Text Editor.
* `Count` - Inject this module to use character count in Rich Text Editor.
* `HtmlEditor` - Inject this module to use Rich Text Editor as html editor.
* `MarkdownEditor`-Inject this module to use Rich Text Editor as markdown editor.
* `QuickToolbar` - Inject this module to use quick toolbar feature for the target element.
* `Resize` - Inject this module to use resize feature in Rich Text Editor.
* `FileManager` - Inject this module to use file browser feature in Rich Text Editor.
* `PasteCleanup` - Inject this module to use paste cleanup feature in Rich Text Editor.
* `FormatPainter` - Inject this module to use format painter feature in Rich Text Editor.
* `EmojiPicker` - Inject this module to use emoji picker feature in Rich Text Editor.

These modules should be injected into the provider section of `AppModule`.

## Run the application

Use the following command to run the application in the browser.

```bash
ng serve --open
```

Output will appear as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-value-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-value-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-value-cs1" %}

## Configure the Toolbar

Configure the toolbar with custom tools using items field of toolbarSettings property in your application.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-toolbar-cs1" %}

## Insert images and links

The image module inserts an image into Rich Text Editor’s content area, and the link module links external resources such as website URLs, to selected text in the Rich Text Editor’s content, respectively.

The link inject module adds a link icon to the toolbar and the image inject module adds an image icon to the toolbar.

Specifies the items to be rendered in the quick toolbar based on the target element such image, link, and text element. The quick toolbar opens to customize the element by clicking the target element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs2" %}

## Retrieve the formatted content

To retrieve the editor contents, use the value property of Rich Text Editor.

```typescript

  let rteValue: string = this.rteObj.value;

```

Or, you can use the [getHtml](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#gethtml) public method to retrieve the Rich Text Editor content.

```typescript

  let rteValue: string = this.rteObj.getHtml();

```

To fetch the Rich Text Editor's text content, use [getText](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#gettext) method.

```typescript
  
  let rteValue: string = this.rteObj.contentModule.getText();

```

## Retrieve the number of characters in the Rich Text Editor

To get the maximum number of characters in the Rich Text Editor's content, use [`getCharCount`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#getcharcount)

```typescript

  let rteCount: number = this.rteObj.getCharCount();

```

> You can refer to our [Angular Rich Text Editor](https://www.syncfusion.com/angular-components/angular-wysiwyg-rich-text-editor) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Rich Text Editor example](https://ej2.syncfusion.com/angular/demos/#/bootstrap4/rich-text-editor/rich-text-editor) to knows how to render and configure the rich text editor tools.

## See Also

* [How to change the editor type](./editor-modes)
* [How to render the iframe](./iframe)
* [How to render the toolbar in inline mode](./inline-mode)
* [How to insert Emoticons](https://ej2.syncfusion.com/angular/demos/#/material/rich-text-editor/insert-emoticons)
* [Blog posting using Rich Text Editor](https://ej2.syncfusion.com/angular/demos/#/material/rich-text-editor/blog-posting)
* [Reactive Form with Rich Text Editor](https://ej2.syncfusion.com/angular/demos/#/material/rich-text-editor/reactive-form)