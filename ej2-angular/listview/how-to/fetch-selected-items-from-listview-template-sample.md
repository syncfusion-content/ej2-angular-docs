---
layout: post
title: Fetch selected items from ListView template sample in Angular ListView component | Syncfusion
description: Learn here all about Fetch selected items from ListView template sample in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView
documentation: ug
domainurl: ##DomainURL##
---

# Fetch selected items from ListView template sample in Angular ListView component

The ListView component supports wrapping list items into a group based on the category. The category of each list item can be mapped with groupBy field of the data source. You can display grouped list items count in the list-header using the group header template. Refer to the following code sample to display grouped list item count.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/item-count-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/item-count-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/item-count-cs3" %}
