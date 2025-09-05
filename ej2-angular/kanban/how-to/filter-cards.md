---
layout: post
title: Filter Cards in Syncfusion Angular Kanban Component | Syncfusion
description: Learn how to filter cards in the Syncfusion Angular Kanban component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filter cards
documentation: ug
domainurl: ##DomainURL##
---

# Filter Cards in Angular Kanban Component

You can filter the collection of cards from the dataSource and display it on the Kanban board by using the [query](https://ej2.syncfusion.com/angular/documentation/api/kanban/#query) property.

In the below sample, you can filter the cards based on the `where` query and display the filtered data to the Kanban board.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/filter-cards-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/filter-cards-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/filter-cards-cs1" %}