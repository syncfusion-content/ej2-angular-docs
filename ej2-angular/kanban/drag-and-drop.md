---
layout: post
title: Drag and drop in Angular Kanban Component | Syncfusion
description: Learn here all about drag and drop support in Syncfusion Essential Angular Kanban component, it's elements and more.
platform: ej2-angular
control: Drag and drop 
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in Angular Kanban Component

All cards can be dragged and dropped across the columns or within the columns or swimlane row or kanban to an external source and vice versa.

The following drag and drop types are available in the Kanban board.

* Internal drag and drop
    * Column drag and drop
    * Swimlane drag and drop
* External drag and drop
    * Kanban to Kanban
    * Kanban to External source and vice versa.

> Dropped card position varies based on the `sortSettings` property.

## Internal drag and drop

Allows the user to drag and drop the cards within the kanban board. Based on this, we can categorize into two ways.

* Column drag and drop
* Swimlane drag and drop

### Column drag and drop

By default, all cards can be dragged and dropped across the columns and within the columns. You cannot drag and drop the cards when disabling the `allowDragAndDrop` property.

> You can prevent the drag or drop behavior of the particular column by disabling the `allowDrag` or `allowDrop` property.
> You can also control the flow of transition cards between the columns by using the `transitionColumns` property.

In the following example, disable the drag and drop behavior on the Kanban board.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/drag-and-drop-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/kanban/drag-and-drop-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/drag-and-drop-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/drag-and-drop-cs1" %}

### Swimlane drag and drop

By default, Swimlane allows drag and drop across the columns within the swimlane row. Kanban does not allow dragging the cards across the swimlane rows.

Enabling the `dragAndDrop` property allows you to drag the cards across the swimlane rows, which is specified inside the `swimlaneSettings` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/swimlane-drag-and-drop-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/kanban/swimlane-drag-and-drop-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/swimlane-drag-and-drop-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/swimlane-drag-and-drop-cs1" %}

## External drag and drop

Allows the user to drag and drop the cards from one kanban to another kanban or Kanban to an external source and vice versa.

### Kanban to kanban

Drag and drop the card from one kanban to another kanban and vice versa. This can be achieved by specifying the `externalDropId` property which is used to specify the id of the dropped kanban element and the `dragStop` event which is used to delete the card on dragged Kanban and add the card on dropped Kanban using the `deleteCard` and `addCard` public methods.

> Before adding a card to dropped kanban, you can manually change the card data `headerField` when the same card data `headerField` is dropped to another Kanban.

In the following example, Drag the card from one Kanban and drop it into another kanban using the `dragStop` event. In this event, remove the card from the dragged Kanban by using the `deleteCard` public method and add the card to the dropped Kanban by using the `addCard` public method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/kanban-to-kanban-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/kanban/kanban-to-kanban-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/kanban-to-kanban-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/kanban-to-kanban-cs1" %}

### Treeview to Kanban

Drag the card from the Kanban board and drop it to the Treeview component and vice versa.

In the following sample, remove the data from the Kanban board using the `deleteCard` public method and add to the Treeview component using the `addNodes` public method at Kanban `dragStop` event when dragging the card and dropping it to the Treeview component. Remove the data from Treeview using the `removeNodes` public method and add to Kanban board using the `openDialog` public method when dragging the list from the Treeview component and dropping it to the kanban board.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/kanban-to-treeview-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/kanban/kanban-to-treeview-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/kanban-to-treeview-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/kanban-to-treeview-cs1" %}

### Schedule to Kanban

Drag the card from the Kanban board and drop it to the Schedule component and vice versa.

In the following sample, remove the data from the Kanban board using the `deleteCard` public method and add to the schedule component using the `addNodes` public method at Kanban `dragStop` event when dragging the card and dropping it to the Treeview component. Remove the data from Treeview using the `removeNodes` public method and add to Kanban board using the `addCard` public method when dragging the list from the Treeview component and dropping it to the kanban board.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/kanban-to-schedule-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/kanban/kanban-to-schedule-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/kanban-to-schedule-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/kanban-to-schedule-cs1" %}
