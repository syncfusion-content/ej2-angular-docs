---
layout: post
title: Toolbar in Angular Rich Text Editor component | Syncfusion
description: Learn here all about Toolbar in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Toolbar 
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar in Angular Rich Text Editor component

The Syncfusion Angular Rich Text Editor component provides a versatile and powerful toolbar to enhance your text editing experience. The toolbar contains a variety of formatting, styling, and editing tools, allowing users to create and modify content efficiently.

## Tools

### Default Toolbar Items

By default, the Angular Rich Text Editor displays the following toolbar items:

> `Bold` , `Italic` , `Underline` , `|` , `Formats` , `Alignments` , `Blockquote`, `OrderedList` , `UnorderedList` , `|` , `CreateLink` , `Image` , `|` , `SourceCode` , `Undo` , `Redo`

These default items cover essential text editing features, such as text formatting, lists, alignment, and linking.

### Available Toolbar Items

The following table shows the list of available tools in the Rich Text Editor's toolbar.

The order of items in the toolbar can be customized to meet your application's requirements. If no specific order is set, the editor will render the above default toolbar items. Below is a list of all available toolbar items in the Rich Text Editor.

#### Text formatting

It provides tools for applying text styles such as bold, italic, underline, strike-through, and more to modify the appearance of the text.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| Bold  | ![Bold icon](./images/bold.png) | Text that is thicker and darker than usual. | toolbarSettings: { items: ['Bold']} |
| Italic | ![Italic icon](./images/italic.png) | Shows a text that is leaned to the right. | toolbarSettings: { items: ['Italic']} |
| Underline | ![Underline icon](./images/under-line.png) | The underline is added to the selected text. | toolbarSettings: { items: ['Underline']} |
| StrikeThrough | ![StrikeThrough icon](./images/strikethrough.png) | Apply double line strike through formatting for the selected text. |toolbarSettings: { items: ['StrikeThrough']}|
| ClearFormat | ![ClearFormat icon](./images/clear-format.png) | The clear format tool is useful to remove all formatting styles (such as bold, italic, underline, color, superscript, subscript, and more) from currently selected text. As a result, all the text formatting will be cleared and return to its default formatting styles.|toolbarSettings: { items: ['ClearFormat']}|
| Blockquote | ![Blockquote icon](./images/blockquote.png) | Blockquotes visually highlight important text within an editor, emphasizing key information or quotations. | toobarSettings: { items: ['Blockquote']}|
| SubScript | ![SubScript icon](./images/sub-script.png) | Makes the selected text as subscript (lower).|toolbarSettings: { items: ['SubScript']}|
| SuperScript | ![SuperScript icon](./images/super-script.png) | Makes the selected text as superscript (higher).|toolbarSettings: { items: ['SuperScript']}|
| LowerCase | ![LowerCase icon](./images/lower-case.png) | Change the case of selected text to lower in the content. |toolbarSettings: { items: ['LowerCase']}|
| UpperCase | ![UpperCase icon](./images/upper-case.png) | Change the case of selected text to upper  in the content.|toolbarSettings: { items: ['UpperCase’']}|

#### Font & styling

Tools in this section allow users to customize font properties such as font family, size, color, background color, and paragraph formatting.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| FontName | ![FontName icon](./images/font-name.png) | Defines the fonts that appear under the Font Family DropDownList from the Rich Text Editor's toolbar. |toolbarSettings: { items: ['FontName']}|
| FontSize | ![FontSize icon](./images/font-size.png) | Defines the font sizes that appear under the Font Size DropDownList from the Rich Text Editor's toolbar.|toolbarSettings: { items: ['FontSize']}|
| FontColor | ![FontColor icon](./images/font-color.png) | Specifies an array of colors can be used in the colors popup for font color.|toolbarSettings: { items: ['FontColor']}|
| BackgroundColor | ![BackgroundColor icon](./images/background-color.png) | Specifies an array of colors can be used in the colors popup for background color.|toolbarSettings: { items: ['BackgroundColor']}|
| Formats (Paragraph, Headings) | ![Format icon](./images/formats.png) | An Object with the options that will appear in the Paragraph Format dropdown from the toolbar. |toolbarSettings: { items: ['Formats']}|

