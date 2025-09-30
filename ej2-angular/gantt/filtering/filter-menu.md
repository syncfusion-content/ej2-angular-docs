---
layout: post
title: Filter menu in Angular Gantt component | Syncfusion
description: Learn here all about Filter menu in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filter menu 
documentation: ug
domainurl: ##DomainURL##
---

# Filter menu in Angular Gantt component

The Gantt component provides a filter menu for each column, allowing filtering based on data type and supported operators. 

To enable this feature, set [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowfiltering) to **true** and configure [filterSettings.type](https://ej2.syncfusion.com/angular/documentation/api/gantt/#filtersettings) as **Menu**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/filtermenu-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/filtermenu-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/filtermenu-cs2" %}

>[allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowfiltering) must be set as **true** to enable filter menu.
>Setting [columns.allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#allowfiltering) as **false** will prevent filter menu rendering for a particular column.

## Custom component in filter menu

The filter menu can be enhanced by integrating custom UI elements such as dropdowns, textboxes, or other input controls. This customization is achieved using the column.filter.ui property, which supports three essential functions:
1. `create`- Initializes and renders the custom filter component inside the filter menu.
2. `write`- Populates the component with the current filter value and attaches any necessary event handlers. 
3. `read` - Retrieves the selected value from the component and applies the filter to the column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/filtermenu-custom-component/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/filtermenu-custom-component/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/filtermenu-custom-component" %}


## Hide default filter icon while perform filtering through method

To remove the default filter icon from the UI, apply the following CSS: 
 
```css
.e-filtermenudiv.e-icons.e-icon-filter {
      display: none;
    }

```

You can perform filtering programmatically by checking if `args.currentTarget.id` equals **performFilter**, and then calling [filterByColumn](https://ej2.syncfusion.com/angular/documentation/api/gantt#filterbycolumn) method. If the condition is not met, use [clearFiltering](https://ej2.syncfusion.com/angular/documentation/api/gantt#clearfiltering) to reset filters via a button click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/hide-default-filter/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/hide-default-filter/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/hide-default-filter" %}

## Customize the default input component of filter menu dialog

To customize the default input components in the filter menu, use the `params` property within the column's [filter](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#filter) configuration. This allows you to override default settings based on the column type.

You can refer to the table below for supported column types, their default components, customization examples, and API references:

| Column Type | Default component                                                                                 | Customization                            | API Reference                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| String      | [AutoComplete](https://ej2.syncfusion.com/angular/documentation/auto-complete/getting-started)    | Eg: { params: { autofill: false }}       | [AutoComplete API](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/autoCompleteModel/) |
| Number      | [NumericTextBox](https://ej2.syncfusion.com/angular/documentation/numerictextbox/getting-started) | Eg: { params: { showSpinButton: false }} | [NumericTextBox API](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox)                 |
| Boolean     | [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started)   | Eg: { params: { sortOrder:'Ascending'}}  | [DropDownList API](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list)                   |
| Date        | [DatePicker](https://ej2.syncfusion.com/angular/documentation/datepicker/getting-started)         | Eg: { params: { weekNumber: true }}      | [DatePicker API](https://ej2.syncfusion.com/angular/documentation/api/datepicker)                         |
| DateTime    | [DateTimePicker](https://ej2.syncfusion.com/angular/documentation/datetimepicker/getting-started) | Eg: { params: { showClearButton: true }} | [DateTimePicker API](https://ej2.syncfusion.com/angular/documentation/api/datetimepicker)                 |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/customize-default-filter/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/customize-default-filter/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/customize-default-filter" %}

## Customizing filter menu operators list

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt component allows customization of the default filter operator list using the [filterSettings.operators](https://ej2.syncfusion.com/angular/documentation/api/gantt/filterSettings/#operators) property. This enables you to define a tailored set of operators displayed in the filter menu based on data type.

You can configure operators for different types using the following options: 

- `stringOperator` – custom string operators  
- `numberOperator` – custom number operators  
- `dateOperator` – custom date operators  
- `booleanOperator` – custom boolean operators

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/filter-menu-operators/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/filter-menu-operators/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/filter-menu-operators" %}