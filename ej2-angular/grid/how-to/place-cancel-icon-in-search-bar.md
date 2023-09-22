---
layout: post
title: Place cancel icon in search bar in Angular Grid component | Syncfusion
description: Learn here all about Place cancel icon in search bar in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Place cancel icon in search bar 
documentation: ug
domainurl: ##DomainURL##
---

# Place cancel icon in search bar in Angular Grid component

By default, the search bar in the grid doesn't have a **cancel** icon. If you want to add the cancel icon you can achieve it by invoking [`created`](https://ej2.syncfusion.com/javascript/documentation/api/grid/#created) event. In the event, the cancel icon is rendered on the span element and append to the search bar. If the cancel icon is pressed, the records in the search bar will be cleared using click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/print-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/print-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/print-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/print-cs1" %}
