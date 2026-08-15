---
layout: post
title: Show Tooltip on disabled elements in Angular Tooltip | Syncfusion
description: Show the Syncfusion Angular Tooltip on a disabled HTML element by wrapping it in an inline-block div and attaching the tooltip to that wrapper.
platform: ej2-angular
control: Tooltip
documentation: ug
domainurl: ##DomainURL##
---

# How to show Tooltip on disabled elements in Angular Tooltip

By default, tooltips do not display on disabled elements. However, you can enable this behavior by following the steps below.

1. Add a disabled element, such as a `button`, inside a `div` with `display` style set to `inline-block`.
2. Set the pointer event to `none` for the disabled element (button) using CSS.
3. Initialize the tooltip for the outer `div` element.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tooltip/getting-started-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs10" %}
