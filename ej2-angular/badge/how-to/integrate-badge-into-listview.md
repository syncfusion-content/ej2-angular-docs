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

The badges can be integrated with the `listview` component to indicate new notifications with color-based priority.

In the following sample, badges are rendered inside the ListView item template, where the badge class is bound from the data-source's `badge` field and the badge content from the `messages` field. Predefined badge color classes such as `e-badge-primary`, `e-badge-secondary`, `e-badge-success`, `e-badge-info`, `e-badge-danger`, and `e-badge-warning` are applied per item to indicate priority. `default` badges are used, so there is no need to customize the badge size — the badge component automatically adjusts its size based on its content.

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
