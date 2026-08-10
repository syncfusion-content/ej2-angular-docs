---
layout: post
title: Open Editor Window Manually in Angular Scheduler | Syncfusion
description: Learn how to open the event editor manually in the Syncfusion Angular Scheduler on cell or event click, including on a single click.
platform: ej2-angular
control: Scheduler
documentation: ug
domainurl: ##DomainURL##
---

# Open Editor Window Programmatically in Angular Scheduler

## Open Editor Window externally

The [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) allows users to manually open the event editor at a specific time or in response to certain events by using the [`openEditor`](https://ej2.syncfusion.com/angular/documentation/api/schedule#openeditor) method, as shown below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs48/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs48/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs48" %}

## Open editor window on single click

By default, the Scheduler editor window opens when double-clicking cells or appointments. To open the editor window with a single click, use the [`openEditor`](https://ej2.syncfusion.com/angular/documentation/api/schedule#openeditor) method in [`eventClick`](https://ej2.syncfusion.com/angular/documentation/api/schedule#eventclick) and [`cellClick`](https://ej2.syncfusion.com/angular/documentation/api/schedule#cellclick) events handlers, and set the [`showQuickInfo`](https://ej2.syncfusion.com/angular/documentation/api/schedule#showquickinfo) property to `false`. The following example shows how to open editor window on single click of cells and appointments.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs49/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs49/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs49" %}
