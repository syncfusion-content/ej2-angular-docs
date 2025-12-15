---
layout: post
title: Editor Menus in Angular Block Editor Component | Syncfusion
description: Checkout and learn about Editor Menus with Angular Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Editor Menus in Angular Block Editor component

The Block Editor component includes several intuitive, context-aware menus that streamline content creation and editing. These menus provide quick access to formatting options and commands, improving user productivity.

## Slash command menu

The Slash Command menu allows users to quickly insert or transform blocks by typing `/` followed by a command. This provides an efficient, keyboard-driven way to interact with the editor.

### Built-in items

The Slash Command menu comes with a set of pre-defined commands for all block types:

-   **Headings (Level 1 to 4)**: Inserts a heading block of the corresponding level.
-   **Lists (Bullet, Numbered, Checklist)**: Creates a block for the specified list type.
-   **Paragraph**: Inserts a standard text block.
-   **Image**: Inserts a media block for images.
-   **Table**: Inserts a table block.
-   **Toggle**: Creates a collapsible content block.
-   **Callout**: Inserts a block for highlighting important information.
-   **Utility (Divider, Quote, Code)**: Inserts a utility block like a divider, quote, or code block.

### Customize Slash command menu

You can use the [commandMenuSettings](../api/blockeditor#commandmenusettings) property to modify the Slash Command menu. This allows you to add custom commands, remove default items, or change the behavior of existing commands to fit your application's requirements.

### Events

The following events are available for the Slash Command menu:

|Name|Args|Description|
|---|---|---|
|[filtering](../api/blockeditor/commandMenuSettingsModel#filtering)|CommandFilteringEventArgs|Triggers when the user types to filter the command menu items.|
|[itemSelect](../api/blockeditor/commandMenuSettingsModel#itemselect)|CommandItemSelectEventArgs|Triggers when the user clicks on a command menu item.|

The following example demonstrates how to customize the Slash Command menu.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/editor-menus/slash-command/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/editor-menus/slash-command/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/editor-menus/slash-command/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/editor-menus/slash-command" %}

## Context menu

The Context menu appears when a user right-clicks within a specific block. It provides context-aware actions relevant to the clicked block or content.

### Built-in items

The Context menu offers the following built-in options:

-  **Undo/Redo**: Reverses or re-applies the last action.
-  **Cut/Copy/Paste**: Standard clipboard actions for selected content.
-  **Indent**: Increases or decreases the indent level of the selected block.
-  **Link**: Adds or edits a hyperlink for the selected text.

### Customize Context menu

You can use the [contextMenuSettings](../api/blockeditor#contextmenusettings) property to customize the Context menu. This allows you to add specific actions or modify existing items based on your application needs.

### Events

The following events are available for the Context menu:

|Name|Args|Description|
|---|---|---|
|[opening](../api/blockeditor/contextMenuSettingsModel#opening)|ContextMenuOpeningEventArgs|Triggers before the context menu opens.|
|[closing](../api/blockeditor/contextMenuSettingsModel#closing)|ContextMenuClosingEventArgs|Triggers before the context menu closes.|
|[itemSelect](../api/blockeditor/contextMenuSettingsModel#itemselect)|ContextMenuItemSelectEventArgs|Triggers when a context menu item is clicked.|

The following example demonstrates how to customize the Context menu.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/editor-menus/context-menu/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/editor-menus/context-menu/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/editor-menus/context-menu/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/editor-menus/context-menu" %}

## Block action menu

The Block Action menu appears next to a block when you hover over it and click the drag handle icon, offering quick actions specific to that block.

### Built-in items

The Block Action menu provides convenient actions for managing individual blocks:

-   **Duplicate**: Creates an exact copy of the current block.
-   **Delete**: Removes the block from the editor.
-   **Move Up**: Moves the block one position higher.
-   **Move Down**: Moves the block one position lower.

### Customize Block action menu

You can use the [blockActionMenuSettings](../api/blockeditor#blockactionmenusettings) property to customize the Block action menu. This enables you to add block-specific commands that are relevant to your application, allowing for a highly tailored user experience.

#### Show or hide tooltip

By default, a tooltip is displayed when the user hovers over an action item. You can show or hide the tooltip using the [enableTooltip](../api/blockeditor/blockActionMenuSettingsModel#enabletooltip) property in the block action menu settings.

### Events

The following events are available for the Block action menu:

|Name|Args|Description|
|---|---|---|
|[opening](../api/blockeditor/blockActionMenuSettingsModel#opening)|BlockActionMenuOpeningEventArgs|Triggers when the block action menu is opened.|
|[closing](../api/blockeditor/blockActionMenuSettingsModel#closing)|BlockActionMenuClosingEventArgs|Triggers when the block action menu is closed.|
|[itemSelect](../api/blockeditor/blockActionMenuSettingsModel#itemselect)|BlockActionItemSelectEventArgs|Triggers when a block action menu item is clicked.|

The following example demonstrates how to customize the Block action menu.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/editor-menus/block-action/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/editor-menus/block-action/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/editor-menus/block-action/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/editor-menus/block-action" %}

## Inline Toolbar

The Inline Toolbar appears when a text is selected in the editor, providing quick access to common text formatting actions that apply to inline content.

### Built-in items

The Inline Toolbar includes the following built-in formatting options:

-   **Text Styles**: Bold, Italic, Underline, and Strikethrough.
-   **Superscript/Subscript**: For mathematical or scientific notations.
-   **Case Conversion**: Change text to uppercase or lowercase.
-   **Text Color**: Change the color of the selected text.
-   **Background Color**: Change the background color of the selected text.

### Customize Inline Toolbar

You can use the [inlineToolbarSettings](../api/blockeditor#inlinetoolbarsettings) property to customize the Inline Toolbar by adding or removing formatting options based on your application's needs.

### Events

The following events are available for the Inline Toolbar:

|Name|Args|Description|
|---|---|---|
|[itemClick](../api/blockeditor/inlineToolbarSettingsModel#itemclick)|ToolbarItemClickEventArgs|Triggers when the user clicks on an inline toolbar item.|

The following example demonstrates how to customize the Inline Toolbar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/editor-menus/inline-toolbar/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/editor-menus/inline-toolbar/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/editor-menus/inline-toolbar/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/editor-menus/inline-toolbar" %}