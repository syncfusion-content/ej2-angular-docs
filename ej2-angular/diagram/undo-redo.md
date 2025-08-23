---
layout: post
title: Undo and Redo Functionality in Angular Diagram component | Syncfusion®
description: Learn how to implement undo and redo functionality with history management in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Undo redo 
documentation: ug
domainurl: ##DomainURL##
---

# Undo and Redo in Angular Diagram Component

The Angular Diagram component automatically tracks all user interactions and programmatic changes, providing robust undo and redo functionality. This feature enables users to reverse or restore actions, making diagram editing more intuitive and error-tolerant.

## Prerequisites and setup

To enable undo/redo functionality in the diagram, inject the UndoRedo module into the diagram component.

N> The UndoRedo module must be injected to access undo/redo features in the diagram component.

## Basic undo and redo operations

The diagram provides built-in support to track changes made through both user interactions and public API calls. These changes can be reversed or restored using keyboard shortcuts or programmatic commands.

### Keyboard shortcuts

Use these standard keyboard shortcuts for quick undo/redo operations:
- **Undo**: `Ctrl+Z`
- **Redo**: `Ctrl+Y`

### Programmatic undo and redo

The [`undo`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#undo) and [`redo`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#redo) methods allow you to control undo/redo operations programmatically. The following example demonstrates how to implement these methods:

```typescript
@Component({
  selector: "app-container",
  // Diagram template
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px"  (created)='created($event)'>
      </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public created(args: Object): void {
        // Reverts the last action performed
        this.diagram.undo();
        // Restores the last undone action
        this.diagram.redo();
    }
}
```

### Enabling and disabling undo/redo

Control undo/redo availability using the [`constraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramConstraints/) property of the diagram component.

### History change events

The [`historyChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#historychange) event triggers whenever an action is undone or redone, allowing you to respond to history state changes.

## Advanced history management

### Grouping multiple actions

Group related changes into a single undo/redo operation using the history grouping feature. This approach allows users to undo or redo multiple related changes simultaneously rather than reversing each action individually.

Use [`startGroupAction`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#startgroupaction) to begin grouping actions and [`endGroupAction`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#endgroupaction) to complete the group. The following example shows how to group multiple fill color changes:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/undoRedo/groupAction-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/undoRedo/groupAction-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/undoRedo/groupAction-cs1" %}

### Managing history stack size

The [`stackLimit`](https://ej2.syncfusion.com/angular/documentation/api/diagram/history/#stacklimit) property controls the maximum number of actions stored in the history manager. Setting an appropriate limit helps manage memory usage in applications with extensive editing operations.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/undoRedo/canLog-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/undoRedo/canLog-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/undoRedo/canLog-cs2" %}

### Restricting history logging

Prevent specific actions from being recorded in the history using the [`canLog`](https://ej2.syncfusion.com/angular/documentation/api/diagram/history/#canlog) property. This feature is useful when certain operations should not be undoable.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/undoRedo/canLog-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/undoRedo/canLog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/undoRedo/canLog-cs1" %}

## History stack inspection

### Accessing undo and redo stacks

The history manager provides read-only access to both undo and redo stacks through the [`undoStack`](https://ej2.syncfusion.com/angular/documentation/api/diagram/history/#undostack) and [`redoStack`](https://ej2.syncfusion.com/angular/documentation/api/diagram/history/#redostack) properties:

```typescript
@Component({
    selector: "app-container",
    // render initialized Diagram
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px">
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    //get the collection of undoStack objects
    public undoStack: HistoryEntry[] = this.diagram.historyList.undoStack;
    //get the collection of redoStack objects
    public redoStack: HistoryEntry[] = this.diagram.historyList.redoStack;
}
```

### Checking availability of undo and redo operations

The [`canUndo`](https://ej2.syncfusion.com/angular/documentation/api/diagram/history/#canundo) and [`canRedo`](https://ej2.syncfusion.com/angular/documentation/api/diagram/history/#canredo) properties indicate whether undo or redo operations are available. These properties return true when actions exist in their respective history stacks.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/undoRedo/canUndo-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/undoRedo/canUndo-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/undoRedo/canUndo-cs1" %}

### Current entry tracking

During user interactions with nodes or connectors, the current history entry is stored in the [`currentEntry`](https://ej2.syncfusion.com/angular/documentation/api/diagram/history/#currententry) property of the [`historyManager`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#historymanager).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/undoRedo/currentEntry-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/undoRedo/currentEntry-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/undoRedo/currentEntry-cs1" %}

## History management utilities

### Clearing history

Use the [`clearHistory`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#clearhistory) method to remove all recorded actions from both undo and redo history stacks:

```typescript
//Clears all the histories
this.diagram.clearHistory();

```

### Retrieving history stacks

The [`getHistoryStack`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#gethistorystack) method retrieves either the [`undoStack`](https://ej2.syncfusion.com/angular/documentation/api/diagram/history/#undostack) or [`redoStack`](https://ej2.syncfusion.com/angular/documentation/api/diagram/history/#redostack) from the history manager. Pass true to get the undo stack or false to get the redo stack:

```typescript
// Fetch undoStack from history manager
this.diagram.getHistoryStack(true)

// Fetch redoStack from history manager
this.diagram.getHistoryStack(false)

```

## Event handling

### History change event

The [`historyChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iHistoryChangeArgs/) event triggers whenever interactions with nodes and connectors occur. This event provides an opportunity to implement custom logic or UI updates based on history state changes:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/undoRedo/histroyChange-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/undoRedo/histroyChange-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/undoRedo/histroyChange-cs1" %}

This event enables customization of the application behavior based on diagram interactions and history state changes.