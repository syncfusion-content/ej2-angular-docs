---
layout: post
title: Alignment in Angular Timeline component | Syncfusion
description: Learn here all about Alignment in Syncfusion Angular Timeline component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Timeline
documentation: ug
domainurl: ##DomainURL##
---

# Alignment in Angular Timeline component

You can display the Timeline content `Before`, `After`, `Alternate` or `AlternateReverse` by using the [align](../api/timeline#align) property. The oppositeContent will be displayed parallel to the content when configured.

## Before

In [Before](../api/timeline/timelineAlign) alignment, for `horizontal` orientation, the item content is placed at the top and oppositeContent at the bottom. For `vertical` orientation, the content is placed to the left and oppositeContent to the right.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/align/before/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/align/before/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/align/before/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/timeline/align/before/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/align/before" %}

## After

In [After](../api/timeline/timelineAlign) alignment, for `horizontal` orientation, the item content is placed at the bottom and oppositeContent at the top. For `vertical` orientation, the content is placed to the right and oppositeContent to the left.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/align/after/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/align/after/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/align/after/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/timeline/align/after/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/align/after" %}

## Alternate

In [Alternate](../api/timeline/timelineAlign) alignment, the item content is arranged alternately regardless of the Timeline orientation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/align/alternate/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/align/alternate/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/align/alternate/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/timeline/align/alternate/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/align/alternate" %}

## Alternate reverse

In [AlternateReverse](../api/timeline/timelineAlign) alignment, the item content is arranged in reverse alternating order regardless of the Timeline orientation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/align/alternate-reverse/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/align/alternate-reverse/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/align/alternate-reverse/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/timeline/align/alternate-reverse/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/align/alternate-reverse" %}