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

Paragraph blocks are the most common type, used for standard text content. They serve as the default block type and provide basic text formatting options. To render a Paragraph block, set the [blockType](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockmodel#blocktype) property to [Paragraph](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blocktype).

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

You can configure placeholder text for block using the [placeholder](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/basestylesprop) property. This text appears when the block is empty. The default placeholder for the paragraph block is `Write something or ‘/’ for commands.`.

### Block type & properties

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

Heading blocks create document titles and section headers. These blocks help structure content hierarchically, making it easier to read and navigate. Render a Heading block by setting the [blockType](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockmodel#blocktype) property to [Heading](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blocktype).

### Configuring levels

By using the [properties](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockmodel#properties), you can set the heading level using the `level` property, with `1` being the highest level (title) and `4` being the lowest (subsection).

### Block type & properties

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

You can configure placeholder text for block using the [placeholder](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/iheadingblocksettings#placeholder) property. This text appears when the block is empty. The default placeholder for heading block is `Heading{level}`.

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

## Configure divider block

A Divider block inserts a horizontal line to separate content. Render it by setting the [blockType](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockmodel#blocktype) to `Divider`.

### Block type & properties

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
