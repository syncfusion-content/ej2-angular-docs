---
layout: post
title: Nested blocks in ##Platform_Name## Block Editor control | Syncfusion
description: Checkout and learn about Nested Blocks with ##Platform_Name## Block Editor control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Block Editor
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Nested blocks in ##Platform_Name## Block Editor control

## Configure children

The Block Editor supports hierarchical content structures through the [children](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockModel#children) property. This can be achieved by using the `properties` property that allows you to create nested blocks, which is applicable only for `Quote`, `Callout` and `Collapsible` blocks.

Child blocks can be configured with all the same properties as top-level blocks.

## Configure parent id
To establish a clear parent-child relationship, the [parentId](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockModel#parentid) of each child block must match the [id](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockModel#id) of its parent block.

This structure is essential for maintaining nested relationships within the editor.

## Configure collapsible blocks

You can render Collapsible blocks by setting the [blockType](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockModel#blockType) property as `CollapsibleParagraph` or `CollapsibleHeading`. Collapsible blocks allow users to expand or collapse sections, providing a way to hide or show content as needed.

### Configure levels

You can configure the CollapsibleHeading using the property `level` inside the `properties` property . The levels can be varied from `level: 1` to `level: 4`.

### Configure expanded state

You can control whether a block is expanded or collapsed using the [isExpanded](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockModel#isExpanded) property. By default, this property is set to `false`, meaning the block will be collapsed initially. This setting is only applicable to `Collapsible` blocks.

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

### Configure placeholder

You can configure placeholder text for block using the [placeholder](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockModel#placeholder) property. This text appears when the block is empty. The default placeholder for collapsible heading and collapsible paragraph is `Collapsible Heading{level}` and `Collapsible Paragraph` respectively.

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

## Configure quote block

Quote blocks are styled for displaying quotations or excerpts. Render a Quote block by setting the [blockType](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockModel#blockType) to `Quote`. Editing is now more natural with multi‑line support—pressing Enter creates a new line inside the block, and pressing Enter again on an empty line exits the quote.

### BlockType & Properties

```typescript
// Adding quote block
{
    blockType: 'Quote',
    properties:{
        children:[{
            blockType: 'Paragraph',
            content: [
                contentType: 'Text',
                content: ''
            ]
        }]
    }
}
```
The following sample demonstrates how to configure quote block.

### Configure placeholder

You can configure placeholder text for block using the [placeholder](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockModel#placeholder) property. This text appears when the block is empty. The default placeholder for quote block is `Write a quote`.

```typescript
// Adding placeholder value to blocktype
{
    blockType: 'Quote',
    properties: { placeholder: 'Quote'}
}
```

## Configure callout block

Callout blocks highlight important information such as notes, warnings, or tips. Render one by setting the [blockType](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockModel#blockType) to `Callout`.

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

The following sample demonstrates how to configure callout block.

