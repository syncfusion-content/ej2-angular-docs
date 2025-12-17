---
layout: post
title: Lists in Angular Block Editor Component | Syncfusion
description: Checkout and learn about List Blocks with Angular Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Lists in the Angular Block Editor Component

The Syncfusion Angular Block Editor component uses list blocks to organize content into structured lists. To render a specific list type, set the [blockType](../api/blockeditor/blockModel#blockType) property of the `BlockModel` to `BulletList`, `NumberedList`, or `Checklist`. Bullet lists are ideal for unordered items, numbered lists for ordered items, and checklists for interactive to-do lists.

## Configuring the Bullet List

You can render a Bullet List block by setting the [blockType](../api/blockeditor/blockModel#blockType) property to `BulletList`. This block type is used to display unordered lists.

### BlockType

```typescript
// Adding a bullet list block
{
    blockType: 'BulletList',
    content: [
        {
            contentType: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

### Configure Placeholder

The [placeholder](../api/blockeditor/blockModel#placeholder) property sets the text that appears when the block is empty. The default placeholder for a bullet list is `Add item`.

```typescript
// Adding a placeholder value 
{
    blockType: 'BulletList',
    properties: { placeholder: 'bullet'},
    content: [
        {
            contentType: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

## Configuring the Numbered List

You can render a Numbered List block by setting the [blockType](../api/blockeditor/blockModel#blockType) property to `NumberedList`. This block type is used to display ordered lists.

### Type

```typescript
// Adding a numbered list block
{
    blockType: 'NumberedList',
    content: [
        {
            contentType: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

### Configure Placeholder

The [placeholder](../api/blockeditor/blockModel#placeholder) property sets the text that appears when the block is empty. The default placeholder for a numbered list is `Add item`.

```typescript
// Adding a placeholder value 
{
    blockType: 'NumberedList',
    properties: { placeholder: 'number'},
    content: [
        {
            contentType: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

## Configure the Checklist

You can render a Checklist block by setting the [blockType](../api/blockeditor/blockModel#blockType) property to `Checklist`. This block type is used for creating interactive to-do lists.

### BlockType

```typescript
// Adding a checklist block 
{
    blockType: 'Checklist',
    content: [
        {
            contentType: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

### Configure Checked State

For blocks that support selection states, such as a `Checklist`, you can configure the checked state using the `properties` property with [isChecked](../api/blockeditor/blockModel#ischecked).

By default, the [isChecked](../api/blockeditor/blockModel#ischecked) property is set to `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/blocks/isChecked/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/blocks/isChecked/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/blocks/isChecked/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/blocks/isChecked" %}

### Configure Placeholder

The [placeholder](../api/blockeditor/blockModel#placeholder) property sets the text that appears when the block is empty. The default placeholder for a checklist is `Todo`.

```typescript
// Adding a placeholder value 
{
    blockType: 'Checklist',
    properties: { placeholder: 'check'},
    content: [
        {
            contentType: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

## Configuring List Blocks

The following example demonstrates how to render the different types of list blocks in the Block Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/blocks/block-types/list-block/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/blocks/block-types/list-block/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/blocks/block-types/list-block/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/block-editor/blocks/block-types/list-block" %}