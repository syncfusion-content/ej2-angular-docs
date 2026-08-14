---
layout: post
title: Customize progress using cssClass in Angular Progress Button | Syncfusion
description: Customize Angular Progress Button orientation and progress position by adding e-vertical, e-progress-top, or custom CSS classes.
platform: ej2-angular
control: Customize progress using cssclass 
documentation: ug
domainurl: ##DomainURL##
---

# How to customize progress using cssClass in Angular Progress Button

You can customize the background filler UI using the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/progress-button#cssClass) property.

* Adding `e-vertical` to `cssClass` shows vertical progress.
* Adding `e-progress-top` to `cssClass` shows progress at the top.

You can also show reverse progress by adding custom class to the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/progress-button#cssClass) property.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/progress-button/default-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progress-button/default-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progress-button/default-cs5" %}