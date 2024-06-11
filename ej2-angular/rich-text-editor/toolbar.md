---
layout: post
title: Toolbar in Angular Rich text editor component | Syncfusion
description: Learn here all about Toolbar in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Toolbar 
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar in Angular Rich text editor component

The Rich Text Editor toolbar contains a collection of tools such as bold, italic and text alignment buttons that are used to format the content. However, in most integrations, you can customize the toolbar configurations easily to suit your needs.

To get start quickly about customizing the toolbar in Angular Rich Text Editor component, refer to the video below.

{% youtube "https://www.youtube.com/watch?v=zQtXvvPxAJQ" %}

To use Toolbar feature, inject `ToolbarService` in the provider section of `AppModule`.

The Rich Text Editor allows you to configure different types of toolbar using [`type`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#type) field in [`toolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/) property. The types of toolbar are:

1. Expand
2. MultiRow

## Expand Toolbar

The default mode of [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#type) is Expand, it will hide the overflowing items in the next row. Click the expand arrow to view overflowing toolbar items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/toolbar/expand-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/toolbar/expand-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/toolbar/expand-cs1" %}

## Multi-row Toolbar

Set the type as `MultiRow` in [`toolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#type) to hide the overflowing items in the next row. All toolbar items are visible.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/toolbar/multirow-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/toolbar/multirow-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/toolbar/multirow-cs3" %}

## Floating Toolbar

By default, the toolbar is floating at the top of the Rich Text Editor on scrolling. It can be customized by specifying the offset of the floating toolbar from document's top position using[`floatingToolbarOffset`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#floatingtoolbaroffset).

Can Enable or disable the floating toolbar using [`enableFloating`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#enablefloating) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/floating-toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/floating-toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/floating-toolbar-cs1" %}

## Toolbar Items

The following table shows that list of available tools in the Rich Text Editor's toolbar.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| Undo | ![Undo icon](./images/undo.png) | Allows to undo the actions.|toolbarSettings: { items: ['Undo']} |
| Redo | ![Redo icon](./images/redo.png) | Allows to redo the actions.|toolbarSettings: { items: ['Redo']}|
| Alignment | ![Alignment icon](./images/alignments.png) | Align the content with left, center, and right margin.|toolbarSettings: { items: ['Alignments']}|
| OrderedList | ![OrderedList icon](./images/order-list.png) | Create a new list item(numbered). |toolbarSettings: { items: ['OrderedList']}|
| UnorderedList | ![UnorderedList icon](./images/unorder-list.png) | Create a new list item(bulleted). |toolbarSettings: { items: ['UnorderedList']}|
| Indent | ![Indent icon](./images/increase-indent.png) | Allows to increase the indent level of the content.|toolbarSettings: { items: ['Indent']}|
| Outdent | ![Outdent icon](./images/decrease-indent.png) | Allows to decrease the indent level of the content.|toolbarSettings: { items: ['Outdent']}|
| Hyperlink | ![Hyperlink icon](./images/create-link.png) | Creates a hyperlink to a text or image to a specific location in the content.|toolbarSettings: { items: ['CreateLink']}|
| Images | ![Images icon](./images/insert-image.png) | Inserts an image from an online source or local computer. |toolbarSettings: { items: ['Image']}|
| LowerCase | ![LowerCase icon](./images/lower-case.png) | Change the case of selected text to lower in the content. |toolbarSettings: { items: ['LowerCase']}|
| UpperCase | ![UpperCase icon](./images/upper-case.png) | Change the case of selected text to upper  in the content.|toolbarSettings: { items: ['UpperCase’']}|
| SubScript | ![SubScript icon](./images/sub-script.png) | Makes the selected text as subscript (lower).|toolbarSettings: { items: ['SubScript']}|
| SuperScript | ![SuperScript icon](./images/super-script.png) | Makes the selected text as superscript (higher).|toolbarSettings: { items: ['SuperScript’']}|
| Print | ![Print icon](./images/print.png) | Allows to print the editor content. |toolbarSettings: { items: ['Print']}|
| FontName | ![FontName icon](./images/font-name.png) | Defines the fonts that appear under the Font Family DropDownList from the Rich Text Editor's toolbar. |toolbarSettings: { items: ['FontName']}|
| FontSize | ![FontSize icon](./images/font-size.png) | Defines the font sizes that appear under the Font Size DropDownList from the Rich Text Editor's toolbar.|toolbarSettings: { items: ['FontSize']}|
| FontColor | ![FontColor icon](./images/font-color.png) | Specifies an array of colors can be used in the colors popup for font color.|toolbarSettings: { items: ['FontColor']}|
| BackgroundColor | ![BackgroundColor icon](./images/background-color.png) | Specifies an array of colors can be used in the colors popup for background color.|toolbarSettings: { items: ['BackgroundColor']}|
| Format | ![Format icon](./images/formats.png) | An Object with the options that will appear in the Paragraph Format dropdown from the toolbar. |toolbarSettings: { items: ['Formats']}|
| Blockquote | ![Blockquote icon](./images/blockquote.png) | Blockquotes visually highlight important text within an editor, emphasizing key information or quotations. | toobarSettings: { items: ['Blockquote']}|
| StrikeThrough | ![StrikeThrough icon](./images/strikethrough.png) | Apply double line strike through formatting for the selected text. |toolbarSettings: { items: ['StrikeThrough']}|
| ClearFormat | ![ClearFormat icon](./images/clear-format.png) | The clear format tool is useful to remove all formatting styles (such as bold, italic, underline, color, superscript, subscript, and more) from currently selected text. As a result, all the text formatting will be cleared and return to its default formatting styles.|toolbarSettings: { items: ['ClearFormat']}|
| FullScreen | ![FullScreen icon](./images/maximize.png) | Stretches the editor to the maximum width and height of the browser window.|toolbarSettings: { items: ['FullScreen']}|
| SourceCode | ![SourceCode icon](./images/code-view.png)  | Rich Text Editor includes the ability for users to directly edit HTML code via “Source View”. If you made any modification in Source view directly, synchronize with Design view.|toolbarSettings: { items: ['SourceCode']}|
| NumberFormatList | ![NumberFormatList icon](./images/number-format.png) | Allows to create list items with various list style types(numbered).|toolbarSettings: { items: ['NumberFormatList']}|
| BulletFormatList | ![BulletFormatList icon](./images/bullet-format.png) | Allows to create list items with various list style types(bulleted).|toolbarSettings: { items: ['BulletFormatList']}|
| JustifyLeft | ![JustifyLeft icon](./images/align-left.png) | Allows each line to begin at the same distance from the editor’s left-hand side. | toolbarSettings: { items: ['JustifyLeft']} |
| JustifyCenter | ![JustifyCenter icon](./images/align-center.png) | There is an even space on each side of each line since the text is not aligned to the left or right margins. | toolbarSettings: { items: ['JustifyCenter']} |
| JustifyRight | ![JustifyRight icon](./images/align-right.png) | Allows each line to end at the same distance from the editor’s right-hand side. | toolbarSettings: { items: ['JustifyRight']} |
| JustifyFull | ![JustifyFull icon](./images/align-justify.png) | The text is aligned with both right and left margins. | toolbarSettings: { items: ['JustifyFull']} |
| Bold  | ![Bold icon](./images/bold.png) | Text that is thicker and darker than usual. | toolbarSettings: { items: ['Bold']} |
| Italic | ![Italic icon](./images/italic.png) | Shows a text that is leaned to the right. | toolbarSettings: { items: ['Italic']} |
| Underline | ![Underline icon](./images/under-line.png) | The underline is added to the selected text. | toolbarSettings: { items: ['Underline']} |
| ClearAll | ![ClearAll icon](./images/clear-all.png) | Removes all styles that have been applied to the selected text.| toolbarSettings: { items: ['ClearAll']} |
| Cut | ![Cut icon](./images/cut.png) | Removes the text from its current location and places it into the clipboard. | toolbarSettings: { items: ['Cut']} |
| Copy | ![Copy icon](./images/copy.png) | The selected item is copied and pasted into the clipboard. | toolbarSettings: { items: ['Copy']} |
| Paste | ![Paste icon](./images/paste.png) | Allows you to insert a clipboard item into a specific location. | toolbarSettings: { items: ['Paste']} |
| OpenLink | ![OpenLink icon](./images/open-link.png) | To open the URL link that is  attached to the selected text. | toolbarSettings: { items: ['OpenLink']} |
| EditLink | ![EditLink icon](./images/edit-link.png) | Allows you to change the URL that has been attached to a specific item. | toolbarSettings: { items: ['EditLink']} |
| CreateTable | ![CreateTable icon](./images/create-table.png) | Create a table with defined columns and rows. | toolbarSettings: { items: ['CreateTable']} |
| RemoveTable | ![RemoveTable icon](./images/table-remove.png) | Removes the selected table and its contents. | toolbarSettings: { items: ['TableRemove']} |
| Replace | ![Replace icon](./images/image-replace.png) | Replace the selected image with another image. | toolbarSettings: { items: ['Replace']} |
| Align | ![Alignment icon](./images/alignments.png) | The image can be aligned to the right, left, or center. | toolbarSettings: { items: ['Align']} |
| Remove | ![Remove icon](./images/table-remove.png) | Allows to remove the selected image from the editor. | toolbarSettings: { items: ['Remove']} |
| OpenImageLink | ![OpenImageLink icon](./images/open-link.png) | Opens the link that is attached to the selected image. | toolbarSettings: { items: ['OpenImageLink']} |
| EditImageLink | ![EditImageLink icon](./images/edit-link.png) | Allows to edit the link that is attached to the selected image. | toolbarSettings: { items: ['EditImageLink']} |
| RemoveImageLink | ![RemoveImageLink icon](./images/remove-link.png) | Removes the link that is attached to the selected image. | toolbarSettings: { items: ['RemoveImageLink']} |
| InsertLink | ![InsertLink icon](./images/create-link.png) |Allows users to add a link to a particular item. | toolbarSettings: { items: ['InsertLink']} |
| Display | ![Display icon](./images/display.png) | Allows you to choose whether an image should be shown inline or as a block. | toolbarSettings: { items: ['Display']} |
| AltText | ![AltText icon](./images/alt-text.png) | To display image description when an image on a Web page cannot be displayed. | toolbarSettings: { items: ['AltText']} |
| Dimension | ![Dimension icon](./images/dimension.png) | Allows you to customize the image’s height and width. | toolbarSettings: { items: ['Dimension']} |
| Maximize | ![Maximize icon](./images/maximize.png) | Stretches the editor to the maximum width and height of the browser window. | toolbarSettings: { items: ['Maximize']} |
| Minimize | ![Minimize icon](./images/minimize.png) | Shrinks the editor to the default width and height. | toolbarSettings: { items: ['Minimize']} |
| Preview | ![Preview icon](./images/preview.png) | Allows to see how the editor’s content looks in a browser. | toolbarSettings: { items: ['Preview']} |
| InsertCode | ![InsertCode icon](./images/insert-code.png) | Represents preformatted text which is to be presented exactly as written in the HTML file. | toolbarSettings: { items: ['InsertCode']} |
| RemoveLink | ![RemoveLink icon](./images/remove-link.png) | Allows you to remove the applied link from the selected item. | toolbarSettings: { items: ['RemoveLink']} |
| TableHeader | ![TableHeader icon](./images/table-headers.png) | Allows you to add a table header. | toolbarSettings: { items: ['TableHeader']} |
| TableColumns | ![TableColumns icon](./images/table-columns.png) | Shows the dropdown to insert a column or delete the selected column. | toolbarSettings: { items: ['TableColumns']} |
| TableRows | ![TableRows icon](./images/table-row.png) | Shows the dropdown to insert a row ors delete the selected row. | toolbarSettings: { items: ['TableRows']} |
| TableCellHorizontalAlign | ![TableCellHorizontalAlign icon](./images/alignments.png) | Allows the table cell content to be aligned horizontally. | toolbarSettings: { items: ['TableCellHorizontalAlign']} |
| TableCellVerticalAlign | ![TableCellVerticalAlign icon](./images/vertical-align.png) | Allows the table cell content to be aligned vertically. | toolbarSettings: { items: ['TableCellVerticalAlign']} |
| TableEditProperties | ![TableEditProperties icon](./images/table-edit.png) | Allows you to change the table width, padding, and cell spacing styles. | toolbarSettings: { items: ['TableEditProperties']} |

By default, tool will be arranged in following order.

```typescript
items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'Blockquote', 'OrderedList', 'UnorderedList','|', 'CreateLink', 'Image', '|', 'SourceCode', 'Undo', 'Redo']
```

The tools order can be customized as our application requirement. If you are not specifying any tools order, the editor will create the toolbar with default items.

## Custom tool

The Rich Text Editor allows you to configure your own commands to its toolbar using the  [`toolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#toolbarSettings) property. The command can be plain text, icon, or HTML template. The order and the group can also be defined where the command should be included. Bind action to the command by getting its instance.

This sample shows how to add your own commands to the toolbar of the Rich Text Editor. The “Ω” command is added to insert special characters in the editor. By clicking the “Ω” command, it will show the special characters list, and then choose the character to be inserted in the editor.

The following code snippet illustrates custom tool with tooltip text which will be included in [`items`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#items) field of the toolbarSettings property.

To get start quickly with Custom tool configuration in Angular Rich Text Editor component, refer to the video below.

{% youtube "https://www.youtube.com/watch?v=zQtXvvPxAJQ" %}

In the following sample the Dialog component will be created in Rich Text Editor's `created` event. And it's target is given to Rich Text Editor's content

```javascript

{
    tooltipText: 'Insert Symbol',
    undo: true,
    click: this.onClick.bind(this),
    template: '<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar" style="width:100%"><div class="e-tbar-btn-text" style="font-weight: 500;"> &#937;</div></button>'
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs30/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs30/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs30" %}

> The focus will be lost while rendering the required component for the custom toolbar, causing it to render outside the Rich Text Editor and triggering a blur event. During that time, proper functionality will not be achievable. Therefore, it is recommended to set the cssClass property or class as `e-rte-elements` in the dependency component.

## Quick inline toolbar

Quick commands are opened as context-menu on clicking the corresponding element. The commands must be passed as string collection to image, text, and link attributes of the [`quickToolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#quickToolbarSettings) property.

| Target Element | Default Quick Toolbar items |
|----------------|---------|
|image | 'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'Display', 'AltText','Dimension'.|
| link | 'Open', 'Edit', 'UnLink'.|
| text | null <br> (Any toolbar [items](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/toolbar#toolbar-items) in the Rich Text Editor can be configured here).|
| table| 'tableHeader', 'tableRows', 'tableColumns', 'backgroundColor', '-', 'tableRemove', 'alignments', 'tableCellVerticalAlign', 'styles'.|

Custom tool can be added to the corresponding quick toolbar, using [`quickToolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#quickToolbarSettings) property.

The following sample demonstrates the option to insert the image to the Rich Text Editor content as well as option to rotate the image through the quick toolbar. The image rotation functionalities have been achieved through the `toolbarClick` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/quick-toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/quick-toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/quick-toolbar-cs1" %}

> To use quick toolbar feature, inject `QuickToolbarService, ImageService, LinkService` in the provider section of `AppModule`.