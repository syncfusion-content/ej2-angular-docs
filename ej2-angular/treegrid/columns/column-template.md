---
layout: post
title: Column template in Angular TreeGrid component | Syncfusion
description: Learn here all about Column template in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column template 
documentation: ug
domainurl: ##DomainURL##
---

# Column template in Angular TreeGrid component

TreeGrid component provides a [template](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#template) option that allows you to display custom elements in a column instead of the field value. This can be useful when you need to display images, buttons, or other custom content within a column.

> When using template columns, they are primarily meant for rendering custom content and may not provide built-in support for tree grid actions like sorting, filtering, editing unless `field` property of the column is specified.

## Render image in a column

To render an image in a tree grid column, you need to define a template for the column using the [template](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#template) property. The `template` property expects the HTML element or a function that returns the HTML element.

The following example demonstrates how to define a [template](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#template) for the **Employee Name** field that displays an image element. The `template` property is set to the HTML element that contains an image tag.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit } from '@angular/core';
import { textdata } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height=291 width='auto' childMapping= 'Children' >
                    <e-columns>
                        <e-column field = 'EmpID' headerText = 'Employee ID' width = '180'></e-column>
                        <e-column headerText = 'Employee Name' width = '150'>
                            <ng-template #template let-data>
                                  <div style="position:relative;display:inline-block;">
                                    <img src="{{data.FullName}}.png" alt="{{data.FullName}}" />
                                  </div>
                            </ng-template>
                        </e-column>
                        <e-column field = 'Designation' headerText = 'Designation' width = '150'></e-column>
                        <e-column field = 'Address' headerText = 'Employee Details' width = '350'></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = textdata;
    }
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/template-cs1" %}

> The [template](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#template) option allows to define any HTML content within a column.

## Render hyperlink in a column

The TreeGrid component provides support for rendering hyperlink columns and performing routing on click using the [template](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#template) property. This feature is useful when displaying data that requires a link to another page or website.

The following example demonstrates, how to render hyperlink column in the tree grid using the [template](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#template) property of the `e-column` tag. To define a `template` for the column,  you can use the `ng-template` with the `a` tag to create the hyperlink. The onClick function is triggered when the hyperlink is clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit } from '@angular/core';
import { textdata } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height=291 width='auto' childMapping= 'Children' >
                    <e-columns>
                        <e-column field = 'EmpID' headerText = 'Employee ID' width = '180'></e-column>
                        <e-column headerText = 'Employee Name' width = '150'>
                             <ng-template #template let-data>
                                 <div>
                                    <a href="#" (click)="onClick($event, data.FirstName)">
                                     {{data.FirstName}}
                                    </a>
                                 </div>
                              </ng-template>
                        </e-column>
                        <e-column field = 'Designation' headerText = 'Designation' width = '150'></e-column>
                        <e-column field = 'Address' headerText = 'Employee Details' width = '350'></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = textdata;
    }
    
    onClick(event:MouseEvent, firstName: string) {
        var url = 'https://www.meaningofthename.com/';
        var searchUrl = url + firstName; 
        window.open(searchUrl);
    }
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/template-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/template-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/template-cs2" %}

>The window.open() method is a built-in JavaScript function that opens a new browser window or tab with the specified URL.

## Render other components in a column

The column template has options to render a custom component in a tree grid column instead of a field value.

### Render ColorPicker component in a column

The [ColorPicker](https://ej2.syncfusion.com/angular/documentation/color-picker/getting-started) component of Syncfusion provides a user-friendly way to select colors from a pre-defined color palette or custom colors. It can be used in a variety of scenarios such as picking a theme color or changing the color of an element on a page.

In the following code, we rendered the ColorPicker component in the tree grid column by defining the [template](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#template) property.

```
<div>
    <input ejs-colorpicker #colorPicker id="color-picker" type="color" [mode]="modeSettings" (change)="change($event)"/>
</div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/template-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/template-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/template-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/template-cs4" %}

### Render DropDownList component in a column

To render a custom component in a tree grid column, you need to define a template for the column using the [template](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#template) property. In the following code, we rendered the [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) component in the **Country** column by defining the `template` property.

```
<div>
    <ejs-dropdownlist [value]='data.Country' width="100" [dataSource]='dropData' [popupHeight]='150' [popupWidth]='150' ></ejs-dropdownlist>
</div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/template-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/template-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/template-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/template-cs5" %}

### Render Chip component in a column

The TreeGrid component provides support for rendering [Chips](https://ej2.syncfusion.com/angular/documentation/chips/getting-started) component in a column using the [template](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#template) property. This feature is useful when displaying data that requires a chip component to be rendered in a column.

In the following code, we rendered the Chips component in the Tree Grid **First Name** column by defining the [template](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#template) property.

```
<div>
    <ejs-chiplist id="chip" [text]="data.Name"></ejs-chiplist>
</div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/template-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/template-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/template-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/template-cs6" %}

### Render LineChart component in a column

The [LineChart](https://ej2.syncfusion.com/angular/documentation/sparkline/getting-started) component of Syncfusion provides an elegant way to represent and compare data over time. It displays data points connected by straight line segments to visualize trends in data.

In the following example, we rendered the Sparkline Chart component in the tree grid column by defining the [template](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#template) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/template-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/template-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/template-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/template-cs3" %}

## Using condition template

The conditional column [template](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#template) allows you to display template elements based on specific conditions.

The following example demonstrates how to use the `template` property with the `ng-template` element and add `*ngIf` directive to render the checkbox based on the value of the **approved** field. The **approved** field will render a checkbox in each row for which the value of the **approved** field is **true**. 

```
<e-column headerText='Approved' width='150' textAlign='Center'>
             <ng-template #template let-data>
                  <div *ngIf="data.approved; else elseblock">
                      <input type="checkbox" checked>
                  </div>
              </ng-template>
              <ng-template #elseblock><input type="checkbox"></ng-template>
        </e-column>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/template-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/template-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/template-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/template-cs7" %}

>You can use any template element or custom component instead of the checkbox in the conditional template based on your requirement.

## How to get the row object by clicking on the template element

The TreeGrid component allows you to retrieve the row object of the selected record when clicking on a [template](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#template) element. This feature can be useful when you need to perform custom actions based on the selected record.

In the following code, the button element is rendered in the **Employee Data** column and `click` event binding is used to call the showDetails method when the template element is clicked. The showDetails method is passed with the data object as an argument from the template variable, which allows you to access the selected row object and display it in the dialog popup.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/template-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/template-cs8/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/template-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/template-cs8" %}

## Use custom helper inside the template

The Syncfusion Tree Grid allows you to use custom helpers inside the `ng-template` directive of a column. This feature allows you to create complex templates that can incorporate additional helper functions that are not available through the default [template](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#template) syntax.

To use the custom helper function inside a column template, you must first add the function to the template's context. This can be done by using the let keyword to create a new variable that references the function.

The following example demonstrates how to use a custom helper function inside the [template](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#template) property, using the `ng-template` element for the Freight column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80>
                            <ng-template #template let-data>
                                {{ formatCurrency(data.duration) }}
                            </ng-template>
                        </e-column>
                    </e-columns>
            </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public formatCurrency(value: number): string {
        return '₹ ' + value.toFixed(3);
    }
    ngOnInit(): void {
        this.data = sampleData;
    }
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/template-cs9/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/template-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/template-cs9" %}

> Custom helpers can only be used inside the ng-template directive of a column.