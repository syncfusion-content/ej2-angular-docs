---
layout: post
title: Filter menu in Angular Grid component | Syncfusion
description: Learn here all about Filter menu in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filter menu 
documentation: ug
domainurl: ##DomainURL##
---

# Filter menu in Angular Grid component

The filter menu in the Syncfusion Angular Grid component provides a comprehensive and user-friendly interface for advanced data filtering operations. Unlike the filter bar, which offers immediate filtering through input fields, the filter menu presents a dialog-based approach with sophisticated filtering options including multiple operators, custom components, and complex filter conditions.

The filter menu is particularly beneficial for applications requiring detailed filtering capabilities, multiple filter conditions per column, or when users need access to various filtering operators based on column data types. This filtering method provides greater control and flexibility compared to other filtering approaches.

To enable the filter menu, set the [filterSettings.type](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings) property to **Menu**. This property determines the type of filter UI that will be rendered, allowing users to apply filters using different operators tailored to each column's data type.

The following example demonstrates basic filter menu usage in the Syncfusion Angular Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-menu-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-menu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-menu-cs1" %}

> * [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowfiltering) must be set as true to enable filter menu.
> * By setting [columns.allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#allowfiltering) as false will prevent filter menu rendering for a particular column.

## Custom component in filter menu

The filter menu provides enhanced customization capabilities by allowing you to replace default filter components with custom ones. This enables you to create more intuitive filtering experiences tailored to your specific data and user requirements.

By default, the filter menu provides:
- **AutoComplete** component for string type columns
- **NumericTextBox** for number type columns  
- **DropDownList** component for boolean type columns
- **DatePicker** for date type columns
- **DateTimePicker** for datetime type columns

To implement custom filter components, use the [column.filter.ui](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filter) property and define the following functions:

* **create**: Creates the custom component for the filter
* **write**: Wires events for the custom component to handle user interactions
* **read**: Reads the filter value from the custom component

The following example demonstrates how to render a DropDownList component for the **CustomerID** column instead of the default AutoComplete:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-menu-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-menu-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-menu-cs2" %}

**Default filter input for CustomerID column**
![Default filter input for CustomerID column](../images/filter-menu-auto-complete.gif)
**Custom dropdown filter for CustomerID column**
![Custom dropdown filter for CustomerID column](../images/filter-menu-drop-down.gif)

## Show 24 hours time format in filter dialog

The Syncfusion Angular Grid provides a feature to display the time in a 24-hour format in the date or datetime column filter dialog. By default, the filter dialog displays the time in a 12-hour format (AM/PM) for the date or datetime column. However, you can customize the default format by setting the type as **dateTime** and the format as **M/d/y HH:mm**. To enable the 24-hour time format in the filter dialog, you need to handle the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event with [requestType](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs/#requesttype) as [filterafteropen](https://ej2.syncfusion.com/angular/documentation/api/grid/action/) and set the `timeFormat` of the `DateTimepicker` to **HH:mm**.

Here is an example that demonstrates how to show 24 hours time format in filter dialog:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-menu-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-menu-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-menu-cs3" %}

## Customizing filter menu operators list

The Syncfusion Angular Grid enables you to customize the default filter operator list by utilizing the [filterSettings.operators](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#operators) property. This feature allows you to define your own set of operators that will be available in the filter menu. You can customize operators for string, number, date, and boolean data types.

The available options for customization are:

* **stringOperator**- defines customized string operator list.
* **numberOperator** - defines customized number operator list.
* **dateOperator** - defines customized date operator list.
* **booleanOperator** - defines customized boolean operator list.
  
Here is an example of how to customize the filter operators list in Syncfusion Angular Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-menu-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-menu-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-menu-cs4" %}

## Filter by multiple keywords using filter menu

The Syncfusion Angular Grid supports filtering by multiple keywords simultaneously through the filter menu dialog. This advanced filtering capability enables users to search for multiple values within a single column, providing more flexible data retrieval options.

To enable multiple keyword filtering, set [filterSettings.type](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#type) as **Menu** and render the `MultiSelect` component as a custom component in the filter menu dialog.

The following example demonstrates multiple keyword filtering implementation:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-menu-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-menu-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-menu-cs5" %}

## Customize the default input component of filter menu dialog

You can customize the default settings of input components within the filter menu by utilizing the `params` property within the column definition [filter](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filter). This allows you to modify the behavior of specific filter components to better suit your application requirements.

| Column Type | Default component                                                                                 | Customization                            | API Reference                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| String      | [AutoComplete](https://ej2.syncfusion.com/angular/documentation/auto-complete/getting-started)    | Eg: { params: { autofill: false }}       | [AutoComplete API](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/autoCompleteModel/) |
| Number      | [NumericTextBox](https://ej2.syncfusion.com/angular/documentation/numerictextbox/getting-started) | Eg: { params: { showSpinButton: false }} | [NumericTextBox API](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox)                 |
| Boolean     | [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started)   | Eg: { params: { sortOrder:'Ascending'}}  | [DropDownList API](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list)                   |
| Date        | [DatePicker](https://ej2.syncfusion.com/angular/documentation/datepicker/getting-started)         | Eg: { params: { weekNumber: true }}      | [DatePicker API](https://ej2.syncfusion.com/angular/documentation/api/datepicker)                         |
| DateTime    | [DateTimePicker](https://ej2.syncfusion.com/angular/documentation/datetimepicker/getting-started) | Eg: { params: { showClearButton: true }} | [DateTimePicker API](https://ej2.syncfusion.com/angular/documentation/api/datetimepicker)                 |

> Refer to the Getting Started documentation and API Reference for complete feature details

In the following example, the **OrderID** and **Freight** columns are numeric columns. When you open the filter dialog for these columns, a `NumericTextBox` with a spin button displays by default. Using the `params` property, you can hide the spin button specifically for the **OrderID** column while maintaining it for the **Freight** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-menu-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-menu-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-menu-cs8" %}

### Prevent autofill option in autocomplete of menu filter

By default, the [AutoComplete](https://ej2.syncfusion.com/angular/documentation/auto-complete/getting-started) component in the filter menu dialog automatically fills suggestions as users type. However, you may want to disable this autofill behavior to provide a more controlled user experience or when working with specific data patterns.

Disable the autofill feature by setting the [autofill](https://ej2.syncfusion.com/angular/documentation/api/auto-complete#autofill) parameter to **false** using the `params` property within the column definition [filter](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filter). 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-menu-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-menu-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-menu-cs7" %}

## Hide default filter icons while perform filtering through method

When performing filtering programmatically using methods in the Syncfusion Angular Grid component, you may want to hide the default filter icons to provide a simpler interface.

To customize the filter icon in the Grid, use the **display** property of the **filtermenu** as mentioned below

```css
.e-filtermenudiv.e-icons.e-icon-filter {
    display: none;
}
```

The following example demonstrate how to hide the default filter icons while filtering the **CustomerID** column programmatically using a method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-menu-icon/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-menu-icon/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/filter-menu-icon" %}

## Filter menu events

The Syncfusion Angular Grid provides [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid#actionbegin) and [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#actioncomplete) events that offer detailed information about filtering actions. These events include a `requestType` argument that specifies the [action](https://ej2.syncfusion.com/angular/documentation/api/grid/action/) being executed.

**Available filter menu event types:**
* **filtering** - Triggered during the filtering process
* **filterbeforeopen** - Triggered before the filter dialog opens
* **filterafteropen** - Triggered after the filter dialog opens

These events enable you to implement custom logic, show messages, or modify filter behavior based on specific requirements.

The following example demonstrates filter menu event handling in the Syncfusion Angular Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, FilterService, PageService} from '@syncfusion/ej2-angular-grids'
import { MultiSelectModule, CheckBoxSelectionService,DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons'
import { MessageModule } from '@syncfusion/ej2-angular-notifications'

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        MultiSelectModule,
        DropDownListAllModule,
        CheckBoxModule,
        MessageModule
    ],

providers: [FilterService, PageService,CheckBoxSelectionService],
standalone: true,
  selector: 'app-root',
  template: `<div class='message'>{{actionBeginMessage}}</div><div class='message'>{{actionCompleteMessage}}</div>
    <ejs-grid [dataSource]='data' [allowFiltering]='true' [filterSettings]='filterOptions' height='273px' (actionBegin)="actionBegin($event)" (actionComplete)="actionComplete($event)">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  public filterOptions?: FilterSettingsModel;
  public actionBeginMessage: string | undefined;
  public actionCompleteMessage: string | undefined;

  ngOnInit(): void {
    this.data = data;
    this.filterOptions = { type: 'Menu' }
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
    if(args.requestType == 'filtering' && args.currentFilteringColumn == 'ShipCity'){
      args.cancel=true;
      this.actionBeginMessage = args.requestType + ' is not allowed for ShipCity column';
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

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-menu-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-menu-cs6" %}

## Troubleshoot filter menu operator issue

When using the filter menu, the UI displays operators for all columns based on the data type of the first data it encounters. If the first data is empty or null, the operators may not display correctly. To resolve this issue:

**Explicitly Define Data Type:** When defining columns in your Angular Grid component, explicitly specify the data type for each column using the `type` property within the columns configuration:

```ts
<ejs-grid [dataSource]='data'>
    <e-columns>
        <e-column field='OrderID' headerText='Order ID' type='number' width=120></e-column>
        <e-column field='CustomerName' headerText='Customer Name' type='string' width=150></e-column>
        <!-- Define data types for other columns as needed -->
    </e-columns>
</ejs-grid>
```

**Handle Null or Empty Data:** If your data source contains null or empty values, ensure these values are appropriately handled within your data source or by preprocessing your data to maintain consistency.

**Check Data Types in Data Source:** Verify that the data types specified in the column definitions match the actual data types in your data source. Mismatched data types can lead to unexpected behavior.

## See also

* [How to perform filter by using Wildcard and LIKE operator filter](./filtering/#wildcard-and-like-operator-filter)
* [How to change loading indicator in Angular Grid](../data-binding/data-binding#loading-animation)