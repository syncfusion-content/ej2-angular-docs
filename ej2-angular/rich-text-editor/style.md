---
layout: post
title: Style Appearance Customization | Syncfusion
description: Learn here all about Style in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Style Appearance Customization 
documentation: ug
domainurl: ##DomainURL##
---

# Style Appearance Customization in the Angular Rich Text Editor component

The content below outlines the CSS structure you can use to customize the appearance of the control according to your preferences.

## Styling the placeholder text

Use the following CSS to customize the default color in the Rich Text Editor's placeholder.

```CSS

.e-richtexteditor .e-rte-placeholder {
    color: blue;
    font-family: monospace;
}

```

## Styling the editor content area

Use the following CSS to modify the default style of the Rich Text Editor's content area, including font properties, background, and text color.

```CSS
/* To change font family and font size */
.e-richtexteditor .e-rte-content .e-content,
.e-richtexteditor .e-source-content .e-content {
    font-size: 20px;
    font-family: Segoe ui;
}

/* To change font color and content background */
.e-richtexteditor .e-rte-content,
.e-richtexteditor .e-source-content {
    background: seashell;
    color: blue;
}
```

## Customizing the toolbar appearance

Use the following CSS to customize the default color in the Rich Text Editor's toolbar icon.

```CSS
/* To change font color for toolbar icon */
.e-richtexteditor .e-rte-toolbar .e-toolbar-item .e-icons,
.e-richtexteditor .e-rte-toolbar .e-toolbar-item .e-icons:active {
    color: red;
}

/* To change font color for toolbar button */
.e-toolbar .e-tbar-btn,
.e-toolbar .e-tbar-btn:active,
.e-toolbar .e-tbar-btn:hover {
    color: red;
}

/* To change font color for toolbar button in active state*/
.e-richtexteditor .e-rte-toolbar .e-toolbar-item .e-dropdown-btn.e-active .e-icons, .e-richtexteditor .e-rte-toolbar .e-toolbar-item .e-dropdown-btn.e-active .e-rte-dropdown-btn-text {
    color: red;
}

/* To change font color for expanded toolbar items */
.e-richtexteditor .e-rte-toolbar .e-toolbar-extended .e-toolbar-item .e-tbar-btn .e-icons,
.e-toolbar.e-extended-toolbar .e-toolbar-extended .e-toolbar-item .e-tbar-btn {
    color: red;
}
```

## Styling the character count display

Use the following CSS to customize the default color in the Rich Text Editor's character count.

```CSS
/* To change font color, font family, font size and opacity  */
.e-richtexteditor .e-rte-character-count {
    color: red;
    font-family: segoe ui;
    font-size: 18px;
    opacity: 00.54;
    padding-bottom: 2px;
    padding-right: 14px;
}
```

##  Modifying the editor container border

Use the following CSS to customize the border color in the Rich Text Editor's container.

```CSS

.e-richtexteditor .e-rte-container{
    border: 2px solid #454bc1;
    border-radius: 4px;
}

```

## Highlighting specific text programmatically

Programmatically highlight a portion of the text in the editor by setting the background color. This can be achieved by applying a background style to the selected text using the Rich Text Editor's `executeCommand` method.

```typescript

import { Component, ViewChild } from '@angular/core';
import {
  NodeSelection,
  RichTextEditorAllModule,
} from '@syncfusion/ej2-angular-richtexteditor';
import {
  ToolbarService,
  LinkService,
  ImageService,
  HtmlEditorService,
  RichTextEditorComponent,
} from '@syncfusion/ej2-angular-richtexteditor';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<div><button (click)="setBackground()" class="e-btn" style="margin:5px">Apply</button>
  <ejs-richtexteditor #editor [value]="value"></ejs-richtexteditor></div>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})
export class AppComponent implements AfterViewInit {
   
    @ViewChild('editor')
    public editorObj!: RichTextEditorComponent;

    public value: string =
        "<p>The Rich Text Editor component is the WYSIWYG ('what you see is what you get') editor that provides the best user experience to create and update content. Users can format their content using standard toolbar commands.</p>";

    private nodeSelection: NodeSelection = new NodeSelection();

    setBackground() {
        const rteContent = (this.editorObj as any).contentModule.getDocument();
        const firstParagraph = (this.editorObj as any).contentModule
        .getEditPanel()
        .querySelector('p');

        if (firstParagraph && firstParagraph.firstChild) {
        this.nodeSelection.setSelectionText(
            rteContent,
            firstParagraph.firstChild,
            firstParagraph.firstChild,
            4, // Start index
            20 // End index
        );
        this.editorObj.executeCommand('backColor', 'yellow');
        }
    }
}

```

## See also

* [Text Styling and Formatting](./tools/styling-tools)