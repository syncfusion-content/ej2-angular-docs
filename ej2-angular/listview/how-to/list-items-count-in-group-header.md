---
layout: post
title: Show item count in Angular ListView group header | Syncfusion
description: Learn here all about List items count in group header in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView
documentation: ug
domainurl: ##DomainURL##
---

# List items count in group header in Angular ListView component

The ListView component enables grouping of list items based on a specified category. Each item's category can be mapped using the `groupBy` field in the data source. To display the count of items within each group, use the `groupTemplate` property to customize the group header. The group header template allows you to show both the group name and the number of items in that group, providing a clearer overview for users.

Refer to the following code sample to display the count of grouped list items in the group header.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/item-count-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/item-count-cs4/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/item-count-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/listview/item-count-cs4" %}