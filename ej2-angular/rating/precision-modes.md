---
layout: post
title: Precision Modes with Angular Rating component | Syncfusion
description:  Learn here all about Precision Modes with Angular Rating component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Precision Modes
documentation: ug
domainurl: ##DomainURL##
---

# Precision Modes in Angular Rating Component

The [`precision`](https://ej2.syncfusion.com/angular/documentation/api/rating#precision) property allows you to control the granularity at which users can rate. Choose from the following precision modes:

* **Full**: Ratings increment by 1.0 (whole numbers only). Example: 1, 2, 3, 4, 5.
* **Half**: Ratings increment by 0.5 (half-step precision). Example: 1, 1.5, 2, 2.5, 3.
* **Quarter**: Ratings increment by 0.25 (quarter-step precision). Example: 1, 1.25, 1.5, 1.75, 2.
* **Exact**: Ratings increment by 0.1 (fine-grain precision). Example: 1, 1.1, 1.2, 1.3, 1.4.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/precision-modes-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/precision-modes-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/precision-modes-cs" %}
