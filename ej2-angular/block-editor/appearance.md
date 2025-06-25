---
layout: post
title: Appearance in Angular Block Editor Component | Syncfusion
description: Checkout and learn about appearance with Angular Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Angular Block Editor component

The Block Editor component provides various appearance customization options to match your application's design requirements. These properties allow you to control the visual styling, layout, and overall look and feel of the editor.

## Setting width and height

You can specify the width and height for the Block Editor component using the [width](../api/blockeditor/#width) and [height](../api/blockeditor/#height) properties.

```typescript
const editor = new BlockEditor({
    width: '100%',
    height: '80vh'
});

// Or with specific pixel values
const editor = new BlockEditor({
    width: '800px',
    height: '500px'
});
```

## Setting readonly mode

You can utilize the [readonly](../api/blockeditor/#readonly) property to control whether the editor is in read-only mode. When set to `true`, users cannot edit the content but can still view it.

```typescript
const editor = new BlockEditor({
    readonly: true
});
```

## Customization using CSS Class

You can use the [cssClass](../api/blockeditor/#cssclass) property to customize the appearance of the Block Editor control.

```typescript
const editor = new BlockEditor({
    width: '600px',
    height: '400px',
    cssClass: 'custom-editor-theme'
});
```

```css
/* Custom CSS for custom theme */
.custom-editor-theme {
    border: 2px solid #007acc;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 122, 204, 0.15);
}

.custom-editor-theme .e-block {
    margin-bottom: 8px;
}

.custom-editor-theme .e-block:hover {
    background-color: #b5b5b5;
    transition: ease-in-out 0.5s;
}

.custom-editor-theme .e-block [contenteditable=true]:empty::before {
    color: #6c757d;
    font-style: italic;
}
```