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

Content in the Block Editor is managed through the [content](../api/blockeditor/blockModel/#content) property of blocks.

Each content can have properties like [id](../api/blockeditor/contentModel/#id), [type](../api/blockeditor/contentModel/#type), [content](../api/blockeditor/contentModel/#content), [styles](../api/blockeditor/contentModel/#styles), and more to customize the appearance and behavior of your text.

### Setting content type

You can specify the type of content using the [type](../api/blockeditor/contentModel/#type) property. The Block Editor supports several content types through the `ContentType` enum:

| Built-in Content Type  | Description                         |
|------------------------|-------------------------------------|
| Text                   | Represents plain text content.      |
| Link                   | Represents a hyperlink.             |
| Code                   | Represents a code snippet.          |
| Mention                | Represents a user mention.          |
| Label                  | Represents a label or tag.          |

> By default, the content type is set to `Text`.

## Configure text content

You can configure Text content by setting the type property to `Text`. The default content type is `Text`.

#### Type 

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

#### Type

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

You can configure hyperlink content by setting the type property to `Link`. By setting the `props` property, you can configure the url of the link and specifies the link should open in a new tab/window.

### Configure link properties

Link settings control the behavior and properties of hyperlinks in your content. You can configure link settings using the link [props](../api/blockeditor/blockModel/) property.

The link [props](../api/blockeditor/blockModel/) property supports the following options:

| Option       | Description                                                                 | Default Value |
|--------------|-----------------------------------------------------------------------------|---------------|
| [url](../api/blockeditor/linkSettingsModel/#url)          | Specifies the URL of the link.                                          |       ''        |
| [openInNewWindow](../api/blockeditor/linkSettingsModel/#openinnewwindow)    | Specifies whether the link should open in a new window/tab.           | false         |


#### Type & Props

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

You can render labels by setting the [type](../api/blockeditor/blockModel/#type) property as `Label`. Additionally, by configuring the `props` property, you can customize how labels behave in your editor. This setup allows you to define the trigger character and specify the available label items.

### Built-in items

The Block Editor comes with offers different built-in options. These include:

-   **Progress**: In-progress, On-hold, Done
-   **Priority**: High, Medium, Low

### Customize label

You can customize the labels by using the `props` property with type `Label`.

#### Type & Props

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

#### Trigger Character configuration

You can use the [triggerChar](../api/blockeditor/labelSettingsModel/#triggerchar) property to specify the character that will trigger the label suggestions popup while typing. The default trigger character is `$`.

#### Label items configuration

The [labelItems](../api/blockeditor/labelSettingsModel/#labelitems) array allows you to define the available labels in your editor. Each label item can have the following properties:

| Property    | Description                                 |
|-------------|---------------------------------------------|
| [id](../api/blockeditor/labelItemModel/#id)          | Unique identifier for the label             |
| [text](../api/blockeditor/labelItemModel/#text)        | Display text for the label                  |
| [groupHeader](../api/blockeditor/labelItemModel/#groupheader) | Category/group name for organizing labels   |
| [labelColor](../api/blockeditor/labelItemModel/#labelcolor)  | Background color of the label               |
| [iconCss](../api/blockeditor/labelItemModel/#iconcss)  | CSS class for an icon to display with label |


When users type the trigger character followed by text, a popup will appear showing matching label items from which they can select. The selected label will be inserted into the content as a Label content item.

#### Using labels with group headers

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

#### Type

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

Below is an example of how to configure different types of content in the Block Editor.

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

## Setting content styles

The Block Editor enables you to customize the appearance of Text, Link, and Code elements using the [styles](../api/blockeditor/contentModel/#styles) property. This property offers rich formatting options to enhance the visual presentation of these content types.

The [styles](../api/blockeditor/contentModel/#styles) property supports the following formatting options:

| Style Property | Description | Default Value |
|---------------|-------------|---------------|
| [bold](../api/blockeditor/styleModel/#bold) | Makes the text bold | false |
| [italic](../api/blockeditor/styleModel/#italic) | Makes the text italicized | false |
| [underline](../api/blockeditor/styleModel/#underline) | Adds an underline to the text | false |
| [strikethrough](../api/blockeditor/styleModel/#strikethrough) | Adds a line through the text | false |
| [color](../api/blockeditor/styleModel/#color) | Sets the text color (HEX or RGBA format) | '' |
| [backgroundColor](../api/blockeditor/styleModel/#bgcolor) | Sets the background color for the text | '' |
| [superscript](../api/blockeditor/styleModel/#superscript) | Displays the text as superscript | false |
| [subscript](../api/blockeditor/styleModel/#subscript) | Displays the text as subscript | false |
| [uppercase](../api/blockeditor/styleModel/#uppercase) | Converts the text to uppercase | false |
| [lowercase](../api/blockeditor/styleModel/#lowercase) | Converts the text to lowercase | false |
| [custom](../api/blockeditor/styleModel/#custom) | Adds custom CSS styles to the text | '' |

You can apply one or more of these styles to any content element for rich text formatting:

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