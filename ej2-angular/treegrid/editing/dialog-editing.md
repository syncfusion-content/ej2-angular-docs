---
layout: post
title: Dialog editing in Angular TreeGrid component | Syncfusion
description: Learn here all about Dialog editing in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dialog editing 
documentation: ug
domainurl: ##DomainURL##
---

# Dialog editing in Angular TreeGrid component

Dialog editing is a feature in the TreeGrid component that allows you to edit the data of the currently selected row using a dialog window. With dialog editing, you can easily modify cell values and save the changes back to the data source. This feature is particularly beneficial in scenarios where you need to quickly modify data without navigating to a separate page or view, and it streamlines the process of editing multiple cells.

To enable dialog editing in tree grid, you need to set the [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#mode) property to **Dialog**. This property determines the editing mode for the tree grid, and when set to **Dialog**, it enables the dialog editing feature.

Here's an example how to enable dialog editing in the tree grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/dialog-edit-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/dialog-edit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/dialog-edit-cs1" %}

## Customize edit dialog

The edit dialog in the TreeGrid component allows you to customize its appearance and behavior based on the type of action being performed, such as editing or adding a record. You can modify properties like header text, close icon, and height to tailor the edit dialog to your specific requirements. Additionally, you can override default localization strings to provide custom text for buttons or other elements within the dialog.

To customize the edit dialog, you need to handle the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actioncomplete) event of the TreeGrid component and perform the necessary modifications based on the **requestType** parameter. The **requestType** parameter identifies the type of action being performed, such as **beginEdit** for editing a record or **add** for adding a new record.

>You can refer the tree grid [Default text](https://ej2.syncfusion.com/angular/documentation/treegrid/global-local) list for more localization.

The following example that demonstrates how to customize the edit dialog using the `actionComplete` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/dialog-edit-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/dialog-edit-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/dialog-edit-cs2" %}

> The Tree Grid add or edit dialog element has the max-height property, which is calculated based on the available window height. So, in the normal window (1920 x 1080), it is possible to set the dialog's height up to 658px.

## Show or hide columns in dialog editing

The show or hide columns of dialog editing feature in the tree grid allows you to dynamically control the visibility of columns while editing in the dialog edit mode. This feature is useful when you want to display specific columns based on the type of action being performed, such as editing an existing record or adding a new record. To achieve this, you can utilize the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) event of the tree grid. 

The `actionBegin` event is triggered whenever an action is initiated in the tree grid, such as editing, adding, or deleting a record. Within the event handler, you can check the **requestType** parameter to determine the type of action being performed. If the **requestType** is `beginEdit` or `add`, you can modify the visibility of columns using the [column.visible](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#visible) property. This property is used to determine whether a column should be displayed or hidden. Then, when the **requestType** is `save`, you can reset the column visibility to its initial state using the `column.visible` property.

In the below example, we have rendered the tree grid columns **priority** as hidden column and **duration** as visible column. In the edit mode, we have changed the **priority** column to a visible state and **duration** column to a hidden state.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/dialog-edit-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/dialog-edit-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/dialog-edit-cs3" %}

## Use wizard like dialog editing

Wizard-like dialog editing enables the creation of intuitive step-by-step forms. This feature provides a structured approach to form completion or data entry by breaking down the process into manageable steps. This feature is particularly useful when you have complex forms that need to be broken down into smaller sections to guide you through the data entry process.

To achieve wizard-like dialog editing in the TreeGrid component, you can use the dialog template feature. This feature allows you to define your own custom editing template using the [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#mode) property set to  **Dialog** and **editSettingsTemplate** as template variable in NgTemplate to define the tree grid editors for each step of the wizard.

The following example demonstrate the wizard like editing in the tree grid with the unobtrusive validation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/dialog-edit-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/dialog-edit-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/dialog-edit-cs4" %}

## Customize add/edit dialog footer

The Customize add/edit dialog footer feature in the tree grid allows you to modify the footer section of the dialog that appears when editing the currently selected row or adding a new row. By default, the dialog displays two buttons in the footer section: **Save and Cancel**, which allow you to save or discard the changes made in the dialog. This feature is particularly helpful when you want to add custom buttons to the dialog's footer, implement specific actions, or customize the appearance of the buttons, such as changing their color or size in the dialog's footer. This can be achieved using the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actioncomplete) event of the TreeGrid component.

In the following sample, using the `dialog` argument of the `actionComplete` event, the action for the custom button can be customized.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/dialog-edit-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/dialog-edit-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/dialog-edit-cs5" %}