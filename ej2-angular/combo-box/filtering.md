---
layout: post
title: Filtering in Angular Combo box component | Syncfusion
description: Learn here all about Filtering in Syncfusion Angular Combo box component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filtering 
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in Angular Combo box component

The ComboBox has built-in support to filter the data items when [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/combo-box/#allowfiltering) enabled. The filter operation starts as soon as you start typing characters in the component.

By making use of [filtering](https://ej2.syncfusion.com/angular/documentation/api/combo-box/#filtering) event, you can filter required data and return the data to ComboBox via `updateData` method. So that those filtered items get displayed in the popup.

To get started quickly with Grouping and Filtering in angular ComboBox component, you can check the video below.

{% youtube "https://www.youtube.com/watch?v=TyePpp8m7pc" %}


The following sample illustrates how to query the data source and pass the data to the ComboBox through the `updateData` method in `filtering` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/combobox/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/combobox/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/combobox/getting-started-cs6" %}

## Limit the minimum filter character

When filtering the list items, you can set the limit for character count to raise remote request and fetch filtered data on the ComboBox. This can be done by manual validation within the filter event handler.

In the following example, the remote request does not fetch the search data until the search key contains three characters.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/combobox/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/combobox/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/combobox/getting-started-cs7" %}

## Change the filter type

While filtering, you can change the filter type to `contains`, `startsWith`, or `endsWith` for string type within the filter event handler.

In the following examples, data filtering is done with `endsWith` type.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/combobox/getting-started-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/combobox/getting-started-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/combobox/getting-started-cs8" %}

## Case sensitive filtering

Data items can be filtered either with or without case sensitivity using the DataManager. This can be done by passing the fourth optional parameter of the `where` clause.

The following example shows how to perform case-sensitive filter.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/combobox/getting-started-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/combobox/getting-started-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/combobox/getting-started-cs9" %}

## Diacritics Filtering

The ComboBox supports diacritics filtering which will ignore the [diacritics](https://en.wikipedia.org/wiki/Diacritic) and makes it easier to filter the results in international characters lists when the [ignoreAccent](https://ej2.syncfusion.com/angular/documentation/api/combo-box/#ignoreaccent) is enabled.

In the following sample,data with diacritics are bound as dataSource for ComboBox.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/combobox/getting-started-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/combobox/getting-started-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/combobox/getting-started-cs10" %}

## Debounce delay

You can use the [debounceDelay](https://ej2.syncfusion.com/angular/documentation/api/combo-box/#debouncedelay) property for filtering, enabling you to set a delay in milliseconds. This functionality helps reduce the frequency of filtering as you type, enhancing performance and responsiveness for a smoother user experience.By default, a DebounceDelay of 300ms is set. If you wish to disable this feature entirely, you can set it to 0ms.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/combobox/getting-started-cs20/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/combobox/getting-started-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/combobox/getting-started-cs20" %}

## See Also

* [How to achieve autofill while filtering](./how-to#autofill-supported-with-combobox)
* [How to group the data using header](./grouping/)