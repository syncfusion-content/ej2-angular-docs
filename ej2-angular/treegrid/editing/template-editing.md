---
layout: post
title: Template editing in Angular TreeGrid component | Syncfusion
description: Learn here all about Template editing in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Template editing 
documentation: ug
domainurl: ##DomainURL##
---

# Template editing in Angular TreeGrid component

## Reactive forms

[Reactive](https://angular.io/guide/reactive-forms) Forms is a model-driven approach to create and manipulate form controls. You can use reactive forms to add and update TreeGrid records. To use reactive forms for editing operations, you can leverage the template support of dialog or row edit mode. Setting the [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#mode) as **Row/Dialog** and **editSettingsTemplate** as template variable of NgTemplate to define the TreeGrid editors.

In the following sample, the **FormGroup** with **FormControls** is created for each column in the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) event. While saving, the formgroup is validated and the TreeGrid is updated with the edited data from the FormGroup object:

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

[Template-driven](https://angular.io/guide/forms#template-driven-forms) forms is a template-driven approach to create and manipulate form controls. You can use template-driven forms to add and update TreeGrid records. To use template-driven forms for editing operations, you can leverage the template support of dialog or row edit mode. Setting the [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettingsModel/#mode) as `Row/Dialog` and `editSettingsTemplate` as template variable of NgTemplate to define the TreeGrid editors.

In some cases, you need to add new field editors in the dialog which are not present in the column model. In that situation, the dialog template will help you customize the default edit dialog.

You can check this video to learn about how to customize the edit dialog of TreeGrid using template driven forms.

{% youtube "https://www.youtube.com/watch?v=IlVJBZOVUoA" %}

In the following sample, the FormGroup is created using ngForm directive. While saving, the formgroup is validated and the TreeGrid is updated with the edited model data:

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

While using the edit template, you can access the row information inside the NgTemplate and bind the attributes or values or elements based on this row information.

The following properties will be available at the time of template execution:

| Property Name | Usage |
|---------------|-------|
| <kbd>isAdd</kbd> | A boolean property; it defines whether the current row should be a new record or not. |

In the following code example, the **taskID** textbox has been disabled by using the **isAdd** property:

```
// The disabled attributes will be added based on the isAdd property.
<input formControlName="taskID" id="taskID" name="taskID" type="text" [attr.disabled]="!data.isAdd ? '' : null">

```

The following code example illustrates rendering the **taskID** textbox, when a new record is added:

```

<div class="form-group col-md-6" *ngIf='data.isAdd'>
    <div class="e-float-input e-control-wrapper">
        <input formControlName="taskID" id="taskID" name="taskID" type="text" [attr.disabled]="!data.isAdd ? '' : null">
        <span class="e-float-line"></span>
        <label class="e-float-text e-label-top" for="taskID"> Task ID</label>
    </div>
</div>

```

## Set focus to editor

By default, the first input element in the dialog will be focused while opening the dialog. If the first input element is in disabled or hidden state then you need to focus the valid input element in the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actioncomplete) event based on **requestType** as **beginEdit**.

```typescript

    actionComplete: (args: DialogEditEventArgs) => {
        // Set initial Focus
        if (args.requestType === 'beginEdit') {
            (args.form.elements.namedItem('taskName')as HTMLInputElement).focus();
        }
    }

```

## Disable form validation

If you are interested in using [angular form validation](https://angular.io/guide/form-validation) then you need to disable the default validation rules in the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actioncomplete) event.

```typescript

    actionComplete(args: DialogEditEventArgs) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Disable the Validation Rules
            args.form.ej2_instances[0].rules = {};
        }
    }

```

## Adding validation rules for custom editors

If you are interested in using our default form validation, the validation rules for the fields which are not present in the column model need to be added in the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actioncomplete) event.

```typescript

    actionComplete: (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            args.form.ej2_instances[0].addRules('progress', {max: 100});
        }
    }

```

## Render tab component inside the dialog template

You can use [Tab](https://ej2.syncfusion.com/angular/documentation/tab/getting-started) component inside dialog edit UI using dialog template feature. The dialog template feature can be enabled by defining [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#mode) as `Dialog` and **editSettingsTemplate** as template variable in NgTemplate to define the TreeGrid editors.

To include tab components in the Dialog, please ensure the following steps:

**Step 1**: To render the Tab component, use the `editSettingsTemplate` of the TreeGrid. Inside the content template of the tab items define the input elements.

```
<ejs-tab #tab id="tab_wizard" showCloseButton=false (selecting)='selecting($event)'>
    <e-tabitems>
        <e-tabitem [header]="{ 'text': 'Details' }" >
            <ng-template #content>
                <div id="tab1">
                    <div class="form-row">
                    <div class="form-group col-md-6">
                    <div class="e-float-input e-control-wrapper" [ngClass]="{'e-error': taskID.invalid && (taskID.dirty || taskID.touched)}">
                        <input [(ngModel)]="data.taskID" required id="taskID" name="taskID" type="text" [attr.disabled]="!data.isAdd ? '' : null" #taskID="ngModel">
                        <span class="e-float-line"></span>
                        <label class="e-float-text e-label-top" for="taskID"> Task ID</label>
                    </div>
                    <div id="taskIDError" *ngIf='taskID.invalid && (taskID.dirty || taskID.touched)'>
                        <label class="e-error" for="taskID" id="taskID-info" style="display: block;">*Task ID is required</label>
                    </div>
                    </div>
                    </div>
                    <div class="form-row">
                    <div class="form-group col-md-6">
                    <div class="e-float-input e-control-wrapper" [ngClass]="{'e-error': taskName.invalid && (taskName.dirty || taskName.touched)}">
                        <input [(ngModel)]="data.taskName" required id="taskName" name="taskName" type="text" #taskName="ngModel">
                        <span class="e-float-line"></span>
                        <label class="e-float-text e-label-top" for="taskName">Task Name</label>
                    </div>
                    <div id="taskNameError" *ngIf='taskName.invalid && (taskName.dirty || taskName.touched)'>
                        <label class="e-error" for="taskName" id="taskName-info" style="display: block;">*Customer Name is required</label>
                    </div>
                    </div>
                    </div>
                    <button ejs-button type="button" cssClass="e-info e-btn" style="float: right" (click)="nextBtn()" >next</button>
                </div>
            </ng-template>
        </e-tabitem>
        <e-tabitem [header]="{ 'text': 'Verify' }">
            <ng-template #content>
                <div id="tab2">
                <div class="form-row" >
                <div class="form-group col-md-6">
                    <ejs-dropdownlist id="priority" name="priority" [(ngModel)]="data.priority" [dataSource]='priorityDistinctData' [fields]="{text: 'priority', value: 'priority' }" placeholder="Priority" popupHeight='300px' floatLabelType='Always'></ejs-dropdownlist>
                </div>
                </div>
                <div class="form-row">
                <div class="form-group col-md-6">
                    <ejs-checkbox #approved name="approved" id="approved" label="Approved" [checked]="data.approved" ></ejs-checkbox>
                </div>
                </div>
                    <button ejs-button type="button" cssClass="e-info e-btn" style="float: right" (click)='submitBtn()'>submit</button>
                </div>
            </ng-template>
        </e-tabitem>
    </e-tabitems>
</ejs-tab>

```

In the following example, tab control is rendered inside the edit dialog. The tab control has two tabs and once you fill the first tab and navigate to second one, the validation for first tab is done before navigating to second:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-dlg-temp-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-dlg-temp-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-dlg-temp-cs2" %}