---
layout: post
title: How to enable Tab key navigation in Angular Tab | Syncfusion
description: Enable Angular Tab and Shift+Tab navigation between Tab items by assigning positive tabIndex values to each item.
platform: ej2-angular
control: Tab 
documentation: ug
domainurl: ##DomainURL##
---

# How to enable Tab key navigation in Angular Tab

The [`tabIndex`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItemDirective/#tabindex) property of a Tab item enables Tab key navigation between specific items. When a positive value is assigned, users can switch focus to the next or previous tab item using **Tab** or **Shift+Tab**. By default, users can only switch between tab items using **arrow keys**.

## Behavior by value

| `tabIndex` value | Behavior |
|------------------|----------|
| `0` | Tab navigation follows document order. |
| Positive integer (e.g., `1`, `2`) | Tab navigation follows the numeric order of `tabIndex` values, regardless of DOM order. |
| `-1` (or omitted) | The Tab item is removed from the Tab key tab order; arrow key navigation still works. |

> Arrow-key navigation between tab items is always available regardless of the `tabIndex` property value.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/tab-key-navigation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/tab-key-navigation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/tab-key-navigation-cs1" %}

With this configuration, users can switch between tab items using the Tab and Shift+Tab keys in the order specified by the `tabIndex` values. The `tabIndex` property specifically controls Tab key navigation behavior.

## See also

* For keyboard access into the content panels, see [Accessibility](../accessibility).
* For broader keyboard handling on the Tab header, see [Responsive Modes](../adaptive).