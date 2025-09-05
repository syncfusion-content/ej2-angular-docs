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

The MultiSelect component provides built-in support for selecting multiple values through checkboxes when the [`mode`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#mode) property is set to `CheckBox`.

To enable checkbox functionality, inject the `CheckBoxSelection` module into the MultiSelect component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/checkbox-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/checkbox-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/checkbox-cs1" %}

## Select All

The MultiSelect component has built-in support for selecting all list items using the `Select All` option in the header.

When the [`showSelectAll`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#showselectall) property is set to true, the Select All text displays by default. The name attribute of the Select All option can be customized using the [`selectAllText`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#selectalltext) property.

For the unSelect All option, the unSelect All text displays by default. The name attribute of the unSelect All option can be customized using the [`unSelectAllText`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#unselectalltext) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/checkbox-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/checkbox-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/checkbox-cs2" %}

## Selection Limit

The limit for selected items can be defined using the [`maximumSelectionLength`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#maximumselectionlength) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/checkbox-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/checkbox-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/checkbox-cs3" %}

## Selection Reordering

The [`enableSelectionOrder`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#enableselectionorder) property enables reordering of selected items when the popup is visible.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/checkbox-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/checkbox-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/checkbox-cs4" %}

## See Also

* [How to bind the data](./data-binding)
* [How to filter the bound data](./filtering)
* [How to add custom value to the MultiSelect](./custom-value)
* [How to render grouping with checkbox](./grouping#grouping-with-checkbox).