---
layout: post
title: Editor mode in Angular Rich text editor component | Syncfusion
description: Learn here all about Editor mode in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Editor mode 
documentation: ug
domainurl: ##DomainURL##
---

# Editor mode in Angular Rich text editor component

The Rich Text Editor component used to create, edit and return the content in valid HTML markup or markdown (MD) of the content. It supports following two editing formation.

* HTML Editor
* Markdown Editor

## HTML Editor

Rich Text Editor is a WYSIWYG editing control for formatting the word content as HTML.

The HTML editing mode is the default mode of Rich Text Editor. Which is used for format the content through the available toolbar items and returns the valid HTML markup. Set the [`editorMode`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#editormode) property as `HTML`.

>To use HTML editing feature, inject `HtmlEditorService` in the provider section.

```typescript

/**
* RTE HTML Editor functionality Sample
*/
import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
    selector: 'app-root',
    template: `<ejs-richtexteditor #defaultRTE id='defaultRTE' [value]="value"></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppComponent  {
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
  </ul><div style="display: inline-block; width: 60%; vertical-align: top; cursor: auto;"><img alt="Sky with sun" src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png" width="309" style="min-width: 10px; min-height: 10px; width: 309px; height: 174px;" class="e-rte-image e-imginline e-rte-drag-image" height="174" /></div> `;
}

```

## Markdown Editor

Set the [`editorMode`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#editormode) property value as `Markdown` to create or edit the content and apply formatting to view markdown formatted content.

The third-party library such as `Marked` or any other library is used to convert markdown into HTML content.

* The Supported Tags are  `h6`,`h5`,`h4`,`h3`,`h2`,`h1`,`blockquote`,`pre`,`p`,`ol`,`ul`.
* The Supported Selection Tags are `Bold`, `Italic`, `StrikeThrough`, `InlineCode`, `SubScript`, `SuperScript`, `UpperCase`, `LowerCase`.
* The supported insert commands are `Image`, `Link` and `Table`.

For further details on Markdown editing, refer to the [`Markdown`](../rich-text-editor/markdown)

```typescript

    /**
    * RTE MarkDown Editor Sample
    */
    import { Component } from '@angular/core';
    import { ToolbarService, LinkService, ImageService, MarkdownEditorService } from '@syncfusion/ej2-angular-richtexteditor';
    @Component({
    selector: 'app-root',
    template: `<ejs-richtexteditor #rteMarkDown id='markDown' [editorMode]='mode' [value]="value"></ejs-richtexteditor>`,
               providers: [ToolbarService, LinkService, ImageService, MarkdownEditorService]
})
export class AppComponent  {
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
    </ul><div style="display: inline-block; width: 60%; vertical-align: top; cursor: auto;"><img alt="Sky with sun" src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png" width="309" style="min-width: 10px; min-height: 10px; width: 309px; height: 174px;" class="e-rte-image e-imginline e-rte-drag-image" height="174" /></div> `;
}

```
