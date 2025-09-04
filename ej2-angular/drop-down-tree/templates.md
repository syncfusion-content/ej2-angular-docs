---
layout: post
title: Templates in Angular Dropdown Tree component | Syncfusion
description: Learn here all about Templates in Syncfusion Angular Dropdown Tree component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dropdown Tree
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Angular Dropdown Tree component

The Dropdown Tree provides support to customize each list item, header, and footer elements. It uses the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Template engine to compile and render the elements properly.

## Item template

Customize the content of each list item within the Dropdown Tree using the [itemTemplate](https://ej2.syncfusion.com/angular/documentation/api/drop-down-tree/#itemtemplate) property. This allows you to display complex data structures with custom formatting and styling.

In the following sample, the Dropdown Tree list items display employee information including **name** and **job** details using the **itemTemplate** property.

{% raw %}
The template expression should be provided inside the ${...} interpolation syntax and {{...}} for ng-template.
{% endraw %} 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdowntree/template/itemTemplate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/template/itemTemplate-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdowntree/template/itemTemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdowntree/template/itemTemplate-cs1" %}

## Value template

The currently selected value displayed in the Dropdown Tree input element can be customized using the [valueTemplate](https://ej2.syncfusion.com/angular/documentation/api/drop-down-tree/#valuetemplate) property. This template controls how selected items appear in the input field.

In the following sample, the selected value displays as combined text showing both `Name` and `Job` separated by a hyphen.

{% raw %}
The template expression should be provided inside the ${...} interpolation syntax and {{...}} for ng-template.
{% endraw %}

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdowntree/template/valueTemplate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/template/valueTemplate-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdowntree/template/valueTemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/dropdowntree/template/valueTemplate-cs1" %}

## Header template

The header element appears statically at the top of the popup list items within the Dropdown Tree. Use the [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/drop-down-tree/#headertemplate) property to place custom elements as header content.

In the following sample, the header is customized with a custom element that provides context for the dropdown content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdowntree/template/headerTemplate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/template/headerTemplate-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdowntree/template/headerTemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdowntree/template/headerTemplate-cs1" %}

## Footer template

The Dropdown Tree supports displaying a footer element at the bottom of the popup list items. Use the [footerTemplate](https://ej2.syncfusion.com/angular/documentation/api/drop-down-tree/#footertemplate) property to place custom elements as footer content.

In the following sample, the footer element displays the total number of employees available in the Dropdown Tree.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdowntree/template/footerTemplate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/template/footerTemplate-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdowntree/template/footerTemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdowntree/template/footerTemplate-cs1" %}

## No records template

The Dropdown Tree supports displaying custom content when no matches are found during search operations. Use the [noRecordsTemplate](https://ej2.syncfusion.com/angular/documentation/api/drop-down-tree/#norecordstemplate) property to customize the no data message.

In the following sample, the popup list displays a custom notification when no data is available.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdowntree/template/noRecordsTemplate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/template/noRecordsTemplate-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdowntree/template/noRecordsTemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdowntree/template/noRecordsTemplate-cs1" %}

## Action failure template

The Dropdown Tree provides options to customize the popup list content when data fetch requests fail at the remote server. Use the [actionFailureTemplate](https://ej2.syncfusion.com/angular/documentation/api/drop-down-tree/#actionfailuretemplate) property to display custom error messages.

In the following sample, when the data fetch request fails, the Dropdown Tree displays a custom error notification.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdowntree/template/actionFailureTemplate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/template/actionFailureTemplate-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdowntree/template/actionFailureTemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdowntree/template/actionFailureTemplate-cs1" %}

## Custom template for selected items display

When multiple items are selected via checkbox or multi-selection, the Dropdown Tree can display a custom template instead of showing all selected item text. Configure this by setting the [mode](https://ej2.syncfusion.com/angular/documentation/api/drop-down-tree/#mode) property to ***Custom*** and using the [customTemplate](https://ej2.syncfusion.com/angular/documentation/api/drop-down-tree/#customtemplate) property.

When the **mode** property is set to **Custom**, the Dropdown Tree displays the default template value **(${value.length} item(s) selected)** such as **1 item(s) selected** or **2 item(s) selected**. Customize this default template using the **customTemplate** property.

In the following sample, the Dropdown Tree renders with the default value of the **customTemplate** property displaying **1 item(s) selected** or **2 item(s) selected**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdowntree/template/customTemplate-mode-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/template/customTemplate-mode-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdowntree/template/customTemplate-mode-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdowntree/template/customTemplate-mode-cs1" %}

In the following sample, the Dropdown Tree renders with a custom value for the **customTemplate** property displaying **Selected items count: 2**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdowntree/template/customTemplate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/template/customTemplate-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdowntree/template/customTemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdowntree/template/customTemplate-cs1" %}