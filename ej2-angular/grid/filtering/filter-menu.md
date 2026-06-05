---
layout: post
title: Angular Grid - Filter Menu | Syncfusion
description: Angular Grid filter menu offers column‑level filtering with configurable dialogs, custom components, operator options, and multi‑value filtering control.
platform: ej2-angular
control: Filter menu 
documentation: ug
domainurl: ##DomainURL##
---

# Filter Menu in Angular Grid Component

The filter menu in the Angular Grid component provides a dialog-based filtering interface that appears when clicking the filter icon in column headers. This menu displays dropdown operators (such as equals, contains, startswith) and an input field for entering filter values, giving precise control over data filtering.

> For basic filtering setup and configuration, refer to the [Filter Feature Guide](filtering#set-up-filtering).

## Enable filter menu

To enable the filter menu, set the [filterSettings.type](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings) property to `Menu`. This property determines the type of filter UI that will be rendered, allowing users to apply filters using different operators tailored to each column's data type.

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

> * [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid#allowfiltering) must be set as `true` to enable filter menu.
> * By setting [columns.allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/column#allowfiltering) as `false` will prevent filter menu rendering for a particular column.

## Custom component in filter menu

The filter menu provides enhanced customization capabilities by allowing replacement of default filter components with custom ones. This enables creation of more intuitive filtering experiences tailored to specific data and user requirements.

By default, the filter menu provides:
- **`AutoComplete`** component for string type columns.
- **`NumericTextBox`** for number type columns.
- **`DropDownList`** component for boolean type columns.
- **`DatePicker`** for date type columns.
- **`DateTimePicker`** for datetime type columns.

To implement custom filter components, use the [column.filter.ui](https://ej2.syncfusion.com/angular/documentation/api/grid/column#filter) property and define the following functions:

* `create`: Creates the custom component for the filter.
* `write`: Connects event handlers for the custom component. This function handles changes in the custom filter UI and updates filter behavior accordingly.
* `read`: Reads the filter value from the custom component. This retrieves the selected filter value when the filter is applied.

The following example demonstrates rendering a DropDownList component for the "Customer ID" column instead of the default AutoComplete:

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

The Grid provides a feature to display time in a "24-hour" format in date or datetime column filter dialogs.

By default, filter dialogs display time in "12-hour" format (AM/PM) for date or datetime columns. To customize this behavior, set the column type as `datetime` and format as "M/d/y HH:mm". The [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#actioncomplete) event with [requestType](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs#requesttype) as `filterafteropen` can be used to set the `timeFormat` of the `DateTimepicker` to "HH:mm".

Here is an example that demonstrates the "24-hour" time format in the filter dialog:

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

Filter operators are comparison methods that determine the match between the filter value and data. Examples include:

- `equals`: Exact match
- `contains`: Partial match (substring search)
- `startswith`: Matches beginning of value
- `greaterthan`: Numeric/date comparison

The Grid enables customizing the default filter operator list using the [filterSettings.operators](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings#operators) property. This feature defines custom sets of operators available in the filter menu, allowing restriction or simplification of filtering methods for specific columns.

Customize operators for string, number, date, and boolean data types using these options:

* `stringOperator` - defines customized string operator list.
* `numberOperator` - defines customized number operator list.
* `dateOperator` - defines customized date operator list.
* `booleanOperator` - defines customized boolean operator list.
  
Here is an example to customize the filter operators list in Syncfusion Angular Grid:

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

The Grid allows filtering based on multiple keywords simultaneously, rather than a single keyword. This is useful when users need to filter by selecting multiple values from a list.

To enable this feature, set [filterSettings.type](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings#type) as `Menu` and render the `MultiSelect` component as a custom component in the filter menu dialog using the `filter.ui` property.

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

The default settings of input components within the filter menu can be customized by utilizing the `params` property within the column definition [filter](https://ej2.syncfusion.com/angular/documentation/api/grid/column#filter). This allows modification of specific filter component behavior to better suit application requirements.

Each column type uses a default component in the filter menu, which can be customized with specific parameters:

| Column Type | Default component                                                                                 | Customization                            | API Reference                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| String      | [AutoComplete](https://ej2.syncfusion.com/angular/documentation/auto-complete/getting-started)    | Eg: { params: { autofill: false }}       | [AutoComplete API](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/autoCompleteModel) |
| Number      | [NumericTextBox](https://ej2.syncfusion.com/angular/documentation/numerictextbox/getting-started) | Eg: { params: { showSpinButton: false }} | [NumericTextBox API](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox)                 |
| Boolean     | [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started)   | Eg: { params: { sortOrder:'Ascending'}}  | [DropDownList API](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list)                   |
| Date        | [DatePicker](https://ej2.syncfusion.com/angular/documentation/datepicker/getting-started)         | Eg: { params: { weekNumber: true }}      | [DatePicker API](https://ej2.syncfusion.com/angular/documentation/api/datepicker)                         |
| DateTime    | [DateTimePicker](https://ej2.syncfusion.com/angular/documentation/datetimepicker/getting-started) | Eg: { params: { showClearButton: true }} | [DateTimePicker API](https://ej2.syncfusion.com/angular/documentation/api/datetimepicker)                 |

> Refer to the Getting Started documentation and API Reference for complete feature details

In the following example, the "Order ID" and "Freight" columns are numeric columns. When the filter dialog opens for these columns, a `NumericTextBox` with a spin button displays by default. The `params` property can be used to hide the spin button specifically for the "Order ID" column.

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

By default, the [AutoComplete](https://ej2.syncfusion.com/angular/documentation/auto-complete/getting-started) component in the filter menu dialog automatically fills suggestions as users type. To disable this autofill behavior, set the [autofill](https://ej2.syncfusion.com/angular/documentation/api/auto-complete#autofill) parameter to `false` using the `params` property within the column definition of the [filter](https://ej2.syncfusion.com/angular/documentation/api/grid/column#filter).

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

When filtering is performed programmatically using grid methods, the default filter icons can be hidden to provide a simpler interface.

To hide the filter icon in the grid, apply the following CSS rule to the filter menu class:

```css
.e-filtermenudiv.e-icons.e-icon-filter {
    display: none;
}
```

The following example demonstrates hiding the default filter icons while filtering the "Customer ID" column programmatically using a method.

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

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid offers the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid#actionbegin) and [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#actioncomplete) events, which provide information about the actions being performed. Within the event handlers, an argument named `requestType` specifies the [action](https://ej2.syncfusion.com/angular/documentation/api/grid/action) being executed, such as `filterbeforeopen`, `filterafteropen`, or `filtering`. By analyzing this action type, custom logic can be implemented or messages displayed.

**Event types and their purposes**:

* `filterbeforeopen` - Triggered before the filter menu dialog opens. Use this to modify menu settings, pre-populate values, or prevent the dialog from opening based on conditions.
* `filterafteropen` - Triggered after the filter menu dialog opens. Use this to customize the dialog appearance, focus specific input fields, or add additional UI elements.
* `filtering` - Triggered when a filter is applied. Use this to log filter actions, display custom notifications, or perform additional data processing.

These events enable implementation of custom logic, display of messages, or modification of filter behavior based on specific requirements.

The following example demonstrates filter menu event handling in the Syncfusion Angular Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { GridModule, FilterService, PageService,FilterSettingsModel} from '@syncfusion/ej2-angular-grids'
import { MultiSelectModule, CheckBoxSelectionService,DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { MessageModule } from '@syncfusion/ej2-angular-notifications';
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';;

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

**Explicitly Define Data Type:** When defining columns in an Angular Grid component, explicitly specify the data type for each column using the `type` property within the columns configuration:

```ts
<ejs-grid [dataSource]='data'>
    <e-columns>
        <e-column field='OrderID' headerText='Order ID' type='number' width=120></e-column>
        <e-column field='CustomerName' headerText='Customer Name' type='string' width=150></e-column>
        <!-- Define data types for other columns as needed -->
    </e-columns>
</ejs-grid>
```

**Handle Null or Empty Data:** If the data source contains null or empty values, these values should be appropriately handled within the data source or by preprocessing the data to maintain consistency.

**Check Data Types in Data Source:** The data types specified in the column definitions must match the actual data types in the data source. Mismatched data types can lead to unexpected behavior.

## See also

* [Filter using Wildcard and LIKE operator](./filtering#wildcard-and-like-operator-filter)
* [Change loading indicator in Angular Grid](../data-binding/data-binding#loading-animation)