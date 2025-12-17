---
layout: post
title: Methods in Angular Block Editor Component | Syncfusion
description: Checkout and learn about Methods with Angular Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Methods in Angular Block Editor component

The Block Editor component provides a comprehensive set of public methods to programmatically interact with and manipulate the editor content. These methods enable adding, removing, updating, and managing blocks, as well as controlling selection, formatting, and other editor operations.

## Block Management Methods

### Adding a block

Add a new block to the editor at a specified position using the [addBlock](../api/blockeditor#addblock) method. This method can also insert the block before or after a target block.

```typescript
// Add a new paragraph block after a specific block
public newBlock: BlockModel = {
    id: 'new-block',
    blockType: 'Paragraph',
    content: [
        {
            contentType: ContentType.Text,
            content: 'This is a newly added block'
        }
    ]
};

editor.addBlock(newBlock, 'target-block-id', true); // true = after, false = before
```

### Removing a block

Remove a block from the editor using the [removeBlock](../api/blockeditor#removeblock) method.

```typescript
// Remove a block by its ID
editor.removeBlock('block-to-remove-id');
```

### Moving a block

Move a block from one position to another within the editor using the [moveBlock](../api/blockeditor#moveblock) method.

```typescript
// Move a block to a new position
editor.moveBlock('source-block-id', 'target-block-id');
```

### Updating a block

Update the properties of an existing block with the [updateBlock](../api/blockeditor#updateblock) method. Only the specified properties are modified, while others remain unchanged. It returns `true` if the update was successful and `false` otherwise.

```typescript
// Update block properties
editor.updateBlock('block-id', {
    isChecked: true
});
```

### Getting a block

Retrieve a block model by its unique identifier using the [getBlock](../api/blockeditor#getblock) method. It returns `null` if the block is not found.

```typescript
// Get a specific block
editor.getBlock('block-id');
```

### Getting block count

Use the [getBlockCount](../api/blockeditor#getblockcount) method to retrieve the total number of blocks in the editor.

```typescript
// Get total block count
editor.getBlockCount();
```

The following example demonstrates the usage of the block editor methods.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/methods/block/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/methods/block/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/methods/block/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/methods/block" %}

## Selection and Cursor Methods

### Setting text selection

Set the text selection within a specific content element using start and end positions with the [setSelection](../api/blockeditor#setselection) method.

```typescript
// Select text from position 5 to 15 in a content element
editor.setSelection('content-element-id', 5, 15);
```

### Setting cursor position

Place the cursor at a specific position within a block using the [setCursorPosition](../api/blockeditor#setcursorposition) method.

```typescript
// Set cursor at position 10 in a block
editor.setCursorPosition('block-id', 10);
```

### Getting selected blocks

Retrieve the currently selected blocks in the editor with the [getSelectedBlocks](../api/blockeditor#getselectedblocks) method. It returns `null` if no blocks are selected.

```typescript
// Get all selected blocks
editor.getSelectedBlocks();
```

### Getting selection range

Get the current selection range in the editor using the [getRange](../api/blockeditor#getrange) method. This method returns a `Range` object representing the selected text, or `null` if no selection is active.

```typescript
// Get current selection range
editor.getRange();
```

### Setting selection range

Set the selection range in the editor using the [selectRange](../api/blockeditor#selectrange) method. This method accepts a `Range` object that defines the start and end positions of the selection.

```typescript
// Create and select a custom range
editor.selectRange(customRange);
```

### Selecting a block

Select a specific block in the editor using the [selectBlock](../api/blockeditor#selectblock) method.

```typescript
// Select a complete block
editor.selectBlock('block-id');
```

### Selecting all blocks

Select all blocks in the editor using the [selectAllBlocks](../api/blockeditor#selectallblocks) method.

```typescript
// Select all content in the editor
editor.selectAllBlocks();
```

The following example demonstrates the usage of the selection and cursor methods.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/methods/selection/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/methods/selection/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/methods/selection/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/methods/selection" %}

## Focus Management Methods

### FocusIn

Use the [focusIn](../api/blockeditor#focusin) method to programmatically set focus on the editor, making it ready for user input.

```typescript
// Focus the editor
editor.focusIn();
```

### FocusOut

Use the [focusOut](../api/blockeditor#focusout) method to programmatically remove focus from the editor. This clears any active selections and makes the editor inactive.

```typescript
// Remove focus from the editor
editor.focusOut();
```

## Formatting Methods

### Executing toolbar action

Execute a built-in toolbar formatting command using the [executeToolbarAction](../api/blockeditor#executetoolbaraction) method. Use this to apply formatting such as bold, italic, or color to the selected text.

```typescript
// Apply bold formatting
editor.executeToolbarAction(BuiltInToolbar.Bold);

// Apply color formatting with a specific value
editor.executeToolbarAction(BuiltInToolbar.Color, '#ff0000');
```

### Enabling toolbar items

Enable specific items in the inline toolbar using the [enableToolbarItems](../api/blockeditor#enabletoolbaritems) method. This method accepts a single item or an array of items to enable.

```typescript
// Enable a specific toolbar item
editor.enableToolbarItems('bold');

// Enable multiple items
editor.enableToolbarItems(['bold', 'italic', 'underline']);
```

### Disabling toolbar items

Disable specific items in the inline toolbar using the [disableToolbarItems](../api/blockeditor#disabletoolbaritems) method. This method accepts a single item or an array of items to disable.

```typescript
// Disable a specific toolbar item
editor.disableToolbarItems('bold');

// Disable multiple items
editor.disableToolbarItems(['bold', 'italic', 'underline']);
```

The following example demonstrates the usage of the formatting and focus methods.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/methods/formatting/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/methods/formatting/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/methods/formatting/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/methods/formatting" %}

## Data Export Methods

### Getting data as JSON

Export the editor content in JSON format using the [getDataAsJson](../api/blockeditor#getdataasjson) method. This method allows exporting all blocks or a specific block.

```typescript
// Get all blocks as JSON
const allBlocks = editor.getDataAsJson();

// Get a specific block as JSON
const specificBlock = editor.getDataAsJson('block-id');
```

### Getting data as HTML

Export the editor content in HTML format using the [getDataAsHtml](../api/blockeditor#getdataashtml) method. This method allows exporting all blocks or a specific block.

```typescript
// Get all blocks as HTML
const allBlocksHtml: string = editor.getDataAsHtml();

// Get a specific block as HTML
const specificBlockHtml: string = editor.getDataAsHtml('block-id');
```

### Rendering Blocks from Json

Renders blocks from JSON data using the [renderBlocksFromJson](../api/blockeditor#renderblocksfromjson) method. This method allows either replacing all existing content or inserting at the cursor position.

```typescript
// Replace all existing content
const replaceAllBlocks = editor.renderBlocksFromJson(jsonData, true);

// Insert at cursor without replacing existing blocks (default behavior)
const insertedAtCursor = editor.renderBlocksFromJson(jsonData);

// Insert after a specific block (only applicable when replace = false)
const insertedAfterTarget = editor.renderBlocksFromJson(jsonData, false, 'target-block-id');
```

### Parsing HTML to Blocks

Convert an HTML string into an array of `BlockModel` objects using the [parseHtmlToBlocks](../api/blockeditor#parsehtmltoblocks) method. This method allows transforming HTML content into structured editor blocks.

```typescript
// Parse HTML into block
const blocks: BlockModel[] = editor.parseHtmlToBlocks(html);
```

### Printing editor content

Print the editor content using the [print](../api/blockeditor#print) method. This action opens the browser's print dialog with the current editor content.

```typescript
// Print the editor content
editor.print();
```

The following example demonstrates the usage of the data export methods.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/methods/data/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/methods/data/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/methods/data/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/methods/data" %}