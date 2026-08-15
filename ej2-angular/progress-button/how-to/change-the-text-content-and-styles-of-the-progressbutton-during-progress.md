---
layout: post
title: Change text content and styles during progress in Angular Progress Button | Syncfusion
description: Update Angular Progress Button text and styles during progress using the cssClass property on begin and end events.
platform: ej2-angular
control: Change the text content and styles of the progressbutton during progress 
documentation: ug
domainurl: ##DomainURL##
---

# How to change text content and styles during progress in Angular Progress Button

You can change the text content and styles of the ProgressButton during progress by changing the text content and the  [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/progress-button/#cssClass) property at the [`begin`](https://ej2.syncfusion.com/angular/documentation/api/progress-button/#begin) and [`end`](https://ej2.syncfusion.com/angular/documentation/api/progress-button/#end) events.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/progress-button/default-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progress-button/default-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progress-button/default-cs4" %}