---
layout: post
title: Undo redo in Angular Block Editor Component | Syncfusion
description: Checkout and learn about Undo redo with Angular Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Undo redo in Angular Block Editor component

The undo/redo feature in Block Editor enables users to revert or reapply changes made to the content, offering a safety net for edits and enhancing the overall editing experience.

## Keyboard shortcuts

| Action | Windows | Mac | Description |
|------------|--------------|---------|-----------------|
| Undo       | Ctrl + Z     | ⌘ + Z   | Reverts the last action. |
| Redo       | Ctrl + Y     | ⌘ + Y | Reapplies the last undone action. |

## Configuring Undo/Redo stack

Block Editor allows up to `30` Undo/Redo actions by default. You can modify the number of undo/redo steps using the [undoRedoStack](../api/blockeditor/#undoRedoStack) property.

Below example demonstrates the Block Editor with undo/redo stack set to `20` actions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/undo-redo/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/undo-redo/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/undo-redo/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/undo-redo" %}