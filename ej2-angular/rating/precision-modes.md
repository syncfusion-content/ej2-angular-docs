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

You can use the [`precision`](https://ej2.syncfusion.com/angular/documentation/api/rating#precision) property of the rating component to provide ratings with varying levels of precision.

The precision types of Rating are as follows:

* Full: The rating is increased in whole number increments. For example, if the current rating is 2, the next possible ratings are 3, 4, and so on.
* Half: The rating is increased in increments of 0.5 (half). For example, if the current rating is 2.5, the next possible ratings are 3, 3.5, 4, and so on.
* Quarter: The rating is increased in increments of 0.25 (quarter). For example, if the current rating is 3.75, the next possible ratings are 4, 4.25, 4.5, and so on.
* Exact: The rating is increased in increments of 0.1. For example, if the current rating is 3.9, the next possible ratings are 4, 4.1, 4.2, and so on.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/precision-modes-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/precision-modes-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/precision-modes-cs" %}
