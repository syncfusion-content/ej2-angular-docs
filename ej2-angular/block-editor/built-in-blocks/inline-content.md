---
layout: post
title: Inline Content in Angular Block Editor Component | Syncfusion
description: Checkout and learn about Inline Content with Angular Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Inline Content in Angular Block Editor component

In the Syncfusion Block Editor, all content is organized within blocks. Each block contains a [content](../api/blockeditor/blockModel/#content) property, which is an array of inline elements that define the text and functionality within that block.

Each inline element in the [content](../api/blockeditor/blockModel/#content) array is an object with properties such as [id](../api/blockeditor/contentModel/#id), [type](../api/blockeditor/contentModel/#type), [content](../api/blockeditor/contentModel/#content), and [styles](../api/blockeditor/contentModel/#styles), allowing for granular control over its appearance and behavior.

## Setting content type

The Block Editor supports several inline content types through the `ContentType` enum, which can be set using the [type](../api/blockeditor/contentModel/#type) property.

| Built-in Content Type | Description                    |
| ----------------------- | ------------------------------ |
| Text                    | Represents plain text content. |
| Link                    | Represents a hyperlink.        |
| Code                    | Represents an inline code snippet. |
| Mention                 | Represents a user mention.     |
| Label                   | Represents a label or tag.     |

By default, the content type is `Text`.

## Configure text content

To configure text content, set the `type` property to `Text`. This is the default content type if none is specified.

### Type 

```typescript
// Adding inline text
{
    type: 'Paragraph',
    content: [
        {
            type: 'Text',
            content: 'Inline Text'
        }
    ]
}
```

## Configure inline code

You can configure inline code content by setting the type property to `Code`. Code content is used for inline code snippets within regular text.

### Type

```typescript
// Adding inline code
{
    type: 'Paragraph',
    content: [
        {
            type: 'Code',
            content: 'Inline Code'
        } 
    ]
}
```

## Configure hyperlink

To create a hyperlink, set the `type` property to `Link`. You can configure the link's URL and target using the `props` property.

### Configure link properties

Link settings control the behavior and properties of hyperlinks in your content. You can configure link settings using the link [props](../api/blockeditor/blockModel/) property.

Link settings are configured through the [props](../api/blockeditor/blockModel/) property, which accepts the following options:

| Option                                                                      | Description                                                       | Default Value |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------- |
| [url](../api/blockeditor/linkSettingsModel/#url)                            | Specifies the destination URL of the link.                        | `''`          |
| [openInNewWindow](../api/blockeditor/linkSettingsModel/#openinnewwindow)    | Specifies whether the link should open in a new browser tab.        | `false`       |

### Type & Props

```typescript
{
    type: 'Paragraph',
    content: [
        {
            type: 'Link',
            content: 'hyperlinks',
            props: {
                url: 'https://ej2.syncfusion.com/documentation',
                openInNewWindow: true
            }
        }
    ]
}
```

## Configure Label

To render labels, set the [type](../api/blockeditor/blockModel/#type) property to `Label`. The `props` property allows you to specify which label to display.

### Built-in items

The Block Editor comes with offers different built-in options. These include:

-   **Progress**: In-progress, On-hold, Done
-   **Priority**: High, Medium, Low

### Customize label

You can customize the labels by using the `props` property with type `Label`.

### Type & Props

```typescript
// Adding inline label
{
    type: 'Paragraph',
    content: [
         {
            type: 'Label',
            props: {lableId: 'Name of the label'}
         } 
    ]
}
```

### Trigger Character configuration

Use the [triggerChar](../api/blockeditor/labelSettingsModel/#triggerchar) property to define the character that opens the label suggestions popup. The default trigger character is `$`.

### Label items configuration

Define the available labels using the [labelItems](../api/blockeditor/labelSettingsModel/#labelitems) array. When a user types the trigger character, a popup will show matching items.

Each item in the [labelItems](../api/blockeditor/labelSettingsModel/#labelitems) array supports the following properties:

| Property                                                              | Description                                         |
| --------------------------------------------------------------------- | --------------------------------------------------- |
| [id](../api/blockeditor/labelItemModel/#id)                           | A unique identifier for the label.                  |
| [text](../api/blockeditor/labelItemModel/#text)                       | The display text for the label.                     |
| [groupHeader](../api/blockeditor/labelItemModel/#groupheader)         | The category name for grouping similar labels.      |
| [labelColor](../api/blockeditor/labelItemModel/#labelcolor)           | The background color of the label.                  |
| [iconCss](../api/blockeditor/labelItemModel/#iconcss)                 | A CSS class for an icon to display with the label.  |


When users type the trigger character followed by text, a popup will appear showing matching label items from which they can select. The selected label will be inserted into the content as a Label content item.

### Using labels with group headers

Labels with the same [groupHeader](../api/blockeditor/labelItemModel/#groupheader) value will be grouped together in the label selection popup:

The below sample demonstrates the customization of labels in the Block Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/blocks/label-settings/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/blocks/label-settings/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/blocks/label-settings/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/blocks/label-settings" %}

## Configure mention

Mentions are references to users or entities that can be inserted into your content. You can configure mention content by setting the type property to `Mention`.

Mentions are typically triggered by the `@` character and are linked to the [users](../api/blockeditor/#users) collection defined in the Block Editor.

### Type

```typescript
// Adding inline code
{
    type: 'Paragraph',
    content: [
        {
            type: 'Mention',
            id: 'user1'
        } 
    ]
}
```

The sample below demonstrates how to configure mentions and other content types.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/blocks/content-types/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/blocks/content-types/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/blocks/content-types/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/blocks/content-types" %}

## Applying Inline Styles

The Block Editor allows you to apply rich formatting to `Text`, `Link`, and `Code` elements using the [styles](../api/blockeditor/contentModel/#styles) property.

The `styles` property supports the following options:

| Style Property                                                      | Description                                | Default Value |
| ------------------------------------------------------------------- | ------------------------------------------ | ------------- |
| [bold](../api/blockeditor/styleModel/#bold)                         | Makes the text bold.                       | `false`       |
| [italic](../api/blockeditor/styleModel/#italic)                     | Makes the text italicized.                 | `false`       |
| [underline](../api/blockeditor/styleModel/#underline)               | Adds an underline to the text.             | `false`       |
| [strikethrough](../api/blockeditor/styleModel/#strikethrough)       | Adds a line through the text.              | `false`       |
| [color](../api/blockeditor/styleModel/#color)                       | Sets the text color (HEX or RGBA format).  | `''`          |
| [backgroundColor](../api/blockeditor/styleModel/#bgcolor)           | Sets the background color for the text.    | `''`          |
| [superscript](../api/blockeditor/styleModel/#superscript)           | Renders the text as superscript.           | `false`       |
| [subscript](../api/blockeditor/styleModel/#subscript)               | Renders the text as subscript.             | `false`       |
| [uppercase](../api/blockeditor/styleModel/#uppercase)               | Converts the text to uppercase.            | `false`       |
| [lowercase](../api/blockeditor/styleModel/#lowercase)               | Converts the text to lowercase.            | `false`       |
| [custom](../api/blockeditor/styleModel/#custom)                     | Adds a custom CSS class to the element.     | `''`          |

You can apply one or more of these styles to any supported content element for rich text formatting.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/blocks/content-styles/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/blocks/content-styles/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/blocks/content-styles/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/blocks/content-styles" %}