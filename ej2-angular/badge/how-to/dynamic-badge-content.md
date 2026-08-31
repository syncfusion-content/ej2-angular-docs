---
layout: post
title: How to set dynamic badge content in Angular Badge | Syncfusion
description: Update Syncfusion Angular Badge content in real time using Angular data binding, with an increment button to change the badge value on click.
platform: ej2-angular
control: Dynamic badge content 
documentation: ug
domainurl: ##DomainURL##
---

# How to set dynamic badge content in Angular Badge

Badges in real-time need to be updated dynamically based on the requirements. In this sample, badges are rendered within a ListView template using Angular data binding, where the badge content is bound to a lookup object keyed by each list item's `text` field. Using Angular data binding, the badge content is updated dynamically. Click the increment button to increment all badge counts at once.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/badge/dynamic-badge-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/badge/dynamic-badge-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/badge/dynamic-badge-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/badge/dynamic-badge-cs2" %}
