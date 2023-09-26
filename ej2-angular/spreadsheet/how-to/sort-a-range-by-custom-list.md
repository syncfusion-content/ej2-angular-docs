---
layout: post
title: Sort a range by custom list in Angular Spreadsheet component | Syncfusion
description: Learn here all about Sort a range by custom list in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sort a range by custom list 
documentation: ug
domainurl: ##DomainURL##
---

# Sort a range by custom list in Angular Spreadsheet component

You can also define the sorting of cell values based on your own customized personal list. In this article, custom list is achieved using `custom sort comparer`.

In the following demo, the `Trustworthiness` column is sorted based on the custom lists `Perfect`, `Sufficient`, and `Insufficient`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/custom-sort-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/spreadsheet/custom-sort-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/custom-sort-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/custom-sort-cs1" %}

## See Also

* [Filtering](../filter)
* [Sorting](../sort)
* [Hyperlink](../link)
