---
layout: post
title: Events in Angular Block Editor Component | Syncfusion
description: Checkout and learn about Events with Angular Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Events in Angular Block Editor Component

The Block Editor component provides a comprehensive set of events that allow you to monitor and respond to various user interactions and editor state changes. These events enable you to implement custom behaviors, validation, logging, and integration with other systems.

## Created

The [created](../api/blockeditor/#created) event is triggered when the Block Editor component is successfully initialized and ready for use. This event is useful for performing setup operations or initializing additional features after the editor is created.

```typescript
<div ejs-blockeditor (created)="onCreated()" ></div>
```

## ContentChanged

The [contentChanged](../api/blockeditor/#contentchanged) event is triggered whenever the content within the editor is modified. This includes content additions, deletions, or any structural modifications to the document. Its event handler receives details about the changes.

```typescript
<div ejs-blockeditor (contentChanged)="onContentChanged()" ></div>
```

## SelectionChanged

The [selectionChanged](../api/blockeditor/#selectionchanged) event is triggered when the user's text selection changes within the editor. The event arguments contain details about the new selection, which can be useful for updating UI elements.

```typescript
<div ejs-blockeditor (selectionChanged)="onSelectionChanged()" ></div>

```

## UndoRedoPerformed

The [undoRedoPerformed](../api/blockeditor/#undoredoperformed) event is triggered when an undo or redo operation is executed. This event provides information about the action performed and the state before and after the operation.

```typescript
<div ejs-blockeditor (undoRedoPerformed)="undoRedoPerformed()" ></div>
```

## BlockAdded

The [blockAdded](../api/blockeditor/#blockadded) event is triggered when a new block is added to the editor. The event arguments include data about the added block, such as its ID and type. This includes blocks added through user interaction, paste operations, or programmatic insertion.

```typescript
<div ejs-blockeditor (blockAdded)="onBlockAdded()" ></div>
```

## BlockRemoved

The [blockRemoved](../api/blockeditor/#blockremoved) event is triggered when a block is removed from the editor. This can occur through user deletion, cut operations, or programmatic removal. The event handler receives the details of the removed block.

```typescript
const editor = new BlockEditor({
    blockRemoved: (args: BlockRemovedEventArgs) => {
        // You may trigger custom actions when a block is removed
    }
});
<div ejs-blockeditor (blockRemoved)="onBlockRemoved()" ></div>
```

## BlockMoved

The [blockMoved](../api/blockeditor/#blockmoved) event is triggered when blocks are moved from one position to another within the editor. This includes drag-and-drop operations, keyboard shortcuts, or programmatic block reordering.

```typescript
<div ejs-blockeditor (blockMoved)="onBlockMoved()" ></div>
```

## BlockDragStart

The [blockDragStart](../api/blockeditor/#blockdragstart) event is triggered at the beginning of a block drag operation, providing information about the blocks being dragged and their initial position.

```typescript
<div ejs-blockeditor (blockDragStart)="onBlockDragStart()" ></div>
```

## BlockDrag

The [blockDrag](../api/blockeditor/#blockdrag) event is triggered continuously during a drag operation, providing information about the blocks being dragged and their current position.

```typescript
<div ejs-blockeditor (blockDrag)="onBlockDrag()" ></div>
```

## BlockDrop

The [blockDrop](../api/blockeditor/#blockdrop) event is triggered when blocks are successfully dropped at their destination during a drag-and-drop operation. This event includes data about the drop target and position.

```typescript
<div ejs-blockeditor (blockDrop)="onBlockDrag()" ></div>
```

## Focus

The [focus](../api/blockeditor/#focus) event is triggered when the editor gains focus. This is useful for updating UI states and managing editor interactions.

```typescript
<div ejs-blockeditor (focus)="onFocus()" ></div>
```

## Blur

The [blur](../api/blockeditor/#blur) event is triggered when the editor loses focus. This is commonly used for auto-saving content or hiding UI elements that should only be visible when the editor is active.

```typescript
<div ejs-blockeditor (blur)="onBlur()" ></div>
```

## KeyActionExecuted

The [keyActionExecuted](../api/blockeditor/#keyactionexecuted) event is triggered when a keyboard shortcut is executed. This provides information about the key combination used and the corresponding action performed.

```typescript
<div ejs-blockeditor (keyActionExecuted)="onKeyActionExecuted()" ></div>
```

## BeforePaste

The [beforePaste](../api/blockeditor/#beforepaste) event is triggered before content is pasted into the editor. This event allows you to inspect, modify, or cancel the paste operation via its event arguments.

```typescript
<div ejs-blockeditor (beforePaste)="onBeforePaste()" ></div>
```

## AfterPaste

The [afterPaste](../api/blockeditor/#afterpaste) event is triggered after content has been successfully pasted into the editor. This is useful for post-processing pasted content or updating related UI elements.

```typescript
<div ejs-blockeditor (afterPaste)="onAfterPaste()" ></div>
```