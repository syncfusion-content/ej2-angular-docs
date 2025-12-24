---
layout: post
title: Text Formatting and Structure in Angular Rich Text Editor | Syncfusion
description: Learn here all about Text formatting and Structure in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Text formatting and Structure
documentation: ug
domainurl: ##DomainURL##
---

# Text Formatting in the Angular Rich Text Editor

The Angular Rich Text Editor provides a comprehensive set of tools to format and structure text, enabling users to create professional, well-organized content. This guide details the key styling features and their configuration options.

## Basic text styling

The Rich Text Editor offers essential text formatting options, including bold, italic, underline, strikethrough, subscript, superscript, inline code, and case conversion. These tools allow users to enhance text appearance and structure effortlessly, ensuring visually appealing and readable content.

### Available text styles

The table below lists the available text styles in the Rich Text Editor's toolbar, along with their initialization and HTML output.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| Bold  | ![Bold icon](../images/bold.png) | Makes text thicker and darker | toolbarSettings: { items: ['Bold']} | `<b>bold</b>` |
| Italic | ![Italic icon](../images/italic.png) | Slants text to the right | toolbarSettings: { items: ['Italic']} | `<em>italic</em>` |
| Underline | ![Underline icon](../images/under-line.png) | Adds a line beneath the text | toolbarSettings: { items: ['Underline']} |
| StrikeThrough | ![StrikeThrough icon](../images/strikethrough.png) | Applies a line through the text. |toolbarSettings: { items: ['StrikeThrough']}|
| InlineCode |![InlineCode icon](../images/inlineCode.png) | Formats text as inline code | toolbarSettings: { items: ['InlineCode']} | `<code>inline code</code>`|
| SubScript | ![SubScript icon](../images/sub-script.png) | Positions text slightly below the normal line |toolbarSettings: { items: ['SubScript']}|
| SuperScript | ![SuperScript icon](../images/super-script.png) | Positions text slightly above the normal line |toolbarSettings: { items: ['SuperScript’']}|
| LowerCase | ![LowerCase icon](../images/lower-case.png) |  Converts text to lowercase |toolbarSettings: { items: ['LowerCase']}|
| UpperCase | ![UpperCase icon](../images/upper-case.png) | Converts text to uppercase |toolbarSettings: { items: ['UpperCase’']}|

Refer to the sample below to configure these basic text styling options in the Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/basic-text-styling-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/basic-text-styling-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/basic-text-styling-cs1" %}

## Text alignments

The Rich Text Editor offers various text alignment options, including left, center, right, and justify. To utilize these alignment options, add the Alignments item to the items property in the toolbarSettings.

> **Important Note:** Text alignment is applied to the entire block element containing the cursor or selected text, not just to the selected text itself. When you apply an alignment, it affects the whole paragraph or block, even if you've only selected a portion of the text.

The available alignment options are:

* Align Left:
To left-align your text, place the cursor in the desired paragraph or select any text within it, then click the `Align Left` icon in the toolbar. This will align the entire paragraph with the left margin.

* Align Center:
To center-align your text, place the cursor in the desired paragraph or select any text within it, then click the `Align Center` icon in the toolbar. This will center the entire paragraph within its container.

* Align Right:
To right-align your text, place the cursor in the desired paragraph or select any text within it, then click the `Align Right` icon in the toolbar. This will align the entire paragraph with the right margin.

* Align Justify:
To fully justify your text, place the cursor in the desired paragraph or select any text within it, then click the `Align Justify` icon in the toolbar. This will distribute the entire paragraph evenly across the line, aligning it with both the left and right margins.

Refer to the sample and code snippets below to configure these alignment options in the Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/text-alignments-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/text-alignments-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/text-alignments-cs1" %}

## Lists and formatting

List formatting in the Rich Text Editor enables users to create structured ordered and unordered lists, improving content organization and readability. The component supports two main types of lists:

1. Ordered Lists
2. Unordered Lists

### Ordered lists

Ordered lists display items in a specific sequence, with each item preceded by a number or letter. The Rich Text Editor provides two ways to create and manage ordered lists:

#### Using the ordered list tool