#### Alignment

This section provides alignment options for the text or content, allowing users to justify text or align it to the left, center, or right.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| Alignment | ![Alignment icon](./images/alignments.png) | Align the content with left, center, and right margin.|toolbarSettings: { items: ['Alignments']}|
| JustifyLeft | ![JustifyLeft icon](./images/align-left.png) | Allows each line to begin at the same distance from the editor’s left-hand side. | toolbarSettings: { items: ['JustifyLeft']} |
| JustifyCenter | ![JustifyCenter icon](./images/align-center.png) | There is an even space on each side of each line since the text is not aligned to the left or right margins. | toolbarSettings: { items: ['JustifyCenter']} |
| JustifyRight | ![JustifyRight icon](./images/align-right.png) | Allows each line to end at the same distance from the editor’s right-hand side. | toolbarSettings: { items: ['JustifyRight']} |
| JustifyFull | ![JustifyFull icon](./images/align-justify.png) | The text is aligned with both right and left margins. | toolbarSettings: { items: ['JustifyFull']} |

#### Lists & indentation

Tools here allow users to create ordered and unordered lists, change the list style, and adjust indentation levels for improved document structure.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| OrderedList | ![OrderedList icon](./images/order-list.png) | Create a new list item(numbered). |toolbarSettings: { items: ['OrderedList']}|
| UnorderedList | ![UnorderedList icon](./images/unorder-list.png) | Create a new list item(bulleted). |toolbarSettings: { items: ['UnorderedList']}|
| NumberFormatList | ![NumberFormatList icon](./images/number-format.png) | Allows to create list items with various list style types(numbered).|toolbarSettings: { items: ['NumberFormatList']}|
| BulletFormatList | ![BulletFormatList icon](./images/bullet-format.png) | Allows to create list items with various list style types(bulleted).|toolbarSettings: { items: ['BulletFormatList']}|
| Indent | ![Indent icon](./images/increase-indent.png) | Allows to increase the indent level of the content.|toolbarSettings: { items: ['Indent']}|
| Outdent | ![Outdent icon](./images/decrease-indent.png) | Allows to decrease the indent level of the content.|toolbarSettings: { items: ['Outdent']}|

#### Hyperlinks

This section provides tools for inserting and managing hyperlinks within the content. Users can create new links or modify existing ones to enhance document navigation and interactivity.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| Hyperlink | ![Hyperlink icon](./images/create-link.png) | Creates a hyperlink to a text or image to a specific location in the content.|toolbarSettings: { items: ['CreateLink']}|
| InsertLink | ![InsertLink icon](./images/create-link.png) |Allows users to add a link to a particular item. | toolbarSettings: { items: ['InsertLink']} |

##### Link quicktoolbar items

The link quicktoolbar provides tools to manage hyperlinks in the Rich Text Editor, allowing users to add, edit, or remove links from selected text or images directly within the editor.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| OpenLink | ![OpenLink icon](./images/open-link.png) | To open the URL link that is  attached to the selected text. | quickToolbarSettings: { link: ['OpenLink']} |
| EditLink | ![EditLink icon](./images/edit-link.png) | Allows you to change the URL that has been attached to a specific item. | quickToolbarSettings: { link: ['EditLink']} |
| RemoveLink | ![RemoveLink icon](./images/remove-link.png) | Allows you to remove the applied link from the selected item. | quickToolbarSettings: { link: ['RemoveLink']} |

#### Images

This section contains the primary tool for inserting images into the editor.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| Insert Image | ![Images icon](./images/insert-image.png) | Inserts an image from an online source or local computer. |toolbarSettings: { items: ['Image']}|

##### Image quicktoolbar items

