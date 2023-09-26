---
layout: post
title: Drag and drop list items in Angular Listview component | Syncfusion
description: Learn here all about Drag and drop list items in Syncfusion Angular Listview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Drag and drop list items 
documentation: ug
domainurl: ##DomainURL##
---


# Drag and drop list items in Angular Listview component

In ListView component, we don't have  drag and drop support. But we can achieve this requirement using [`TreeView`](https://ej2.syncfusion.com/angular/documentation/treeview/getting-started) component with ListView appearance.

Drag and Drop in TreeView component was enabled by setting [`allowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#allowdraganddrop) to `true`.

```typescript

<ejs-treeview id='element' [fields]='fields' allowDragAndDrop='true'></ejs-treeview>

```

The TreeView component is used to represent hierarchical data in a tree like structure. So, list items in TreeView can be dropped to child of target element. we can prevent this behaviour by cancelling the [`nodeDragStop`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodedragstop) and [`nodeDragging`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodedragging) events.

```typescript

<ejs-treeview id='element' [fields]='fields' allowDragAndDrop='true' (nodeDragging)='onDragStop($event)' (nodeDragStop)='onDragStop($event)'></ejs-treeview>

fields= { dataSource: this.data, id: 'id', text: 'text' },

onDragStop(args) {
    //Block the Child Drop operation in TreeView
   let  draggingItem = document.getElementsByClassName("e-drop-in");
    if (draggingItem.length == 1) {
        draggingItem[0].classList.add('e-no-drop');
        args.cancel = true;
    }
}

```

In the below sample, we have rendered draggable list items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/reorder-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/listview/reorder-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/reorder-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/reorder-cs2" %}
