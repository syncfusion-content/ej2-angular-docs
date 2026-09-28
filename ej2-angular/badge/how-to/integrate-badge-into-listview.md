---
layout: post
title: How to integrate badge into listview in Angular Badge | Syncfusion
description: Integrate Syncfusion Angular Badge into a ListView to indicate new notifications with color-coded priority and auto-sized indicators.
platform: ej2-angular
control: Integrate badge into listview 
documentation: ug
domainurl: ##DomainURL##
---

# How to integrate badge into listview in Angular Badge

The badges can be integrated with the `listview` component to indicate new notification with color based on priority.

In the following sample, `default` badges are used and there is no need to customize the badge size. The component will automatically adjust the size based on the container element.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/badge/listview-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/badge/listview-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/badge/listview-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/badge/listview-cs2" %}
