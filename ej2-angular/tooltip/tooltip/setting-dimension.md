---
layout: post
title: Setting dimension in Angular Tooltip component | Syncfusion
description: Learn here all about Setting dimension in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Setting dimension 
documentation: ug
domainurl: ##DomainURL##
---

# Setting dimension in Angular Tooltip component

## Height and width

The Tooltip can either be assigned auto height and width values or specific pixel values. The `width` and `height` properties are used to  set the outer dimension of the Tooltip element. The default value for both the properties is `auto`.
It also accepts string and number values in pixels.

The following sample explains how to set dimensions for the Tooltip.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-002-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tooltip/getting-started-002-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-002-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-002-cs2" %}

### Scroll mode

When `height` is specified with a certain pixel value and the Tooltip content overflows, the scrolling mode gets enabled.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs39/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tooltip/getting-started-cs39/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs39/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs39" %}

> The scrolling mode can best be seen when the sticky mode of the Tooltip is enabled. To enable sticky mode, set the `isSticky` property to true.
