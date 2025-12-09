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

The Syncfusion Angular Grid component provides a [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) property that enables rendering custom elements in a column instead of the default field value. This feature is ideal for displaying images, buttons, hyperlinks, or other custom content within a column.

> Template columns are designed for rendering custom content and do not support grid actions such as sorting, filtering, or editing unless the `field` property is defined to reference a valid data source field.

## Render image in a column

To display an image in a grid column, the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) property is used to define custom HTML content. The `template` property expects the HTML element or a function that returns the HTML element.

The following example demonstrates how to define a [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) for the **Employee Image** field that displays an image element. The `template` property is set to the HTML element that contains an image tag. You have utilized the `src` and `alt` attributes to an image tag. 

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
                        <e-column field='FirstName' headerText='First Name' width=100></e-column>
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

> The [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) property supports any valid HTML content within a column. Ensure the `alt` attribute is descriptive for screen reader accessibility.

## Render hyperlink in a column

The Syncfusion Angular Grid supports rendering hyperlinks in a column using the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) property. This feature enables linking to external pages or triggering custom navigation logic.

The following example demonstrates rendering a hyperlink in the **FirstName** column using the `ng-template` directive with an `<a>` tag. Clicking the hyperlink triggers the `onClick` function to open a search URL.

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
                        <e-column field='FirstName' headerText='First Name' width=150>
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

> The `window.open()` method is a built-in JavaScript function that opens a new browser window or tab with the specified URL.

## Render other components in a column

The Syncfusion Angular Grid supports rendering custom components in a column using the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) property. This allows integration of Syncfusion components like LineChart, ColorPicker, or DropDownList within a grid column.

> To support grid actions like editing with custom components, configure the `editSettings` property (e.g., `{ allowEditing: true, mode: 'Normal' }`). Refer to the [editSettings documentation](https://ej2.syncfusion.com/angular/documentation/api/grid#editsettings) for details.

### Render LineChart component in a column

The Syncfusion [LineChart](https://ej2.syncfusion.com/angular/documentation/sparkline/getting-started) component visualizes data trends using straight line segments. It can be rendered in a grid column to display data patterns.

In the following example, the Sparkline Chart component is rendered within a Grid column by defining the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeData } from './datasource';
import { Sparkline } from '@syncfusion/ej2-angular-charts';
import { GridComponent } from '@syncfusion/ej2-angular-grids'

@Component({
  selector: 'app-root',
  template: `
    <ejs-grid #grid [dataSource]='data' height='315px' (created)="renderGridSparkline()">
      <e-columns>
        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=90></e-column>
        <e-column field='FirstName' headerText='First Name' width=150></e-column>
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
      const length = (this.grid as GridComponent).getDataRows().length
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

The Syncfusion [ColorPicker](https://ej2.syncfusion.com/angular/documentation/color-picker/getting-started) component provides access to a predefined palette and custom color selection, making it suitable for scenarios such as theme customization.

The following example demonstrates rendering the ColorPicker component in a Grid column using the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) property.

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

The Syncfusion [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) component can be rendered in a grid column to provide selectable options, such as order statuses.

The following example demonstrates rendering the DropDownList component in the **Order Status** column using the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) property.

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

The Syncfusion [Chips](https://ej2.syncfusion.com/angular/documentation/chips/getting-started) component can be rendered in a grid column to display data visually, such as tags or labels.

The following example demonstrates rendering the Chips component in the **First Name** column using the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) property.

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

The Syncfusion Grid component supports rendering the [Progress Bar](https://ej2.syncfusion.com/angular/documentation/progressbar/getting-started) component within a column using the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) property. Displaying the `ProgressBar` component within a Grid column provides a visual representation of task or operation progress associated with individual records. This feature is beneficial for scenarios involving data loading, task completion, or other progressive activities.

The following example demonstrates rendering the ProgressBar component in the **Freight** column using the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) property.

```
<div>
    <ejs-progressbar [id]='data.OrderID' type='Linear' height='60' 
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

The Syncfusion [RadioButton](https://ej2.syncfusion.com/angular/documentation/radio-button/getting-started) component can be rendered in a grid column to display selection options, such as order statuses or approval choices.

The following example demonstrates rendering RadioButton components in the **Order Status** column using the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) property.

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

## Using conditional template

The [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) property supports conditional rendering using Angular directives like `*ngIf`. This allows displaying different template elements based on data conditions. Complex conditional logic may impact rendering performance, so minimize DOM manipulation where possible.

The following example demonstrates using `*ngIf` within the `ng-template` directive to render a checkbox in the **Discontinued** column only when the `Discontinued` field is `true`.

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

> Any template element or custom component can be used in a conditional template based on application requirements.

## How to get the row object by clicking on the template element

The Syncfusion Angular Grid allows retrieving the row object of a selected record when clicking a [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) element. This is useful for performing custom actions based on the selected record.

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

The Syncfusion Grid allows you to use custom helpers inside the `ng-template` directive of a column. This feature allows you to create complex templates that can incorporate additional helper functions that are not available through the default [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) syntax.

To use the custom helper function inside a column template, you must first add the function to the template's context.

The following example demonstrates how to use a custom helper function inside the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) property, using the `ng-template` element for the Freight column.

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

> Custom TypeScript functions can only be used within the `ng-template` directive of a column.

## Dynamically adding template column

The Syncfusion Grid supports the dynamic addition of template columns at runtime, allowing flexible modifications based on interaction events or application logic.

Dynamically adding template columns involves creating and inserting columns with custom templates after the grid has been initialized. This approach provides flexibility in presenting data in a highly customizable manner.

The following example demonstrates adding a **ShipCountry** column with a [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) component using an external button click. The column includes a [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column#headertemplate) to display an icon.

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

By default, the Syncfusion Angular Grid adds custom `aria-label` attributes to template cells, combining the cell value, an "is template cell" identifier, and the column header name to enhance accessibility for screen readers. If accessibility is not required and multiple template columns are used, disabling `aria-label` attributes can improve rendering performance. This can be achieved by setting the appropriate configuration, if supported by the Grid component.

If your application doesn’t require screen reader support and includes multiple template columns, Aria labels may impact performance. To improve rendering, you can disable them for all template columns by setting the `enableAriaLabel` property to **false** in the `templateOptions` of those columns. If accessibility is needed, set it to **true** to retain Aria labels.

The example below enables Aria labels for the **Employee Image** column and disables them for the **First Name** column in the Syncfusion Angular Grid.

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
                        <e-column field='FirstName' headerText='First Name' templateOptions="nameTemplateOptions" width=100>
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

> When using template columns, test the rendering across different screen sizes and devices to ensure responsiveness, especially for complex components like DropDownList or LineChart.