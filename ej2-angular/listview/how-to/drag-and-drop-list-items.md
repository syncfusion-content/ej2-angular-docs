---
layout: post
title: Drag and drop list items in Angular ListView component | Syncfusion
description: Learn here all about Drag and drop list items in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop list items in Angular ListView component

The ListView component can be enhanced with drag and drop functionality by utilizing the [`TreeView`](https://ej2.syncfusion.com/angular/documentation/treeview/getting-started) component while maintaining a ListView appearance.

First, import the required TreeView module:

```typescript
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
```

Enable drag and drop functionality in TreeView by setting the [`allowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#allowdraganddrop) property to `true`:

```typescript
<ejs-treeview id='element' [fields]='fields' allowDragAndDrop='true'></ejs-treeview>
```

The TreeView component displays data in a hierarchical structure. To maintain a flat list appearance, prevent nested dropping by handling the [`nodeDragStop`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodedragstop) and [`nodeDragging`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodedragging) events:

```typescript
<ejs-treeview id='element' [fields]='fields' allowDragAndDrop='true' (nodeDragging)='onDragStop($event)' (nodeDragStop)='onDragStop($event)'></ejs-treeview>

fields= { dataSource: this.data, id: 'id', text: 'text' },

onDragStop(args: any) {
    // Prevent nested drop operations
   const draggingItem = document.getElementsByClassName("e-drop-in");
    if (draggingItem.length == 1) {
        draggingItem[0].classList.add('e-no-drop');
        args.cancel = true;
    }
}
```

The following example demonstrates draggable list items implementation:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/reorder-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/reorder-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/reorder-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/reorder-cs2" %}
