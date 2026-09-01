---
layout: post
title: How to create wizard using Tab in Angular Tab | Syncfusion
description: Build a multi-step Angular Tab wizard with enableTab and select methods to drive sequential form validation across tabs.
platform: ej2-angular
control: Tab 
documentation: ug
domainurl: ##DomainURL##
---

# How to create wizard using Tab in Angular Tab

The Tab component can drive step-by-step wizard interfaces by dynamically controlling tab accessibility and selection. Disable tab items by passing the index and boolean argument to the [`enableTab`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#enabletab) method; programmatically activate a specific tab using the [`select`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#select) method by passing the index or HTML element.

## Wizard layout

1. **Search tab:** Use a [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) to choose source, destination, and ticket type, and a [DatePicker](https://ej2.syncfusion.com/angular/documentation/datepicker/getting-started) for the journey date.
2. **Train tab:** Populate a Grid with available seats and trains based on the chosen source and destination. Define the columns, handle row selection for validation, and refresh the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid#datasource) once those values are chosen.
3. **Passenger tab:** Render a table with TextBox, NumericTextBox, and DropDownList inputs for passenger name, age, gender, and berth preference. Validate entries before allowing forward navigation.
4. **Payment tab:** Calculate the ticket cost from location, passenger count, and ticket type. Render a summary Grid with passenger details, train number, and total cost.

Use **Back** buttons inside each tab to return to the previous step. While navigating, mark all other tabs as [`disabled`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItemDirective#disabled) to prevent skipping via the Tab header. When the wizard completes, clear all data and reset selection to the first tab.

> **Validation pattern:** Bind each tab's **Next** button (or its `[disabled]` state) to its form's `invalid` state so users can only advance once required fields are satisfied.

In the following demo, designed for a simple train reservation module, tab items are enabled or disabled based on sequential validation of each Tab content.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/tab/wizard-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/wizard-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/wizard-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/wizard-cs1" %}

## See Also

* [Show/Hide Tab item](./show-hide-tab-item)
* [Load Tab items dynamically](./load-tab-items-dynamically)