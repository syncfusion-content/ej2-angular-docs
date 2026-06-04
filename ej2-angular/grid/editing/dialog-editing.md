---
layout: post
title: Angular Grid - Dialog Editing | Syncfusion
description: Angular Grid dialog editing opens record editors in modal dialogs, supports templates, enforces validation, and manages single-record save workflows.
platform: ej2-angular
control: Dialog editing 
documentation: ug
domainurl: ##DomainURL##
---

# Dialog Editing in Angular Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid Component dialog editing provides a powerful, efficient way to edit row data through a dedicated modal dialog window that focuses attention on the editing form. Instead of editing cells directly in the grid, multiple field values can be entered and modified at once in a clean, organized form. The grid automatically saves all changes to the data source without navigating away from the current page making data entry faster, more intuitive, and less error-prone, especially when dealing with complex records that span multiple columns.

To enable dialog editing in the grid component, set the [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#mode) property to `Dialog`. This property determines the editing mode for the grid.

The following example demonstrates to enable dialog editing in the Angular Grid component:

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

The edit dialog is a modal window that isolates the editing form and prevents grid interaction until the dialog closes. Customize this dialog to match application needs by handling the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#actioncomplete) event.

**Customizable options**:
- Header text, close button visibility, and height.
- Button text and localization strings.
- Dialog behavior based on the editing action.

Use the `requestType` parameter to identify which action triggered the event and apply appropriate customizations:

| Request Type | Description |
|--------------|-------------|
| `beginEdit` | Editing an existing record |
| `add` | Creating a new record |
| `save` | Updating a new or existing record |
| `delete` | Deleting an existing record |

> Refer to the Grid [Default text](../global-local) list for localization options.

The following example demonstrates to customize the edit dialog using the `actionComplete` event:

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

Column visibility can be dynamically controlled in dialog editing mode. The [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid#actionbegin) event enables showing or hiding specific columns based on whether an existing record is being edited or a new record is being added.

The `actionBegin` event is triggered whenever an action is initiated in the grid (editing, adding, or deleting a record). Within the event `requestType` parameter determines to manage column visibility in the event handler:

| Request Type | Action | Column Visibility Control |
|---|---|---|
| `beginEdit` or `add` | Editing or creating a record | Modify visibility using the `visible` property |
| `save` | Saving the record | Reset columns to initial visibility state using `visible` property |

In the following example, the "Customer ID" column is rendered as a hidden column, and the "Ship Country" column is rendered as a visible column. In the edit mode, the "Customer ID" column will be changed to a visible state and the "Ship Country" column will be changed to a hidden state.

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

Wizard-like dialog editing divides complex forms into manageable step-by-step sections with efficient navigation. The [editSettings.template](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#template) property enables custom form templates with multiple steps:

1. Set [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#mode) to `Dialog`.
2. Define template sections for each form step.
3. Add navigation buttons (Previous, Next, Save) between steps.
4. Implement validation for each step.

The example below demonstrates the wizard-like dialog editing in the grid using unobtrusive validation:

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

The dialog footer can be customized to add custom buttons or modify button appearance with effortless integration. The default footer displays Save and Cancel buttons. The [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#actioncomplete) event enables adding custom buttons, changing button text, or implementing custom button actions in the dialog footer.

In the following sample, using the `dialog` argument of the `actionComplete` event, the action for the custom button can be customized.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/edit-cs10" %}