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

To render an image in a grid column, you need to define a [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) for the column using the template property. The `template` property expects the HTML element or a function that returns the HTML element.

The following example demonstrates how to define a [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) for the **Employee Image** field that displays an image element. The `template` property is set to the HTML element that contains an image tag. You have utilized the `src` and `alt` attributes to an image tag. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit } from '@angular/core';
import { employeeData } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='315px'>
                    <e-columns>
                        <e-column headerText='Employee Image' width='150' textAlign='Center'>
                            <ng-template #template let-data>
                                <div class="image">
                                    <img src="{{data.EmployeeID}}.png" alt="{{data.EmployeeID}}"/>
                                </div>
                            </ng-template>
                        </e-column>
                        <e-column field='FirstName' headerText='FirstName' width=100></e-column>
                        <e-column field='LastName' headerText='Last Name' width=100></e-column>
                        <e-column field='City' headerText='City' width=100></e-column>
                    </e-columns>
                </ejs-grid>`,
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = employeeData;
    }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/template-cs1" %}

> The [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) option allows to define any HTML content within a column.

## Render hyperlink in a column

The Grid component provides support for rendering hyperlink columns and performing routing on click using the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) property. This feature is useful when displaying data that requires a link to another page or website.

The following example demonstrates, how to render hyperlink column in the Grid using the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) property of the `e-column` tag. To define a `template` for the column,  you can use the `ng-template` with the `a` tag to create the hyperlink. The onClick function is triggered when the hyperlink is clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit } from '@angular/core';
import { employeeData } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='315px'>
                    <e-columns>
                        <e-column field='EmployeeID' headerText='Employee ID' width=90></e-column>
                        <e-column field='LastName' headerText='Last Name' width=150></e-column>
                        <e-column field='FirstName' headerText='FirstName' width=150>
                            <ng-template #template let-data>
                                <div>
                                    <a href="#" (click)="onClick($event, data.FirstName)">
                                    {{data.FirstName}}
                                    </a>
                                </div>
                            </ng-template>
                        </e-column>
                    </e-columns>
                </ejs-grid>`,
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = employeeData;
    }

    onClick(event:MouseEvent, firstName: string) {
        var url = 'https://www.google.com/search?q=';
        var searchUrl = url + firstName; 
        window.open(searchUrl);
    }
}
{% endraw %}
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

The [LineChart](https://ej2.syncfusion.com/angular/documentation/sparkline/getting-started) component of Syncfusion<sup style="font-size:70%">&reg;</sup> provides an elegant way to represent and compare data over time. It displays data points connected by straight line segments to visualize trends in data.

In the following example, we rendered the Sparkline Chart component in the Grid column by defining the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeData } from './datasource';
import { Sparkline } from '@syncfusion/ej2-angular-charts';
import { GridComponent,} from '@syncfusion/ej2-angular-grids'

@Component({
  selector: 'app-root',
  template: `
    <ejs-grid #grid [dataSource]='data' height='315px' (created)="renderGridSparkline()">
      <e-columns>
        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=90></e-column>
        <e-column field='FirstName' headerText='FirstName' width=150></e-column>
        <e-column headerText='Employee Performance Rating' width='280'>
          <ng-template #template let-griddata>
            <div id="spkline{{griddata.EmployeeID}}"></div>
          </ng-template>
        </e-column>
      </e-columns>
    </ejs-grid>`,
})
export class AppComponent implements OnInit {

  public data?: object[] = employeeData;
  @ViewChild('grid')
  grid?: GridComponent;

  public lineData: object[] = [
    [0, 6, -4, 1, -3, 2, 5],
    [5, -4, 6, 3, -1, 2, 0],
    [6, 4, 0, 3, -2, 5, 1],
    [4, -6, 3, 0, 1, -2, 5],
    [3, 5, -6, -4, 0, 1, 2],
    [1, -3, 4, -2, 5, 0, 6],
    [2, 4, 0, -3, 5, -6, 1],
    [5, 4, -6, 3, 1, -2, 0],
    [0, -6, 4, 1, -3, 2, 5],
    [6, 4, 0, -3, 2, -5, 1],
  ];

  ngOnInit(): void {
  }

