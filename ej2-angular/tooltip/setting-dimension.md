---
layout: post
title: Setting dimension in Angular Tooltip component | Syncfusion
description: Learn here all about Setting dimension in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip
documentation: ug
domainurl: ##DomainURL##
---

# Setting dimension in Angular Tooltip component

## Height and width

Set the tooltip to auto or specific pixel values for height and width. The [`width`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#height) properties set the outer dimensions of the tooltip element. Both properties default to `auto` and accept string and number values in pixels.

The following sample demonstrates setting tooltip dimensions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-002-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-002-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-002-cs1" %}

### Scroll mode

When [`height`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#height) is specified with a certain pixel value and the Tooltip content overflows, the scrolling mode is enabled.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs20/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs20" %}

> The scrolling mode can best be seen when the sticky mode of the Tooltip is enabled. To enable sticky mode, set the [`isSticky`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#issticky) property to `true`.
