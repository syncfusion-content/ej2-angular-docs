---
layout: post
title: Open mode in Angular Tooltip component | Syncfusion
description: Learn here all about Open mode in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Open mode 
documentation: ug
domainurl: ##DomainURL##
---

# Open mode in Angular Tooltip component

Control how the tooltip opens on the page—on hover, focus, or click—on target elements.

> On mobile devices, Tooltips appear when you tap and hold the element, even if the `opensOn` option is assigned with `Hover`.
> Tooltips are also displayed as long as you continue to tap and hold the element. On lift, it  disappears in the next 1.5 seconds.
> If there is another action before that time ends, then the Tooltip disappears.

The `opensOn` property accepts either a single value or multiple values separated by a space. The table below explains how the tooltip opens on desktop and mobile based on the `opensOn` property value. By default, it is set to `Auto`.

| Values | Desktop | Mobile |
| ------------- | ------------- | ------------- |
| `Auto` | Tooltip appears on hover or focus. | Tooltip opens on tap and hold. |
| `Hover` | Tooltip appears on hover. | Tooltip opens on tap and hold. |
| `Click` | Tooltip appears on click. | Tooltip appears on single tap. |
| `Focus` | Tooltip appears on focus (e.g., through Tab key). | Tooltip appears on single tap. |
| `Custom` | Tooltip is not triggered by default. Bind your own events and use the `open` or `close` methods. | Same as Desktop. |

To open the tooltip on multiple actions (e.g., hover or click), assign the `opensOn` property with multiple space-separated values, such as `hover click`.

> The `Auto` value cannot be combined with other values.

The following code example demonstrates how to set the open mode for tooltips.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs30/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs30/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs30" %}

## Custom open mode

The `custom` mode allows the tooltip to appear on user-defined custom actions such as `right-click` or `double-click`. The tooltip is not triggered by any default action. Bind your own events and use the `open` or `close` methods to show or hide the tooltip.

The following code example demonstrates how to define custom open mode for the tooltip.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs31/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs31/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs31" %}

## Sticky mode

With this mode set to `true`, Tooltips can be made to show up on the screen as long as the close icon is pressed. In this mode, close icon is attached to the Tooltip located at the top right corner. This mode can be enabled or disabled using the `isSticky` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs32/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs32/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs32" %}

## Open/Close Tooltip with delay

The Tooltips can be opened or closed after some delay by using the `openDelay` and `closeDelay` properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs33/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs33/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs33" %}
