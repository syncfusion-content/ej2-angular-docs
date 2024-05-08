---
layout: post
title: Filter in Angular Auto complete component | Syncfusion
description: Learn here all about Filter in Syncfusion Angular Auto complete component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filter 
documentation: ug
domainurl: ##DomainURL##
---

# Filter in Angular Auto complete component

The AutoComplete data can be filtered based on both text and value fields using `predicate` of dataManager through filtering event. The filtered data can be again updated through `updateData` method.

In the following example, filtering is done based on text and value fields.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/filter-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/filter-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/filter-cs1" %}