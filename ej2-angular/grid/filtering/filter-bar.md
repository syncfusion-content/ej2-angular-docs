---
layout: post
title: Filter bar in Angular Grid component | Syncfusion
description: Learn here all about Filter bar in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filter bar 
documentation: ug
domainurl: ##DomainURL##
---

# Filter bar in Angular Grid component

By defining the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowfiltering) to true, then filter bar row will be rendered next to header which allows you to filter data. You can filter the records with different expressions depending upon the column type.

**Filter bar Expressions:**

You can enter the following filter expressions(operators) manually in the filter bar.

Expression |Example |Description |Column Type
-----|-----|-----|-----
= |=value |equal |Number
!= |!=value |notequal |Number
> |>value |greaterthan |Number
< |<value |lessthan |Number
>= |>=value |greaterthanorequal |Number
<=|<=value|lessthanorequal |Number
* |*value |startswith |String
% |%value |endswith |String
N/A |N/A |Always **equal** operator will be used for Date filter |Date
N/A |N/A |Always **equal** operator will be used for Boolean filter |Boolean

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filtering1-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filtering1-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filtering1-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filtering1-cs1" %}

## Filter bar template with custom component

The [`filterBarTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filterbartemplate) is used to add a custom component for a particular column and this contains the following functions.
* **create** – It is used for creating custom components.
* **write** - It is used to wire events for custom components.

In the following sample dropdown is used  as custom component in EmployeeID column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filtering1-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filtering1-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filtering1-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filtering1-cs2" %}

## Change default filterbar operator

You can change the default filter operator by extending [`filterModule.filterOperators`](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#operators) property in [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event. In the following sample, we have changed the default operator for string typed columns as **contains** from **startsWith**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filtering1-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filtering1-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filtering1-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filtering1-cs3" %}

## See also

* [How to perform filter by using Wildcard and LIKE operator filter](./filtering/#wildcard-and-like-operator-filter)