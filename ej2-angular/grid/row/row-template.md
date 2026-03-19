---
layout: post
title: Angular Grid - Row Template | Syncfusion
description: Angular Grid row template explains customizing full row rendering with templates, advanced layout options, and examples for complex row UIs.
platform: ej2-angular
control: Row template 
documentation: ug
domainurl: ##DomainURL##
---

# Row Template in Angular Grid Component

The row template feature in Grid allows customization of the appearance and layout of rows. This feature displays custom content such as images, buttons, or other controls within the rows.

**Key capabilities:**
- Custom HTML layouts for individual rows.
- Integration with Syncfusion controls and third-party components.
- Advanced formatting and data presentation options.
- Chart and visualization embedding within rows.
- Complete control over row styling and behavior.

Enable the row template feature by setting the [rowTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowtemplate) property of the Grid component. This property accepts an Angular template that defines the custom layout for each row, providing access to row data through template context.

## Basic row template implementation

The following example presents employee information with the employee "Photo" in the first column and other details such as "Name", "Address", etc. in the second column of each row.

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

By default, Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid provides the [format](https://ej2.syncfusion.com/angular/documentation/api/grid/column#format) property to format the values displayed in each column. When the [rowtemplate](https://ej2.syncfusion.com/angular/documentation/api/grid#rowtemplate) feature is used, customized formatting can be applied directly within the template.

Implement custom formatting by defining component methods that handle formatting logic. These methods can be invoked directly within the template to format values according to specific requirements.

The following example demonstrates defining a global formatting function for a date column and use it inside a `rowTemplate`:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { GridModule,DetailRowService } from '@syncfusion/ej2-angular-grids';
import { Component, OnInit } from '@angular/core';
import { employeeData } from './datasource';
import { Internationalization } from '@syncfusion/ej2-base';

const instance: Internationalization = new Internationalization();

@Component({
    imports: [ GridModule],
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

> When using the `rowTemplate` feature in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid, keep in mind that any formatting applied to columns using the `format` property will not work inside the template.


## Render Syncfusion<sup style="font-size:70%">&reg;</sup> controls in row template

Row templates support embedding interactive Syncfusion controls, transforming static grid content into dynamic, interactive interfaces. This capability enables creation of inline editors, dashboard-like interfaces, and complex data input scenarios within grid rows.

To integrate Syncfusion controls, configure the [rowTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowtemplate) property with Angular templates containing the desired controls. Ensure proper module imports and component initialization for each integrated control.

The following example demonstrates various Syncfusion controls integrated within a row template:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { ChipListModule } from '@syncfusion/ej2-angular-buttons';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
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

## Render Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Chart in row template

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component provides flexibility to include custom controls such as Chart within the rows of the Grid. This feature enhances Grid interactivity by displaying graphical representations of data instead of plain text.

Chart integration requires proper module imports and data preparation for each chart instance. The [rowTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowtemplate) property accepts chart components with appropriate data binding and configuration.

The following example demonstrates performance charts embedded within employee data rows:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { ChartModule, ChartAllModule, CategoryService, ColumnSeriesService, LineSeriesService, ChartAnnotationService, LegendService } from '@syncfusion/ej2-angular-charts';
import { Component } from '@angular/core';
import { employeeData, employeePerformanceData } from './datasource';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <ejs-grid #grid [dataSource]="data" height="400">
      <e-columns>
          <e-column field="Name" headerText="Employee Name" width="150"></e-column>
          <e-column field="Designation" headerText="Designation" width="150"></e-column>
          <e-column field="Team" headerText="Team(s)" width="150"></e-column>
          <e-column headerText="Employee Performance" width="300" textAlign="Center">
              <ng-template #template let-data>
                  <ejs-chart id="chart-container-{{data.EmployeeID}}" [primaryXAxis]="primaryXAxis" [dataSource]="getChartData(data.EmployeeID)" height="150">
                      <e-series-collection>
                          <e-series type="Column" xName="month" yName="performance" name="Performance"></e-series>
                      </e-series-collection>
                  </ejs-chart>
              </ng-template>
          </e-column>
      </e-columns>
    </ejs-grid>
  </div>`,
  standalone: true,
  imports: [GridModule, ChartModule, ChartAllModule],
  providers: [CategoryService, LineSeriesService, ColumnSeriesService, ChartAnnotationService, LegendService]
})
export class AppComponent {
  public data?: Object[];
  public primaryXAxis?: Object;

  ngOnInit(): void {
    this.data = employeeData;
    this.primaryXAxis = {
      valueType: 'Category',
    };
  }
  getChartData(employeeID: number) {
    const employeePerformance = employeePerformanceData.find(emp => emp.EmployeeID === employeeID.toString());
    return employeePerformance ? employeePerformance.chartData : [];
  }
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/row-chart-template/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/row-chart-template" %}

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

## See also

- [Column Template](https://ej2.syncfusion.com/angular/documentation/grid/columns/column-template)
- [Header Template](https://ej2.syncfusion.com/angular/documentation/grid/columns/column-headers#header-template)
- [Empty Record Template](https://ej2.syncfusion.com/angular/documentation/grid/how-to/customize-the-empty-record-template)
