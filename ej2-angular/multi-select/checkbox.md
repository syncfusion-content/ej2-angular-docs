---
layout: post
title: Checkbox in Angular Multi select component | Syncfusion
description: Learn here all about Checkbox in Syncfusion Angular Multi select component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Checkbox 
documentation: ug
domainurl: ##DomainURL##
---

# Checkbox in Angular Multi select component

The MultiSelect has built-in support to select multiple values through checkbox, when [`mode`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#mode) property set as `CheckBox`.

To use checkbox, inject the `CheckBoxSelection` module in the MultiSelect.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/checkbox-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/multiselect/checkbox-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/checkbox-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/checkbox-cs1" %}

## Select All

The MultiSelect component has in-built support to select the all list items using `Select All` options in the header.

When the [`showSelectAll`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#showselectall) property is set to true, by default Select All text will show. You can customize the name attribute of the Select All option by using [`selectAllText`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#selectalltext).

For the unSelect All option, by default unSelect All text will show. You can customize the name attribute of the unSelect All option by using [`unSelectAllText`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#unselectalltext). You can customize the name attribute of the unSelect All option by using [`unSelectAllText`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#unselectalltext).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/checkbox-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/multiselect/checkbox-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/checkbox-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/checkbox-cs2" %}

## Selection Limit

Defines the limit of the selected items using [`maximumSelectionLength`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#maximumselectionlength).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/checkbox-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/multiselect/checkbox-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/checkbox-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/checkbox-cs3" %}

## Selection Reordering

Using [`enableSelectionOrder`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#enableselectionorder) to Reorder the selected items in popup visibility state.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/checkbox-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/multiselect/checkbox-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/checkbox-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/checkbox-cs4" %}

## See Also

* [How to bind the data](./data-binding/)
* [How to filter the bound data](./filtering/)
* [How to add custom value to the MultiSelect](./custom-value/)
* [How to render grouping with checkbox](./grouping/#grouping-with-checkbox).