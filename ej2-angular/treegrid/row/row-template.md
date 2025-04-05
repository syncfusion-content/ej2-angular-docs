---
layout: post
title: Row template in Angular TreeGrid component | Syncfusion
description: Learn here all about Row template in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row template 
documentation: ug
domainurl: ##DomainURL##
---

# Row template in Angular TreeGrid component

The row template feature in Tree Grid allows you to customize the appearance and layout of rows in the tree grid. This feature is useful when you want to display custom content, such as images, buttons, or other controls, within the rows.

To enable the row template feature, you need to set the [rowTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowtemplate) property of the TreeGrid component. This property accepts a custom HTML template that defines the layout for each row. 

In the following example, the first column displays Employee Information with Employee ID, the second column presents the Employee Photo, and the third column showcases employee details such as Name, Designation, etc.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { textdata } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-container',
  template: `<ejs-treegrid #treegrid [dataSource]='data' height=291 width='auto' childMapping= 'Children' >
                <e-columns>
                    <e-column field = 'EmpID' headerText = 'Employee ID' width = '180'></e-column>
                    <e-column headerText="Employee Image" width="150" textAlign="Center"></e-column>
                    <e-column headerText="Employee Details" width="300" textAlign="Center"></e-column>
                </e-columns>
                <ng-template #rowTemplate let-data>
                    <tr>
                        <td class="rows">
                            {{data.EmpID}}
                        </td>
                        <td class="rowphoto">
                            <img src="{{data.FullName}}.png" alt="{{data.FullName}}" />
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
                                        <td class="CardData"> {{data.FirstName}}</td>
                                    </tr>
                                    <tr>
                                        <td class="CardHeader">Last Name</td>
                                        <span>:</span>
                                        <td>{{data.LastName}}</td>
                                    </tr>
                                    <tr>
                                        <td class="CardHeader">Title</td>
                                        <span>:</span>
                                        <td>{{data.Designation}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </ng-template>
            </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  public data?: Object[];

  @ViewChild('treegrid')
  public treegrid?: TreeGridComponent;

  ngOnInit(): void {
    this.data = textdata;
  }
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-cs8" %}

## Row template with formatting

The row template feature in Syncfusion<sup style="font-size:70%">&reg;</sup> Tree Grid allows you to customize the layout of rows in the tree grid. This is useful when you want to display images, buttons, or other custom content within the rows of a tree grid.

By default, Syncfusion<sup style="font-size:70%">&reg;</sup> Tree Grid provides the [columns.format](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#format) property to format the values displayed in each column. However, when using the [rowtemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowtemplate), the `columns.format` property cannot be directly applied to format the values inside the template.

To format the values within the row template, you can define a global function that handles the formatting logic. This function can be invoked inside the template to format the corresponding values.

Here is an example of how to define a global formatting function for a date column and use it inside a `rowTemplate`:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { textdata } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { Internationalization } from '@syncfusion/ej2-base';

const instance: Internationalization = new Internationalization();

@Component({
  selector: 'app-container',
  template: `<ejs-treegrid #treegrid [dataSource]='data' height=291 width='auto' childMapping= 'Children' >
                <e-columns>
                    <e-column field = 'EmpID' headerText = 'Employee ID' width = '180'></e-column>
                    <e-column headerText="Employee Image" width="150" textAlign="Center"></e-column>
                    <e-column headerText="Employee Details" width="300" textAlign="Center"></e-column>
                </e-columns>
                <ng-template #rowTemplate let-data>
                    <tr>
                        <td class="rows">
                            {{data.EmpID}}
                        </td>
                        <td class="rowphoto">
                            <img src="{{data.FullName}}.png" alt="{{data.FullName}}" />
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
                                        <td class="CardData"> {{data.FirstName}}</td>
                                    </tr>
                                    <tr>
                                        <td class="CardHeader">Last Name</td>
                                        <span>:</span>
                                        <td>{{data.LastName}}</td>
                                    </tr>
                                    <tr>
                                        <td class="CardHeader"> Birth Date </td>
                                        <span>:</span>
                                        <td>{{format(data.DOB)}}</td>
                                    </tr>
                                    <tr>
                                        <td class="CardHeader">Title</td>
                                        <span>:</span>
                                        <td>{{data.Designation}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </ng-template>
            </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  public data?: Object[];

  @ViewChild('treegrid')
  public treegrid?: TreeGridComponent;
  public format(value: Date): string {
    return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
  }
  ngOnInit(): void {
    this.data = textdata;
  }
}
export interface DateFormat extends Window {
    format?: (value: Date) => string;
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-cs9" %}

>When using the `rowTemplate` feature in Syncfusion<sup style="font-size:70%">&reg;</sup> Tree Grid, any formatting applied to columns using the `columns.format` property will not work inside the template.

## Render syncfusion<sup style="font-size:70%">&reg;</sup> control in row template

The Tree Grid allows you to render custom Syncfusion<sup style="font-size:70%">&reg;</sup> controls within the rows of the tree grid. This feature is helpful as it enables you to display interactive Syncfusion<sup style="font-size:70%">&reg;</sup> controls instead of field values in the tree grid.

To enable a Syncfusion<sup style="font-size:70%">&reg;</sup> control in a row template, you need to set the [rowTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowtemplate) property of the TreeGrid component. This property accepts a custom HTML template that defines the layout for each row. 

Here is an example that demonstrates rendering Syncfusion<sup style="font-size:70%">&reg;</sup> controls within a row template :

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { RowDataBoundEventArgs } from '@syncfusion/ej2-grids';

@Component({
  selector: 'app-container',
  template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' height='315'  childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID'  width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=100></e-column>
                        <e-column field='startDate' headerText='Start Date'  format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration'  width=80></e-column>
                        <e-column field='priority' headerText='Priority' width=80></e-column>
                    </e-columns>
                    <ng-template #rowTemplate let-data>
                    <tr>
                    <td class="rows">
                        <ejs-chiplist width="90" id="chip" [text]="data.taskID">
                        </ejs-chiplist>
                    </td>
                    <td class="rows">
                      {{data.taskName}}
                    </td>
                    <td class="rows">
                        <ejs-datepicker width="90" [value]="data.startDate">
                        </ejs-datepicker>
                    </td>
                    <td class="rows">
                        <ejs-numerictextbox width="80" [(value)]="data.duration">
                        </ejs-numerictextbox>
                    </td>
                    <td class="rows">
                        <ejs-dropdownlist width="80" [(value)]="data.priority"
                        [dataSource]="priorityData" [popupHeight]="150" [popupWidth]="150">
                        </ejs-dropdownlist>
                    </td>          
                   </tr>
                </ng-template>
            </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  public data?: Object[];
  public priorityData?: string[];
  ngOnInit(): void {
    this.data = sampleData;
    this.priorityData = ['High', 'Low', 'Critical', 'Normal'];
  }
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-cs10" %}

## Limitations

Row template feature is not compatible with all the features which are available in the tree grid, and it has limited features support. The features that are incompatible with the row template feature are listed below.

* Filtering
* Paging
* Sorting
* Searching
* RTL
* Export
* Context menu
* State persistence
* Selection
* Editing
* Frozen rows & columns
* Virtual & infinite scrolling
* Column chooser
* Column menu
* Detail row
* Resizing
* Reordering
* Aggregates
* Clipboard
* Adaptive view