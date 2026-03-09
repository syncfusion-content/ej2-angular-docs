---
layout: post
title: Angular Grid - Column Template | Syncfusion
description: Angular Grid column template supports creating custom cell content, editors, and formatting to render complex UI elements within grid columns.
platform: ej2-angular
control: Column template
documentation: ug
domainurl: ##DomainURL##
---

# Column Template in Angular Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component provides a [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) property that enables rendering custom elements in a column instead of the default field value. This feature is ideal for displaying images, buttons, hyperlinks, or other custom content within a column.

> When using template columns, they are primarily meant for rendering custom content and may not provide built-in support for grid actions like sorting, filtering, or editing. It is essential to define the `field` property of the column to perform any grid actions.

## Render image in a column

To render an image in a grid column, define a template for the column using the `template` property. The `template` property accepts either an HTML element or a function that returns an HTML element. When using a function-based template, the Grid passes the current row's data as the "props" parameter. This allows accessing field values from the data source directly within the template (e.g., "props.EmployeeID", "props.ImageURL").

The following example demonstrates defining a `template` for the "Employee Image" field that displays an image element. The `template` property is set to a function that returns an HTML element containing an image tag with "src" and "alt" attributes.

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
                                     <img src="https://ej2.syncfusion.com/angular/demos/assets/grid/images/{{data.EmployeeID}}.png" alt="{{data.EmployeeID}}"/>
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

The Grid component provides support for rendering hyperlink columns and performing navigation on click using the `template` property. This feature is useful when displaying data that requires a link to another page or website. The template function receives the row data as "props", allowing access to field values. In the template, attach event handlers (for example, `onClick`) to trigger custom logic when the element is clicked. The event handler receives the click event and any additional parameters passed to it.

The following example shows a hyperlink column in the Grid where the "hyperLinkTemplate" function returns an anchor tag that calls the `onClick` handler when clicked, opening a URL in a new window.

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

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid supports rendering custom components in a column using the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) property. This allows integration of Syncfusion components like LineChart, ColorPicker, or DropDownList within a grid column.

> To support grid actions like editing with custom components, configure the `editSettings` property (e.g., `{ allowEditing: true, mode: 'Normal' }`). Refer to the [editSettings documentation](https://ej2.syncfusion.com/angular/documentation/api/grid#editsettings) for details.

### Render LineChart component in a column

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular [LineChart](https://ej2.syncfusion.com/angular/documentation/sparkline/getting-started) component is a lightweight sparkline chart used to display data trends. It connects data points with straight line segments to show patterns over time, without axes or labels. To render a sparkline within a template, define a template function that returns the Sparkline component. The chart requires a dataSource array of numeric values, and each grid row will display its own sparkline visualization.

The following example shows a Sparkline in the Grid column. The "lineData" array contains arrays of numbers (one per row), and the template function retrieves the appropriate data array for each row and passes it to the SparklineComponent.

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

The Syncfusion<sup style="font-size:70%">&reg;</sup> [ColorPicker](https://ej2.syncfusion.com/angular/documentation/color-picker/getting-started) component provides an intuitive method to select colors from a predefined color palette or custom colors. This component is suitable for scenarios such as picking a theme color or changing element colors on a page.

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

The Grid component provides support for rendering [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) component in a column using the `template` property. This feature is useful when displaying data that requires selection from predefined options in a column.

The following example shows the DropDownList component in the Grid "Order Status" column.

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

The Grid component provides support for rendering [Chips](https://ej2.syncfusion.com/angular/documentation/chips/getting-started) component in a column using the `template` property. This feature is useful when displaying data that requires a chip component to be rendered in a column.

The following example shows the Chips component in the Grid "First Name" column.

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

The Grid component supports rendering the [Progress Bar](https://ej2.syncfusion.com/angular/documentation/progressbar/getting-started) component within a column using the `template` property. The Progress Bar component in a grid column visually tracks the progress of tasks or operations associated with specific records. This feature is useful for applications involving processes such as data loading, task completion, or other progressive activities.

The following example shows the Progress Bar component in the Grid "Freight" column.

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

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid supports rendering the [RadioButton](https://ej2.syncfusion.com/angular/documentation/radio-button/getting-started) within a column using the `template` property. This feature is useful for displaying selection options, such as order statuses, payment methods, or approval choices, within the Grid.

The following example demonstrates rendering a RadioButton in the "Order Status" column of the Grid by defining the `template` property.

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

The [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) property supports conditional rendering using Angular directives like `*ngIf`. This allows displaying different template elements based on data conditions. Complex conditional logic may impact rendering performance, so minimize DOM  manipulation where possible.

The following example demonstrates rendering a checkbox conditionally based on the "Discontinued" field value. The template uses a ternary operator to check if "props.Discontinued" is `true`. If `true`, it renders a checked checkbox; otherwise, it renders an unchecked checkbox. 

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

## Getting the row object by clicking on the template element

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid allows retrieving the row object of a selected record when clicking a [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) element. This is useful for performing custom actions based on the selected record.

The following example demonstrates a button element rendered in the "Employee Data" column with an `onClick` event handler that calls the "showDetails" method. The method receives the complete row data object as a parameter, which provides access to all field values for that record and enables displaying the information in a dialog popup.

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

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid supports the use of custom helpers within the `ng-template` directive of a column. This capability enables the creation of complex templates that incorporate additional helper functions beyond those available through the default [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) syntax.

To use a custom helper function inside a column template, the function must first be added to the template's context.

The following example demonstrates using a custom helper function inside the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) property, using the `ng-template` element for the Freight column.

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

> Custom helpers can only be used inside the `ng-template` method of a column.

## Dynamically adding template column

The Grid component supports dynamically adding template columns at runtime. This allows modifying the grid structure after initialization based on UI interactions or other dynamic conditions (for example, adding a new column when a button is clicked). Dynamically adding columns involves creating a new `ColumnDirective` with a `template` and inserting it into the grid's column collection.


The following example demonstrates adding a template column using an external button click. When the button is clicked, a new "Ship Country" column with a Dropdownlist template is added to the grid at runtime. The column uses both the `template` property for the cell content and the [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column#headertemplate) property to customize the column header.

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

By default, the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid automatically adds custom "aria-label" attributes to template cells. These attributes combine the cell value, the identifier "is template cell", and the column header name. Aria labels are accessibility features that help screen readers understand the content and purpose of cells.

However, in applications with many template columns, these labels can slightly impact rendering performance. To improve performance, disable aria labels for non-critical template columns by setting the `enableAriaLabel` property to `false` in the `templateOptions` of those columns. If accessibility support is required, set it to `true` to retain aria labels.

The following example enables Aria labels for the "Employee Image" column and disables them for the "First Name" column in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid.

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
imports: [ChipListModule,GridModule],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='315px'>
                    <e-columns>
                        <e-column headerText='Employee Image' width='150' templateOptions="imageTemplateOptions" textAlign='Center'>
                            <ng-template #template let-data>
                                <div class="image">
                                     <img src="https://ej2.syncfusion.com/angular/demos/assets/grid/images/{{data.EmployeeID}}.png" alt="{{data.EmployeeID}}"/>
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