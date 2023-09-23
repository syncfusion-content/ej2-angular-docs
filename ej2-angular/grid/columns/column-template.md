---
layout: post
title: Column template in Angular Grid component | Syncfusion
description: Learn here all about Column template in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column template 
documentation: ug
domainurl: ##DomainURL##
---

# Column template in Angular Grid component

Grid component provides a [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) option that allows you to display custom elements in a column instead of the field value. This can be useful when you need to display images, buttons, or other custom content within a column.

> When using template columns, they are primarily meant for rendering custom content and may not provide built-in support for grid actions like sorting, filtering, editing. It is must to define the `field` property of the column to perform any grid actions.

## Render image in a column

To render an image in a grid column, you need to define a [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) for the column using the template property. The `template` property expects an HTML string or a function that returns an HTML string.

The following example demonstrates how to define a [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) for the **Employee Image** field that displays an image element. The `template` property is set to an HTML string that contains an image tag. You have utilized the `src` and `alt` attributes to the image tag. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/template-cs1" %}

> The [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) option allows to define any HTML content within a column.

## Render hyperlink in a column

The Grid component provides support for rendering hyperlink columns and performing routing on click using the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) property. This feature is useful when displaying data that requires a link to another page or website.

The following example demonstrates, hot to render hyperlink column in the Grid using the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) property of the `e-column` tag. To define a `template` for the column,  you can use an `ng-template` with an `a` tag to create the hyperlink. The onClick function is triggered when the hyperlink is clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/template-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/template-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/template-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/template-cs5" %}

>The window.open() method is a built-in JavaScript function that opens a new browser window or tab with the specified URL.

## Render other components in a column

The column template has options to render a custom component in a grid column instead of a field value.

### Render LineChart component in a column

The [LineChart](https://ej2.syncfusion.com/angular/documentation/sparkline/getting-started) component of Syncfusion provides an elegant way to represent and compare data over time. It displays data points connected by straight line segments to visualize trends in data.

In the following example, we rendered the Sparkline Chart component in the Grid column by defining the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/template-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/template-cs8/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/template-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/template-cs8" %}

### Render ColorPicker component in a column

The [ColorPicker](https://ej2.syncfusion.com/angular/documentation/color-picker/getting-started) component of Syncfusion provides a user-friendly way to select colors from a pre-defined color palette or custom colors. It can be used in a variety of scenarios such as picking a theme color or changing the color of an element on a page.

In the following code, we rendered the ColorPicker component in the Grid column by defining the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) property.

```
<div>
    <input ejs-colorpicker #colorPicker id="color-picker" type="color" [mode]="modeSettings" (change)="change($event)"/>
</div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/template-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/template-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/template-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/template-cs6" %}

### Render DropDownList component in a column

To render a custom component in a grid column, you need to define a [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) for the column using the `template` property. In the following code, we rendered the [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) component in the **Order Status** column by defining the `template` property.

```
<div>
    <ejs-dropdownlist [value]='data.OrderStatus' width="100" [dataSource]='dropData' [popupHeight]='150' [popupWidth]='150' ></ejs-dropdownlist>
</div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/column-sync-comp-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/column-sync-comp-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/column-sync-comp-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/column-sync-comp-cs1" %}

### Render Chip component in a column

The Grid component provides support for rendering [Chips](https://ej2.syncfusion.com/angular/documentation/chips/getting-started) component in a column using the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) property. This feature is useful when displaying data that requires a chip component to be rendered in a column.

In the following code, we rendered the Chips component in the Grid **First Name** column by defining the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) property.

```
<div>
    <ejs-chiplist id="chip" [text]="data.FirstName"></ejs-chiplist>
</div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/template-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/template-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/template-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/template-cs7" %}

## Using condition template

The conditional column [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) allows you to display template elements based on specific conditions.

The following example demonstrates how to use the `template` property with an `ng-template` element and add an `*ngIf` directive to render the checkbox based on the value of the **Discontinued** field. The **Discontinued** field will render a checkbox in each row for which the value of the **Discontinued** field is **true**. 

```
<e-column headerText='Discontinued' width='150' textAlign='Center'>
    <ng-template #template let-data>
        <div *ngIf="data.Discontinued; else elseblock">
            <input type="checkbox" checked>
        </div>
    </ng-template>
    <ng-template #elseblock><input type="checkbox">
    </ng-template>
</e-column>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/condition-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/condition-template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/condition-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/condition-template-cs1" %}

>You can use any template element or custom component instead of the checkbox in the conditional template based on your requirement.

## How to get the row object by clicking on the template element

The Grid component allows you to retrieve the row object of the selected record when clicking on a [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) element. This feature can be useful when you need to perform custom actions based on the selected record.

In the following code, the button element is rendered in the **Employee Data** column and `click` event binding is used to call the showDetails method when the template element is clicked. The showDetails method is passed the data object as an argument, which allows you to access the selected row object and display it in the dialog popup.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/template-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/template-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/template-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/template-cs2" %}

## Use custom helper inside the template

The Syncfusion Grid allows you to use custom helpers inside the `ng-template` directive of a column. This feature allows you to create complex templates that can incorporate additional helper functions that are not available through the default [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) syntax.

To use the custom helper function inside a column template, you must first add the function to the template's context. This can be done by using the let keyword to create a new variable that references the function.

The following example demonstrates how to use a custom helper function inside the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) property, using an `ng-template` element for the Freight column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-helper-template/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-helper-template/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-helper-template/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-helper-template" %}

> Custom helpers can only be used inside the ng-template directive of a column.
