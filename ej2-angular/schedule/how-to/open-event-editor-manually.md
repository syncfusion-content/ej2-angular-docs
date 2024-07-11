---
layout: post
title: Open event editor manually in Angular Schedule component | Syncfusion
description: Learn here all about Open event editor manually in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Open event editor manually 
documentation: ug
domainurl: ##DomainURL##
---

# Open event editor manually in Angular Schedule component

## Open Editor Window externally

Schedule allows user to manually open the event editor on specific time or on certain events using [`openEditor`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#openeditor) method as shown below.

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

By default, Scheduler Editor window will open when double clicking the cells or appointments. You can also open the editor window with single click by using [`openEditor`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#openeditor) method in [`eventClick`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#eventclick) and [`cellClick`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#cellclick) events of scheduler and setting `false` to [`showQuickInfo`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#showquickinfo). The following example shows how to open editor window on single click of cells and appointments.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs49/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs49/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs49" %}
