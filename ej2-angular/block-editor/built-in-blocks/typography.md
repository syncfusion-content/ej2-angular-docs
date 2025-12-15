---
layout: post
title: Typography Blocks in Angular Block Editor Component | Syncfusion
description: Checkout and learn about Typography Blocks with Angular Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Typography Blocks in Angular Block Editor component

Typography blocks are essential for organizing and presenting text-based content. The Block Editor component supports various structural blocks—such as Paragraph, Heading, Collapsible (CollapsibleParagraph and CollapsibleHeading), Divider, Quote, and Callout—to help you format and structure content effectively.

## Configure paragraph block

Paragraph blocks are the most common type, used for standard text content. They serve as the default block type and provide basic text formatting options. To render a Paragraph block, set the [blockType](../api/blockeditor/blockModel#blockType) property to `Paragraph`.

### BlockType 

```typescript
// Adding a paragraph block
{
    blockType: 'Paragraph',
    content: [
        {
            contentType: 'Text',
            content: 'This is a paragraph block example.'
        }
    ]
}
```

The following sample demonstrates the configuration of a paragraph block in the Block Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/blocks/block-types/paragraph-block/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/blocks/block-types/paragraph-block/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/blocks/block-types/paragraph-block/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/block-editor/blocks/block-types/paragraph-block" %}

### Configure placeholder

You can configure placeholder text for block using the [placeholder](../api/blockeditor/blockModel#placeholder) property. This text appears when the block is empty. The default placeholder for the paragraph block is `Write something or ‘/’ for commands.`.

### BlockType & Properties

```typescript
// Adding placeholder
 {
    blockType: 'Paragraph',
    properties: {placeholder: 'Start typing ...'}
}
```

The below sample demonstrates the configuration of placeholder in the Block Editor for the paragraph block.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/blocks/placeholder/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/blocks/placeholder/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/blocks/placeholder/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/blocks/placeholder" %}

## Configure heading block

Heading blocks create document titles and section headers. These blocks help structure content hierarchically, making it easier to read and navigate. Render a Heading block by setting the [blockType](../api/blockeditor/blockModel#blockType) property to `Heading`.

### Configuring Levels

By using the [properties](../api/blockeditor/blockModel#properties), you can set the heading level using the `level` property, with `1` being the highest level (title) and `4` being the lowest (subsection).

### BlockType & Properties

```typescript
// Adding heading block
{
    blockType: 'Heading',
    properties: { level: 1 },
    // levels range from 1 to 4
    content: [
        {
            contentType: 'Text',
            content: 'This is a heading block example.'
        }
    ]
}
```

The following sample demonstrates the configuration of a heading block in the Block Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/blocks/block-types/heading-block/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/blocks/block-types/heading-block/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/blocks/block-types/heading-block/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/block-editor/blocks/block-types/heading-block" %}

### Configure placeholder

You can configure placeholder text for block using the [placeholder](../api/blockeditor/blockModel#placeholder) property. This text appears when the block is empty. The default placeholder for heading block is `Heading{level}`.

```typescript
// Adding placeholder value to blocktype
{
    blockType: 'Heading',
    properties: { 
        level: 1,
        placeholder: 'Heading1'
    }
}
```

## Configure collapsible blocks

You can render Collapsible blocks by setting the [blockType](../api/blockeditor/blockModel#blockType) property as `CollapsibleParagraph` or `CollapsibleHeading`. Collapsible blocks allow users to expand or collapse sections, providing a way to hide or show content as needed.

### Configure levels

You can configure the CollapsibleHeading using the property `level` inside the `properties` property . The levels can be varied from `level: 1` to `level: 4`.

### Configure children

The Block Editor supports hierarchical content structures through the [children](../api/blockeditor/blockModel#children) property. This can be achieved by using the `properties` property that allows you to create nested blocks, which is applicable only for `Callout` and `Collapsible` blocks.

Child blocks can be configured with all the same properties as top-level blocks.

### Configure parent id

To establish a clear parent-child relationship, the [parentId](../api/blockeditor/blockModel#parentid) of each child block must match the [id](../api/blockeditor/blockModel#id) of its parent block.

This structure is essential for maintaining nested relationships within the editor.

### Configure expanded state

You can control whether a block is expanded or collapsed using the [isExpanded](../api/blockeditor/blockModel#isExpanded) property. By default, this property is set to `false`, meaning the block will be collapsed initially. This setting is only applicable to `Collapsible` blocks.

### BlockType & Properties

```typescript
// Configuring CollapsibleHeading block
{
    blockType: 'CollapsibleHeading',
    properties:{
        level: 1, //level varies from 1 to 4
        isExpanded: true,
        children: [
            {
                //your content to be here..
            }
        ]
    }
}
// Configuring CollapsibleParagraph block
{
    blockType: 'CollapsibleParagraph',
    properties:{
        children: [
            {
               //your content to be here..
            }
        ]
    }
}
```

This example shows how to configure `CollapsibleHeading` and `CollapsibleParagraph` blocks.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/blocks/block-types/toggle-block/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/blocks/block-types/toggle-block/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/blocks/block-types/toggle-block/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/blocks/block-types/toggle-block" %}

### Configure placeholder

You can configure placeholder text for block using the [placeholder](../api/blockeditor/blockModel#placeholder) property. This text appears when the block is empty. The default placeholder for collapsible heading and collapsible paragraph is `Collapsible Heading{level}` and `Collapsible Paragraph` respectively.

```typescript
// Adding placeholder value to collapsible heading
{
    blockType: 'CollapsibleHeading',
    properties: {
        level: 2,
        placeholder: 'Heading block'
    }
}
//Adding placeholder value for collapsible paragraph
{
    blockType: 'CollapsibleParagraph',
    properties: { placeholder: 'Collapsible Paragraph'}
}
```

## Configure divider block

A Divider block inserts a horizontal line to separate content. Render it by setting the [blockType](../api/blockeditor/blockModel#blockType) to `Divider`.

### BlockType & Properties

```typescript
// Adding divider block
{
    {
        blockType: 'Paragraph',
        content: [
            contentType: 'Text',
            content: 'This is a paragraph 1.'
        ]
    },
    {
        blockType: 'Divider' 
    },
    {
        blockType: 'Paragraph',
        content: [
            contentType: 'Text',
            content: 'This is a paragraph 1.'
        ]
    }
}
```

This sample shows how to place a divider between two blocks.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/blocks/block-types/divider-block/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/blocks/block-types/divider-block/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/blocks/block-types/divider-block/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/block-editor/blocks/block-types/divider-block" %}

## Configure quote block

Quote blocks are styled for displaying quotations or excerpts. Render a Quote block by setting the [blockType](../api/blockeditor/blockModel#blockType) to `Quote`.

### BlockType & Properties

```typescript
// Adding quote block
{
    blockType: 'Quote',
    content: [
        contentType: 'Text',
        content: ''
    ]
}
```

The following sample shows how to configure a quote block.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/blocks/block-types/quote-block/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/blocks/block-types/quote-block/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/blocks/block-types/quote-block/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/block-editor/blocks/block-types/quote-block" %}

### Configure placeholder

You can configure placeholder text for block using the [placeholder](../api/blockeditor/blockModel#placeholder) property. This text appears when the block is empty. The default placeholder for quote block is `Write a quote`.

```typescript
// Adding placeholder value to blocktype
{
    blockType: 'Quote',
    properties: { placeholder: 'Quote'}
}
```

## Configure callout block

Callout blocks highlight important information such as notes, warnings, or tips. Render one by setting the [blockType](../api/blockeditor/blockModel#blockType) to `Callout`.

### BlockType & Properties

```typescript
// Adding callout block
 {
    blockType: 'Callout',
    properties:{
        children: [{ 
            blockType: 'Paragraph',
            content: [{
                contentType: 'Text',
                content: 'Important information: This is a callout block used to highlight important content.'
            }]
        }]
    }
 }
```

The following sample adds a callout block to the editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/blocks/block-types/callout-block/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/blocks/block-types/callout-block/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/blocks/block-types/callout-block/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/block-editor/blocks/block-types/callout-block" %}

### Configure children

The Block Editor supports hierarchical content structures through the [children](../api/blockeditor/blockModel#children) property. This can be achieved by using the `properties` property that allows you to create nested blocks, which is applicable only for `Callout` and `Collapsible` blocks.

Child blocks can be configured with all the same properties as top-level blocks.

### Configure parent id

To establish a clear parent-child relationship, the [parentId](../api/blockeditor/blockModel#parentid) of each child block must match the [id](../api/blockeditor/blockModel#id) of its parent block.

This structure is essential for maintaining nested relationships within the editor. The following sample demonstrates how to create a nested hierarchy.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/blocks/children/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/blocks/children/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/blocks/children/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/blocks/children" %}