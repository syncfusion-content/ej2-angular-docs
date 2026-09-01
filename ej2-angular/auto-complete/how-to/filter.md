---
layout: post
title: Filter by text and value in Angular AutoComplete | Syncfusion®
description: Filter Angular AutoComplete results using both text and value fields with the dataManager predicate and updateData method for custom filtering.
platform: ej2-angular
control: Filter 
documentation: ug
domainurl: ##DomainURL##
---

# How to filter using both text and value field in Angular AutoComplete

AutoComplete data can be filtered by both the text and value fields using the `predicate` of the `DataManager`, via the filtering event. The filtered data can then be updated using the `updateData` method.

In the following example, filtering is performed based on the text and value fields.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/filter-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/filter-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/filter-cs1" %}