  public getSparkData(type: string, count: number) {
    return this.lineData[count] as number[];
  }

  public renderGridSparkline(): void {
    setTimeout(() => {
      const length =(this.grid as GridComponent).getDataRows().length
      for (let i: number = 1; i <= length; i++) {
        let line: Sparkline = new Sparkline({
          height: '50px',
          width: '90%',
          lineWidth: 2,
          valueType: 'Numeric',
          fill: '#3C78EF',
          dataSource: this.getSparkData('line', i)
        });
        line.appendTo('#spkline' + i);
      }
    }, 100)
  }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/template-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/template-cs8" %}

### Render ColorPicker component in a column

The [ColorPicker](https://ej2.syncfusion.com/angular/documentation/color-picker/getting-started) component of Syncfusion<sup style="font-size:70%">&reg;</sup> provides a user-friendly way to select colors from a pre-defined color palette or custom colors. It can be used in a variety of scenarios such as picking a theme color or changing the color of an element on a page.

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

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/template-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/template-cs7" %}

### Render ProgressBar component in a column

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component supports rendering the [Progress Bar](https://ej2.syncfusion.com/angular/documentation/progressbar/getting-started) component within a column using the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) property. Displaying the `Progress Bar` component in a grid column allows users to visually track the progress of tasks or operations associated with specific records. This feature is particularly useful for applications involving processes such as data loading, task completion, or other progressive activities.

In the following code, the `Progress Bar` component render in the Grid **Freight** column by defining the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) property.

```
<div>
    <ejs-progressbar id='data.OrderID' type='Linear' height='60' 
    [value]='data.Freight' trackThickness=24 progressThickness='20'>
    </ejs-progressbar>
</div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/template-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/template-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/template-cs9" %}

### Render RadioButton in a column 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid supports rendering the [RadioButton](https://ej2.syncfusion.com/angular/documentation/radio-button/getting-started) within a column using the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) property. This feature is particularly useful for displaying selection options, such as order statuses, payment methods, or approval choices, within the Grid.

In the following example, a `RadioButton` is rendered in the **Order Status** column of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid by defining the `template` property.

```
    <div style="display: flex; flex-direction: column; align-items: start; gap: 8px;">
        <ejs-radiobutton label="Pending" name="radio-{{data.OrderID}}" cssClass="e-success" [checked]="data.OrderStatus === 'Pending'"></ejs-radiobutton>
        <ejs-radiobutton label="Confirmed" name="radio-{{data.OrderID}}" cssClass="e-success" [checked]="data.OrderStatus === 'Confirmed'"></ejs-radiobutton>
        <ejs-radiobutton label="Shipped" name="radio-{{data.OrderID}}" cssClass="e-success" [checked]="data.OrderStatus === 'Shipped'"></ejs-radiobutton>
    </div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/template-radiobutton/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/template-radiobutton/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/template-radiobutton" %}

## Using condition template

The conditional column [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) allows you to display template elements based on specific conditions.

The following example demonstrates how to use the `template` property with the `ng-template` element and add `*ngIf` directive to render the checkbox based on the value of the **Discontinued** field. The **Discontinued** field will render a checkbox in each row for which the value of the **Discontinued** field is **true**. 

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
{% raw %}
import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeData, SelectedRecordDataType } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
    selector: 'app-root',
    template: `
    <ejs-grid #grid [dataSource]='data' height='315px'>
        <e-columns>
            <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=130></e-column>
            <e-column field='FirstName' headerText='Name' width=120></e-column>
            <e-column headerText='Employee Data' width='150' textAlign='Right' isPrimaryKey='true'>
                <ng-template #template let-data>
                    <button class="empData" (click)="showDetails(data)">View</button>
                    <div [hidden]="!selectedRecord || selectedRecord !== data">
                        <ejs-dialog
                            #Dialog
                            [visible]="false"
                            width="50%"
                            showCloseIcon="true"
                            [header]="header"
                        >
                            <p><b>EmployeeID:</b> {{ selectedRecord?.EmployeeID }}</p>
                            <p><b>FirstName:</b> {{ selectedRecord?.FirstName }}</p>
                            <p><b>LastName:</b> {{ selectedRecord?.LastName }}</p>
                        </ejs-dialog>
                    </div>
                </ng-template>
            </e-column>
        </e-columns>
    </ejs-grid>`,
})
export class AppComponent implements OnInit {

