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

The Timeline component allows you to control the positioning of content using the [align](../api/timeline/#align) property, which accepts values `Before`, `After`, `Alternate`, or `AlternateReverse`. When items include both content and oppositeContent properties, the oppositeContent displays parallel to the main content, creating a balanced layout on opposite sides of the timeline.

## Before

The [Before](../api/timeline/timelineAlign/) alignment positions content strategically based on orientation. For `horizontal` orientation, the main content appears at the top with oppositeContent at the bottom. For `vertical` orientation, content is positioned on the left side while oppositeContent appears on the right side.

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

The [After](../api/timeline/timelineAlign/) alignment reverses the content positioning compared to Before alignment. For `horizontal` orientation, the main content is placed at the bottom with oppositeContent at the top. For `vertical` orientation, content appears on the right side while oppositeContent is positioned on the left side.

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

The [Alternate](../api/timeline/timelineAlign/) alignment creates a dynamic zigzag pattern where timeline items switch positions alternately. This arrangement provides visual variety and works effectively for showcasing parallel events or comparisons, regardless of whether the Timeline orientation is horizontal or vertical.

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

The [AlternateReverse](../api/timeline/timelineAlign/) alignment creates the opposite pattern of Alternate alignment, where timeline items are arranged in reverse alternating order. This provides another visual variation for displaying data with an inverted alternating pattern, maintaining effectiveness across both Timeline orientations.

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