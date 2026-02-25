---
layout: post
title: Show tooltip on disabled elements and disable tooltip in Angular Tooltip component | Syncfusion
description: Learn here all about Show tooltip on disabled elements and disable tooltip in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Show tooltip on disabled elements and disable tooltip 
documentation: ug
domainurl: ##DomainURL##
---

# Show tooltip on disabled elements and disable tooltip in Angular Tooltip component

By default, tooltips do not display on disabled elements. Enable this behavior by following these steps:

1. Wrap the disabled element (e.g., `button`) in a div with `display: inline-block`.
2. Set the pointer event to `none` for the disabled element using CSS.
3. Initialize the Tooltip on the outer div element that wraps the disabled button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs29/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs29/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs29" %}