The image quicktoolbar offers a set of tools to edit images inserted in the Rich Text Editor. It allows users to modify image properties, including alignment, size, alternate text, and links, enhancing image management in the content.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| Replace Image  | ![Replace icon](./images/image-replace.png) | Replace the selected image with another image. | quickToolbarSettings: { image: ['Replace']} |
| Align Image | ![Alignment icon](./images/alignments.png) | The image can be aligned to the right, left, or center. | quickToolbarSettings: { image: ['Align']} |
| Remove Image | ![Remove icon](./images/table-remove.png) | Allows to remove the selected image from the editor. | quickToolbarSettings: { image: ['Remove']} |
| OpenImageLink | ![OpenImageLink icon](./images/open-link.png) | Opens the link that is attached to the selected image. | quickToolbarSettings: { image: ['OpenImageLink']} |
| EditImageLink | ![EditImageLink icon](./images/edit-link.png) | Allows to edit the link that is attached to the selected image. | quickToolbarSettings: { image: ['EditImageLink']} |
| RemoveImageLink | ![RemoveImageLink icon](./images/remove-link.png) | Removes the link that is attached to the selected image. | quickToolbarSettings: { image: ['RemoveImageLink']} |
| Display | ![Display icon](./images/display.png) | Allows you to choose whether an image should be shown inline or as a block. | quickToolbarSettings: { image: ['Display']} |
| AltText | ![AltText icon](./images/alt-text.png) | To display image description when an image on a Web page cannot be displayed. | quickToolbarSettings: { image: ['AltText']} |
| Dimension | ![Dimension icon](./images/dimension.png) | Allows you to customize the image’s height and width. | quickToolbarSettings: { image: ['Dimension']} |

#### Tables

This section offers the main tool for creating tables within the content.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| CreateTable | ![CreateTable icon](./images/create-table.png) | Create a table with defined columns and rows. | toolbarSettings: { items: ['CreateTable']} |

##### Table quicktoolbar items

The table quicktoolbar provides options for table editing within the Rich Text Editor. Users can insert or remove rows and columns, merge or split cells, and access table properties for easier table management and customization.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| RemoveTable | ![RemoveTable icon](./images/table-remove.png) | Removes the selected table and its contents. | quickToolbarSettings: { table: ['TableRemove']} |
| TableHeader | ![TableHeader icon](./images/table-headers.png) | Allows you to add a table header. | quickToolbarSettings: { table: ['TableHeader']} |
| TableColumns | ![TableColumns icon](./images/table-columns.png) | Shows the dropdown to insert a column or delete the selected column. | quickToolbarSettings: { table: ['TableColumns']} |
| TableRows | ![TableRows icon](./images/table-row.png) | Shows the dropdown to insert a row ors delete the selected row. | quickToolbarSettings: { table: ['TableRows']} |
| TableCellHorizontalAlign | ![TableCellHorizontalAlign icon](./images/alignments.png) | Allows the table cell content to be aligned horizontally. | quickToolbarSettings: { table: ['TableCellHorizontalAlign']} |
| TableCellVerticalAlign | ![TableCellVerticalAlign icon](./images/vertical-align.png) | Allows the table cell content to be aligned vertically. | quickToolbarSettings: { table: ['TableCellVerticalAlign']} |
| TableEditProperties | ![TableEditProperties icon](./images/table-edit.png) | Allows you to change the table width, padding, and cell spacing styles. | quickToolbarSettings: { table: ['TableEditProperties']} |

#### Undo & redo

These tools allow users to easily undo or redo any changes made within the editor to restore or repeat previous actions.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| Undo | ![Undo icon](./images/undo.png) | Allows to undo the actions.|toolbarSettings: { items: ['Undo']} |
| Redo | ![Redo icon](./images/redo.png) | Allows to redo the actions.|toolbarSettings: { items: ['Redo']}|

#### Other tools

