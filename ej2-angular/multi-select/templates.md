---
layout: post
title: Templates in Angular MultiSelect Dropdown | Syncfusion
description: Customize the Angular MultiSelect Dropdown list items, group headers, selected value, header, footer, and summary tag using template engine support.
platform: ej2-angular
control: Templates 
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Angular MultiSelect Dropdown

The MultiSelect component provides comprehensive template customization options for list items, group headers, selected values, headers and footers. These templates use the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Template engine to compile and render elements with full data binding support, enabling rich UI customization for various use cases such as displaying complex data structures, creating multi-column layouts, and providing contextual information.

## Item template

The content of each list item within the MultiSelect can be customized using the [itemTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/index-default#itemtemplate) property. This template receives the data item as context, allowing access to all properties for custom rendering.

In the following sample, each list item displays data in a two-column layout to show relevant information effectively.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/multiselect/item-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="template.html" %}
{% include code-snippet/multiselect/item-template-cs1/src/template.html %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/multiselect/item-template-cs1/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/item-template-cs1" %}

## Value template

The display of currently selected values in the MultiSelect input element can be customized using the [valueTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/index-default#valuetemplate) property. This template affects only the visual representation of selected items in the input field, not the underlying component values.

In the following sample, selected values appear as combined text displaying both `FirstName` and `City` separated by a hyphen in the MultiSelect input field.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/multiselect/value-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="template.html" %}
{% include code-snippet/multiselect/value-template-cs1/src/template.html %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/multiselect/value-template-cs1/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/value-template-cs1" %}

## Group template

The group header titles that categorize sub-items can be customized using the [groupTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/index-default#grouptemplate) property. This template applies to both inline and floating group header styles and receives the group data as context.

In the following sample, employees are grouped by city with custom group header styling.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/multiselect/group-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="template.html" %}
{% include code-snippet/multiselect/group-template-cs1/src/template.html %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/multiselect/group-template-cs1/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/group-template-cs1" %}

## Header template

The header element appears at the top of the popup list and can display custom content using the [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/index-default#headertemplate) property. This template is useful for adding titles, instructions, or column headers for structured data display.

In the following sample, the header and list items are designed as a two-column grid layout with appropriate column headers.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/multiselect/header-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="template.html" %}
{% include code-snippet/multiselect/header-template-cs1/src/template.html %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/multiselect/header-template-cs1/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/header-template-cs1" %}

## Footer template

The footer element appears at the bottom of the popup list and can contain summary information or additional actions using the [footerTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/index-default#footertemplate) property. Common uses include displaying item counts, action buttons, or additional navigation options.

In the following sample, the footer displays the total count of available list items in the MultiSelect.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/multiselect/footer-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="template.html" %}
{% include code-snippet/multiselect/footer-template-cs1/src/template.html %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/multiselect/footer-template-cs1/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/footer-template-cs1" %}

## No records template

The MultiSelect supports custom design for the popup list content when no data is available or no search matches are found using the [noRecordsTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/index-default#norecordstemplate) property. This template enhances user experience by providing clear feedback about data availability.

In the following sample, the popup displays a custom notification when no data is available.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/multiselect/norecords-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/multiselect/norecords-template-cs1/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/norecords-template-cs1" %}

## Action failure template

The popup list content can be customized when data fetch requests fail at the remote server using the [actionFailureTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/index-default#actionfailuretemplate) property. This template provides users with appropriate error messaging and potential recovery actions.

In the following sample, the MultiSelect displays a custom error notification when data fetch requests fail.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/multiselect/norecords-template-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/multiselect/norecords-template-cs2/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/norecords-template-cs2" %}

## Summary Tag Template

The Summary Tag Template feature displays selected items as a formatted summary text in the input field instead of listing all selections individually. This is especially useful in CheckBox mode when working with large datasets and using the SelectAll option, as it significantly improves performance.

The [summaryTagCount](../api/multi-select#summarytagcount) property sets a threshold—when the number of selected items exceeds this threshold, the [summaryTagTemplate](../api/multi-select#summarytagtemplate) displays a custom formatted text instead of individual items.

### Template Placeholder Properties

The following properties are available for use in the summary template placeholders:

| Placeholder | Description |
|-------------|-------------|
| `${selectedCount}` | Total count of currently selected items |
| `${totalCount}` | Total number of items in the data source |

In the following sample, the Summary Tag Template displays the count of selected items when the threshold is exceeded.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/multiselect/summary-tag-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/summary-tag-template-cs1" %}

> **Limitation:** The Summary Tag Template feature only works in CheckBox mode because it has a built-in SelectAll option for bulk selection, which triggers the need for performance optimization. Other modes (Default, Box, Delimiter) don't support SelectAll and use different display formats, making template-based formatting unnecessary.

> **Note:** When you set a threshold value and preselected items exceed it, the summary template displays formatted text instead of individual items. If `summaryTagTemplate` and `summaryTagCount` are not provided, the Summary Tag Template feature is automatically enabled when records or preselected items exceed 1000, displaying a default summary format for better performance.

## See Also

* [How to bind the data](./data-binding)
* [How to group the data using header](./grouping)
* [How to customize the options in MultiSelect](./chip-customization)