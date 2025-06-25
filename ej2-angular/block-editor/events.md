---
layout: post
title: Events in Angular Block Editor Component | Syncfusion
description: Checkout and learn about Events with Angular Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Events in Angular Block Editor component

The Block Editor component provides a comprehensive set of events that allow you to monitor and respond to various user interactions and editor state changes. These events enable you to implement custom behaviors, validation, logging, and integration with other systems.

## Created

The [created](../api/blockeditor/#created) event is triggered when the Block Editor component is successfully initialized and ready for use. This event is useful for performing setup operations or initializing additional features after the editor is created.

```typescript
const editor = new BlockEditor({
    created: () => {
        // You may initialize custom plugins or features
    }
});
```

## ContentChanged

The [contentChanged](../api/blockeditor/#contentchanged) event is triggered whenever the content within the editor is modified. This includes content additions, deletions, or any structural modifications to the document.

```typescript
const editor = new BlockEditor({
    contentChanged: (args: ContentChangedEventArgs) => {
        // You may implement auto-save functionality
    }
});
```

## SelectionChanged

The [selectionChanged](../api/blockeditor/#selectionchanged) event is triggered when the user's text selection changes within the editor. This can be useful for updating UI elements based on the current selection.

```typescript
const editor = new BlockEditor({
    selectionChanged: (args: SelectionChangedEventArgs) => {
        // You can update formatting toolbar based on selection
    }
});
```

## UndoRedoPerformed

The [undoRedoPerformed](../api/blockeditor/#undoredoperformed) event is triggered when an undo or redo operation is executed. This event provides information about the action performed and the state before and after the operation.

```typescript
const editor = new BlockEditor({
    undoRedoPerformed: (args: UndoRedoEventArgs) => {
        // You may log undo/redo actions for analytics
    }
});
```

## BlockAdded

The [blockAdded](../api/blockeditor/#blockadded) event is triggered when a new block is added to the editor. This includes blocks added through user interaction, paste operations, or programmatic insertion.

```typescript
const editor = new BlockEditor({
    blockAdded: (args: BlockAddedEventArgs) => {
        // You may trigger custom actions when a block is added
    }
});
```

## BlockRemoved

The [blockRemoved](../api/blockeditor/#blockremoved) event is triggered when a block is removed from the editor. This can occur through user deletion, cut operations, or programmatic removal.

```typescript
const editor = new BlockEditor({
    blockRemoved: (args: BlockRemovedEventArgs) => {
        // You may trigger custom actions when a block is removed
    }
});
```

## BlockMoved

The [blockMoved](../api/blockeditor/#blockmoved) event is triggered when blocks are moved from one position to another within the editor. This includes drag-and-drop operations, through keyboard shortcuts or programmatic block reordering.

```typescript
const editor = new BlockEditor({
    blockMoved: (args: BlockMovedEventArgs) => {
        // You may trigger custom actions when blocks are moved
    }
});
```

## BlockDragStart

The [blockDragStart](../api/blockeditor/#blockdragstart) event is triggered at the beginning of a block drag operation, providing information about the blocks being dragged and their initial position.

```typescript
const editor = new BlockEditor({
    blockDragStart: (args: BlockDragEventArgs) => {
        // You may cancel the drag operation for certain block types
        // or trigger custom actions when a block drag operation starts
    }
});
```

## BlockDrag

The [blockDrag](../api/blockeditor/#blockdrag) event is triggered during a drag operation, providing information about the blocks being dragged and their current position.

```typescript
const editor = new BlockEditor({
    blockDrag: (args: BlockDragEventArgs) => {
        // You may trigger custom actions during a block drag operation based on the current position
    }
});
```

## BlockDrop

The [blockDrop](../api/blockeditor/#blockdrop) event is triggered when blocks are successfully dropped at their destination during a drag-and-drop operation.

```typescript
const editor = new BlockEditor({
    blockDrop: (args: BlockDropEventArgs) => {
        // You may trigger custom actions when blocks are dropped
    }
});
```

## Focus

The [focus](../api/blockeditor/#focus) event is triggered when the editor gains focus. This is useful for updating UI states and managing editor interactions.

```typescript
const editor = new BlockEditor({
    focus: (args: FocusEventArgs) => {
        // Custom actions when the editor gains focus
    }
});
```

## Blur

The [blur](../api/blockeditor/#blur) event is triggered when the editor loses focus. This is commonly used for auto-saving content or hiding UI elements.

```typescript
const editor = new BlockEditor({
    blur: (args: BlurEventArgs) => {
        // Custom actions when the editor loses focus
    }
});
```

## KeyActionExecuted

The [keyActionExecuted](../api/blockeditor/#keyactionexecuted) event is triggered when a keyboard shortcut is executed. This provides information about the key combination used and the corresponding action performed.

```typescript
const editor = new BlockEditor({
    keyActionExecuted: (args: KeyActionExecutedEventArgs) => {
        // Custom actions when a keyboard shortcut is executed
    }
});
```

## BeforePaste

The [beforePaste](../api/blockeditor/#beforepaste) event is triggered before content is pasted into the editor. This event allows you to modify or cancel the paste operation.

```typescript
const editor = new BlockEditor({
    beforePaste: (args: BeforePasteEventArgs) => {
        // You may cancel paste if content contains restricted elements
    }
});
```

## AfterPaste

The [afterPaste](../api/blockeditor/#afterpaste) event is triggered after content has been successfully pasted into the editor. This is useful for post-processing pasted content or updating related UI elements.

```typescript
const editor = new BlockEditor({
    afterPaste: (args: AfterPasteEventArgs) => {
        // Process pasted content or update UI
    }
});
```