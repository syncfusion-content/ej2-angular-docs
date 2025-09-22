---
layout: post
title: Expand mode in Angular Accordion component | Syncfusion
description: Learn here all about Expand mode in Syncfusion Angular Accordion component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accordion 
documentation: ug
domainurl: ##DomainURL##
---

# Expand mode in Angular Accordion component

The Accordion supports the two listed types of [`expandmode`](https://ej2.syncfusion.com/angular/documentation/api/accordion/#expandmode) while expanding or collapsing the item.

* Single
* Multiple

## Single

The `Single` expand mode allows only one Accordion item to be expanded at a time. When a new item is expanded, the previously expanded item collapses, and the new item enters the expanded state.

You can set an item to be expanded on initial rendering by enabling the [`expanded`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionItemModel/#expanded) property on an Accordion item.

This sample demonstrates the Accordion in `Single` mode, where only one item is expanded at a time.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/accordion/accordion-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/accordion/accordion-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/accordion/accordion-cs2" %}

## Multiple

The default [`expandMode`](https://ej2.syncfusion.com/angular/documentation/api/accordion/#expandmode) of the Accordion is `Multiple`. This mode allows multiple items to be expanded simultaneously. Clicking an expanded item toggles it to collapse, without affecting other expanded items.
For large datasets in `Multiple` mode, consider performance optimization techniques, such as enabling virtualization, to ensure smooth rendering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/accordion/accordion-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/accordion/accordion-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/accordion/accordion-cs3" %}

## See Also

* [How to keep single pane open always](./how-to/to-keep-single-pane-open-always)