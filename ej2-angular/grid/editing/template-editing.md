---
layout: post
title: Template editing in Angular Grid component | Syncfusion
description: Learn here all about Template editing in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Template editing 
documentation: ug
domainurl: ##DomainURL##
---

# Template editing in Angular Grid component

## Reactive Forms

[`Reactive`](https://angular.io/guide/reactive-forms) Forms is a model-driven approach to create and manipulate the form controls. You can use reactive form to add and update grid records. To use reactive forms for editing operation, you can take leverage of the template support of dialog or inline edit mode. Setting the [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) as **Normal/Dialog** and **editSettingsTemplate** as template variable of NgTemplate to define the grid editors.

In the below sample, We have created the **FormGroup** with **FormControls** for each columns, in the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin)  event. While saving, we have validated the formgroup and updated the grid with the edited data from the FormGroup object.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/reactive-form-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="reactive-form.html" %}
{% include code-snippet/grid/reactive-form-cs1/src/reactive-form.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/reactive-form-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/reactive-form-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/reactive-form-cs1" %}

## Template-driven forms

[`Template-driven`](https://angular.io/guide/forms#template-driven-forms) forms is a template-driven approach to create and manipulate the form controls. You can use template-driven form to add and update grid records. To use template-driven forms for editing operation, you can take leverage of the template support of dialog or inline edit mode. Setting the [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) as **Normal/Dialog** and **editSettingsTemplate** as template variable of NgTemplate to define the grid editors.

In some cases, you want to add new field editors in the dialog which are not present in the column model. In that situation the dialog template will help us to customize the default edit dialog.

In the below sample, We have created the **FormGroup** by using **ngForm** directive. While saving, we have validated the formgroup and updated the grid with the edited model data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/dialogTemplate-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template-driven.html" %}
{% include code-snippet/grid/dialogTemplate-cs1/src/template-driven.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/dialogTemplate-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/dialogTemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/dialogTemplate-cs1" %}

> The form editors should have **name** attribute.

## Template context

While using the edit template, you can access the row information inside the NgTemplate and you can bind the attributes or values or elements based on this row information.

The following properties will be available at the time of template execution.

| Property Name | Usage |
|---------------|-------|
| <kbd>isAdd</kbd> | A Boolean property; it defines whether the current row should be a new record or not. |

In the following code example, the **OrderID** textbox has been disabled by using the **isAdd** property.

```
// The disabled attributes will be added based on the isAdd property.
<input formControlName="OrderID" id="OrderID" name="OrderID" type="text" [attr.disabled]="!data.isAdd ? '' : null">

```

The following code example illustrates rendering the **OrderID** textbox, when a new record is added.

```

<div class="form-group col-md-6" *ngIf='data.isAdd'>
    <div class="e-float-input e-control-wrapper">
        <input formControlName="OrderID" id="OrderID" name="OrderID" type="text" [attr.disabled]="!data.isAdd ? '' : null">
        <span class="e-float-line"></span>
        <label class="e-float-text e-label-top" for="OrderID"> Order ID</label>
    </div>
</div>

```

## Set focus to editor

By default, the first input element in the dialog will be focused while opening the dialog. If the first input element is in disabled or hidden state then you need to focused the valid input element in the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event based on **requestType** as **beginEdit**.

```typescript

    actionComplete(args: DialogEditEventArgs) {
        // Set initial Focus
        if (args.requestType === 'beginEdit') {
            (args.form.elements.namedItem('CustomerID')as HTMLInputElement).focus();
        }
    }

```

## Disable form validation

If you have interested to use [`angular form validation`](https://angular.io/guide/form-validation) then you need to disable the default validation rules in  the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event.

```typescript

    actionComplete(args: DialogEditEventArgs) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Disable the Validation Rules
            args.form.ej2_instances[0].rules = {};
        }
    }

```

## Adding validation rules for custom editors

If you have interested to use our default form validation, the validation rules for the fields which are not present in the column model need to be add in  the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event.

```typescript

    actionComplete(args: DialogEditEventArgs) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            args.form.ej2_instances[0].addRules('Freight', {max: 500});
        }
    }

```

## Render tab component inside the dialog template

You can use [`Tab`](../../../tab/index.html) component inside dialog edit UI using dialog template feature. The dialog template feature can be enabled by defining  [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) as `Dialog` and [`editSettingsTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#template) as template variable to define the editors.

To include tab components in the Dialog, please ensure the following steps:

**Step 1**: To render the Tab component, use the [`editSettingsTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#template) of the Grid. Inside the content template of the tab items define the input elements.

```
<ejs-tab #tab id="tab_wizard" showCloseButton=false (selecting)='selecting($event)'>
    <e-tabitems>
        <e-tabitem [header]="{ 'text': 'Details' }" >
        <ng-template #content>
        <div id="tab1">
    <div class="form-row">
        <div class="form-group col-md-6">
            <div class="e-float-input e-control-wrapper" [ngClass]="{'e-error': OrderID.invalid && (OrderID.dirty || OrderID.touched)}">
                <input [(ngModel)]="data.OrderID" required id="OrderID" name="OrderID" type="text" [attr.disabled]="!data.isAdd ? '' : null" #OrderID="ngModel">
                <span class="e-float-line"></span>
                <label class="e-float-text e-label-top" for="OrderID"> Order ID</label>
            </div>
            <div id="OrderIDError" *ngIf='OrderID.invalid && (OrderID.dirty || OrderID.touched)'>
                <label class="e-error" for="OrderID" id="OrderID-info" style="display: block;">*Order ID is required</label>
            </div>
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <div class="e-float-input e-control-wrapper" [ngClass]="{'e-error': CustomerID.invalid && (CustomerID.dirty || CustomerID.touched)}">
                <input [(ngModel)]="data.CustomerID" required id="CustomerID" name="CustomerID" type="text" #CustomerID="ngModel">
                <span class="e-float-line"></span>
                <label class="e-float-text e-label-top" for="CustomerID">Customer Name</label>
            </div>
            <div id="CustomerIDError" *ngIf='CustomerID.invalid && (CustomerID.dirty || CustomerID.touched)'>
                <label class="e-error" for="CustomerID" id="CustomerID-info" style="display: block;">*Customer Name is required</label>
            </div>
        </div>
    </div>
    <button ejs-button type="button" cssClass="e-info e-btn" style="float: right" (click)="nextBtn($event)" >next</button>
</div>
        </ng-template></e-tabitem>
        <e-tabitem [header]="{ 'text': 'Verify' }">
        <ng-template #content>
            <div id="tab2" style='display: none'>
    <div class="form-row" >
        <div class="form-group col-md-6">
            <ejs-dropdownlist id="ShipCountry" name="ShipCountry" [(ngModel)]="data.ShipCountry" [dataSource]='shipCountryDistinctData' [fields]="{text: 'ShipCountry', value: 'ShipCountry' }" placeholder="Ship Country" popupHeight='300px' floatLabelType='Always'></ejs-dropdownlist>
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <ejs-checkbox #Verified name="Verified" id="Verified" label="Verified" [checked]="data.Verified" ></ejs-checkbox>
        </div>
    </div>
    <button ejs-button type="button" cssClass="e-info e-btn" style="float: right" (click)='submitBtn($event)'>submit</button>
</div>
        </ng-template>
        </e-tabitem>
    </e-tabitems>
</ejs-tab>
```

The following example, we have rendered tab control inside the edit dialog. The tab control has two tabs and once you fill the first tab and navigate to second one. The validation for first tab was done before navigate to second.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/tablikeedit-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="tablikeedit.html" %}
{% include code-snippet/grid/tablikeedit-cs1/src/tablikeedit.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/tablikeedit-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/tablikeedit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/tablikeedit-cs1" %}