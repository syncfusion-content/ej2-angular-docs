---
layout: post
title: Angular Grid Cell Editing | Syncfusion
description: Learn how to edit grid cells in Angular Data Grid, customize editing workflows, validate input, manage updates, and control editing behavior.
platform: ej2-angular
control: Cell editing 
documentation: ug
domainurl: ##DomainURL##
---

# Cell Editing in Angular Data Grid

Cell editing provides a streamlined way to update individual cell values directly within the grid. It is designed for quick, inline modifications, making data entry and corrections more efficient. This approach ensures that changes are applied seamlessly to large datasets while maintaining consistency with the grid’s overall editing experience.

## Enable cell editing

To enable cell editing in the Data Grid, configure the [editSettings->mode](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#mode) property to `Cell` and set the [editSettings->allowEditing](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettingsModel#allowediting) property to `true`. This configuration allows individual cell values to be updated directly within the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/cell-edit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/cell-edit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/cell-edit-cs1" %}

> When editing is enabled, it is necessary to set the [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel#isprimarykey) property value to `true` for the unique column to ensure accurate data updates.

## Single-click editing

Single-click editing allows a cell to enter edit mode with a single click instead of the default interaction. This seamless experience is achieved by using the `editCell` method for rapid, efficient data modification.

To implement this, bind the click event for the grid and, within the event handler, call the `editCell` method based on the clicked target element. This ensures that the editing mode is triggered when clicking on a specific element within the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/cell-edit-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/cell-edit-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/cell-edit-cs3" %}

## Cancel edit based on condition

The Data Grid can prevent edit operations for specific cells based on custom conditions. This functionality is achieved by leveraging the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid#actionbegin) event of the grid component. This event is triggered when a CRUD (Create, Read, Update, Delete) operation is initiated in the grid.

This customization is useful when restricting editing for certain cells, such as read-only data, calculated values, or protected information. It helps maintain data integrity and ensures that only authorized changes can be made in the grid.

To cancel the edit operation based on a specific condition, handle the `actionBegin` event of the grid component and check the `requestType` parameter. This parameter indicates the type of action being performed:

| Request Type | Description |
|--------------|-------------|
| `beginEdit` | Editing an existing record |
| `add` | Creating a new record |
| `save` | Updating a new or existing record |
| `delete` | Deleting an existing record |

Apply the desired condition and cancel the operation by setting the `args.cancel` property to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/cell-edit-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/cell-edit-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/cell-edit-cs2" %}

## See also

* [Normal editing](./in-line-editing)
* [Batch editing](./batch-editing)
* [Template editing](./template-editing)
* [Validation](./validation)