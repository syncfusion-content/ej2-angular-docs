---
layout: post
title: Template editing in Angular Treegrid component | Syncfusion
description: Learn here all about Template editing in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Template editing 
documentation: ug
domainurl: ##DomainURL##
---

# Template editing in Angular Treegrid component

## Reactive forms

[`Reactive`](https://angular.io/guide/reactive-forms) Forms is a model-driven approach to create and manipulate the form controls. You can use reactive form to add and update treegrid records. To use reactive forms for editing operation, you can take leverage of the template support of dialog or inline edit mode. Setting the [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettingsModel/#mode) as `Row/Dialog` and `editSettingsTemplate` as template variable of NgTemplate to define the treegrid editors.

In the below sample, We have created the `FormGroup` with `FormControls` for each columns, in the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin)  event. While saving, we have validated the formgroup and updated the treegrid with the edited data from the FormGroup object.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-dlg-react-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-dlg-react-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-dlg-react-cs1" %}

## Template-driven forms

[`Template-driven`](https://angular.io/guide/forms#template-driven-forms) forms is a template-driven approach to create and manipulate the form controls. You can use template-driven form to add and update treegrid records. To use template-driven forms for editing operation, you can take leverage of the template support of dialog or inline edit mode. Setting the [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettingsModel/#mode) as `Row/Dialog` and `editSettingsTemplate` as template variable of NgTemplate to define the treegrid editors.

In some cases, you need to add the new field editors in the dialog which are not present in the column model. In that situation, the dialog template will help you to customize the default edit dialog.

You can check this video to learn about how to customize the edit dialog of TreeGrid using template driven forms.

{% youtube "https://www.youtube.com/watch?v=IlVJBZOVUoA" %}

In the following sample, treegrid enabled with dialog template editing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-dlg-temp-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-dlg-temp-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-dlg-temp-cs1" %}

> The template form editors should have **name** attribute.

## Template context

The Essential JS2 packages has a built-in template engine. Using the template engine, you can access the row information inside the HTML element and bind the attributes, values, or elements based on this row information.

The following properties will be available at the time of template execution.

| Property Name | Usage |
|---------------|--------|
| <kbd>isAdd</kbd> | A Boolean property; it defines whether the current row should be a new record or not.

In the following code example, the `taskID` textbox has been disabled by using the `isAdd` property.

```
// The disabled attributes will be added based on the isAdd property.
<input formControlName="taskID" id="taskID" name="taskID" type="text" [attr.disabled]="!data.isAdd ? '' : null">

```

The following code example illustrates rendering the `taskID` textbox, when a new record is added.

```

<div class="form-group col-md-6" *ngIf='data.isAdd'>
    <div class="e-float-input e-control-wrapper">
        <input formControlName="taskID" id="taskID" name="taskID" type="text" [attr.disabled]="!data.isAdd ? '' : null">
        <span class="e-float-line"></span>
        <label class="e-float-text e-label-top" for="taskID">Task ID</label>
    </div>
</div>

```

## Set focus to editor

By default, the first input element in the dialog will be focused while opening the dialog.
If the first input element is in disabled or hidden state, focus the valid input element in the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actioncomplete) event based on `requestType` as `beginEdit`.

```typescript

    actionComplete: (args: DialogEditEventArgs) => {
        // Set initial Focus
        if (args.requestType === 'beginEdit') {
            (args.form.elements.namedItem('taskName')as HTMLInputElement).focus();
        }
    }

```

## Disable form validation

If you have interested to use [`angular form validation`](https://angular.io/guide/form-validation) then you need to disable the default validation rules in  the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actioncomplete) event.

```typescript

    actionComplete(args: DialogEditEventArgs) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Disable the Validation Rules
            args.form.ej2_instances[0].rules = {};
        }
    }

```

## Adding validation rules for custom editors

If you have used additional fields that are not present in the column model, then add the validation rules to the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actioncomplete) event.

```typescript

    actionComplete: (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            args.form.ej2_instances[0].addRules('progress', {max: 100});
        }
    }

```