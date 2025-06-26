---
layout: post
title: Built-in Tools in Angular Rich Text Editor component | Syncfusion
description: Learn here all about Built-in Tools in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Built-in Tools
documentation: ug
domainurl: ##DomainURL##
---

# Built-in Tools in Angular Rich Text Editor Component

By default, the Angular Rich Text Editor displays the following toolbar items:

> `Bold` , `Italic` , `Underline` , `|` , `Formats` , `Alignments` , `Blockquote`, `OrderedList` , `UnorderedList` , `|` , `CreateLink` , `Image` , `|` , `SourceCode` , `Undo` , `Redo`

These default items cover essential text editing features, such as text formatting, lists, alignment, and linking.

## Available toolbar items

The following table shows the list of available tools in the Rich Text Editor's toolbar.

The order of items in the toolbar can be customized to meet your application's requirements. If no specific order is set, the editor will render the above default toolbar items. Below is a list of all available toolbar items in the Rich Text Editor.

### Text formatting

It provides tools for applying text styles such as bold, italic, underline, strike-through, and more to modify the appearance of the text.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| Bold  | ![Bold icon](../images/bold.png) | Text that is thicker and darker than usual. | toolbarSettings: { items: ['Bold']} |
| Italic | ![Italic icon](../images/italic.png) | Shows a text that is leaned to the right. | toolbarSettings: { items: ['Italic']} |
| Underline | ![Underline icon](../images/under-line.png) | The underline is added to the selected text. | toolbarSettings: { items: ['Underline']} |
| StrikeThrough | ![StrikeThrough icon](../images/strikethrough.png) | Apply double line strike through formatting for the selected text. |toolbarSettings: { items: ['StrikeThrough']}|
| ClearFormat | ![ClearFormat icon](../images/clear-format.png) | The clear format tool is useful to remove all formatting styles (such as bold, italic, underline, color, superscript, subscript, and more) from currently selected text. As a result, all the text formatting will be cleared and return to its default formatting styles.|toolbarSettings: { items: ['ClearFormat']}|
| Blockquote | ![Blockquote icon](../images/blockquote.png) | Blockquotes visually highlight important text within an editor, emphasizing key information or quotations. | toobarSettings: { items: ['Blockquote']}|
| SubScript | ![SubScript icon](../images/sub-script.png) | Makes the selected text as subscript (lower).|toolbarSettings: { items: ['SubScript']}|
| SuperScript | ![SuperScript icon](../images/super-script.png) | Makes the selected text as superscript (higher).|toolbarSettings: { items: ['SuperScript']}|
| LowerCase | ![LowerCase icon](../images/lower-case.png) | Change the case of selected text to lower in the content. |toolbarSettings: { items: ['LowerCase']}|
| UpperCase | ![UpperCase icon](../images/upper-case.png) | Change the case of selected text to upper  in the content.|toolbarSettings: { items: ['UpperCase’']}|

### Font & styling

Tools in this section allow users to customize font properties such as font family, size, color, background color, and paragraph formatting.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| FontName | ![FontName icon](../images/font-name.png) | Defines the fonts that appear under the Font Family DropDownList from the Rich Text Editor's toolbar. |toolbarSettings: { items: ['FontName']}|
| FontSize | ![FontSize icon](../images/font-size.png) | Defines the font sizes that appear under the Font Size DropDownList from the Rich Text Editor's toolbar.|toolbarSettings: { items: ['FontSize']}|
| FontColor | ![FontColor icon](../images/font-color.png) | Specifies an array of colors can be used in the colors popup for font color.|toolbarSettings: { items: ['FontColor']}|
| BackgroundColor | ![BackgroundColor icon](../images/background-color.png) | Specifies an array of colors can be used in the colors popup for background color.|toolbarSettings: { items: ['BackgroundColor']}|
| Formats (Paragraph, Headings) | ![Format icon](../images/formats.png) | An Object with the options that will appear in the Paragraph Format dropdown from the toolbar. |toolbarSettings: { items: ['Formats']}|

### Alignment

This section provides alignment options for the text or content, allowing users to justify text or align it to the left, center, or right.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| Alignment | ![Alignment icon](../images/alignments.png) | Align the content with left, center, and right margin.|toolbarSettings: { items: ['Alignments']}|
| JustifyLeft | ![JustifyLeft icon](../images/align-left.png) | Allows each line to begin at the same distance from the editor’s left-hand side. | toolbarSettings: { items: ['JustifyLeft']} |
| JustifyCenter | ![JustifyCenter icon](../images/align-center.png) | There is an even space on each side of each line since the text is not aligned to the left or right margins. | toolbarSettings: { items: ['JustifyCenter']} |
| JustifyRight | ![JustifyRight icon](../images/align-right.png) | Allows each line to end at the same distance from the editor’s right-hand side. | toolbarSettings: { items: ['JustifyRight']} |
| JustifyFull | ![JustifyFull icon](../images/align-justify.png) | The text is aligned with both right and left margins. | toolbarSettings: { items: ['JustifyFull']} |

