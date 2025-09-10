---
layout: post
title: Filter menu in Angular TreeGrid component | Syncfusion
description: Learn here all about Filter menu in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filter menu 
documentation: ug
domainurl: ##DomainURL##
---

# Filter menu in Angular TreeGrid component

The filter menu in the Angular TreeGrid component allows enabling filtering and provides a user-friendly interface for filtering data based on column types and operators.

To enable the filter menu, set the [filterSettings.type](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettings) property to **Menu** and ensure [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowfiltering) is set to **true**. This property determines the type of filter UI that will be rendered. The filter menu UI allows applying filters using different operators.

Here is an example that demonstrates the usage of the filter menu in the TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-cs6/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-cs6" %}

> * [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowfiltering) must be set as true to enable filter menu.
> * By setting [columns.allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#allowfiltering) as false will prevent filter menu rendering for a particular column.

## Custom component in filter menu

The filtering experience in the TreeGrid component can be enhanced by customizing the filter menu with custom components. This allows replacing the default search box with custom components like dropdowns or textboxes. By default, the filter menu provides an autocomplete component for string type columns, a numeric textbox for number type columns, and a dropdown component for boolean type columns, making it easy to search for values.

To customize the filter menu, use the [column.filter.ui](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#filter) property. This property allows integrating desired custom filter components into specific columns of the TreeGrid. To implement a custom filter UI, define the following functions:

* **create**: This function is responsible for creating the custom component for the filter.
* **write**: The write function is used to wire events for the custom component. This allows handling changes in the custom filter UI.
* **read**: The read function is responsible for reading the filter value from the custom component. This is used to retrieve the selected filter value.

For example, the standard search box in the filter menu can be replaced with a dropdown component. This enables performing filtering operations by selecting values from the dropdown list, rather than manually typing in search queries.

Here is a sample code demonstrating how to render a dropdownlist component for the **Task Name** column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-menu-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-menu-cs1/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-menu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-menu-cs1" %}

## Show 24-hour time format in filter dialog

The TreeGrid provides a feature to display the time in a 24-hour format in the date or datetime column filter dialog. By default, the filter dialog displays the time in a 12-hour format (AM/PM) for the date or datetime column. To enable the 24-hour time format in the filter dialog, handle the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actioncomplete) event with [requestType](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs/#requesttype) as [filterafteropen](https://ej2.syncfusion.com/angular/documentation/api/grid/action/) and set the `timeFormat` of the `DateTimepicker` to **HH:mm**.

In TreeGrid column, the default format can be customized by setting the [type](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#type) as **dateTime** and the [format](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#format) as **M/d/y HH:mm**. 

Here is an example that demonstrates how to show 24-hour time format in filter dialog:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-menu-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-menu-cs2/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-menu-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-menu-cs2" %}

## Customizing filter menu operators list

The TreeGrid component enables customizing the default filter operator list by utilizing the [filterSettings.operators](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettings/#operators) property. This feature allows defining a custom set of operators that will be available in the filter menu. Operators can be customized for string, number, date, and boolean data types.

The available options for customization are:

* **stringOperator** - defines customized string operator list.
* **numberOperator** - defines customized number operator list.
* **dateOperator** - defines customized date operator list.
* **booleanOperator** - defines customized boolean operator list.
  
Here is an example of how to customize the filter operators list in the TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-cs7/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-cs7" %}

## Filter by multiple keywords using filter menu

The TreeGrid component allows performing filtering actions based on multiple keywords, rather than a single keyword, using the filter menu dialog. To enable this feature, set [filterSettings.type](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettings/#type) as **Menu** and render the `MultiSelect` component as a custom component in the filter menu dialog.

Here is an example that demonstrates how to perform filtering by multiple keywords using the filter menu in the TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-menu-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-menu-cs3/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-menu-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-menu-cs3" %}

## Customize the default input component of filter menu dialog

The default settings of input components within the menu filter can be customized by utilizing the `params` property within the column definition of the [filter](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#filter). This allows modifying the behavior of specific filter components to better suit specific needs.

| Column Type | Default component                                                                                 | Customization                            | API Reference                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| String      | [AutoComplete](https://ej2.syncfusion.com/angular/documentation/auto-complete/getting-started)    | Eg: { params: { autofill: false }}       | [AutoComplete API](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/autoCompleteModel/) |
| Number      | [NumericTextBox](https://ej2.syncfusion.com/angular/documentation/numerictextbox/getting-started) | Eg: { params: { showSpinButton: false }} | [NumericTextBox API](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox)                 |
| Boolean     | [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started)   | Eg: { params: { sortOrder:'Ascending'}}  | [DropDownList API](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list)                   |
| Date        | [DatePicker](https://ej2.syncfusion.com/angular/documentation/datepicker/getting-started)         | Eg: { params: { weekNumber: true }}      | [DatePicker API](https://ej2.syncfusion.com/angular/documentation/api/datepicker)                         |
| DateTime    | [DateTimePicker](https://ej2.syncfusion.com/angular/documentation/datetimepicker/getting-started) | Eg: { params: { showClearButton: true }} | [DateTimePicker API](https://ej2.syncfusion.com/angular/documentation/api/datetimepicker)                 |

> To know more about the feature, refer to the Getting Started documentation and API Reference

In the example provided below, the **Task ID** and **Duration** columns are numeric columns. When the filter dialog is opened for these columns, a `NumericTextBox` with a spin button is displayed to change or set the filter value. However, using the `params` property, the spin button can be hidden specifically for the **Task ID** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-menu-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-menu-cs4/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-menu-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-menu-cs4" %}

### Prevent autofill option in autocomplete of menu filter

By default, the [AutoComplete](https://ej2.syncfusion.com/angular/documentation/auto-complete/getting-started) component in the filter menu dialog is set to automatically fill suggestions during text input. However, there might be scenarios where this autofill behavior needs to be prevented to provide more precise control over the filtering experience.

The autofill feature can be prevented by setting the [autofill](https://ej2.syncfusion.com/angular/documentation/api/auto-complete#autofill) parameter to **false** using the `params` property within the column definition of the [filter](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#filter). 

Here's an example that demonstrates how to prevent autofill options in the autocomplete menu filter within the TreeGrid. In this example, autofill options have been prevented in the **Task Name** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-menu-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-menu-cs5/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-menu-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-menu-cs5" %}

## Filter menu events

The TreeGrid offers the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid#actionbegin) and [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid#actioncomplete) events, which provide information about the actions being performed. Within the event handlers, an argument named `requestType` is received. This argument specifies the [action](https://ej2.syncfusion.com/angular/documentation/api/grid/action/) that is being executed, such as `filterbeforeopen`, `filterafteropen`, or `filtering`. By analyzing this action type, custom logic can be implemented or messages can be displayed.

**filtering** - Defines current action as filtering.
**filterbeforeopen** - Defines current action as filter dialog before open.
**filterafteropen** - Defines current action as filter dialog after open.

Here's an example of how to use these events to handle filter menu action in the TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}

import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { FilterSettingsModel, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers: [FilterService],
    standalone: true,
    selector: 'app-container',
    template: `<div class='message' style="color:red">{{actionBeginMessage}}</div><div class='message' style="color:blue">{{actionCompleteMessage}}</div>
                  <ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='275' [allowFiltering]='true' [filterSettings]='filterOptions'  (actionBegin)="actionBegin($event)" (actionComplete)="actionComplete($event)" childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID'    textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name'  textAlign='Left' width=150></e-column>
                        <e-column field='priority' headerText='Priority'   width=120></e-column>
                        <e-column field='duration' headerText='Duration'   textAlign='Right' width=120></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public filterOptions?: FilterSettingsModel;
    public actionBeginMessage: string | undefined;
    public actionCompleteMessage: string | undefined;
  
    @ViewChild('treegrid')
    public treegrid?:TreeGridComponent;
    ngOnInit(): void {
        this.data = sampleData;
        this.filterOptions = {
           type: 'Menu',
           
        };
        
    }
    actionBegin(args: any) {
      this.actionBeginMessage='';
      if (args.requestType == 'filterbeforeopen' && args.columnType === "number") {
          args.filterModel.customFilterOperators.numberOperator = [
          { value: "equal", text: "Equal" },
          { value: "notequal", text: "Not Equal" }];
          this.actionBeginMessage ='Filter operators for number column were customized using the filterbeforeopen action in the actionBegin event';
      }
      else{
        this.actionBeginMessage = args.requestType + ' action is triggered in actionBegin event'
      }
      if(args.requestType == 'filtering' && args.currentFilteringColumn == 'priority'){
        args.cancel=true;
        this.actionBeginMessage = args.requestType + ' is not allowed for Priority column';
      }
  
    }
    actionComplete(args: any) {
      if(args.requestType === 'filterafteropen') {
        this.actionCompleteMessage ='Applied CSS for filter dialog during filterafteropen action';
        args.filterModel.dlgDiv.querySelector('.e-dlg-content').style.background = '#eeeaea';
        args.filterModel.dlgDiv.querySelector('.e-footer-content').style.background = '#30b0ce';
      }
      if(args.requestType == 'filtering'){
        this.actionCompleteMessage = args.requestType + ' action is triggered in actionComplete event';
      }
    }
}

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-menu-cs6/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-menu-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-menu-cs6" %}

## Troubleshoot filter menu operator issue

When using the filter menu, the UI displays operators for all columns based on the data type of the first data it encounters. If the first data is empty or null, it may not work correctly. To overcome this issue, follow these steps to troubleshoot and resolve it:

**1. Explicitly Define Data Type:** When defining columns in the Angular TreeGrid component, explicitly specify the data type for each column. This can be done using the [type](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#type) property within the columns configuration. For example:

```ts
<ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' childMapping='subtasks'>            
    <e-columns>
        <e-column field='taskID' headerText='Task ID' type='number' width=120></e-column>
        <e-column field='taskName' headerText='Task Name' type='string' width=150></e-column>
        <!-- Define data types for other columns as needed -->
    </e-columns>
</ejs-treegrid>
```

**2. Handle Null or Empty Data:** If the data source contains null or empty values, ensure that these values are appropriately handled within the data source or by preprocessing the data to ensure consistency.

**3. Check Data Types in Data Source:** Ensure that the data types specified in the column definitions match the actual data types in the data source. Mismatched data types can lead to unexpected behavior.