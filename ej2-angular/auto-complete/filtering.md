---
layout: post
title: Filtering in Angular Auto complete component | Syncfusion
description: Learn here all about Filtering in Syncfusion Angular Auto complete component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filtering 
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in Angular Auto complete component

The AutoComplete has built-in support to filter data items. The filter operation starts as soon as you start typing characters in the component.

## Change the filter type

Determines on which filter type, the component needs to be considered on search action. The available [`filterType`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#filtertype) and its supported data types are

| **Filter Type** | **Description** | **Supported Types** |
| --- | --- |
| StartsWith | Checks whether a value begins with the specified value. | String |
| EndsWith | Checks whether a value ends with specified value. | String |
| Contains | Checks whether a value contains with specified value. | String |

The following examples shows the data filtering is done with `StartsWith` type.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs6" %}

## Filter item count

You can specify the filter suggestion item count through [`suggestionCount`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#suggestioncount) property of AutoComplete.

The following examples, to restrict the suggestion list item counts as 5.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs7" %}

## Limit the minimum filter character

You can set the limit for the character count to filter the data on the AutoComplete. This can be done by set the [`minLength`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#minlength) property to AutoComplete.

In the following example, the remote request doesn't fetch the search data, until the search key contains three characters.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/getting-started-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs8" %}

## Case sensitive filtering

Data items can be filtered either with or without case sensitivity using the DataManager. This can be done by setting the [`ignoreCase`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#ignorecase) property of AutoComplete.

The following sample depicts how to filter the data with case-sensitive.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/getting-started-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs9" %}

## Diacritics Filtering

An AutoComplete supports diacritics filtering which will ignore the [diacritics](https://en.wikipedia.org/wiki/Diacritic) and makes it easier to filter the results in international characters lists when the [ignoreAccent](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#ignoreaccent) is enabled.

In the following sample,data with diacritics are bound as dataSource for AutoComplete.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/getting-started-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs10" %}

## Debounce delay

You can use the [debounceDelay](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#debouncedelay) property for filtering, enabling you to set a delay in milliseconds. This functionality helps reduce the frequency of filtering as you type, enhancing performance and responsiveness for a smoother user experience.By default, a DebounceDelay of 300ms is set. If you wish to disable this feature entirely, you can set it to 0ms.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/getting-started-cs20/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs20" %}

## See Also

* [How to achieve autofill while filtering](./how-to/autofill)
* [How to group the data using header](./grouping)
* [How to highlight the search data](./how-to/custom-search)