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

The Tab component can be configured to create step-by-step wizard interfaces by dynamically controlling tab accessibility and navigation. Tab items can be disabled dynamically by passing the index and boolean value with the [`enableTab`](https://ej2.syncfusion.com/angular/documentation/api/tab/#enabletab) method and programmatically select specific tabs using the [`select`](https://ej2.syncfusion.com/angular/documentation/api/tab/#select) method by passing the index or HTML element.

Create the following contents for each tab in the wizard:
1. **Search tab:**
   Created with [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) to select the source, destination and type of ticket. A [DatePicker](https://ej2.syncfusion.com/angular/documentation/datepicker/getting-started) for choosing the date of journey.
2. **Train tab:**
   Based on the selected start and end point, populated Grid with random list of available seats and train list. Initially define the columns and row selected event for validating, after the source and destination chosen update the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource) for the Grid.
3. **Passenger tab:**
   A table with Textbox, Numeric, DropDownList for adding passenger name, age, gender and preferred berth/seat. Add validation on entering passenger details to proceed.
4. **Payment tab:**
   Calculate the ticket cost based on location, passenger count and ticket type. Generate data for Grid with passenger details, train number and ticket cost summary.

You can navigate back on each tab using buttons available in it and tabs are [`disabled`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItem/#disabled) to prevent navigation through tab header click actions. Once you complete the wizard all the data gets cleared and wizard returns to the starting tab.

In the following demo, designed for simple train reservation module that enables/disables tab items based on sequential validation of each Tab content.

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