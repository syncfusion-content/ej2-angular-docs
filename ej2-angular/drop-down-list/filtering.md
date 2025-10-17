---
layout: post
title: Filtering in Angular DropDownList Component | Syncfusion
description: Learn here all about the filtering capabilities in the Syncfusion Angular DropDownList component of Essential JS 2 and more.
platform: ej2-angular
control: DropDownList
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in Angular DropDownList Component

The DropDownList component provides built-in support for filtering data items when the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#allowfiltering) property is enabled. The filtering operation begins as soon as you start typing characters in the search box.

To display filtered items in the popup, you can filter the required data and return it to the DropDownList using the [`updateData`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/filteringEventArgs/#updatedata) method within the [filtering](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/filteringEventArgs/) event.

The following sample demonstrates how to query the data source and pass the filtered data to the DropDownList through the [`updateData`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/filteringEventArgs/#updatedata) method in the [filtering](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/filteringEventArgs/) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/getting-started-cs6" %}

## Limit the minimum filter character

You can set a minimum character count to begin the filtering process. This is achieved through manual validation within the filter event handler, preventing filtering until a specified number of characters are entered.

In the following example, the filtering process does not start until the search input contains at least three characters.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/getting-started-cs7" %}

## Change the filter type

While filtering, you can change the filter type to `contains`, `startsWith`, or `endsWith` for string type within the filtering event handler. You can also use the [filterType](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#filtertype) property to set the default filtering criteria.

| FilterType | Description | Supported Types |
|------------|-------------|-----------------|
| StartsWith | Checks whether a value begins with the specified value. | String |
| EndsWith | Checks whether a value ends with specified value. | String |
| Contains | Checks whether a value contains with specified value. | String |

The following example demonstrates data filtering using the `endsWith` operator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/getting-started-cs8" %}

## Case sensitive filtering

Filtering can be configured to be case-sensitive. This is achieved by passing `false` for the optional [`ignoreCase`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#ignorecase) parameter (the fourth parameter) of the `where` clause when creating the [`Query`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#query).

The following example demonstrates how to perform a case-sensitive filter.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/getting-started-cs9" %}

## Diacritics Filtering

The DropDownList component supports diacritics filtering, which helps to ignore [diacritics](https://en.wikipedia.org/wiki/Diacritic) and makes it easier to filter results from lists of international characters. This feature is enabled by setting the [ignoreAccent](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#ignoreaccent) property to `true`.

In the following sample, data containing diacritic characters is bound as the dataSource for the DropDownList.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/getting-started-cs10" %}

## Debounce delay

The [debounceDelay](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#debouncedelay) property allows you to set a delay time in milliseconds before the filtering action is triggered. This delay helps reduce the number of filtering requests as you type, improving performance and providing a smoother user experience. By default, [`debounceDelay`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#debouncedelay) is set to `0`, which means the debounce functionality is disabled. To enable it, specify a time in milliseconds.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs23/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs23/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/getting-started-cs23" %}

## See Also

* [How to limit the search result while filtering](./how-to/search-on-filtering)
* [How to highlight the matched characters in filtering](./how-to/highlight-filtering)
* [How to modify the result data using remote data source](./how-to/modify-data)