---
layout: post
title: Filter bar in Angular Treegrid component | Syncfusion
description: Learn here all about Filter bar in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filter bar 
documentation: ug
domainurl: ##DomainURL##
---

# Filter bar in Angular Treegrid component

By setting the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowfiltering) to true, the filter bar row will render next to the header, which allows you to filter data. You can filter the records with different expressions depending upon the column type.

**Filter bar expressions:**

You can enter the following filter expressions (operators) manually in the filter bar.

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
N/A |N/A | `Equal` operator will always be used for date filter. |Date
N/A |N/A |`Equal` operator will always be used for Boolean filter. |Boolean

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/filtering-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-cs4" %}

## Filter bar template with custom component

Customize the default filter bar component of a column by custom component using [`filter template`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#filtertemplate).

The following example demonstrates the way to use filter template for a column when using filter bar. In the following example, the [`DropdownList`](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started/) component is used to filter **priority** column using filter template.

You can check this video to learn about how to use Custom component in filter bar in Angular tree grid.

{% youtube "https://www.youtube.com/watch?v=LZQjc7DFni4" %}

Access the column information inside the NgTemplate and bind the attributes, values, or elements based on this column information.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filter-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/filter-template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filter-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filter-template-cs1" %}

## Change default filter bar operator

You can change the default filter operator by extending [`filterModule.filterOperators`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettings/#operators) property in [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#databound) event. In the following sample, we have changed the default operator for string typed columns as `contains` from `startsWith`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/filtering-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-cs5" %}