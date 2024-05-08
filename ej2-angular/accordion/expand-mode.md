---
layout: post
title: Expand mode in Angular Accordion component | Syncfusion
description: Learn here all about Expand mode in Syncfusion Angular Accordion component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Expand mode 
documentation: ug
domainurl: ##DomainURL##
---

# Expand mode in Angular Accordion component

The Accordion supports the two listed types of expand modes while expanding or collapsing the item.

* Single
* Multiple

## Single

The property enables to expand only one Accordion item at a time. If you expand any new item, the previously expanded one is collapsed and new item changed to expanded state.

You can also choose which accordion pane is expanded state at initial rendering by enabling the [`expanded`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionItemModel#expanded) property on accordion items.

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

Default [`expandMode`](https://ej2.syncfusion.com/angular/documentation/api/accordion#expandmode) of the Accordion is `Multiple`. It enables you to expand more than one Accordion item at a time. Expand/collapse action can also be toggled by clicking on it again. For example, expanded item is collapsed when you click on it again.

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

* [How to keep single pane open always](./how-to/to-keep-single-pane-open-always/)