This section contains miscellaneous tools such as full-screen mode, print, preview, source code editing, and clearing all styles from text.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| FullScreen | ![FullScreen icon](./images/maximize.png) | Stretches the editor to the maximum width and height of the browser window.|toolbarSettings: { items: ['FullScreen']}|
| Maximize | ![Maximize icon](./images/maximize.png) | Stretches the editor to the maximum width and height of the browser window. | toolbarSettings: { items: ['Maximize']} |
| Minimize | ![Minimize icon](./images/minimize.png) | Shrinks the editor to the default width and height. | toolbarSettings: { items: ['Minimize']} |
| Preview | ![Preview icon](./images/preview.png) | Allows to see how the editor’s content looks in a browser. | toolbarSettings: { items: ['Preview']} |
| InsertCode | ![InsertCode icon](./images/insert-code.png) | Represents preformatted text which is to be presented exactly as written in the HTML file. | toolbarSettings: { items: ['InsertCode']} |
| Print | ![Print icon](./images/print.png) | Allows to print the editor content. |toolbarSettings: { items: ['Print']}|
| ClearAll | ![ClearAll icon](./images/clear-all.png) | Removes all styles that have been applied to the selected text.| toolbarSettings: { items: ['ClearAll']} |
| SourceCode | ![SourceCode icon](./images/code-view.png)  | Rich Text Editor includes the ability for users to directly edit HTML code via “Source View”. If you made any modification in Source view directly, synchronize with Design view.|toolbarSettings: { items: ['SourceCode']}|

### Custom Toolbar Items

The Rich Text Editor allows you to configure your own commands to its toolbar using the  [`toolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#toolbarSettings) property. The command can be plain text, icon, or HTML template. The order and the group can also be defined where the command should be included. Bind action to the command by getting its instance.

This sample shows how to add your own commands to the toolbar of the Rich Text Editor. The “Ω” command is added to insert special characters in the editor. By clicking the “Ω” command, it will show the special characters list, and then choose the character to be inserted in the editor.

The following code snippet illustrates custom tool with tooltip text which will be included in [`items`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#items) field of the toolbarSettings property.

To get start quickly with Custom tool configuration in Angular Rich Text Editor component, refer to the video below.

{% youtube "https://www.youtube.com/watch?v=zQtXvvPxAJQ" %}

The Rich Text Editor provides options to customize tool functionalities. Use the [`undo`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarStatusEventArgs/) property to enable or disable the undo function for specific tools. Additionally, the [`click`](https://helpej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarClickEventArgs/) property lets you configure and bind the onclick event of a tool to a specific method.

This sample demonstrates how to add a custom "Ω" icon to the toolbar. Clicking on this icon opens a dialog where you can insert special characters into the editor. It also shows how to enable undo and redo functionalities.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs30/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs30/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs30" %}

> When rendering any component for the custom toolbar, like a dropdown, the focus may be lost, causing it to render outside the Rich Text Editor and triggering a blur event. This can interfere with proper functionalities like cursor focus. To prevent this issue, it is recommended to assign the e-rte-elements class to the component rendered in the custom toolbar.

### Enabling and Disabling Toolbar Items

You can use the [`enableToolbarItem`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#enabletoolbaritem) and [`disableToolbarItem`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#disabletoolbaritem) methods to control the state of toolbar items. This methods takes a single item or an array of [items](#available-toolbar-items) as parameter.

>You can add the command name `Custom` to disable the custom toolbar items on source code view and other quicktoolbar operations.

## How to Enable the Toolbar

The Rich Text Editor toolbar contains a collection of tools such as bold, italic and text alignment buttons that are used to format the content. However, in most integrations, you can customize the toolbar configurations easily to suit your needs.

To get start quickly about customizing the toolbar in Angular Rich Text Editor component, refer to the video below.

{% youtube "https://www.youtube.com/watch?v=zQtXvvPxAJQ" %}

>To use toolbar feature, configure `ToolbarService` in the provider section.

The Rich Text Editor allows you to configure different types of toolbar using [`type`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#type) field in [`toolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/) property. The types of toolbar are:

