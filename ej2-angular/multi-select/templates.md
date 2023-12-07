---
layout: post
title: Templates in Angular Multi select component | Syncfusion
description: Learn here all about Templates in Syncfusion Angular Multi select component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Templates 
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Angular Multi select component

The MultiSelect has been provided with several options to customize each list item, group title, selected value, header, and footer elements. It uses the Essential JS 2 `Template engine` to compile and render the elements properly.

## Item template

The content of each list item within the MultiSelect can be customized with the help of [itemTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#itemtemplate) property.

In the following sample, each list item is split into two columns to display relevant data's.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/item-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/multiselect/item-template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/item-template-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/multiselect/item-template-cs1/src/template.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/item-template-cs1" %}

## Value template

The currently selected value that is displayed by default on the MultiSelect input element can be customized using the [valueTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#valuetemplate) property.

In the following sample, the selected value is displayed as a combined text of both `FirstName` and `City` in the MultiSelect input, which is separated by a hyphen.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/value-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/multiselect/value-template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/value-template-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/multiselect/value-template-cs1/src/template.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/value-template-cs1" %}

## Group template

The group header title under which appropriate sub-items are categorized can also be customize with the help of [groupTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#grouptemplate) property. This template is common for both inline and floating group header template.

In the following sample, employees are grouped according to their city.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/group-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/multiselect/group-template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/group-template-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/multiselect/group-template-cs1/src/template.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/group-template-cs1" %}

## Header template

The header element is shown statically at the top of the popup list items within the MultiSelect, and any custom element can be placed as a header element using the [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#headertemplate) property.

In the following sample, the list items and its headers are designed and displayed as two columns similar to multiple columns of the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/header-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/multiselect/header-template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/header-template-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/multiselect/header-template-cs1/src/template.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/header-template-cs1" %}

## Footer template

The MultiSelect has options to show a footer element at the bottom of the list items in the popup list. Here, you can place any custom element as a footer element using the [footerTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#footertemplate) property.

In the following sample, footer element displays the total number of list items present in the MultiSelect.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/footer-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/multiselect/footer-template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/footer-template-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/multiselect/footer-template-cs1/src/template.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/footer-template-cs1" %}

## No records template

The MultiSelect is provided with support to custom design the popup list content when no data is found and no matches found on search with the help of [noRecordsTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#norecordstemplate) property.

In the following sample, popup list content displays the notification of no data available.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/norecords-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/multiselect/norecords-template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/norecords-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/norecords-template-cs1" %}

## Action failure template

There is also an option to custom design the popup list content when the data fetch request fails at the remote server. This can be achieved using the [actionFailureTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#actionfailuretemplate) property.

In the following sample, when the data fetch request fails, the MultiSelect displays the notification.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/norecords-template-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/multiselect/norecords-template-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/norecords-template-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/norecords-template-cs2" %}

## See Also

* [How to bind the data](./data-binding/)
* [How to group the data using header](./grouping/)
* [How to customize the options in MultiSelect](./chip-customization/)