### Lists & indentation

Tools here allow users to create ordered and unordered lists, change the list style, and adjust indentation levels for improved document structure.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| OrderedList | ![OrderedList icon](../images/order-list.png) | Create a new list item(numbered). |toolbarSettings: { items: ['OrderedList']}|
| UnorderedList | ![UnorderedList icon](../images/unorder-list.png) | Create a new list item(bulleted). |toolbarSettings: { items: ['UnorderedList']}|
| NumberFormatList | ![NumberFormatList icon](../images/number-format.png) | Allows to create list items with various list style types(numbered).|toolbarSettings: { items: ['NumberFormatList']}|
| BulletFormatList | ![BulletFormatList icon](../images/bullet-format.png) | Allows to create list items with various list style types(bulleted).|toolbarSettings: { items: ['BulletFormatList']}|
| Indent | ![Indent icon](../images/increase-indent.png) | Allows to increase the indent level of the content.|toolbarSettings: { items: ['Indent']}|
| Outdent | ![Outdent icon](../images/decrease-indent.png) | Allows to decrease the indent level of the content.|toolbarSettings: { items: ['Outdent']}|

### Hyperlinks

This section provides tools for inserting and managing hyperlinks within the content. Users can create new links or modify existing ones to enhance document navigation and interactivity.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| Hyperlink | ![Hyperlink icon](../images/create-link.png) | Creates a hyperlink to a text or image to a specific location in the content.|toolbarSettings: { items: ['CreateLink']}|
| InsertLink | ![InsertLink icon](../images/create-link.png) |Allows users to add a link to a particular item. | toolbarSettings: { items: ['InsertLink']} |

#### Link quicktoolbar items

The link quicktoolbar provides tools to manage hyperlinks in the Rich Text Editor, allowing users to add, edit, or remove links from selected text or images directly within the editor.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| OpenLink | ![OpenLink icon](../images/open-link.png) | To open the URL link that is  attached to the selected text. | quickToolbarSettings: { link: ['OpenLink']} |
| EditLink | ![EditLink icon](../images/edit-link.png) | Allows you to change the URL that has been attached to a specific item. | quickToolbarSettings: { link: ['EditLink']} |
| RemoveLink | ![RemoveLink icon](../images/remove-link.png) | Allows you to remove the applied link from the selected item. | quickToolbarSettings: { link: ['RemoveLink']} |

### Images

This section contains the primary tool for inserting images into the editor.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| Insert Image | ![Images icon](../images/insert-image.png) | Inserts an image from an online source or local computer. |toolbarSettings: { items: ['Image']}|

#### Image quicktoolbar items

The image quicktoolbar offers a set of tools to edit images inserted in the Rich Text Editor. It allows users to modify image properties, including alignment, size, alternate text, and links, enhancing image management in the content.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| Replace Image  | ![Replace icon](../images/image-replace.png) | Replace the selected image with another image. | quickToolbarSettings: { image: ['Replace']} |
| Align Image | ![Alignment icon](../images/alignments.png) | The image can be aligned to the right, left, or center. | quickToolbarSettings: { image: ['Align']} |
| Remove Image | ![Remove icon](../images/table-remove.png) | Allows to remove the selected image from the editor. | quickToolbarSettings: { image: ['Remove']} |
| OpenImageLink | ![OpenImageLink icon](../images/open-link.png) | Opens the link that is attached to the selected image. | quickToolbarSettings: { image: ['OpenImageLink']} |
| EditImageLink | ![EditImageLink icon](../images/edit-link.png) | Allows to edit the link that is attached to the selected image. | quickToolbarSettings: { image: ['EditImageLink']} |
| RemoveImageLink | ![RemoveImageLink icon](../images/remove-link.png) | Removes the link that is attached to the selected image. | quickToolbarSettings: { image: ['RemoveImageLink']} |
| Display | ![Display icon](../images/display.png) | Allows you to choose whether an image should be shown inline or as a block. | quickToolbarSettings: { image: ['Display']} |
| AltText | ![AltText icon](../images/alt-text.png) | To display image description when an image on a Web page cannot be displayed. | quickToolbarSettings: { image: ['AltText']} |
| Dimension | ![Dimension icon](../images/dimension.png) | Allows you to customize the image’s height and width. | quickToolbarSettings: { image: ['Dimension']} |

### Tables

This section offers the main tool for creating tables within the content.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| CreateTable | ![CreateTable icon](../images/create-table.png) | Create a table with defined columns and rows. | toolbarSettings: { items: ['CreateTable']} |

#### Table quicktoolbar items

