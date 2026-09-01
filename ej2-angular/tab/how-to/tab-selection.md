---
layout: post
title: How to detect tab selection in Angular Tab | Syncfusion
description: Detect whether Angular Tab selection came from a user click or programmatic call via the isInteracted field in selecting and selected events.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# How to detect tab selection in Angular Tab

Use the [`selecting`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel/#selecting) and [`selected`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel/#selected) events to detect whether a tab was selected by user interaction or programmatically. Both events include an `isInteracted` flag on the event arguments.

## Event arguments

* **`TabSelectEventArgs`** (used by `selecting`): contains the new (target) index, the previous (current) index, and the `isInteracted` flag.
* **`TabSelectedEventArgs`** (used by `selected`): contains the selected index, the previously selected index, and the `isInteracted` flag.

## `isInteracted` values

| Trigger | `isInteracted` |
|---------|----------------|
| User clicks a Tab header or uses keyboard / swipe | `true` |
| Programmatic calls such as `select(index)`, `enableTab` or `disable` | `false` |

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/animation-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/animation-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/animation-cs2" %}

## See Also

* [Customize tab content height](./customize-tab-content-height)
* [Accessibility](../accessibility)