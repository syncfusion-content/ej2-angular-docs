---
layout: post
title: Search Cards in Angular Kanban Component | Syncfusion
description: Learn how to search cards in the Syncfusion Angular Kanban component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Search cards
documentation: ug
domainurl: ##DomainURL##
---

# Search Cards in Angular Kanban Component

The Kanban component enables searching cards in the `dataSource`. You can search the cards in Kanban by using the [query](https://ej2.syncfusion.com/angular/documentation/api/kanban/#query) property.

In the following sample, the searching operation starts as soon as you start typing characters in the external text box. It will search the cards based on the `Id` and `Summary` using the `search` query with `contains` operator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/search-cards-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/search-cards-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/search-cards-cs1" %}