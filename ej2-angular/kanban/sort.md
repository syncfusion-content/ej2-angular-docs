---
layout: post
title: Sort in Angular Kanban component | Syncfusion
description: Learn here all about Sort in Syncfusion Angular Kanban component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sort 
documentation: ug
domainurl: ##DomainURL##
---

# Sort in Angular Kanban component

The Kanban provides built-in support to arrange the cards in their columns based on the JSON data order and drop the cards in the columns based on the dropped clone. Initially, users can change the arrangement of cards in the columns and position of the dropped card by using the [`sortBy`](https://ej2.syncfusion.com/angular/documentation/api/kanban/sortSettingsModel/#sortby) property. The [`sortBy`](https://ej2.syncfusion.com/angular/documentation/api/kanban/sortSettingsModel/#sortby) property contains three enumeration values as follows.

* Index
* DataSourceOrder
* Custom

## Index

SortBy `Index` property can be used with or without [`field`](https://ej2.syncfusion.com/angular/documentation/api/kanban/sortSettingsModel/#field) mapping.

### Index without field mapping

By default, SortBy `Index` property support without any [`field`](https://ej2.syncfusion.com/angular/documentation/api/kanban/sortSettingsModel/#field) mapping. In this behavior, cards are loaded based on the JSON data order and cards are dropped based on the dropped clone.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/index-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/index-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/index-cs1" %}

### Index with field mapping

SortBy `Index` property also supports with [`field`](https://ej2.syncfusion.com/angular/documentation/api/kanban/sortSettingsModel/#field) mapping. In this behavior, cards are loaded based on mapping `field` values, and cards are dropped based on the dropped clone.

Cards are placed in a particular position in the columns where you can drop the cards by specifying the [`field`](https://ej2.syncfusion.com/angular/documentation/api/kanban/sortSettingsModel/#field) property, which is mapped from the data source. This property allows the users to drop the cards in the Kanban board where the dropped clone is created exactly. It is also helpful to render the cards based on the [`field`](https://ej2.syncfusion.com/angular/documentation/api/kanban/sortSettingsModel/#field) property value.

> The [`field`](https://ej2.syncfusion.com/angular/documentation/api/kanban/sortSettingsModel/#field) property mapping key value must be in `number` format.

The following cases will dynamically change their [`field`](https://ej2.syncfusion.com/angular/documentation/api/kanban/sortSettingsModel/#field) value when dropping the cards.

* If the cell has no cards, the dropped card [`field`](https://ej2.syncfusion.com/angular/documentation/api/kanban/sortSettingsModel/#field) value does not change.

* If the cell has one card and dropped a card to the last position or previous/next cards that do not have continuous order, then the dropped card [`field`](https://ej2.syncfusion.com/angular/documentation/api/kanban/sortSettingsModel/#field) value will be changed based on their previous card value.

* If the cell has one card and dropped a card on the previous position, then it will compare both the values, and the dropped card [`field`](https://ej2.syncfusion.com/angular/documentation/api/kanban/sortSettingsModel/#field) value will be changed if the cards have continuous order otherwise values will not be changed.

* When the previous and next cards do not have continuous order, the dropped card [`field`](https://ej2.syncfusion.com/angular/documentation/api/kanban/sortSettingsModel/#field) value will be changed based on the previous card value.

* When the previous and next cards have continuous order or odd/even value, then the [`field`](https://ej2.syncfusion.com/angular/documentation/api/kanban/sortSettingsModel/#field) value of the dropped card and the cards followed by the dropped card will be changed based on the **previous** card value with continuous order.

For Example,
**Continuous Order** -
Consider, Column A has Card A with priority value `1`, Card B with priority value `2`, and Card C with priority value `3`. and Column B has Card D with priority value `5`, then the dropped Card D will be placed between Card A and Card B. Now, the Cards D, B, and C will be dynamically changed to the priority values as `2, 3, and 4` respectively.

**Odd/Even order** -
Consider, Column A has Card A with priority value `1`, Card B with priority value `3`, and Card C with priority value `5`. and Column B has Card D with priority value `5`, then the Dropped Card D will be placed between Card A and Card B. Now, the Cards D, B, and C will be dynamically changed to the priority values as `2, 3, and 5` respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/index-field-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/index-field-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/index-field-cs1" %}

## DataSource Order

The SortBy `DataSourceOrder` property does not require any [`field`](https://ej2.syncfusion.com/angular/documentation/api/kanban/sortSettingsModel/#field) mapping. In this behavior, cards are loaded based on the JSON data order, and also cards are dropped based on the JSON data order.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/data-source-order-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/data-source-order-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/data-source-order-cs1" %}

## Custom

### Custom with field mapping

The SortBy `Custom` property must require datasource [`field`](https://ej2.syncfusion.com/angular/documentation/api/kanban/sortSettingsModel/#field) mapping. In this behavior, cards are loaded based on the [`field`](https://ej2.syncfusion.com/angular/documentation/api/kanban/sortSettingsModel/#field) mapping value and also cards are dropped based on the [`field`](https://ej2.syncfusion.com/angular/documentation/api/kanban/sortSettingsModel/#field) mapping value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/custom-mapping-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/custom-mapping-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/custom-mapping-cs1" %}

## Change the direction

Kanban board also provides support for aligning the cards in the columns using the [`direction`](https://ej2.syncfusion.com/angular/documentation/api/kanban/sortSettingsModel/#direction) property inside the [`sortSettings`](https://ej2.syncfusion.com/angular/documentation/api/kanban/#sortsettings) property. Based on this, cards can be aligned in the columns either in `Ascending` or `Descending` order. Sorting direction will be performed based on [`sortBy`](https://ej2.syncfusion.com/angular/documentation/api/kanban/sortSettingsModel/#sortby) property.

> By default, cards are aligned in the columns based on `Ascending` order.

In the following sample, cards are aligned in `Descending` order.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/sort-direction-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/sort-direction-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/sort-direction-cs1" %}
