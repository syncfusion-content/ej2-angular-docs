---
layout: post
title: Filtering in Angular AutoComplete | Syncfusion®
description: Filter Angular AutoComplete data as you type using StartsWith, EndsWith, or Contains modes, with debounce, case sensitivity, and diacritics support.
platform: ej2-angular
control: Filtering 
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in Angular AutoComplete

The AutoComplete component has built-in support for filtering data items. The filter operation starts as soon as you type in the component.

## Change the filter type

Determines the filter type the component should use during the search action. The available [`filterType`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#filtertype) values and their supported data types are:

| **Filter Type** | **Description** | **Supported Types** |
| --- | --- | --- |
| StartsWith | Checks whether a value begins with the specified value. | String |
| EndsWith | Checks whether a value ends with the specified value. | String |
| Contains | Checks whether a value contains the specified value. | String |

The following example filters the data with the `StartsWith` type.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs6" %}

## Filter item count

Specify the number of suggestion items to display using the [`suggestionCount`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#suggestioncount) property of the AutoComplete.

The following example restricts the suggestion list to 5 items.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs7" %}

## Limit the minimum filter character

You can set the minimum number of characters required to filter the data on the AutoComplete. This is done by setting the [`minLength`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#minlength) property on the AutoComplete.

In the following example, the remote request does not fetch search data until the search key contains three characters.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/getting-started-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs8" %}

## Case sensitive filtering

Data items can be filtered with or without case sensitivity by setting the [`ignoreCase`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#ignorecase) property of the AutoComplete.

The following sample shows how to filter the data with case sensitivity.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/getting-started-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs9" %}

## Diacritics Filtering

The AutoComplete component supports diacritics filtering, which ignores the [diacritics](https://en.wikipedia.org/wiki/Diacritic) and makes it easier to filter results in lists that contain international characters when the [`ignoreAccent`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#ignoreaccent) property is enabled.

In the following sample, data with diacritics is bound as the `dataSource` for the AutoComplete.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/getting-started-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs10" %}

## Debounce delay

Use the [`debounceDelay`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#debouncedelay) property for filtering to set a delay, in milliseconds. This reduces the frequency of filtering as you type, enhancing performance and responsiveness for a smoother user experience. By default, a `debounceDelay` of `300ms` is set. To disable this feature entirely, set the value to `0ms`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
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