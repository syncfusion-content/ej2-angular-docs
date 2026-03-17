---
layout: post
title: Label Events in Angular Diagram component | Syncfusion®
description: Learn about annotation events in Syncfusion Angular Diagram component including keyDown, keyUp, doubleClick, textEdit, and selectionChange events with examples.
platform: ej2-angular
control: Label Events
documentation: ug
domainurl: ##DomainURL##
---

# Handling Annotation Events in Diagram Component

Annotations in Angular Diagram components are text labels that can be added to nodes and connectors to provide additional information. When users interact with these annotations, various events are triggered that allow developers to customize behavior and respond to user actions.

The diagram component provides several annotation-related events that fire during different interaction scenarios:

- **KeyDown** - Triggered when any key is pressed while an annotation is focused
- **KeyUp** - Triggered when a pressed key is released while an annotation is focused  
- **DoubleClick** - Triggered when double-clicking on annotations, nodes, connectors, or diagram surface
- **TextEdit** - Triggered when annotation text editing is completed and focus is lost
- **SelectionChange** - Triggered when annotations are selected or deselected

## KeyDown Event

The [`keyDown`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/iKeyEventArgs/) event triggers whenever any key is pressed while interacting with the diagram. This event provides access to key information and allows modification of diagram elements based on keyboard input.

The event arguments include details about the pressed key, modifier keys, and the current diagram state. The following example demonstrates capturing the keyDown event to modify a node's fill color with each key press:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/keyDown-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/keyDown-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/keyDown-cs1" %}

## KeyUp Event

The [`keyUp`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/iKeyEventArgs/) event triggers when a pressed key is released. This event is useful for handling scenarios where the complete key press cycle (press and release) needs to be captured, such as implementing keyboard shortcuts or text input validation.

Unlike the keyDown event, keyUp ensures that the key action has been fully completed. The following example shows how to capture the keyUp event and modify the fill color of a node:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/keyUp-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/keyUp-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/keyUp-cs1" %}

## Double Click Event

The [`doubleClick`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/iDoubleClickEventArgs/) event triggers when users double-click on nodes, connectors, or the diagram surface. This interaction automatically activates annotation editing mode for the clicked element, allowing users to modify text content directly.

The event provides information about the clicked element, mouse position, and current selection state. Developers can use this event to implement custom behaviors or prevent default annotation editing when needed:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/doubleClick-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/doubleClick-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/doubleClick-cs1" %}

## TextEdit Event

The [`textEdit`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/iTextEditEventArgs/) event triggers when annotation text editing is completed and focus moves away from the text editor. This event occurs after users finish modifying annotation content and provides access to both the old and new text values.

This event is particularly useful for implementing text validation, formatting, or saving changes to external data sources:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/textEdit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/textEdit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/textEdit-cs1" %}

### Preventing Text Changes

The textEdit event allows prevention of text modifications by setting the `cancel` property to `true`. This is useful for implementing validation rules or maintaining read-only annotations:

``` javascript
public textEdit(args: ITextEditEventArgs): void {
    // Prevents any new content from being added to the annotation
    args.cancel = true;
}
```

## Selection Change Event

The [`selectionChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#selectionchange) event triggers when annotations of nodes or connectors are selected or deselected within the diagram. This event provides detailed information about the selection state changes and affected elements.

The event is useful for implementing custom selection behaviors, updating property panels, or synchronizing selection state with other application components.

### Preventing Selection

Selection can be prevented by setting the `cancel` property of [`SelectionChangeEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iselectionchangeeventargs/) to `true` during the selection change process:

```ts
public selectionChange = function (args: ISelectionChangeEventArgs): void {
    if (args.state === 'Changing') {
        // Prevents selection from occurring
        args.cancel = true;
    }
};
```