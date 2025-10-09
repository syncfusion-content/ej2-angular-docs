---
layout: post
title: Open event editor manually in Angular Schedule component | Syncfusion
description: Learn here all about Open event editor manually in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Scheduler
documentation: ug
domainurl: ##DomainURL##
---

# Open event editor manually in Angular Schedule component

## Open Editor Window externally

The Schedule component allows users to manually open the event editor at a specific time or in response to certain events by using the [`openEditor`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#openeditor) method, as shown below.

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

By default, the Scheduler editor window opens when double-clicking cells or appointments. To open the editor window with a single click, use the [`openEditor`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#openeditor) method in [`eventClick`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#eventclick) and [`cellClick`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#cellclick) events handlers, and set the [`showQuickInfo`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#showquickinfo) property to `false`. The following example shows how to open editor window on single click of cells and appointments.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs49/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs49/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs49" %}
