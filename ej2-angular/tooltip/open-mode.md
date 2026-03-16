---
layout: post
title: Open mode in Angular Tooltip component | Syncfusion
description: Learn here all about Open mode in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip
documentation: ug
domainurl: ##DomainURL##
---

# Open mode in Angular Tooltip component

Control how the tooltip opens on the page—on hover, focus, or click—using the [`opensOn`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#openson) property on target elements.

> On mobile devices, Tooltips appear when you tap and hold the element, even if the `opensOn` option is assigned with `Hover`.
> Tooltips are also displayed as long as you continue to tap and hold the element. On release, it disappears after 1.5 seconds.
> If there is another action before that time ends, then the Tooltip disappears.

The `opensOn` property accepts either a single value or multiple values separated by a space. The table below explains how the tooltip opens on desktop and mobile based on the `opensOn` property value. By default, it is set to `Auto`.

| Values | Desktop | Mobile |
| ------------- | ------------- | ------------- |
| `Auto` | Tooltip appears on hover or focus. | Tooltip opens on tap and hold. |
| `Hover` | Tooltip appears on hover. | Tooltip opens on tap and hold. |
| `Click` | Tooltip appears on click. | Tooltip appears on single tap. |
| `Focus` | Tooltip appears on focus (e.g., through Tab key). | Tooltip appears on single tap. |
| `Custom` | Tooltip is not triggered by default. Bind your own events and use the `open` or `close` methods. | Same as Desktop. |

To open the tooltip on multiple actions (e.g., hover or click), assign the [`opensOn`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#openson) property with multiple space-separated values, such as `hover click`.

> The `Auto` value cannot be combined with other values.

The following code example demonstrates how to set the open mode for tooltips.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs11" %}

## Custom open mode

The `custom` mode allows the tooltip to appear on user-defined custom actions such as `right-click` or `double-click`. The tooltip is not triggered by any default action. Bind your own events and use the [`open`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#open) or [`close`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#close) methods to show or hide the tooltip.

The following code example demonstrates how to define custom open mode for the tooltip.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs12" %}

## Sticky mode

Enable sticky mode to keep the tooltip on the screen until you click the close icon. In this mode, the close icon appears in the top right corner of the tooltip. Enable or disable sticky mode using the [`isSticky`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#issticky) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs13" %}

## Open/Close Tooltip with delay

Delay tooltip opening or closing using the [`openDelay`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#opendelay) and [`closeDelay`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#closedelay) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs14" %}
