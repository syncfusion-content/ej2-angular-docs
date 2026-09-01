---
layout: post
title: How to sort the columns in Angular Query Builder UI | Syncfusion
description: Sort the available columns in the Syncfusion Angular Query Builder UI ascending or descending using the sortDirection property on the field list.
platform: ej2-angular
control: Sort columns 
documentation: ug
domainurl: ##DomainURL##
---

# How to sort the columns in Angular Query Builder UI

Control the order in which fields appear in the Query Builder field list by setting the [`sortDirection`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#sortdirection) property. This property sorts the available fields displayed in the field dropdown, helping users find fields more easily.

The sortDirection property supports the following values:

* Ascending - Sorts fields in ascending alphabetical order.
* Descending - Sorts fields in descending alphabetical order.

If sortDirection is not specified, the field list is displayed in its original order.

The following example demonstrates sorting the field list in ascending order. After sorting is applied, the available fields are displayed alphabetically in the Query Builder field dropdown.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/default-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/default-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/default-cs9" %}