The `OrderedList` toolbar item offers a quick way to create or toggle a numbered list. To use it, select the desired text in the editor and click the `OrderedList` button in the toolbar. If the selected text is not already a numbered list, it will be converted into one. If it's already a numbered list, clicking the button will remove the list formatting.

#### Number format list tool

For more detailed control over the numbering style, use the `numberFormatList` dropdown in the toolbar. Select the desired text in the editor, then choose the preferred format from the `numberFormatList` dropdown. The selected text will be transformed into a numbered list with the chosen style.

##### Available numbering styles:

* `None`: Removes numbering while maintaining list structure and indentation
* `Number`: Uses standard numeric sequencing (1, 2, 3, ...)
* `Lower Roman`: Employs lowercase Roman numerals (i, ii, iii, ...)
* `Lowercase Greek`: Utilizes lowercase Greek letters (α, β, γ, ...)
* `Upper Alpha`: Applies uppercase letters (A, B, C, ...)
* `Lower Alpha`: Uses lowercase letters (a, b, c, ...)
* `Upper Roman`: Employs uppercase Roman numerals (I, II, III, ...)

You can customize the available number formats using the [numberFormatList](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor#numberformatlist) property of the Rich Text Editor.

The following example demonstrates how to customize the number format lists in the Rich Text Editor:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/format-lists-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/format-lists-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/format-lists-cs1" %}

### Unordered lists

Unordered lists present items with visual markers, providing an effective way to list items without implying order or priority. The Rich Text Editor offers two methods for creating and managing unordered lists:

#### Using the unordered list tool

The `UnorderedList` toolbar item provides a fast way to create or toggle a bulleted list. To use it, select the desired text in the editor and click the `UnorderedList` button in the toolbar. If the selected text is not already a bulleted list, it will be converted into one. If it's already a bulleted list, clicking the button will remove the list formatting.

#### Bullet format list tool

For more control over the bullet style, use the `bulletFormatList` dropdown in the toolbar. Select the desired text in the editor, then choose the preferred format from the `bulletFormatList` dropdown. The selected text will be transformed into a bullet list with the chosen style.

##### Available bullet styles

* `None`: Removes bullet points while maintaining list structure and indentation
* `Disc`: Displays solid circular bullets
* `Square`: Uses solid square bullets
* `Circle`: Presents hollow circular bullets

The following example demonstrates how to configure both ordered and unordered list formats in the Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/format-lists-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/format-lists-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/format-lists-cs1" %}

### Checklist

The `Checklist` feature lets you create interactive task lists with clickable checkboxes. You can configure checkbox behavior, customize the visual appearance, manage item states, and enable keyboard interactions. This makes it perfect for project management, note-taking, and task tracking within your content. You can easily toggle between checked and unchecked states, giving you an intuitive way to manage the completion status of your list items—making it a simple and effective TODO list solution.

#### Inserting a checklist

You can embed interactive task lists directly within the Rich Text Editor. Here’s how you can insert a Checklist:
- **Using the Toolbar**: Click the Checklist button in the editor toolbar, usually represented by a checkbox icon.
- **Using the Shortcut**: Press `Ctrl+Shift+9` (or `Cmd+Shift+9` on macOS) to insert a Checklist at your cursor’s position.
- **Converting Existing Lists**: Select an existing bullet or numbered list and click the Checklist button to convert it into an interactive checklist.
- **Toggling Checklist Items**: You can toggle the state of checklist items between checked and unchecked by clicking the checkbox. If you prefer using the keyboard, press `Ctrl+Enter` (or `Cmd+Enter` on macOS) to toggle the check marks based on your selection or cursor position in the editor.

#### Configuring Checklist

To enable the Checklist feature in your editor, add the `Checklist` toolbar item to the `toolbarSettings.items` property. This feature supports customizable behavior and can be easily integrated into your Rich Text Editor toolbar for quick access.

Below is an example of how to configure the Checklist in the Rich Text Editor:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/checklist-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/checklist-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/checklist-cs1" %}

## Nested list creation using Tab key

In the Rich Text Editor, pressing the `Tab` key while the cursor is inside a list item automatically creates a nested list. This behavior allows users to structure their content hierarchically by indenting list items. Each press of the `Tab` key increases the nesting level, converting the current item into a sub-item of the previous one.

Please refer to the below video for visual behavior and interaction examples:

![Rich Text Editor list editing behaviour](../images/list-editing.gif)

## Increase and decrease indent

The Rich Text Editor allows you to set indentation for text blocks such as paragraphs, headings, or lists. This feature helps you visually organize and structure your content, making it easier to read and understand.

The Rich Text Editor allows you to configure two types of indentation tools, `Indent` and `Outdent` tool  in the Rich Text Editor toolbar using the [toolbarSettings.items](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings#items) property.

| Options | Description |
|----------------|---------|
| Indent | Increases the indentation |
| Outdent | Decreases the indentation |

To adjust the text indentation:

1. Select the text or paragraph.
2. Click the `Indent` or `Outdent` button in the toolbar.
3. The indentation of the selected text will be modified accordingly.

To configure the `Indent` and `Outdent` toolbar item, refer to the below code.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/indent-and-outdent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/indent-and-outdent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/indent-and-outdent-cs1" %}

### Indentation in lists

The Rich Text Editor provides powerful indentation features for both bullet and number format lists, allowing users to create nested lists and adjust list levels easily.

#### Increasing indent

To increase the indent of a list item:

1. Select the list item you want to indent.
2. Click the "Increase Indent" button in the toolbar or press <Kbd>Ctrl</Kbd> + <Kbd>]</Kbd>.
3. The selected item will be indented, creating a nested list.

#### Decreasing indent

To decrease the indent of a list item:

1. Select the indented list item.
2. Click the "Decrease Indent" button in the toolbar or press <Kbd>Ctrl</Kbd> + <Kbd>[</Kbd>.
3. The selected item will move back to the previous indentation level.

#### Using tab key for indentation

The Tab key provides a quick way to adjust list indentation:

- Pressing Tab will increase the indent of the selected list item, creating a nested list.
- Pressing Shift + Tab will decrease the indent of the selected list item, moving it to the previous level.

This behavior allows for efficient creation and management of multi-level lists without the need to use the toolbar buttons.

## Heading formats

The Angular Rich Text Editor component provides a feature to format text with various heading styles, such as Heading 1, Heading 2, Heading 3, and Heading 4. These headings allow for structuring content hierarchically, improving readability, and organizing information effectively.

### Built-in formats

To enable heading styles in your Rich Text Editor:

1. Ensure the `Formats` item is included in the toolbar configuration.
2. To apply a heading:
    * Select the desired text
    * Click the `Formats` dropdown in the toolbar
    * Choose the appropriate heading level (e.g., Heading 1, Heading 2)

This action will format the selected text with the chosen heading style, helping to create a clear document structure and emphasize important sections.

Below are examples and code snippets demonstrating how to integrate and utilize heading formatting options effectively in the Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/headings-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/headings-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/headings-cs2" %}

### Custom format

The Rich Text Editor allows you to customize the format dropdown to include specific styles such as heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, and paragraph.

To customize the format dropdown:

1. Define a `formats` array in your component configuration.
2. Specify each format option with a display name and corresponding value.

This customization enhances the editor’s functionality, enabling users to structure content with appropriate headings, improving readability and organization.

Below are examples demonstrating how to customize the format dropdown.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/headings-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/headings-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/headings-cs1" %}

## Quotation formatting

The Rich Text Editor facilitates quotation formatting through the `Blockquote` tool available in the toolbar. Blockquotes are designed to visually highlight significant text, emphasizing key information or quotations by setting them apart from the main content for added emphasis and clarity.

To format text as a quotation, select the desired text and click on the `Blockquote` icon in the toolbar. The selected text will be formatted as a blockquote, typically indented and styled differently from the surrounding content.

Use the `Blockquote` tool in the editor below to see the feature in action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/quotation-formatting-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/quotation-formatting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/quotation-formatting-cs1" %}

> In a markdown editor, blockquotes are represented using the `>` symbol.

### Nested blockquotes

The Rich Text Editor also supports nested blockquotes, allowing one blockquote to be placed inside another. 

While the toolbar does not provide a direct method to apply blockquote formatting recursively (i.e., within an already blockquote section), nested blockquotes can still be achieved in the following ways:

1. **Pasting preformatted content:** If you paste content that already contains nested blockquote tags (e.g., from another editor or email), the Rich Text Editor will preserve and render the nested structure correctly.
2. **Pre-loading nested blockquote HTML:** You can initialize the editor with nested blockquote content using the value property.
3. **Manual editing via Source Code view:** You can manually insert nested blockquote tags using the SourceCode toolbar option.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/nested-blockquote/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/nested-blockquote/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/nested-blockquote" %}

## Line Height

The Rich Text Editor supports line height feature which allows users to adjust the vertical spacing between lines of text. To change the line height, select the text you want to modify and click the Line Height icon in the toolbar. Choose from the available spacing options to apply the desired vertical spacing. This feature is especially useful for creating visually appealing paragraphs and ensuring consistent formatting across your document.

### Built-in line height

You can add the `LineHeight` tool to the toolbar in the Rich Text Editor using [toolbarSettings.items](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings#items) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/line-height/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/line-height/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/line-height" %}

The Rich Text Editor comes with a pre-configured set of [`lineHeight`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor#lineheight) property.

### Custom line height

The Rich Text Editor supports custom line height along with the existing line height dropdown list. To add additional line height to the line height dropdown, you can configure the items field of the [`lineHeight`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor#lineheight) property. This allows you to extend the available line height options beyond the default selection.

The [`supportAllValues`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor#supportAllValues) setting enables the line height dropdown to display and retain line-height values that are not part of the predefined options. When `supportAllValues` property is turned on, the dropdown will show the current line-height value from the selection, even if that value is not present in the configured lineHeights array. By default, `supportAllValues` will be set to false.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/line-height-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/line-height-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
    
{% previewsample "page.domainurl/samples/rich-text-editor/line-height-cs1" %}

## Horizontal line

The Rich Text Editor enables users to insert horizontal dividers using the `HorizontalLine` tool available in the toolbar. Horizontal lines (<hr>) help visually separate sections of content, enhancing readability and structural clarity.

To insert a horizontal line, place the cursor at the desired location and click the `HorizontalLine` icon in the toolbar. A full-width line will be added, creating a clear visual break between sections of text or other elements.

Use the `HorizontalLine` tool in the editor below to see the feature in action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/horizontal-line/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/horizontal-line/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/horizontal-line" %}

## Format painter

The Format Painter tool enables users to replicate formatting from one text segment and apply it to another. It can be accessed through the toolbar or keyboard shortcuts, allowing for the transfer of formatting styles from individual words to entire paragraphs. Customization options for the format painter are available through the [formatPainterSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#formatpaintersettings) property.

### Configuring format painter tool in the toolbar

You can add the `FormatPainter` tool in the Rich Text Editor using the [toolbarSettings.items](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings#items) property.

>To use the Format Painter feature, we need to import and configure the `FormatPainterService` in the provider section.

By double-clicking the format painter toolbar button, `sticky mode` will be enabled. In sticky mode, the format painter will be disabled when the user clicks the `Escape` key again.

The following example demonstrates how to configure the Format Painter tool.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/format-painter-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/format-painter-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/format-painter-cs1" %}

### Customizing copy and paste format

You can customize the Format Painter tool in the Rich Text Editor using the [`formatPainterSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#formatpaintersettings) property.

The [allowedFormats](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/formatpaintersettingsmodel#allowedformats) property helps you to specify tag names that allow the formats to be copied from the selected text. For instance, you can include formats from the selected text using tags like `p; h1; h2; h3; div; ul; ol; li; span; strong; em; code;`. The following example demonstrates how to customize this functionality.

Similarly, with the [deniedFormats](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/formatpaintersettingsmodel#deniedformats) property, you can utilize the selectors to prevent specific formats from being pasted onto the selected text. The table below illustrates the selectors and their respective usage.

| Type | Description        | Selector                                                | Usage                                                                  |
|------|--------------------|---------------------------------------------------------|------------------------------------------------------------------------|
| ()   | Class Selector     | h3(e-rte-block-blue-text)                               | The class name e-rte-block-blue-text of H3 element is not copied.      |
| []   | Attribute Selector | span\[title]                                            | The title attribute of span element is not copied.                     |
| {}   | Style Selector     | span{background-color, color}                           | The background-color and color styles of span element is not copied.   |

Using the `deniedFormats` property following styles are denied copying from the selected text such as `h3(e-rte-block-blue-text){background-color,padding}[title]; li{color}; span(e-inline-text-highlight)[title]; strong{color}(e-rte-strong-bg)`.

The following example illustrates how to configure `allowedFormats` and `deniedFormats`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/format-painter-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/format-painter-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/format-painter-cs2" %}

### Shortcut keys for copy and paste format

For more details on keyboard navigation, refer to the [Keyboard support](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/keyboard-support) documentation.

> The format painter retains the formatting after application making it possible to apply the same formatting multiple times by using the <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>v</kbd> keyboard shortcut.

Additionally, You can perform the format painter actions programmatically using the [executeCommand](../exec-command) public method.

## Clear formatting

The Angular Rich Text Editor component offers a powerful `Clear Format` feature to remove any applied formatting from selected text.

This feature is particularly useful when you need to:

- Remove multiple styles at once
- Quickly standardize text formatting
- Prepare text for new styling

### Configuring clear format

To enable the `ClearFormat` feature in your Rich Text Editor, you need to add it to the toolbar items. Follow these steps:

1. Open your component file where you've implemented the Rich Text Editor.
2. Locate the [`toolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings#items) property in your Rich Text Editor configuration.
3. Add `'ClearFormat'` to the `items` array within `toolbarSettings`.

Here's an example of how to configure the Clear Format feature:

```typescript

@Component({
    selector: 'app-root',
    template: `<ejs-richtexteditor [toolbarSettings]="tools"></ejs-richtexteditor>`
})
export class AppComponent {
    public tools: object = {
        items: 
        [
            "Bold", "Italic", "Underline", "|", "Formats", "Alignments", "OrderedList", "UnorderedList", "|",
            "CreateLink", "Image", "|", "SourceCode", "ClearFormat", "|", "Undo", "Redo"
        ]
    };
}

```

### Using clear format

Once configured, you can use the Clear Format feature as follows:

1. Select the text with formatting you want to remove.
2. Click the `Clear Format` button in the toolbar.
3. The selected text will revert to its original, unformatted state.

Using `Clear Format` makes it easy to undo styling changes and keep your text looking consistent. Examples and code snippets below show how to use 'Clear Format' effectively in the Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/remove-format-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/remove-format-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/remove-format-cs1" %}

## Markdown Auto Format

The Rich Text Editor supports automatic conversion of Markdown syntax into HTML using the [enableMarkdownAutoFormat](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#enablemarkdownautoformat) property. This feature simplifies content creation by transforming Markdown elements into their corresponding HTML tags, ensuring consistency and improving efficiency.

By default, Markdown Auto-Format is enabled. The editor supports both inline formatting and block-level elements. As you type, Markdown syntax is automatically converted into semantic HTML tags, ensuring a smooth and efficient editing experience.

### Inline Formatting

The following inline formatting options are available:

- Bold – Use `**text**` or `__text__`.
- Italic – Use `*text*` or `_text_`.
- Inline Code – Use `text`.
- Strikethrough – Use `~~text~~`.

### Block formatting

The following block formatting options are available:

- **Bulleted list** – Start a line with `*` or `-` followed by a space.
- **Numbered list** – Start a line with `1.` followed by a space.
- **Check List** – Start a line with `[ ]` or `[x]` followed by a space to insert an unchecked or checked list item, respectively.
- **Headings** – Start a line with `#`, `##`, or `###` followed by a space to create Heading 1, Heading 2, or Heading 3. You can use up to six levels of headings
- **Block quote** – Start a line with `>` followed by a space.
- **Code block** – Start a line with ` ``` ` followed by a space.
- **Horizontal line** – Start a line with `---` followed by a space.


### How Markdown auto-formatting works

#### Inline Formats
Elements such as **bold**, *italic*, ~~strikethrough~~, and `inline code` are converted **immediately after the closing marker is typed**.  
**Example:** Typing `**bold**` will render as **bold** the moment you enter the second `*`.

#### Block Formats
Elements such as headings, lists, blockquotes, and code block are converted **only after a space is typed following the marker**.  
**Example:** Typing `# Title` will render as a heading only after you type the space following `#`.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/markdown-autoformat-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/markdown-autoformat-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/markdown-autoformat-cs1" %}
