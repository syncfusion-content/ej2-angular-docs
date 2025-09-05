---
layout: post
title: Templates in Angular MultiSelect component | Syncfusion
description: Learn here all about Templates in Syncfusion Angular MultiSelect component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Templates 
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Angular MultiSelect component

The MultiSelect component provides comprehensive template customization options for list items, group headers, selected values, headers and footers. These templates use the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Template engine to compile and render elements with full data binding support, enabling rich UI customization for various use cases such as displaying complex data structures, creating multi-column layouts, and providing contextual information.

## Item template

The content of each list item within the MultiSelect can be customized using the [itemTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#itemtemplate) property. This template receives the data item as context, allowing access to all properties for custom rendering.

In the following sample, each list item displays data in a two-column layout to show relevant information effectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
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

The display of currently selected values in the MultiSelect input element can be customized using the [valueTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#valuetemplate) property. This template affects only the visual representation of selected items in the input field, not the underlying component values.

In the following sample, selected values appear as combined text displaying both `FirstName` and `City` separated by a hyphen in the MultiSelect input field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
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

The group header titles that categorize sub-items can be customized using the [groupTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#grouptemplate) property. This template applies to both inline and floating group header styles and receives the group data as context.

In the following sample, employees are grouped by city with custom group header styling.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
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

The header element appears at the top of the popup list and can display custom content using the [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#headertemplate) property. This template is useful for adding titles, instructions, or column headers for structured data display.

In the following sample, the header and list items are designed as a two-column grid layout with appropriate column headers.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
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

The footer element appears at the bottom of the popup list and can contain summary information or additional actions using the [footerTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#footertemplate) property. Common uses include displaying item counts, action buttons, or additional navigation options.

In the following sample, the footer displays the total count of available list items in the MultiSelect.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
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

The MultiSelect supports custom design for the popup list content when no data is available or no search matches are found using the [noRecordsTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#norecordstemplate) property. This template enhances user experience by providing clear feedback about data availability.

In the following sample, the popup displays a custom notification when no data is available.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/norecords-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="template.html" %}
{% include code-snippet/multiselect/norecords-template-cs1/src/template.html %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/multiselect/norecords-template-cs1/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/norecords-template-cs1" %}

## Action failure template

The popup list content can be customized when data fetch requests fail at the remote server using the [actionFailureTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#actionfailuretemplate) property. This template provides users with appropriate error messaging and potential recovery actions.

In the following sample, the MultiSelect displays a custom error notification when data fetch requests fail.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/norecords-template-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="template.html" %}
{% include code-snippet/multiselect/norecords-template-cs2/src/template.html %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/multiselect/norecords-template-cs2/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/norecords-template-cs2" %}

## See Also

* [How to bind the data](./data-binding)
* [How to group the data using header](./grouping)
* [How to customize the options in MultiSelect](./chip-customization)