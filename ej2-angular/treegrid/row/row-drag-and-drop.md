---
layout: post
title: Row drag and drop in Angular Treegrid component | Syncfusion
description: Learn here all about Row drag and drop in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row drag and drop 
documentation: ug
domainurl: ##DomainURL##
---

# Row drag and drop in Angular Treegrid component

The TreeGrid rows can be reordered, dropped to another TreeGrid or custom control by enabling the [`allowRowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowrowdraganddrop) to true.

To use row drag and drop, inject the `RowDDService` module in the TreeGrid.

## Drag and drop within Tree Grid

The TreeGrid row drag and drop allows you to drag and drop TreeGrid rows on the same TreeGrid using drag icon. To enable row drag and drop, set the [`allowRowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowrowdraganddrop) to true. It provides the way to drop the row above, below or child to the target row with respective to the target row position.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/row-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-cs3" %}

> * Selection feature must be enabled for row drag and drop.
> * For multiple row selection, the [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings/#type) property must be set to `multiple`.

## Drag and drop to another Tree Grid

To drag and drop between two TreeGrid, enable the [`allowRowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowrowdraganddrop) property and specify the target TreeGrid ID in [`targetID`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/rowDropSettings/#targetid) property of rowDropSettings.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/row-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-cs4" %}

## Drag and drop events

The following events are triggered while drag and drop the treegrid rows.

[`rowDragStartHelper`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdragstarthelper) - Triggers when click the drag icon or treegrid row and this event is used to customize the drag element based on user criteria.<br/>
[`rowDragStart`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdragstart) -Triggers when starts to drag the treegrid row. <br/>
[`rowDrag`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdrag) - Triggers while dragging the treegrid row. <br/>
[`rowDrop`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdrop) - Triggers when a drag element is dropped on the target element. <br/>

## Prevent reordering a row as child to another row

You can prevent the default behavior of dropping rows as children to the target by setting the `cancel` property to `true` in [rowDrop](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdrop) event argument. You can also change the drop position after cancelling using [reorderRows](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#reorderrows) method.

In the below example drop action is cancelled and dropped above to target row.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/row-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-cs5" %}