    public data?: object[];
    public header?: string;
    @ViewChild('grid')
    public grid?: GridComponent;
    @ViewChild('Dialog')
    public dialog?: DialogComponent;
    public selectedRecord?: SelectedRecordDataType;

    ngOnInit(): void {
        this.data = employeeData;
        this.header = 'Selected Row Details';
    }
    showDetails(data: SelectedRecordDataType) {
        (this.dialog as DialogComponent).visible = true;
        this.selectedRecord = data;
    }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/template-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/template-cs2" %}

## Use custom helper inside the template

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows you to use custom helpers inside the `ng-template` directive of a column. This feature allows you to create complex templates that can incorporate additional helper functions that are not available through the default [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) syntax.

To use the custom helper function inside a column template, you must first add the function to the template's context.

The following example demonstrates how to use a custom helper function inside the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) property, using the `ng-template` element for the Freight column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='300'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90>
                        <ng-template #template let-data>
                            {{ formatCurrency(data.Freight) }}
                        </ng-template>
                        </e-column>
                        <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];

    public formatCurrency(value: number): string {
        return '₹ ' + value.toFixed(3);
    }

    ngOnInit(): void {
        this.data = data;
    }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-helper-template/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-helper-template" %}

> Custom helpers can only be used inside the ng-template directive of a column.

## Dynamically adding template column

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component allows you to dynamically add template columns at runtime. This capability is particularly useful when the structure of the grid needs to be modified based on individual interactions or other dynamic conditions.

Dynamically adding template columns involves creating and inserting columns with custom templates after the grid has been initialized. This approach provides flexibility in presenting data in a highly customizable manner.

The following example demonstrates how to add template column using external button click. In this example, the **ShipCountry** column with a [Dropdownlist](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) is added in column [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template), and an icon is displayed using the [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#headertemplate) for the **ShipCountry** column. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/template-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/template-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/template-cs10" %}

## Enhancing Grid performance by enabling or disabling Aria Labels

By default, the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid adds custom **aria-label** attributes to template cells by combining the cell value, the "**is template cell**" identifier, and the column header name. These attributes help screen readers provide meaningful context.

If your application doesn’t require screen reader support and includes multiple template columns, Aria labels may impact performance. To improve rendering, you can disable them for all template columns by setting the `enableAriaLabel` property to **false** in the `templateOptions` of those columns. If accessibility is needed, set it to **true** to retain Aria labels.

The example below enables Aria labels for the **Employee Image** column and disables them for the **First Name** column in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { ChipListModule } from '@syncfusion/ej2-angular-buttons'
import { Component, OnInit } from '@angular/core';
import { employeeData } from './datasource';

@Component({
imports: [
    ChipListModule,
    GridModule
],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='315px'>
                    <e-columns>
                        <e-column headerText='Employee Image' width='150' templateOptions="imageTemplateOptions" textAlign='Center'>
                            <ng-template #template let-data>
                                <div class="image">
                                    <img src="{{data.EmployeeID}}.png" alt="{{data.EmployeeID}}"/>
                                </div>
                            </ng-template>
                        </e-column>
                        <e-column field='FirstName' headerText='FirstName' templateOptions="nameTemplateOptions" width=100>
                            <ng-template #template let-data>
                                <div class="chip">
                                    <ejs-chiplist id="chip" [text]="data.FirstName"></ejs-chiplist>
                                </div>
                            </ng-template>
                        </e-column>
                        <e-column field='LastName' headerText='Last Name' width=100></e-column>
                        <e-column field='City' headerText='City' width=100></e-column>
                    </e-columns>
                </ejs-grid>`,
})
export class AppComponent implements OnInit {

    public data?: object[];
    public imageTemplateOptions: object;
    public nameTemplateOptions: object;
    ngOnInit(): void {
        this.data = employeeData;
        this.imageTemplateOptions = { enableAriaLabel: true };
        this.nameTemplateOptions = { enableAriaLabel: false };
    }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/template-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/template-cs11" %}