---
layout: post
title: Trace events of progress button in Angular Progress button component | Syncfusion
description: Learn here all about Trace events of progress button in Syncfusion Angular Progress button component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Trace events of progress button 
documentation: ug
domainurl: ##DomainURL##
---

# Trace events of progress button in Angular Progress button component

The ProgressButton component triggers events based on its actions. The events can be used as extension points to perform custom operations.

The events available in ProgressButton are [`fail`](https://ej2.syncfusion.com/angular/documentation/api/progress-button#fail), [`begin`](https://ej2.syncfusion.com/angular/documentation/api/progress-button#begin), [`progress`](https://ej2.syncfusion.com/angular/documentation/api/progress-button#progress), and [`end`](https://ej2.syncfusion.com/angular/documentation/api/progress-button#end).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progress-button/default-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/progress-button/default-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progress-button/default-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progress-button/default-cs7" %}
