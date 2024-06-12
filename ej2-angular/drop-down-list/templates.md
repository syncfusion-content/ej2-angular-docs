---
layout: post
title: Templates in Angular Dropdown List Component | Syncfusion
description: Learn here all about templates in Syncfusion Essential Angular Dropdown List component, it's elements and more.
platform: ej2-angular
control: Templates 
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Angular Dropdown List Component

The DropDownList has been provided with several options to customize each list items, group title, selected value, header, and footer elements.

To get started quickly with templates in angular DropDownList component, you can check the video below.

{% youtube "https://www.youtube.com/watch?v=Uth3NvzdgdU" %}

## Item template

The content of each list item within the DropDownList can be customized with the help of [itemTemplate](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#itemtemplate) property.

In the following sample, each list item is split into two columns to display relevant data's.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/dropdownlist/template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/template-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/dropdownlist/template-cs1/src/template.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/template-cs1" %}

## Value template

The currently selected value that is displayed by default on the DropDownList input element can be customized using the [valueTemplate](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#valuetemplate) property.

In the following sample, the selected value is displayed as a combined text of both `FirstName` and `City`in the DropDownList input, which is separated by a hyphen.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/value-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/dropdownlist/value-template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/value-template-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/dropdownlist/value-template-cs1/src/template.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/value-template-cs1" %}

## Group template

The group header title under which appropriate sub-items are categorized can also be customize with the help of [groupTemplate](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#grouptemplate-string) property. This template is common for both inline and floating group header template.

In the following sample, employees are grouped according to their city.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/group-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/dropdownlist/group-template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/group-template-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/dropdownlist/group-template-cs1/src/template.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/group-template-cs1" %}

## Header template

The header element is shown statically at the top of the popup list items within the
DropDownList, and any custom element can be placed as a header element using the
[headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#headertemplate) property.

In the following sample, the list items and its headers are designed and displayed as two columns similar to multiple columns of the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/header-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/dropdownlist/header-template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/header-template-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/dropdownlist/header-template-cs1/src/template.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/header-template-cs1" %}

## Footer template

The DropDownList has options to show a footer element at the bottom of the list items in the popup list. Here, you can place any custom element as a footer element using
the [footerTemplate](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#footertemplate) property.

In the following sample, footer element displays the total number of list items present in the DropDownList

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/footer-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/dropdownlist/footer-template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/footer-template-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/dropdownlist/footer-template-cs1/src/template.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/footer-template-cs1" %}

## No records template

The DropDownList is provided with support to custom design the popup list content when no data is found and no matches found on search with the help of
[noRecordsTemplate](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#norecordstemplate) property.

In the following sample, popup list content displays the notification of no data available.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/norecords-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/dropdownlist/norecords-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/norecords-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/norecords-cs1" %}

## Action failure template

There is also an option to custom design the popup list content when the data fetch request fails at the remote server. This can be achieved using the [actionFailureTemplate](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#actionfailuretemplate) property.

In the following sample, when the data fetch request fails, the DropDownList displays the notification.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/norecords-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/dropdownlist/norecords-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/norecords-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/norecords-cs2" %}

## See Also

* [How to achieve filtering](./filtering)
* [How to group the data using header](./grouping)
* [How to show the list items with icon](./how-to/icons-support)
* [How to render tooltip for the options](./how-to/tooltip)