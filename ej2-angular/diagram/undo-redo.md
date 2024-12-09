---
layout: post
title: Undo redo in Angular Diagram component | Syncfusion®
description: Learn here all about Undo redo in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Undo redo 
documentation: ug
domainurl: ##DomainURL##
---

# Undo redo in Angular Diagram control

Diagram tracks the history of actions that are performed after initializing the diagram and provides support to reverse and restore those changes.

## Undo and redo

Diagram provides built-in support to track the changes that are made through interaction and through public APIs. The changes can be reverted or restored either through shortcut keys or through commands.

N> If you want to use Undo-Redo in diagram, you need to inject UndoRedo in the diagram.

## Undo/redo through shortcut keys

Undo/redo commands can be executed through shortcut keys. Shortcut key for undo is **`Ctrl+z`** and shortcut key for redo is **`Ctrl+y`**.

## Undo/redo through public APIs

The client-side methods [`undo`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#undo) and [`redo`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#redo) help you to revert/restore the changes. The following code example illustrates how to undo/redo the changes through script.

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
Undo/Redo for diagram can be enabled/disabled with the [`constraints`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/diagramConstraints/) property of diagram.

When a change in the diagram is reverted or restored (undo/redo), the [`historyChange`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#historychange) event gets triggered.

## Group multiple changes

History list allows to revert or restore multiple changes through a single undo/redo command. For example, revert/restore the fill color change of multiple elements at a time.

The diagram method [`startGroupAction`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#startgroupaction) allows you to log multiple actions at a time in the history manager stack. It is easier to undo or revert the changes made in the diagram in a single undo/redo process instead of reverting every actions one by one.The diagram method [`endGroupAction`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#endgroupaction) allows you to end the group actions that are stored in the stack history. The following code illustrates how to undo/redo multiple fillColor change of a node at a time.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/undoRedo/groupAction-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/undoRedo/groupAction-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/undoRedo/groupAction-cs1" %}

## Stack limit

The [`stackLimit`](https://ej2.syncfusion.com/angular/documentation/api/diagram/history/#stacklimit) property of history manager is used to limits the number of actions to be stored on the history manager.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/undoRedo/canLog-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/undoRedo/canLog-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/undoRedo/canLog-cs2" %}

## Restrict Undo/Redo

Undo, Redo process can be avoided for particular element by using [`canLog`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/history/#canlog) property in the history manager. The following example illustrates how to prevent history entry using `canLog` function.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/undoRedo/canLog-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/undoRedo/canLog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/undoRedo/canLog-cs1" %}

## undo/redo stack

The [`undoStack`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/history/#undostack) property is used to get the collection of undo actions which should be performed in the diagram. The [`redoStack`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/history/#redostack) property is used to get the collection of redo actions which should be performed in the diagram. The undoStack/redoStack is the read-only property.

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

## Current entry

While performing interactions with a node or connector, the current history entry is added to the [`currentEntry`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/history/#currententry) property of the [`historyManager`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#historymanager).

The following code shows how to get the current entry from the diagram history:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/undoRedo/currentEntry-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/undoRedo/currentEntry-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/undoRedo/currentEntry-cs1" %}

## Clear history

The [`clearHistory`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#clearhistory) method of diagram is used to remove all the recorded actions from the undo and redo history.

```typescript
//Clears all the histories
this.diagram.clearHistory();

```

## Get history stack

The [`getHistoryStack`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#gethistorystack) method of the diagram retrieves the [`undoStack`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/history/#undostack) or [`redoStack`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/history/#redostack) from the historyManager. This method takes a single parameter, isUndoStack. Pass true to get the undoStack or false to get the redoStack.

```typescript
// Fetch undoStack from history manager
this.diagram.getHistoryStack(true)

// Fetch redoStack from history manager
this.diagram.getHistoryStack(false)

```

## History change event

The [`historyChange`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/iHistoryChangeArgs/) event triggers, whenever the interaction of the node and connector is take place. When interacting, the entries get added to the history manager to trigger this event. The following example shows how to get this event in diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/undoRedo/histroyChange-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/undoRedo/histroyChange-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/undoRedo/histroyChange-cs1" %}

While interacting with diagram, this event can be used to do the customization.