The table quicktoolbar provides options for table editing within the Rich Text Editor. Users can insert or remove rows and columns, merge or split cells, and access table properties for easier table management and customization.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| RemoveTable | ![RemoveTable icon](../images/table-remove.png) | Removes the selected table and its contents. | quickToolbarSettings: { table: ['TableRemove']} |
| TableHeader | ![TableHeader icon](../images/table-headers.png) | Allows you to add a table header. | quickToolbarSettings: { table: ['TableHeader']} |
| TableColumns | ![TableColumns icon](../images/table-columns.png) | Shows the dropdown to insert a column or delete the selected column. | quickToolbarSettings: { table: ['TableColumns']} |
| TableRows | ![TableRows icon](../images/table-row.png) | Shows the dropdown to insert a row ors delete the selected row. | quickToolbarSettings: { table: ['TableRows']} |
| TableCellHorizontalAlign | ![TableCellHorizontalAlign icon](../images/alignments.png) | Allows the table cell content to be aligned horizontally. | quickToolbarSettings: { table: ['TableCellHorizontalAlign']} |
| TableCellVerticalAlign | ![TableCellVerticalAlign icon](../images/vertical-align.png) | Allows the table cell content to be aligned vertically. | quickToolbarSettings: { table: ['TableCellVerticalAlign']} |
| TableEditProperties | ![TableEditProperties icon](../images/table-edit.png) | Allows you to change the table width, padding, and cell spacing styles. | quickToolbarSettings: { table: ['TableEditProperties']} |

### Horizontal Line

Horizontal lines visually separate sections of content in the editor, enhancing readability and layout clarity.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| Horizontal Line | ![HorizontalLine icon](../images/horizontal-icon.png) | Allows you to insert horizontal line.|toolbarSettings: { items: ['HorizontalLine']} |

### Undo & redo

These tools allow users to easily undo or redo any changes made within the editor to restore or repeat previous actions.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| Undo | ![Undo icon](../images/undo.png) | Allows to undo the actions.|toolbarSettings: { items: ['Undo']} |
| Redo | ![Redo icon](../images/redo.png) | Allows to redo the actions.|toolbarSettings: { items: ['Redo']}|

### Other tools

This section contains miscellaneous tools such as full-screen mode, print, preview, source code editing, and clearing all styles from text.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| FullScreen | ![FullScreen icon](../images/maximize.png) | Stretches the editor to the maximum width and height of the browser window.|toolbarSettings: { items: ['FullScreen']}|
| Maximize | ![Maximize icon](../images/maximize.png) | Stretches the editor to the maximum width and height of the browser window. | toolbarSettings: { items: ['Maximize']} |
| Minimize | ![Minimize icon](../images/minimize.png) | Shrinks the editor to the default width and height. | toolbarSettings: { items: ['Minimize']} |
| Preview | ![Preview icon](../images/preview.png) | Allows to see how the editor’s content looks in a browser. | toolbarSettings: { items: ['Preview']} |
| InsertCode | ![InsertCode icon](../images/insert-code.png) | Represents preformatted text which is to be presented exactly as written in the HTML file. | toolbarSettings: { items: ['InsertCode']} |
| Print | ![Print icon](../images/print.png) | Allows to print the editor content. |toolbarSettings: { items: ['Print']}|
| ClearAll | ![ClearAll icon](../images/clear-all.png) | Removes all styles that have been applied to the selected text.| toolbarSettings: { items: ['ClearAll']} |
| SourceCode | ![SourceCode icon](../images/code-view.png)  | Rich Text Editor includes the ability for users to directly edit HTML code via “Source View”. If you made any modification in Source view directly, synchronize with Design view.|toolbarSettings: { items: ['SourceCode']}|

## Removing built-in tool from toolbar

Remove the build-in tools from the toolbar by using the [toolbarSettings.items](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#items) property.

```typescript

import { Component, AfterViewInit } from '@angular/core';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='editor' [toolbarSettings]='tools' [value]='value'>
  </ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService,  TableService]
})
export class AppComponent implements AfterViewInit {

    public value: string = "<p>The Rich Text Editor component is WYSIWYG (\"what you see is what you get\") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p><p><b>Key features:</b></p><ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p></li><li><p>Capable of handling markdown editing.</p></li><li><p>Contains a modular library to load the necessary functionality on demand.</p></li><li><p>Provides a fully customizable toolbar.</p></li><li><p>Provides HTML view to edit the source directly for developers.</p></li><li><p>Supports third-party library integration.</p></li><li><p>Allows preview of modified content before saving it.</p></li><li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li><li><p>Contains undo/redo manager.</p></li><li><p>Creates bulleted and numbered lists.</p></li></ul>";

    public tools: object = {
        items: [ 'Undo', 'Redo', '|', 'Bold', 'Italic', 'Underline', 'StrikeThrough', '|', 'FontName', 'FontSize', 'FontColor', 'BackgroundColor'
        ],
    };
}

```