---
layout: post
title: Reverse Timeline in Angular Timeline | Syncfusion
description: Show Syncfusion Angular Timeline items from newest to oldest by setting the reverse property to true for reverse feeds and activity streams.
platform: ej2-angular
control: Timeline
documentation: ug
domainurl: ##DomainURL##
---

# Reverse Timeline in Angular Timeline

The Timeline component allows you to display items in reverse order by setting the [reverse](../api/timeline#reverse) property to `true`. This boolean property reverses the sequence of timeline items, making the most recent events appear first. This feature is especially useful for reverse timelines, activity feeds, news timelines, or any scenario where the latest information should be displayed.

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