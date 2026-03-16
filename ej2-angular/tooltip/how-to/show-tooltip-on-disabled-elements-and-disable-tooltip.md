---
layout: post
title: Show Tooltip on disabled elements in Angular Tooltip component | Syncfusion
description: Learn here all about Show Tooltip on disabled elements and disable Tooltip in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip
documentation: ug
domainurl: ##DomainURL##
---

# Show Tooltip on disabled elements in Angular

By default, tooltips do not display on disabled elements. However, you can enable this behavior by following the steps below.

1. Add a disabled element, such as a `button`, inside a `div` with `display` style set to `inline-block`.
2. Set the pointer event to `none` for the disabled element (button) using CSS.
3. Initialize the tooltip for the outer `div` element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs10" %}
