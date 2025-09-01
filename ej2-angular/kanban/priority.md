---
layout: post
title: Priority in Angular Kanban Component | Syncfusion
description: Learn here all about Priority in Syncfusion Angular Kanban component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Priority
documentation: ug
domainurl: ##DomainURL##
---

# Priority in Angular Kanban Component

By default, the Kanban cards are initially placed and drop the card inside the columns based on JSON data orders.

Cards are placed in a particular position in the columns when you drop the cards by specifying the `priority` property, which is mapped from the datasource. This property allows the users to drop the cards in the Kanban board where exactly created on dropped clone. It is also helpful to render the cards based on the `priority` property value.

The following cases are dynamically changed their `priority` value when drop the cards.

* If the cell has no cards, the dropped card `priority` value does not change.

* If the cell has one card and dropped a card to last position or previous/next cards that do not have continuous order, then the dropped card `priority` value changed based on their previous card value.

* If the cell has one card and dropped a card on previous position, then compare both values and the dropped card `priority` value is changed if the cards have continuous order otherwise not changed their value.

* When the previous and next cards does not have continuous order, the dropped card `priority` value changed based on the previous card value.

* When previous and next cards have continuous order or odd/even value, then the dropped card followed by next all cards up to **continuous value** are dynamically changed their `priority` value based on the **previous** card value.

For Example,
**Continuous Order** -
Column A having Card A with priority value `1`, Card B with priority value `2` and Card C with priority value `3`.
Column B having Card D with priority value `5`. Dropped Card D between Card A and Card B. Now, Card D, B and C dynamically changed their priority value to `2, 3, 4`.

**Odd/Even order** -
Column A having Card A with priority value `1`, Card B with priority value `3` and Card C with priority value `5`.
Column B having Card D with priority value `5`. Dropped Card D between Card A and Card B. Now, Card D, B and C dynamically changed their priority value to `2, 3, 5`.

> The `priority` property mapping key value must be `number` format.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/priority-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/priority-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/priority-cs1" %}
