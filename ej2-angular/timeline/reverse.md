---
layout: post
title: Reverse in Angular Timeline component | Syncfusion
description: Learn here all about Reverse in Syncfusion Angular Timeline component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Timeline
documentation: ug
domainurl: ##DomainURL##
---

# Reverse in Angular Timeline component

The Timeline component allows you to display items in revers order by setting the [reverse](../api/timeline/#reverse) property to `true`. This boolean property reverses the sequence of timeline items, making the most recent events appear first, which is particularly useful for activity feeds, news timelines, or any scenario where the latest information should be displayed.

When the reverse property is enabled, it works seamlessly with all alignment options (`Before`, `After`, `Alternate`, `AlternateReverse`) and orientations (`Horizontal`, `Vertical`).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/reverse/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/reverse/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/reverse/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/timeline/reverse/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/reverse" %}