---
layout: post
title: Sorting in Angular Mention | Syncfusion
description: Sort Angular Mention suggestion lists in Ascending, Descending, or None order using the sortOrder property to control how matches are presented to the user.
platform: ej2-angular
control: Sorting 
documentation: ug
domainurl: ##DomainURL##
---

# Sorting in Angular Mention

You can display the suggestions list items in a specific order. It has possible types as `Ascending`, `Descending`, and `None` in the [sortOrder](https://ej2.syncfusion.com/angular/documentation/api/mention/#sortorder) property.

* `None` - The data source is not sorted.
* `Ascending` - The data source is sorted in ascending order.
* `Descending` - The data source is sorted in descending order.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/mention/getting-started-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/mention/getting-started-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/mention/getting-started-cs9" %}