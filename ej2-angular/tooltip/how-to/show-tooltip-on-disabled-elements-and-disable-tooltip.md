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

By default, Tooltips will not be displayed on disabled elements. However, it is possible to enable this behavior by following the steps below.
1. Add a disabled element like the `button` element into a div whose display style is set to `inline-block`.
2. Set the pointer event as `none` for the disabled element (button) through CSS.
3. Now, initialize the Tooltip for outer div element that holds the disabled button element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tooltip/getting-started-cs10/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs10" %}
