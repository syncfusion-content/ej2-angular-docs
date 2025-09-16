---
layout: post
title: Dialog editing in Angular Grid component | Syncfusion
description: Learn here all about Dialog editing in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dialog editing 
documentation: ug
domainurl: ##DomainURL##
---

# Dialog editing in Angular Grid component

Dialog editing is a feature in the Grid component that enables editing of the selected row's data through a dialog window. This approach allows for convenient modification of cell values and saving changes directly to the data source. Dialog editing is especially effective in scenarios where rapid data modification is needed without navigating away from the current context, facilitating efficient updates to multiple fields at once.

To enable dialog editing, set the [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) property to **Dialog**. This property specifies the editing mode for the grid, and when set to **Dialog**, activates the dialog editing feature.

The following example demonstrates how to enable dialog editing in the Angular Grid component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/edit-cs7" %}

## Customize the edit dialog

The edit dialog can be customized to change its appearance and behavior based on the type of action performed, such as editing or adding a record. Properties like header text, showCloseIcon, and height can be tailored to specific requirements. Additionally, localization strings can be overridden to provide custom text for dialog buttons and elements.

To customize the edit dialog, handle the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event in the Grid component. Use the **requestType** parameter within the event handler to identify the current action (such as **beginEdit** for editing or **add** for record creation), and apply desired customizations accordingly.

> Refer to the Grid [Default text](../global-local/) list for localization options.

The following example demonstrates how to customize the edit dialog using the `actionComplete` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/edit-cs8" %}

> The Grid's add or edit dialog element applies a max-height property that is calculated based on the available window height. For typical screens (1920 x 1080), the dialog's maximum height can be set up to 658px.

## Show or hide columns in dialog editing

The grid component supports dynamic show or hide functionality for columns within the dialog editing interface. This flexibility allows selective visibility based on the editing context—such as displaying certain columns only during add or edit operations. To achieve this, handle the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event in the Grid.

The `actionBegin` event triggers with every grid action (edit, add, delete, etc.). Within the event handler, evaluate the **requestType** property to determine the context (`beginEdit` or `add`, for example) and then set the `column.visible` property on targeted columns to control their visibility. Reset these properties after saving as needed.

In this example, the **CustomerID** column is initially hidden, and the **ShipCountry** column is visible. When entering edit mode, **CustomerID** becomes visible and **ShipCountry** is hidden:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/edit-cs9" %}

## Wizard-like dialog editing

Wizard-like dialog editing enables step-by-step form entry within the Grid, segmenting complex forms into manageable sections. This structured approach guides users efficiently through the data entry process and improves accuracy in scenarios requiring multiple input stages.

To implement wizard-like dialog editing, use the dialog template feature. Assign [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) to **Dialog** and provide a custom template using the [editSettingsTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#template) property. This template organizes different fields or steps within the wizard flow.

The example below demonstrates wizard-like dialog editing in the grid using unobtrusive validation:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/wizardtemplate-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="wizardtemplate.html" %}
{% include code-snippet/grid/wizardtemplate-cs1/src/wizardtemplate.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/wizardtemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/wizardtemplate-cs1" %}

## Customize add/edit dialog footer

The grid component allows customization of the dialog's footer section, which appears when editing or adding a row. By default, the footer includes Save and Cancel buttons, but you can add custom buttons, modify their appearance, or introduce specialized actions for the dialog.

Customize the dialog's footer by handling the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event and utilizing the `dialog` argument to modify the footer content as desired.

In the following sample, the footer section is customized, and action logic is handled via the `dialog` argument in the `actionComplete` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/edit-cs10" %}