1. Expand
2. MultiRow
3. Scrollable

## Expanding the Toolbar

The default mode of the toolbar is `Expand`, configured through [`toolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#type) with `type: 'Expand'`. This mode hides any overflowing toolbar items in the next row, which can viewed by clicking the expand arrow.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/toolbar/expand-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/toolbar/expand-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/toolbar/expand-cs1" %}

## Configuring a Multi-row Toolbar

Setting the `type` as `MultiRow` in [`toolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#type) will arrange the toolbar items across multiple rows, displaying all configured toolbar items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/toolbar/multirow-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/toolbar/multirow-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/toolbar/multirow-cs3" %}

## Implementing a Scrollable Toolbar

Setting the `type` to `Scrollable` in [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#type) will display the toolbar items in a single line, enabling horizontal scrolling in the toolbar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/toolbar/scrollable-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/toolbar/scrollable-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/toolbar/scrollable-cs1" %}

## Creating a Sticky Toolbar

By default, the toolbar remains fixed at the top of the Rich Text Editor when scrolling. You can customize the position of this sticky toolbar by setting the [`floatingToolbarOffset`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#floatingtoolbaroffset) to adjust its offset from the top of the document.

Additionally, you can enable or disable the floating toolbar using the [`enableFloating`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#enablefloating) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/floating-toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/floating-toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/floating-toolbar-cs1" %}

## Quick Toolbars 

The Rich Text Editor has quick toolbars that act as context-menus, appearing when you click on elements like images, links, audio, video, and tables. By default, specific quick toolbar items are displayed when clicking on the corresponding element. You can customize these items using the [`quickToolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#quickToolbarSettings) property.

### Quick Format Toolbar

The quick format toolbar offers easy access to commonly used text formatting tools, enhancing the editing process by allowing users to quickly apply styles and adjustments to their text with minimal effort.

Customize the quick toolbar items using the `text` property in the [`quickToolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quickToolbarSettingsModel/#text).

Any toolbar items available in the Rich Text Editor can be configured for the text quick toolbar. The sample below showcases the text quick format toolbar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/quick-format-toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/quick-format-toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/quick-format-toolbar-cs1" %}

### Image Quick Toolbar 

Customize the quick toolbar items for images using the `image` property in the [`quickToolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quickToolbarSettingsModel/#image).

### Table Quick Toolbar 

The table quick toolbar opens when you click anywhere within a table. Customize its items using the `table` property in the [`quickToolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quickToolbarSettingsModel/#table).

### Link Quick Toolbar 

The link quick toolbar appears when you click on a link in the editor. Customize its items using the `link` property in the [`quickToolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quickToolbarSettingsModel/#link).

### Video Quick Toolbar

The video quick toolbar appears when you click on a video element. Customize its items using the `video` property in the [`quickToolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quickToolbarSettingsModel/#video).

These quick toolbars provide convenient access to context-specific editing tools, enhancing the user experience when working with different types of content in the Rich Text Editor.

### Audio Quick Toolbar

Customize the quick toolbar items for audio elements using the `audio` property in the [`quickToolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quickToolbarSettingsModel/#audio).

The following sample demonstrates the option to insert the video, image, audio, link and table  to the Rich Text Editor content as well as option to get started with the quick toolbar.It also illustrates how to utilize the quick toolbar for efficient content editing.The Quick Toolbar provides easy access to essential editing tools for a smoother user experience.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/quick-toolbar-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/quick-toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/quick-toolbar-cs1" %}

> To use quick toolbar feature, configure `QuickToolbarService` in the `@NgModule.providers section`.

## See Also

* [Customizing Rich Text Editor Toolbar Styles](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/style#customizing-the-rich-text-editors-toolbar)
* [Implementing Inline Editing](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/inline-mode)
* [Customizing Accessibility Shortcut Keys](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/accessibility#keyboard-interaction)
