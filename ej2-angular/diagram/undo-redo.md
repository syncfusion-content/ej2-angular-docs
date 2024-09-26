---
layout: post
title: Undo redo in Angular Diagram component | Syncfusion
description: Learn here all about Undo redo in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Undo redo 
documentation: ug
domainurl: ##DomainURL##
---

# Undo redo in Angular Diagram component

Diagram tracks the history of actions that are performed after initializing the diagram and provides support to reverse and restore those changes.

## Undo and redo

Diagram provides built-in support to track the changes that are made through interaction and through public APIs. The changes can be reverted or restored either through shortcut keys or through commands.

>Note: If you want to use Undo-Redo in diagram, you need to inject UndoRedo in the diagram.

## Undo/redo through shortcut keys

Undo/redo commands can be executed through shortcut keys. Shortcut key for undo is Ctrl+z and shortcut key for redo is Ctrl+y.

## Undo/redo through public APIs

The client-side methods [`undo`](https://ej2.syncfusion.com/angular/documentation/api/diagram) and [`redo`](https://ej2.syncfusion.com/angular/documentation/api/diagram) help you to revert/restore the changes. The following code example illustrates how to undo/redo the changes through script.

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

When a change in the diagram is reverted or restored (undo/redo), the historyChange event gets triggered.

### Group multiple changes

History list allows to revert or restore multiple changes through a single undo/redo command. For example, revert/restore the fill color change of multiple elements at a time.

The client-side method [`startGroupAction`](https://ej2.syncfusion.com/angular/documentation/api/diagram) is used to notify the diagram to start grouping the changes. The client-side method [`endGroupAction`](https://ej2.syncfusion.com/angular/documentation/api/diagram) is used to notify to stop grouping the changes. The following code illustrates how to undo/redo fillColor change of multiple elements at a time.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/undoRedo/groupAction-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/undoRedo/groupAction-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/undoRedo/groupAction-cs1" %}

## canLog

canLog in the history list, which takes a history entry as argument and returns whether the specific entry can be added or not.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/undoRedo/canLog-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/undoRedo/canLog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/undoRedo/canLog-cs1" %}

### Track undo/redo actions

The historyList undoStack property is used to get the collection of undo actions which should be performed in the diagram. The undoStack/redoStack is the read-only property.

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

## History change event

The [`historyChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram) event triggers, whenever the interaction of the node and connector is take place.

```typescript
@Component({
    selector: "app-container",
    // render initialized Diagram
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" (created)='create($event)'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public created(args: Object): void {
        // history change event
        this.diagram.historyChange = (arg: IHistoryChangeArgs) => {
            //causes of history change
            let cause: string = arg.cause;
        }
    }
}
```

## Stack limit

The [`stackLimit`](https://ej2.syncfusion.com/angular/documentation/api/diagram) property of history manager is used to limits the number of actions to be stored on the history manager.
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/undoRedo/canLog-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/undoRedo/canLog-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/undoRedo/canLog-cs2" %}

## Retain selection

You can retain a selection at undo/redo operation by using the client-side API Method called `updateSelection`.  Using this method, we can select a diagram objects.

```typescript
@Component({
    selector: "app-container",
    // render initialized Diagram
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" (created)='create($event)'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public created(args: Object): void {
        // history change event
        this.diagram.updateSelection: (object: NodeModel, diagram: Diagram) => {
                    let selArr = [];
                    selArr.push(object)
                    diagram.select(selArr);
                },
    }
}
```