---
layout: post
title: Row template in Angular Grid component | Syncfusion
description: Learn here all about Row template in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row template 
documentation: ug
domainurl: ##DomainURL##
---

# Row template in Angular Grid component

The row template feature in Grid allows you to customize the appearance and layout of rows in the grid. This feature is useful when you want to display custom content, such as images, buttons, or other controls, within the rows.

To enable the row template feature, you need to set the [rowTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowtemplate) property of the Grid component. This property accepts a custom HTML template that defines the layout for each row. 

In the following example, Employee Information with Employee Photo is presented in the first column and employee details like Name, Address, etc., are presented in the second column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-cell-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.html" %}
{% raw %}
<ejs-grid #grid [dataSource]="data" height="335" width="auto">
    <e-columns>
      <e-column headerText="Employee Image" width="150" textAlign="Center"></e-column>
      <e-column headerText="Employee Details" width="300" textAlign="Center"></e-column>
    </e-columns>
    <ng-template #rowTemplate let-data>
      <tr>
        <td class="rowphoto">
          <img src="{{ data.EmployeeID }}.png" alt="{{ data.EmployeeID }}" />
        </td>
        <td class="details">
          <table class="CardTable">
            <colgroup>
              <col width="30%">
              <col width="10%">
            </colgroup>
            <tbody>
              <tr>
                <td class="CardHeader">First Name</td>
                <span>:</span>
                <td class="CardData">{{ data.FirstName }}</td>
              </tr>
              <tr>
                <td class="CardHeader">Last Name</td>
                <span>:</span>
                <td>{{ data.LastName }}</td>
              </tr>
              <tr>
                <td class="CardHeader">Title</td>
                <span>:</span>
                <td>{{ data.Title }}</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </ng-template>
  </ejs-grid>
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-cell-cs9" %}

## Row template with formatting

The row template feature in Syncfusion Grid allows you to customize the layout of rows in the grid. This is useful when you want to display images, buttons, or other custom content within the rows of a grid.

By default, Syncfusion Grid provides the [columns.format](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format) property to format the values displayed in each column. However, when using the [rowtemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowtemplate), the `columns.format` property cannot be directly applied to format the values inside the template.

To format the values within the row template, you can define a global function that handles the formatting logic. This function can be invoked inside the template to format the corresponding values.

Here is an example of how to define a global formatting function for a date column and use it inside a `rowTemplate`:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { DetailRowService } from '@syncfusion/ej2-angular-grids'
import { Component, OnInit } from '@angular/core';
import { employeeData } from './datasource';
import { Internationalization } from '@syncfusion/ej2-base';

const instance: Internationalization = new Internationalization();

@Component({
imports: [
        
        GridModule        
    ],

providers: [DetailRowService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height=335 width='auto'>
        <e-columns>
            <e-column headerText='Employee Image' width='150' textAlign='Center'></e-column>
            <e-column headerText='Employee Details' width='300' textAlign='Center'>
            </e-column>
        </e-columns>
        <ng-template #rowTemplate let-data>
            <tr>
                <td class="rowphoto">
                  <img src="{{data.EmployeeID}}.png" alt="{{data.EmployeeID}}" />
                </td>
                <td class="details">
                    <table class="CardTable" cellpadding="3" cellspacing="2">
                        <colgroup>
                            <col width="30%">
                            <col width="10%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <td class="CardHeader"> First Name </td>
                                <span>:</span>
                                <td>{{data.FirstName}} </td>
                            </tr>
                            <tr>
                                <td class="CardHeader"> Last Name </td>
                                <span>:</span>
                                <td>{{data.LastName}} </td>
                            </tr>
                            <tr>
                                <td class="CardHeader"> Title </td>
                                <span>:</span>
                                <td>{{data.Title}}</td>
                            </tr>
                            <tr>
                                <td class="CardHeader"> Birth Date </td>
                                <span>:</span>
                                <td>{{format(data.BirthDate)}}</td>
                            </tr>
                            <tr>
                                <td class="CardHeader"> Hire Date </td>
                                <span>:</span>
                                <td>{{format(data.HireDate)}}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </ng-template>
    </ejs-grid>`,
    styleUrls: ['app.style.css']
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = employeeData;
    }
    public format(value: Date): string {
        return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
    }
}
export interface DateFormat extends Window {
    format?: (value: Date) => string;
}

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-cell-cs10" %}


>When using the `rowTemplate` feature in Syncfusion Grid, keep in mind that any formatting applied to columns using the `columns.format` property will not work inside the template.

## Render syncfusion control in row template

The Grid allows you to render custom Syncfusion controls within the rows of the grid. This feature is helpful as it enables you to display interactive Syncfusion controls instead of field values in the grid.

To enable a Syncfusion control in a row template, you need to set the [rowTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowtemplate) property of the Grid component. This property accepts a custom HTML template that defines the layout for each row. 

Here is an example that demonstrates rendering Syncfusion controls within a row template :

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { ChipListModule } from '@syncfusion/ej2-angular-buttons'
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs'
import { Component } from '@angular/core';
import { orderDatas } from './datasource';

@Component({
imports: [
        
        GridModule,
        ChipListModule,
        DatePickerAllModule,
        DropDownListAllModule,
        NumericTextBoxAllModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div>
                <ejs-grid #grid [dataSource]="data">
                <e-columns>
                    <e-column field="OrderID" headerText="Order ID" width="120" >
                    </e-column>
                    <e-column field="Quantity" headerText="Quantity" width="170" >
                    </e-column>
                    <e-column field="ShipAddress" headerText="Ship Address" width="170">
                    </e-column>
                    <e-column field="OrderDate" headerText="Order Date" width="120" >
                    </e-column>
                    <e-column headerText="Order Status" width="120" ></e-column>
                </e-columns>
                <ng-template #rowTemplate let-data>
                    <tr>
                    <td class="rows">
                        <ejs-chiplist width="50" id="chip" [text]="data.OrderID">
                        </ejs-chiplist>
                    </td>
                    <td class="rows">
                        <ejs-numerictextbox width="150" [(value)]="data.Quantity">
                        </ejs-numerictextbox>
                    </td>
                    <td class="rows">{{data.ShipAddress}} </td>
                    <td class="rows">
                        <ejs-datepicker width="100" [value]="data.OrderDate">
                        </ejs-datepicker>
                    </td>
                    <td class="rows">
                        <ejs-dropdownlist width="100" [(value)]="data.OrderStatus"
                        [dataSource]="dropData" [popupHeight]="150" [popupWidth]="150">
                        </ejs-dropdownlist>
                    </td>
                    </tr>
                </ng-template>
                </ejs-grid>
            </div>`
})

export class AppComponent {

    public data?: Object[];
    public dropData?: string[];

    ngOnInit(): void {
        this.data = orderDatas;
        this.dropData = ['Order Placed', 'Processing', 'Delivered'];
    }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/row-template-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/row-template-cs3" %}

## Limitations

Row template feature is not compatible with all the features which are available in the grid, and it has limited features support. The features that are incompatible with the row template feature are listed below.

* Filtering
* Paging
* Sorting
* Searching
* Rtl
* Export
* Context Menu
* State Persistence
* Selection
* Grouping
* Editing
* Frozen rows & columns
* Virtual & Infinite scrolling
* Column chooser
* Column menu
* Detail Row
* Foreignkey column
* Resizing
* Reordering
* Aggregates
* Clipboard
* Adaptive view
