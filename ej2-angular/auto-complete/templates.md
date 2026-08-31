---
layout: post
title: Templates in Angular AutoComplete | Syncfusion®
description: Customize every part of the Angular AutoComplete suggestion list with item, group, header, footer, no-records, and action-failure templates.
platform: ej2-angular
control: Templates 
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Angular AutoComplete

The AutoComplete component provides several options to customize the list items, group title, header, and footer elements.

## Item template

The content of each list item within the AutoComplete can be customized using the [`itemTemplate`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#itemtemplate) property.

In the following sample, each list item uses a two-column layout to display the relevant information.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/item-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/item-template-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="itemTemplate.html" %}
{% include code-snippet/autocomplete/item-template-cs1/src/itemTemplate.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/item-template-cs1" %}

## Group template

The group header title under which sub-items are categorized can be customized using the [`groupTemplate`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#grouptemplate) property. This template is common to both the inline and floating group header templates.

In the following sample, employees are grouped by city.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/group-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/group-template-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="groupTemplate.html" %}
{% include code-snippet/autocomplete/group-template-cs1/src/groupTemplate.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/group-template-cs1" %}

## Header template

The header element is shown statically at the top of the suggestion list items within the AutoComplete, and any custom element can be displayed in the header using the [`headerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#headertemplate) property.

In the following sample, the list items and their headers are designed and displayed as two columns, similar to multiple columns of a grid.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/header-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/header-template-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="headerTemplate.html" %}
{% include code-snippet/autocomplete/header-template-cs1/src/headerTemplate.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/header-template-cs1" %}

## Footer template

The AutoComplete has options to show a footer element at the bottom of the list items in the suggestion list. Here, you can place any custom element as a footer element using [`footerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#footertemplate) property.

In the following sample, footer element displays the total number of list items present in the AutoComplete.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/footer-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/footer-template-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="footerTemplate.html" %}
{% include code-snippet/autocomplete/footer-template-cs1/src/footerTemplate.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/footer-template-cs1" %}

## No records template

The AutoComplete supports custom design for the popup list content when no data is available or no search matches are found, using the [`noRecordsTemplate`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#norecordstemplate) property.

In the following sample, popup list content displays the notification of no data available.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/norecords-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/norecords-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/norecords-cs1" %}

## Action failure template

There is also an option to custom design the popup list content when the data fetch request fails at the remote server. This can be achieved using the
[actionFailureTemplate](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#actionfailuretemplate) property.

In the following sample, when the data fetch request fails, the AutoComplete displays the notification.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/norecords-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/norecords-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/norecords-cs2" %}

## See Also

* [How to achieve filtering](./filtering.md)
* [How to group the data using header](./grouping#grouping)
* [How to show the list items with icon](./how-to/icon-support.md)