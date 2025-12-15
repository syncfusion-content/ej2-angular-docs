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

The [created](../api/blockeditor#created) event is triggered when the Block Editor component is successfully initialized and ready for use. This event is useful for performing setup operations or initializing additional features after the editor is created.

```typescript
<ejs-blockeditor (created)="onCreated()" />
```

## BlockChanged

The [blockChanged](../api/blockeditor#blockchanged) event is triggered whenever the editor blocks are changed. This includes block additions, deletions, or any structural modifications to the document. Its event handler receives details about the changes.

```typescript
<ejs-blockeditor (blockChanged)="onBlockChanged()" />
```

## SelectionChanged

The [selectionChanged](../api/blockeditor#selectionchanged) event is triggered when the user's text selection changes within the editor. The event arguments contain details about the new selection, which can be useful for updating UI elements.

```typescript
<ejs-blockeditor (selectionChanged)="onSelectionChanged()" />

```

## BlockDragStart

The [blockDragStart](../api/blockeditor#blockdragstart) event is triggered at the beginning of a block drag operation, providing information about the blocks being dragged and their initial position.

```typescript
<ejs-blockeditor (blockDragStart)="onBlockDragStart()" />
```

## BlockDragging

The [blockDragging](../api/blockeditor#blockdragging) event is triggered continuously during a dragging operation, providing information about the blocks being dragged and their current position.

```typescript
<ejs-blockeditor (blockDragging)="onBlockDragging()" />
```

## BlockDropped

The [blockDropped](../api/blockeditor#blockdropped) event is triggered when blocks are successfully dropped at their destination during a drag-and-drop operation. This event includes data about the drop target and position.

```typescript
<ejs-blockeditor (blockDropped)="onBlockDropped()" />
```

## Focus

The [focus](../api/blockeditor#focus) event is triggered when the editor gains focus. This is useful for updating UI states and managing editor interactions.

```typescript
<ejs-blockeditor (focus)="onFocus()" />
```

## Blur

The [blur](../api/blockeditor#blur) event is triggered when the editor loses focus. This is commonly used for auto-saving content or hiding UI elements that should only be visible when the editor is active.

```typescript
<ejs-blockeditor (blur)="onBlur()" />
```

## BeforePasteCleanup

The [beforePasteCleanup](../api/blockeditor#beforepastecleanup) event is triggered before content is pasted into the editor. This event allows you to inspect, modify, or cancel the paste operation via its event arguments.

```typescript
<ejs-blockeditor (beforePasteCleanup)="onBeforePasteCleanup()" />
```

## AfterPasteCleanup

The [afterPasteCleanup](../api/blockeditor#afterpastecleanup) event is triggered after content has been successfully pasted into the editor. This is useful for post-processing pasted content or updating related UI elements.

```typescript
<ejs-blockeditor (afterPasteCleanup)="onAfterPasteCleanup()" />
```